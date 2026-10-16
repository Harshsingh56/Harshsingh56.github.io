import { profile } from "@/data/profile";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" label="About">
      <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
        {profile.about.heading}
      </h2>
      <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
        {profile.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
