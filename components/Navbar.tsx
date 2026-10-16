import { profile } from "@/data/profile";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background">
      <nav
        aria-label="Main"
        className="relative mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        <a href="#top" className="text-sm font-medium tracking-tight">
          {profile.name}
        </a>

        <div className="flex items-center gap-2">
          <ul className="mr-4 hidden items-center gap-8 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}
