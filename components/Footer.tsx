"use client";

import React from "react";
import Image from "next/image";
import { contact } from "../lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-16 sm:mt-24 bg-brand-500">
      <div className="rounded-t-5xl p-6 sm:p-8 w-full px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="md:hidden grid gap-6">
          {/* First row: Logo + Text */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/logo.png"
              alt="Dental Edit"
              width={120}
              height={120}
              className="h-24 w-24 object-contain"
            />
            <div className="font-display text-sm text-black mt-1">WE EDIT YOUR SMILE</div>
          </div>

          {/* Second row: Detalii de contact */}
          <div>
            <div className="font-extrabold text-black mb-2">Detalii de contact</div>
            <div className="text-sm text-black/90">{contact.address}</div>
            <div className="text-sm text-black/90">{contact.phone}</div>
          </div>

          {/* Third row: Program + Sitemap */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-extrabold text-black mb-2">Program</div>
              {contact.schedule.map((s) => (
                <div key={s.day} className="mt-1">
                  <div className="text-xs font-bold text-black/70">{s.day}</div>
                  <div className="text-sm font-extrabold text-black">{s.hours}</div>
                </div>
              ))}
            </div>

            <div>
              <div className="font-extrabold text-black mb-2">Sitemap</div>
              <div className="mt-1 space-y-1">
                <div className="text-sm text-black/90 hover:text-black cursor-pointer">Servicii</div>
                <div className="text-sm text-black/90 hover:text-black cursor-pointer">Echipă</div>
                <div className="text-sm text-black/90 hover:text-black cursor-pointer">Recenzii</div>
                <div className="text-sm text-black/90 hover:text-black cursor-pointer">Întrebări frecvente</div>
                <div className="text-sm text-black/90 hover:text-black cursor-pointer">Contact</div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-4 gap-8 text-left">
          <div className="col-span-1">
            <div className="flex flex-col items-start">
              <Image
                src="/images/logo.png"
                alt="Dental Edit"
                width={150}
                height={150}
                className="h-32 w-32 object-contain"
              />
              <div className="font-display text-base text-black mt-1">WE EDIT YOUR SMILE</div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="font-extrabold text-black mb-3">Detalii de contact</div>
            <div className="text-sm text-black/90">{contact.address}</div>
            <div className="text-sm text-black/90">{contact.phone}</div>
          </div>

          <div className="col-span-1">
            <div className="font-extrabold text-black mb-3">Program</div>
            {contact.schedule.map((s) => (
              <div key={s.day} className="mt-1">
                <div className="text-xs font-bold text-black/70">{s.day}</div>
                <div className="text-sm font-extrabold text-black">{s.hours}</div>
              </div>
            ))}
          </div>

          <div className="col-span-1">
            <div className="font-extrabold text-black mb-3">Sitemap</div>
            <div className="mt-1 space-y-1">
              <div className="text-sm text-black/90 hover:text-black cursor-pointer">Servicii</div>
              <div className="text-sm text-black/90 hover:text-black cursor-pointer">Echipă</div>
              <div className="text-sm text-black/90 hover:text-black cursor-pointer">Recenzii</div>
              <div className="text-sm text-black/90 hover:text-black cursor-pointer">Întrebări frecvente</div>
              <div className="text-sm text-black/90 hover:text-black cursor-pointer">Contact</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between text-black/70">
          <div className="text-xs">
            © Dental Edit
          </div>
          <a 
            href="https://sky.ro" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs hover:text-black transition-colors"
          >
            Powered by
            <img src="/images/skyro.png" alt="Skyro" className="h-6 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
}