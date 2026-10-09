"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(2); // center project active on mobile
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const router = useRouter();

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Horizontal scroll on wheel (desktop)
  useEffect(() => {
    const container = containerRef.current;
    if (!container || isMobile) return;

    const onWheel = (e: WheelEvent) => {
      // Only hijack scroll when container is in viewport
      const rect = container.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [isMobile]);

  // Mobile: detect active card via scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isMobile) return;

    const onScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;
      const cards = container.querySelectorAll("[data-card-index]");
      let closest = 0;
      let closestDist = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const dist = Math.abs(cardCenter - centerX);
        const idx = parseInt(card.getAttribute("data-card-index") || "0");
        if (dist < closestDist) {
          closestDist = dist;
          closest = idx;
        }
      });

      setActiveIndex(closest);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  // Desktop drag-to-scroll
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: container.scrollLeft };
    container.style.cursor = "grabbing";
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const container = containerRef.current;
      if (!container) return;
      const dx = e.clientX - dragStart.current.x;
      container.scrollLeft = dragStart.current.scrollLeft - dx;
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    const container = containerRef.current;
    if (container) container.style.cursor = "";
  }, []);

  const handleCardClick = useCallback(
    (slug: string) => {
      if (isDragging) return;
      router.push(`/work/${slug}`);
    },
    [isDragging, router]
  );

  return (
    <section id="work" className="min-h-screen min-h-[100svh] flex flex-col justify-center py-16 md:py-24">
      {/* Section label */}
      <div
        style={{
          maxWidth: "1440px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "40px",
          paddingRight: "40px",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(13px, 1.2vw, 16px)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 500,
            color: "var(--text-muted)",
          }}
        >
          Selected Work
        </h2>
      </div>

      {/* Horizontal gallery */}
      <div
        ref={containerRef}
        className="w-full no-scrollbar flex items-center gap-6 overflow-x-auto"
        style={{
          scrollSnapType: isMobile ? "x mandatory" : "none",
          WebkitOverflowScrolling: "touch",
          paddingLeft: "max(40px, calc((100vw - 1440px) / 2 + 40px))",
          paddingRight: "max(40px, calc((100vw - 1440px) / 2 + 40px))",
        }}
        onMouseDown={!isMobile ? handleMouseDown : undefined}
        onMouseMove={!isMobile ? handleMouseMove : undefined}
        onMouseUp={!isMobile ? handleMouseUp : undefined}
        onMouseLeave={() => {
          if (!isMobile) {
            handleMouseUp();
            setHoveredIndex(null);
          }
        }}
      >
        {projects.map((project, i) => {
          const isHovered = !isMobile && hoveredIndex === i;
          const isActive = isMobile && activeIndex === i;
          const isExpanded = isHovered || isActive;
          const hasHover = hoveredIndex !== null;

          return (
            <motion.div
              key={project.id}
              data-card-index={i}
              className="flex-shrink-0"
              style={{
                scrollSnapAlign: isMobile ? "center" : "none",
              }}
              animate={{
                width: isMobile
                  ? isActive
                    ? "70vw"
                    : "55vw"
                  : isExpanded
                  ? "clamp(15rem, 19vw, 23rem)"
                  : hasHover
                  ? "clamp(13.5rem, 17.5vw, 21.5rem)"
                  : "clamp(14rem, 18vw, 22rem)",
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => !isMobile && setHoveredIndex(i)}
              onClick={() => handleCardClick(project.id)}
            >
              <ProjectCard
                project={project}
                index={i}
                isExpanded={isExpanded}
              />
            </motion.div>
          );
        })}

        {/* End spacer */}
        <div className="flex-shrink-0 w-6 md:w-10" />
      </div>
    </section>
  );
}
