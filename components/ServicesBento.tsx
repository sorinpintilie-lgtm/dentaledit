"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { services } from "../lib/content";
import { ButtonLink } from "./ui/Button";

const layout = [
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
];

export default function ServicesBento() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="servicii" className="relative mt-16 sm:mt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            kicker="Servicii"
            title="Alege serviciul. Îți recomandăm planul potrivit."
            subtitle="Consultație, diagnostic și tratament, într-un flux clar."
          />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className={`relative overflow-hidden rounded-5xl border border-line bg-white/75 p-6 shadow-soft ${layout[idx]}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-brand-500/18 blob" />
              <div className="relative">
                <service.icon className="mb-3 h-8 w-8 text-brand-600" />
                <h3 className="mb-2 font-display text-xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-700">{service.description}</p>
                {service.details && (
                  <button
                    onClick={() => setSelectedService(service)}
                    className="mt-3 text-sm text-slate-600 hover:text-slate-800 cursor-pointer flex items-center gap-1"
                  >
                    Detalii <ArrowRight className="h-3 w-3" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ButtonLink href="#programare" size="lg">
            Solicită evaluare
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </motion.div>
      </Container>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-5xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <selectedService.icon className="h-10 w-10 text-brand-600 mb-3" />
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <X className="h-6 w-6 text-slate-500" />
                </button>
              </div>
              <p className="text-sm text-slate-700 mb-4">{selectedService.description}</p>
              <div className="text-sm text-slate-600 leading-relaxed">
                {selectedService.details}
              </div>
              <div className="mt-6">
                <ButtonLink href="#programare" size="lg">
                  Solicită evaluare
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
