# ⚡ Quick Start - Test Right Now!

## 🎯 Try Phase 1 Immediately (No Setup)

### Windows
1. Open File Explorer
2. Navigate to: `C:\Users\onyei\Projects\codecraftmd-voiceagent`
3. Double-click `index.html`
4. Your browser will open the demo!

### What to Try:
1. **Click "Load Random Case"** - See pre-loaded MFM scenarios
2. **Click the Microphone** - Dictate a case (Chrome/Edge only)
3. **Click "Analyze & Code"** - See the coding magic happen
4. **Try the Feedback Buttons** - See the conversion hooks in action

**That's it!** No installation, no API keys, nothing. Just open and use. ✨

---

## 🤖 Want AI Power? (5 Minute Setup)

### Step 1: Get OpenAI API Key
1. Go to: https://platform.openai.com/api-keys
2. Sign up/login
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)

### Step 2: Install & Configure
```powershell
# Open PowerShell in this directory
cd C:\Users\onyei\Projects\codecraftmd-voiceagent

# Install Node packages
npm install

# Create .env file
copy .env.example .env

# Edit .env in Notepad
notepad .env
# Add your key: OPENAI_API_KEY=sk-your-actual-key-here
```

### Step 3: Run It
```powershell
# Install Vercel CLI (one-time)
npm install -g vercel

# Start the server
vercel dev
```

### Step 4: Test
Open Chrome/Edge and go to: `http://localhost:3000/index-smart.html`

---

## 🎬 Demo Script for Stakeholders

Here's what to say when showing this to doctors:

### 1. The Problem (15 seconds)
> "You're seeing 20 patients a day. Each one requires clicking through dozens of EMR dropdowns to code properly. It's exhausting and error-prone."

### 2. The Demo (30 seconds)
- Click "Load Random Case"
- Show the twin pregnancy case
- Click "Analyze & Code"
- Point out: "In 1 second, it identified both CPT codes (one for each twin), the correct ICD-10 with trimester, AND calculated the complexity level."

### 3. The Voice Hook (30 seconds)
- Click mic button
- Say: "28-year-old with gestational diabetes, failed diet control, now on insulin"
- Click "Analyze & Code"
- Show results instantly

### 4. The Conversion (15 seconds)
- Click 👎 "Not accurate" button
- Read the response: "Exactly. Rules-based demos fail at the margins..."
- "That's why you need the full engine. Want to see more?"

**Total time: 90 seconds** ⏱️

---

## 🔍 Test Cases to Try

### Easy Case (Should be Low Complexity)
```
26-year-old G1P0 at 28 weeks, routine prenatal visit, 
fundal height appropriate, fetal heart tones 140s, 
patient doing well.
```

### Medium Case (Should be Med Complexity)
```
32-year-old G3P2 at 34 weeks with gestational diabetes, 
A1C 6.8%, adjusting insulin dosing, discussed delivery 
planning, NST reactive.
```

### Hard Case (Should be High Complexity)
```
30-year-old G2P1 at 29 weeks with monochorionic monoamniotic 
twins, admitted for continuous fetal monitoring, discordant 
growth noted Twin B 12% smaller, discussing timing of delivery 
with neonatology.
```

---

## 🐛 Troubleshooting (Super Quick)

### Mic Button Doesn't Work
- ✅ Use Chrome or Edge (Firefox/Safari don't support it)
- ✅ Allow microphone permission when prompted
- ✅ If using Phase 1 locally via `file://`, switch to `http://`

### AI Analysis Fails (Phase 2)
- ✅ Check `.env` file has your real API key
- ✅ Make sure `vercel dev` is running
- ✅ Check OpenAI account has credits

### Page Looks Broken
- ✅ Check internet connection (uses Font Awesome CDN)
- ✅ Try a different browser
- ✅ Clear browser cache

---

## 📱 Mobile Testing

### Quick Test:
1. Deploy to Vercel: `vercel --prod`
2. Open the link on your phone
3. Note: Voice won't work on mobile Safari, but typing does!

---

## 🎨 Quick Customization

### Change the Brand Name (Both HTML files)
Find line ~229:
```html
<h1>CodeCraftMD</h1>
```
Change to: `<h1>Your Brand</h1>`

### Change Color Scheme
Find lines ~10-17 in `<style>`:
```css
:root {
  --primary: #3b82f6;    /* Change this to your brand blue */
  --accent: #10b981;     /* Change this to your brand green */
}
```

### Update CTA Link
Find line ~301:
```html
<a href="#" class="link-text">🚀 Request Early Access...</a>
```
Change `href="#"` to your actual signup page!

---

## ✅ You're Ready When...

- [ ] Phase 1 opens in your browser
- [ ] You can click through a random case
- [ ] The coding results appear (even if simulated)
- [ ] You've tested voice dictation (optional)
- [ ] You understand the "hook" - it's meant to convert skeptics

**Ship it!** 🚀

---

## Next Step: Deploy!

When you're ready to share with others:
1. Read `DEPLOYMENT.md` for full instructions
2. Or just run: `vercel --prod` and share the link!

**Questions?** Check the full `README.md` for detailed documentation.
