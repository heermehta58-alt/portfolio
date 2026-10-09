"use client";

import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

interface AboutOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function AboutOverlay({ open, onClose }: AboutOverlayProps) {
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
                className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] tracking-[-0.02em] font-light mb-12"
                style={{ color: "var(--text)" }}
              >
                {siteConfig.about.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                <div className="md:col-span-3">
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Bio
                  </p>
                </div>
                <div className="md:col-span-7">
                  <p
                    className="text-[15px] md:text-[16px] leading-[1.7] font-light"
                    style={{ color: "var(--text)" }}
                  >
                    {siteConfig.about.bio}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                className="my-10"
                style={{ borderTop: "1px solid var(--border)" }}
              />

              {/* Contact */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                <div className="md:col-span-3">
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Contact
                  </p>
                </div>
                <div className="md:col-span-7 space-y-2">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="block text-[14px] font-light transition-opacity duration-300 hover:opacity-60"
                    style={{ color: "var(--text)" }}
                  >
                    {siteConfig.contact.email}
                  </a>
                  {siteConfig.about.location && (
                    <p
                      className="text-[14px] font-light"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {siteConfig.about.location}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
