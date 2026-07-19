import { CompanyInfo, Service, Project, WhyUsItem, ProcessStep, FAQItem, TechCapability } from "../types";

export const companyInfo: CompanyInfo = {
  name: "RN Yazılım",
  legalName: "RN Yazılım Teknolojileri ve Danışmanlık Tic. Ltd. Şti.",
  domain: "rnyazilim.com",
  email: "rnvizedanismanlik@rnvize.com",
  phone: "+90 532 616 12 76",
  phoneFormatted: "+905326161276",
  whatsapp: "+90 532 616 12 76",
  whatsappUrl: "https://wa.me/905326161276",
  address: "Ankara, Ankara Türkiye",
  socials: {
    linkedin: "https://linkedin.com/company/rnyazilim", // [EDITABLE PLACEHOLDER]
    github: "https://github.com/rnyazilim", // [EDITABLE PLACEHOLDER]
    instagram: "https://instagram.com/rnyazilim", // [EDITABLE PLACEHOLDER]
    twitter: "https://twitter.com/rnyazilim", // [EDITABLE PLACEHOLDER]
  },
  associatedSites: [
    { name: "RN Vize", url: "https://rnvize.com/" },
  ],
  workingHours: "Pazartesi - Cumartesi: 09:00 - 18:00 (Pazar: Kapalı)",
};

