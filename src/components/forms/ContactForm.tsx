"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";
import Button from "../ui/Button";
import { services } from "@/content/company";

// Turkish Zod schema validation messages
const phoneRegex = /^(\+90|0)?\s*([5-9]\d{2})\s*(\d{3})\s*(\d{2})\s*(\d{2})$/;

const contactSchema = z.object({
  fullName: z.string().min(3, "Lütfen en az 3 karakter uzunluğunda ad soyad giriniz."),
  companyName: z.string().optional(),
  phone: z.string().refine((val) => phoneRegex.test(val), {
    message: "Lütfen geçerli bir Türkiye telefon numarası giriniz (örn: 0555 123 45 67).",
  }),
  email: z.string().email("Lütfen geçerli bir e-posta adresi giriniz."),
  service: z.string().min(1, "Lütfen ilgilendiğiniz hizmeti seçiniz."),
  budget: z.string().min(1, "Lütfen tahmini bütçe aralığını seçiniz."),
  details: z.string().min(10, "Lütfen projeniz hakkında en az 10 karakter içeren detay yazınız."),
  kvkk: z.boolean().refine((val) => val === true, {
    message: "Devam etmek için KVKK Aydınlatma Metni'ni kabul etmelisiniz.",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      service: "",
      budget: "",
      details: "",
      kvkk: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

      if (endpoint) {
        // Real API Submission
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Sunucu hatası oluştu. Lütfen daha sonra tekrar deneyiniz.");
        }
      } else {
        // Safe Mock Submission Flow in Development
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Mock Form Gönderimi Başarılı! (Gerçek endpoint yapılandırılmamış.)", data);
      }

      setStatus("success");
      reset();
    } catch (err) {
      console.error("Form gönderme hatası:", err);
      setStatus("error");
      const message = err instanceof Error ? err.message : "Beklenmedik bir hata oluştu. Lütfen tekrar deneyiniz.";
      setErrorMessage(message);
    }
  };

  const budgetOptions = [
    { value: "100k-250k", label: "100.000 TL - 250.000 TL" },
    { value: "250k-500k", label: "250.000 TL - 500.000 TL" },
    { value: "500k-1m", label: "500.000 TL - 1.000.000 TL" },
    { value: "1m-plus", label: "1.000.000 TL ve üzeri" },
  ];

  return (
    <div className="w-full glass-card p-6 md:p-10 rounded-2xl glow-blue">
      {status === "success" ? (
        <div className="flex flex-col items-center text-center py-12">
          <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-6 animate-bounce" />
          <h3 className="font-plus-jakarta font-bold text-2xl text-text-light mb-4">
            Mesajınız Başarıyla Alındı!
          </h3>
          <p className="text-text-gray max-w-md mb-8 leading-relaxed">
            Bizimle iletişime geçtiğiniz için teşekkür ederiz. Proje detaylarınızı inceleyip en geç 24 saat içerisinde tarafınıza dönüş sağlayacağız.
          </p>
          <Button variant="secondary" onClick={() => setStatus("idle")}>
            Yeni Bir Form Gönder
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {status === "error" && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-red-950/50 border border-red-500/20 text-red-400 text-sm">
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Form Gönderilemedi:</span> {errorMessage}
              </div>
            </div>
          )}

          {/* Hidden endpoint helper info for developers */}
          {!process.env.NEXT_PUBLIC_FORM_ENDPOINT && (
            <div className="p-3.5 rounded-lg bg-blue-950/20 border border-blue-500/10 text-xs text-text-gray flex gap-2.5">
              <HelpCircle className="h-4.5 w-4.5 text-primary-light shrink-0 mt-0.5" />
              <p>
                <strong>Geliştirici Bilgisi:</strong> İletişim formu şu anda simüle (mock) edilmektedir. Gerçek API entegrasyonu için <code>.env</code> dosyasına <code>NEXT_PUBLIC_FORM_ENDPOINT</code> ekleyiniz.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullName" className="text-sm font-medium text-text-light flex items-center gap-1">
                Ad Soyad <span className="text-primary-light">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                autoComplete="name"
                className={`w-full px-4 py-3 rounded-lg border bg-bg-dark text-text-light text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors ${
                  errors.fullName ? "border-red-500/50" : "border-white/10"
                }`}
                {...register("fullName")}
              />
              {errors.fullName && (
                <span className="text-xs text-red-400">{errors.fullName.message}</span>
              )}
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="companyName" className="text-sm font-medium text-text-light">
                Firma Adı <span className="text-text-gray/50 text-xs">(Opsiyonel)</span>
              </label>
              <input
                type="text"
                id="companyName"
                autoComplete="organization"
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-bg-dark text-text-light text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                {...register("companyName")}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-text-light flex items-center gap-1">
                Telefon Numarası <span className="text-primary-light">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="05XX XXX XX XX"
                autoComplete="tel"
                className={`w-full px-4 py-3 rounded-lg border bg-bg-dark text-text-light text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors ${
                  errors.phone ? "border-red-500/50" : "border-white/10"
                }`}
                {...register("phone")}
              />
              {errors.phone && (
                <span className="text-xs text-red-400">{errors.phone.message}</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-text-light flex items-center gap-1">
                E-posta Adresi <span className="text-primary-light">*</span>
              </label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                className={`w-full px-4 py-3 rounded-lg border bg-bg-dark text-text-light text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors ${
                  errors.email ? "border-red-500/50" : "border-white/10"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <span className="text-xs text-red-400">{errors.email.message}</span>
              )}
            </div>

            {/* Service Interested */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="text-sm font-medium text-text-light flex items-center gap-1">
                İlgilendiğiniz Hizmet <span className="text-primary-light">*</span>
              </label>
              <select
                id="service"
                className={`w-full px-4 py-3 rounded-lg border bg-bg-dark text-text-light text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors cursor-pointer appearance-none ${
                  errors.service ? "border-red-500/50" : "border-white/10"
                }`}
                {...register("service")}
              >
                <option value="">Seçiniz</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              {errors.service && (
                <span className="text-xs text-red-400">{errors.service.message}</span>
              )}
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="budget" className="text-sm font-medium text-text-light flex items-center gap-1">
                Tahmini Proje Bütçesi <span className="text-primary-light">*</span>
              </label>
              <select
                id="budget"
                className={`w-full px-4 py-3 rounded-lg border bg-bg-dark text-text-light text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors cursor-pointer appearance-none ${
                  errors.budget ? "border-red-500/50" : "border-white/10"
                }`}
                {...register("budget")}
              >
                <option value="">Seçiniz</option>
                {budgetOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <span className="text-xs text-red-400">{errors.budget.message}</span>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="details" className="text-sm font-medium text-text-light flex items-center gap-1">
              Proje Detayları <span className="text-primary-light">*</span>
            </label>
            <textarea
              id="details"
              rows={4}
              placeholder="Projenizin hedeflerini, gereksinimlerini ve varsa detaylarını yazınız..."
              className={`w-full px-4 py-3 rounded-lg border bg-bg-dark text-text-light text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none ${
                errors.details ? "border-red-500/50" : "border-white/10"
              }`}
              {...register("details")}
            />
            {errors.details && (
              <span className="text-xs text-red-400">{errors.details.message}</span>
            )}
          </div>

          {/* KVKK Checkbox */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="kvkk"
                className="mt-1 h-4 w-4 rounded border-white/10 bg-bg-dark text-primary focus:ring-primary cursor-pointer"
                {...register("kvkk")}
              />
              <label htmlFor="kvkk" className="text-xs text-text-gray leading-relaxed cursor-pointer select-none">
                <span className="text-text-light">*</span> RN Yazılım ile paylaştığım kişisel verilerimin,{" "}
                <a href="/kvkk" target="_blank" className="text-primary-light hover:underline font-medium">
                  KVKK Aydınlatma Metni
                </a>{" "}
                ve{" "}
                <a href="/gizlilik-politikasi" target="_blank" className="text-primary-light hover:underline font-medium">
                  Gizlilik Politikası
                </a>{" "}
                kapsamında işlenmesini, saklanmasını ve benimle iletişime geçilmesini kabul ediyorum.
              </label>
            </div>
            {errors.kvkk && (
              <span className="text-xs text-red-400">{errors.kvkk.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            className="w-full justify-center py-3.5"
            isLoading={status === "loading"}
            rightIcon={<Send className="h-4.5 w-4.5" />}
          >
            Teklif Talebini Gönder
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
