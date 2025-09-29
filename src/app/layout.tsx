import "./globals.css";
import Navigation from "./components/Navigation";
import Chatbot from "./components/Chatbot";

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
        <Navigation />
        <main className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-4 pt-24">{children}</main>
        <footer className="w-full bg-transparent border-t border-white/10 py-8 mt-20 text-center text-white/60 text-sm">
          &copy; {new Date().getFullYear()} Sonoma-System. All rights reserved.
        </footer>
        <Chatbot />
      </body>
    </html>
  );
}
