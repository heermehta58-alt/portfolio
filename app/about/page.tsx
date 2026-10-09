import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About — Heer Mehta",
  description: "About Heer Mehta — Industrial Designer",
};

export default function AboutPage() {
  return (
    <div
      className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-16"
      style={{ paddingTop: "clamp(6rem, 12vw, 10rem)", paddingBottom: "50vh" }}
    >
      {/* ─── Band 1: Heading + Section 01 ─── */}
      <div
        className="grid-12"
        style={{ marginBottom: "clamp(12rem, 25vw, 20rem)" }}
      >
        {/* Large heading — left */}
        <h1
          className="col-span-1 md:col-span-7 text-[clamp(4rem,11vw,9rem)] leading-[0.9] tracking-[-0.04em] font-light"
          style={{ color: "var(--text)" }}
        >
          ABOUT ME
        </h1>

        {/* Section 01 — top right */}
        <div className="col-span-1 md:col-span-3 md:col-start-10 mt-12 md:mt-4 md:self-start">
          <div className="flex gap-4 mb-4">
            <span
              className="text-[10px] tracking-[0.2em] uppercase font-normal"
              style={{ color: "var(--text-muted)" }}
            >
              01
            </span>
            <h2
              className="text-[10px] tracking-[0.2em] uppercase font-bold"
              style={{ color: "var(--text)" }}
            >
              About Me
            </h2>
          </div>
          <p
            className="text-[9px] md:text-[10px] tracking-[0.05em] uppercase leading-[1.8] font-normal"
            style={{ color: "var(--text)" }}
          >
            Born in Solapur and currently based in Mumbai, I&apos;m an
            industrial designer interested in creating thoughtful products and
            experiences. I enjoy understanding how people interact with things
            and turning observations into ideas that are useful, intuitive and
            well considered.
          </p>
        </div>
      </div>

      {/* ─── Band 2: Section 02 — offset left ─── */}
      <div className="grid-12 mb-32 md:mb-44">
        <div className="col-span-1 md:col-span-4 md:col-start-2">
          <div className="flex gap-4 mb-4">
            <span
              className="text-[10px] tracking-[0.2em] uppercase font-normal"
              style={{ color: "var(--text-muted)" }}
            >
              02
            </span>
            <h2
              className="text-[10px] tracking-[0.2em] uppercase font-bold"
              style={{ color: "var(--text)" }}
            >
              Experience
            </h2>
          </div>
          <div className="mb-6">
            <p
              className="text-[9px] md:text-[10px] tracking-[0.05em] uppercase leading-[1.8] font-bold"
              style={{ color: "var(--text)" }}
            >
              IdeaKicks
            </p>
            <p
              className="text-[9px] md:text-[10px] tracking-[0.05em] uppercase leading-[1.8] font-normal"
              style={{ color: "var(--text-muted)" }}
            >
              Product Design Intern · 2026
            </p>
          </div>
          <div>
            <p
              className="text-[9px] md:text-[10px] tracking-[0.05em] uppercase leading-[1.8] font-bold"
              style={{ color: "var(--text)" }}
            >
              Thirumala Precasts Pvt. Ltd.
            </p>
            <p
              className="text-[9px] md:text-[10px] tracking-[0.05em] uppercase leading-[1.8] font-normal"
              style={{ color: "var(--text-muted)" }}
            >
              Apprentice · May–June 2025
            </p>
          </div>
        </div>
      </div>

      {/* ─── Band 3 & 4: Image and aligned columns ─── */}
      <div className="grid-12 items-stretch">
        {/* Section 04 — Left, bottom-aligned to the image */}
        <div className="col-span-1 md:col-span-3 md:col-start-2 flex flex-col justify-end order-3 md:order-1 mt-16 md:mt-0">
          <div>
            <div className="flex gap-4 mb-4">
              <span
                className="text-[10px] tracking-[0.2em] uppercase font-normal"
                style={{ color: "var(--text-muted)" }}
              >
                04
              </span>
              <h2
                className="text-[10px] tracking-[0.2em] uppercase font-bold"
                style={{ color: "var(--text)" }}
              >
                Let&apos;s Talk
              </h2>
            </div>
            <div className="flex flex-col gap-1">
              <p
                className="text-[9px] md:text-[10px] tracking-[0.05em] uppercase leading-[1.8] font-normal"
                style={{ color: "var(--text)" }}
              >
                +91 9175985945
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[9px] md:text-[10px] tracking-[0.05em] uppercase leading-[1.8] font-normal transition-opacity duration-300 hover:opacity-60"
                style={{ color: "var(--text)" }}
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Portrait photo — Center (Much smaller) */}
        <div className="col-span-1 md:col-span-2 md:col-start-6 order-1 md:order-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden grayscale">
            <Image
              src="/portrait.jpg"
              alt="Heer Mehta"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
              priority
            />
          </div>
        </div>

        {/* Section 03 & Connect — Right, top and bottom aligned to image */}
        <div className="col-span-1 md:col-span-3 md:col-start-9 flex flex-col justify-between order-2 md:order-3 mt-16 md:mt-0">
          {/* Top aligned to image */}
          <div className="mb-16 md:mb-0">
            <div className="flex gap-4 mb-4">
              <span
                className="text-[10px] tracking-[0.2em] uppercase font-normal"
                style={{ color: "var(--text-muted)" }}
              >
                03
              </span>
              <h2
                className="text-[10px] tracking-[0.2em] uppercase font-bold"
                style={{ color: "var(--text)" }}
              >
                Outside the Studio
              </h2>
            </div>
            <p
              className="text-[9px] md:text-[10px] tracking-[0.05em] uppercase leading-[1.8] font-normal"
              style={{ color: "var(--text)" }}
            >
              Outside the studio, I&apos;m usually travelling, meeting people,
              exploring new places or simply noticing things around me. I&apos;m
              naturally curious — and probably ask too many questions.
            </p>
          </div>

          {/* Bottom aligned to image */}
          <div>
            <div className="flex gap-4 mb-4">
              <span
                className="text-[10px] tracking-[0.2em] uppercase font-normal opacity-0 select-none"
                style={{ color: "var(--text-muted)" }}
              >
                05
              </span>
              <h2
                className="text-[10px] tracking-[0.2em] uppercase font-bold"
                style={{ color: "var(--text)" }}
              >
                Connect
              </h2>
            </div>
            <div className="flex flex-col gap-1">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] md:text-[10px] tracking-[0.05em] uppercase leading-[1.8] font-normal transition-opacity duration-300 hover:opacity-60"
                style={{ color: "var(--text)" }}
              >
                Instagram
              </a>
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] md:text-[10px] tracking-[0.05em] uppercase leading-[1.8] font-normal transition-opacity duration-300 hover:opacity-60"
                style={{ color: "var(--text)" }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
