import { profile } from "@/data/profile";
import Section from "./Section";

export default function Learning() {
  return (
    <Section id="learning" label="Learning">
      <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
        What I&apos;m learning.
      </h2>

      <ol className="mt-12 grid gap-x-12 md:grid-cols-2">
        {profile.learning.map((area, index) => (
          <li key={area.title} className="border-t border-line py-10">
            <span
              aria-hidden="true"
              className="font-mono text-5xl font-light tracking-tight text-muted"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 text-xl font-medium tracking-tight">{area.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{area.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
