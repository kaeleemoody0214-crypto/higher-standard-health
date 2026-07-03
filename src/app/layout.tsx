import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Higher Standard Health | Premium Fitness Coaching Funnel",
  description:
    "Set a Higher Standard for your health with a premium, high-energy coaching funnel built to qualify leads and convert them into booked calls.",
  keywords: [
    "online fitness coach",
    "fitness funnel",
    "fat loss coaching",
    "muscle building coach",
    "Higher Standard Health"
  ],
  openGraph: {
    title: "Higher Standard Health",
    description: "Premium fitness coaching for high-accountability transformations.",
    type: "website"
  },
  metadataBase: new URL("https://higherstandardhealth.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          strategy="lazyOnload"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="QtYeihCLvMyXTrqWeW2N"
        />
      </body>
    </html>
  );
}
