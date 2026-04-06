"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Leaf, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface NewsletterFormValues {
  email: string;
}

export default function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormValues>();

  const onSubmit = async (values: NewsletterFormValues) => {
    if (!values.email) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/send-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000); // Auto-reset after 5 seconds
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Failed to subscribe. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-surface py-16"
    >
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-4 text-primary">
            <Leaf className="h-5 w-5" />
            <Leaf className="h-5 w-5" />
          </div>
          <h2 className="text-dark">Stay Informed on Your Recovery Journey</h2>
          <p className="mt-3 text-muted">
            Monthly physiotherapy tips, exercise guides, and clinic news — straight to your inbox.
          </p>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-white"
            >
              <CheckCircle2 className="h-5 w-5" />
              ✓ Welcome aboard! Check your inbox for a confirmation.
            </motion.div>
          )}

          {submitError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 rounded-full border border-red-300 bg-red-50 px-6 py-3 text-sm text-red-700"
            >
              ⚠️ {submitError}
            </motion.div>
          )}

          {!isSubmitted && (
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-6 max-w-2xl">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  className={`w-full rounded-full border px-5 py-3 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.email ? "border-red-500" : "border-primary/20 focus:border-primary"
                  }`}
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 font-bold text-dark transition hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="hidden sm:block">Subscribing...</span>
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </motion.button>
              </div>
              {errors.email ? <p className="mt-2 text-left text-sm text-red-600">{errors.email.message}</p> : null}
            </form>
          )}

          {!isSubmitted && <p className="mt-3 text-xs text-muted">No spam. Unsubscribe any time.</p>}
        </div>
      </div>
    </motion.section>
  );
}
