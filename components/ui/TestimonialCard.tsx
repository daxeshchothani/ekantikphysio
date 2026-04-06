import { MapPin, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.article whileHover={{ y: -4, scale: 1.01 }} className="rounded-2xl bg-white p-6 shadow-lg">
      <Quote className="mb-3 h-7 w-7 text-accent" />
      <div className="mb-4 flex items-center gap-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" sizes="56px" />
        </div>
        <div>
          <h3 className="text-xl text-dark">{testimonial.name}</h3>
          <p className="text-sm text-primary">{testimonial.condition}</p>
        </div>
      </div>

      <div className="mb-3 flex items-center gap-1 text-accent">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={`${testimonial.id}-${index}`} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <p className="text-muted">"{testimonial.quote}"</p>

      <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
        <MapPin className="h-4 w-4 text-primary" />
        {testimonial.location}
      </div>
    </motion.article>
  );
}
