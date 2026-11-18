import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./globals.css";
import { usePathname } from "next/dist/client/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nightclub",
  description: "Have a good time",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {" "}
        {isHome && <Hero />}
        <Header />
        {children}
      </body>
    </html>
  );
}
