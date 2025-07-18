export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-tech-primary text-tech-secondary flex flex-col items-center justify-center p-8">
      {/* HERO SECTION */}
      <header className="w-full max-w-3xl flex flex-col items-center gap-6 text-center py-24 relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br from-tech-primary via-tech-secondary/20 to-tech-accent/10 mb-20">
        <svg className="absolute -top-10 -right-10 w-48 h-48 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><circle fill="#00cfff" cx="100" cy="100" r="100"/></svg>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-tech-accent drop-shadow-lg leading-tight">Sonoma-System</h1>
        <h2 className="text-2xl sm:text-3xl font-medium text-tech-highlight max-w-2xl">Unleash Your Business Potential with Intelligent Automation</h2>
        <p className="mt-4 text-lg text-tech-secondary max-w-xl">We offer AI & non-AI chatbots, workflow automations, and custom automation solutions dedicated to your business success.</p>
        <div className="flex gap-4 mt-8 flex-col sm:flex-row w-full justify-center">
          <a className="bg-tech-accent text-tech-primary font-semibold rounded-full px-8 py-3 shadow-lg hover:bg-tech-highlight hover:text-tech-primary transition-all text-lg animate-bounce" href="#contact">Get Started</a>
          <a className="border-2 border-tech-accent text-tech-accent font-semibold rounded-full px-8 py-3 hover:bg-tech-accent hover:text-tech-primary transition-all text-lg" href="#services">Our Services</a>
        </div>
      </header>
      {/* Services Section Anchor */}
      <section id="services" className="w-full max-w-6xl mt-32 flex flex-col gap-12 items-center scroll-mt-24">
        <h1 className="text-4xl font-bold text-tech-accent text-center mb-4">Our Services</h1>
        <div className="grid gap-8 md:grid-cols-3 w-full">
          <div className="bg-tech-secondary/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform">
            <svg className="w-12 h-12 mb-4 text-tech-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l-3-3m3 3l3-3"/></svg>
            <h2 className="text-xl font-semibold text-tech-highlight mb-2">AI & Non-AI Chatbots</h2>
            <p className="text-tech-secondary">Engage your customers 24/7 with intelligent chatbots tailored to your business. We build both AI-powered and rule-based bots for websites, social, and support.</p>
          </div>
          <div className="bg-tech-secondary/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform">
            <svg className="w-12 h-12 mb-4 text-tech-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
            <h2 className="text-xl font-semibold text-tech-highlight mb-2">Workflow Automations</h2>
            <p className="text-tech-secondary">Streamline repetitive tasks and connect your favorite tools. Our workflow automations save you time, reduce errors, and boost productivity.</p>
          </div>
          <div className="bg-tech-secondary/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform">
            <svg className="w-12 h-12 mb-4 text-tech-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
            <h2 className="text-xl font-semibold text-tech-highlight mb-2">Custom Automations</h2>
            <p className="text-tech-secondary">Have a unique process? We design and build custom automation solutions dedicated to your business needs, no matter the complexity.</p>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="w-full max-w-4xl mt-32 flex flex-col gap-12 items-center scroll-mt-24">
        <h1 className="text-4xl font-bold text-tech-accent text-center mb-4">What Our Clients Say</h1>
        <div className="grid gap-8 md:grid-cols-2 w-full">
          <div className="bg-tech-secondary/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20 flex flex-col gap-2 md:col-span-2">
            <p className="text-lg italic text-tech-secondary">"Since integrating the chatbot across our website, WhatsApp, and Telegram, we&apos;ve seen a dramatic drop in response times and a massive boost in customer satisfaction. The automation handles everything from booking inquiries to FAQs – even during peak hours. It&apos;s like having a 24/7 receptionist who never sleeps. Our team can finally focus on more complex issues instead of repeating the same answers all day. Highly recommended!"</p>
            <span className="font-semibold text-tech-highlight">— Petar Bashoski, Founder at Ozon Agency</span>
          </div>
          <div className="bg-tech-secondary/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20 flex flex-col gap-2 md:col-span-2">
            <p className="text-lg italic text-tech-secondary">"Managing thousands of SKUs used to be a nightmare. Thanks to the automation system Marko built, we now track inventory levels in real-time, get low-stock alerts, and automatically generate restock orders. Our stockouts dropped by 80%, and overstocking is finally under control. What used to take hours now happens automatically. It&apos;s been a game-changer for our operations."</p>
            <span className="font-semibold text-tech-highlight">— Pavel Konev, Managing Director at Andrej Kompani</span>
          </div>
          <div className="bg-tech-secondary/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20 flex flex-col gap-2 md:col-span-2">
            <p className="text-lg italic text-tech-secondary">"Before working with Sonoma and specifically Marko, our agents were wasting hours manually chasing leads. Now, our website visitors are automatically qualified and routed to the right agent through smart forms and follow-up sequences. Our conversions doubled in just a few weeks, and our team finally has time to focus on selling, not data entry. This automation didn&apos;t just save us time, it boosted our revenue."</p>
            <span className="font-semibold text-tech-highlight">— Sara Ilic, Founder & CEO at UrbaNest</span>
          </div>
        </div>
      </section>
      {/* Contact Section Anchor */}
      <section id="contact" className="w-full max-w-lg mt-32 flex flex-col gap-8 scroll-mt-24">
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
