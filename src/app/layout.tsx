import type { Metadata, Viewport } from "next";
import "./globals.css";
import { spaceGrotesk, spaceMono } from "@/lib/fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#E63329",
};

export const metadata: Metadata = {
  title: {
    default: "Hair Studio Dxs — Frizerie Premium Iași | Rating 5.0",
    template: "%s | Hair Studio Dxs",
  },
  description:
    "Frizerie premium în Iași cu rating 5.0 din 513 recenzii. Tunsori fade, bărbierit cu lamă, keratină și botox. Rezervă online. Rond Târgu Cucu 10.",
  keywords: [
    "frizerie iași",
    "tunsoare fade iași",
    "bărbierit lamă iași",
    "hair studio dxs",
    "keratina iași",
  ],
  openGraph: {
    title: "Hair Studio Dxs — Frizerie Premium Iași",
    description: "Rating 5.0 · 513 recenzii · 18 servicii · Rezervă online",
    locale: "ro_RO",
    type: "website",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Hair Studio Dxs",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rond Târgu Cucu, poziția 10",
    addressLocality: "Iași",
    postalCode: "700259",
    addressCountry: "RO",
  },
  telephone: "0747533806",
  openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-17:00"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "513",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "var(--bg-page)",
        }}
      >
        <Nav />
        <main style={{ flex: 1, paddingTop: 64 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
