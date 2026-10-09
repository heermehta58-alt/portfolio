"use client";

import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        maxWidth: "1440px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingBottom: "80px",
      }}
    >
      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "60px",
          marginBottom: "60px",
        }}
      >
        {/* CTA — smaller text size as requested */}
        <p
          className="font-light tracking-[0.02em]"
          style={{
            color: "var(--text)",
            fontSize: "clamp(1.125rem, 2vw, 1.75rem)",
            lineHeight: 1.3,
          }}
        >
          {siteConfig.footer.cta}
        </p>
      </div>

      {/* Bottom row */}
      <div className="grid-12 items-end pb-4 gap-y-8">
        {/* Email */}
        <div className="col-span-1 md:col-span-4 flex flex-col">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2 md:mb-4">
            Contact
          </span>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-[12px] tracking-[0.05em] font-light transition-opacity duration-300 hover:opacity-60"
            style={{ color: "var(--text)" }}
          >
            {siteConfig.contact.email}
          </a>
        </div>

        {/* Socials */}
        <div className="col-span-1 md:col-span-4 flex flex-col items-center">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2 md:mb-4 hidden md:block">
            &nbsp;
          </span>
          <div className="flex gap-12">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-60"
              style={{ color: "var(--text)" }}
            >
              Instagram
            </a>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-60"
              style={{ color: "var(--text)" }}
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.contact.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-60"
              style={{ color: "var(--text)" }}
            >
              Behance
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="col-span-1 md:col-span-4 flex flex-row items-end justify-between md:justify-end gap-8 mt-4 md:mt-0">
          <span
            className="text-[10px] tracking-[0.15em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            {siteConfig.footer.copyright}
          </span>
          <button
            onClick={scrollToTop}
            className="text-[10px] tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-60"
            style={{ color: "var(--text-muted)" }}
          >
            {siteConfig.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
