"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { reviews } from "../lib/content";

export default function ReviewsMasonry() {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleReviews = 3;

  // Automatic sliding animation
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Desktop carousel functionality
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="recenzii" className="relative mt-16 sm:mt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            kicker="Social proof"
            title="Recenzii. Pe scurt."
            subtitle="Feedback de la pacienți."
          />
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden md:block mt-8">
          <div className="relative overflow-hidden">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: [0, `-${reviews.length * (350 + 24)}px`] }}
                transition={{
                  duration: 60, // 60 seconds total duration (slower)
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                {/* Duplicate reviews to create infinite loop effect */}
                {[...reviews, ...reviews].map((r, idx) => (
                  <div key={`${r.name}-${idx}`} className="min-w-[350px]">
                    <div className="relative overflow-hidden rounded-5xl border border-line bg-white/75 p-8">
                      <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-brand-500/18 blob" />
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <div className="font-extrabold text-lg">{r.name}</div>
                          <div className="flex items-center gap-1 text-ink-700">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5"
                                fill={i < r.stars ? "currentColor" : "transparent"}
                                opacity={i < r.stars ? 1 : 0.25}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="mt-4 text-base text-ink-700 leading-relaxed">{r.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden mt-8">
          <div className="grid grid-cols-1 gap-4">
            {reviews.slice(0, showAll ? reviews.length : visibleReviews).map((r, idx) => (
              <motion.div
                key={`${r.name}-${idx}`}
                className="relative overflow-hidden rounded-5xl border border-line bg-white/75 p-5 shadow-soft"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
                whileHover={{ y: -3 }}
              >
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-brand-500/18 blob" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="font-extrabold">{r.name}</div>
                    <div className="flex items-center gap-1 text-ink-700">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4"
                          fill={i < r.stars ? "currentColor" : "transparent"}
                          opacity={i < r.stars ? 1 : 0.25}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ink-700 leading-relaxed">{r.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {reviews.length > visibleReviews && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-3 text-sm font-bold text-ink-700 shadow-soft hover:bg-white transition-colors"
              >
                {showAll ? "Ascunde" : "Vezi mai multe"}
                <ChevronRight className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
              </button>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}