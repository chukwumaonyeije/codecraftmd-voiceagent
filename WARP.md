# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Voice-driven medical coding demo for Maternal-Fetal Medicine (MFM). This is a demonstration application that showcases AI-powered medical coding through voice dictation. The project has two phases:
- **Phase 1 (index.html)**: Self-contained demo with keyword-based logic, no backend required
- **Phase 2 (index-smart.html)**: AI-powered demo using OpenAI API via Vercel serverless functions

## Development Commands

### Setup
```bash
# Install dependencies (required for Phase 2)
npm install

# Configure environment for AI features
# Copy .env.example to .env and add your OPENAI_API_KEY
```

### Local Development
```bash
# Run Phase 2 with Vercel dev server (includes serverless API)
npm run dev
# Access Phase 1 at: http://localhost:3000/index.html
# Access Phase 2 at: http://localhost:3000/index-smart.html

# Phase 1 can also run directly by opening index.html in a browser (no server needed)
```

### Deployment
```bash
# Deploy to Vercel production
npm run deploy

# Note: Set OPENAI_API_KEY in Vercel dashboard under Settings > Environment Variables
```

## Architecture

### Two-Phase Architecture
1. **Phase 1 (index.html)**: Client-side only, keyword matching for demo purposes
2. **Phase 2 (index-smart.html)**: Client-side UI + serverless API for real AI analysis

### Key Components

**Frontend** (Both HTML files are self-contained single-file applications):
- Embedded CSS using CSS variables for theming
- Web Speech API integration for voice dictation (Chrome/Edge only)
- Random case generator with 3 pre-loaded MFM scenarios
- Complexity scoring visualization (Low/Med/High)
- Responsive grid layout

**Backend** (Phase 2 only):
- `api/analyze.js`: Vercel serverless function that wraps OpenAI API
- Accepts POST requests with clinical text
- Returns structured JSON: CPT codes, ICD-10 codes, complexity level, reasoning
- Uses GPT-4o-mini model with MFM-specific system prompt
- Includes CORS headers for demo purposes

### Medical Coding Specifics
The AI prompt in `api/analyze.js` handles MFM-specific scenarios:
- Twin pregnancies requiring separate ultrasound codes (76825/76826)
- Pregnancy trimester precision
- Distinction between chronic and gestational conditions
- E/M complexity based on risk assessment

## Environment Variables

| Variable | Required | Default | Usage |
|----------|----------|---------|-------|
| `OPENAI_API_KEY` | Yes (Phase 2 only) | - | OpenAI API authentication |
| `OPENAI_MODEL` | No | `gpt-4o-mini` | AI model selection |

## Important Notes

### Browser Compatibility
- Voice dictation only works in Chrome and Edge (Web Speech API limitation)
- All other features work in Firefox, Safari, and other modern browsers

### Deployment Platform
- Designed for Vercel deployment (uses Vercel serverless functions)
- Converting to other platforms requires adapting `api/analyze.js` to that platform's function format

### Security Considerations
- API uses open CORS (`*`) for demo purposes - restrict for production
- No rate limiting implemented - add for production use
- No data persistence - all processing is ephemeral by design

### File Structure
Both HTML files are entirely self-contained:
- All JavaScript logic is embedded in `<script>` tags
- All CSS is embedded in `<style>` tags
- No external dependencies beyond Font Awesome CDN and OpenAI library (for backend)

### Testing
No automated test suite exists. Manual testing checklist:
1. Test random case loading
2. Verify voice dictation in Chrome/Edge
3. Test "Analyze & Code" button with various clinical scenarios
4. Verify complexity scoring displays correctly
5. Check browser console for API errors (Phase 2)
6. Test feedback buttons functionality
