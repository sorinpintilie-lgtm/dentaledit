"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { faq } from "../lib/content";

function Item({
  q,
  a,
  icon: Icon,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  icon: any;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-5xl border border-line bg-white/75 shadow-soft overflow-hidden">
      <button
        className="w-full px-5 py-4 text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-3xl border border-line bg-mint-100/70 shadow-soft">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-extrabold text-ink-900">{q}</div>
            </div>
          </div>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/70 shadow-soft">
            {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="px-5 pb-5 -mt-1 text-sm text-ink-700 leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="relative mt-16 sm:mt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            kicker="Întrebări frecvente"
            title="Întrebări frecvente."
            subtitle="Dacă ai nevoie, ne poți contacta."
          />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {faq.map((f, idx) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              icon={f.icon}
              open={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}