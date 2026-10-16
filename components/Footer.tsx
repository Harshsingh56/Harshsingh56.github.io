import { profile } from "@/data/profile";

export default function Footer() {
  // The site is static, so the year is set when the site is built.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 text-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-medium">{profile.name}</p>
          <p className="mt-1 text-muted">{profile.roleShort}</p>
        </div>
        <div className="text-muted sm:text-right">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p className="mt-1">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
