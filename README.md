# RN Yazılım — Corporate Website

**Dark-themed, fully responsive corporate website for RN Yazılım, a software company in Ankara.**

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-React_Three_Fiber-000000?logo=threedotjs&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4-3E67B1?logo=zod&logoColor=white)

**Live:** [rnyazilim.com](https://rnyazilim.com)

Client project — designed and developed by Berke Coşkuner for RN Yazılım.

## Overview

The website presents RN Yazılım's services (corporate web design, custom software, e-commerce, AI & automation, mobile apps, maintenance and support), selected project pages and the company's way of working, and collects project requests through a validated contact form. It is exported as a fully static site.

## Features

- **Home page** — hero with a lazy-loaded 3D visual, services, "why us", projects, work process, technical capabilities, FAQ, call-to-action and contact section
- **Services** (`/hizmetler`) — overview plus a detail page per service (`/hizmetler/[slug]`)
- **Projects** (`/projeler`) — overview plus a detail page per project (`/projeler/[slug]`)
- **About** and **Contact** pages; legal pages for privacy, cookies, KVKK and terms of use; custom 404
- **Contact form** — React Hook Form + Zod validation; simulated locally, or posts to a form service when `NEXT_PUBLIC_FORM_ENDPOINT` is set
- **Performance mode** — detects reduced-motion preference, slow connections and low-end devices, and scales down animations accordingly
- **SEO** — per-page metadata, generated `sitemap.xml` and `robots.txt`, `Organization` JSON-LD
- **Single content source** — company info, services, projects, FAQ and legal texts all live in `src/content/company.ts`

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, `output: "export"`), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-based theme configuration) |
| Animation / 3D | Framer Motion, three, @react-three/fiber, @react-three/drei, @react-three/postprocessing |
| Forms | React Hook Form, Zod |
| Icons | lucide-react |
| Tooling | ESLint |

## Project structure

```
src/
├── app/                  # App Router pages: home, hakkimizda, hizmetler, projeler, iletisim, legal pages,
│                         # plus sitemap.ts and robots.ts
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, Services, Projects, Process, FAQ, Contact, CTA ...
│   ├── ui/               # Button, Card, Accordion, 3D hero visuals
│   ├── forms/            # ContactForm (Zod validated)
│   └── context/          # PerformanceModeProvider
├── content/company.ts    # all company data and page content
└── types/                # TypeScript types
```

Planning documents in the repository root: `product.md` (product goals), `engineering.md` (architecture), `ui.md` (design guide), `implementation-plan.md`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
npm run start
npm run lint
```

The `dev` and `build` scripts use the `--webpack` flag for compatibility with Windows folder paths that contain multi-byte (e.g. Turkish) characters.

### Editing content

Edit **`src/content/company.ts`** — no component changes needed:

- `companyInfo` — legal name, e-mail, phone, WhatsApp, address, social links
- `services` — service titles, descriptions, technologies
- `projects` — project / case-study pages
- `faqItems` — FAQ entries
- `legalTexts` — privacy, cookie, KVKK and terms templates

### Environment variables

| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Optional. Form service URL (e.g. Formspree, Getform). If unset, the contact form is simulated. |

---

## Türkçe

**RN Yazılım** için geliştirilmiş, karanlık tema odaklı ve tamamen responsive kurumsal web sitesi. RN Yazılım, Ankara'da faaliyet gösteren bir yazılım şirketidir.

**Canlı:** [rnyazilim.com](https://rnyazilim.com)

Müşteri projesi — Berke Coşkuner tarafından RN Yazılım için tasarlanıp geliştirilmiştir.

### Genel bakış

Site; kurumsal web tasarımı, özel yazılım, e-ticaret, yapay zekâ ve otomasyon, mobil uygulama ile bakım ve destek hizmetlerini, proje sayfalarını ve çalışma sürecini tanıtır; teklif taleplerini doğrulamalı bir iletişim formuyla toplar. Proje tamamen statik olarak dışa aktarılır.

### Özellikler

- **Ana sayfa** — gecikmeli yüklenen 3D görselli hero, hizmetler, neden biz, projeler, süreç, teknik yetkinlikler, SSS ve iletişim
- **Hizmetler** ve **Projeler** — liste ve her biri için detay sayfası
- **Hakkımızda**, **İletişim**, gizlilik / çerez / KVKK / kullanım koşulları sayfaları ve 404
- **İletişim formu** — React Hook Form + Zod; `NEXT_PUBLIC_FORM_ENDPOINT` tanımlıysa form servisine gönderir, değilse simüle eder
- **Performans modu** — azaltılmış hareket tercihi, yavaş bağlantı ve düşük donanımlı cihazlarda animasyonları hafifletir
- **SEO** — sayfa bazlı metadata, otomatik `sitemap.xml` ve `robots.txt`, `Organization` JSON-LD
- **Tek içerik kaynağı** — tüm şirket bilgileri ve metinler `src/content/company.ts` dosyasında

### Kurulum

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # out/ klasörüne statik çıktı
```

`dev` ve `build` komutları, Türkçe karakter içeren Windows klasör yollarıyla uyum için `--webpack` bayrağıyla çalışır. İçerik güncellemeleri için yalnızca `src/content/company.ts` dosyasını düzenlemek yeterlidir.

---

Built by [Berke Coşkuner](https://github.com/CoskunerBerke)
