"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import AtomLogo from "../ui/AtomLogo";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-88px)] flex items-center justify-center py-16 overflow-hidden bg-bg-dark">
      {/* Perspective 3D grid in the background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] [transform:perspective(500px)_rotateX(60deg)_translateY(-100px)_scale(2.5)] origin-top opacity-80" />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-cyan/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary-light text-xs font-semibold tracking-wider uppercase"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              Geleceğin Dijital Altyapısı
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-plus-jakarta font-extrabold text-4xl sm:text-5xl md:text-6xl text-text-light leading-[1.1] tracking-tight"
            >
              Fikirlerinizi Güçlü{" "}
              <span className="bg-gradient-to-r from-primary-light via-accent-cyan to-accent-violet bg-clip-text text-transparent">
                Dijital Ürünlere
              </span>{" "}
              Dönüştürüyoruz.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-text-gray max-w-xl leading-relaxed"
            >
              Modern web siteleri, özel yazılım çözümleri ve yapay zekâ destekli otomasyon sistemleriyle işletmenizi geleceğe hazırlıyoruz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Link href="/iletisim" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto justify-center"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Ücretsiz Görüşme Planla
                </Button>
              </Link>
              <Link href="/projeler" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
                  Projelerimizi İncele
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t border-white/5 pt-6 mt-2 w-full max-w-md"
            >
              <p className="text-xs text-text-gray/80 leading-relaxed font-medium">
                ⚡ İhtiyacınıza özel, hızlı, ölçeklenebilir ve kullanıcı odaklı çözümler.
              </p>
            </motion.div>
          </div>

          {/* Atom Animation Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.3, type: "spring", stiffness: 60 }}
            className="lg:col-span-5 flex items-center justify-center w-full relative"
          >
            {/* Soft ambient radial glow behind atom */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
            <AtomLogo className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] xl:w-[460px] xl:h-[460px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
