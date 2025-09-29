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

// Demo responses for when OpenAI API is not available
function getDemoResponse(message: string): string {
  if (message.includes('service') || message.includes('offer')) {
    return "We offer comprehensive automation solutions for restaurants, hotels, and high-end businesses:\n\n🤖 **AI Agents** - Digital experts that automate decisions and connect your apps\n💬 **AI Chatbots** - 24/7 guest engagement for bookings and messaging\n📅 **Booking & POS Sync** - Seamless reservation and payment integration\n📦 **Inventory Automation** - Real-time tracking, alerts, and auto-reordering\n⚙️ **Custom Workflows** - Tailored automations via Make.com, Zapier, and n8n\n\nWould you like to learn more about any specific service?";
  }
  
  if (message.includes('restaurant') || message.includes('hotel')) {
    return "Perfect! We specialize in automation for restaurants and hotels. Our solutions can help you:\n\n• **Reduce manual work** by 70-80%\n• **Improve guest experience** with instant responses\n• **Increase revenue** through automated upselling\n• **Prevent stockouts** with smart inventory management\n• **Streamline bookings** across all platforms\n\nI'd love to show you exactly how this works for your business. Would you like to book a free demo?";
  }
  
  if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
    return "Great question! Our pricing is customized based on your specific needs and the complexity of your automation requirements. \n\nSince every business is unique, we offer **free consultation calls** to understand your goals and provide accurate pricing.\n\nWould you like to book a free demo? I can show you exactly what's possible and give you a custom quote. You can schedule here: [Book Demo](https://calendly.com/marko-micovski-sonoma-system/30min)";
  }
  
  if (message.includes('demo') || message.includes('book') || message.includes('meeting')) {
    return "Excellent! I'd love to show you how automation can transform your business. \n\nYou can book a free 30-minute demo with our founder Marko Micovski here:\n\n📅 **Book Your Free Demo**: https://calendly.com/marko-micovski-sonoma-system/30min\n\nDuring the demo, we'll:\n• Analyze your current processes\n• Show you relevant automation examples\n• Discuss your specific goals\n• Provide a custom implementation plan\n\nOr feel free to email us directly at info@sonoma-system.com";
  }
  
  if (message.includes('contact') || message.includes('email') || message.includes('phone')) {
    return "I'd be happy to connect you with our team!\n\n📧 **Email**: info@sonoma-system.com\n📅 **Book a Demo**: https://calendly.com/marko-micovski-sonoma-system/30min\n🌐 **Website**: sonoma-system.com\n\nOur founder Marko Micovski personally handles all consultations. We typically respond within 24 hours and can accommodate different time zones.";
  }
  
  if (message.includes('inventory') || message.includes('stock')) {
    return "Inventory automation is one of our most popular services! We help restaurants and hotels:\n\n📊 **Real-time tracking** across all locations\n🚨 **Smart alerts** when stock is running low\n📋 **Automated reordering** based on usage patterns\n💰 **Cost optimization** by preventing overstocking\n📈 **Analytics** to predict demand\n\nThis typically reduces stockouts by 80% and saves 10-15 hours per week on manual inventory management.\n\nWould you like to see how this works for your specific inventory needs?";
  }
  
  if (message.includes('chatbot') || message.includes('chat')) {
    return "Our AI chatbots are incredibly powerful! They can:\n\n💬 **Handle 24/7 guest inquiries** across your website, WhatsApp, and Telegram\n📅 **Process bookings** automatically\n🍽️ **Upsell services** intelligently\n❓ **Answer FAQs** instantly\n📞 **Route complex issues** to your team\n\nWe've helped clients reduce response times from hours to seconds and increase bookings by 40-60%.\n\nWould you like to see a live demo of how our chatbots work?";
  }
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! Welcome to Sonoma System. I'm here to help you discover how automation can transform your restaurant, hotel, or business operations.\n\nWhat would you like to know about our services? I can tell you about:\n• AI-powered chatbots\n• Inventory automation\n• Booking and POS integration\n• Custom workflow automation\n• Or anything else you're curious about!";
  }
  
  // Default response for other questions
  return "That's a great question! I'd love to help you with that. \n\nOur automation solutions are quite comprehensive, and I want to make sure I give you the most relevant information. Could you tell me a bit more about your business or what specific challenge you're looking to solve?\n\nAlternatively, you can book a free consultation where our founder Marko can provide personalized advice: https://calendly.com/marko-micovski-sonoma-system/30min";
}
