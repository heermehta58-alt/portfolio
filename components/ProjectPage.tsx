"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project, getProjectBySlug } from "@/data/projects";
import ProjectSectionRenderer from "./ProjectSection";
import { useState } from "react";

import HeroCollage from "./HeroCollage";

interface ProjectPageProps {
  project: Project;
}

function HeroImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="w-full"
        style={{
          aspectRatio: "16 / 9",
          backgroundColor: "var(--placeholder-bg)",
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <span
            className="text-[10px] tracking-[0.2em] uppercase select-none"
            style={{ color: "var(--text-muted)", opacity: 0.4 }}
          >
            {alt} — HERO
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full"
      onError={() => setError(true)}
    />
  );
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const nextProject = project.nextProject
    ? getProjectBySlug(project.nextProject)
    : null;
  const prevProject = project.prevProject
    ? getProjectBySlug(project.prevProject)
    : null;

  /* Collect section nav labels for the sub-nav bar */
  const navSections = project.sections
    .filter((s) => s.type !== "image" && s.type !== "two-image")
    .slice(0, 6);

  return (
    <article style={{ paddingTop: project.heroCollage ? "0" : "170px" }}>
      {/* ─── REFERENCE LAYOUT: COLLAGE HERO + CENTERED BRIEF ─── */}
      {project.heroCollage ? (
        <HeroCollage project={project} />
      ) : (
        /* Standard Header for projects without heroCollage */
        <>
          {/* Title block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="page-container"
          >
            {navSections.length > 0 && (
              <div
                className="flex flex-wrap gap-6 md:gap-8"
                style={{ marginBottom: "24px" }}
              >
                {navSections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-[9px] md:text-[10px] tracking-[0.15em] uppercase transition-opacity duration-300 hover:opacity-60"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            )}

            <h1
              className="font-playfair font-light"
              style={{
                fontSize: "clamp(3rem, 9vw, 7.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "var(--text)",
                marginBottom: "0",
              }}
            >
              {project.title}
            </h1>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="page-container"
            style={{ marginTop: "48px" }}
          >
            <HeroImage src={project.hero} alt={project.title} />
          </motion.div>

          {/* Divider */}
          <div className="page-container" style={{ margin: "80px auto" }}>
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </>
      )}

      {/* ─── About & Info rows (only for standard template projects) ─── */}
      {!project.heroCollage && (
        <>
          {/* About row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="page-container"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-2 md:col-start-2">
                <h2
                  className="font-normal"
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    letterSpacing: "-0.01em",
                    color: "var(--text)",
                  }}
                >
                  About
                </h2>
              </div>
              <div className="md:col-span-4 md:col-start-6">
                <p
                  className="font-light"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "var(--text)",
                  }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="page-container" style={{ margin: "80px auto" }}>
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>

          {/* Info rows (Role, Tools, Discipline) */}
          <div className="page-container">
            {project.role && (
              <>
                <div
                  className="grid grid-cols-1 md:grid-cols-12 gap-6"
                  style={{ marginBottom: "40px" }}
                >
                  <div className="md:col-span-2 md:col-start-2">
                    <h2
                      className="font-normal"
                      style={{
                        fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                        letterSpacing: "-0.01em",
                        color: "var(--text)",
                      }}
                    >
                      Role
                    </h2>
                  </div>
                  <div className="md:col-span-4 md:col-start-6">
                    <p
                      className="font-light"
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.8,
                        color: "var(--text)",
                      }}
                    >
                      {project.role}
                    </p>
                  </div>
                </div>
                {(project.tools || project.disciplines.length > 0) && (
                  <div
                    style={{
                      borderTop: "1px solid var(--border)",
                      marginBottom: "40px",
                    }}
                  />
                )}
              </>
            )}

            {project.tools && (
              <>
                <div
                  className="grid grid-cols-1 md:grid-cols-12 gap-6"
                  style={{ marginBottom: "40px" }}
                >
                  <div className="md:col-span-2 md:col-start-2">
                    <h2
                      className="font-normal"
                      style={{
                        fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                        letterSpacing: "-0.01em",
                        color: "var(--text)",
                      }}
                    >
                      Tools
                    </h2>
                  </div>
                  <div className="md:col-span-4 md:col-start-6">
                    <p
                      className="font-light"
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.8,
                        color: "var(--text)",
                      }}
                    >
                      {project.tools}
                    </p>
                  </div>
                </div>
                {project.disciplines.length > 0 && (
                  <div
                    style={{
                      borderTop: "1px solid var(--border)",
                      marginBottom: "40px",
                    }}
                  />
                )}
              </>
            )}

            {project.disciplines.length > 0 && (
              <div
                className="grid grid-cols-1 md:grid-cols-12 gap-6"
                style={{ marginBottom: "40px" }}
              >
                <div className="md:col-span-2 md:col-start-2">
                  <h2
                    className="font-normal"
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                      letterSpacing: "-0.01em",
                      color: "var(--text)",
                    }}
                  >
                    Discipline
                  </h2>
                </div>
                <div className="md:col-span-4 md:col-start-6">
                  <p
                    className="font-light"
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.8,
                      color: "var(--text)",
                    }}
                  >
                    {project.disciplines.join(", ")}
                  </p>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* ─── Story Sections ─── */}
      {project.sections.length > 0 && (
        <div style={{ marginTop: "80px" }}>
          {project.sections.map((section) => (
            <ProjectSectionRenderer key={section.id} section={section} />
          ))}
        </div>
      )}

      {/* ─── Next / Previous navigation ─── */}
      <div
        style={{
          maxWidth: "1440px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "40px",
          paddingRight: "40px",
          marginTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <div
          className="flex justify-between items-center"
          style={{ borderTop: "1px solid var(--border)", paddingTop: "48px" }}
        >
          {prevProject && (
            <Link href={`/work/${prevProject.id}`} className="group text-left w-40 md:w-64">
              <p
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "var(--text-muted)", marginBottom: "8px" }}
              >
                Previous
              </p>
              <p
                className="font-light transition-opacity duration-300 group-hover:opacity-60"
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                }}
              >
                {prevProject.title}
              </p>
            </Link>
          )}
          {nextProject && (
            <Link href={`/work/${nextProject.id}`} className="group text-right w-40 md:w-64">
              <p
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "var(--text-muted)", marginBottom: "8px" }}
              >
                Next
              </p>
              <p
                className="font-light transition-opacity duration-300 group-hover:opacity-60"
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                }}
              >
                {nextProject.title}
              </p>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

