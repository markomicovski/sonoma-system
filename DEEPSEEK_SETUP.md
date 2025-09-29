# DeepSeek API Setup (FREE Alternative to OpenAI)

## Why DeepSeek?
- ✅ **Completely FREE** - No billing required
- ✅ **High Quality** - Responses comparable to GPT-3.5
- ✅ **Easy Setup** - Just sign up and get an API key
- ✅ **Generous Limits** - Perfect for most use cases

## Quick Setup Guide

### Step 1: Sign Up
1. Go to [https://platform.deepseek.com](https://platform.deepseek.com)
2. Click "Sign Up" 
3. Create your account (email + password)

### Step 2: Get API Key
1. Once logged in, go to [https://platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Sonoma System Chatbot")
4. Copy the API key (starts with `sk-`)

### Step 3: Add to Your Project
1. Open your `.env.local` file
2. Add this line:
```bash
DEEPSEEK_API_KEY=your_actual_api_key_here
```
3. Replace `your_actual_api_key_here` with your actual API key
4. Save the file

### Step 4: Test
1. Restart your dev server (`npm run dev`)
2. Try the chatbot - it should now work with real AI responses!

## That's It! 🎉
Your chatbot will now use DeepSeek's free AI API instead of the paid OpenAI API. The responses will be just as good, but completely free!

## Need Help?
- DeepSeek Documentation: [https://platform.deepseek.com/docs](https://platform.deepseek.com/docs)
- API Status: [https://status.deepseek.com](https://status.deepseek.com)
