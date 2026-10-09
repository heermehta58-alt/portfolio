"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

interface IndexOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function IndexOverlay({ open, onClose }: IndexOverlayProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col overflow-y-auto"
          style={{ backgroundColor: "var(--bg)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Close button */}
          <div className="page-container flex justify-end py-5">
            <button
              onClick={onClose}
              className="text-[11px] tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-60"
              style={{ color: "var(--text)" }}
            >
              CLOSE
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center page-container pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h2
                className="text-[10px] tracking-[0.2em] uppercase mb-12"
                style={{ color: "var(--text-muted)" }}
              >
                Index
              </h2>

              <div className="space-y-0">
                {projects.map((project, i) => {
                  const number = String(i + 1).padStart(2, "0");
                  return (
                    <Link
                      key={project.id}
                      href={`/work/${project.id}`}
                      onClick={onClose}
                      className="group block py-5"
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-baseline gap-4 md:gap-8">
                          <span
                            className="text-[10px] tracking-[0.2em] uppercase"
                            style={{ color: "var(--text-muted)" }}
                          >
                            ({number})
                          </span>
                          <span
                            className="text-[20px] md:text-[28px] font-light tracking-[-0.01em] transition-opacity duration-300 group-hover:opacity-60"
                            style={{ color: "var(--text)" }}
                          >
                            {project.title}
                          </span>
                        </div>
                        <span
                          className="text-[10px] tracking-[0.15em] uppercase hidden md:block"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {project.category}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
