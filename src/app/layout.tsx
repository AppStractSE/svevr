import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import InitializeTheme from "@/components/InitializeTheme";
import { PlusJakartaSans } from "@/util/fonts";
import { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.svevr.se"),
  title: {
    template: "%s | Svevr",
    default: "Precision In The Air | Svevr",
  },
  openGraph: {
    title: "Svevr",
    description: "Precision In The Air",
    url: "/",
    siteName: "Svevr",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Svevr - Precision In The Air",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    title: "Svevr",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Svevr - Precision In The Air",
      },
    ],
    description: "Precision In The Air",
  },
  robots: "max-image-preview:large",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${PlusJakartaSans.className} bg-background text-primary font-medium antialiased`}
      >
        <InitializeTheme />
        <Toaster />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
