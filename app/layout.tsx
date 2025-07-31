import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

import {Toaster} from "sonner";


const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinterview",
  description: "An AI-powered platform for preparing for mock interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      // for dark theme permanently( shadcn components that support both themes won't disrupt design )
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern`}
        // pattern for grid background
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
