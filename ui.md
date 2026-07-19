# Tasarım ve Arayüz Kılavuzu (ui.md) - RN Yazılım

Bu doküman, RN Yazılım web sitesinin görsel kimliğini, renk, tipografi, grid ve animasyon prensipleri ile sayfa tasarımlarının detaylarını içerir.

## 1. Görsel Kimlik (Visual Identity)

Web sitesi, RN Yazılım'ın teknolojik uzmanlığını ve premium hizmet kalitesini yansıtacak şekilde **karanlık, modern ve teknoloji odaklı** bir tasarıma sahip olacaktır.
* **Tasarım Dili:** Minimalist, net hatlara sahip, derinlik hissi veren ince ışıklandırmalar ve yarı saydam cam (glassmorphism) detayları içeren premium arayüz.
* **Görsel Kalite:** Bulanıklığı ve şablon hissini önlemek adına net CSS gradyanları, özel SVG ikonları ve animasyonlu etkileşimler kullanılacaktır. Basit hazır görseller veya yapay ofis fotoğrafları kesinlikle kullanılmayacaktır.

## 2. Renk Sistemi (Color System)

Tüm renkler CSS değişkenleri (CSS variables) ve Tailwind yapılandırmasında özel isimlerle tanımlanacak ve tutarlı şekilde kullanılacaktır.

* **Ana Arka Plan (Main Background):** Çok koyu lacivert / siyah tonu (`#030712` - `slate-950` veya benzeri, örn. HSL 224 71% 4%)
* **İkincil Arka Plan (Secondary Background):** Koyu grafit / antrasit tonu (`#0f172a` - `slate-900`)
* **Birincil Vurgu (Primary Accent):** Elektrik mavisi (`#2563eb` - `blue-600` veya `#3b82f6` - `blue-500`)
* **İkincil Vurgu (Secondary Accent):** Turkuaz / Siyan (`#06b6d4` - `cyan-500`)
* **Destekleyici Vurgu (Supporting Accent):** İnce mor / violet tonları (`#8b5cf6` - `violet-500` - kart arkası hafif parlamalar için)
* **Birincil Metin (Primary Text):** Yumuşak beyaz (`#f8fafc` - `slate-50`)
* **İkincil Metin (Secondary Text):** Soğuk gri (`#94a3b8` - `slate-400`)
* **Kenarlık Rengi (Border Color):** Yarı saydam ince sınır rengi (`rgba(255, 255, 255, 0.08)`)

## 3. Tipografi Sistemi (Typography System)

Türkçe karakterlerin tamamını (ğ, Ğ, ş, Ş, ı, İ, ö, Ö, ü, Ü, ç, Ç) mükemmel şekilde destekleyen ve modern görünüme sahip fontlar kullanılacaktır.

* **Başlıklar (Headings):** **Plus Jakarta Sans** veya **Outfit** (Google Fonts). Güçlü, modern ve teknolojik bir görüntü sunar.
* **Gövde Metinleri (Body Text):** **Inter** veya **Plus Jakarta Sans** (Google Fonts). Yüksek okunabilirlik için 15px - 16px boyutlarında, uygun satır yüksekliğiyle (`leading-relaxed`) kullanılacaktır. Kesinlikle çok ince (thin) font ağırlıkları gövde yazılarında tercih edilmeyecektir.

## 4. Yerleşim ve Grid Sistemi (Grid & Layout System)

* **Maksimum Genişlik:** `max-w-7xl` (1280px) merkezlenmiş içerik alanı.
* **Kenar Boşlukları (Padding):** Mobil cihazlarda `px-4` veya `px-6`, masaüstünde `px-8` ile `px-12`.
* **Grid Yapısı:**
  * Kahraman (Hero) Bölümü: Masaüstünde 2 sütunlu (Text & Interactive Visual), mobil cihazlarda tek sütunlu dikey yerleşim.
  * Hizmetler ve Projeler: Masaüstünde 3 sütunlu grid, tablette 2 sütunlu grid, mobil cihazlarda 1 sütunlu dikey grid.
  * Neden Biz & Süreç: Esnek grid (flexbox/grid) yapısı.

## 5. Cihaz Davranışları (Desktop, Tablet & Mobile Behavior)

