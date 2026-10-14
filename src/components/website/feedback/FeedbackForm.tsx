"use client";

import Link from "next/link";
import { ArrowRight, MessageSquareText } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { submitVisitorFeedback } from "@/lib/web3forms";
import type {
  VisitorFeedbackCategory,
  VisitorFeedbackFormValues,
} from "@/types/website";

const feedbackCategories: {
  value: VisitorFeedbackCategory;
  label: string;
}[] = [
  { value: "experience", label: "انطباع عن تجربة" },
  { value: "platform", label: "رأيي في المنصة" },
  { value: "suggestion", label: "اقتراح تطوير" },
  { value: "correction", label: "تصحيح معلومة" },
  { value: "question", label: "استفسار" },
];

const inputClassName =
  "w-full rounded-lg border border-white/15 bg-(--color-background)/70 px-4 py-3 text-(--color-text) outline-none transition placeholder:text-(--color-secondary-text)/60 focus:border-(--color-accent) focus:ring-2 focus:ring-(--color-accent)/20";

export default function FeedbackForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const botcheckRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionError("");
    setShowSuccess(false);

    const formData = new FormData(event.currentTarget);
    const category = formData.get("category");
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (
      typeof category !== "string" ||
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      setSubmissionError("تعذر قراءة بيانات النموذج، يرجى المحاولة مرة أخرى.");
      return;
    }

    const selectedCategory = feedbackCategories.find(
      (option) => option.value === category
    );
    if (!selectedCategory) {
      setSubmissionError("يرجى اختيار نوع المشاركة.");
      return;
    }

    const values: VisitorFeedbackFormValues = {
      category: selectedCategory.value,
      name,
      email,
      message,
    };

    setIsSubmitting(true);
    try {
      const result = await submitVisitorFeedback(
        values,
        selectedCategory.label,
        botcheckRef.current?.value ?? ""
      );

      if (!result.success) {
        setSubmissionError(
          result.reason === "not-configured"
            ? "نموذج مشاركة الرأي غير متاح حاليًا، يرجى المحاولة لاحقًا."
            : "تعذر إرسال رأيك الآن، يرجى المحاولة مرة أخرى."
        );
        return;
      }

      formRef.current?.reset();
      setShowSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      aria-labelledby="feedback-form-title"
      className="mx-auto w-full max-w-3xl overflow-hidden rounded-lg border border-(--color-accent)/25 bg-(--color-surface)/70 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
    >
      <div className="border-b border-white/10 px-5 py-5 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-lg border border-(--color-accent)/30 bg-(--color-accent)/10 text-(--color-accent)">
            <MessageSquareText aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 id="feedback-form-title" className="font-alexandria text-lg font-bold sm:text-xl">
              نموذج مشاركة الرأي
            </h2>
            <p className="mt-1 text-sm text-(--color-secondary-text)">
              الحقول المشار إليها مطلوبة
            </p>
          </div>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-5 px-5 py-6 sm:px-8 sm:py-8"
      >
        <input
          ref={botcheckRef}
          type="text"
          name="botcheck"
          tabIndex={-1}
          aria-hidden="true"
          autoComplete="off"
          className="hidden"
        />
        <div>
          <label htmlFor="feedback-category" className="mb-2 block text-sm font-medium text-(--color-secondary-text)">
            نوع المشاركة <span aria-hidden="true" className="text-(--color-accent)">*</span>
          </label>
          <select
            id="feedback-category"
            name="category"
            required
            defaultValue=""
            className={`${inputClassName} cursor-pointer`}
          >
            <option value="" disabled>
              اختر نوع المشاركة
            </option>
            {feedbackCategories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="feedback-name" className="mb-2 block text-sm font-medium text-(--color-secondary-text)">
              الاسم <span aria-hidden="true" className="text-(--color-accent)">*</span>
            </label>
            <input
              id="feedback-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              maxLength={100}
              placeholder="اكتب اسمك"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="feedback-email" className="mb-2 block text-sm font-medium text-(--color-secondary-text)">
              البريد الإلكتروني <span aria-hidden="true" className="text-(--color-accent)">*</span>
            </label>
            <input
              id="feedback-email"
              name="email"
              type="email"
              required
              dir="ltr"
              autoComplete="email"
              placeholder="example@email.com"
              className={`${inputClassName} text-left`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="feedback-message" className="mb-2 block text-sm font-medium text-(--color-secondary-text)">
            رأيك أو رسالتك <span aria-hidden="true" className="text-(--color-accent)">*</span>
          </label>
          <textarea
            id="feedback-message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={6}
            placeholder="اكتب رأيك أو اقتراحك أو استفسارك"
            className={`${inputClassName} min-h-36 resize-y leading-7`}
          />
        </div>

        <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-(--color-accent)/40 bg-(--color-accent)/10 px-5 py-3 text-sm font-semibold text-(--color-accent) transition hover:bg-(--color-accent)/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent) disabled:cursor-wait disabled:opacity-60 sm:min-w-44"
          >
            {isSubmitting ? "جارٍ الإرسال..." : "إرسال الرأي"}
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-(--color-secondary-text) transition hover:text-(--color-accent)"
          >
            <ArrowRight aria-hidden="true" className="size-4" />
            العودة إلى الرئيسية
          </Link>
        </div>
        {submissionError && (
          <p role="alert" className="text-sm leading-6 text-red-400">
            {submissionError}
          </p>
        )}
        {showSuccess && (
          <p role="status" className="text-sm leading-6 text-green-400">
            شكرًا لمشاركتنا رأيك، تم إرساله بنجاح.
          </p>
        )}
      </form>
    </section>
  );
}