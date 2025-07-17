export default function About() {
  return (
    <div className="min-h-screen bg-tech-primary text-tech-secondary flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-tech-accent text-center mb-4">About Sonoma-System</h1>
        <p className="text-lg text-tech-secondary text-center">
          Sonoma-System was founded with a vision: to empower businesses through intelligent automation. We believe that every company, big or small, deserves access to the latest in automation technology.
        </p>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-tech-highlight">Our Mission</h2>
          <p>
            To unleash business potential by delivering innovative, reliable, and custom automation solutions that drive growth and efficiency.
          </p>
          <h2 className="text-xl font-semibold text-tech-highlight">Our Values</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Customer Success</li>
            <li>Continuous Improvement</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 