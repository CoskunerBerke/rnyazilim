# Ürün Tanımlama Dokümanı (product.md) - RN Yazılım

Bu doküman, RN Yazılım'ın kurumsal web sitesinin ürün stratejisini, hedef kitlesini, dönüşüm hedeflerini ve kapsam sınırlarını tanımlar.

## 1. Şirket Konumlandırması (Company Positioning)

**RN Yazılım**, işletmelerin dijitalleşme ve teknolojik dönüşüm ihtiyaçlarına yönelik modern, güvenilir, premium ve ölçeklenebilir çözümler sunan bir teknoloji şirketidir. 
* **Temel Felsefe:** Sadece kod yazmak değil; kullanıcı deneyimini, sistem performansını ve güvenlik standartlarını ön planda tutarak işletmelere uzun vadeli iş değeri katmak.
* **Algı Hedefi:** Yenilikçi, teknik yetkinliği yüksek, iş odaklı ve premium bir marka algısı yaratmak.

## 2. Hedef Müşteri Grupları (Target Customer Groups)

* **KOBİ'ler ve Büyük Ölçekli Şirketler:** Kurumsal prestijini artırmak, modern bir web varlığına sahip olmak veya mevcut sistemlerini modernize etmek isteyen işletmeler.
* **E-Ticaret Girişimleri:** Güvenli, hızlı ve yüksek dönüşüm oranına sahip dijital mağazalar kurmak isteyen markalar.
* **Girişimler (Startups):** MVP (Minimum Viable Product), SaaS veya özel mobil/web uygulaması geliştirmek isteyen yenilikçi ekipler.
* **Operasyonel Verimlilik Arayan İşletmeler:** İş süreçlerini otomatikleştirmek, yapay zekâ destekli sistemler ve özel yönetim panelleri (admin panels) ile verimlilik sağlamak isteyen firmalar.

## 3. Temel Müşteri Problemleri (Main Customer Problems)

* **Performans ve Hız Sorunları:** Yavaş yüklenen ve kullanıcı kaybeden eski web siteleri.
* **Güvenlik ve Ölçeklenebilirlik Zafiyetleri:** Büyüyen iş hacmini kaldıramayan, kolayca hacklenebilen yetersiz altyapılar.
* **Kötü Kullanıcı Deneyimi (UX):** Mobil uyumsuz, karmaşık ve dönüşüm getirmeyen arayüzler.
* **İletişim Eksikliği ve Destek Yetersizliği:** Proje sonrasında teknik muhatap bulamama ve şeffaf olmayan süreçler.
* **Kalıplaşmış/Kopya Çözümler:** İşletmenin özgün ihtiyaçlarını karşılamayan hazır şablonlar (templates).

## 4. Web Sitesi Hedefleri (Website Goals)

* RN Yazılım'ın modern, premium ve teknik olarak yetkin marka kimliğini yansıtmak.
* Hizmetleri, kullanılan modern teknolojileri ve iş sürecini net bir şekilde aktarmak.
* Seçili örnek projeler (örnek senaryolar) üzerinden teknik kabiliyeti kanıtlamak.
* Ziyaretçilerin güvenini kazanarak potansiyel müşteri adaylarıyla iletişim kurmak.

## 5. Dönüşüm Hedefleri (Conversion Goals)

* **Birincil Hedef:** Potansiyel müşterilerin detaylı "Projenizi Anlatın" formunu doldurması.
* **İkincil Hedef:** Ziyaretçilerin "Ücretsiz Görüşme Planla" ve "WhatsApp'tan Yaz" butonları üzerinden doğrudan iletişime geçmesi.

## 6. Gerekli Sayfalar (Required Pages / Routes)

