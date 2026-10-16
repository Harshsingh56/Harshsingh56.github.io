import { ArrowUpRight } from "lucide-react";
import { profile, type ContactLink } from "@/data/profile";
import Section from "./Section";

type ResolvedLink = ContactLink & { href: string; external: boolean };

function getContactLinks(): ResolvedLink[] {
  const { email, github, linkedin } = profile.contact;
  const links: ResolvedLink[] = [
    { label: "Email", value: email, href: `mailto:${email}`, external: false },
    { label: "GitHub", value: github, href: github, external: true },
    { label: "LinkedIn", value: linkedin, href: linkedin, external: true },
  ];
  // Hide any link that hasn't been filled in yet.
  return links.filter((link) => link.value.trim() !== "");
}

// Shows "github.com/username" instead of the full https:// URL.
function displayValue(link: ResolvedLink): string {
  return link.external ? link.value.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : link.value;
}

export default function Contact() {
  const links = getContactLinks();

  return (
    <Section id="contact" label="Contact">
      <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
        {profile.contact.heading}
      </h2>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
        {profile.contact.text}
      </p>

      {links.length > 0 ? (
        <ul className="mt-14 border-b border-line">
          {links.map((link) => (
            <li key={link.label} className="border-t border-line">
              <a
                href={link.href}
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex flex-col gap-2 py-6 hover:bg-hover sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:px-4"
              >
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {link.label}
                </span>
                <span className="flex min-w-0 items-center justify-between gap-3 sm:text-right md:text-lg">
                  <span className="break-all">{displayValue(link)}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-muted group-hover:text-foreground"
                    strokeWidth={1.5}
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-14 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Contact details coming soon.
        </p>
      )}
    </Section>
  );
}
