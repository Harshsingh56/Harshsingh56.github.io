import { profile } from "@/data/profile";

export default function Hero() {
  const nameParts = profile.name.split(" ");

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {profile.role}
      </p>

      <h1 className="mt-8 text-[clamp(3.5rem,16vw,10.5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.04em]">
        {nameParts.map((part) => (
          <span key={part} className="block">
            {part}
          </span>
        ))}
      </h1>

      <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-6">
        <p className="text-3xl font-medium leading-tight tracking-tight md:col-span-7 md:text-4xl">
          {profile.headline}
        </p>
        <div className="md:col-span-5 md:pt-2">
          <p className="leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#about"
              className="inline-flex h-11 items-center rounded-full bg-button px-6 text-sm font-medium text-button-fg hover:opacity-80"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full border border-line px-6 text-sm font-medium hover:bg-hover"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
