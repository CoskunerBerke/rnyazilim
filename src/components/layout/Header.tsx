"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { companyInfo } from "@/content/company";
import Button from "../ui/Button";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handle = requestAnimationFrame(() => {
        setIsMobileMenuOpen(false);
      });
      return () => cancelAnimationFrame(handle);
    }
  }, [pathname, isMobileMenuOpen]);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Projeler", href: "/projeler" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Süreç", href: "/#surec" },
    { name: "İletişim", href: "/iletisim" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.startsWith("/#")) {
      return false; // Anchor link
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-bg-dark/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-primary to-accent-cyan flex items-center justify-center font-bold text-lg text-text-light group-hover:scale-105 transition-transform duration-200">
                RN
              </div>
              <span className="font-plus-jakarta font-bold text-lg tracking-wider text-text-light group-hover:text-primary-light transition-colors duration-200">
                {companyInfo.name}
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-text-light relative py-2 ${
                    isActive(link.href) ? "text-text-light" : "text-text-gray"
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent-cyan rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/iletisim">
                <Button variant="primary" size="sm" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Ücretsiz Görüşme
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-gray hover:text-text-light focus-visible:ring-2 focus-visible:ring-primary rounded cursor-pointer"
              aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden bg-bg-dark/95 backdrop-blur-lg border-b border-white/5 shadow-2xl py-6 px-4"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "bg-white/5 text-text-light"
                      : "text-text-gray hover:bg-white/5 hover:text-text-light"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/5 my-2" />
              <Link href="/iletisim" className="w-full">
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Ücretsiz Görüşme
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
