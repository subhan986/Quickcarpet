import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quick Step Carpets & Upholstery Dry Cleaning",
  description: "Professional Cleaning For Carpets, Upholstery And Hard Floors.",
  icons: [{ rel: "icon", url: "/1.jpg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
