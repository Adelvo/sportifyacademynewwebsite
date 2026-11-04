import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
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

const montserrat = Montserrat({ subsets: ["latin", "latin-ext"], variable: "--font-hero", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#0A1F33",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={locale.lang} dir={locale.dir} className={montserrat.variable}>
      <body>
        <JsonLd data={localBusinessJsonLd} />
        <a
          href="#main"
          className="sr-only rounded-full bg-cyan px-5 py-3 font-bold text-midnight focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-50"
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
