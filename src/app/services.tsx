export default function Services() {
  return (
    <div className="min-h-screen bg-tech-primary text-tech-secondary flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl flex flex-col gap-8">
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
      </div>
    </div>
  );
} 