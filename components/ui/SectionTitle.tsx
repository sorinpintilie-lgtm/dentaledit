import React from "react";

export default function SectionTitle({
  kicker,
  title,
  subtitle,
  align = "left",
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {kicker && (
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3 py-1 text-xs font-semibold text-ink-700 shadow-soft">
          <span className="h-2 w-2 rounded-full bg-brand-500" />
          {kicker}
        </div>
      )}
      <h2 className="mt-4 font-display text-3xl sm:text-4xl leading-[1.05] text-ink-900">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm sm:text-base text-ink-700 max-w-2xl ${align === "center" ? "text-center mx-auto" : "text-left"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}