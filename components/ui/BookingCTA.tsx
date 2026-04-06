import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white">
      <div className="pointer-events-none absolute -left-12 top-8 h-44 w-44 rounded-full bg-accent/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-8 right-20 h-56 w-56 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute right-1/3 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />

      <div className="container-shell relative z-10 text-center">
        <h2 className="text-white">Ready to Take the First Step Toward a Pain-Free Life?</h2>
        <p className="mx-auto mt-4 max-w-3xl text-white/85">
          Our expert London physiotherapists are here to help you recover, strengthen, and thrive.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/appointment"
            className="inline-flex items-center rounded-full bg-accent px-8 py-4 font-bold text-dark transition hover:bg-accent-hover"
          >
            Book Your Appointment
          </Link>
          <a
            href="tel:+442079460821"
            className="inline-flex items-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-primary"
          >
            Call +44 20 7946 0821
          </a>
        </div>
      </div>
    </section>
  );
}
