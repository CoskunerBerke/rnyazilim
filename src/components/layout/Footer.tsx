import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { companyInfo, services } from "@/content/company";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "@/components/ui/Icons";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    linkedin: <LinkedinIcon className="h-5 w-5" />,
    github: <GithubIcon className="h-5 w-5" />,
    instagram: <InstagramIcon className="h-5 w-5" />,
  };

  return (
    <footer className="bg-bg-dark border-t border-white/5 pt-16 pb-8 text-text-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Brief & Socials */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-primary to-accent-cyan flex items-center justify-center font-bold text-base text-text-light group-hover:scale-105 transition-transform duration-200">
                RN
              </div>
              <span className="font-plus-jakarta font-bold text-lg tracking-wider text-text-light group-hover:text-primary-light transition-colors duration-200">
                {companyInfo.name}
              </span>
            </Link>
            <p className="text-sm text-text-gray mt-2 leading-relaxed">
              İşletmelerin dijital geleceğini tasarlıyoruz. Yüksek performanslı kurumsal web siteleri, özel yazılımlar ve yapay zekâ çözümleriyle yanınızdayız.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {Object.entries(companyInfo.socials).map(([key, val]) => {
                const icon = socialIcons[key as keyof typeof socialIcons];
                if (!icon) return null;
                return (
                  <a
                    key={key}
                    href={val}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-white/5 bg-white/5 flex items-center justify-center text-text-gray hover:text-text-light hover:border-primary/30 transition-all duration-200 cursor-pointer"
                    aria-label={`${companyInfo.name} ${key} sayfası`}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-plus-jakarta font-semibold text-text-light text-base mb-6">Hızlı Linkler</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Ana Sayfa", href: "/" },
                { name: "Hizmetler", href: "/hizmetler" },
                { name: "Projeler", href: "/projeler" },
                { name: "Hakkımızda", href: "/hakkimizda" },
                { name: "Süreç", href: "/#surec" },
                { name: "İletişim", href: "/iletisim" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-text-light flex items-center gap-1 group w-fit transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-primary-light" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Links */}
          <div>
            <h3 className="font-plus-jakarta font-semibold text-text-light text-base mb-6">Hizmetlerimiz</h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="text-sm hover:text-text-light flex items-center gap-1 group w-fit transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-primary-light" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-plus-jakarta font-semibold text-text-light text-base mb-6">İletişim</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-light shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-light shrink-0" />
                <a href={`tel:${companyInfo.phoneFormatted}`} className="text-sm hover:text-text-light transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-light shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-text-light transition-colors">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 w-full my-8" />

        {/* Bottom Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-gray/80">
            © {currentYear} {companyInfo.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
            <Link href="/gizlilik-politikasi" className="text-xs hover:text-text-light transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/cerez-politikasi" className="text-xs hover:text-text-light transition-colors">
              Çerez Politikası
            </Link>
            <Link href="/kvkk" className="text-xs hover:text-text-light transition-colors">
              KVKK Aydınlatma Metni
            </Link>
            <Link href="/kullanim-kosullari" className="text-xs hover:text-text-light transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
