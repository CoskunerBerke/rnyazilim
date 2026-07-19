import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { legalTexts } from "@/content/company";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "RN Yazılım Gizlilik Politikası. Kişisel verilerinizin nasıl işlendiği ve korunduğu hakkında bilgi edinin.",
  alternates: {
    canonical: "/gizlilik-politikasi",
  },
};

export default function PrivacyPolicyPage() {
  const data = legalTexts.privacyPolicy;

  return (
    <div className="py-16 md:py-24 bg-bg-dark text-text-gray">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-text-gray hover:text-text-light transition-colors group mb-8"
        >
          <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-0.5 transition-transform" />
          Ana Sayfaya Dön
        </Link>

        {/* Title */}
        <h1 className="font-plus-jakarta font-extrabold text-3xl sm:text-4xl text-text-light mb-4">
          {data.title}
        </h1>

        {/* Last updated */}
        <div className="flex items-center gap-1.5 text-xs text-text-gray/70 mb-8 pb-4 border-b border-white/5">
          <Clock className="h-4 w-4" />
          <span>Son Güncelleme: {data.lastUpdated}</span>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-6 whitespace-pre-line text-text-gray/90">
          {data.content}
        </div>

      </div>
    </div>
  );
}
