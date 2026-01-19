import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Baby,
  Sparkles,
  ShieldPlus,
  Stethoscope,
  Syringe,
  Wand2,
  Zap,
  HelpCircle,
  HeartHandshake,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Consultație & plan de tratament",
    description: "Evaluare, diagnostic, recomandare.",
    details: "Discutăm istoricul, facem examinarea clinică și stabilim diagnosticul. Primești opțiuni, pași recomandați, estimare de timp și cost orientativ, în funcție de complexitate.",
    icon: Stethoscope,
  },
  {
    title: "Implantologie",
    description: "Soluții implanto-protetice stabile.",
    details: "Planificare, inserare implant și etapă protetică (coroană/punte), cu evaluarea osului și a țesuturilor. Recomandăm soluția potrivită cazului.",
    icon: Activity,
  },
  {
    title: "Estetică",
    description: "Soluții estetice controlate, cu plan.",
    details: "Albire, reconturări și soluții estetice minim invazive, alese în funcție de zâmbet și ocluzie. Stabilim indicația corectă și întreținerea.",
    icon: Sparkles,
  },
  {
    title: "Endodonție",
    description: "Tratament endodontic, control al infecției.",
    details: "Tratăm infecțiile pulpare prin curățare, dezinfectare și obturare de canal. Obiectiv: păstrarea dintelui și eliminarea durerii/inflamației.",
    icon: Syringe,
  },
  {
    title: "Profilaxie",
    description: "Igienizare profesională și prevenție.",
    details: "Detartraj ultrasonic, airflow și periaj profesional, cu recomandări de igienă personalizate. Scop: reducerea inflamației gingivale și prevenirea cariilor.",
    icon: ShieldPlus,
  },
  {
    title: "Urgențe",
    description: "Evaluare rapidă pentru durere/traumă.",
    details: "Stabilizăm situația, controlăm durerea și inflamația, apoi stabilim pașii următori. Prioritizăm cazurile acute în funcție de simptomatologie.",
    icon: Zap,
  },
];

export type Review = {
  name: string;
  text: string;
  stars: number;
};

export const reviews: Review[] = [
  { name: "Andreea", stars: 5, text: "Explicații clare, plan bine structurat." },
  { name: "Ioana", stars: 5, text: "Foarte bine cu copiii. Răbdare și organizare." },
  { name: "Elena", stars: 5, text: "Curat, modern, comunicare bună. Recomand." },
  { name: "Mihai", stars: 5, text: "Programare ușoară, evaluare clară, eficient." },
  { name: "Radu", stars: 4, text: "Totul pe pași, fără grabă inutilă." },
  { name: "Cristian", stars: 5, text: "Experiență profesionistă, respect pentru timp." },
];

export type FAQ = {
  q: string;
  a: string;
  icon: LucideIcon;
};

export const faq: FAQ[] = [
  {
    q: "Dacă am emoții, cum procedăm?",
    a: "Ne spui de la început. Explicăm fiecare etapă și ajustăm ritmul.",
    icon: HeartHandshake,
  },
  {
    q: "Lucrați și cu copii?",
    a: "Da. Adaptăm abordarea și comunicarea pe înțelesul lor.",
    icon: Baby,
  },
  {
    q: "Cât durează o consultație?",
    a: "Depinde de caz. Îți spunem estimarea înainte.",
    icon: HelpCircle,
  },
  {
    q: "Pot veni direct pentru urgențe?",
    a: "Da. Ideal, sună înainte pentru prioritizare.",
    icon: Zap,
  },
  {
    q: "Ce înseamnă „plan clar”?",
    a: "Diagnostic, opțiuni, cost estimativ și pași recomandați.",
    icon: Wand2,
  },
  {
    q: "Cum fac programarea?",
    a: "Online sau telefonic. Confirmăm intervalul.",
    icon: Activity,
  },
];

export const contact = {
  address: "Strada Câmpșor 13, Avrig",
  phone: "0742 924 742",
  email: "hello@dentaledit.ro",
  schedule: [
    { day: "Luni - Vineri", hours: "08–20" },
    { day: "Sâmbătă", hours: "08–13" },
    { day: "Duminică", hours: "Închis" },
  ],
};