import Image from "next/image";

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
      <footer className="mt-20 text-tech-secondary text-sm opacity-70">
        &copy; {new Date().getFullYear()} Sonoma-System. All rights reserved.
      </footer>
    </div>
  );
}
