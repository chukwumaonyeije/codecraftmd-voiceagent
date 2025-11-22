# CodeCraftMD Voice Agent - Deployment Guide

Quick reference for deploying your voice agent demo.

## 🚀 Phase 1: Static Demo (Simplest)

### Option 1: Direct File Hosting
Simply upload `index.html` to any static hosting:
- GitHub Pages
- Netlify Drop
- Vercel static
- Any web server

### Option 2: Vercel Static Deploy
```bash
vercel --prod
```

No configuration needed - just works! ✨

---

## 🤖 Phase 2: AI-Powered Demo

### Prerequisites Checklist
- [ ] OpenAI API key obtained
- [ ] Node.js 18+ installed
- [ ] Vercel account created (free tier works)

### Step-by-Step Deployment

#### 1. Prepare Your Project
```bash
# Navigate to project directory
cd codecraftmd-voiceagent

# Install dependencies
npm install
```

#### 2. Test Locally First
```bash
# Create .env file
copy .env.example .env

# Edit .env and add your OpenAI key:
# OPENAI_API_KEY=sk-your-key-here

# Install Vercel CLI
npm install -g vercel

# Start dev server
vercel dev

# Test at: http://localhost:3000/index-smart.html
```

#### 3. Deploy to Production
```bash
# Login to Vercel (first time only)
vercel login

# Deploy
vercel --prod
```

#### 4. Configure Environment Variables in Vercel
1. Visit your Vercel dashboard
2. Go to Project > Settings > Environment Variables
3. Add: `OPENAI_API_KEY` = `your-key-here`
4. Save and redeploy

#### 5. Test Your Deployment
Visit: `https://your-project.vercel.app/index-smart.html`

---

## 🔧 Common Issues & Solutions

### Issue: "API key not configured"
**Solution:** 
1. Check Vercel dashboard has `OPENAI_API_KEY` set
2. Redeploy after adding environment variables
3. Check variable name matches exactly

### Issue: Voice not working
**Solution:** 
1. Use Chrome or Edge browser
2. Enable microphone permissions
3. Must use HTTPS (HTTP won't work)

### Issue: CORS errors
**Solution:** 
- API is pre-configured with CORS headers
- If still having issues, check browser console
- Ensure you're hitting the correct `/api/analyze` endpoint

---

## 📊 Deployment Checklist

### Pre-Launch
- [ ] Test Phase 1 (`index.html`) locally
- [ ] Test Phase 2 (`index-smart.html`) with local Vercel dev
- [ ] Verify all 3 random cases work correctly
- [ ] Test voice dictation in Chrome/Edge
- [ ] Check mobile responsiveness
- [ ] Update CTA link to your actual signup page
- [ ] Review and customize color scheme if needed

### Launch
- [ ] Deploy to Vercel
- [ ] Configure environment variables
- [ ] Test deployed version
- [ ] Share link with test users
- [ ] Monitor OpenAI API usage

### Post-Launch
- [ ] Collect user feedback
- [ ] Monitor error logs in Vercel dashboard
- [ ] Track conversion metrics (CTA clicks)
- [ ] Optimize based on usage patterns

---

## 💰 Cost Estimates

### Vercel Hosting
- **Free tier:** Up to 100GB bandwidth/month
- **Pro tier:** $20/month (if you exceed free tier)

### OpenAI API
- **GPT-4o-mini:** ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
- **Estimate:** ~$0.001-0.002 per analysis
- **1000 users:** ~$1-2 in API costs

**Total for demo phase:** Likely FREE on both platforms! 🎉

---

## 🎯 Optimization Tips

### Reduce OpenAI Costs
1. Set `max_tokens: 500` in `api/analyze.js` (currently 1000)
2. Use caching for common queries
3. Add rate limiting to prevent abuse

### Improve Performance
1. Enable Vercel Edge Functions for faster response
2. Add response caching (1 hour TTL)
3. Compress images if you add any

### Enhance Security
1. Add rate limiting (10 requests/min per IP)
2. Implement API key rotation
3. Add simple CAPTCHA for production

---

## 📱 Custom Domain Setup

1. Purchase domain (e.g., demo.codecraftmd.com)
2. In Vercel dashboard:
   - Go to Project > Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions
3. Wait for DNS propagation (5-60 minutes)
4. Test with HTTPS enabled

---

## 🔄 Update & Rollback

### Deploy New Version
```bash
git add .
git commit -m "Updated feature X"
vercel --prod
```

### Rollback to Previous Version
1. Go to Vercel dashboard
2. Navigate to Deployments
3. Find previous working version
4. Click "Promote to Production"

---

## 📈 Monitoring

### Vercel Analytics
- Automatically tracks page views
- View in Vercel dashboard > Analytics

### OpenAI Usage
- Monitor at: https://platform.openai.com/usage
- Set up billing alerts

### Custom Tracking
Add to your HTML:
```javascript
// Track button clicks
document.querySelector('.link-text').addEventListener('click', () => {
  // Send to your analytics platform
  console.log('CTA clicked!');
});
```

---

## 🆘 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **OpenAI Support:** https://help.openai.com
- **This Project Issues:** File issues in your Git repository

---

## 🎉 Success Checklist

You're ready to launch when:
- [ ] Both demos work locally
- [ ] AI responses are accurate and relevant
- [ ] Voice dictation works (Chrome/Edge)
- [ ] Mobile layout looks good
- [ ] CTA link points to your signup page
- [ ] No console errors
- [ ] Tested with 5+ different cases
- [ ] OpenAI billing alert is set
- [ ] You have a rollback plan

**Now go wow some doctors! 🩺✨**
