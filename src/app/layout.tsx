import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#book-demo", label: "Book a Demo" },
];

export const metadata = {
  title: "Sonoma System | Automation Agency for Restaurants, Hotels, and Businesses",
  description: "AI-powered automation for high-end restaurants, hotels, and businesses. Chatbots, inventory, bookings, POS, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white font-sans min-h-screen flex flex-col" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/60 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Sonoma System Logo" width={48} height={48} className="rounded-lg" />
            </Link>
            <div className="flex gap-8 items-center text-base font-medium">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-cyan-300 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-24">{children}</main>
        <footer className="w-full bg-transparent border-t border-white/10 py-8 mt-20 text-center text-white/60 text-sm">
          &copy; {new Date().getFullYear()} Sonoma-System. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
