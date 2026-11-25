import type { Metadata, Viewport } from "next";
import { Marcellus, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { IntroVideo } from "@/components/IntroVideo";
import "./globals.css";

const display = Marcellus({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const body = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const script = localFont({
  src: [
    {
      path: "../../public/fonts/CitadelScript.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CitadelScript.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sasini & Chathuranga – Royal Lotus Wedding",
  description:
    "A Sri Lankan traditional wedding invitation with personalized RSVP",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fdfbf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full antialiased">
        <IntroVideo />
        {children}
      </body>
    </html>
  );
}
