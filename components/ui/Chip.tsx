import React from "react";

export default function Chip({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={
        "inline-flex items-center gap-2 rounded-full border border-line bg-mint-100/70 px-3 py-1.5 text-sm text-ink-900 shadow-soft " +
        className
      }
      {...props}
    />
  );
}