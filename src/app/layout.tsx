import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PerformanceModeProvider } from "@/components/context/PerformanceModeProvider";
import "./globals.css";
import { companyInfo } from "@/content/company";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RN Yazılım | Web Tasarım, Özel Yazılım ve Yapay Zekâ Çözümleri",
    template: "%s | RN Yazılım",
  },
  description: "RN Yazılım; kurumsal web tasarımı, özel yazılım geliştirme, e-ticaret, mobil uygulama ve yapay zekâ destekli otomasyon çözümleri sunar.",
  metadataBase: new URL("https://rnyazilim.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RN Yazılım | Web Tasarım, Özel Yazılım ve Yapay Zekâ Çözümleri",
    description: "RN Yazılım; kurumsal web tasarımı, özel yazılım geliştirme, e-ticaret, mobil uygulama ve yapay zekâ destekli otomasyon çözümleri sunar.",
    url: "https://rnyazilim.com",
    siteName: "RN Yazılım",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RN Yazılım | Web Tasarım, Özel Yazılım ve Yapay Zekâ Çözümleri",
    description: "RN Yazılım; kurumsal web tasarımı, özel yazılım geliştirme, e-ticaret, mobil uygulama ve yapay zekâ destekli otomasyon çözümleri sunar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyInfo.name,
    "legalName": companyInfo.legalName,
    "url": `https://${companyInfo.domain}`,
    "logo": `https://${companyInfo.domain}/images/logo.png`,
    "email": companyInfo.email,
    "telephone": companyInfo.phoneFormatted,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyInfo.address,
      "addressLocality": "Sarıyer",
      "addressRegion": "İstanbul",
      "addressCountry": "TR",
    },
    "sameAs": [
      companyInfo.socials.linkedin,
      companyInfo.socials.github,
      companyInfo.socials.instagram,
    ],
  };

  return (
    <html
      lang="tr"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-dark text-text-light font-sans selection:bg-primary/30 selection:text-text-light">
        {/* Skip to Main Content Link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-text-light focus:rounded-md focus:outline-none"
        >
          İçeriğe Atla
        </a>

        <PerformanceModeProvider>
          <Header />
          
          <main id="main-content" className="flex-grow pt-[72px] md:pt-[88px] outline-none">
            {children}
          </main>
          
          <Footer />
        </PerformanceModeProvider>
      </body>
    </html>
  );
}