* **Ana Sayfa (`/`):** Şirketin tüm hizmetlerinin, süreçlerinin, seçili projelerinin ve iletişim kanallarının genel özeti.
* **Hizmetler (`/hizmetler`):** Sunulan 6 ana hizmetin detaylı listesi.
* **Hizmet Detay Sayfaları (`/hizmetler/[slug]`):** Her hizmete özel dinamik detay sayfası.
* **Projeler (`/projeler`):** Kategori filtrelemeli örnek projeler sayfası.
* **Proje Detay Sayfaları (`/projeler/[slug]`):** Projelerin detaylı zorluk (challenge) ve çözüm (solution) analizleri.
* **Hakkımızda (`/hakkimizda`):** Şirket vizyonu, felsefesi ve teknolojik yetkinlikleri.
* **İletişim (`/iletisim`):** Detaylı teklif isteme formu ve iletişim bilgileri.
* **Yasal Sayfalar:**
  * Gizlilik Politikası (`/gizlilik-politikasi`)
  * Çerez Politikası (`/cerez-politikasi`)
  * KVKK Aydınlatma Metni (`/kvkk`)
  * Kullanım Koşulları (`/kullanim-kosullari`)
* **Özel 404 Sayfası:** Türkçe, premium tasarımlı hata sayfası.

## 7. Gerekli Bölümler (Required Sections)

* **Header:** Logo, navigasyon linkleri ve "Ücretsiz Görüşme" CTA butonu.
* **Hero:** Güçlü bir slogan, açıklama, CTA butonları ve mouse-responsive orijinal teknolojik görsel.
* **Hizmetler (Services):** 6 temel hizmet kartı.
* **Neden RN Yazılım (Why Us):** Değer önerilerini içeren modern grid yapısı.
* **Seçili Projeler (Projects):** Filtrelenebilir örnek projeler.
* **İş Süreci (Work Process):** Fikirden yayına 5 adımlı interaktif zaman tüneli.
* **Teknoloji Yetkinlikleri (Tech Stack):** Kategorize edilmiş modern teknolojiler paneli.
* **Sıkça Sorulan Sorular (FAQ):** Erişilebilir akordiyon.
* **İletişim Formu (Contact Form):** Zod ve React Hook Form destekli premium form.
* **CTA Bölümü (CTA Banner):** Hızlı iletişim butonları.
* **Footer:** Logo, hızlı linkler, yasal linkler ve iletişim detayları.

## 8. İletişim Akışı (Contact Flow)

1. Kullanıcı formu doldurur veya CTA butonlarına tıklar.
2. Form gönderildiğinde, Zod şeması ile istemci tarafında anlık doğrulama (validation) yapılır.
3. Form gönderme aşamasında buton "Gönderiliyor..." durumuna geçer (loading state).
4. Başarılı gönderimde kullanıcıya şık bir teşekkür mesajı (success state) gösterilir. 
5. Hata durumunda ise açıklayıcı bir Türkçe hata mesajı (error state) verilir.
6. Gerçek bir arka uç entegrasyonu kurulana kadar, simüle edilmiş güvenli bir API isteği çalışır ve konsola form verileri yazdırılır. Gerçek API entegrasyonunun nereye yapılacağı kod içerisinde açıkça belgelenir.

## 9. Düzenlenebilir Yer Tanıtıcı Bilgiler (Editable Placeholders)

Gerçek şirket verileri olmadığı için aşağıdaki alanlar `src/content/company.ts` dosyasında merkezi olarak tanımlanacak ve gerektiğinde tek bir yerden değiştirilebilecektir:
* Şirket Resmi Adı, E-posta, Telefon, WhatsApp linki, Ofis Adresi.
* Sosyal Medya Linkleri (LinkedIn, GitHub, Instagram vb.).
* Hizmet listesi detayları (slug, başlık, açıklama, ikon adı vb.).
* Proje listesi detayları (slug, başlık, kategori, zorluk, çözüm, teknolojiler, görsel).
* SSS (FAQ) soru ve cevapları.

## 10. Kapsam Sınırları (Scope Limitations)

* Web sitesinde bir veritabanı veya kullanıcı oturum açma (authentication) sistemi bulunmayacaktır.
* Form verileri şimdilik bir mock endpoint üzerinden yönetilecek, e-posta veya veritabanına doğrudan kayıt yapılmayacaktır.
* Projeler ve hizmetler dinamik olarak bir CMS'ten (Contentful, Sanity vb.) değil, yerel statik yapılandırma dosyasından (`src/content/company.ts`) beslenecektir.
