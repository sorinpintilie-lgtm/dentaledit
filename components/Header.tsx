"use client";

import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, PhoneCall } from "lucide-react";
import Container from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import MobileMenu from "./MobileMenu";

const nav = [
  { label: "Servicii", href: "#servicii" },
  { label: "Echipă", href: "#echipa" },
  { label: "Recenzii", href: "#recenzii" },
  { label: "Întrebări frecvente", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [showFloat, setShowFloat] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowFloat(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="sticky top-[calc(var(--promo-height)+env(safe-area-inset-top))] z-50">
        <div className="bg-brand-500">
          <Container className="py-3">
            <div className="flex items-center justify-between gap-3">
              <a href="#top" className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="Dental Edit"
                  width={120}
                  height={120}
                  className="h-14 w-36 object-contain p-1"
                  priority
                />
              </a>

              <div className="hidden md:flex items-center gap-6">
                <nav className="flex items-center gap-5 text-sm font-semibold text-white">
                  {nav.map((i) => (
                    <a
                      key={i.href}
                      href={i.href}
                      className="hover:text-green-100 transition"
                    >
                      {i.label}
                    </a>
                  ))}
                </nav>
                <ButtonLink href="#programare" size="md" variant="secondary">
                  Programează-te
                </ButtonLink>
              </div>

              <button
                className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/70 shadow-soft"
                onClick={() => setOpen(true)}
                aria-label="Deschide meniul"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </Container>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} nav={nav} />


    </>
  );
}