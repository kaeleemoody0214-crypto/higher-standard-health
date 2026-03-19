import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
