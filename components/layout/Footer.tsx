import {
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://x.com", icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-dark text-white">
      <div className="h-1 w-full bg-primary-light" />
      <div className="container-shell py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-display">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary-light">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 16c5-1 8-5 9-10 3 4 3 11-2 15-2 2-5 2-7 1" />
                </svg>
              </span>
              Ekantik <span className="text-primary-light">Physio</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/75">
              Evidence-based physiotherapy in the heart of London.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:text-accent"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl">Working Hours</h3>
            <div className="mt-4 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 text-sm">
              <div className="flex items-center justify-between px-4 py-3">
                <span>Monday-Friday</span>
                <span className="text-white/80">8:00 AM - 7:00 PM</span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span>Saturday</span>
                <span className="text-white/80">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span>Sunday</span>
                <span className="text-white/80">Closed</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-accent" />
                <a href="tel:+442079460821" className="hover:text-accent">
                  +44 20 7946 0821
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-accent" />
                <span>14 Harley Street, Marylebone, London W1G 9PJ</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 text-accent" />
                <a href="mailto:info@ekantikphysio.co.uk" className="hover:text-accent">
                  info@ekantikphysio.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 className="mt-1 h-4 w-4 text-accent" />
                <span>Open Today</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
          <p>© 2026 Ekantik Physio. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-accent">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
