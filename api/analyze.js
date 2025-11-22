import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System prompt for MFM-specific medical coding
const SYSTEM_PROMPT = `You are an expert medical coder specializing in Maternal-Fetal Medicine (MFM) and OB/GYN billing.

Your task is to analyze clinical narratives and extract:
1. Appropriate CPT codes with descriptions
2. Relevant ICD-10 codes with descriptions
3. Complexity level (Low, Med, High) based on medical decision making
4. Clinical reasoning explaining your choices

Key considerations:
- Twin pregnancies often require separate ultrasound coding (76825/76826)
- Be precise about pregnancy trimesters and complications
- Distinguish between chronic conditions and pregnancy-related conditions
- Consider E/M complexity based on risk, data reviewed, and management options
- Account for modifiers when appropriate (e.g., twin gestations)

Return your response as a JSON object with this structure:
{
  "cpt": [{ "code": "99214", "desc": "Office Visit, Established Patient" }],
  "icd": [{ "code": "O24.410", "desc": "Gestational diabetes mellitus" }],
  "complexity": "Med",
  "reasoning": "Explanation of coding choices and complexity rationale"
}`;

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { text } = req.body;

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid "text" field in request body' });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured' });
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: `Analyze this clinical case and provide CPT/ICD-10 codes:\n\n${text}` }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3,
      max_tokens: 1000,
    });

    const result = JSON.parse(completion.choices[0].message.content);

    // Validate response structure
    if (!result.cpt || !result.icd || !result.complexity || !result.reasoning) {
      throw new Error('Invalid response structure from AI');
    }

    return res.status(200).json(result);

  } catch (error) {
    console.error('Error in analyze endpoint:', error);
    
    // Return specific error details for debugging
    return res.status(500).json({ 
      error: 'Failed to analyze case',
      details: error.message,
      // Fallback response for demo purposes
      fallback: {
        cpt: [{ code: "99213", desc: "Office Visit, Established (Low Complexity)" }],
        icd: [{ code: "Z34.90", desc: "Encounter for supervision of normal pregnancy" }],
        complexity: "Low",
        reasoning: "Error occurred during AI analysis. This is a fallback response. Please check your API configuration."
      }
    });
  }
}
