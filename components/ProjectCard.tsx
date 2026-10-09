"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
  isExpanded: boolean;
}

export default function ProjectCard({
  project,
  index,
  isExpanded,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(true); // default to placeholder
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="cursor-pointer select-none">
      {/* Image area — no card styling, just image in composition */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
        {imageError ? (
          // CSS placeholder
          <div
            className="absolute inset-0 flex items-center justify-center transition-colors duration-500"
            style={{ backgroundColor: "var(--placeholder-bg)" }}
          >
            <span
              className="text-[9px] tracking-[0.2em] uppercase select-none"
              style={{ color: "var(--text-muted)", opacity: 0.4 }}
            >
              {project.title}
            </span>
          </div>
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        )}

        {/* Subtle VIEW label on hover */}
        <motion.div
          className="absolute bottom-3 left-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span
            className="text-[9px] tracking-[0.2em] uppercase"
            style={{ color: "var(--text-muted)" }}
          >
            VIEW
          </span>
        </motion.div>
      </div>

      {/* Project info below image */}
      <motion.div
        className="mt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 1 : 0.4 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="text-[10px] tracking-[0.15em] uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          ({number})
        </p>
        <p
          className="text-[12px] md:text-[13px] tracking-[0.05em] mt-0.5 font-normal"
          style={{ color: "var(--text)" }}
        >
          {project.title}
        </p>
        {project.category && (
          <p
            className="text-[10px] tracking-[0.1em] uppercase mt-0.5"
            style={{ color: "var(--text-muted)" }}
          >
            {project.category}
          </p>
        )}
      </motion.div>
    </div>
  );
}
