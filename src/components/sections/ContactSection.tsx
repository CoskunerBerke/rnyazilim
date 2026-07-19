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
                    {companyInfo.workingHours || "Pazartesi - Cuma: 09:00 - 18:00"}
                  </span>
                </div>
              </div>
            </div>

            {/* Abstract World Connectivity Map */}
            <div className="w-full h-44 rounded-xl border border-white/5 bg-slate-900/20 backdrop-blur-sm relative overflow-hidden flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.3004313337!2d32.622681530932454!3d39.9032598687702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520e3621f%3A0xbd12a8524d22080!2sAnkara%2C%20Turkey!5e0!3m2!1sen!2str!4v1716300000000!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%) contrast(95%) opacity(0.75)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RN Yazılım Ankara Ofisi Haritası"
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none" />
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
