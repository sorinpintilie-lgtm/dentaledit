"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageSquare, ScanSearch, Bandage, Repeat2 } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const steps = [
  { title: "Evaluare inițială", icon: MessageSquare, desc: "Simptome, istoric, examinare." },
  { title: "Diagnostic & opțiuni", icon: ScanSearch, desc: "Îți prezentăm variantele și recomandarea." },
  { title: "Tratament", icon: Bandage, desc: "Intervenție controlată, cu informare pe parcurs." },
  { title: "Monitorizare", icon: Repeat2, desc: "Pași următori și rechemare." },
];

export default function VisitStepsPath() {
  const reduce = useReducedMotion();

  return (
    <section className="relative mt-16 sm:mt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionTitle
            kicker="Cum decurge consultația"
            title="4 pași. Protocol clar."
            subtitle="Evaluare, opțiuni, tratament, follow-up."
            align="center"
          />
        </motion.div>

        {/* Mobile: vertical stepper */}
        <div className="mt-8 md:hidden">
          <div className="relative p-5">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-500"></div>
            <div className="space-y-8">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.title}
                    className="relative flex items-start gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white text-sm font-bold shadow-soft">
                      {i + 1}
                    </div>
                    <div className="flex-1 surface rounded-4xl p-4 shadow-soft">
                      <div className="flex items-start gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border bg-mint-50 shadow-soft">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-extrabold">{s.title}</div>
                          <div className="mt-1 text-sm text-ink-700">{s.desc}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop: curved path */}
        <div className="mt-10 hidden md:block">
          <div className="relative overflow-hidden rounded-5xl border border-line bg-white/70 shadow-lift">
            <div className="absolute inset-0">
              <div className="absolute -top-16 left-[-80px] h-80 w-80 rounded-full bg-brand-500/28 blob" />
              <div className="absolute bottom-[-120px] right-[-80px] h-96 w-96 rounded-full bg-sky-500/16 blob" />
              <div className="absolute inset-0 dots opacity-20" />
            </div>

            <div className="relative p-8">
              <div className="relative h-[360px]">
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 1000 360"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M60 300 C 220 70, 420 70, 520 170 C 640 285, 780 310, 940 120"
                    stroke="rgba(15,23,42,.18)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: reduce ? 0 : 1.2,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.path
                    d="M60 300 C 220 70, 420 70, 520 170 C 640 285, 780 310, 940 120"
                    stroke="rgba(186,212,59,.55)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: reduce ? 0 : 1.2,
                      ease: "easeInOut",
                      delay: 0.05,
                    }}
                  />
                </svg>

                {/* Step cards positioned along the curve */}
                {steps.map((s, idx) => {
                  const Icon = s.icon;
                  const pos = [
                    { left: "2%", top: "62%" },
                    { left: "26%", top: "12%" },
                    { left: "54%", top: "40%" },
                    { left: "76%", top: "12%" },
                  ][idx];

                  return (
                    <motion.div
                      key={s.title}
                      className="absolute w-[260px]"
                      style={pos}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                    >
                      <div className="rounded-5xl border border-line bg-white/80 p-5 shadow-soft">
                        <div className="flex items-start gap-3">
                          <div className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-line bg-mint-100/70 shadow-soft">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-extrabold">{s.title}</div>
                            <div className="mt-1 text-sm text-ink-700">{s.desc}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}