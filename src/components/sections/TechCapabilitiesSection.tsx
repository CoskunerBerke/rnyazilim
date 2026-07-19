"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Layout, Database, Cloud, ShieldAlert } from "lucide-react";
import { techCapabilities } from "@/content/company";
import Card from "../ui/Card";

const iconMap = [Layout, Terminal, Database, Cloud, Cpu, ShieldAlert];

export const TechCapabilitiesSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-dark border-t border-white/5">
      {/* Subtle background light */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-sm font-semibold tracking-wider text-primary-light uppercase">
            Teknolojilerimiz
          </span>
          <h2 className="font-plus-jakarta font-bold text-3xl sm:text-4xl text-text-light">
            Modern ve Güvenilir Teknolojiler
          </h2>
          <p className="text-sm sm:text-base text-text-gray leading-relaxed">
            Projelerimizi geliştirirken en güncel, güvenli, topluluk desteği güçlü ve performanslı teknolojileri tercih ediyoruz.
          </p>
        </div>

        {/* Tech capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCapabilities.map((capability, index) => {
            const IconComponent = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={capability.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                <Card className="h-full border border-white/5 hover:border-accent-cyan/20 transition-all duration-300">
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary-light">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="font-plus-jakarta font-bold text-base md:text-lg text-text-light">
                      {capability.category}
                    </h3>
                  </div>

                  {/* List of Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {capability.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/5 text-text-gray/90 font-mono select-none hover:text-text-light hover:border-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
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

export default TechCapabilitiesSection;
