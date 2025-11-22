# CodeCraftMD Voice Agent Demo

Voice-driven medical coding demonstration for Maternal-Fetal Medicine (MFM) practitioners. This interactive prototype showcases how voice dictation can streamline complex medical coding workflows.

## 🎯 Project Overview

This project implements the PRD 2.0 specifications for a voice-interactive demo designed to:
- Demonstrate speed and accuracy of voice-driven coding for high-complexity MFM cases
- Eliminate "stage fright" with a "Roll the Dice" random case feature
- Show MFM-specific complexity handling (twin gestations, chronic vs. gestational conditions)
- Provide visual complexity scoring to simulate E/M level calculations

## 📁 Project Structure

```
codecraftmd-voiceagent/
├── index.html              # Phase 1: Self-contained demo (keyword-based logic)
├── index-smart.html        # Phase 2: AI-powered demo (uses OpenAI API)
├── api/
│   └── analyze.js          # Serverless function for AI analysis
├── package.json            # Dependencies and scripts
├── vercel.json             # Vercel deployment configuration
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## 🚀 Quick Start

### Phase 1: Self-Contained Demo (No Setup Required)

The simplest way to get started:

1. **Open `index.html` directly in your browser**
   - Works offline
   - Uses client-side JavaScript for keyword-based logic
   - No API keys or backend required

2. **Try the features:**
   - Click "Load Random Case" to see pre-loaded MFM scenarios
   - Click the microphone icon to dictate (Chrome/Edge only)
   - Click "Analyze & Code" to see simulated coding results

### Phase 2: AI-Powered Demo

For the full AI experience with real OpenAI analysis:

#### Prerequisites
- Node.js 18+ installed
- OpenAI API key ([get one here](https://platform.openai.com/api-keys))
- Vercel CLI (optional, for local development)

#### Local Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit .env and add your OpenAI API key
   # OPENAI_API_KEY=sk-your-api-key-here
   ```

3. **Run locally with Vercel Dev:**
   ```bash
   # Install Vercel CLI if you haven't
   npm install -g vercel
   
   # Start the dev server
   npm run dev
   ```

4. **Open the smart demo:**
   - Navigate to `http://localhost:3000/index-smart.html`
   - The demo will now use real AI for medical coding analysis

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Set environment variables in Vercel:**
   - Go to your project dashboard at vercel.com
   - Navigate to Settings > Environment Variables
   - Add `OPENAI_API_KEY` with your API key
   - Redeploy for changes to take effect

### Deploy to Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **For Phase 1 (static demo only):**
   ```bash
   netlify deploy --prod
   ```

3. **For Phase 2:**
   - Netlify requires converting the Vercel function to Netlify Functions format
   - Alternative: Use Vercel for Phase 2, Netlify for Phase 1

## 🎨 Features

### Voice Recognition
- Uses Web Speech API (Chrome/Edge browsers)
- Continuous dictation with append mode
- Visual feedback during recording

### Random Case Generator
- Pre-loaded with 3 distinct MFM scenarios:
  - Dichorionic diamniotic twins with discordant growth
  - Severe preeclampsia requiring admission
  - Postpartum hypertension management

### Complexity Scoring
- Visual meter showing Low/Med/High complexity
- Simulates E/M level calculation based on:
  - Risk factors (multiple gestation, preeclampsia)
  - Medical decision making
  - Management complexity

### AI Analysis (Phase 2 Only)
- GPT-4o-mini powered medical coding
- MFM-specific training prompt
- Returns:
  - CPT codes with descriptions
  - ICD-10 codes with descriptions
  - Complexity level
  - Clinical reasoning for code selection

## 🔧 Configuration

### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `OPENAI_API_KEY` | Yes (Phase 2) | - | Your OpenAI API key |
| `OPENAI_MODEL` | No | `gpt-4o-mini` | OpenAI model to use |

### Customization

#### Adding More Random Cases
Edit the `cases` array in the HTML files:

```javascript
const cases = [
  "Your custom clinical scenario here...",
  "Another scenario...",
  // Add more...
];
```

#### Modifying the AI Prompt
Edit `SYSTEM_PROMPT` in `api/analyze.js`:

```javascript
const SYSTEM_PROMPT = `You are an expert medical coder...
// Customize the prompt here
`;
```

#### Styling
All CSS is embedded in the HTML files. Look for the `<style>` section to customize:
- Color scheme (CSS variables at the top)
- Layout and spacing
- Button styles
- Animations

## 🧪 Testing

### Phase 1 Testing
1. Open `index.html` in a browser
2. Test each random case
3. Try voice dictation (Chrome/Edge only)
4. Verify complexity scoring
5. Test feedback buttons

### Phase 2 Testing
1. Ensure API key is configured
2. Start local dev server: `npm run dev`
3. Open `http://localhost:3000/index-smart.html`
4. Test with various clinical scenarios
5. Check browser console for any API errors
6. Verify AI responses are accurate

### Browser Compatibility

| Feature | Chrome | Edge | Firefox | Safari |
|---------|--------|------|---------|--------|
| Voice API | ✅ | ✅ | ❌ | ❌ |
| UI/Styling | ✅ | ✅ | ✅ | ✅ |
| AI Analysis | ✅ | ✅ | ✅ | ✅ |

**Note:** Voice dictation only works in Chrome and Edge. Other browsers can still use text input.

## 📊 Success Metrics (from PRD)

- **User Engagement:** >30 seconds interaction time
- **Conversion Goal:** Click "Explore Full Engine" CTA
- **Target Audience:** OB/GYNs and MFMs

## 🔒 Security Notes

- **API Keys:** Never commit `.env` files to version control
- **CORS:** API endpoint is configured with open CORS for demo purposes
- **Rate Limiting:** Consider adding rate limiting for production use
- **Data Privacy:** No patient data is stored; all processing is ephemeral

## 🐛 Troubleshooting

### Voice recognition not working
- **Solution:** Use Chrome or Edge browser
- Check browser permissions for microphone access

### API errors in Phase 2
- Verify `OPENAI_API_KEY` is set correctly in `.env`
- Check OpenAI account has credits/active subscription
- Review browser console for detailed error messages

### Deployment issues on Vercel
- Ensure environment variables are set in Vercel dashboard
- Check build logs for any errors
- Verify Node.js version compatibility (18+)

### Styling looks broken
- Clear browser cache
- Verify Font Awesome CDN is loading
- Check browser console for CSS errors

## 🎯 Next Steps

### Phase 3 Considerations (Not Implemented)
- User authentication
- Save/export coding results
- Integration with EMR systems
- Batch processing multiple cases
- Historical case analysis
- Advanced modifiers and billing rules

## 📝 License

MIT License - See package.json for details

## 👥 Contributing

This is a demo project for CodeCraftMD. For questions or feedback, contact the project maintainer.

## 🔗 Related Resources

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Vercel Documentation](https://vercel.com/docs)
- [CPT Code Reference](https://www.ama-assn.org/practice-management/cpt)
- [ICD-10 Code Reference](https://www.cms.gov/medicare/coding-billing/icd-10-codes)

---

**Built with ❤️ for better medical coding**
