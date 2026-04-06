"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import BookingCTA from "@/components/ui/BookingCTA";
import PageHero from "@/components/ui/PageHero";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPageContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please call us at +44 20 7946 0821"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-2xl border bg-white px-4 py-3 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed ${
      hasError ? "border-red-500" : "border-primary/20 focus:border-primary"
    }`;

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch — we respond within 30 minutes during clinic hours."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white py-14"
      >
        <div className="container-shell grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: Phone, label: "Phone", value: "+44 20 7946 0821", href: "tel:+442079460821" },
            { icon: Mail, label: "Email", value: "info@ekantikphysio.co.uk", href: "mailto:info@ekantikphysio.co.uk" },
            { icon: MapPin, label: "Address", value: "14 Harley Street, Marylebone, London W1G 9PJ", href: "https://maps.google.com" },
          ].map((item) => (
            <motion.a
              whileHover={{ y: -4, scale: 1.01 }}
              key={item.label}
              href={item.href}
              className="rounded-2xl border border-primary/15 bg-surface p-5 shadow-lg"
            >
              <item.icon className="h-6 w-6 text-primary" />
              <p className="mt-2 text-sm font-semibold text-dark">{item.label}</p>
              <p className="text-sm text-muted">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {isSubmitted ? (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-surface py-24"
        >
          <div className="container-shell max-w-2xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-2xl bg-white p-12 text-center shadow-lg"
            >
              <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
              <h2 className="mt-6 text-dark">Message Sent Successfully! ✓</h2>
              <p className="mt-4 text-lg text-muted">
                Thank you for reaching out. We'll get back to you within 2–4 hours during clinic hours.
              </p>

              <p className="mt-6 rounded-xl bg-primary/5 px-6 py-4 text-sm text-muted">
                📧 Check your inbox for a confirmation email with details about your inquiry.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsSubmitted(false)}
                className="mt-8 rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-primary-light"
              >
                Send Another Message
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      ) : (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-surface py-24"
        >
          <div className="container-shell grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="text-dark">Send Us a Message</h2>

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-700"
                >
                  ⚠️ {submitError}
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                <div>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Name"
                    disabled={isSubmitting}
                    className={inputClass(!!errors.name)}
                  />
                  {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name.message}</p> : null}
                </div>
                <div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                    })}
                    placeholder="Email"
                    disabled={isSubmitting}
                    className={inputClass(!!errors.email)}
                  />
                  {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email.message}</p> : null}
                </div>
                <div>
                  <input
                    {...register("phone", { required: "Phone is required" })}
                    placeholder="Phone"
                    disabled={isSubmitting}
                    className={inputClass(!!errors.phone)}
                  />
                  {errors.phone ? <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p> : null}
                </div>
                <div>
                  <textarea
                    rows={5}
                    {...register("message", { required: "Message is required" })}
                    placeholder="Message"
                    disabled={isSubmitting}
                    className={inputClass(!!errors.message)}
                  />
                  {errors.message ? <p className="mt-1 text-sm text-red-600">{errors.message.message}</p> : null}
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-dark transition hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </div>

            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl bg-primary-dark p-6 text-white shadow-lg">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:18px_18px]" />
                <div className="relative z-10">
                  <MapPin className="h-7 w-7 text-accent" />
                  <p className="mt-2 font-semibold">14 Harley Street, Marylebone, London W1G 9PJ</p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <p className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">We're open today</p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>Monday-Friday: 8:00 AM - 7:00 PM</li>
                  <li>Saturday: 9:00 AM - 5:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      <BookingCTA />
    </>
  );
}
