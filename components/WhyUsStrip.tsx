"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Baby, Cpu, BadgeCheck, Clock } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const scenes = [
  {
    title: "Comfort",
    desc: "Ritm blând, explicații înainte.",
    badge: "calm",
    icon: Sparkles,
    mask: "mask-blob-a",
    tone: "from-cream-100 via-white/60 to-mint-100/70",
  },
  {
    title: "Tehnologie",
    desc: "Modern, dar fără show.",
    badge: "precizie",
    icon: Cpu,
    mask: "mask-blob-b",
    tone: "from-mint-100/60 via-white/60 to-sky-500/10",
  },
  {
    title: "Kids",
    desc: "Pași mici. Multă răbdare.",
    badge: "friendly",
    icon: Baby,
    mask: "mask-blob-c",
    tone: "from-white/60 via-mint-100/50 to-brand-500/15",
  },
  {
    title: "Transparență",
    desc: "Plan, opțiuni, estimări.",
    badge: "clar",
    icon: BadgeCheck,
    mask: "mask-blob-a",
    tone: "from-mint-100/50 via-white/60 to-violet-500/10",
  },
];

export default function WhyUsStrip() {
  return (
    <section id="despre" className="relative mt-16 sm:mt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            kicker="Despre clinică"
            title="O clinică modernă, cu standarde clare."
            subtitle="Fără promisiuni mari. Protocol, comunicare, rezultate."
          />

          <ul className="mt-7 space-y-3 text-sm text-ink-700">
            {[
              "Explicăm opțiunile înainte de tratament.",
              "Stabilim pașii și durata, de la început.",
              "Abordare adaptată pentru copii, fără presiune.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-600" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}