import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Globe, Code2, ShoppingBag, Cpu, Smartphone, Wrench, ArrowRight } from "lucide-react";
import { services } from "@/content/company";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description: "RN Yazılım; kurumsal web tasarımı, özel yazılım geliştirme, e-ticaret, mobil uygulama ve yapay zekâ destekli otomasyon hizmetleri sunar.",
  alternates: {
    canonical: "/hizmetler",
  },
};

const iconMap = {
  Globe: Globe,
  Code2: Code2,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu,
  Smartphone: Smartphone,
  Wrench: Wrench,
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-sm font-semibold tracking-wider text-primary-light uppercase">
            Hizmet Kataloğu
          </span>
          <h1 className="font-plus-jakarta font-extrabold text-3xl sm:text-5xl text-text-light">
            Neler Yapıyoruz?
          </h1>
          <p className="text-sm sm:text-base text-text-gray leading-relaxed">
            İşletmenizin ihtiyaç duyduğu tüm dijital dönüşüm süreçlerinde yanınızdayız. Modern, güvenli ve performans odaklı çözümlerimizle işinizi geleceğe taşıyoruz.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent =
              (iconMap[service.iconName as keyof typeof iconMap] as React.ComponentType<{ className?: string }>) || Code2;
            return (
              <Card key={service.slug} className="group relative flex flex-col justify-between h-full border border-white/5 hover:border-primary/20 transition-all duration-300">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex flex-col gap-5">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-light group-hover:bg-primary group-hover:text-text-light transition-all duration-300 shadow-md">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Description */}
                  <h2 className="font-plus-jakarta font-bold text-xl text-text-light group-hover:text-primary-light transition-colors duration-200">
                    {service.title}
                  </h2>
                  <p className="text-sm text-text-gray leading-relaxed line-clamp-4">
                    {service.detailedDescription}
                  </p>
                </div>

                {/* Service Technologies & CTA */}
                <div className="mt-8 flex flex-col gap-5">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] rounded bg-white/5 text-text-gray font-mono">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] rounded bg-white/5 text-text-gray font-mono">
                        +{service.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <Link href={`/hizmetler/${service.slug}`} className="w-full">
                    <Button variant="secondary" className="w-full justify-center text-xs" rightIcon={<ArrowRight className="h-4 w-4" />}>
                      Hizmeti Detaylı İncele
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
