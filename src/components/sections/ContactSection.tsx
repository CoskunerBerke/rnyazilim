"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { companyInfo } from "@/content/company";
import ContactForm from "../forms/ContactForm";

export const ContactSection: React.FC = () => {
  return (
    <section id="iletisim" className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-accent-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Details & Abstract Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-sm font-semibold tracking-wider text-primary-light uppercase">
                Bize Ulaşın
              </span>
              <h2 className="font-plus-jakarta font-bold text-3xl sm:text-4xl text-text-light mt-2 mb-4">
                Projenizi Bize Anlatın
              </h2>
              <p className="text-sm sm:text-base text-text-gray leading-relaxed">
                İşletmeniz için en uygun dijital çözümü birlikte planlayalım. Formu doldurarak veya doğrudan iletişim kanallarımızdan bize ulaşabilirsiniz.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
                <MapPin className="h-6 w-6 text-primary-light shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-text-light">Ofisimiz</span>
                  <span className="text-xs sm:text-sm text-text-gray leading-relaxed">
                    {companyInfo.address}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
                <Phone className="h-6 w-6 text-primary-light shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-text-light">Telefon</span>
                  <a href={`tel:${companyInfo.phoneFormatted}`} className="text-xs sm:text-sm text-text-gray hover:text-text-light transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
                <Mail className="h-6 w-6 text-primary-light shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-text-light">E-posta</span>
                  <a href={`mailto:${companyInfo.email}`} className="text-xs sm:text-sm text-text-gray hover:text-text-light transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-slate-900/40 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
                <Clock className="h-6 w-6 text-primary-light shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-sm text-text-light">Çalışma Saatleri</span>
                  <span className="text-xs sm:text-sm text-text-gray">
                    Pazartesi - Cuma: 09:00 - 18:00
                  </span>
                </div>
              </div>
            </div>

            {/* Abstract World Connectivity Map */}
            <div className="w-full h-44 rounded-xl border border-white/5 bg-slate-900/20 backdrop-blur-sm relative overflow-hidden flex items-center justify-center">
              {/* Map background grids */}
              <svg className="absolute inset-0 w-full h-full text-white/[0.02]" xmlns="http://www.w3.org/2000/svg">
                <pattern id="mapGrid" width="16" height="16" patternUnits="userSpaceOnUse">
                  <rect width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#mapGrid)" />
              </svg>
              {/* Connection paths */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Türkiye Center hotspot */}
                <circle cx="200" cy="80" r="4" fill="#3b82f6" className="animate-pulse" />
                <circle cx="200" cy="80" r="12" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.4" className="animate-ping" style={{ animationDuration: "2s" }} />

                {/* Europe connection node */}
                <circle cx="150" cy="60" r="3" fill="#06b6d4" />
                {/* Middle East connection node */}
                <circle cx="250" cy="100" r="3" fill="#8b5cf6" />
                {/* America connection node */}
                <circle cx="80" cy="70" r="3" fill="#06b6d4" />
                
                {/* Pulsing pathways */}
                <path d="M 200 80 L 150 60" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                <path d="M 200 80 L 250 100" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
                <path d="M 200 80 L 80 70" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="6 4" />
              </svg>
              <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary-light animate-ping" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-gray/80 font-mono">RN_CLOUD_NODE_TR</span>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="lg:col-span-7 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
