"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Particles = dynamic(() => import("react-tsparticles").then(mod => mod.Particles), { ssr: false });

function AnimatedBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 40 },
          color: { value: ["#00cfff", "#7c3aed", "#00ffb3"] },
          shape: { type: "circle" },
          opacity: { value: 0.25 },
          size: { value: 4, random: { enable: true, minimumValue: 2 } },
          move: { enable: true, speed: 1, direction: "none", outModes: { default: "out" } },
          links: { enable: true, color: "#00cfff", opacity: 0.1, distance: 150 },
        },
        interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
      }}
      style={{ position: "absolute", inset: 0, zIndex: 1 }}
    />
  );
}

export default function Home() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes gradientBG { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      .animate-gradient { background-size: 200% 200%; animation: gradientBG 8s ease-in-out infinite; }
      @keyframes shine { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
      .btn-shine { position: relative; overflow: hidden; }
      .btn-shine::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(120deg, transparent 0%, #fff7 50%, transparent 100%); background-size: 200% 100%; background-position: -200% 0; animation: shine 2.5s linear infinite; opacity: 0.5; pointer-events: none; }
      .fade-in { opacity: 0; animation: fadeIn 1s ease-in forwards; }
      @keyframes fadeIn { to { opacity: 1; } }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-tech-primary via-tech-accent/10 to-tech-highlight/10 text-tech-secondary flex flex-col items-center justify-center p-0">
      {/* HERO SECTION */}
      <header className="w-full max-w-5xl flex flex-col items-center gap-6 text-center py-28 relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-tech-primary via-tech-accent/20 to-tech-accent/5 mb-0">
        <AnimatedBackground />
        <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-tr from-tech-accent/30 via-tech-primary/80 to-tech-highlight/20 blur-2xl opacity-60" />
        <h1 className="text-6xl sm:text-7xl font-extrabold text-tech-accent drop-shadow-lg leading-tight z-10 font-[Inter,Arial,sans-serif] fade-in">Unleash Your Business Potential with Automation</h1>
        <h2 className="text-2xl sm:text-3xl font-medium text-tech-highlight max-w-2xl z-10 fade-in">AI &amp; Custom Automations for Modern Businesses</h2>
        <p className="mt-2 text-lg text-tech-secondary max-w-xl z-10 fade-in">We build chatbots, workflow automations, and custom solutions dedicated to your business success.</p>
        <div className="flex gap-4 mt-10 flex-col sm:flex-row w-full justify-center z-10 fade-in">
          <a className="bg-tech-accent text-tech-primary font-semibold rounded-full px-8 py-3 shadow-lg hover:bg-tech-highlight hover:text-tech-primary transition-all text-lg btn-shine" href="#contact">Get Started</a>
          <a className="border-2 border-tech-accent text-tech-accent font-semibold rounded-full px-8 py-3 hover:bg-tech-accent hover:text-tech-primary transition-all text-lg" href="#services">Our Services</a>
        </div>
        {/* Trusted by row (placeholder logos) */}
        <div className="flex flex-wrap gap-8 justify-center items-center mt-12 z-10 fade-in">
          <Image src="/logo.png" alt="Client 1" width={60} height={40} className="opacity-60 grayscale" />
          <div className="w-24 h-10 bg-tech-accent/20 rounded-lg" />
          <div className="w-24 h-10 bg-tech-highlight/20 rounded-lg" />
          <div className="w-24 h-10 bg-tech-secondary/20 rounded-lg" />
        </div>
      </header>
      {/* Stats Section */}
      <section className="w-full max-w-5xl flex flex-col md:flex-row justify-center items-center gap-12 py-16 fade-in">
        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold text-tech-accent">+1,200</span>
          <span className="text-lg text-tech-secondary/80 mt-2">Hours Saved</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold text-tech-highlight">98%</span>
          <span className="text-lg text-tech-secondary/80 mt-2">Client Satisfaction</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold text-tech-accent">300%</span>
          <span className="text-lg text-tech-secondary/80 mt-2">Avg. ROI</span>
        </div>
      </section>
      {/* Wavy SVG Divider */}
      <div className="w-full overflow-hidden -mb-1">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path fill="#00cfff" fillOpacity="0.12" d="M0,32 C360,80 1080,0 1440,48 L1440,80 L0,80 Z" />
        </svg>
      </div>
      {/* Services Section */}
      <section id="services" className="w-full max-w-6xl mt-0 flex flex-col gap-12 items-center scroll-mt-24 bg-gradient-to-br from-tech-accent/10 via-tech-secondary/10 to-tech-highlight/10 py-20 rounded-3xl shadow-xl fade-in">
        <h1 className="text-4xl font-bold text-tech-accent text-center mb-4">Our Services</h1>
        <div className="grid gap-8 md:grid-cols-3 w-full">
          <div className="bg-tech-secondary/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform group relative overflow-hidden">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-tech-accent/20 rounded-full blur-2xl opacity-60 z-0 animate-pulse" />
            <svg className="w-12 h-12 mb-4 text-tech-accent group-hover:text-tech-highlight transition-colors z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l-3-3m3 3l3-3"/></svg>
            <h2 className="text-xl font-semibold text-tech-highlight mb-2 z-10">AI &amp; Non-AI Chatbots</h2>
            <p className="text-tech-secondary z-10">Engage your customers 24/7 with intelligent chatbots tailored to your business. We build both AI-powered and rule-based bots for websites, social, and support.</p>
          </div>
          <div className="bg-tech-secondary/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform group relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-tech-highlight/20 rounded-full blur-2xl opacity-60 z-0 animate-pulse" />
            <svg className="w-12 h-12 mb-4 text-tech-accent group-hover:text-tech-highlight transition-colors z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
            <h2 className="text-xl font-semibold text-tech-highlight mb-2 z-10">Workflow Automations</h2>
            <p className="text-tech-secondary z-10">Streamline repetitive tasks and connect your favorite tools. Our workflow automations save you time, reduce errors, and boost productivity.</p>
          </div>
          <div className="bg-tech-secondary/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform group relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-tech-accent/20 rounded-full blur-2xl opacity-60 z-0 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            <svg className="w-12 h-12 mb-4 text-tech-accent group-hover:text-tech-highlight transition-colors z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            <h2 className="text-xl font-semibold text-tech-highlight mb-2 z-10">Custom Automations</h2>
            <p className="text-tech-secondary z-10">Have a unique process? We design and build custom automation solutions dedicated to your business needs, no matter the complexity.</p>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="w-full max-w-4xl mt-32 flex flex-col gap-12 items-center scroll-mt-24 bg-gradient-to-br from-tech-highlight/10 via-tech-accent/10 to-tech-primary/10 py-16 rounded-3xl shadow-xl fade-in">
        <h1 className="text-4xl font-bold text-tech-accent text-center mb-4">What Our Clients Say</h1>
        <div className="grid gap-8 md:grid-cols-2 w-full">
          <div className="bg-white/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20 flex flex-col gap-4 md:col-span-2 items-center">
            <p className="text-lg italic text-tech-secondary">&quot;Since integrating the chatbot across our website, WhatsApp, and Telegram, we&apos;ve seen a dramatic drop in response times and a massive boost in customer satisfaction. The automation handles everything from booking inquiries to FAQs – even during peak hours. It&apos;s like having a 24/7 receptionist who never sleeps. Our team can finally focus on more complex issues instead of repeating the same answers all day. Highly recommended!&quot;</p>
            <span className="font-semibold text-tech-highlight">— Petar Bashoski, Founder at Ozon Agency</span>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20 flex flex-col gap-4 md:col-span-2 items-center">
            <p className="text-lg italic text-tech-secondary">&quot;Managing thousands of SKUs used to be a nightmare. Thanks to the automation system Marko built, we now track inventory levels in real-time, get low-stock alerts, and automatically generate restock orders. Our stockouts dropped by 80%, and overstocking is finally under control. What used to take hours now happens automatically. It&apos;s been a game-changer for our operations.&quot;</p>
            <span className="font-semibold text-tech-highlight">— Pavel Konev, Managing Director at Andrej Kompani</span>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20 flex flex-col gap-4 md:col-span-2 items-center">
            <p className="text-lg italic text-tech-secondary">&quot;Before working with Sonoma and specifically Marko, our agents were wasting hours manually chasing leads. Now, our website visitors are automatically qualified and routed to the right agent through smart forms and follow-up sequences. Our conversions doubled in just a few weeks, and our team finally has time to focus on selling, not data entry. This automation didn&apos;t just save us time, it boosted our revenue.&quot;</p>
            <span className="font-semibold text-tech-highlight">— Sara Ilic, Founder &amp; CEO at UrbaNest</span>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="w-full max-w-4xl mt-32 flex flex-col gap-12 items-center scroll-mt-24 bg-gradient-to-br from-tech-accent/10 via-tech-secondary/10 to-tech-highlight/10 py-16 rounded-3xl shadow-xl fade-in">
        <h1 className="text-4xl font-bold text-tech-accent text-center mb-4">About Sonoma-System</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <Image src="/logo.png" alt="Sonoma-System Logo" width={80} height={80} className="rounded-2xl shadow-md" />
          <div className="flex-1 text-lg text-tech-secondary/90">
            <p>Sonoma-System was founded to empower businesses through intelligent automation. We believe every company deserves access to the latest in automation technology. Our mission is to deliver innovative, reliable, and custom automation solutions that drive growth and efficiency.</p>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="w-full max-w-4xl mt-32 flex flex-col gap-8 items-center scroll-mt-24 bg-gradient-to-br from-tech-highlight/10 via-tech-accent/10 to-tech-primary/10 py-16 rounded-3xl shadow-xl fade-in">
        <h1 className="text-4xl font-bold text-tech-accent text-center mb-4">Frequently Asked Questions</h1>
        <div className="w-full flex flex-col gap-4">
          <details className="bg-white/10 rounded-lg p-4 shadow border border-tech-accent/10">
            <summary className="font-semibold text-tech-accent cursor-pointer">What is AI automation, and how does it work?</summary>
            <p className="mt-2 text-tech-secondary/90">AI automation combines artificial intelligence with automated workflows to handle both complex processes and repetitive tasks. AI-driven automations can analyse data, make decisions, and learn from patterns, enabling businesses to achieve outcomes that go beyond traditional automation.</p>
          </details>
          <details className="bg-white/10 rounded-lg p-4 shadow border border-tech-accent/10">
            <summary className="font-semibold text-tech-accent cursor-pointer">How can automation improve productivity?</summary>
            <p className="mt-2 text-tech-secondary/90">Automation can handle routine data entry, customer support, and even complex decision-making, freeing your team to focus on high-value work and boosting overall productivity.</p>
          </details>
          <details className="bg-white/10 rounded-lg p-4 shadow border border-tech-accent/10">
            <summary className="font-semibold text-tech-accent cursor-pointer">What services do you provide?</summary>
            <p className="mt-2 text-tech-secondary/90">We offer AI &amp; non-AI chatbots, workflow automations, and custom automation solutions tailored to your business needs.</p>
          </details>
        </div>
      </section>
      {/* Contact Section Anchor */}
      <section id="contact" className="w-full max-w-lg mt-32 flex flex-col gap-8 scroll-mt-24 bg-gradient-to-br from-tech-accent/10 via-tech-secondary/10 to-tech-highlight/10 py-16 rounded-3xl shadow-xl fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold text-tech-accent text-center mb-4">Contact Us</h1>
        <form 
          action="https://formspree.io/f/xblklyww" 
          method="POST"
          className="flex flex-col gap-4 bg-tech-secondary/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20"
        >
          <input type="hidden" name="_next" value="/thank-you" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="rounded px-4 py-2 bg-tech-secondary/20 text-tech-primary placeholder:text-tech-primary/60 focus:outline-none focus:ring-2 focus:ring-tech-accent"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="rounded px-4 py-2 bg-tech-secondary/20 text-tech-primary placeholder:text-tech-primary/60 focus:outline-none focus:ring-2 focus:ring-tech-accent"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="rounded px-4 py-2 bg-tech-secondary/20 text-tech-primary placeholder:text-tech-primary/60 focus:outline-none focus:ring-2 focus:ring-tech-accent"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-tech-accent text-tech-primary font-semibold rounded-full px-8 py-3 shadow-lg hover:bg-tech-highlight hover:text-tech-primary transition-all text-lg mt-2"
          >
            Send Message
          </button>
        </form>
        <div className="text-center text-tech-secondary/80 mt-4">
          <p>Email: <a href="mailto:info@sonoma-system.com" className="underline text-tech-accent">info@sonoma-system.com</a></p>
        </div>
      </section>
      <footer className="mt-20 text-tech-secondary text-sm opacity-70">
        &copy; {new Date().getFullYear()} Sonoma-System. All rights reserved.
      </footer>
    </div>
  );
}
