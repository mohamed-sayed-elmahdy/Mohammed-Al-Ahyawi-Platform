"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { countries } from "@/constants/countries";
import {
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  X,
} from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  details: string;
};

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  country: "المملكة العربية السعودية",
  city: "",
  details: "",
};


export default function RequestVisitPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const next: Partial<Record<keyof FormData, string>> = {};

    if (!form.name.trim()) next.name = "الاسم مطلوب";
    if (!form.phone.trim()) next.phone = "رقم الجوال مطلوب";
    else if (!/^[\d+\s()-]{8,20}$/.test(form.phone.trim()))
      next.phone = "رقم الجوال غير صحيح";

    if (!form.email.trim()) next.email = "البريد الإلكتروني مطلوب";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "البريد الإلكتروني غير صحيح";

    if (!form.country.trim()) next.country = "الدولة مطلوبة";
    if (!form.city.trim()) next.city = "المدينة مطلوبة";
    if (!form.details.trim()) next.details = "تفاصيل الزيارة مطلوبة";
    else if (form.details.trim().length < 15)
      next.details = "يرجى كتابة تفاصيل أوضح عن الزيارة";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Placeholder — لاحقًا تربطه بـ API / Server Action
    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setShowSuccess(true);
    setForm(initialForm);
  };

  const closeSuccess = () => setShowSuccess(false);

  const fieldClass =
    "w-full rounded-2xl border border-(--color-accent)/25 bg-(--color-background)/70 px-4 py-3.5 text-(--color-text) outline-none transition placeholder:text-(--color-secondary-text)/60 focus:border-(--color-accent) focus:ring-2 focus:ring-(--color-accent)/20";

  const labelClass =
    "mb-2 block text-sm font-medium text-(--color-secondary-text)";

  return (
    <div className="relative min-h-[70vh] overflow-hidden bg-(--color-background) text-(--color-text)">
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_65%)]" />

      <section className="relative mx-auto max-w-[1100px] px-4 py-14 sm:px-8 lg:px-10 lg:py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-3xl font-medium tracking-[0.25em] text-(--color-accent)">
            طلب زيارة
          </p>
          <h1 className="font-alexandria mt-4 text-3xl font-bold leading-relaxed sm:text-4xl lg:text-5xl">
            ادعُ محمد الإحيوي لتجربة منشأتك
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-(--color-secondary-text) sm:text-lg">
            املأ النموذج التالي ببيانات المنشأة وتفاصيل الدعوة، وسنراجع الطلب
            ونتواصل معك في أقرب وقت
          </p>
        </div>

        {/* Form card */}
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-[30px] border border-(--color-accent)/35 bg-(--color-surface)/60 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <div className="border-b border-(--color-accent)/20 bg-(--color-background)/40 px-6 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl border border-(--color-accent)/30 bg-(--color-accent)/10 text-(--color-accent)">
                <Send className="size-5" />
              </span>
              <div>
                <h2 className="font-alexandria text-xl font-bold text-(--color-accent)">
                  نموذج طلب الزيارة
                </h2>
                <p className="mt-1 text-sm text-(--color-secondary-text)">
                  جميع الحقول مطلوبة
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 px-6 py-8 sm:px-8">
            {/* Name + Phone */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  <span className="inline-flex items-center gap-2">
                    <User className="size-4 text-(--color-accent)" />
                    الاسم
                  </span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="الاسم الكامل / اسم المسؤول"
                  className={fieldClass}
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  <span className="inline-flex items-center gap-2">
                    <Phone className="size-4 text-(--color-accent)" />
                    الجوال
                  </span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  dir="ltr"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+966 5X XXX XXXX"
                  className={`${fieldClass} text-left`}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                <span className="inline-flex items-center gap-2">
                  <Mail className="size-4 text-(--color-accent)" />
                  البريد الإلكتروني
                </span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                dir="ltr"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={`${fieldClass} text-left`}
                autoComplete="email"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Country + City */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="country" className={labelClass}>
                  <span className="inline-flex items-center gap-2">
                    <Building2 className="size-4 text-(--color-accent)" />
                    الدولة
                  </span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className={`${fieldClass} cursor-pointer`}
                >
                  <option value="">اختر الدولة</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="mt-2 text-sm text-red-400">{errors.country}</p>
                )}
              </div>

              <div>
                <label htmlFor="city" className={labelClass}>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="size-4 text-(--color-accent)" />
                    المدينة
                  </span>
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="مثال: الرياض"
                  className={fieldClass}
                  autoComplete="address-level2"
                />
                {errors.city && (
                  <p className="mt-2 text-sm text-red-400">{errors.city}</p>
                )}
              </div>
            </div>

            {/* Details */}
            <div>
              <label htmlFor="details" className={labelClass}>
                تفاصيل الزيارة
              </label>
              <textarea
                id="details"
                name="details"
                rows={5}
                value={form.details}
                onChange={handleChange}
                placeholder="اكتب نبذة عن المنشأة، نوع النشاط، والهدف من الدعوة..."
                className={`${fieldClass} resize-y min-h-[140px]`}
              />
              {errors.details && (
                <p className="mt-2 text-sm text-red-400">{errors.details}</p>
              )}
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer group relative overflow-hidden  inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-(--color-accent)/60 px-4 py-1 text-base font-bold text-[#08111f] shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-50"
              >
                {/* Gold Border */}
                <div
                  className="
                          absolute
                          inset-0
                          rounded-[14px]
                          bg-[linear-gradient(135deg,#3d2a10_0%,#8d6323_18%,#f5d17a_34%,#7e571f_48%,#3c2810_65%,#f4ca71_83%,#5d4017_100%)]
                          group-hover:brightness-110
                          transition-all
                          duration-500
                        "
                  style={{
                    padding: `${1}px`,
                  }}
                >
                  <div
                    className="
                            h-full
                            w-full
                            rounded-xl
                          
                          "
                  />
                </div>

                {/* Outer Glow */}
                <div
                  className="
                          absolute
                          inset-0
                          rounded-[14px]
                          opacity-70
                          transition-all
                          duration-500
                          shadow-[0_0_25px_rgba(255,184,61,.15)]
                          group-hover:shadow-[0_0_34px_rgba(243,193,92,.22)]
                        "
                />

                {/* Background */}
                <div
                  className="
                          absolute
                          inset-0.5
                          rounded-xl
                          bg-[radial-gradient(circle_at_50%_30%,#27231b_10%,#171717_55%,#0c0c0c_100%)]
                        "
                />

                {/* Spotlight */}
                <div
                  className="
                          absolute
                        inset-0.5
                          rounded-xl
                          pointer-events-none
                          opacity-0
                          transition-opacity
                          duration-300
                          group-hover:opacity-100
                        "
                  style={{
                    background:
                      "radial-gradient(180px circle at var(--x) var(--y), rgba(243,193,92,.18), transparent 65%)",
                  }}
                />

                {/* Inner Shadow */}
                <div
                  className="
                          absolute
                          inset-0.5
                          rounded-xl
                          shadow-[inset_0_2px_5px_rgba(255,255,255,.06),inset_0_-5px_12px_rgba(0,0,0,.8)]
                        "
                />

                {/* Content */}
                <span
                  className="
                          relative
                          z-20
                          flex
                          items-center
                          justify-center
                          gap-2
                          px-5
                          py-2
                          text-base
                          font-bold
                          text-(--color-text)
                          drop-shadow-[0_0_6px_rgba(255,199,94,.35)]
                          transition-all
                          duration-300
                        "
                >


                  {isSubmitting ? (
                    <span>جاري الإرسال...</span>
                  ) : (
                    <>
                      <span>إرسال الطلب</span>
                      <Send className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-[-2px]" />
                    </>
                  )}
                </span>


              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Success Popup */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          onClick={closeSuccess}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-(--color-accent)/40 bg-(--color-surface) p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.55)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeSuccess}
              aria-label="إغلاق"
              className="absolute left-4 top-4 rounded-full border border-white/10 p-2 text-(--color-secondary-text) transition hover:border-(--color-accent)/40 hover:text-(--color-accent)"
            >
              <X className="size-5" />
            </button>

            <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-(--color-accent)/40 bg-(--color-accent)/10 text-(--color-accent)">
              <CheckCircle2 className="size-9" />
            </div>

            <h3
              id="success-title"
              className="font-alexandria mt-6 text-2xl font-bold text-(--color-accent)"
            >
              تم استلام طلبكم
            </h3>
            <p className="mt-4 text-base leading-8 text-(--color-secondary-text)">
              تم استلام طلبكم وسيتم التواصل معكم قريبا
            </p>

            <button
              type="button"
              onClick={closeSuccess}
              className="mt-8 inline-flex rounded-2xl border border-(--color-accent)/50 bg-(--color-accent)/15 px-6 py-3 text-sm font-semibold text-(--color-accent) transition hover:bg-(--color-accent)/25"
            >
              حسنا
            </button>
          </div>
        </div>
      )}
    </div>
  );
}