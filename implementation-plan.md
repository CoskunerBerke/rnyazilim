# Uygulama Planı (implementation-plan.md) - RN Yazılım

Bu plan, RN Yazılım kurumsal web sitesinin baştan sona tüm kurulum, geliştirme, test ve yayınlama adımlarını içeren adım adım bir kontrol listesidir.

## 1. Proje Kurulumu (Project Setup)
- [ ] Next.js projesinin TypeScript, Tailwind CSS, App Router ve ESLint/Prettier seçenekleriyle `./` dizininde başlatılması (`npx create-next-app@latest`).
- [ ] Gerekli ek paketlerin yüklenmesi (`framer-motion`, `lucide-react`, `react-hook-form`, `zod`, `@hookform/resolvers`).
- [ ] Git deposunun ilklendirilmesi (eğer henüz yapılmadıysa).
- [ ] `.env.example` dosyasının oluşturulması.

## 2. Küresel Tasarım Sistemi (Global Design System)
- [ ] `tailwind.config.ts` dosyasının renk şeması, yazı tipleri, gölgeler ve cam efekti (glassmorphism) ayarlarıyla güncellenmesi.
- [ ] `src/styles/globals.css` dosyasının oluşturulması, temel CSS değişkenlerinin ve animasyon yardımcı sınıflarının eklenmesi.
- [ ] Google Fonts (Plus Jakarta Sans ve Inter) entegrasyonunun `src/app/layout.tsx` içinde yapılandırılması.

## 3. Merkezi İçerik ve Konfigürasyon (Content Config)
- [ ] `src/content/company.ts` dosyasının oluşturularak tüm şirket bilgileri, hizmetler, projeler, SSS ve yasal metin şablonlarının eklenmesi.
- [ ] Gerekli TypeScript arayüzlerinin (`src/types/index.ts`) tanımlanması.

## 4. Ortak Bileşenler (Shared Components)
- [ ] `Header` bileşeninin yapılması (Yapışkan, saydam, backdrop-blur, klavye uyumlu hamburger menülü).
- [ ] `Footer` bileşeninin yapılması (Tüm yasal linkler ve iletişim detaylarıyla birlikte).
- [ ] Atomik UI bileşenlerinin oluşturulması:
  - [ ] `Button` (Premium hover ve aktif durumlu).
  - [ ] `Card` (İnce sınır çizgili, hafif derinlikli).
  - [ ] `Accordion` (Erişilebilir SSS akordiyonu).

## 5. Ana Sayfa (Homepage - `/`)
- [ ] **Hero Bölümü:** Elektrik mavisi-cyan gradyan başlık, premium CTA'ler ve sağ tarafta fare hareketlerine duyarlı (mouse-responsive) orijinal SVG tabanlı teknolojik görsel.
- [ ] **Hizmetler Bölümü:** 6 adet modern, minimalist ikonlu ve hover efektli hizmet kartı.
- [ ] **Neden RN Yazılım:** 4 adet detaylı değer kartından oluşan grid.
- [ ] **Seçili Projeler:** Kategori bazlı filtreleme butonları ve şık proje listeleme bileşenleri.
- [ ] **İş Süreci:** Masaüstünde yatay, mobilde dikey çalışan viewport animasyonlu interaktif zaman tüneli.
- [ ] **Teknoloji Yetkinlikleri:** Sade ve net metinlerle kategorize edilmiş yetkinlik tablosu.
- [ ] **SSS (FAQ):** Erişilebilir akordiyon bileşeni.
- [ ] **Teklif / İletişim Bölümü:** Form doğrulamalı premium form alanı.
- [ ] **CTA Banner:** WhatsApp ve hızlı randevu yönlendirmesi.

## 6. Hizmet Sayfaları (Services - `/hizmetler` ve `/hizmetler/[slug]`)
- [ ] `/hizmetler` genel listeleme sayfasının yapılması.
- [ ] `/hizmetler/[slug]` dinamik detay şablonunun oluşturulması (Her hizmete özel detaylar ve dinamik SEO).

## 7. Proje Sayfaları (Projects - `/projeler` ve `/projeler/[slug]`)
- [ ] `/projeler` filtrelemeli listeleme sayfasının yapılması.
- [ ] `/projeler/[slug]` detay şablonunun oluşturulması (Zorluk, Çözüm, Teknolojiler ve sonuç analizleri).

## 8. Hakkımızda Sayfası (About - `/hakkimizda`)
- [ ] Şirket felsefesi, modern teknoloji kullanımı ve abstract mimari görselini içeren sayfa yapısının kodlanması.

## 9. İletişim Sayfası (Contact - `/iletisim`)
- [ ] Ayrıntılı form alanı, ofis bilgileri ve harita yer tutucusu ile iletişim sayfasının tamamlanması.

## 10. Yasal Sayfalar (Legal - `/gizlilik-politikasi`, `/cerez-politikasi`, `/kvkk`, `/kullanim-kosullari`)
- [ ] `src/content/company.ts` içindeki yasal metinleri okuyup görüntüleyen temiz, okunabilir yasal sayfaların oluşturulması.

## 11. Duyarlılık (Responsive) ve Erişilebilirlik (A11y) İyileştirmeleri
- [ ] Farklı ekran genişliklerinde (1440px, 1280px, 1024px, 768px, 360px vb.) düzen kontrolleri ve taşma (overflow) testleri.
- [ ] Klavye odak (focus-visible) göstergeleri, ARIA etiketleri ve ekran okuyucu uyumluluk kontrolleri.
- [ ] `prefers-reduced-motion` desteğinin Framer Motion bileşenlerinde test edilmesi.

## 12. SEO ve JSON-LD Yapılandırması
- [ ] Tüm sayfalar için `generateMetadata` fonksiyonunun entegre edilmesi.
- [ ] `Organization`, `ProfessionalService` ve `FAQPage` JSON-LD şemalarının yerleştirilmesi.
- [ ] `sitemap.ts` ve `robots.ts` dosyalarının doğrulanması.

## 13. Tarayıcı Testleri (Browser Testing)
- [ ] Bağımlılıkların derlenip lint ve type check testlerinin çalıştırılması (`npm run lint`, `npx tsc`).
- [ ] Production build'ının alınması (`npm run build`).
- [ ] Yerel sunucunun başlatılarak tüm linklerin, formların ve etkileşimlerin tarayıcıda canlı olarak test edilmesi.

## 14. Teslim ve Vercel Hazırlığı
- [ ] `.env.example` dosyasının son halinin verilmesi.
- [ ] Ayrıntılı kurulum ve bakım bilgilerini içeren `README.md` dosyasının yazılması.
- [ ] Projenin Vercel'e doğrudan yüklenebilecek durumda olduğunun doğrulanması.
