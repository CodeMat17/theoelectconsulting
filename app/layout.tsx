import type { Metadata } from "next";
import { ThemeProvider } from "@/theme/theme=provider";
import localFont from "next/font/local";
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
  title: "Theo-Elect Global Consulting - Anti-Corruption & Governance Experts",
  description:
    "Promoting transparency, accountability, and ethical excellence in public and private institutions",
  keywords: [
    "anti-corruption consultancy Nigeria",
    "governance training",
    "ethics compliance",
    "corruption prevention",
    "public sector reform",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://theoelectconsulting.com.ng",
    siteName: "Theo-Elect Global Consulting Ltd",
    images: [
      {
        url: "https://www.theoelectconsulting.com.ng/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://theoelectconsulting.com.ng",
  },
  twitter: {
    card: "summary_large_image",
    title: "Theo-Elect Global Consulting",
    description: "Driving Transparency, Accountability, and Ethical Excellence",
    images: ["https://theoelectconsulting.com.ng/opengraph-image"],
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
