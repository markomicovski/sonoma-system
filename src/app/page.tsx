export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-tech-primary text-tech-secondary flex flex-col items-center justify-center p-8">
      <header className="w-full max-w-3xl flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-tech-accent drop-shadow-lg">
          Sonoma-System
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium text-tech-highlight">
          Unleash Your Business Potential with Intelligent Automation
        </h2>
        <p className="mt-4 text-lg text-tech-secondary max-w-xl">
          We offer AI & non-AI chatbots, workflow automations, and custom automation solutions dedicated to your business success.
        </p>
        <div className="flex gap-4 mt-8 flex-col sm:flex-row w-full justify-center">
          <a
            className="bg-tech-accent text-tech-primary font-semibold rounded-full px-8 py-3 shadow-lg hover:bg-tech-highlight hover:text-tech-primary transition-colors text-lg"
            href="#contact"
          >
            Get Started
          </a>
          <a
            className="border-2 border-tech-accent text-tech-accent font-semibold rounded-full px-8 py-3 hover:bg-tech-accent hover:text-tech-primary transition-colors text-lg"
            href="#services"
          >
            Our Services
          </a>
        </div>
      </header>
      {/* Services Section Anchor */}
      <section id="services" className="w-full max-w-3xl mt-32 flex flex-col gap-8 scroll-mt-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-tech-accent text-center mb-4">Our Services</h1>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-tech-secondary/10 rounded-xl p-6 shadow-lg border border-tech-accent/20">
            <h2 className="text-xl font-semibold text-tech-highlight mb-2">AI & Non-AI Chatbots</h2>
            <p>
              Engage your customers 24/7 with intelligent chatbots tailored to your business. We build both AI-powered and rule-based bots for websites, social, and support.
            </p>
          </div>
          <div className="bg-tech-secondary/10 rounded-xl p-6 shadow-lg border border-tech-accent/20">
            <h2 className="text-xl font-semibold text-tech-highlight mb-2">Workflow Automations</h2>
            <p>
              Streamline repetitive tasks and connect your favorite tools. Our workflow automations save you time, reduce errors, and boost productivity.
            </p>
          </div>
          <div className="bg-tech-secondary/10 rounded-xl p-6 shadow-lg border border-tech-accent/20">
            <h2 className="text-xl font-semibold text-tech-highlight mb-2">Custom Automations</h2>
            <p>
              Have a unique process? We design and build custom automation solutions dedicated to your business needs, no matter the complexity.
            </p>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="w-full max-w-2xl mt-32 flex flex-col gap-8 items-center scroll-mt-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-tech-accent text-center mb-4">What Our Clients Say</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-tech-secondary/10 rounded-xl p-6 shadow-lg border border-tech-accent/20 flex flex-col gap-2">
            <p className="text-lg italic text-tech-secondary">“Sonoma-System’s automation solutions saved us hundreds of hours and improved our customer response time dramatically.”</p>
            <span className="font-semibold text-tech-highlight">— Alex P., Operations Manager</span>
          </div>
          <div className="bg-tech-secondary/10 rounded-xl p-6 shadow-lg border border-tech-accent/20 flex flex-col gap-2">
            <p className="text-lg italic text-tech-secondary">“Their team built a custom chatbot that fits our business perfectly. Highly recommended for any business looking to scale.”</p>
            <span className="font-semibold text-tech-highlight">— Jamie L., Founder, RetailPro</span>
          </div>
          <div className="bg-tech-secondary/10 rounded-xl p-6 shadow-lg border border-tech-accent/20 flex flex-col gap-2 md:col-span-2">
            <p className="text-lg italic text-tech-secondary">“Professional, innovative, and reliable. Sonoma-System is our go-to partner for automation.”</p>
            <span className="font-semibold text-tech-highlight">— Priya S., CTO, FinEdge</span>
          </div>
        </div>
      </section>
      {/* Contact Section Anchor */}
      <section id="contact" className="w-full max-w-lg mt-32 flex flex-col gap-8 scroll-mt-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-tech-accent text-center mb-4">Contact Us</h1>
        <form 
          action="https://formspree.io/f/xblklyww" 
          method="POST"
          className="flex flex-col gap-4 bg-tech-secondary/10 rounded-xl p-6 shadow-lg border border-tech-accent/20"
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
            className="bg-tech-accent text-tech-primary font-semibold rounded-full px-8 py-3 shadow-lg hover:bg-tech-highlight hover:text-tech-primary transition-colors text-lg mt-2"
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
