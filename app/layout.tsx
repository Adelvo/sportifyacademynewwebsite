import type { Metadata, Viewport } from "next";
import { Archivo, Inter, Montserrat } from "next/font/google";
import { BookingProvider } from "@/components/forms/BookingProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { UtmCapture } from "@/components/layout/UtmCapture";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/ui/JsonLd";
import { site, ui } from "@/content";
import { locale } from "@/lib/i18n";
import { localBusinessJsonLd } from "@/lib/jsonld";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin", "latin-ext"], variable: "--font-archivo", display: "swap" });
const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
// Only the homepage hero and header use this. Not preloaded, so other pages never download it.
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-hero", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#02070A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={locale.lang} dir={locale.dir} className={`${archivo.variable} ${inter.variable} ${montserrat.variable}`}>
      <body>
        <JsonLd data={localBusinessJsonLd} />
        <a
          href="#main"
          className="sr-only rounded-full bg-orange px-5 py-3 font-bold text-midnight focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-50"
        >
          {ui.skipToContent}
        </a>
        <UtmCapture />
        <BookingProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </BookingProvider>
      </body>
    </html>
  );
}
