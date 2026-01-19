"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Ruler, MessageSquareText } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";

const principles = [
  { title: "Atenție", icon: HeartHandshake, text: "Ascultăm, evaluăm, explicăm." },
  { title: "Precizie", icon: Ruler, text: "Pași corecți. Control pe detalii." },
  { title: "Claritate", icon: MessageSquareText, text: "Decizii informate, pe înțeles." },
];

export default function TeamVignette() {
  return (
    <section id="echipa" className="relative mt-16 sm:mt-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-5 order-2 lg:order-1"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              kicker="Echipa"
              title="Echipă atentă. Execuție riguroasă."
              subtitle="Lucrăm cu respect pentru pacient și pentru actul medical."
            />

            <div className="mt-7 grid gap-3">
              {principles.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="surface rounded-4xl p-4 shadow-soft"
                  >
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-line bg-white/70 shadow-soft">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-extrabold text-ink-900">{p.title}</div>
                        <div className="mt-1 text-sm text-ink-700">{p.text}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 order-1 lg:order-2"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-5xl border border-line bg-white/70 shadow-lift">
              <div className="absolute inset-0">
                <div className="absolute -top-10 -right-12 h-64 w-64 rounded-full bg-brand-500/35 blob" />
                <div className="absolute bottom-[-70px] left-[-30px] h-80 w-80 rounded-full bg-sky-500/18 blob" />
                <div className="absolute inset-0 dots opacity-20" />
              </div>

              <div className="relative p-6 sm:p-8">
                <div className="grid gap-6 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-5">
                    {/* image with blob mask */}
                    <div className="mask-blob-b overflow-hidden border border-line shadow-soft">
                      <img
                        src="/images/professional-team-of-dentists-and-assistants-posin-2026-01-07-01-01-37-utc.jpg"
                        alt="Echipa clinică"
                        className="h-56 w-full object-cover object-right md:object-[80%_center]"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7">
                    <div className="font-display text-3xl leading-tight">
                      Preferăm lucrurile bine făcute.
                    </div>
                    <p className="mt-3 text-base text-ink-700">
                      Echipă bine coordonată. Focus pe calitate și predictibilitate.
                    </p>

                    <div className="mt-6 grid gap-3 grid-cols-2">
                      <div className="rounded-4xl border border-line bg-mint-100/60 p-4 shadow-soft">
                        <div className="text-xs font-bold text-ink-500">Comunicare</div>
                        <div className="mt-1 font-extrabold">clar</div>
                      </div>
                      <div className="rounded-4xl border border-line bg-white/70 p-4 shadow-soft">
                        <div className="text-xs font-bold text-ink-500">Plan de tratament</div>
                        <div className="mt-1 font-extrabold">detaliat</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}