import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ultimate Glucose Support | Happy Mammoth",
  description: "Wie ich jeden Morgen aufwache und meine Essensgelüste für den ganzen Tag ausschalte - Jetzt sind 7 Kilo endgültig runter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-cream`}
      >
        {children}
      </body>
    </html>
  );
}
