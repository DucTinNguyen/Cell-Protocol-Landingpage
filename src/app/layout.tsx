import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

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

const neueHaas = localFont({
  src: [
    {
      path: "./fonts/NeueHaasDisplayLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasDisplayMediu.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas",
});

const marbold = localFont({
  src: "./fonts/MARBOLD.ttf",
  variable: "--font-marbold",
});

const cirka = localFont({
  src: "./fonts/Cirka-Variable.ttf",
  variable: "--font-cirka",
  weight: "500",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cellprotocol.science"),
  title: "THE FUTURE OF DECENTRALIZED SCIENCE",
  description: "Discover the next wave of research: blockchain powered and boundless",
  openGraph: {
    title: "THE FUTURE OF DECENTRALIZED SCIENCE",
    description: "Discover the next wave of research: blockchain powered and boundless",
    url: new URL("https://www.cellprotocol.science")
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>THE FUTURE OF DECENTRALIZED SCIENCE</title>
        <meta
          name="description"
          content="Discover the next wave of research: blockchain powered and boundless"
        />
        <meta property="og:image" content="./opengraph-image.png"></meta>
        <meta property="og:url" content="https://www.cellprotocol.science"></meta>
        <meta property="og:title" content="THE FUTURE OF DECENTRALIZED SCIENCE"></meta>
        <meta property="og:site_name" content="https://www.cellprotocol.science"></meta>
        <meta
          property="og:description"
          content="Discover the next wave of research: blockchain powered and boundless"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.ico"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${neueHaas.variable} ${marbold.variable} ${cirka.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
