"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Calendar } from "lucide-react";
import { companyInfo } from "@/content/company";
import Button from "../ui/Button";

export const CTABanner: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-bg-dark border-t border-white/5">
      {/* Background glowing decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-gradient-to-tr from-primary/10 to-accent-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-16 border border-white/10 flex flex-col items-center text-center gap-8 glow-blue">
          {/* Tag */}
          <span className="text-xs font-bold tracking-widest text-primary-light uppercase bg-primary/5 border border-primary/20 rounded-full px-3.5 py-1.5">
            Hemen Başlayın
          </span>

          {/* Heading & Paragraph */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="font-plus-jakarta font-bold text-2xl sm:text-4xl text-text-light leading-tight">
              Aklınızdaki Projeyi Birlikte Hayata Geçirelim.
            </h2>
            <p className="text-sm sm:text-base text-text-gray leading-relaxed">
              İhtiyacınızı anlatın, işletmeniz için en uygun dijital çözümü birlikte planlayalım.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-2">
            <Link href="/iletisim" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto justify-center"
                rightIcon={<Calendar className="h-4.5 w-4.5" />}
              >
                Ücretsiz Görüşme Planla
              </Button>
            </Link>
            <a
              href={companyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto justify-center border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/5 text-emerald-400"
                leftIcon={<MessageSquare className="h-4.5 w-4.5 text-emerald-400" />}
              >
                {"WhatsApp'tan Yaz"}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
