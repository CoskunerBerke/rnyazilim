import React from "react";
import Link from "next/link";
import { Home, MessageSquare } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-16 px-4 bg-bg-dark text-center relative overflow-hidden">
      {/* Background glowing decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-md">
        
        {/* Animated lost node visual */}
        <div className="w-32 h-32 relative flex items-center justify-center bg-slate-900/50 rounded-full border border-white/5 shadow-2xl mb-2">
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full border border-red-500/20 animate-ping" style={{ animationDuration: "3s" }} />
          <svg className="w-16 h-16 text-red-500/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        {/* 404 Tag */}
        <span className="text-xs font-bold tracking-widest text-red-400 uppercase bg-red-950/20 border border-red-500/20 rounded-full px-3.5 py-1.5 font-mono">
          ERROR CODE: 404
        </span>

        {/* Headings */}
        <div className="flex flex-col gap-2">
          <h1 className="font-plus-jakarta font-extrabold text-2xl sm:text-3xl text-text-light">
            Sayfa Bulunamadı
          </h1>
          <p className="text-xs sm:text-sm text-text-gray leading-relaxed">
            Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı kalmış olabilir.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full mt-2">
          <Link href="/" className="w-full">
            <Button variant="primary" className="w-full justify-center text-xs" leftIcon={<Home className="h-4 w-4" />}>
              Ana Sayfaya Dön
            </Button>
          </Link>
          <Link href="/iletisim" className="w-full">
            <Button variant="secondary" className="w-full justify-center text-xs" leftIcon={<MessageSquare className="h-4 w-4" />}>
              Bize Bildirin
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
