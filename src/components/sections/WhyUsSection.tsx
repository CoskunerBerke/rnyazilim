"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, HeartHandshake, TrendingUp } from "lucide-react";
import { whyUs } from "@/content/company";
import Card from "../ui/Card";

const iconMap = [Target, ShieldCheck, HeartHandshake, TrendingUp];

export const WhyUsSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-accent-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-sm font-semibold tracking-wider text-primary-light uppercase">
            Değerlerimiz
          </span>
          <h2 className="font-plus-jakarta font-bold text-3xl sm:text-4xl text-text-light">
            Neden RN Yazılım?
          </h2>
          <p className="text-sm sm:text-base text-text-gray leading-relaxed">
            İşletmenizi dijital dünyada bir adım öne taşırken güven, kalite ve şeffaflık ilkelerinden asla ödün vermiyoruz.
          </p>
        </div>

        {/* 2x2 Why Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyUs.map((item, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-row items-start gap-5 group relative h-full">
                  {/* Glowing edge on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Icon box */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-light shrink-0 transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary-light">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-plus-jakarta font-bold text-lg text-text-light group-hover:text-primary-light transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
