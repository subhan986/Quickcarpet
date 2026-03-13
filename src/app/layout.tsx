import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "./globals.css";
import TopBar from "@/components/top-bar";
import SplashScreen from "@/components/splash-screen";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});


export const metadata = {
  title: "Quick Step Carpets & Upholstery Dry Cleaning",
  description: "Professional Cleaning For Carpets, Upholstery And Hard Floors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/LOGO.png" type="image/png" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          poppins.variable
        )}
      >
        <SplashScreen />
        <TopBar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
