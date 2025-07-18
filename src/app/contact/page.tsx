export default function Contact() {
  return (
    <div className="min-h-screen bg-tech-primary text-tech-secondary flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-lg flex flex-col gap-8">
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
      </div>
    </div>
  );
} 