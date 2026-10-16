import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
};

// Shared editorial layout: a small label on the left, content on the right.
export default function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className="border-t border-line">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-24 md:grid-cols-12 md:gap-6 md:py-32">
        <p
          id={`${id}-label`}
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted md:col-span-3 md:pt-3"
        >
          {label}
        </p>
        <div className="min-w-0 md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
