import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avishka Vishmitha | Full Stack Developer Portfolio",
  description: "Third-year undergraduate at the Faculty of Information Technology, University of Moratuwa. Passionate about full-stack web development and mobile app development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8375898886399091"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
