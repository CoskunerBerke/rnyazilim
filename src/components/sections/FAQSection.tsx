"use client";

import React from "react";
import { faqItems } from "@/content/company";
import Accordion from "../ui/Accordion";

export const FAQSection: React.FC = () => {
  return (
    <section id="sss" className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent-violet/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col gap-4">
          <span className="text-sm font-semibold tracking-wider text-primary-light uppercase">
            Sıkça Sorulan Sorular
          </span>
          <h2 className="font-plus-jakarta font-bold text-3xl sm:text-4xl text-text-light">
            Merak Ettikleriniz
          </h2>
          <p className="text-sm sm:text-base text-text-gray leading-relaxed max-w-2xl mx-auto">
            Hizmetlerimiz, süreçlerimiz ve çalışma modellerimiz hakkında sıkça sorulan sorulara göz atabilirsiniz.
          </p>
        </div>

        {/* Accordion List */}
        <Accordion items={faqItems} />
      </div>
    </section>
  );
};

export default FAQSection;
