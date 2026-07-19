import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle, Cpu, Calendar, Smartphone, Database, ShoppingCart, ExternalLink } from "lucide-react";
import { projects } from "@/content/company";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proje Bulunamadı",
    };
  }

  return {
    title: project.title,
    description: project.challenge,
    alternates: {
      canonical: `/projeler/${project.slug}`,
    },
  };
}

// Reuse the mockup renderer inside the detail page for visual quality
const ProjectMockup: React.FC<{ slug: string }> = ({ slug }) => {
  switch (slug) {
    case "kurumsal-web-sitesi":
      return (
        <div className="w-full h-64 bg-slate-900 border border-white/10 rounded-2xl flex flex-col p-6 relative overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 pb-4 border-b border-white/5">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500/60" />
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/60" />
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/60" />
            <div className="h-5 bg-white/5 rounded px-3 w-40 text-xs text-text-gray/50 flex items-center justify-center font-mono ml-4">
              rnyazilim.com
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 justify-center py-6 relative z-10">
            <div className="h-4 w-1/4 bg-primary/20 rounded animate-pulse" />
            <div className="h-7 w-3/4 bg-gradient-to-r from-primary to-accent-cyan rounded" />
            <div className="h-3 w-1/2 bg-text-gray/20 rounded mt-1" />
            <div className="flex gap-3 mt-4">
              <div className="h-7 w-24 bg-primary/30 rounded-md" />
              <div className="h-7 w-24 bg-white/5 rounded-md" />
            </div>
          </div>
          <div className="absolute right-[-40px] bottom-[-40px] w-64 h-64 rounded-full border border-white/5 bg-gradient-to-tr from-primary/10 to-accent-cyan/10 blur-2xl" />
        </div>
      );
    case "e-ticaret-platformu":
      return (
        <div className="w-full h-64 bg-slate-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="font-plus-jakarta font-bold text-xs text-text-light">Premium Mağaza Altyapısı</span>
            <div className="flex items-center gap-4">
              <span className="h-3 w-12 bg-white/10 rounded" />
              <ShoppingCart className="h-5 w-5 text-primary-light" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 flex-grow mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col justify-between">
                <div className="aspect-square bg-slate-950 rounded-lg flex items-center justify-center text-lg">
                  🛍️
                </div>
                <div className="h-3 w-full bg-text-gray/20 rounded mt-3" />
                <div className="flex items-center justify-between mt-2">
                  <div className="h-2 w-8 bg-emerald-500/20 rounded" />
                  <span className="text-xs text-emerald-400 font-bold">$129</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case "yonetim-paneli":
      return (
        <div className="w-full h-64 bg-slate-900 border border-white/10 rounded-2xl flex p-4 gap-4 relative overflow-hidden shadow-2xl">
          <div className="w-16 border-r border-white/5 flex flex-col gap-3 pr-3">
            <div className="h-5 w-5 rounded bg-primary" />
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-3 w-full bg-white/5 rounded" />
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex flex-col gap-1.5">
                <span className="text-[8px] text-text-gray tracking-wider uppercase">AKTİF SEVKİYAT</span>
                <span className="text-sm font-bold text-text-light font-mono">1,834 Araç</span>
              </div>
              <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex flex-col gap-1.5">
                <span className="text-[8px] text-text-gray tracking-wider uppercase">ORTALAMA VERİM</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">98.42%</span>
              </div>
            </div>
            <div className="bg-white/5 border border-white/5 rounded-lg p-3 flex-1 flex items-end justify-between gap-1.5">
              {[30, 50, 40, 75, 45, 90, 65, 80, 55, 95].map((h, idx) => (
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
        <div className="w-full h-64 bg-slate-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          <div className="flex items-center gap-3 pb-3 border-b border-white/5">
            <Cpu className="h-5 w-5 text-accent-cyan animate-pulse" />
            <span className="text-xs font-mono text-accent-cyan">LLM_AGENT_ENV_ACTIVE</span>
          </div>
          <div className="flex-grow flex flex-col gap-3 justify-center py-4">
            <div className="self-start bg-white/5 border border-white/5 p-3 rounded-xl max-w-[85%] flex flex-col gap-1.5">
              <div className="h-2 w-20 bg-accent-cyan/20 rounded" />
              <div className="h-2.5 w-40 bg-text-gray/20 rounded" />
            </div>
            <div className="self-end bg-primary/20 border border-primary/10 p-3 rounded-xl max-w-[85%] flex flex-col gap-1.5">
              <div className="h-2 w-16 bg-primary-light/30 rounded" />
              <div className="h-2.5 w-48 bg-text-light/20 rounded" />
            </div>
          </div>
          <div className="h-8 bg-white/5 rounded-lg border border-white/5 flex items-center px-3 justify-between">
            <span className="text-xs text-text-gray">Kullanıcı talebini buraya yazın...</span>
            <span className="text-xs text-accent-cyan">⚡</span>
          </div>
        </div>
      );
    case "rezervasyon-sistemi":
      return (
        <div className="w-full h-64 bg-slate-900 border border-white/10 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
            <span className="text-xs font-bold text-text-light">RANDEVU & REZERVASYON</span>
            <Calendar className="h-4.5 w-4.5 text-primary-light" />
          </div>
          <div className="grid grid-cols-7 gap-1.5 mt-3 text-center text-[8px] sm:text-xs font-mono text-text-gray">
            {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map((d, i) => (
              <span key={i} className="font-bold">{d}</span>
            ))}
            {Array.from({ length: 14 }).map((_, i) => {
              const isSelected = i === 5 || i === 6 || i === 7;
              return (
                <span
                  key={i}
                  className={`p-2 rounded-md flex items-center justify-center ${
                    isSelected ? "bg-primary text-text-light font-bold" : "bg-white/5"
                  }`}
                >
                  {i + 1}
                </span>
              );
            })}
          </div>
          <div className="h-6 bg-primary/15 rounded flex items-center justify-center text-xs text-primary-light font-semibold mt-2">
            ✓ 3 Gün Seçildi (Rezervasyon İşlemi Tamamlandı)
          </div>
        </div>
      );
    case "mobil-uygulama":
      return (
        <div className="w-full h-64 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center p-4 relative overflow-hidden shadow-2xl">
          <div className="w-40 h-52 border border-white/10 bg-slate-950 rounded-2xl p-3 flex flex-col justify-between shadow-2xl relative">
            <div className="w-16 h-3 bg-white/10 rounded-full mx-auto mb-2" />
            <div className="flex-grow flex flex-col gap-2.5">
              <span className="text-[8px] font-bold text-text-light tracking-wider">IOT KONTROL</span>
              <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Smartphone className="h-3.5 w-3.5 text-accent-cyan" />
                  <span className="text-[7px] text-text-light font-semibold">Cihaz Bağlantısı</span>
                </div>
                <div className="w-6 h-3 bg-accent-cyan/20 rounded-full flex items-center justify-end px-0.5">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full" />
                </div>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Database className="h-3.5 w-3.5 text-primary-light" />
                  <span className="text-[7px] text-text-light font-semibold">Bulut Senkronu</span>
                </div>
                <div className="w-6 h-3 bg-primary/20 rounded-full flex items-center justify-end px-0.5">
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                </div>
              </div>
            </div>
            <div className="w-8 h-1.5 bg-white/20 rounded-full mx-auto mt-2" />
          </div>
        </div>
      );
    case "avs-servis":
      return (
        <div className="w-full h-64 bg-slate-900 border border-white/10 rounded-2xl flex flex-col p-6 relative overflow-hidden shadow-2xl">
          {/* Browser header */}
          <div className="flex items-center gap-2 pb-4 border-b border-white/5">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500/60" />
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/60" />
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/60" />
            <div className="h-5 bg-white/5 rounded px-3 w-40 text-xs text-text-gray/50 flex items-center justify-center font-mono ml-4">
              avsservis.com.tr
            </div>
          </div>
          {/* Fleet tracker details */}
          <div className="flex-grow flex flex-col gap-4 justify-center py-4 relative z-10">
            <span className="text-xs font-bold text-accent-cyan tracking-wider">AVS LOJİSTİK VE FİLO YÖNETİMİ</span>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex items-center gap-3">
                <span className="text-2xl">🚚</span>
                <div className="flex flex-col">
                  <span className="text-xs text-text-light font-bold">142 Araç</span>
                  <span className="text-[9px] text-text-gray">Sevk Edildi</span>
                </div>
              </div>
              <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div className="flex flex-col">
                  <span className="text-xs text-text-light font-bold">Rota Takibi</span>
                  <span className="text-[9px] text-emerald-400">Canlı Bağlantı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "quattro-garaj":
      return (
        <div className="w-full h-64 bg-slate-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="font-plus-jakarta font-bold text-xs text-accent-cyan tracking-wider">QUATTRO PERFORMANCE</span>
            <span className="text-[10px] text-text-gray font-mono">STATUS: DYNO_READY</span>
          </div>
          {/* Car service parameters */}
          <div className="flex-grow flex flex-col gap-3 justify-center py-3">
            <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex justify-between items-center">
              <span className="text-xs text-text-light">🚗 Porsche 911 Stage 2 Tuning</span>
              <span className="text-xs text-emerald-400 font-bold font-mono">Tamamlandı</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
                <span className="text-[8px] text-text-gray block uppercase tracking-wider">HP BOOST</span>
                <span className="text-sm font-bold text-text-light font-mono">+120 HP</span>
              </div>
              <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
                <span className="text-[8px] text-text-gray block uppercase tracking-wider">TORQUE BOOST</span>
                <span className="text-sm font-bold text-accent-cyan font-mono">+150 NM</span>
              </div>
            </div>
          </div>
        </div>
      );
    case "dent-liart":
      return (
        <div className="w-full h-64 bg-slate-900 border border-white/10 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          {/* Clinic layout */}
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <span className="text-xs font-bold text-text-light">DENT LIART DİŞ KLİNİĞİ</span>
            <span className="text-[10px] text-primary-light font-mono">DENTİST_PORTAL</span>
          </div>
          <div className="flex-grow flex flex-col gap-4 justify-center py-3">
            <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">
                👨‍⚕️
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-text-light font-bold">Dr. Hakan Demir</span>
                <span className="text-[10px] text-text-gray">Ortodonti Uzmanı</span>
              </div>
            </div>
            <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex items-center justify-between text-xs text-text-gray">
              <span>Sıradaki Boş Saat: Salı 10:30</span>
              <span className="text-emerald-400 font-bold cursor-pointer hover:underline">Hızlı Randevu</span>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="w-full h-64 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center text-text-gray p-6">
          <span className="text-xs font-mono">Sistem Ön İzleme Hazırlanıyor...</span>
        </div>
      );
  }
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20 bg-bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/projeler"
            className="inline-flex items-center gap-1.5 text-xs text-text-gray hover:text-text-light transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-0.5 transition-transform" />
            Çalışmalarımıza Dön
          </Link>
          <span className="text-white/10 text-xs">/</span>
          <span className="text-xs text-text-gray/70 truncate">{project.title}</span>
        </div>

        {/* Page Content Layout */}
        <div className="flex flex-col gap-10">
          
          {/* Header Block */}
          <div className="pb-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-primary-light uppercase tracking-wider">
                {project.category}
              </span>
              <h1 className="font-plus-jakarta font-extrabold text-2xl sm:text-4xl text-text-light leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/5 text-text-gray font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-primary/20 bg-primary/10 text-primary-light hover:bg-primary/20 transition-all duration-200 text-sm font-semibold shrink-0 cursor-pointer"
              >
                Canlı Siteyi İncele
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Interface Mockup */}
          <div className="w-full">
            <ProjectMockup slug={project.slug} />
          </div>

          {/* Detailed challenge & solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="font-plus-jakarta font-bold text-lg text-text-light">Zorluk (Challenge)</h2>
              <p className="text-sm text-text-gray leading-relaxed">{project.challenge}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-plus-jakarta font-bold text-lg text-text-light">Çözümümüz</h2>
              <p className="text-sm text-text-gray leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Project Results */}
          <div className="flex flex-col gap-4">
            <h2 className="font-plus-jakarta font-bold text-lg text-text-light">Elde Edilen Sonuçlar</h2>
            <ul className="flex flex-col gap-3">
              {project.results.map((res, idx) => (
                <li key={idx} className="flex gap-3 items-start p-4 rounded-xl border border-white/5 bg-slate-900/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-text-gray leading-relaxed">{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <Card className="mt-6 border border-white/10 glow-blue text-center flex flex-col items-center gap-6 p-8 md:p-12">
            <h2 className="font-plus-jakarta font-bold text-xl sm:text-2xl text-text-light">
              Benzer Bir Projeniz mi Var?
            </h2>
            <p className="text-xs sm:text-sm text-text-gray max-w-lg leading-relaxed">
              İşletmenizin operasyonel zorluklarını ve hedeflerini konuşalım. Size en uygun dijital ürünü tasarlayıp teslim edelim.
            </p>
            <Link href={`/iletisim?proje=${project.slug}`}>
              <Button variant="primary" rightIcon={<ArrowRight className="h-4.5 w-4.5" />}>
                Ücretsiz Görüşme Planla
              </Button>
            </Link>
          </Card>

        </div>
      </div>
    </div>
  );
}
