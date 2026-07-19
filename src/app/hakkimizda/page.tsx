import React from "react";
import { Metadata } from "next";
import { ShieldCheck, Cpu, LayoutGrid, HeartHandshake } from "lucide-react";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "RN Yazılım; işletmelerin dijital dünyada daha güçlü, verimli ve erişilebilir olmasını sağlayan web, yazılım ve otomasyon çözümleri geliştirir.",
  alternates: {
    canonical: "/hakkimizda",
  },
};

// Custom SVG Digital Architecture Visual for visual excellence
const DigitalArchitectureVisual: React.FC = () => {
  return (
    <div className="relative aspect-square w-full max-w-[450px] mx-auto flex items-center justify-center select-none bg-slate-900/10 rounded-2xl border border-white/5 p-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent-cyan/5 to-accent-violet/5 rounded-full blur-3xl pointer-events-none" />

      {/* SVG Canvas */}
      <svg
        className="w-full h-full relative z-10"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layer 1: Client / Frontend Layer (Top) */}
        <g id="client-layer" className="transform translate-y-[-10px]">
          <path
            d="M 100 120 L 200 70 L 300 120 L 200 170 Z"
            fill="rgba(15, 23, 42, 0.6)"
            stroke="#2563eb"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />
          <circle cx="200" cy="120" r="3" fill="#2563eb" />
          <path d="M 150 110 L 200 135 L 250 110" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
          <text x="200" y="95" fill="#f8fafc" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            FRONTEND LAYER (UX)
          </text>
        </g>

        {/* Connecting Lines top to mid */}
        <path
          d="M 200 170 V 210 M 130 135 V 195 M 270 135 V 195"
          stroke="url(#connectGradient)"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="4 4"
        />

        {/* Layer 2: API / Backend Layer (Middle) */}
        <g id="api-layer" className="transform translate-y-[50px]">
          <path
            d="M 100 180 L 200 130 L 300 180 L 200 230 Z"
            fill="rgba(15, 23, 42, 0.6)"
            stroke="#06b6d4"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />
          <circle cx="200" cy="180" r="3" fill="#06b6d4" />
          <text x="200" y="155" fill="#f8fafc" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            BACKEND API & SECURITY
          </text>
        </g>

        {/* Connecting Lines mid to bottom */}
        <path
          d="M 200 280 V 320 M 140 250 V 305 M 260 250 V 305"
          stroke="url(#connectGradient2)"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="4 4"
        />

        {/* Layer 3: Database / Infrastructure Layer (Bottom) */}
        <g id="db-layer" className="transform translate-y-[110px]">
          <path
            d="M 100 240 L 200 190 L 300 240 L 200 290 Z"
            fill="rgba(15, 23, 42, 0.6)"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />
          <circle cx="200" cy="240" r="3" fill="#8b5cf6" />
          <text x="200" y="215" fill="#f8fafc" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
            DATABASE & INFRASTRUCTURE
          </text>
        </g>

        <defs>
          <linearGradient id="connectGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="connectGradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute top-4 right-4 text-[9px] font-mono text-text-gray/50 uppercase tracking-widest">
        ARCH_MODEL_V1
      </div>
    </div>
  );
};

export default function AboutPage() {
  const values = [
    {
      title: "Performans ve Hız",
      description: "Sayfaların anında yüklenmesi ve akıcı geçişler kullanıcı kayıplarını önler. Modern SSG/SSR teknikleriyle en hızlı altyapıyı sunuyoruz.",
      icon: Cpu,
    },
    {
      title: "Güvenlik Standardı",
      description: "Veri sızıntılarını ve dış müdahaleleri önlemek adına sunucu yetkilendirmeleri ve girdi doğrulamalarını standart olarak uyguluyoruz.",
      icon: ShieldCheck,
    },
    {
      title: "Kullanıcı Deneyimi (UX)",
      description: "Karışık olmayan, sezgisel ve mobil uyumlu arayüzler tasarlayarak ziyaretçilerin doğrudan hedefe ulaşmasını sağlıyoruz.",
      icon: LayoutGrid,
    },
    {
      title: "Uzun Vadeli İş Ortaklığı",
      description: "Amacımız sadece bir yazılım teslim etmek değil, işletmenizin büyüme süreçlerinde de teknik desteğimizle her zaman yanınızda olmaktır.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with main heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-sm font-semibold tracking-wider text-primary-light uppercase">
              Hakkımızda
            </span>
            <h1 className="font-plus-jakarta font-extrabold text-3xl sm:text-5xl text-text-light leading-tight">
              Teknolojiyi İşletmeniz İçin Avantaja Dönüştürüyoruz.
            </h1>
            <p className="text-base sm:text-lg text-text-gray leading-relaxed font-medium border-l-2 border-primary-light pl-6 py-2">
              “RN Yazılım; işletmelerin dijital dünyada daha güçlü, verimli ve erişilebilir olmasını sağlayan web, yazılım ve otomasyon çözümleri geliştirir. Her projede kullanıcı deneyimini, performansı, güvenliği ve işletmenin gerçek ihtiyaçlarını merkeze alırız. Amacımız yalnızca bir proje teslim etmek değil, uzun vadede değer üreten sürdürülebilir dijital sistemler oluşturmaktır.”
            </p>
          </div>

          {/* Right: Custom Abstract Visual */}
          <div className="lg:col-span-5 w-full">
            <DigitalArchitectureVisual />
          </div>
        </div>

        {/* Core Principles Section */}
        <div className="border-t border-white/5 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <h2 className="font-plus-jakarta font-bold text-2xl sm:text-3xl text-text-light">
              Nasıl Çalışıyoruz?
            </h2>
            <p className="text-sm text-text-gray leading-relaxed">
              Her projede uyguladığımız mühendislik standartları ve felsefemizle işletmenizin yanındayız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <Card key={idx} className="flex flex-col gap-4 border border-white/5 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-light">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-plus-jakarta font-bold text-lg text-text-light">{v.title}</h3>
                  </div>
                  <p className="text-sm text-text-gray leading-relaxed pl-1">
                    {v.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
