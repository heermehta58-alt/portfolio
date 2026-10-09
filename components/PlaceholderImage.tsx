"use client";

interface PlaceholderImageProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

export default function PlaceholderImage({
  label,
  className = "",
  aspectRatio = "16 / 10",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        aspectRatio,
        backgroundColor: "var(--placeholder-bg)",
      }}
    >
      <span
        className="absolute inset-0 flex items-center justify-center text-[10px] tracking-[0.2em] uppercase select-none"
        style={{ color: "var(--text-muted)", opacity: 0.5 }}
      >
        {label}
      </span>
    </div>
  );
}
