"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center py-24 px-4">
      <div className="w-full max-w-xl bg-white/5 rounded-2xl shadow-2xl p-10 flex flex-col gap-8 items-center backdrop-blur-md">
        <h1 className="text-3xl font-bold text-tech-accent mb-2">Contact Sonoma System</h1>
        <div className="flex flex-col gap-2 w-full text-center">
          <div>
            <span className="font-semibold text-tech-highlight">Email:</span> <a href="mailto:info@sonoma-system.com" className="underline text-tech-accent">info@sonoma-system.com</a>
          </div>
          <div>
            <span className="font-semibold text-tech-highlight">Phone:</span> <a href="tel:+38971252501" className="underline text-tech-accent">+38971252501</a>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-4 mt-6">
          <h2 className="text-xl font-semibold text-tech-accent mb-2">Book a Call</h2>
          <iframe
            src="https://calendly.com/marko-micovski-sonoma-system/30min"
            width="100%"
            height="500"
            className="rounded-xl border border-tech-accent/20 shadow"
            title="Book a Demo"
            style={{ minHeight: 400 }}
          />
        </div>
      </div>
    </div>
  );
} 