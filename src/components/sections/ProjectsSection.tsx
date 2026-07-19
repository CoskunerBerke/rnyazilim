"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Cpu, Smartphone, Database, ShoppingCart } from "lucide-react";
import { projects } from "@/content/company";
import Card from "../ui/Card";

// Central Mockup Visual Component for Project Previews
const ProjectMockup: React.FC<{ slug: string }> = ({ slug }) => {
  switch (slug) {
    case "kurumsal-web-sitesi":
      return (
        <div className="w-full h-48 bg-slate-900 border-b border-white/5 flex flex-col p-4 relative overflow-hidden">
          {/* Browser header */}
          <div className="flex items-center gap-1.5 pb-3 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            <div className="h-4 bg-white/5 rounded px-2 w-32 text-[8px] text-text-gray/50 flex items-center justify-center font-mono ml-4">
              rnyazilim.com
            </div>
          </div>
          {/* Hero text */}
          <div className="flex-1 flex flex-col gap-2 justify-center py-4 relative z-10">
            <div className="h-3 w-1/3 bg-primary/20 rounded" />
            <div className="h-5 w-2/3 bg-gradient-to-r from-primary to-accent-cyan rounded" />
            <div className="h-2 w-1/2 bg-text-gray/20 rounded mt-1" />
            <div className="flex gap-2 mt-2">
              <div className="h-5 w-16 bg-primary/30 rounded-md" />
              <div className="h-5 w-16 bg-white/5 rounded-md" />
            </div>
          </div>
          {/* Abstract circles */}
          <div className="absolute right-[-20px] bottom-[-20px] w-36 h-36 rounded-full border border-white/5 bg-gradient-to-tr from-primary/10 to-accent-cyan/10 blur-xl" />
        </div>
      );
    case "e-ticaret-platformu":
      return (
        <div className="w-full h-48 bg-slate-900 border-b border-white/5 p-4 flex flex-col justify-between relative overflow-hidden">
          {/* Top navigation */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <span className="font-plus-jakarta font-bold text-[9px] text-text-light">MAĞAZA</span>
            <div className="flex items-center gap-3">
              <span className="h-2 w-6 bg-white/10 rounded" />
              <ShoppingCart className="h-3.5 w-3.5 text-primary-light" />
            </div>
          </div>
          {/* Products grid */}
          <div className="grid grid-cols-3 gap-2 flex-grow mt-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/5 rounded-md p-1.5 flex flex-col justify-between">
                <div className="aspect-square bg-slate-950 rounded flex items-center justify-center text-[10px] text-primary-light">
                  📦
                </div>
                <div className="h-1.5 w-full bg-text-gray/20 rounded mt-1.5" />
                <div className="flex items-center justify-between mt-1">
                  <div className="h-1.5 w-4 bg-emerald-500/20 rounded" />
                  <span className="text-[6px] text-emerald-400 font-bold">$99</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case "yonetim-paneli":
      return (
        <div className="w-full h-48 bg-slate-900 border-b border-white/5 flex p-3 gap-3 relative overflow-hidden">
          {/* Sidebar */}
          <div className="w-12 border-r border-white/5 flex flex-col gap-2 pr-2">
            <div className="h-3.5 w-3.5 rounded bg-primary" />
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-2 w-full bg-white/5 rounded" />
            ))}
          </div>
          {/* Main area */}
          <div className="flex-1 flex flex-col gap-3 justify-between">
            {/* Cards */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 p-1.5 rounded-md border border-white/5 flex flex-col gap-1">
                <span className="text-[6px] text-text-gray">AKTİF KULLANICI</span>
                <span className="text-[10px] font-bold text-text-light font-mono">14,249</span>
              </div>
              <div className="bg-white/5 p-1.5 rounded-md border border-white/5 flex flex-col gap-1">
                <span className="text-[6px] text-text-gray">TOPLAM HIZ</span>
                <span className="text-[10px] font-bold text-emerald-400 font-mono">99.8%</span>
              </div>
            </div>
            {/* Chart mockup */}
            <div className="bg-white/5 border border-white/5 rounded-md p-1.5 flex-1 flex items-end justify-between gap-1">
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
        <div className="w-full h-48 bg-slate-900 border-b border-white/5 p-4 flex flex-col justify-between relative overflow-hidden">
          {/* AI Monogram */}
          <div className="flex items-center gap-2 pb-2 border-b border-white/5">
            <Cpu className="h-4 w-4 text-accent-cyan animate-pulse" />
            <span className="text-[9px] font-mono text-accent-cyan">LLM_AGENT_ACTIVE</span>
          </div>
          {/* Chat bubbles */}
          <div className="flex-grow flex flex-col gap-2 justify-center py-2">
            <div className="self-start bg-white/5 border border-white/5 p-2 rounded-lg max-w-[80%] flex flex-col gap-1">
              <div className="h-1.5 w-16 bg-accent-cyan/20 rounded" />
              <div className="h-1.5 w-24 bg-text-gray/20 rounded" />
            </div>
            <div className="self-end bg-primary/20 border border-primary/10 p-2 rounded-lg max-w-[80%] flex flex-col gap-1">
              <div className="h-1.5 w-12 bg-primary-light/30 rounded" />
              <div className="h-1.5 w-28 bg-text-light/20 rounded" />
            </div>
          </div>
          {/* Input field */}
          <div className="h-5 bg-white/5 rounded border border-white/5 flex items-center px-2 justify-between">
            <span className="text-[7px] text-text-gray">Yapay zekaya sor...</span>
            <span className="text-[7px] text-accent-cyan">⌨️</span>
          </div>
        </div>
      );
    case "rezervasyon-sistemi":
      return (
        <div className="w-full h-48 bg-slate-900 border-b border-white/5 p-3 flex flex-col justify-between relative overflow-hidden">
          {/* Calendar top */}
          <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
            <span className="text-[9px] font-bold text-text-light">TEMMUZ 2026</span>
            <Calendar className="h-3.5 w-3.5 text-primary-light" />
          </div>
          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1 mt-2 text-center text-[7px] font-mono text-text-gray">
            {["P", "S", "Ç", "P", "C", "C", "P"].map((d, i) => (
              <span key={i} className="font-bold">{d}</span>
            ))}
            {Array.from({ length: 14 }).map((_, i) => {
              const isSelected = i === 8 || i === 9;
              return (
                <span
                  key={i}
                  className={`p-1.5 rounded flex items-center justify-center ${
                    isSelected ? "bg-primary text-text-light font-bold" : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {i + 1}
                </span>
              );
            })}
          </div>
          <div className="h-4 bg-primary/10 rounded flex items-center justify-center text-[7px] text-primary-light font-semibold mt-1">
            ✓ 2 Gün Seçildi (Rezervasyon Yapılabilir)
          </div>
        </div>
      );
    case "mobil-uygulama":
      return (
        <div className="w-full h-48 bg-slate-900 border-b border-white/5 flex items-center justify-center p-3 relative overflow-hidden">
          {/* Phone outline */}
          <div className="w-32 h-44 border border-white/10 bg-slate-950 rounded-2xl p-2.5 flex flex-col justify-between shadow-2xl relative">
            <div className="w-12 h-2.5 bg-white/10 rounded-full mx-auto mb-2" />
            <div className="flex-grow flex flex-col gap-1.5">
              <span className="text-[7px] font-bold text-text-light">CİHAZLAR</span>
              <div className="bg-white/5 p-1 rounded-md border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Smartphone className="h-2.5 w-2.5 text-accent-cyan" />
                  <span className="text-[5px] text-text-light font-semibold">Salon Işıkları</span>
                </div>
                <div className="w-5 h-2.5 bg-accent-cyan/20 rounded-full flex items-center justify-end px-0.5">
                  <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse" />
                </div>
              </div>
              <div className="bg-white/5 p-1 rounded-md border border-white/5 flex items-center justify-between opacity-60">
                <div className="flex items-center gap-1">
                  <Database className="h-2.5 w-2.5 text-text-gray" />
                  <span className="text-[5px] text-text-light font-semibold">Ana Sunucu</span>
                </div>
                <div className="w-5 h-2.5 bg-white/10 rounded-full flex items-center justify-start px-0.5">
                  <div className="w-1.5 h-1.5 bg-text-gray rounded-full" />
                </div>
              </div>
            </div>
            <div className="w-6 h-1 bg-white/20 rounded-full mx-auto mt-2" />
          </div>
        </div>
      );
    default:
      return <div className="w-full h-48 bg-slate-900 border-b border-white/5 flex items-center justify-center text-text-gray">Görsel Yüklenemedi</div>;
  }
};

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState("hepsi");

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

  return (
    <section id="projeler" className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-accent-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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

        {/* Filter Buttons */}
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

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <Card className="p-0 overflow-hidden h-full flex flex-col group border border-white/5 hover:border-primary/20 shadow-md">
                  {/* Interface Mockup Preview */}
                  <ProjectMockup slug={project.slug} />

                  {/* Card details */}
                  <div className="p-6 flex flex-col flex-grow justify-between gap-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="font-plus-jakarta font-bold text-lg md:text-xl text-text-light leading-snug group-hover:text-primary-light transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-xs text-text-gray leading-relaxed mt-2 line-clamp-3">
                        <span className="font-semibold text-text-light/80">Problem:</span> {project.challenge}
                      </p>
                    </div>

                    {/* Action Link */}
                    <Link
                      href={`/projeler/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-light hover:text-primary-light transition-colors group/link focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                    >
                      Projeyi İncele
                      <ArrowRight className="h-3.5 w-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
