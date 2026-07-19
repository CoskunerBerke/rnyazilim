import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "İletişim",
  description: "RN Yazılım ile iletişime geçin. Kurumsal web tasarımı, özel yazılım geliştirme ve otomasyon projeleriniz için fiyat teklifi ve bilgi alın.",
  alternates: {
    canonical: "/iletisim",
  },
};

export default function ContactPage() {
  return (
    <div className="py-8 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-4 mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-text-gray hover:text-text-light transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-0.5 transition-transform" />
            Ana Sayfaya Dön
          </Link>
          <span className="text-white/10 text-xs">/</span>
          <span className="text-xs text-text-gray/70">İletişim</span>
        </div>
      </div>

      {/* Renders the fully-featured ContactSection */}
      <ContactSection />
    </div>
  );
}
