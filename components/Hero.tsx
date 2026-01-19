"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import Chip from "./ui/Chip";
import { ButtonLink } from "./ui/Button";

const float = (delay: number) => ({
  animate: { y: [0, -6, 0] },
  transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay },
});

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center pt-36 sm:pt-10 md:pt-4">
      {/* Image Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero.png"
          alt="Dental Clinic Background"
          className="w-full h-full object-cover object-[90%_center] md:object-center"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left */}
          <motion.div
            className="lg:col-span-12"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >


            <h1 className="mt-5 font-display text-[3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] leading-[1.05] tracking-[-0.02em]">
              WE EDIT<br />YOUR SMILE
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg text-ink-700 hidden sm:block">
              Servicii complete, organizate pe specialități. Recomandări clare, pe pași.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ButtonLink href="#programare" size="lg">
                Programează-te <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#servicii" variant="secondary" size="lg">
                Vezi servicii
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Chip>Protocol clar</Chip>
              <Chip>Eficient</Chip>
              <Chip>Modern</Chip>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}