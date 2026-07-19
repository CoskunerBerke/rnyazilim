# RN Yazılım Kurumsal Web Sitesi

Bu proje, Turkish yazılım şirketi **RN Yazılım** için geliştirilmiş, yüksek performanslı, premium, karanlık tema odaklı ve tamamen responsive kurumsal web sitesidir.

Şirket Alan Adı: **https://rnyazilim.com**

## 🚀 Teknolojik Altyapı (Technology Stack)

* **Framework:** Next.js 16 (App Router)
* **Dil:** TypeScript
* **Stil:** Tailwind CSS v4 (CSS tabanlı yeni nesil tema yapılandırması)
* **Animasyonlar:** Framer Motion (Mikro etkileşimler ve reveal-on-scroll efektleri)
* **İkonlar:** Lucide React
* **Form Yönetimi:** React Hook Form
* **Doğrulama (Validation):** Zod
* **Derleme/Paketleyici:** Webpack (Windows multi-byte karakterli yerel klasör yolları uyumluluğu için `--webpack` bayrağı ile yapılandırılmıştır)

## 📁 Proje Klasör Yapısı (Project Structure)

```text
src/
  app/                    # Next.js App Router sayfaları (Hakkımızda, Hizmetler, Projeler, Yasal Sayfalar vb.)
  components/
    layout/               # Header, Footer gibi yapısal bileşenler
    sections/             # Sayfa bölümleri (Hero, Services, FAQ, Contact vb.)
    ui/                   # Atomik ve animasyonlu UI elemanları (Button, Card, Accordion, HeroVisual vb.)
    forms/                # Zod onaylı teklif isteme formu (ContactForm)
  content/                # Merkezi şirket veri yönetimi (company.ts)
  styles/                 # Küresel stiller ve CSS animasyonları
  types/                  # TypeScript tip tanımları (index.ts)
```

## ⚙️ Kurulum ve Çalıştırma (Installation & Running)

### 1. Bağımlılıkların Yüklenmesi
Projeyi çalıştırmadan önce terminalde aşağıdaki komutla tüm paketleri yükleyin:
```bash
npm install
```

### 2. Yerel Geliştirme Sunucusunu Başlatma
Yerel sunucuyu (`http://localhost:3000`) çalıştırmak için:
```bash
npm run dev
```

### 3. Production Derlemesi Alma
Projenin optimize edilmiş production sürümünü derlemek için:
```bash
npm run build
```

### 4. Derlenen Sürümü Yerelde Test Etme
Derlenen production paketini yerelde çalıştırmak için:
```bash
npm run start
```

## ✏️ Şirket Bilgileri ve İçerik Yönetimi

Sitedeki tüm şirket bilgileri, hizmetler, projeler, SSS ve yasal politikalar tek bir merkezi dosyada tutulmaktadır. Değişiklik yapmak için başka hiçbir bileşene dokunmadan **`src/content/company.ts`** dosyasını düzenlemeniz yeterlidir:

* **Şirket Bilgileri:** `companyInfo` nesnesinden resmi adı, e-postayı, telefonu, WhatsApp numarasını, adresi ve sosyal ağ linklerini güncelleyebilirsiniz.
* **Hizmetler:** `services` dizisine yeni bir hizmet ekleyebilir veya mevcut hizmetlerin başlık, açıklama ve teknolojilerini düzenleyebilirsiniz.
* **Projeler:** `projects` dizisi üzerinden örnek vaka çalışmalarını değiştirebilirsiniz.
* **SSS (FAQ):** `faqItems` dizisini düzenleyerek yeni soru-cevap çiftleri ekleyebilirsiniz.
* **Yasal Metinler:** `legalTexts` altındaki Gizlilik, Çerez, KVKK ve Kullanım Koşulları şablonlarını güncelleyebilirsiniz.

## 📨 İletişim Formu ve API Entegrasyonu

İletişim formu varsayılan olarak yerel geliştirme aşamasında simüle (mock) edilmektedir. Gerçek bir arka uç veya form servisi (Formspree, Getform vb.) bağlamak için:

1. Kök dizinde `.env` dosyası oluşturun.
2. `.env` dosyasına aşağıdaki değişkeni tanımlayın:
```env
NEXT_PUBLIC_FORM_ENDPOINT="https://sizin-api-servisiniz.com/endpoints/form"
```
Dosya mevcut olduğunda form otomatik olarak bu uç noktaya `POST` isteği atacaktır.

## 🔍 SEO ve Arama Motoru Optimizasyonu

* **Metadata:** Sayfa başlıkları ve açıklamaları `src/app/layout.tsx` ve her sayfanın altındaki `metadata` değişkenlerinden yönetilir.
* **Sitemap:** `/sitemap.xml` dinamik olarak `src/app/sitemap.ts` dosyasından üretilir ve tüm hizmet ile proje sayfalarını otomatik olarak indeksler.
* **Robots:** `/robots.txt` dosyası `src/app/robots.ts` tarafından dinamik olarak üretilir.
* **Yapılandırılmış Veri:** Google arama sonuçlarında zengin snippet'ler göstermek üzere `Organization` JSON-LD şeması `src/app/layout.tsx` içine yerleştirilmiştir.
