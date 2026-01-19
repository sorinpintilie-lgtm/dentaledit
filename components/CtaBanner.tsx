"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "./ui/Container";
import { ButtonLink } from "./ui/Button";

export default function CtaBanner() {
  return (
    <section id="programare" className="relative mt-16 sm:mt-24">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-5xl border border-black/20 shadow-lift"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-500/90 to-brand-600" />
          <div className="absolute -top-16 -left-14 h-72 w-72 rounded-full bg-brand-500/35 blob" />
          <div className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-sky-500/16 blob" />
          <div className="absolute inset-0 dots opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-mint-50/20 to-transparent" />

          <div className="relative p-7 sm:p-10 text-black">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/70 px-3 py-1 text-xs font-extrabold text-black shadow-soft">
              <Sparkles className="h-4 w-4 text-black" />
              Programare
            </div>

            <h3 className="mt-4 font-display text-3xl sm:text-4xl leading-[1.05] text-black">
              Programează o consultație.
            </h3>
            <p className="mt-3 max-w-2xl text-base text-black/80">
              Spune-ne motivul vizitei. Îți confirmăm intervalul și pașii următori.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="#contact" size="lg" variant="secondary">
                Programează-te <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>

            <div className="mt-5 text-xs text-black/60">
              *Pași corecți. Comunicare clară.
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}