import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { generateSystemPrompt } from '../../config/chatbot-config';

// Use Groq API (free alternative to OpenAI)
const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY || 'dummy-key-for-build',
  baseURL: process.env.GROQ_API_KEY ? 'https://api.groq.com/openai/v1' : 
           process.env.DEEPSEEK_API_KEY ? 'https://api.deepseek.com' : undefined,
});

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // DEMO MODE: Check if API key is available and working
    const hasValidApiKey = (
      (process.env.GROQ_API_KEY && process.env.GROQ_API_KEY !== 'your_groq_api_key_here' && process.env.GROQ_API_KEY !== 'dummy-key-for-build') ||
      (process.env.DEEPSEEK_API_KEY && process.env.DEEPSEEK_API_KEY !== 'your_deepseek_api_key_here' && process.env.DEEPSEEK_API_KEY !== 'dummy-key-for-build') ||
      (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_openai_api_key_here' && process.env.OPENAI_API_KEY !== 'dummy-key-for-build')
    );

    if (!hasValidApiKey) {
      // Demo mode with predefined responses
      const demoResponse = getDemoResponse(message.toLowerCase());
      return NextResponse.json({ 
        response: demoResponse,
        timestamp: new Date().toISOString(),
        demo: true
      });
    }

    // Generate system prompt from configuration
    const systemPrompt = generateSystemPrompt();

    // Prepare conversation history for context
    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...conversationHistory,
      { role: 'user' as const, content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: process.env.GROQ_API_KEY ? 'llama-3.1-70b-versatile' : 
             process.env.DEEPSEEK_API_KEY ? 'deepseek-chat' : 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'I apologize, but I encountered an error. Please try again.';

    return NextResponse.json({ 
      response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    // If API fails, fall back to demo mode
    try {
      const { message } = await request.json();
      const demoResponse = getDemoResponse(message.toLowerCase());
      
      return NextResponse.json({ 
        response: demoResponse,
        timestamp: new Date().toISOString(),
        demo: true
      });
    } catch {
      return NextResponse.json({ 
        response: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or contact us directly at info@sonoma-system.com.",
        timestamp: new Date().toISOString(),
        demo: true
      });
    }
  }
}

// Advanced sales-focused demo responses
function getDemoResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // High-intent pricing questions
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much') || lowerMessage.includes('budget')) {
    return "Great question! Our automation solutions typically range from $2,000-15,000+ depending on your specific needs. For example:\n\n• **Basic chatbot setup**: $2,000-5,000\n• **Full restaurant automation**: $8,000-15,000\n• **Enterprise solutions**: Custom pricing\n\nI'd love to give you an exact quote based on your current setup. What type of business are you running, and what's your biggest operational challenge right now?";
  }
  
  // Results and ROI questions
  if (lowerMessage.includes('result') || lowerMessage.includes('roi') || lowerMessage.includes('save') || lowerMessage.includes('benefit')) {
    return "Our clients typically see:\n\n📈 **40-60% reduction** in manual work within 30 days\n💰 **25-40% increase** in revenue through better customer engagement\n⏰ **10-15 hours saved** per week on repetitive tasks\n📞 **80% fewer** missed calls and inquiries\n\nFor example, one restaurant client went from 3 hours daily on inventory management to 15 minutes. Another hotel increased bookings by 45% with our chatbot.\n\nWhat's your biggest time-waster right now? I can show you exactly how we'd solve it.";
  }
  
  // Timeline questions
  if (lowerMessage.includes('timeline') || lowerMessage.includes('how long') || lowerMessage.includes('when') || lowerMessage.includes('implementation')) {
    return "Most implementations are live within 2-4 weeks:\n\n**Week 1**: Discovery and planning\n**Week 2**: Development and testing\n**Week 3**: Integration with your systems\n**Week 4**: Go-live and training\n\nWe handle everything - you just approve the final result. What's your ideal timeline? Are you looking to have this running before a busy season?";
  }
  
  // Demo booking requests
  if (lowerMessage.includes('demo') || lowerMessage.includes('book') || lowerMessage.includes('meeting') || lowerMessage.includes('call')) {
    return "Perfect! I'd love to show you exactly how this works for your business.\n\nDuring our 30-minute demo, Marko will:\n\n🎯 **Analyze your current setup** and identify the biggest opportunities\n📊 **Show you real examples** from similar businesses in your industry\n💰 **Calculate your potential ROI** based on your specific situation\n⚡ **Build a custom automation plan** tailored to your needs\n\nYou'll leave with a clear roadmap of exactly what we'd build for you and how much it would save you.\n\n**Book your free demo here**: https://calendly.com/marko-micovski-sonoma-system/30min\n\nWhat's your biggest operational challenge right now? I'll make sure Marko prepares some specific examples for your industry.";
  }
  
  // Business type identification
  if (lowerMessage.includes('restaurant') || lowerMessage.includes('hotel') || lowerMessage.includes('hospitality') || lowerMessage.includes('food service')) {
    return "Perfect! We specialize in automation for restaurants and hotels. Our solutions can help you:\n\n• **Reduce manual work** by 70-80%\n• **Improve guest experience** with instant responses\n• **Increase revenue** through automated upselling\n• **Prevent stockouts** with smart inventory management\n• **Streamline bookings** across all platforms\n\nI'd love to show you exactly how this works for your business. What's your biggest operational challenge right now?";
  }
  
  // Pain point identification
  if (lowerMessage.includes('struggling') || lowerMessage.includes('problem') || lowerMessage.includes('issue') || lowerMessage.includes('challenge') || lowerMessage.includes('difficult')) {
    return "I understand you're facing some challenges. That's exactly why we exist - to solve these exact problems for businesses like yours.\n\nOur automation solutions have helped hundreds of restaurants and hotels overcome similar issues. We typically see:\n\n✅ **80% reduction** in time spent on repetitive tasks\n✅ **40-60% increase** in customer satisfaction\n✅ **25-40% boost** in revenue\n\nWhat specific challenge is costing you the most time or money right now? I can show you exactly how we'd solve it.";
  }
  
  // Service inquiries
  if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('what do you do')) {
    return "We offer comprehensive automation solutions for restaurants, hotels, and high-end businesses:\n\n🤖 **AI Agents** - Digital experts that automate decisions and connect your apps\n💬 **AI Chatbots** - 24/7 guest engagement for bookings and messaging\n📅 **Booking & POS Sync** - Seamless reservation and payment integration\n📦 **Inventory Automation** - Real-time tracking, alerts, and auto-reordering\n⚙️ **Custom Workflows** - Tailored automations via Make.com, Zapier, and n8n\n\nWhat type of business are you running? I'd love to show you which solutions would have the biggest impact for you.";
  }
  
  // Contact information
  if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
    return "I'd be happy to connect you with our team!\n\n📧 **Email**: info@sonoma-system.com\n📅 **Book a Demo**: https://calendly.com/marko-micovski-sonoma-system/30min\n🌐 **Website**: sonoma-system.com\n\nOur founder Marko Micovski personally handles all consultations. We typically respond within 24 hours and can accommodate different time zones.\n\nWhat's the best way to reach you, and what's your biggest operational challenge right now?";
  }
  
  // Greeting
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! Welcome to Sonoma System. I'm here to help you discover how automation can transform your restaurant, hotel, or business operations.\n\nI'd love to understand your current situation better. What type of business are you running, and what's your biggest operational challenge right now?";
  }
  
  // Default response - always sales-focused
  return "That's a great question! I'd love to help you with that.\n\nTo give you the most relevant information, could you tell me:\n\n1. What type of business are you running?\n2. What's your biggest operational challenge right now?\n3. How much time do you currently spend on repetitive tasks?\n\nBased on your answers, I can show you exactly how our automation solutions would solve your specific problems and calculate your potential ROI.\n\nAlternatively, you can book a free consultation where our founder Marko can provide personalized advice: https://calendly.com/marko-micovski-sonoma-system/30min";
}
