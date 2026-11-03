import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Horsforth in Bloom - Community Gardening Group",
  description:
    "Horsforth in Bloom is a community volunteer group that plants flowers, herbs and vegetables throughout Horsforth to create a welcoming and joyful place for everyone to enjoy.",
  keywords:
    "Horsforth, community, gardening, volunteers, flowers, herbs, vegetables, Britain in Bloom",
  openGraph: {
    title: "Horsforth in Bloom - Community Gardening Group",
    description:
      "A community volunteer group that plants flowers, herbs and vegetables throughout Horsforth to create a welcoming and joyful place for everyone to enjoy.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-gray-900 focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <SocialLinks />
        </div>
      </body>
    </html>
  );
}
