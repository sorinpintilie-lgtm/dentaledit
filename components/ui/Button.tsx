import React from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

function buttonClass(variant: Variant, size: Size) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition " +
    "focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none " +
    "active:translate-y-[1px]";

  const sizes: Record<Size, string> = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-5 text-sm",
    lg: "h-14 px-6 text-base",
  };

  const variants: Record<Variant, string> = {
    primary:
      "bg-brand-500 text-ink-900 shadow-soft hover:bg-brand-600 active:bg-brand-700 " +
      "relative overflow-hidden",
    secondary:
      "bg-white text-brand-500 border border-brand-200 shadow-soft hover:bg-brand-50",
    ghost:
      "bg-transparent text-ink-900 hover:bg-white/50 border border-transparent",
  };

  return `${base} ${sizes[size]} ${variants[variant]}`;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return (
    <button className={`${buttonClass(variant, size)} ${className}`} {...props}>
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        >
          <span className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-white/30 blur-md animate-shimmer" />
        </span>
      )}
      {props.children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
}) {
  return (
    <a href={href} className={`${buttonClass(variant, size)} ${className}`} {...props}>
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        >
          <span className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-white/30 blur-md animate-shimmer" />
        </span>
      )}
      {props.children}
    </a>
  );
}