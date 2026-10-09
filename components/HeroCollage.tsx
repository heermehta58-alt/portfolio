"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface HeroCollageProps {
  project: Project;
}

export default function HeroCollage({ project }: HeroCollageProps) {
  const images =
    project.heroCollage && project.heroCollage.length >= 5
      ? project.heroCollage
      : [
          project.hero,
          project.thumbnail,
          project.hero,
          project.thumbnail,
          project.hero,
        ];

  const img0 = images[0];
  const img1 = images[1];
  const img2 = images[2];
  const img3 = images[3];
  const img4 = images[4];
  const img5 = images[5] || images[0];
  const img6 = images[6] || images[1];

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "var(--bg)",
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      {/* ─── 1. TOP EDGE-TO-EDGE COLLAGE GRID (0px top/left/right padding) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          paddingTop: "0px",
          paddingLeft: "0px",
          paddingRight: "0px",
          margin: "0px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          boxSizing: "border-box",
        }}
      >
        {/* Row 1: Top row (17vh height — flat top & outer edges, 16px inner bottom corners) */}
        <div className="grid grid-cols-2 gap-[6px] w-full" style={{ margin: 0, padding: 0 }}>
          <div
            className="overflow-hidden relative"
            style={{
              height: "17vh",
              borderRadius: "0px 0px 16px 0px",
              backgroundColor: "var(--placeholder-bg)",
            }}
          >
            <img
              src={img0}
              alt={`${project.title} collage 1`}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="overflow-hidden relative"
            style={{
              height: "17vh",
              borderRadius: "0px 0px 0px 16px",
              backgroundColor: "var(--placeholder-bg)",
            }}
          >
            <img
              src={img1}
              alt={`${project.title} collage 2`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 2: Middle CENTER ROW (28vh height — flat outer side edges, 16px inner corners) */}
        <div className="grid grid-cols-3 gap-[6px] w-full" style={{ margin: 0, padding: 0 }}>
          <div
            className="overflow-hidden relative"
            style={{
              height: "28vh",
              borderRadius: "0px 16px 16px 0px",
              backgroundColor: "var(--placeholder-bg)",
            }}
          >
            <img
              src={img2}
              alt={`${project.title} collage 3`}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="overflow-hidden relative"
            style={{
              height: "28vh",
              borderRadius: "16px",
              backgroundColor: "var(--placeholder-bg)",
            }}
          >
            <img
              src={img3}
              alt={`${project.title} collage 4`}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="overflow-hidden relative"
            style={{
              height: "28vh",
              borderRadius: "16px 0px 0px 16px",
              backgroundColor: "var(--placeholder-bg)",
            }}
          >
            <img
              src={img4}
              alt={`${project.title} collage 5`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Row 3: Bottom row (17vh height — flat bottom & outer edges, 16px inner top corners) */}
        <div className="grid grid-cols-2 gap-[6px] w-full relative" style={{ margin: 0, padding: 0 }}>
          <div
            className="overflow-hidden relative flex items-center justify-center"
            style={{
              height: "17vh",
              borderRadius: "0px 16px 0px 0px",
              backgroundColor: "#151515",
            }}
          >
            <img
              src={img5}
              alt={`${project.title} collage 6`}
              className="w-full h-full object-cover opacity-80"
            />
            {/* Overlaid Title Left */}
            <div className="absolute inset-0 flex items-center justify-center p-2 bg-black/20">
              <span
                className="font-playfair font-bold tracking-tight text-white drop-shadow-md select-none"
                style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)", lineHeight: 0.9 }}
              >
                {project.title}
              </span>
            </div>
          </div>

          <div
            className="overflow-hidden relative flex items-center justify-center"
            style={{
              height: "17vh",
              borderRadius: "16px 0px 0px 0px",
              backgroundColor: "#151515",
            }}
          >
            <img
              src={img6}
              alt={`${project.title} collage 7`}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </motion.div>

      {/* ─── 2. CENTERED MAIN BRIEF STATEMENT (fits in remaining ~38vh fold) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          maxWidth: "820px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "4vh",
          paddingBottom: "4vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          flexGrow: 1,
          boxSizing: "border-box",
        }}
      >
        {/* Main Brief Statement */}
        <h2
          style={{
            fontSize: "clamp(1.2rem, 2.5vw, 2.1rem)",
            lineHeight: 1.35,
            letterSpacing: "-0.015em",
            fontWeight: 400,
            color: "var(--text)",
            maxWidth: "34ch",
            marginBottom: "0px",
          }}
        >
          Brief — {project.description}
        </h2>
      </motion.div>
    </section>
  );
}
