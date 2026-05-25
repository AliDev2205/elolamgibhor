import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";
import "@/styles/globals.css";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "cabinet conseil",
    "conseil strategique",
    "gestion financiere",
    "EL OLAM GIBHOR",
    "audit entreprise",
    "conformite financiere",
    "formation professionnelle finance",
    "business consulting",
    "Paris",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  metadataBase: new URL("https://elolamgibhor.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://elolamgibhor.com",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins antialiased min-h-screen flex flex-col bg-bg-light text-bg-dark`}>
        {children}
      </body>
    </html>
  );
}
