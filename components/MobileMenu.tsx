"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { ButtonLink } from "./ui/Button";

export default function MobileMenu({
  open,
  onClose,
  nav,
}: {
  open: boolean;
  onClose: () => void;
  nav: { label: string; href: string }[];
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-ink-900/25 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            className="absolute inset-0 bg-[color:var(--bg)]"
            initial={{ y: 30, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 30, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          >
            <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-brand-500 blob" />
            <div className="absolute top-24 -right-10 h-48 w-48 rounded-full bg-sky-500 blob" />
            <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-mint-200 blob" />

            <div className="relative flex h-full flex-col p-5">
              <div className="flex items-center justify-between">
                <div className="font-display text-2xl">Meniu</div>
                <button
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/70 shadow-soft"
                  onClick={onClose}
                  aria-label="Închide meniul"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 grid gap-3">
                {nav.map((i) => (
                  <a
                    key={i.href}
                    href={i.href}
                    onClick={onClose}
                    className="surface rounded-4xl px-5 py-4 text-lg font-extrabold text-ink-900 shadow-soft active:translate-y-[1px]"
                  >
                    <span className="flex items-center justify-between">
                      {i.label}
                      <ArrowRight className="h-5 w-5 text-ink-500" />
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <ButtonLink href="#programare" onClick={onClose} size="lg" className="w-full">
                  Programare
                </ButtonLink>
                <div className="mt-3 text-center text-sm text-ink-500">
                  Simplu. Calm. Clar.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}