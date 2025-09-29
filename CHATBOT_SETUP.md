# AI Chatbot Setup Guide

## Overview
Your website now includes a modern AI chatbot that can help visitors learn about Sonoma System's automation services. The chatbot is fully integrated and styled to match your existing design theme.

## Features
- 🤖 **AI-Powered Responses**: Uses OpenAI GPT-3.5-turbo for intelligent conversations
- 💬 **Context-Aware**: Maintains conversation history for better responses
- 🎨 **Modern UI**: Floating chat widget with your brand colors (cyan/blue gradient)
- 📱 **Responsive**: Works perfectly on mobile and desktop
- ⚡ **Real-time**: Typing indicators and smooth animations
- 🔒 **Secure**: API calls are handled server-side

## Setup Instructions

### Option 1: DeepSeek API (FREE - Recommended)
1. Go to [DeepSeek Platform](https://platform.deepseek.com/api_keys)
2. Sign up for a free account
3. Click "Create API Key"
4. Copy the API key (starts with `sk-`)

### Option 2: OpenAI API (Paid)
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Add billing information and payment method
4. Click "Create new secret key"
5. Copy the API key (starts with `sk-`)

### Configure Environment Variables
Create a `.env.local` file in your project root:

```bash
# DeepSeek API Configuration (FREE)
DEEPSEEK_API_KEY=your_deepseek_api_key_here

# OR OpenAI API Configuration (Paid)
OPENAI_API_KEY=your_openai_api_key_here
```

**Important**: Never commit this file to version control. It's already in `.gitignore`.

### 3. Test the Chatbot
1. Run your development server: `npm run dev`
2. Visit your website
3. Look for the floating chat button in the bottom-right corner
4. Click it to open the chatbot
5. Try asking questions like:
   - "What services do you offer?"
   - "How can automation help my restaurant?"
   - "I want to book a demo"

## Customization

### Chatbot Personality
The chatbot is configured with a system prompt that defines its role. You can modify this in `/src/app/api/chat/route.ts` around line 15-35.

### Styling
The chatbot uses your existing color scheme:
- Primary: Cyan (#00cfff)
- Secondary: Blue (#3b82f6)
- Background: Dark slate (#0f172a)

Colors can be adjusted in `/src/app/components/Chatbot.tsx`.

### Initial Message
The welcome message can be changed in `/src/app/components/Chatbot.tsx` around line 12-18.

## Cost Considerations

### DeepSeek API (FREE)
- ✅ **Completely free** with generous limits
- ✅ No billing information required
- ✅ High-quality responses comparable to GPT-3.5
- ✅ Perfect for testing and small to medium usage

### OpenAI API (Paid)
- OpenAI GPT-3.5-turbo costs approximately $0.002 per 1K tokens
- Average conversation: ~500-1000 tokens
- Estimated cost: $0.001-0.002 per conversation
- Monitor usage in your OpenAI dashboard

## Deployment
1. Add your `OPENAI_API_KEY` to your hosting platform's environment variables
2. Deploy as usual - the chatbot will work automatically

## Support
If you need help customizing the chatbot or have questions, contact the development team.

---

**Note**: The chatbot is now live and ready to help your visitors learn about Sonoma System's automation services!
