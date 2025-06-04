import { ThemeProvider } from "@/theme/theme=provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import JsonLd from "./components/JsonLd";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | TheoElect Consulting",
    default: "TheoElect Consulting - Anti-Corruption Research & Consultancy",
  },
  description:
    "Leading anti-corruption consultancy firm specializing in governance, transparency, and institutional reforms. Access expert insights on corruption prevention and ethical leadership.",
  keywords: [
    "anti-corruption books",
    "corruption prevention",
    "anti-corruption agencies",
    "Nigerian anti-corruption",
    "governance consulting",
    "institutional reforms",
    "ethical leadership",
    "corruption risk assessment",
    "public sector transparency",
    "anti-corruption research",
    "Olukile Olusesan",
    "TheoElect Consulting",
  ],
  authors: [{ name: "Olukile Olusesan" }, { name: "TheoElect Consulting" }],
  creator: "TheoElect Consulting",
  publisher: "TheoElect Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "TheoElect Consulting - Anti-Corruption Research & Consultancy",
    description:
      "Expert insights on corruption prevention, institutional reforms, and ethical leadership in Nigeria.",
    url: "https://theoelectconsulting.com.ng",
    siteName: "TheoElect Consulting",
    locale: "en_NG",
    type: "website",
    images: "/opengraph-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheoElect Consulting - Anti-Corruption Research & Consultancy",
    description:
      "Expert insights on corruption prevention, institutional reforms, and ethical leadership in Nigeria.",
    creator: "@theoelect",
    images: "/opengraph-image.jpg",
  },
  verification: {
    google: "L71FVRFZhFbomfJBZzyeH3zsFIca-2yUE0H-zX3eNd0",
  },
  category: "Consulting",
  alternates: {
    canonical: "https://theoelectconsulting.com.ng",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
