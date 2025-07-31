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
          number: { value: 30 },
          color: { value: ["#00cfff", "#7c3aed", "#00ffb3"] },
          shape: { type: "circle" },
          opacity: { value: 0.18 },
          size: { value: 3, random: { enable: true, minimumValue: 1 } },
          move: { enable: true, speed: 0.7, direction: "none", outModes: { default: "out" } },
          links: { enable: true, color: "#00cfff", opacity: 0.08, distance: 140 },
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
      @keyframes fadeIn { to { opacity: 1; } }
      .fade-in { opacity: 0; animation: fadeIn 1s ease-in forwards; }
      @keyframes shine { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
      .btn-shine { position: relative; overflow: hidden; }
      .btn-shine::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(120deg, transparent 0%, #fff7 50%, transparent 100%); background-size: 200% 100%; background-position: -200% 0; animation: shine 2.5s linear infinite; opacity: 0.5; pointer-events: none; }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <main className="font-sans min-h-screen bg-gradient-to-br from-tech-primary via-tech-accent/10 to-tech-highlight/10 text-tech-secondary flex flex-col items-center justify-center p-4 sm:p-0">
      {/* SEO Headings */}
      <h1 className="sr-only">Sonoma System | Automation Agency for Restaurants, Hotels, and Businesses</h1>
      {/* HERO SECTION */}
      <header className="w-full max-w-5xl flex flex-col items-center gap-4 sm:gap-6 text-center py-16 sm:py-28 relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-gradient-to-br from-tech-primary via-tech-accent/20 to-tech-accent/5 mb-0">
        <AnimatedBackground />
        <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-tr from-tech-accent/30 via-tech-primary/80 to-tech-highlight/20 blur-2xl opacity-60" />
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-tech-accent drop-shadow-lg leading-tight z-10 font-[Inter,Arial,sans-serif] fade-in px-4">
          Automate. Elevate. <span className="text-tech-highlight">Impress.</span>
        </h2>
        <p className="mt-2 sm:mt-4 text-base sm:text-xl text-tech-secondary max-w-2xl z-10 fade-in px-4">
          <span className="font-semibold text-tech-accent">AI-powered automation</span> for <span className="font-semibold text-tech-highlight">restaurants, hotels, and high-end businesses</span>.<br className="hidden sm:block" />
          Inventory, bookings, chatbots, POS, and more—done for you.
        </p>
        <div className="flex gap-4 mt-6 sm:mt-10 flex-col sm:flex-row w-full justify-center z-10 fade-in px-4">
          <a className="bg-tech-accent text-tech-primary font-semibold rounded-full px-6 sm:px-8 py-3 shadow-lg hover:bg-tech-highlight hover:text-tech-primary transition-all text-base sm:text-lg btn-shine text-center" href="#book-demo">Book a Free Automation Demo</a>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-8 justify-center items-center mt-8 sm:mt-12 z-10 fade-in px-4">
          <Image src="/logo.png" alt="Sonoma System Logo" width={60} height={40} className="opacity-60 grayscale" />
          <div className="w-20 sm:w-24 h-8 sm:h-10 bg-tech-accent/20 rounded-lg" />
          <div className="w-20 sm:w-24 h-8 sm:h-10 bg-tech-highlight/20 rounded-lg" />
          <div className="w-20 sm:w-24 h-8 sm:h-10 bg-tech-secondary/20 rounded-lg" />
        </div>
      </header>
      {/* SERVICES */}
      <section id="services" className="w-full max-w-5xl flex flex-col gap-8 sm:gap-12 items-center py-16 sm:py-24 fade-in px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-tech-accent text-center mb-8 sm:mb-12">Our Core Automation Services</h2>
        <div className="grid gap-6 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {/* First row: 3 cards */}
          <div className="col-span-1 flex flex-col items-center">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl border border-tech-accent/30 flex flex-col items-center h-full hover:scale-105 hover:shadow-2xl hover:border-tech-accent transition-all group relative overflow-hidden">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-tech-highlight/20 mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-tech-highlight" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v4m0 12v4m8-8h-4m-8 0H4m12.24-6.24l-2.12 2.12m-4.24 4.24l-2.12 2.12m12.24 0l-2.12-2.12m-4.24-4.24l-2.12-2.12"/></svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-tech-highlight mb-1">AI Agents</h3>
              <span className="text-sm sm:text-base text-tech-accent font-semibold mb-2 text-center">Delegate to digital experts</span>
              <p className="text-tech-secondary text-center text-xs sm:text-sm">AI agents that take action, automate decisions, and connect your apps for true digital transformation.</p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl border border-tech-accent/30 flex flex-col items-center h-full hover:scale-105 hover:shadow-2xl hover:border-tech-accent transition-all group relative overflow-hidden">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-tech-accent/20 mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-tech-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-tech-accent mb-1">AI & Non-AI Chatbots</h3>
              <span className="text-sm sm:text-base text-tech-highlight font-semibold mb-2 text-center">24/7 guest engagement</span>
              <p className="text-tech-secondary text-center text-xs sm:text-sm">AI chatbots for bookings, guest messaging, and upsell automations.</p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl border border-tech-accent/30 flex flex-col items-center h-full hover:scale-105 hover:shadow-2xl hover:border-tech-accent transition-all group relative overflow-hidden">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-tech-primary/20 mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-tech-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l-3-3m3 3l3-3"/></svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-tech-primary mb-1">Booking & POS Sync</h3>
              <span className="text-sm sm:text-base text-tech-highlight font-semibold mb-2 text-center">Seamless reservations</span>
              <p className="text-tech-secondary text-center text-xs sm:text-sm">Integrate bookings and payments with your POS and reservation systems.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 w-full mt-6 sm:mt-10">
          <div className="flex flex-col items-center w-full sm:w-auto">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl border border-tech-accent/30 flex flex-col items-center h-full hover:scale-105 hover:shadow-2xl hover:border-tech-accent transition-all group relative overflow-hidden w-full max-w-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-tech-accent/20 mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-tech-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-tech-accent mb-1">Inventory Automation</h3>
              <span className="text-sm sm:text-base text-tech-highlight font-semibold mb-2 text-center">Never run out of stock</span>
              <p className="text-tech-secondary text-center text-xs sm:text-sm">Real-time tracking, low-inventory alerts, and auto-reordering for restaurants and hotels.</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl border border-tech-accent/30 flex flex-col items-center h-full hover:scale-105 hover:shadow-2xl hover:border-tech-accent transition-all group relative overflow-hidden w-full max-w-sm">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-tech-accent/20 mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-tech-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17h18M3 12h18M3 7h18"/></svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-tech-accent mb-1">Custom Workflows</h3>
              <span className="text-sm sm:text-base text-tech-highlight font-semibold mb-2 text-center">Tailored to your business</span>
              <p className="text-tech-secondary text-center text-xs sm:text-sm">Automations via Make.com, Zapier, and n8n for any process or integration.</p>
            </div>
          </div>
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section className="w-full max-w-5xl flex flex-col gap-8 sm:gap-12 items-center py-16 sm:py-20 fade-in px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-tech-accent text-center mb-6 sm:mb-8">How It Works</h2>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-3 w-full">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-tech-accent/20 flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold text-tech-accent">1</span>
            </div>
            <h4 className="font-semibold text-tech-accent mb-2 text-center">Discovery Call</h4>
            <p className="text-tech-secondary text-center text-sm">Book a free consult to map your needs and goals.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-tech-highlight/20 flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold text-tech-highlight">2</span>
            </div>
            <h4 className="font-semibold text-tech-highlight mb-2 text-center">Custom Automation Plan</h4>
            <p className="text-tech-secondary text-center text-sm">We design and build your workflows for maximum ROI.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-tech-primary/20 flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-bold text-tech-primary">3</span>
            </div>
            <h4 className="font-semibold text-tech-primary mb-2 text-center">Launch & Support</h4>
            <p className="text-tech-secondary text-center text-sm">Go live and scale with ongoing support and optimization.</p>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section id="testimonials" className="w-full max-w-4xl flex flex-col gap-8 sm:gap-12 items-center py-16 sm:py-20 fade-in px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-tech-accent text-center mb-6 sm:mb-8">What Our Clients Say</h2>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 w-full">
          <div className="bg-white/10 rounded-2xl p-6 sm:p-8 shadow-lg border border-tech-accent/20 flex flex-col gap-4 items-center">
            <p className="text-sm sm:text-lg italic text-tech-secondary text-center">&quot;Since integrating the chatbot across our website, WhatsApp, and Telegram, we&apos;ve seen a dramatic drop in response times and a massive boost in customer satisfaction. The automation handles everything from booking inquiries to FAQs – even during peak hours. It&apos;s like having a 24/7 receptionist who never sleeps. Our team can finally focus on more complex issues instead of repeating the same answers all day. Highly recommended!&quot;</p>
            <span className="font-semibold text-tech-highlight text-center text-sm sm:text-base">— Petar Bashoski, Founder at Ozon Agency</span>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 sm:p-8 shadow-lg border border-tech-accent/20 flex flex-col gap-4 items-center">
            <p className="text-sm sm:text-lg italic text-tech-secondary text-center">&quot;Managing thousands of SKUs used to be a nightmare. Thanks to the automation system Marko built, we now track inventory levels in real-time, get low-stock alerts, and automatically generate restock orders. Our stockouts dropped by 80%, and overstocking is finally under control. What used to take hours now happens automatically. It&apos;s been a game-changer for our operations.&quot;</p>
            <span className="font-semibold text-tech-highlight text-center text-sm sm:text-base">— Pavel Konev, Managing Director at Andrej Kompani</span>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 sm:p-8 shadow-lg border border-tech-accent/20 flex flex-col gap-4 items-center md:col-span-2">
            <p className="text-sm sm:text-lg italic text-tech-secondary text-center">&quot;Before working with Sonoma and specifically Marko, our agents were wasting hours manually chasing leads. Now, our website visitors are automatically qualified and routed to the right agent through smart forms and follow-up sequences. Our conversions doubled in just a few weeks, and our team finally has time to focus on selling, not data entry. This automation didn&apos;t just save us time, it boosted our revenue.&quot;</p>
            <span className="font-semibold text-tech-highlight text-center text-sm sm:text-base">— Sara Ilic, Founder &amp; CEO at UrbaNest</span>
          </div>
        </div>
      </section>
      {/* LEAD CAPTURE (Calendly/Typeform) */}
      <section id="book-demo" className="w-full max-w-2xl flex flex-col gap-6 sm:gap-8 items-center py-16 sm:py-20 fade-in px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-tech-accent text-center mb-4">Book Your Free Automation Demo</h2>
        <div className="w-full flex flex-col items-center gap-4">
          {/* Calendly/Typeform embed placeholder */}
          <iframe
            src="https://calendly.com/marko-micovski-sonoma-system/30min"
            width="100%"
            height="500"
            className="rounded-xl border border-tech-accent/20 shadow"
            title="Book a Demo"
            style={{ minHeight: 400 }}
          />
          <p className="text-tech-secondary/80 text-center text-xs sm:text-sm">Prefer email? <a href="mailto:info@sonoma-system.com" className="underline text-tech-accent">info@sonoma-system.com</a></p>
        </div>
      </section>
      <footer className="mt-16 sm:mt-20 text-tech-secondary text-xs sm:text-sm opacity-70 px-4">
        &copy; {new Date().getFullYear()} Sonoma-System. All rights reserved.
      </footer>
    </main>
  );
}
