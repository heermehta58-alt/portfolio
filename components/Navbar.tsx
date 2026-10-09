"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const isWorkPage = pathname?.startsWith("/work/");

  return (
    <nav
      className={`${isWorkPage ? "absolute" : "fixed"} top-0 left-0 right-0 z-50 transition-colors duration-500`}
      style={{
        backgroundColor: isWorkPage ? "transparent" : "var(--bg)",
        color: isWorkPage ? "#ffffff" : "var(--text)",
        textShadow: isWorkPage ? "0 1px 4px rgba(0,0,0,0.6)" : "none",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{
          width: "100%",
          paddingTop: "20px",
          paddingBottom: "16px",
          paddingLeft: "24px",
          paddingRight: "24px",
          boxSizing: "border-box",
        }}
      >
        {/* Left: Studio Name */}
        <Link
          href="/"
          className="text-[11px] tracking-[0.2em] uppercase font-normal transition-opacity duration-300 hover:opacity-60"
          style={{ color: "inherit" }}
        >
          {siteConfig.name}
        </Link>

        {/* Right: Navigation Links */}
        <div className="flex items-center" style={{ gap: "32px" }}>
          <Link
            href="/"
            className="text-[11px] tracking-[0.2em] uppercase font-normal transition-opacity duration-300 hover:opacity-60"
            style={{ color: "inherit" }}
          >
            {siteConfig.nav.home}
          </Link>
          <Link
            href="/#work"
            className="text-[11px] tracking-[0.2em] uppercase font-normal transition-opacity duration-300 hover:opacity-60"
            style={{ color: "inherit" }}
          >
            {siteConfig.nav.work}
          </Link>
          <Link
            href="/about"
            className="text-[11px] tracking-[0.2em] uppercase font-normal transition-opacity duration-300 hover:opacity-60"
            style={{ color: "inherit" }}
          >
            {siteConfig.nav.about}
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
