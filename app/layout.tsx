import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.roleShort}`,
  description: `${profile.name} is a ${profile.role.toLowerCase()} learning programming, problem-solving, and the foundations of computer science.`,
  authors: [{ name: profile.name }],
  openGraph: {
    title: profile.name,
    description: profile.headline,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

// Runs before the page paints, so a saved light theme never flashes dark.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-button focus:px-4 focus:py-2 focus:text-button-fg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
