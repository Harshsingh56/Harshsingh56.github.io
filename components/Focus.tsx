import { profile } from "@/data/profile";
import Section from "./Section";

export default function Focus() {
  return (
    <Section id="focus" label="Current focus">
      <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
        {profile.focus.heading}
      </h2>
      <p className="mt-10 max-w-2xl text-2xl leading-snug tracking-tight text-muted md:text-3xl">
        {profile.focus.text}
      </p>
    </Section>
  );
}
