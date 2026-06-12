import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Al-Muhanad Restaurant | مطعم المهند - Authentic Iraqi Cuisine in Baghdad',
  description: 'Experience luxury dining at Al-Muhanad Restaurant in Baghdad. Savor authentic Iraqi, Middle Eastern, and Western cuisine in an elegant setting. Reserve your table or order online.',
  keywords: ["Iraqi restaurant, Baghdad, Middle Eastern food, Western cuisine, luxury dining, Al-Muhanad, مطعم المهند, Iraqi food, reservations, online order"],
  openGraph: {
    "title": "Al-Muhanad Restaurant | مطعم المهند - Authentic Iraqi Cuisine in Baghdad",
    "description": "Experience luxury dining at Al-Muhanad Restaurant in Baghdad. Savor authentic Iraqi, Middle Eastern, and Western cuisine in an elegant setting. Reserve your table or order online.",
    "url": "https://www.almuhanadrestaurant.com",
    "siteName": "Al-Muhanad Restaurant",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/elegant-dessert-white-plate-decorated-with-flowers_23-2151973729.jpg",
        "alt": "Al-Muhanad Restaurant Signature Dish"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Al-Muhanad Restaurant | مطعم المهند - Authentic Iraqi Cuisine in Baghdad",
    "description": "Experience luxury dining at Al-Muhanad Restaurant in Baghdad. Savor authentic Iraqi, Middle Eastern, and Western cuisine in an elegant setting. Reserve your table or order online.",
    "images": [
      "http://img.b2bpic.net/free-photo/elegant-dessert-white-plate-decorated-with-flowers_23-2151973729.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
