export default function About() {
  return (
    <div className="min-h-screen bg-tech-primary text-tech-secondary flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl flex flex-col gap-12 items-center relative">
        <h1 className="text-4xl font-bold text-tech-accent text-center mb-4">About Sonoma-System</h1>
        <div className="flex flex-col items-center gap-6">
          <div className="w-32 h-32 rounded-full bg-tech-accent/30 flex items-center justify-center mb-2">
            {/* Founder image placeholder */}
            <span className="text-5xl text-tech-accent font-bold">M</span>
          </div>
          <p className="text-lg text-tech-secondary text-center">
            Sonoma-System was founded with a vision: to empower businesses through intelligent automation. We believe that every company, big or small, deserves access to the latest in automation technology.
          </p>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="bg-tech-secondary/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20">
            <h2 className="text-xl font-semibold text-tech-highlight mb-2">Our Mission</h2>
            <p>To unleash business potential by delivering innovative, reliable, and custom automation solutions that drive growth and efficiency.</p>
          </div>
          <div className="bg-tech-secondary/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20">
            <h2 className="text-xl font-semibold text-tech-highlight mb-2">Our Values</h2>
            <ul className="list-disc list-inside ml-4">
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Customer Success</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-8">
          <h2 className="text-xl font-semibold text-tech-highlight mb-4">Our Story</h2>
          <div className="w-full max-w-md border-l-4 border-tech-accent pl-6 flex flex-col gap-6">
            <div>
              <span className="block text-tech-accent font-bold">2023</span>
              <span className="block text-tech-secondary">Sonoma-System founded</span>
            </div>
            <div>
              <span className="block text-tech-accent font-bold">2024</span>
              <span className="block text-tech-secondary">Launched first AI chatbot and workflow automation for clients</span>
            </div>
            <div>
              <span className="block text-tech-accent font-bold">2025</span>
              <span className="block text-tech-secondary">Expanded to serve clients internationally</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 