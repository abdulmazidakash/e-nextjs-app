import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Learning NextJS',
    template: '%s | Learning NextJS'
  },
  keywords: ['Next.js', 'React', 'JavaScript', 'Learning', 'playground'],
  description: 'Trying to learn NextJS as best as we can',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        
        <main className="min-h-[600px]">
        {children}
        </main>

        <footer className="text-center bg-slate-600 text-white">
          Awesome NextJS project
        </footer>
      </body>
    </html>
  );
}
