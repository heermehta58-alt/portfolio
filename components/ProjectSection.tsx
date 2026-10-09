"use client";

import { ProjectSection } from "@/data/projects";
import { motion } from "framer-motion";
import { useState } from "react";
import MarketGrowthChart from "./MarketGrowthChart";

interface ProjectSectionRendererProps {
  section: ProjectSection;
}

function SectionImage({
  src,
  alt,
  className = "",
  style = {},
}: {
  src?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`w-full overflow-hidden ${className}`}
        style={{
          aspectRatio: "16 / 10",
          backgroundColor: "var(--placeholder-bg)",
          ...style,
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <span
            className="text-[9px] tracking-[0.2em] uppercase select-none"
            style={{ color: "var(--text-muted)", opacity: 0.4 }}
          >
            {alt || "IMAGE"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || ""}
      className={`w-full h-auto object-contain ${className}`}
      style={{
        borderRadius: "0px",
        display: "block",
        ...style,
      }}
      onError={() => setError(true)}
    />
  );
}

export default function ProjectSectionRenderer({
  section,
}: ProjectSectionRendererProps) {
  /* Common aligned container style matching reference photo */
  const sectionContainerStyle: React.CSSProperties = {
    maxWidth: "1100px",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "24px",
    paddingRight: "24px",
    boxSizing: "border-box",
  };

  return (
    <motion.div
      id={section.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Custom Bespoke Sections ── */}
      {section.id === "iris-insight" ? (
        <div style={{ ...sectionContainerStyle, marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", color: "var(--text)", fontWeight: 400 }}>
              {section.content}
            </p>
          </div>
          <div className={`grid grid-cols-2 ${section.galleryImages?.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"} gap-2 md:gap-3`}>
            {section.galleryImages?.map((img, i) => (
              <div key={i} className="flex flex-col">
                <div style={{ position: "relative", width: "100%", paddingBottom: "75%", marginBottom: "12px", border: "none" }}>
                  <img
                    src={img.url}
                    alt={img.alt}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                {img.caption && (
                  <span style={{ fontSize: "12px", color: "var(--text)" }}>
                    {img.caption}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : section.id === "iris-intervention" ? (
        <div style={{ ...sectionContainerStyle, marginBottom: "120px", marginTop: "40px" }}>
          <div
            style={{
              borderTop: "1px solid var(--border)",
              marginBottom: "48px",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline mb-16">
            <div className="md:col-span-4">
              <h2 className="font-normal" style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", letterSpacing: "-0.01em", color: "var(--text)" }}>{section.title}</h2>
            </div>
            <div className="md:col-span-8">
              <p style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--text)", marginBottom: "16px" }}>
                <strong>Framework: Cone of Possibilities</strong> to narrow from all possible futures to the preferred one our intervention is designed to reach.
              </p>
              <p style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--text)" }}>
                A chemical attack on mass transit is possible, plausible, and increasingly probable; our intervention steers toward the preferred future where it is detected in real time and contained before it harms commuters.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            {/* Core Funnel */}
            <div style={{ width: "100%", maxWidth: "800px", padding: "64px 48px", textAlign: "center", position: "relative", backgroundColor: "#F8F8F5" }}>
               
               <div style={{ marginBottom: "48px", padding: "32px", border: "1px solid #b91c1c" }}>
                 <h4 style={{ color: "#b91c1c", fontSize: "16px", fontWeight: 500, letterSpacing: "1px", marginBottom: "16px" }}>THE INTERVENTION</h4>
                 <p style={{ fontSize: "16px", margin: "0 auto" }}>A chemical warfare agent detection unit for enclosed mass transit spaces</p>
               </div>

               <div style={{ marginBottom: "48px", backgroundColor: "transparent", padding: "32px", border: "1px solid #b91c1c" }}>
                 <h4 style={{ color: "#b91c1c", fontSize: "16px", fontWeight: 500, letterSpacing: "1px", marginBottom: "24px" }}>THE STAKEHOLDERS</h4>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                   <div>
                     <div style={{ fontWeight: 400, marginBottom: "8px" }}>PRIMARY</div>
                     <div style={{ color: "var(--text-muted)", fontSize: "13px" }}>Metro Authorities<br/>Emergency Responders</div>
                   </div>
                   <div>
                     <div style={{ fontWeight: 400, marginBottom: "8px" }}>SECONDARY</div>
                     <div style={{ color: "var(--text-muted)", fontSize: "13px" }}>Government Agencies<br/>Health Services</div>
                   </div>
                   <div>
                     <div style={{ fontWeight: 400, marginBottom: "8px" }}>INDIRECT</div>
                     <div style={{ color: "var(--text-muted)", fontSize: "13px" }}>Commuters and Public</div>
                   </div>
                 </div>
               </div>

               <div style={{ padding: "32px", border: "1px solid #b91c1c" }}>
                 <h4 style={{ color: "#b91c1c", fontSize: "16px", fontWeight: 500, letterSpacing: "1px", marginBottom: "16px" }}>KEY PROPOSITION</h4>
                 <p style={{ fontSize: "16px", margin: "0 auto" }}>Real time monitoring and alerts when harmful chemicals detected</p>
               </div>
            </div>

            {/* The 3 WHYs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-[1000px]">
              <div style={{ border: "1px solid #b91c1c", backgroundColor: "#F8F8F5", display: "flex", flexDirection: "column" }}>
                <div style={{ backgroundColor: "#990000", color: "#fff", padding: "12px", textAlign: "center", fontSize: "14px", fontWeight: 400 }}>
                  WHY: EMTS
                </div>
                <div style={{ padding: "24px", fontSize: "12px", lineHeight: 1.6, flexGrow: 1 }}>
                  They are enclosed, high-traffic public spaces where airborne chemicals can spread quickly and affect large numbers of people before being noticed, making early detection critical.
                </div>
              </div>

              <div style={{ border: "1px solid #b91c1c", backgroundColor: "#F8F8F5", display: "flex", flexDirection: "column" }}>
                <div style={{ backgroundColor: "#990000", color: "#fff", padding: "12px", textAlign: "center", fontSize: "14px", fontWeight: 400 }}>
                  WHY: FTIR
                </div>
                <div style={{ padding: "24px", fontSize: "12px", lineHeight: 1.6, flexGrow: 1 }}>
                  It can detect and identify many different chemicals at once, including unknown ones, across gases, liquids, and aerosols without needing direct contact.
                </div>
              </div>

              <div style={{ border: "1px solid #b91c1c", backgroundColor: "#F8F8F5", display: "flex", flexDirection: "column" }}>
                <div style={{ backgroundColor: "#990000", color: "#fff", padding: "12px", textAlign: "center", fontSize: "14px", fontWeight: 400 }}>
                  WHY: Public Indirect Stakeholder
                </div>
                <div style={{ padding: "24px", fontSize: "12px", lineHeight: 1.6, flexGrow: 1 }}>
                  Immediate public alerts can lead to panic and uncoordinated movement, so notifications are routed to trained authorities who assess the situation and execute a structured response.
                </div>
              </div>
            </div>

          </div>
        </div>
      ) : section.id === "iris-case-study" ? (
        <div style={{ ...sectionContainerStyle, marginBottom: "80px" }}>
          {section.title && (
            <>
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  marginBottom: "48px",
                }}
              />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline" style={{ marginBottom: "64px" }}>
                <div className="md:col-span-4">
                  <h2
                    className="font-normal"
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                      letterSpacing: "-0.01em",
                      color: "var(--text)",
                      textTransform: "uppercase",
                      paddingTop: "1px"
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
                {section.content && (
                  <div className="md:col-span-8">
                    <p style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--text)" }}>
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}

          <div className="flex flex-col md:flex-row gap-2">
            {/* Left Column */}
            <div className="flex flex-col gap-2 w-full md:w-1/2">
               <img src={section.galleryImages?.[0]?.url} alt={section.galleryImages?.[0]?.alt} className="w-full object-cover" style={{ aspectRatio: "8 / 3" }} />
               <img src={section.galleryImages?.[2]?.url} alt={section.galleryImages?.[2]?.alt} className="w-full object-cover" style={{ aspectRatio: "8 / 5" }} />
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-2 w-full md:w-1/2">
               <img src={section.galleryImages?.[1]?.url} alt={section.galleryImages?.[1]?.alt} className="w-full object-cover" style={{ aspectRatio: "2 / 1" }} />
               <img src={section.galleryImages?.[3]?.url} alt={section.galleryImages?.[3]?.alt} className="w-full object-cover" style={{ aspectRatio: "2 / 1" }} />
            </div>
          </div>
          
          {section.caption && (
            <p
              className="text-xs md:text-sm font-light tracking-normal"
              style={{ color: "var(--text)", opacity: 1, marginTop: "12px" }}
            >
              {section.caption}
            </p>
          )}
        </div>
      ) : section.id === "iris-key-aspects" ? (
        <div style={{ ...sectionContainerStyle, marginBottom: "80px" }}>
          <div
            style={{
              borderTop: "1px solid var(--border)",
              marginBottom: "48px",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline mb-12">
            <div className="md:col-span-12">
              <h2
                className="font-normal uppercase"
                style={{
                  fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                }}
              >
                KEY ASPECTS STUDIED
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-12 mt-8">
            {[
              { letter: "A", title: "Platform layout & ceiling height", text: "Placing two units diagonally at opposite ends of the platform improves coverage. This reduces blind spots caused by platform width, columns, and ceiling height differences." },
              { letter: "B", title: "Airflow direction (HVAC systems)", text: "The FTIR units are placed within the natural airflow path but away from high-speed vents. This enables early air sampling while preventing dilution and unstable readings from strong air currents." },
              { letter: "C", title: "Passenger movement", text: "Crowd density is highest near ticketing and security areas, so sensor placement prioritizes these zones. This targets locations with the greatest risk of mass exposure." },
              { letter: "D", title: "Access points for maintenance & monitoring", text: "The device is installed in the ceiling air space where ventilation air flows. This allows continuous monitoring while remaining easy to access for maintenance and system checks." },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start" style={{ borderTop: idx === 0 ? "none" : "1px solid rgba(185, 28, 28, 0.2)", paddingTop: idx === 0 ? 0 : "32px" }}>
                 <div className="flex-shrink-0 text-4xl md:text-5xl font-light" style={{ color: "#b91c1c", width: "48px" }}>
                   {item.letter}
                 </div>
                 <div className="flex flex-col gap-3">
                   <h3 style={{ color: "#b91c1c", fontSize: "16px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                     {item.title}
                   </h3>
                   <p style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--text)", maxWidth: "600px" }}>
                     {item.text}
                   </p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      ) : section.id === "iris-takeaways" ? (
        <div style={{ ...sectionContainerStyle, marginBottom: "80px" }}>
          <div
            style={{
              borderTop: "1px solid var(--border)",
              marginBottom: "48px",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline mb-8">
            <div className="md:col-span-4">
              <h2
                className="font-normal"
                style={{
                  fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                }}
              >
                {section.title}
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div style={{ border: "1px solid #b91c1c", padding: "0 0 24px 0", position: "relative", minHeight: "140px", display: "flex", flexDirection: "column" }}>
                  <div style={{ borderBottom: "1px solid #b91c1c", borderRight: "1px solid #b91c1c", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: "var(--text)" }}>
                    1
                  </div>
                  <p style={{ marginTop: "24px", padding: "0 24px", fontSize: "14px", lineHeight: 1.5, color: "var(--text)", textAlign: "center" }}>
                    Legal bans alone do not prevent misuse of chemicals
                  </p>
                </div>
                
                <div style={{ border: "1px solid #b91c1c", padding: "0 0 24px 0", position: "relative", minHeight: "140px", display: "flex", flexDirection: "column" }}>
                  <div style={{ borderBottom: "1px solid #b91c1c", borderRight: "1px solid #b91c1c", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: "var(--text)" }}>
                    2
                  </div>
                  <p style={{ marginTop: "24px", padding: "0 24px", fontSize: "14px", lineHeight: 1.5, color: "var(--text)", textAlign: "center" }}>
                    Civilian spaces are not equipped to detect them
                  </p>
                </div>

                <div style={{ border: "1px solid #b91c1c", padding: "0 0 24px 0", position: "relative", minHeight: "140px", display: "flex", flexDirection: "column" }}>
                  <div style={{ borderBottom: "1px solid #b91c1c", borderRight: "1px solid #b91c1c", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: "var(--text)" }}>
                    3
                  </div>
                  <p style={{ marginTop: "24px", padding: "0 24px", fontSize: "14px", lineHeight: 1.5, color: "var(--text)", textAlign: "center" }}>
                    Chemical agents remain accessible to public
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      ) : section.id === "iris-stats" ? (
        <div style={{ ...sectionContainerStyle, position: "relative", marginBottom: "80px", marginTop: "0", paddingTop: "16px" }}>
          <div className="flex flex-col md:flex-row items-center justify-between w-full" style={{ gap: "24px", position: "relative" }}>
            <div className="flex-shrink-0" style={{ fontSize: "16px", color: "var(--text)" }}>
              In between 2012 - 2019
            </div>
            
            <div className="hidden md:block flex-grow" style={{ height: "1px", backgroundColor: "var(--text)", opacity: 0.3 }}></div>
            
            <div className="flex-shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="uppercase text-[12px] tracking-[0.05em]" style={{ color: "var(--text)", marginBottom: "4px" }}>
                CHEMICAL ATTACKS
              </span>
              <span style={{ fontSize: "28px", color: "#b91c1c", fontWeight: 400, lineHeight: 1 }}>
                336
              </span>
            </div>
            
            <div className="hidden md:block flex-grow" style={{ height: "1px", backgroundColor: "var(--text)", opacity: 0.3 }}></div>
            
            <div className="flex-shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="uppercase text-[12px] tracking-[0.05em]" style={{ color: "var(--text)", marginBottom: "4px" }}>
                DOCUMENTED DEATHS
              </span>
              <span style={{ fontSize: "28px", color: "#b91c1c", fontWeight: 400, lineHeight: 1 }}>
                1,500–1,935
              </span>
            </div>
          </div>
        </div>
      ) : section.id === "lumi-market-growth" ? (
        <div
          style={{
            ...sectionContainerStyle,
            marginBottom: "80px",
          }}
        >
          {section.title && (
            <>
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  marginBottom: "48px",
                }}
              />
              <div 
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
                style={{ marginBottom: "80px" }}
              >
                <div className="md:col-span-4">
                  <h2
                    className="font-normal"
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                      letterSpacing: "-0.01em",
                      color: "var(--text)",
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
              </div>
            </>
          )}
          <div className="w-full flex justify-center items-center">
            <MarketGrowthChart />
          </div>
        </div>
      ) : section.id === "lumi-moodboard" ? (
        <div style={{ ...sectionContainerStyle, marginBottom: "80px" }}>
          {section.title && (
            <>
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  marginBottom: "48px",
                }}
              />
              <div 
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
                style={{ marginBottom: "80px" }}
              >
                <div className="md:col-span-4">
                  <h2
                    className="font-normal"
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                      letterSpacing: "-0.01em",
                      color: "var(--text)",
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
              </div>
            </>
          )}
          <SectionImage src={section.image} alt={section.imageAlt} />
          <div
            className="flex items-center justify-between w-full mt-12"
            style={{ color: "#000000" }}
          >
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(15px, 1.5vw, 20px)",
                color: "#000000",
                letterSpacing: "0.02em",
                fontWeight: "400",
              }}
            >
              elegant
            </span>
            <div
              className="flex-1"
              style={{ height: "1px", backgroundColor: "#000000", margin: "0 24px" }}
            />
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(15px, 1.5vw, 20px)",
                color: "#000000",
                letterSpacing: "0.02em",
                fontWeight: "400",
              }}
            >
              sleek
            </span>
            <div
              className="flex-1"
              style={{ height: "1px", backgroundColor: "#000000", margin: "0 24px" }}
            />
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(15px, 1.5vw, 20px)",
                color: "#000000",
                letterSpacing: "0.02em",
                fontWeight: "400",
              }}
            >
              modern
            </span>
          </div>
        </div>
      ) : section.type === "image" ? (
        <div style={{ ...sectionContainerStyle, marginBottom: section.id === "iris-problem-context-image" ? "0" : "80px" }}>
          {section.title && section.id !== "lumi-moodboard" && (
            <>
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  marginBottom: "48px",
                }}
              />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
              <div className="md:col-span-4">
                <h2
                  className="font-normal"
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    letterSpacing: "-0.01em",
                    color: "var(--text)",
                  }}
                >
                  {section.title}
                </h2>
              </div>
            </div>
          </>
          )}
          <SectionImage src={section.image} alt={section.imageAlt} />
          {section.caption && (
            <p
              className="mt-3 text-xs md:text-sm font-light tracking-normal"
              style={{ color: "var(--text-muted)", opacity: 0.8 }}
            >
              {section.caption}
            </p>
          )}
        </div>
      ) : null}

      {/* ── Two images side by side / stacked ── */}
      {section.type === "two-image" && (
        <div style={{ ...sectionContainerStyle, marginBottom: "80px" }}>
          {section.title && (
            <>
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  marginBottom: "48px",
                }}
              />
              <div 
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline" 
                style={{ marginBottom: "88px" }}
              >
                <div className="md:col-span-4">
                  <h2
                    className="font-normal"
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                      letterSpacing: "-0.01em",
                      color: "var(--text)",
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
                {section.content && (
                  <div className="md:col-span-8">
                    <p
                      className="font-light"
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.8,
                        color: "var(--text)",
                      }}
                    >
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
          <div
            className={
              section.imageLayout === "stacked"
                ? "flex flex-col gap-12"
                : "grid grid-cols-1 md:grid-cols-2 gap-6"
            }
          >
            <div>
              <SectionImage src={section.image} alt={section.imageAlt} />
              {section.caption && (
                <p
                  className="mt-3 text-xs md:text-sm font-light tracking-normal"
                  style={{ color: "var(--text-muted)", opacity: 0.8 }}
                >
                  {section.caption}
                </p>
              )}
            </div>
            <div>
              <SectionImage
                src={section.secondImage}
                alt={section.secondImageAlt}
              />
              {section.secondCaption && (
                <p
                  className="mt-3 text-xs md:text-sm font-light tracking-normal"
                  style={{ color: "var(--text-muted)", opacity: 0.8 }}
                >
                  {section.secondCaption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Gallery Section ── */}
      {section.type === "gallery" && section.id !== "iris-insight" && section.id !== "iris-case-study" && (
        <div style={{ ...sectionContainerStyle, marginBottom: "80px" }}>
          {section.title && (
            <>
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  marginBottom: "48px",
                }}
              />
              <div 
                className="grid grid-cols-1 md:grid-cols-12 gap-6" 
                style={{ marginBottom: "48px" }}
              >
                <div className="md:col-span-4">
                  <h2
                    className="font-normal"
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                      letterSpacing: "-0.01em",
                      color: "var(--text)",
                    }}
                  >
                    {section.title}
                  </h2>
                </div>
                {section.content && (
                  <div className="md:col-span-8">
                    <p
                      className="font-light"
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.8,
                        color: "var(--text)",
                      }}
                    >
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            </>
          )}

          <div
            className={
              section.imageLayout === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                : "flex flex-col gap-12"
            }
          >
            {section.galleryImages?.map((img, i) => (
              <div key={i} className="w-full">
                <SectionImage src={img.url} alt={img.alt} />
                {img.caption && (
                  <p
                    className="mt-3 text-xs md:text-sm font-light tracking-normal"
                    style={{ color: "var(--text-muted)", opacity: 0.8 }}
                  >
                    {img.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Text section — matching reference layout (Image -> Divider -> Left Title & Right Text) ── */}
      {section.type === "text" && section.content && (
        <div style={{ ...sectionContainerStyle, marginTop: "40px" }}>
          {/* Top image if provided (unless ideations section where image is placed under text) */}
          {section.image && section.id !== "lumi-ideations" && (
            <div
              style={{
                width: "100%",
                marginBottom: "48px",
                overflow: "hidden",
                borderRadius: "0px",
              }}
            >
              <img
                src={section.image}
                alt={section.imageAlt || ""}
                style={{
                  width: "100%",
                  height: "clamp(260px, 34vh, 400px)",
                  objectFit: "cover",
                  objectPosition: "center 35%",
                  borderRadius: "0px",
                  display: "block",
                }}
              />
            </div>
          )}



          {/* Top Divider before section title (for ideations or text sections) */}
          {(section.id === "lumi-ideations" || !section.image) && (
            <div
              style={{
                borderTop: "1px solid var(--border)",
                marginBottom: "48px",
              }}
            />
          )}

          {/* Left Title & Right Text row */}
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
            style={{ marginBottom: section.image ? "48px" : "80px" }}
          >
            <div className="md:col-span-4">
              <h2
                className="font-normal"
                style={{
                  fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                }}
              >
                {section.title}
              </h2>
            </div>
            <div className="md:col-span-8">
              <p
                className="font-light"
                style={{
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "var(--text)",
                  marginBottom: section.specs ? "32px" : "0",
                }}
              >
                {section.content}
              </p>

              {section.specs && (
                <dl>
                  {section.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex flex-col md:flex-row items-start justify-between gap-8"
                      style={{
                        paddingTop: "24px",
                        paddingBottom: "24px",
                        borderBottom: i === section.specs.length - 1 ? "none" : "1px solid var(--border)",
                      }}
                    >
                      <dt
                        className="font-normal"
                        style={{
                          fontSize: "14px",
                          color: "var(--text)",
                          width: "220px",
                          minWidth: "180px",
                          flexShrink: 0,
                        }}
                      >
                        {spec.label}
                      </dt>
                      <dd
                        className="font-light"
                        style={{
                          fontSize: "13.5px",
                          lineHeight: 1.7,
                          color: "var(--text-muted)",
                          textAlign: "left",
                          flex: 1,
                        }}
                      >
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>

          {/* Bottom image if ideations section — rendered under heading & text */}
          {section.id === "lumi-ideations" && section.image && (
            <div
              style={{
                width: "100%",
                marginTop: "0px",
                marginBottom: "80px",
                overflow: "hidden",
                borderRadius: "0px",
              }}
            >
              <img
                src={section.image}
                alt={section.imageAlt || ""}
                className="mix-blend-darken dark:mix-blend-lighten dark:invert"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "0px",
                  display: "block",
                }}
              />
            </div>
          )}
        </div>
      )}

      {/* ── Image + Text side by side ── */}
      {section.type === "image-text" && (
        <div style={sectionContainerStyle}>
          <div
            style={{
              borderTop: "1px solid var(--border)",
              marginBottom: "48px",
            }}
          />
          {/* Section title */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
            <div className="md:col-span-4">
              <h2
                className="font-normal"
                style={{
                  fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                }}
              >
                {section.title}
              </h2>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            style={{ marginBottom: "80px" }}
          >
            {section.imagePosition === "right" ? (
              <>
                <div className="md:col-span-5">
                  <p
                    className="font-light"
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.8,
                      color: "var(--text)",
                    }}
                  >
                    {section.content}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <SectionImage src={section.image} alt={section.imageAlt} />
                </div>
              </>
            ) : (
              <>
                <div className="md:col-span-7">
                  <SectionImage src={section.image} alt={section.imageAlt} />
                </div>
                <div className="md:col-span-5">
                  <p
                    className="font-light"
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.8,
                      color: "var(--text)",
                    }}
                  >
                    {section.content}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Quote Section ── */}
      {section.type === "quote" && (
        <div style={sectionContainerStyle}>
          <div
            style={{
              borderTop: "1px solid var(--border)",
              marginBottom: "48px",
            }}
          />
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
            style={{ marginBottom: "80px" }}
          >
            <div className="md:col-span-4">
              <h2
                className="font-normal"
                style={{
                  fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                }}
              >
                {section.title}
              </h2>
            </div>
            <div className="md:col-span-8">
              <blockquote
                className="font-light italic"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                }}
              >
                &ldquo;{section.content}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      )}

      {/* ── Specifications Section ── */}
      {section.type === "specifications" && section.specs && (
        <div style={sectionContainerStyle}>
          <div
            style={{
              borderTop: "1px solid var(--border)",
              marginBottom: "48px",
            }}
          />
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
            style={{ marginBottom: "80px" }}
          >
            <div className="md:col-span-4">
              <h2
                className="font-normal"
                style={{
                  fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                  letterSpacing: "-0.01em",
                  color: "var(--text)",
                }}
              >
                {section.title}
              </h2>
            </div>
            <div className="md:col-span-8">
              <dl>
                {section.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row items-start justify-between gap-8"
                    style={{
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      borderBottom: i === section.specs.length - 1 ? "none" : "1px solid var(--border)",
                    }}
                  >
                    <dt
                      className="font-normal"
                      style={{
                        fontSize: "14px",
                        color: "var(--text)",
                        width: "220px",
                        minWidth: "180px",
                        flexShrink: 0,
                      }}
                    >
                      {spec.label}
                    </dt>
                    <dd
                      className="font-light"
                      style={{
                        fontSize: "13.5px",
                        lineHeight: 1.7,
                        color: "var(--text-muted)",
                        textAlign: "left",
                        flex: 1,
                      }}
                    >
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
