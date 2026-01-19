"use client";

import React from "react";

export default function PromoBar() {
  return (
    <div className="promo-bar">
      {/* Desktop/Tablet Layout */}
      <div className="promo-desktop">
        <span>
          Concept demo • Conținut orientativ • Dezvoltat de sky.ro •{" "}
          <a href="mailto:dan.trifan@sky.ro" className="text-blue-600 hover:underline">
            dan.trifan@sky.ro
          </a>{" "}
          •{" "}
          <a href="tel:+40720088880" className="text-blue-600 hover:underline">
            +4 0720 088 880
          </a>
        </span>
        <a
          href="https://wa.me/40720088880"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-promo"
        >
          WhatsApp
        </a>
      </div>

      {/* Mobile Layout */}
      <div className="promo-mobile">
        <div className="promo-left">Concept demo</div>
        <div className="promo-center">Dezvoltat de sky.ro</div>
        <div className="promo-right">
          <a href="tel:+40720088880" className="text-blue-600 hover:underline">
            +4 0720 088 880
          </a>
        </div>
      </div>
    </div>
  );
}