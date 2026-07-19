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
                İşletmeniz için en uygun dijital çözümü birlikte planlayalım. Form doldurma zahmetine girmeden, tek tıkla doğrudan WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
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
 
          {/* WhatsApp Direct Action Panel */}
          <div className="lg:col-span-7 w-full">
            <div className="border border-white/5 bg-slate-900/30 backdrop-blur-md rounded-2xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-center items-center text-center gap-8 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
              {/* Decorative radial blur backing */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none" />
              
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 relative">
                <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping pointer-events-none" style={{ animationDuration: "3s" }} />
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.023-5.101-2.887-6.968C16.579 1.919 14.113 1.09 11.5 1.09 6.066 1.09 1.64 5.51 1.636 10.942c-.001 1.702.469 3.361 1.359 4.798L1.936 21.01l4.711-1.236-.001-.001-.001-.001zM20.52 17.658c-.33-.165-1.954-.965-2.253-1.074-.3-.109-.518-.165-.736.165-.218.33-.844 1.073-1.034 1.292-.19.218-.379.245-.71.082-1.802-.9-3.04-1.579-4.24-3.642-.317-.544.317-.505.908-1.686.1-.197.05-.37-.024-.518-.074-.148-.736-1.772-1.009-2.428-.266-.64-.537-.552-.736-.562-.19-.01-.409-.012-.627-.012s-.573.082-.872.409c-.3.33-1.144 1.118-1.144 2.727s1.171 3.161 1.334 3.38c.164.218 2.304 3.518 5.582 4.935 2.73 1.18 3.284.945 3.829.892.546-.053 1.954-.798 2.227-1.53.273-.732.273-1.359.19-1.484-.082-.125-.3-.218-.63-.383z"/>
                </svg>
              </div>

              <div className="flex flex-col gap-3 max-w-lg">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 font-mono">
                  HIZLI BAŞVURU HATI
                </span>
                <h3 className="font-plus-jakarta font-bold text-2xl sm:text-3xl text-text-light">
                  WhatsApp İle Projenizi Konuşalım
                </h3>
                <p className="text-sm sm:text-base text-text-gray leading-relaxed">
                  Form doldurarak vakit kaybetmeyin. Tek tıkla doğrudan WhatsApp destek hattımıza ulaşın ve projenizi anında detaylandırmaya başlayın.
                </p>
              </div>

              {/* Direct Link Button */}
              <a
                href="https://wa.me/905326161276?text=Merhaba%20RN%20Yaz%C4%B1l%C4%B1m%2C%20web%20siteniz%20%C3%BCzerinden%20ula%C5%9F%C4%B1yorum.%20Projemiz%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyoruz."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base sm:text-lg py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.023-5.101-2.887-6.968C16.579 1.919 14.113 1.09 11.5 1.09 6.066 1.09 1.64 5.51 1.636 10.942c-.001 1.702.469 3.361 1.359 4.798L1.936 21.01l4.711-1.236-.001-.001-.001-.001zM20.52 17.658c-.33-.165-1.954-.965-2.253-1.074-.3-.109-.518-.165-.736.165-.218.33-.844 1.073-1.034 1.292-.19.218-.379.245-.71.082-1.802-.9-3.04-1.579-4.24-3.642-.317-.544.317-.505.908-1.686.1-.197.05-.37-.024-.518-.074-.148-.736-1.772-1.009-2.428-.266-.64-.537-.552-.736-.562-.19-.01-.409-.012-.627-.012s-.573.082-.872.409c-.3.33-1.144 1.118-1.144 2.727s1.171 3.161 1.334 3.38c.164.218 2.304 3.518 5.582 4.935 2.73 1.18 3.284.945 3.829.892.546-.053 1.954-.798 2.227-1.53.273-.732.273-1.359.19-1.484-.082-.125-.3-.218-.63-.383z"/>
                </svg>
                WhatsApp İle İletişime Geç
              </a>

              {/* Advantage checklist */}
              <div className="w-full border-t border-white/5 pt-6 mt-2 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-xs text-text-gray font-medium">
                <div className="flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  ⚡ Anında Dönüş
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  📄 Kolay Dosya Paylaşımı
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  📞 Hızlı Toplantı Planı
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
