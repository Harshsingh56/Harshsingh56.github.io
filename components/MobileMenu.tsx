"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavLink } from "./Navbar";

type MobileMenuProps = {
  links: NavLink[];
};

export default function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  // Close the menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line hover:bg-hover"
      >
        {open ? (
          <X aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
        ) : (
          <Menu aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
        )}
      </button>

      {open && (
        <ul
          id="mobile-menu"
          className="absolute inset-x-0 top-16 border-b border-line bg-background px-6 py-2"
        >
          {links.map((link) => (
            <li key={link.href} className="border-b border-line last:border-b-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-lg hover:text-muted"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