export const services: Service[] = [
  {
    slug: "kurumsal-web-tasarimi",
    title: "Kurumsal Web Tasarımı",
    description: "İşletmenizin vizyonunu yansıtan, yüksek performanslı ve kullanıcı odaklı modern web siteleri.",
    detailedDescription: "RN Yazılım olarak, markanızın dijital dünyadaki yüzü olacak premium kurumsal web siteleri tasarlıyor ve geliştiriyoruz. Tamamen modern arayüzler, hızlı yüklenen sayfalar, SEO odaklı altyapı ve tüm mobil cihazlarla tam uyumlu (responsive) esnek düzenler inşa ediyoruz. Hazır şablonlar yerine, markanızın kurumsal kimliğine ve hedef kitlesine özel çözümler üretiyoruz.",
    iconName: "Globe",
    benefits: [
      "Mobil, tablet ve masaüstü cihazlarla tam uyum (Responsive)",
      "Lighthouse testlerinde yüksek performans ve hız optimizasyonu",
      "Arama motorlarında üst sıralarda yer almanızı sağlayan SEO mimarisi",
      "Kullanıcı deneyimi (UX) odaklı, modern ve minimalist arayüz tasarımı",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    slug: "ozel-yazilim-gelistirme",
    title: "Özel Yazılım Geliştirme",
    description: "İşletmenizin operasyonel ihtiyaçlarına ve süreçlerine özel olarak tasarlanmış web ve bulut çözümleri.",
    detailedDescription: "İşletmenizin kendine özgü süreçlerini yönetmek, otomatikleştirmek ve verimliliğini artırmak için ihtiyacınıza özel web tabanlı yazılımlar geliştiriyoruz. İş akışlarınızı dijitalleştirirken güvenliği, ölçeklenebilirliği ve performansı en üst düzeyde tutuyoruz. API entegrasyonlarından karmaşık veri analiz panellerine kadar her alanda profesyonel destek sağlıyoruz.",
    iconName: "Code2",
    benefits: [
      "İşletmenizin iş akışına %100 uyumlu özel altyapı",
      "Güçlü güvenlik katmanları ve yetkilendirme mekanizmaları",
      "Farklı sistemlerle konuşabilen esnek API mimarisi",
      "Geliştirilebilir ve ölçeklenebilir modüler kod yapısı",
    ],
    technologies: ["Node.js", "TypeScript", "Next.js", "PostgreSQL", "Docker", "RESTful APIs"],
  },
  {
    slug: "e-ticaret-cozumleri",
    title: "E-Ticaret Çözümleri",
    description: "Güvenli ödeme altyapısına sahip, hızlı ve yüksek dönüşüm odaklı dijital mağaza sistemleri.",
    detailedDescription: "Ürünlerinizi dijital pazarda en etkili şekilde satmanız için güvenli, hızlı ve dönüşüm oranı yüksek e-ticaret platformları kuruyoruz. Kullanıcı dostu sepet ve ödeme adımları, gelişmiş ürün filtreleme özellikleri ve kargo/ödeme entegrasyonları ile uçtan uca bir alışveriş deneyimi sunuyoruz. Yönetim paneli sayesinde stok, sipariş ve müşteri verilerini kolayca yönetebilirsiniz.",
    iconName: "ShoppingBag",
    benefits: [
      "Hızlı ve kesintisiz ödeme adımları (Dönüşüm odaklı UX)",
      "Türkiye'deki popüler ödeme geçitleri (iyzico, PayTR vb.) entegrasyonu",
      "Gelişmiş kategori, varyant ve stok yönetim sistemi",
      "Mobil öncelikli alışveriş deneyimi",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Zustand", "Stripe/iyzico API", "PostgreSQL"],
  },
  {
    slug: "yapay-zeka-ve-otomasyon",
    title: "Yapay Zekâ ve Otomasyon",
    description: "İş süreçlerinizi hızlandıran ve maliyetlerinizi düşüren yapay zekâ entegrasyonları.",
    detailedDescription: "Yapay zekâ modellerini ve otomasyon araçlarını iş akışlarınıza entegre ederek manuel işleri azaltıyor ve verimliliğinizi artırıyoruz. Büyük dil modelleri (LLM), veri analitiği, chatbot sistemleri ve tekrarlayan işleri otomatikleştiren özel yazılımlar geliştirerek işletmenizin dijital dönüşümüne katkıda bulunuyoruz.",
    iconName: "Cpu",
    benefits: [
      "Tekrarlayan işlerde zaman ve maliyet tasarrufu",
      "OpenAI, Claude ve yerel LLM modelleri ile akıllı entegrasyonlar",
      "Veri analizi ve karar destek mekanizmaları",
      "7/24 kesintisiz hizmet sunan akıllı müşteri asistanları",
    ],
    technologies: ["Python", "LangChain", "OpenAI API", "Node.js", "TypeScript", "FastAPI"],
  },
  {
    slug: "mobil-uygulama-gelistirme",
    title: "Mobil Uygulama Geliştirme",
    description: "iOS ve Android platformlarında yüksek performansla çalışan yerel (native) ve hibrit mobil uygulamalar.",
    detailedDescription: "Hedef kitlenize doğrudan akıllı telefonlarından ulaşmanız için modern, hızlı ve şık mobil uygulamalar geliştiriyoruz. React Native gibi teknolojiler kullanarak tek kod tabanıyla hem iOS hem de Android için yüksek performanslı çözümler sunuyoruz. Uygulama mağazası (App Store ve Google Play) yükleme süreçlerini ve güncellemelerini de yönetiyoruz.",
    iconName: "Smartphone",
    benefits: [
      "iOS ve Android platformları için tek kod tabanı (React Native)",
      "Native seviyesinde akıcı performans ve animasyonlar",
      "Bildirim (push notification) ve cihaz özellikleri entegrasyonu",
      "App Store ve Google Play mağaza yönetimi",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "Firebase"],
  },
  {
    slug: "bakim-ve-teknik-destek",
    title: "Bakım ve Teknik Destek",
    description: "Projelerinizin yayına alındıktan sonra da güncel, güvenli ve kesintisiz çalışması için destek hizmetleri.",
    detailedDescription: "Geliştirdiğimiz veya mevcut olan sistemlerinizin kesintisiz, hızlı ve güvenli çalışmasını garanti etmek amacıyla teknik bakım ve destek hizmetleri sunuyoruz. Sunucu izleme, düzenli güvenlik güncellemeleri, yedekleme işlemleri ve hata giderme çözümlerimizle sistemlerinizin her zaman güncel kalmasını sağlıyoruz.",
    iconName: "Wrench",
    benefits: [
      "7/24 sunucu izleme (uptime monitoring) ve performans takibi",
      "Düzenli veri yedekleme ve güvenlik yamaları uygulaması",
      "Olası hatalara karşı hızlı müdahale garantisi (SLA)",
      "İçerik ve sürüm güncellemeleri desteği",
    ],
    technologies: ["Linux CLI", "Docker", "AWS / Vercel Cloud", "GitHub Actions", "Sentry"],
  },
];

export const whyUs: WhyUsItem[] = [
  {
    title: "İhtiyaca Özel Çözümler",
    description: "Hazır kalıplar yerine işletmenin gerçek ihtiyaçlarına göre şekillenen sistemler geliştiriyoruz.",
  },
  {
    title: "Modern Teknolojiler",
    description: "Güvenli, hızlı ve uzun vadede geliştirilebilir, geleceğe hazır teknik altyapılar kullanıyoruz.",
  },
  {
    title: "Şeffaf İletişim",
    description: "Projenin her aşamasında açık, düzenli ve anlaşılır iletişim kurarak sizi süreçten haberdar ediyoruz.",
  },
  {
    title: "Ölçeklenebilir Altyapı",
    description: "İşletmeniz büyüdükçe kolayca geliştirilebilen ve yeni özellikler eklenebilen sistemler kuruyoruz.",
  },
];

export const projects: Project[] = [
  // SAMPLE PROJECTS (Clearly marked as requested)
  {
    slug: "kurumsal-web-sitesi",
    title: "Premium Endüstriyel Üretim Web Sitesi",
    category: "Kurumsal Web Sitesi",
    categorySlug: "web-tasarimi",
    challenge: "Uluslararası alanda faaliyet gösteren bir endüstriyel üretim firmasının, global rakipleriyle rekabet edebilecek modernlikte, çok dilli ve hızlı yüklenen bir web varlığına sahip olmaması.",
    solution: "Plus Jakarta Sans tipografisi ve Next.js App Router kullanılarak tamamen statik olarak derlenen, 0.5 saniyenin altında açılış hızına sahip, animasyonlu ve çok dilli bir web sitesi geliştirildi.",
    results: [
      "Sayfa yüklenme hızı %75 oranında artırıldı.",
      "Global arama motorlarında görünürlük ilk ayda %40 yükseldi.",
      "İletişim formu üzerinden gelen nitelikli iş tekliflerinde %30 artış sağlandı."
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    imageUrl: "/images/project-web.png",
  },
  {
    slug: "e-ticaret-platformu",
    title: "Yeni Nesil Kozmetik E-Ticaret Mağazası",
    category: "Özel Yazılım",
    categorySlug: "ozel-yazilim",
    challenge: "Yoğun kampanya dönemlerinde sunucusu çöken, yavaş çalışan ve mobil kullanıcıların sepeti terk etme oranı %80'in üzerinde olan eski bir e-ticaret sistemi.",
    solution: "İstemci tarafında çalışan sepet mantığı (Zustand) ve Next.js'in statik sayfa üretme (SSG) özellikleri kullanılarak tamamen optimize edilmiş, hızlı ödeme adımlarına sahip mobil öncelikli e-ticaret altyapısı kuruldu.",
    results: [
      "Mobil sepeti terk etme oranı %82'den %45'e düşürüldü.",
      "Yoğun trafik anında sunucu yanıt süresi stabil (120ms) tutuldu.",
      "Satış dönüşüm oranları (conversion rate) genel olarak %35 arttı."
    ],
    technologies: ["Next.js", "Tailwind CSS", "Zustand", "iyzico API", "PostgreSQL"],
    imageUrl: "/images/project-ecommerce.png",
  },
  {
    slug: "yonetim-paneli",
    title: "Lojistik Operasyon Yönetim Paneli",
    category: "Yönetim Paneli",
    categorySlug: "ozel-yazilim",
    challenge: "Bir lojistik firmasının tüm araç takip, sipariş ve faturalandırma süreçlerini Excel üzerinden manuel yürütmesi nedeniyle oluşan veri kayıpları ve operasyonel yavaşlık.",
    solution: "Sürücüler ve yönetim kadrosu için gerçek zamanlı harita takibi, anlık bildirimler ve otomatik fatura üreten bulut tabanlı merkezi bir operasyon yönetim paneli geliştirildi.",
    results: [
      "Operasyonel işlem süreleri günlük ortalama 3 saat kısaldı.",
      "Manuel veri girişi kaynaklı hatalar sıfıra indirildi.",
      "Müşterilere otomatik teslimat bildirimleri gönderilmeye başlandı."
    ],
    technologies: ["React", "Node.js", "TypeScript", "Leaflet Maps", "PostgreSQL", "Socket.io"],
    imageUrl: "/images/project-admin.png",
  },
  {
    slug: "yapay-zeka-otomasyonu",
    title: "Yapay Zekâ Destekli Müşteri Destek Sistemi",
    category: "Yapay Zekâ Otomasyonu",
    categorySlug: "yapay-zeka",
    challenge: "Günde binlerce e-posta ve destek talebi alan bir e-ticaret markasının, müşterilere geri dönüş süresinin 24 saati aşması ve müşteri memnuniyetsizliği.",
    solution: "Gelen destek taleplerini analiz edip kategorize eden ve sık karşılaşılan sorunları markanın bilgi bankasını kullanarak otomatik yanıtlayan OpenAI tabanlı entegre yapay zekâ botu geliştirildi.",
    results: [
      "İlk yanıt süresi 24 saatten 2 dakikaya düşürüldü.",
      "Destek ekibinin iş yükü %60 oranında hafifletildi.",
      "Müşteri memnuniyet skoru (CSAT) 5 üzerinden 4.7'ye yükseldi."
    ],
    technologies: ["Python", "FastAPI", "OpenAI API", "LangChain", "Node.js"],
    imageUrl: "/images/project-ai.png",
  },
  {
    slug: "rezervasyon-sistemi",
    title: "B2B Araç ve Ekipman Rezervasyon Altyapısı",
    category: "Rezervasyon Sistemi",
    categorySlug: "ozel-yazilim",
    challenge: "İş makineleri kiralayan bir holdingin, şubeler arası envanter çakışmaları yaşaması ve müsaitlik takviminin gerçek zamanlı güncellenememesi.",
    solution: "Şubelerin anlık stok durumunu, bakım takvimlerini ve kiralama sürelerini tek bir ekranda birleştiren, çakışmaları önleyen akıllı rezervasyon algoritmalı web uygulaması.",
    results: [
      "Şubeler arası envanter çakışmaları tamamen ortadan kalktı.",
      "Ekipman kullanım verimliliği %28 oranında arttı.",
      "Teklif onay süreleri 1 günden 10 dakikaya indirildi."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL"],
    imageUrl: "/images/project-reservation.png",
  },
  {
    slug: "avs-servis",
    title: "AVS Filo ve Servis Hizmetleri",
    category: "Web Tasarımı & Kurumsal Arayüz",
    categorySlug: "web-tasarimi",
    challenge: "Kurumsal seyahat, filo kiralama ve personel taşımacılığı alanında faaliyet gösteren firmanın, modern, hızlı ve kurumsal kimliğini tam yansıtan dijital bir altyapıya sahip olmaması.",
    solution: "Şirketin tüm hizmet portföyünü, rezervasyon ve kurumsal teklif taleplerini modern cam kartlar ve optimize edilmiş geçiş efektleri ile sunan, Next.js tabanlı kurumsal web platformu geliştirildi.",
    results: [
      "Sayfa açılış hızları mobil cihazlarda %90 oranında iyileştirildi.",
      "Aylık dijital başvuru oranlarında %45 artış elde edildi.",
      "Arama motorlarında 'filo hizmetleri' anahtar kelimesinde organik sıralama yükseltildi."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/project-web.png",
    projectUrl: "https://avsservis.com.tr/",
  },
  {
    slug: "quattro-garaj",
    title: "Quattro Garaj Otomotiv Çözümleri",
    category: "Özel Yazılım",
    categorySlug: "ozel-yazilim",
    challenge: "Premium otomotiv servis ve garaj hizmetleri sunan markanın, araç sahiplerine yönelik randevu takvimini gerçek zamanlı yönetememesi ve hizmet detaylarını estetik sunamaması.",
    solution: "Markanın modern otomotiv vizyonunu yansıtan koyu tema odaklı, dinamik randevu alma ve entegre yedek parça sipariş altyapısına sahip özel bir Next.js e-ticaret ve rezervasyon yazılımı geliştirildi.",
    results: [
      "Servis randevu çakışmaları sıfıra indirildi.",
      "Online parça sipariş hacminde ilk çeyrekte %50 artış sağlandı.",
      "Mobil kullanıcılar için randevu alma süresi 1 dakikanın altına indirildi."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    imageUrl: "/images/project-ecommerce.png",
    projectUrl: "https://www.quattrogaraj.com/",
  },
  {
    slug: "dent-liart",
    title: "Dent Liart Dijital Diş Kliniği Portalı",
    category: "Özel Web Tasarımı",
    categorySlug: "web-tasarimi",
    challenge: "Ağız ve diş sağlığı polikliniğinin hastalar için tedavi süreçleri, hekim kadrosu ve online randevu adımlarını içeren, modern ve güven veren bir web varlığının bulunmaması.",
    solution: "Kullanıcılara hijyenik, minimalist ve premium bir deneyim sunan, tedavileri ve hekim bilgilerini detaylı anlatan, hızlı randevu oluşturma akışına sahip Next.js web portalı.",
    results: [
      "Dijital kanallardan gelen hasta randevularında %60 artış yaşandı.",
      "Poliklinik içi evrak ve kayıt süreçleri hafifletildi.",
      "Hasta geri bildirimlerinde web sitesi kullanım kolaylığı skoru %95'e ulaştı."
    ],
    technologies: ["Next.js", "Tailwind CSS", "Zustand", "Framer Motion", "TypeScript"],
    imageUrl: "/images/project-reservation.png",
    projectUrl: "https://dent-liart.vercel.app/",
  },
];

export const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "İhtiyaç Analizi",
    description: "İşletmenizin hedeflerini, hedef kitlesini ve teknik gereksinimlerini derinlemesine analiz ediyor, yol haritasını çıkarıyoruz.",
  },
  {
    stepNumber: 2,
    title: "Strateji ve Planlama",
    description: "Projenin bilgi mimarisini, kullanıcı deneyimi akışını, bütçesini, takvimini ve kullanılacak teknoloji yığınını belirliyoruz.",
  },
  {
    stepNumber: 3,
    title: "Tasarım",
    description: "Marka kimliğinize uygun, modern, minimalist ve premium arayüz tasarımlarını (UI/UX) hazırlayarak onayınıza sunuyoruz.",
  },
  {
    stepNumber: 4,
    title: "Geliştirme",
    description: "Tasarımı en güncel ve güvenli teknolojilerle (Next.js, TypeScript vb.) temiz, modüler ve yüksek performanslı koda dönüştürüyoruz.",
  },
  {
    stepNumber: 5,
    title: "Test, Yayın ve Destek",
    description: "Hız, güvenlik ve responsive kontrollerini tamamladıktan sonra projeyi yayınlıyor, sonrasında da teknik bakım ve destek sağlıyoruz.",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Bir web sitesi ne kadar sürede tamamlanır?",
    answer: "Projenin kapsamına, tasarım gereksinimlerine, sayfa sayısına ve entegrasyon yoğunluğuna göre süre değişiklik gösterir. Kurumsal web siteleri genellikle 3 ila 6 hafta, özel yazılım projeleri veya e-ticaret altyapıları ise özellik listesine bağlı olarak 8 ila 16 hafta arasında tamamlanmaktadır. Planlama aşamasında size net bir takvim sunulur.",
  },
  {
    id: "faq-2",
    question: "Proje fiyatları nasıl belirlenir?",
    answer: "Sabit fiyatlar yerine, tamamen projenizin ihtiyaç duyduğu özelliklere, tasarım özgünlüğüne, geliştirilecek sayfa sayısına, teknik entegrasyonlara ve destek gereksinimlerine göre özel bir bütçelendirme yapıyoruz. Detaylı analiz sonrasında kalem kalem teklifimizi iletiyoruz.",
  },
  {
    id: "faq-3",
    question: "Mobil uyumlu tasarım yapıyor musunuz?",
    answer: "Evet, geliştirdiğimiz tüm web siteleri ve yazılımlar mobil öncelikli (mobile-first) tasarım anlayışıyla geliştirilir. Telefon, tablet ve farklı ekran çözünürlüklerindeki tüm masaüstü cihazlarda mükemmel bir görünüm ve akıcı bir deneyim sunulur.",
  },
  {
    id: "faq-4",
    question: "Proje tamamlandıktan sonra destek sağlıyor musunuz?",
    answer: "Evet, projeyi teslim ettikten sonra da yanınızdayız. Sunucu yönetimi, düzenli güvenlik güncellemeleri, sistem yedeklemeleri ve olası hataların hızlıca çözülmesi için aylık/yıllık bakım ve teknik destek anlaşmaları kapsamında hizmet veriyoruz.",
  },
  {
    id: "faq-5",
    question: "Mevcut bir web sitesini yenileyebilir misiniz?",
    answer: "Evet, mevcut web sitenizin eskiyen altyapısını, yavaş çalışan sayfalarını ve güncelliğini yitirmiş tasarımını modern teknolojiler (Next.js, Tailwind vb.) kullanarak baştan tasarlıyor; eski verilerinizi ve SEO yapınızı koruyarak yeniliyoruz.",
  },
  {
    id: "faq-6",
    question: "Özel yazılım geliştirebilir misiniz?",
    answer: "Kesinlikle. İşletmenizin operasyonel süreçlerine, bayi yönetim sistemlerine (B2B), müşteri yönetim (CRM) veya lojistik süreçlerinize özel web tabanlı yazılımlar ve yönetim panelleri geliştiriyoruz. Hazır şablonlar kullanmıyor, sıfırdan sizin işinize özel kodluyoruz.",
  },
  {
    id: "faq-7",
    question: "Yapay zekâ ve otomasyon hizmetleri neleri kapsar?",
    answer: "İş süreçlerinizde tekrarlayan görevleri otomatikleştiren özel yazılımlardan (data scraping, entegrasyonlar), yapay zekâ API entegrasyonlarına (OpenAI, Claude), akıllı müşteri asistanlarından (chatbot) veri analizi yapan sistemlere kadar geniş bir yelpazede hizmet sunuyoruz.",
  },
  {
    id: "faq-8",
    question: "Domain ve hosting konusunda yardımcı oluyor musunuz?",
    answer: "Evet, alan adınızın (domain) tescili ve web sitenizin dünyaca ünlü hızlı bulut altyapılarında (Vercel, AWS vb.) güvenli, hızlı ve kesintisiz şekilde barındırılması (hosting/server) süreçlerini sizin adınıza yönetiyor ve kuruyoruz.",
  },
];

export const techCapabilities: TechCapability[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vanilla CSS / HTML5"],
  },
  {
    category: "Backend",
    items: ["Node.js", "TypeScript", "Python", "FastAPI", "REST & GraphQL APIs", "Socket.io"],
  },
  {
    category: "Veritabanı",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Mongoose"],
  },
  {
    category: "Bulut Sistemleri",
    items: ["Vercel", "AWS (Amazon Web Services)", "Docker", "GitHub Actions (CI/CD)", "Sentry Monitoring"],
  },
  {
    category: "Yapay Zekâ ve Otomasyon",
    items: ["OpenAI API", "Claude / Anthropic", "LangChain", "Akıllı Sohbet Botları", "İş Süreci Otomasyonları"],
  },
  {
    category: "Güvenlik",
    items: ["SSL/TLS Sertifikasyonu", "Girdi Doğrulama (Sanitization)", "OAuth 2.0 & JWT Yetkilendirme", "DDoS Korumaları"],
  },
];

// SAMPLE LEGAL CONTENT (Clearly marked placeholders as requested)
export const legalTexts = {
  privacyPolicy: {
    title: "Gizlilik Politikası",
    lastUpdated: "19 Temmuz 2026",
    content: `RN Yazılım olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğini korumak bizim için önemlidir. Bu Gizlilik Politikası, web sitemiz (rnyazilim.com) üzerinden toplanan kişisel verilerinizin nasıl işlendiğini, saklandığını ve korunduğunu açıklamaktadır.

1. Toplanan Bilgiler: İletişim formumuzu doldurduğunuzda verdiğiniz ad soyad, telefon numarası, e-posta adresi, firma adı ve bütçe bilgileri gibi veriler iş süreçlerimizi yönetmek amacıyla toplanır.
2. Bilgilerin Kullanımı: Toplanan bilgiler sadece sizinle iletişime geçmek, teklif sunmak ve hizmet kalitemizi artırmak amacıyla kullanılır. Üçüncü taraflarla paylaşılmaz.
3. Güvenlik: Verileriniz modern güvenlik duvarları ve şifreleme yöntemleriyle güvenli sunucularda saklanmaktadır.`,
  },
  cookiePolicy: {
    title: "Çerez Politikası",
    lastUpdated: "19 Temmuz 2026",
    content: `Web sitemizin performansını artırmak ve kullanıcı deneyimini iyileştirmek amacıyla çerezler (cookies) kullanmaktayız.

1. Çerez Nedir? Çerezler, tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır.
2. Kullanım Amacı: Sitemizdeki trafiği analiz etmek, kullanıcı tercihlerini hatırlamak ve sitemizin güvenliğini sağlamak amacıyla analiz ve işlevsel çerezler kullanılmaktadır.
3. Çerez Yönetimi: Tarayıcı ayarlarınız üzerinden çerez kullanımını kapatabilir veya sınırlayabilirsiniz. Ancak çerezlerin kapatılması, sitemizdeki bazı özelliklerin tam çalışmamasına neden olabilir.`,
  },
  kvkk: {
    title: "KVKK Aydınlatma Metni",
    lastUpdated: "19 Temmuz 2026",
    content: `6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca, RN Yazılım olarak "Veri Sorumlusu" sıfatıyla kişisel verilerinizi kanuna uygun şekilde işliyoruz.

1. Kişisel Verilerin İşlenme Amacı: İletişim formu aracılığıyla alınan verileriniz, size hizmet sunabilmek, teklif iletmek ve teknik süreçleri yürütmek amacıyla işlenir.
2. İşlenen Veriler: Ad Soyad, Telefon, E-posta, Firma Adı, Bütçe ve Proje Detayları.
3. Haklarınız: KVKK Madde 11 uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, verilerin düzeltilmesini veya silinmesini isteme haklarına sahipsiniz. Başvurularınızı info@rnyazilim.com adresine yazılı olarak yapabilirsiniz.`,
  },
  termsOfUse: {
    title: "Kullanım Koşulları",
    lastUpdated: "19 Temmuz 2026",
    content: `rnyazilim.com web sitesine erişerek ve sitemizi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız:

1. Fikri Mülkiyet: Bu sitede yer alan tasarım, logo, metinler, kodlar ve görsellerin fikri mülkiyet hakları RN Yazılım'a aittir. Yazılı izin alınmadan kopyalanamaz veya dağıtılamaz.
2. Hizmet Amacı: Sitedeki bilgiler genel bilgilendirme amaçlıdır. Doğrudan yazılı bir taahhüt içermez.
3. Sorumluluk: Sitede yer alan bilgilerin güncelliği konusunda gerekli hassasiyet gösterilse de, teknik aksaklıklardan veya gecikmelerden dolayı doğrudan/dolaylı zararlardan RN Yazılım sorumlu tutulamaz.`,
  },
};