* **Masaüstü (1440x900, 1280x800):** Tüm interaktif efektler, mouse-hover ve mouse-responsive 3D derinlik hareketleri etkin. Geniş sütunlar ve yan yana dizilimler aktif.
* **Tablet (1024x768, 768x1024):** Navigasyon menüsü hamburger menüye dönüşebilir. Kart genişlikleri 2'li kolona sığdırılır. Hover efektleri hafifletilir.
* **Mobil (430x932, 390x844, 360x800):** Tamamen dikey akış. Süreç zaman çizelgesi dikey yerleşime dönüşür. Butonlar kolay tıklanabilecek boyutlarda (minimum 48px yükseklik) ve tam genişliktedir. Yatay taşma (horizontal overflow) kesinlikle engellenecektir.

## 6. Animasyon Prensipleri (Animation Principles)

Animasyonlar Framer Motion ile tasarlanacak, ancak kullanıcıyı yormayacak ve sayfa performansını düşürmeyecek seviyede tutulacaktır.
* **Görünür Olunca Yüklenme (Reveal-on-scroll):** Bölümler ve kartlar ekrana girdiğinde yukarı doğru hafifçe süzülerek (`y: [20, 0]`, `opacity: [0, 1]`) belirecektir.
* **Etkileşim (Hover):** Kartlarda ve butonlarda hafif yükselme ve sınır çizgilerinde parlama değişimi (`scale: 1.02`, `transition: { duration: 0.2 }`).
* **Kahraman Bölümü Efekti:** Sağ taraftaki teknolojik görselde mouse hareketine bağlı olarak hafif 3D açılı dönüş (depth movement) ve yavaşça renk değiştiren SVG dalgaları/bağlantı noktaları.
* **Azaltılmış Hareket Seçeneği (`prefers-reduced-motion`):** İşletim sisteminde animasyonları kapatmış kullanıcılar için tüm hareketli animasyonlar otomatik olarak devre dışı bırakılacak veya yalnızca `opacity` geçişlerine indirgenecektir.

## 7. Bileşen Durumları (Component States)

* **Normal:** Standart şık tasarım.
* **Hover (Fare ile Üzerine Gelme):** Butonlarda arka plan parlaması veya renk dolgusu, kartlarda ince sınır parlaması ve çok hafif yukarı kalkma.
* **Focus (Klavye Odağı):** `focus-visible:ring-2 focus-visible:ring-blue-500` ile erişilebilirlik için net görünür mavi çerçeve.
* **Active/Pressed:** Tıklama anında butonlarda hafif küçülme (`scale: 0.98`).
* **Disabled:** Form butonlarında veri gönderilirken opaklık azalması (`opacity-50`) ve tıklanamaz durum (`pointer-events-none`).

## 8. Erişebilirlik Gereksinimleri (Accessibility Requirements)

* Metin ve arka plan renk kontrast oranları en az WCAG AA standartlarında (4.5:1) olacaktır.
* Tüm butonların ve linklerin açık, anlaşılır metinleri (veya `aria-label` tanımları) bulunacaktır.
* Form elemanları doğru `<label>` etiketleriyle ilişkilendirilecektir.
* Hamburger menü klavye ile açılıp kapatılabilecektir (`Escape` tuşu desteği dahil).

## 9. Sayfa ve Bölüm Detayları

* **Ana Sayfa:** Premium Hero, 6 Hizmet kartı, "Neden RN Yazılım" 4'lü grid kartı, Kategori filtrelemeli 6 seçili proje, interaktif 5 adımlı zaman tüneli, "Teknoloji Yetkinlikleri" kategorize listesi, 8 sorulu akordiyon SSS, teklif odaklı iletişim formu.
* **Hizmetler Sayfası:** Tüm hizmetlerin detaylı açıklamaları, her hizmetin hangi teknolojilerle geliştirildiği ve ilgili hizmet için müşteriye sağlanan faydalar.
* **Hizmet Detay Sayfası (`/hizmetler/[slug]`):** İlgili hizmete özel detaylı teknik analiz, süreç ve o hizmete özel CTA.
* **Projeler Sayfası:** Tüm projelerin kategori bazlı listelenmesi ve detay inceleme linkleri.
* **Proje Detay Sayfası (`/projeler/[slug]`):** Projenin başlangıçtaki problemi, RN Yazılım'ın ürettiği özel çözüm ve kullanılan teknoloji yığını ile proje sonuçları.
* **Hakkımızda Sayfası:** Şirketin mühendislik odaklı felsefesi, teknolojik altyapı yetkinlikleri ve çalışma prensipleri.
* **İletişim Sayfası:** Detaylı teklif formu, harita yer tutucusu ve doğrudan iletişim kanalları (telefon, e-posta, WhatsApp).
