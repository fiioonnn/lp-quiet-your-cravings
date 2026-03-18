import type { Metadata } from "next";
import { Cabin, Montserrat } from "next/font/google";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
        className={`${cabin.variable} ${montserrat.variable} antialiased`}
        style={{ fontFamily: 'var(--font-cabin), sans-serif', backgroundColor: '#fafafa', color: '#54585a' }}
      >
        {children}
      </body>
    </html>
  );
}
