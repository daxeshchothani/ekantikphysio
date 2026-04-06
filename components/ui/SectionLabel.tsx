import { cn } from "@/lib/utils";

interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className }: SectionLabelProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 text-primary", className)}>
      <span className="inline-flex h-5 w-5 items-center justify-center text-current">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3v18" />
          <path d="M3 12h18" />
          <path d="M7 7l10 10" />
          <path d="M17 7L7 17" />
          <path d="M8 5c3 2 4 4 4 7" />
        </svg>
      </span>
      <span className="text-sm font-semibold uppercase tracking-widest text-current">{label}</span>
    </div>
  );
}
