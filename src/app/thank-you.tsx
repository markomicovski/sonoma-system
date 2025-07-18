export default function ThankYou() {
  return (
    <div className="min-h-screen bg-tech-primary text-tech-secondary flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-lg flex flex-col gap-8 items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-tech-accent text-center mb-4">Thank You!</h1>
        <p className="text-lg text-tech-highlight text-center">Sonoma-System thanks you for your response.</p>
        <a href="/" className="mt-8 bg-tech-accent text-tech-primary font-semibold rounded-full px-8 py-3 shadow-lg hover:bg-tech-highlight hover:text-tech-primary transition-colors text-lg">Back to Home</a>
      </div>
    </div>
  );
} 