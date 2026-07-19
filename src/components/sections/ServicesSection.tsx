"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Code2, ShoppingBag, Cpu, Smartphone, Wrench, ArrowRight } from "lucide-react";
import { services } from "@/content/company";
import Card from "../ui/Card";

const iconMap = {
  Globe: Globe,
  Code2: Code2,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu,
  Smartphone: Smartphone,
  Wrench: Wrench,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="hizmetler" className="py-24 relative overflow-hidden bg-bg-dark">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-sm font-semibold tracking-wider text-primary-light uppercase">
            Hizmetlerimiz
          </span>
          <h2 className="font-plus-jakarta font-bold text-3xl sm:text-4xl text-text-light">
            İşletmenize Değer Katan Dijital Çözümler
          </h2>
          <p className="text-base text-text-gray leading-relaxed">
            Sadece güzel görünen değil, işletmenizin hedeflerine hizmet eden hızlı, güvenli ve sürdürülebilir dijital ürünler geliştiriyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent =
              (iconMap[service.iconName as keyof typeof iconMap] as React.ComponentType<{ className?: string }>) || Code2;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card interactive={true} className="group relative">
                  {/* Glowing background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Icon box */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-light mb-6 group-hover:bg-primary group-hover:text-text-light transition-all duration-300 shadow-md">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-plus-jakarta font-bold text-xl text-text-light mb-3 group-hover:text-primary-light transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-gray leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Link CTA */}
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-light hover:text-text-light transition-colors group/link focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-1.5 py-0.5 -ml-1.5 w-fit"
                  >
                    Detayları İncele
                    <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
