"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface NewsletterFormValues {
  email: string;
}

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormValues>();

  const onSubmit = (values: NewsletterFormValues) => {
    if (values.email) {
      setSubscribed(true);
      reset();
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

          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-6 max-w-2xl">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email",
                  },
                })}
                className={`w-full rounded-full border px-5 py-3 outline-none transition ${
                  errors.email ? "border-red-500" : "border-primary/20 focus:border-primary"
                }`}
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="rounded-full bg-accent px-8 py-3 font-bold text-dark transition hover:bg-accent-hover"
              >
                Subscribe
              </motion.button>
            </div>
            {errors.email ? <p className="mt-2 text-left text-sm text-red-600">{errors.email.message}</p> : null}
          </form>

          {subscribed ? <p className="mt-4 font-semibold text-primary">Thanks for subscribing to Ekantik updates.</p> : null}
          <p className="mt-3 text-xs text-muted">No spam. Unsubscribe any time.</p>
        </div>
      </div>
    </motion.section>
  );
}
