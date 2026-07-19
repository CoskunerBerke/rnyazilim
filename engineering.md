# Mühendislik ve Mimari Kılavuzu (engineering.md) - RN Yazılım

Bu doküman, web sitesinin kod yapısını, kullanılacak kütüphaneleri, dosya organizasyonunu, SEO ve performans stratejilerini tanımlar.

## 1. Teknoloji Yığını (Technology Stack)

* **Framework:** Next.js 14+ (App Router)
* **Dil:** TypeScript
* **Stil:** Tailwind CSS + Vanilla CSS (Custom utilities için)
* **Animasyonlar:** Framer Motion
* **İkonlar:** Lucide React
* **Form Yönetimi:** React Hook Form
* **Doğrulama (Validation):** Zod
* **Kod Kalitesi:** ESLint + Prettier

## 2. Klasör Yapısı (Folder Structure)

Proje root dizininde `src/` klasörü altında aşağıdaki yapı oluşturulacaktır:

```text
src/
  app/                     # Next.js App Router (sayfalar, düzenler ve API rotaları)
    (yasal)/               # Gizlilik, Çerez, KVKK, Kullanım Koşulları sayfaları
    hakkimizda/            # Hakkımızda sayfası
    hizmetler/             # Hizmetler sayfası ve dinamik hizmet detayları ([slug])
    iletisim/              # İletişim sayfası
    projeler/              # Projeler sayfası ve dinamik proje detayları ([slug])
    layout.tsx             # Genel site layout'u
    page.tsx               # Ana sayfa
    not-found.tsx          # Türkçe 404 sayfası
    sitemap.ts             # Dinamik sitemap.xml
    robots.ts              # robots.txt
  components/              # Tekrar kullanılabilir React bileşenleri
    layout/                # Header, Footer, MobileMenu gibi yapısal bileşenler
    sections/              # Sayfalara özel büyük bölümler (Hero, Services, Contact vb.)
    ui/                    # Küçük, atomik UI elemanları (Button, Card, Accordion vb.)
    forms/                 # İletişim Formu ve form girdileri
  content/                 # Düzenlenebilir merkezi veri dosyaları
    company.ts             # Şirket bilgileri, projeler, hizmetler ve SSS verisi
  hooks/                   # Özel React kancaları (örn. useScroll, useReducedMotion)
  lib/                     # Yardımcı fonksiyonlar ve istemci tanımları
  styles/                  # Global CSS, Tailwind importları ve özel CSS animasyonları
  types/                   # TypeScript arayüzleri ve tipleri
```

## 3. Bileşen Mimarisi (Component Architecture)

* **Server Components:** Varsayılan olarak tüm sayfa ve yapısal bileşenler Server Component olacaktır. Bu, ilk yükleme performansını maksimize eder.
* **Client Components:** Framer Motion animasyonları içeren, form doğrulama veya kullanıcı etkileşimi (akordiyon, filtreleme) gerektiren bileşenlerin tepesine `"use client"` direktifi eklenecektir.
* **Merkezi Veri Yönetimi:** `src/content/company.ts` dosyasında yer alan veriler Server Component seviyesinde okunup alt bileşenlere prop olarak aktarılacaktır.

## 4. Form Yönetimi ve Doğrulama (Form Handling & Validation)

İletişim formunda `react-hook-form` ve `@hookform/resolvers/zod` entegrasyonu kullanılacaktır.
* **Doğrulama Şeması (Zod):**
  * `fullName`: En az 3 karakter, zorunlu.
  * `companyName`: İsteğe bağlı.
  * `phone`: Geçerli bir Türkiye telefon numarası formatı (regex ile).
  * `email`: Geçerli bir e-posta adresi, zorunlu.
  * `service`: Önceden tanımlı hizmetlerden biri, zorunlu.
  * `budget`: Bütçe aralıklarından biri, zorunlu.
  * `details`: En az 10 karakter, zorunlu.
  * `kvkk`: Boolean, true olmalı (zorunlu onay kutusu).
* **Doğrulama Mesajları:** Tamamen Türkçe, doğal ve bilgilendirici olacaktır.

## 5. SEO Mimarisi (SEO Architecture)

* **Metadata API:** Next.js Metadata API kullanılarak her sayfa için dinamik başlıklar (title), açıklamalar (description), canonical linkler ve Open Graph / Twitter kartları oluşturulacaktır.
* **Dinamik Sitemap ve Robots:** `src/app/sitemap.ts` ve `src/app/robots.ts` üzerinden arama motorları için güncel haritalar sunulacaktır.
* **Yapılandırılmış Veri (JSON-LD):**
  * `Organization` ve `ProfessionalService` yapılandırılmış verisi ana sayfada yer alacaktır.
  * Sıkça Sorulan Sorular için `FAQPage` şeması eklenecektir.
  * Dinamik sayfalar için `BreadcrumbList` şeması yer alacaktır.
* **Heading Hiyerarşisi:** Her sayfada yalnızca bir adet `<h1>` kullanılacak ve alt başlıklar `<h2>`, `<h3>` şeklinde hiyerarşik sıralanacaktır.

## 6. Performans Stratejisi (Performance Strategy)

* **Font Yükleme:** Google Fonts (`Plus Jakarta Sans` ve `Inter`) Next.js `next/font` modülü ile yerel olarak barındırılacak ve CLS (Layout Shift) olmadan yüklenecektir.
* **Görsel Optimizasyonu:** `next/image` bileşeni ile görseller modern WebP formatında, uygun boyutlarda ve lazy-loading etkin şekilde servis edilecektir.
* **Kod Bölme (Code Splitting):** Framer Motion ve büyük kütüphaneler sayfa yükleme boyutunu şişirmemesi için optimize edilip sadece gerektiği yerlerde yüklenecektir.
* **Sunucu Tarafı Render:** İçeriklerin çoğu statik olarak derlenecek (Static Site Generation - SSG), form ve etkileşimler istemci tarafında çalışacaktır.

## 7. Güvenlik ve Çevre Değişkenleri (Security & Env Variables)

* `.env.example` dosyası oluşturulacak, hassas API anahtarları veya form uç noktaları bu değişkenlerde saklanacaktır.
* Form gönderimi için kullanılacak gerçek endpoint `.env` dosyasındaki `NEXT_PUBLIC_FORM_ENDPOINT` değişkeninden okunacaktır. Eğer bu değişken yoksa, mock (simüle) bir form gönderimi yapılacaktır.
* XSS saldırılarına karşı girdi temizleme (sanitization) form kütüphanesi düzeyinde yönetilecektir.
