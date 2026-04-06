"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
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
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormValues>();

  const onSubmit = () => {
    const ref = String(Math.floor(100000 + Math.random() * 900000));
    setReference(ref);
    reset();
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-2xl border bg-white px-4 py-3 outline-none transition ${
      hasError ? "border-red-500" : "border-primary/20 focus:border-primary"
    }`;

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

            {reference ? (
              <div className="mt-6 rounded-2xl border border-primary/20 bg-surface p-5">
                <p className="font-semibold text-primary">Appointment Request Submitted</p>
                <p className="mt-1 text-muted">Thanks for contacting Ekantik Physio. Your reference number is #{reference}.</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div>
                <input
                  placeholder="Full Name"
                  {...register("fullName", { required: "Full name is required", minLength: { value: 2, message: "Minimum 2 characters" } })}
                  className={inputClass(!!errors.fullName)}
                />
                {errors.fullName ? <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p> : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    placeholder="Email"
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
                <select {...register("serviceType", { required: "Please select a service" })} className={inputClass(!!errors.serviceType)}>
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
                  <input type="date" min={today} {...register("preferredDate", { required: "Preferred date is required" })} className={inputClass(!!errors.preferredDate)} />
                  {errors.preferredDate ? <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p> : null}
                </div>
                <div>
                  <select {...register("preferredTime", { required: "Please select a time" })} className={inputClass(!!errors.preferredTime)}>
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
                <select {...register("referralSource", { required: "Please select an option" })} className={inputClass(!!errors.referralSource)}>
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
                  {...register("notes")}
                  className={inputClass(false)}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full rounded-full bg-accent px-8 py-4 font-bold text-dark transition hover:bg-accent-hover"
              >
                Submit Appointment Request
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
