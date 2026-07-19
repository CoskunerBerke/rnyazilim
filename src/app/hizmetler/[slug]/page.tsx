import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Globe, Code2, ShoppingBag, Cpu, Smartphone, Wrench, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { services } from "@/content/company";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: "Hizmet Bulunamadı",
    };
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/hizmetler/${service.slug}`,
    },
  };
}

const iconMap = {
  Globe: Globe,
  Code2: Code2,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu,
  Smartphone: Smartphone,
  Wrench: Wrench,
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent =
    (iconMap[service.iconName as keyof typeof iconMap] as React.ComponentType<{ className?: string }>) || Code2;

  return (
    <div className="py-12 md:py-20 bg-bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back navigation */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-1.5 text-xs text-text-gray hover:text-text-light transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-0.5 transition-transform" />
            Hizmetlerimize Dön
          </Link>
          <span className="text-white/10 text-xs">/</span>
          <span className="text-xs text-text-gray/70 truncate">{service.title}</span>
        </div>

        {/* Page Content layout */}
        <div className="flex flex-col gap-10">
          
          {/* Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-8 border-b border-white/5">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light shrink-0">
              <IconComponent className="h-8 w-8" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-primary-light uppercase tracking-wider">Hizmet Detayı</span>
              <h1 className="font-plus-jakarta font-extrabold text-2xl sm:text-4xl text-text-light">
                {service.title}
              </h1>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-4">
            <h2 className="font-plus-jakarta font-bold text-lg text-text-light">
              Hizmet Hakkında
            </h2>
            <p className="text-sm sm:text-base text-text-gray leading-relaxed">
              {service.detailedDescription}
            </p>
          </div>

          {/* Benefits grid */}
          <div className="flex flex-col gap-4">
            <h2 className="font-plus-jakarta font-bold text-lg text-text-light">
              Müşterilerimize Sağladığı Faydalar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-3 p-4 rounded-xl border border-white/5 bg-slate-900/30 backdrop-blur-sm">
                  <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light mt-0.5 shrink-0">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-text-gray leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack used in this service */}
          <div className="flex flex-col gap-4">
            <h2 className="font-plus-jakarta font-bold text-lg text-text-light">
              Kullandığımız Teknolojiler
            </h2>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-md bg-white/5 border border-white/5 text-text-gray font-mono font-medium hover:border-primary/20 hover:text-text-light transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <Card className="mt-6 border border-white/10 glow-blue text-center flex flex-col items-center gap-6 p-8 md:p-12">
            <h2 className="font-plus-jakarta font-bold text-xl sm:text-2xl text-text-light">
              {service.title} İhtiyacınız mı Var?
            </h2>
            <p className="text-xs sm:text-sm text-text-gray max-w-lg leading-relaxed">
              İşletmenizin yapısına özel detaylı bir ihtiyaç analizi yapalım ve size en uygun çözüm takvimini hazırlayalım.
            </p>
            <Link href={`/iletisim?hizmet=${service.slug}`}>
              <Button variant="primary" rightIcon={<ArrowRight className="h-4.5 w-4.5" />}>
                Bizimle İletişime Geçin
              </Button>
            </Link>
          </Card>

        </div>
      </div>
    </div>
  );
}
