import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-tech-primary text-tech-secondary flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-lg flex flex-col gap-12 items-center relative">
        <h1 className="text-4xl font-bold text-tech-accent text-center mb-4">Contact Us</h1>
        <form 
          action="https://formspree.io/f/xblklyww" 
          method="POST"
          className="flex flex-col gap-4 bg-tech-secondary/10 rounded-2xl p-8 shadow-lg border border-tech-accent/20 w-full"
        >
          <input type="hidden" name="_next" value="/thank-you" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="rounded px-4 py-3 bg-tech-secondary/20 text-tech-primary placeholder:text-tech-primary/60 focus:outline-none focus:ring-2 focus:ring-tech-accent text-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="rounded px-4 py-3 bg-tech-secondary/20 text-tech-primary placeholder:text-tech-primary/60 focus:outline-none focus:ring-2 focus:ring-tech-accent text-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="rounded px-4 py-3 bg-tech-secondary/20 text-tech-primary placeholder:text-tech-primary/60 focus:outline-none focus:ring-2 focus:ring-tech-accent text-lg"
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
        <div className="flex flex-col items-center gap-2 text-tech-secondary/80 mt-4 w-full">
          <p>Email: <a href="mailto:info@sonoma-system.com" className="underline text-tech-accent">info@sonoma-system.com</a></p>
          <div className="flex gap-4 mt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="hover:text-tech-accent" aria-label="LinkedIn">
              <svg width="24" height="24" fill="currentColor" className="inline"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 