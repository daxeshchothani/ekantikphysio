"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import PageHero from "@/components/ui/PageHero";
import { SERVICES } from "@/lib/data";

interface AppointmentFormValues {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  referralSource: string;
  notes: string;
}

const times = ["8am", "9am", "10am", "11am", "12pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
const referralSources = ["Google", "Friend", "GP Referral", "Social Media", "Other"];

export default function AppointmentPageContent() {
  const [reference, setReference] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<AppointmentFormValues>();

  const selectedServiceSlug = watch("serviceType");
  const selectedService = SERVICES.find((s) => s.slug === selectedServiceSlug);

  const onSubmit = async (data: AppointmentFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/send-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          serviceType: selectedService?.title || data.serviceType,
          preferredDate: data.preferredDate,
          preferredTime: data.preferredTime,
          referralSource: data.referralSource,
          notes: data.notes,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setReference(result.referenceNumber);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to send appointment request. Please call us at +44 20 7946 0821"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-2xl border bg-white px-4 py-3 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed ${
      hasError ? "border-red-500" : "border-primary/20 focus:border-primary"
    }`;

  if (isSubmitted && reference) {
    return (
      <>
        <PageHero
          title="Book an Appointment"
          subtitle="Reserve your consultation with our Harley Street physiotherapy team."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Appointment", href: "/appointment" },
          ]}
        />

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
              <h2 className="mt-6 text-dark">Appointment Request Sent! ✓</h2>
              <p className="mt-4 text-lg text-muted">
                We've sent a confirmation email to your inbox with all the details.
              </p>

              <div className="my-8 rounded-xl border-2 border-accent bg-amber-50 p-6">
                <p className="text-sm text-muted">Reference Number</p>
                <p className="mt-2 text-3xl font-bold text-accent">#{reference}</p>
              </div>

              <div className="space-y-3 rounded-xl bg-surface p-6">
                <h3 className="font-semibold text-dark">What Happens Next</h3>
                <ol className="mt-4 space-y-2 text-left text-sm text-muted">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">1.</span>
                    <span>Our team reviews your booking (within 30 mins)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">2.</span>
                    <span>We confirm your exact appointment slot via email</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">3.</span>
                    <span>You'll receive a reminder 24 hours before your visit</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">4.</span>
                    <span>Arrive 10 minutes early for your first appointment</span>
                  </li>
                </ol>
              </div>

              <div className="mt-8 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setIsSubmitted(false);
                    setReference(null);
                  }}
                  className="flex-1 rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:bg-primary-light"
                >
                  Book Another Appointment
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="/"
                  className="flex-1 rounded-full border-2 border-primary px-8 py-4 text-center font-bold text-primary transition hover:bg-primary/5"
                >
                  Return to Home →
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Book an Appointment"
        subtitle="Reserve your consultation with our Harley Street physiotherapy team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Appointment", href: "/appointment" },
        ]}
      />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface py-24"
      >
        <div className="container-shell grid gap-8 lg:grid-cols-5">
          <div className="rounded-2xl bg-white p-8 shadow-lg lg:col-span-3">
            <h2 className="text-dark">Book Your Appointment</h2>

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
                  placeholder="Full Name"
                  disabled={isSubmitting}
                  {...register("fullName", { required: "Full name is required", minLength: { value: 2, message: "Minimum 2 characters" } })}
                  className={inputClass(!!errors.fullName)}
                />
                {errors.fullName ? <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p> : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    placeholder="Email"
                    disabled={isSubmitting}
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                    })}
                    className={inputClass(!!errors.email)}
                  />
                  {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email.message}</p> : null}
                </div>
                <div>
                  <input
                    placeholder="Phone (e.g. +44 20 7946 0821)"
                    disabled={isSubmitting}
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: { value: /^(\+44\s?\d{2,4}\s?\d{3,4}\s?\d{3,4}|0\d{10,11})$/, message: "Enter a valid UK phone number" },
                    })}
                    className={inputClass(!!errors.phone)}
                  />
                  {errors.phone ? <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p> : null}
                </div>
              </div>

              <div>
                <select {...register("serviceType", { required: "Please select a service" })} disabled={isSubmitting} className={inputClass(!!errors.serviceType)}>
                  <option value="">Select Service Type</option>
                  {SERVICES.map((service) => (
                    <option key={service.id} value={service.slug}>
                      {service.title}
                    </option>
                  ))}
                </select>
                {errors.serviceType ? <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p> : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input type="date" min={today} disabled={isSubmitting} {...register("preferredDate", { required: "Preferred date is required" })} className={inputClass(!!errors.preferredDate)} />
                  {errors.preferredDate ? <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p> : null}
                </div>
                <div>
                  <select {...register("preferredTime", { required: "Please select a time" })} disabled={isSubmitting} className={inputClass(!!errors.preferredTime)}>
                    <option value="">Preferred Time</option>
                    {times.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.preferredTime ? <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p> : null}
                </div>
              </div>

              <div>
                <select {...register("referralSource", { required: "Please select an option" })} disabled={isSubmitting} className={inputClass(!!errors.referralSource)}>
                  <option value="">How did you hear about us?</option>
                  {referralSources.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </select>
                {errors.referralSource ? <p className="mt-1 text-sm text-red-600">{errors.referralSource.message}</p> : null}
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Additional notes"
                  disabled={isSubmitting}
                  {...register("notes")}
                  className={inputClass(false)}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-dark transition hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit Appointment Request"
                )}
              </motion.button>
            </form>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl bg-primary p-6 text-white shadow-lg">
              <MapPin className="h-7 w-7" />
              <p className="mt-2 text-lg font-semibold">14 Harley Street, Marylebone, London W1G 9PJ</p>
              <p className="mt-2 text-white/80">Clinic location and transport details provided after booking confirmation.</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="text-dark">Working Hours</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>Monday-Friday: 8:00 AM - 7:00 PM</li>
                <li>Saturday: 9:00 AM - 5:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="text-dark">What to Expect at Your First Appointment</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>• Full clinical and movement assessment</li>
                <li>• Clear diagnosis and treatment roadmap</li>
                <li>• First treatment and home-care guidance</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="flex items-center gap-2 text-sm text-muted"><Phone className="h-4 w-4 text-primary" /> <a href="tel:+442079460821">+44 20 7946 0821</a></div>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted"><Mail className="h-4 w-4 text-primary" /> <a href="mailto:info@ekantikphysio.co.uk">info@ekantikphysio.co.uk</a></div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
