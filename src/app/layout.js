import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

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
     <NextAuthSessionProvider>
     <body
        className={`${geistSans.className} antialiased`}
      >
        <Navbar/>
        
        <main className="min-h-[600px] w-11/12 mx-auto my-8">
        {children}
        </main>

        <footer className="text-center bg-slate-600 text-white">
          Awesome NextJS project
        </footer>
      </body>
     </NextAuthSessionProvider>
    </html>
  );
}
