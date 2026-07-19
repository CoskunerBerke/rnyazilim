"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Cpu, Smartphone, Database, ShoppingCart, ExternalLink } from "lucide-react";
import { projects } from "@/content/company";
import Card from "../ui/Card";
import Button from "../ui/Button";

// Central Mockup Visual Component for Project Previews
const ProjectMockup: React.FC<{ slug: string }> = ({ slug }) => {
  switch (slug) {
    case "kurumsal-web-sitesi":
      return (
        <div className="w-full h-full bg-slate-950 border-b border-white/5 flex flex-col p-5 relative overflow-hidden">
          {/* Browser header */}
          <div className="flex items-center gap-1.5 pb-3 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            <div className="h-4 bg-white/5 rounded px-2.5 w-32 text-[8px] text-text-gray/50 flex items-center justify-center font-mono ml-4">
              rnyazilim.com
            </div>
          </div>
          {/* Hero text */}
          <div className="flex-1 flex flex-col gap-3.5 justify-center py-4 relative z-10">
            <div className="h-3 w-1/3 bg-primary/20 rounded animate-pulse" />
            <div className="h-6 w-2/3 bg-gradient-to-r from-primary to-accent-cyan rounded" />
            <div className="h-2 w-1/2 bg-text-gray/20 rounded mt-1" />
            <div className="flex gap-2.5 mt-2">
              <div className="h-6 w-20 bg-primary/30 rounded-md" />
              <div className="h-6 w-20 bg-white/5 rounded-md" />
            </div>
          </div>
          {/* Abstract circles */}
          <div className="absolute right-[-20px] bottom-[-20px] w-36 h-36 rounded-full border border-white/5 bg-gradient-to-tr from-primary/10 to-accent-cyan/10 blur-xl" />
        </div>
      );
    case "e-ticaret-platformu":
      return (
        <div className="w-full h-full bg-slate-950 border-b border-white/5 p-5 flex flex-col justify-between relative overflow-hidden">
          {/* Top navigation */}
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="font-plus-jakarta font-bold text-[9px] text-text-light tracking-wider">MAĞAZA</span>
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-8 bg-white/10 rounded" />
              <ShoppingCart className="h-4 w-4 text-primary-light" />
            </div>
          </div>
          {/* Products grid */}
          <div className="grid grid-cols-3 gap-3 flex-grow mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/5 rounded-lg p-2 flex flex-col justify-between">
                <div className="aspect-square bg-slate-900 rounded-md flex items-center justify-center text-sm">
                  🛍️
                </div>
                <div className="h-2 w-full bg-text-gray/20 rounded mt-2" />
                <div className="flex items-center justify-between mt-1">
                  <div className="h-2 w-5 bg-emerald-500/20 rounded" />
                  <span className="text-[7px] text-emerald-400 font-bold">$99</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case "yonetim-paneli":
      return (
        <div className="w-full h-full bg-slate-950 border-b border-white/5 flex p-4 gap-4 relative overflow-hidden">
          {/* Sidebar */}
          <div className="w-16 border-r border-white/5 flex flex-col gap-2.5 pr-2.5">
            <div className="h-5 w-5 rounded bg-primary" />
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-2.5 w-full bg-white/5 rounded" />
            ))}
          </div>
          {/* Main area */}
          <div className="flex-1 flex flex-col gap-3 justify-between">
            {/* Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex flex-col gap-1">
                <span className="text-[7px] text-text-gray tracking-wider">AKTİF SEVKİYAT</span>
                <span className="text-xs font-bold text-text-light font-mono">1,834 Araç</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex flex-col gap-1">
                <span className="text-[7px] text-text-gray tracking-wider">VERİM ORANI</span>
                <span className="text-xs font-bold text-emerald-400 font-mono">98.4%</span>
              </div>
            </div>
            {/* Chart mockup */}
            <div className="bg-white/5 border border-white/5 rounded-lg p-2 flex-grow flex items-end justify-between gap-1.5 min-h-[50px]">
              {[35, 60, 45, 80, 50, 95, 70].map((h, idx) => (
                <div key={idx} className="flex-1 bg-primary/20 rounded-t relative group" style={{ height: `${h}%` }}>
                  <div className="absolute inset-x-0 bottom-0 bg-primary rounded-t" style={{ height: "40%" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case "yapay-zeka-otomasyonu":
      return (
        <div className="w-full h-full bg-slate-950 border-b border-white/5 p-5 flex flex-col justify-between relative overflow-hidden">
          {/* AI Monogram */}
          <div className="flex items-center gap-2.5 pb-2.5 border-b border-white/5">
            <Cpu className="h-4.5 w-4.5 text-accent-cyan animate-pulse" />
            <span className="text-[9px] font-mono text-accent-cyan">LLM_AGENT_ACTIVE</span>
          </div>
          {/* Chat bubbles */}
          <div className="flex-grow flex flex-col gap-2.5 justify-center py-2.5">
            <div className="self-start bg-white/5 border border-white/5 p-2.5 rounded-xl max-w-[85%] flex flex-col gap-1">
              <div className="h-2 w-16 bg-accent-cyan/20 rounded" />
              <div className="h-2 w-28 bg-text-gray/20 rounded" />
            </div>
            <div className="self-end bg-primary/20 border border-primary/10 p-2.5 rounded-xl max-w-[85%] flex flex-col gap-1">
              <div className="h-2 w-12 bg-primary-light/30 rounded" />
              <div className="h-2 w-32 bg-text-light/20 rounded" />
            </div>
          </div>
          {/* Input field */}
          <div className="h-7 bg-white/5 rounded border border-white/5 flex items-center px-3 justify-between">
            <span className="text-[8px] text-text-gray">Yapay zekaya sor...</span>
            <span className="text-[8px] text-accent-cyan">⌨️</span>
          </div>
        </div>
      );
    case "rezervasyon-sistemi":
      return (
        <div className="w-full h-full bg-slate-950 border-b border-white/5 p-4 flex flex-col justify-between relative overflow-hidden">
          {/* Calendar top */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <span className="text-[9px] font-bold text-text-light">TEMMUZ 2026</span>
            <Calendar className="h-4 w-4 text-primary-light" />
          </div>
          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1.5 mt-2.5 text-center text-[7px] font-mono text-text-gray">
            {["P", "S", "Ç", "P", "C", "C", "P"].map((d, i) => (
              <span key={i} className="font-bold">{d}</span>
            ))}
            {Array.from({ length: 14 }).map((_, i) => {
              const isSelected = i === 8 || i === 9;
              return (
                <span
                  key={i}
                  className={`p-2 rounded-md flex items-center justify-center ${
                    isSelected ? "bg-primary text-text-light font-bold" : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {i + 1}
                </span>
              );
            })}
          </div>
          <div className="h-5 bg-primary/10 rounded flex items-center justify-center text-[8px] text-primary-light font-semibold mt-2">
            ✓ 2 Gün Seçildi (Rezervasyon Yapılabilir)
          </div>
        </div>
      );
    case "mobil-uygulama":
      return (
        <div className="w-full h-full bg-slate-950 border-b border-white/5 flex items-center justify-center p-4 relative overflow-hidden">
          {/* Phone outline */}
          <div className="w-36 h-48 border border-white/10 bg-slate-900 rounded-2xl p-3 flex flex-col justify-between shadow-2xl relative">
            <div className="w-14 h-3 bg-white/15 rounded-full mx-auto mb-2" />
            <div className="flex-grow flex flex-col gap-2">
              <span className="text-[8px] font-bold text-text-light">CİHAZLAR</span>
              <div className="bg-white/5 p-1.5 rounded-md border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Smartphone className="h-3 w-3 text-accent-cyan" />
                  <span className="text-[6px] text-text-light font-semibold">Salon Işıkları</span>
                </div>
                <div className="w-6 h-3 bg-accent-cyan/20 rounded-full flex items-center justify-end px-0.5">
                  <div className="w-2.5 h-2.5 bg-accent-cyan rounded-full animate-pulse" />
                </div>
              </div>
              <div className="bg-white/5 p-1.5 rounded-md border border-white/5 flex items-center justify-between opacity-60">
                <div className="flex items-center gap-1.5">
                  <Database className="h-3 w-3 text-text-gray" />
                  <span className="text-[6px] text-text-light font-semibold">Ana Sunucu</span>
                </div>
                <div className="w-6 h-3 bg-white/10 rounded-full flex items-center justify-start px-0.5">
                  <div className="w-2.5 h-2.5 bg-text-gray rounded-full" />
                </div>
              </div>
            </div>
            <div className="w-7 h-1 bg-white/25 rounded-full mx-auto mt-2" />
          </div>
        </div>
      );
    case "avs-servis":
      return (
        <div className="w-full h-full bg-slate-950 border-b border-white/5 flex flex-col p-5 relative overflow-hidden">
          {/* Browser header */}
          <div className="flex items-center gap-1.5 pb-3 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            <div className="h-4 bg-white/5 rounded px-2 w-32 text-[8px] text-text-gray/50 flex items-center justify-center font-mono ml-4">
              avsservis.com.tr
            </div>
          </div>
          {/* Fleet tracker */}
          <div className="flex-grow flex flex-col gap-3 justify-center py-2 relative z-10">
            <span className="text-[9px] font-bold text-accent-cyan tracking-wider">AVS FİLO TAKİP SİSTEMİ</span>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex items-center gap-2">
                <span className="text-base">🚚</span>
                <div className="flex flex-col">
                  <span className="text-[9px] text-text-light font-bold">142 Araç</span>
                  <span className="text-[6px] text-text-gray">Sevk Edildi</span>
                </div>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex items-center gap-2">
                <span className="text-base">📍</span>
                <div className="flex flex-col">
                  <span className="text-[9px] text-text-light font-bold">Aktif Rota</span>
                  <span className="text-[6px] text-emerald-400">Gecikme Yok</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "quattro-garaj":
      return (
        <div className="w-full h-full bg-slate-950 border-b border-white/5 p-5 flex flex-col justify-between relative overflow-hidden">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
            <span className="font-plus-jakarta font-bold text-[9px] text-accent-cyan tracking-wider">QUATTRO PERFORMANCE</span>
            <span className="text-[8px] text-text-gray font-mono">DYNO: ACTIVE</span>
          </div>
          {/* Car service parameters */}
          <div className="flex-grow flex flex-col gap-2.5 justify-center py-2">
            <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex justify-between items-center">
              <span className="text-[9px] text-text-light">🚗 Porsche 911 Stage 2</span>
              <span className="text-[8px] text-emerald-400 font-bold font-mono">Tamamlandı</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-center">
                <span className="text-[7px] text-text-gray block uppercase">GÜÇ ARTIŞI</span>
                <span className="text-[10px] font-bold text-text-light font-mono">+120 HP</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-center">
                <span className="text-[7px] text-text-gray block uppercase">TORK ARTIŞI</span>
                <span className="text-[10px] font-bold text-accent-cyan font-mono">+150 NM</span>
              </div>
            </div>
          </div>
        </div>
      );
    case "dent-liart":
      return (
        <div className="w-full h-full bg-slate-950 border-b border-white/5 p-4 flex flex-col justify-between relative overflow-hidden">
          {/* Clinic layout */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <span className="text-[9px] font-bold text-text-light">DENT LIART PORTAL</span>
            <span className="text-[8px] text-primary-light font-mono">DİŞ HEKİMİ</span>
          </div>
          <div className="flex-grow flex flex-col gap-3 justify-center py-2">
            <div className="bg-white/5 p-2.5 rounded-lg border border-white/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm">
                👨‍⚕️
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] text-text-light font-bold">Dr. Hakan Demir</span>
                <span className="text-[7px] text-text-gray">Çene Cerrahisi Uzmanı</span>
              </div>
            </div>
            <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex items-center justify-between text-[8px] text-text-gray">
              <span>Sonraki Boş Randevu: Salı 10:00</span>
              <span className="text-emerald-400 font-bold">Kayıt Al</span>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="w-full h-full bg-slate-950 flex items-center justify-center text-text-gray p-6">
          <span className="text-xs">Sistem Ön İzleme Hazırlanıyor...</span>
        </div>
      );
  }
};

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState("hepsi");
  const [activeProjectSlug, setActiveProjectSlug] = useState("");

  const categories = [
    { slug: "hepsi", name: "Hepsi" },
    { slug: "web-tasarimi", name: "Web Tasarımı" },
    { slug: "ozel-yazilim", name: "Özel Yazılım" },
    { slug: "yapay-zeka", name: "Yapay Zekâ" },
    { slug: "mobil", name: "Mobil" },
  ];

  const filteredProjects =
    filter === "hepsi"
      ? projects
      : projects.filter((p) => p.categorySlug === filter);

  useEffect(() => {
    if (filteredProjects.length > 0) {
      if (!filteredProjects.some((p) => p.slug === activeProjectSlug)) {
        setActiveProjectSlug(filteredProjects[0].slug);
      }
    }
  }, [filter, filteredProjects, activeProjectSlug]);

  return (
    <section id="projeler" className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-accent-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-4">
          <span className="text-sm font-semibold tracking-wider text-primary-light uppercase">
            Portfolyomuz
          </span>
          <h2 className="font-plus-jakarta font-bold text-3xl sm:text-4xl text-text-light">
            Seçili Projelerimiz
          </h2>
          <p className="text-sm sm:text-base text-text-gray leading-relaxed">
            Müşterilerimizin özel taleplerine yönelik gerçekleştirdiğimiz, teknik kabiliyetlerimizi gösteren örnek proje senaryolarını inceleyin.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setFilter(cat.slug)}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg border transition-all duration-300 cursor-pointer ${
                filter === cat.slug
                  ? "bg-primary border-primary text-text-light shadow-lg shadow-primary/20"
                  : "bg-white/5 border-white/5 text-text-gray hover:text-text-light hover:bg-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          <div className="col-span-5 flex flex-col gap-4 h-[550px] overflow-y-auto no-scrollbar pr-2 border-r border-white/5">
            <div className="flex flex-col gap-3">
              {filteredProjects.map((project) => {
                const isActive = project.slug === activeProjectSlug;
                return (
                  <div
                    key={project.slug}
                    onClick={() => setActiveProjectSlug(project.slug)}
                    className={`p-5 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-bg-card border-primary/30 shadow-lg shadow-primary/5"
                        : "bg-white/[0.01] border-white/5 hover:bg-white/5 hover:border-white/10"
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="font-plus-jakarta font-bold text-base md:text-lg text-text-light">
                        {project.title}
                      </h3>
                      <p className="text-xs text-text-gray leading-relaxed line-clamp-2">
                        {project.challenge}
                      </p>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicatorLine"
                          className="h-0.5 bg-gradient-to-r from-primary to-accent-cyan rounded-full mt-3 w-16"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-7 sticky top-28 h-[550px]">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => {
                if (project.slug !== activeProjectSlug) return null;
                return (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full h-full flex flex-col"
                  >
                    <Card className="p-0 overflow-hidden border border-white/10 glow-blue h-full flex flex-col">
                      <div className="flex-grow min-h-0 relative">
                        <ProjectMockup slug={project.slug} />
                      </div>
                      
                      <div className="p-6 bg-slate-950/80 border-t border-white/5 backdrop-blur-md flex flex-col gap-3">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider">
                              {project.category}
                            </span>
                            <h4 className="font-plus-jakarta font-bold text-lg text-text-light">
                              {project.title}
                            </h4>
                          </div>
                          <div className="flex gap-2">
                            {project.projectUrl && (
                              <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-text-gray hover:text-text-light hover:bg-white/10 transition-all text-xs font-semibold cursor-pointer"
                              >
                                Canlı Site
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                            <Link href={`/projeler/${project.slug}`}>
                              <Button variant="primary" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>
                                İncele
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="p-0 overflow-hidden h-full flex flex-col group border border-white/5 hover:border-primary/20 shadow-md">
                <div className="w-full h-48 relative">
                  <ProjectMockup slug={project.slug} />
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between gap-5">
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] font-bold text-primary-light uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-plus-jakarta font-bold text-base md:text-lg text-text-light leading-snug group-hover:text-primary-light transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-gray leading-relaxed mt-1 line-clamp-3">
                      <span className="font-semibold text-text-light/80">Problem:</span> {project.challenge}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <Link
                      href={`/projeler/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-text-light hover:text-primary-light transition-colors group/link"
                    >
                      Projeyi İncele
                      <ArrowRight className="h-3.5 w-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-text-gray hover:text-text-light transition-colors"
                      >
                        Canlı Site
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
