export default function Services() {
  return (
    <div className="min-h-screen bg-tech-primary text-tech-secondary flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl flex flex-col gap-12 items-center">
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
      </div>
    </div>
  );
} 