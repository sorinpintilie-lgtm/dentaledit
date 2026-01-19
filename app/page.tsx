import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesBento from "../components/ServicesBento";
import TeamVignette from "../components/TeamVignette";
import VisitStepsPath from "../components/VisitStepsPath";
import ReviewsMasonry from "../components/ReviewsMasonry";
import FaqAccordion from "../components/FaqAccordion";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      
      {/* Background for remaining content */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-16 left-[-120px] h-80 w-80 rounded-full bg-brand-500 blob" />
        <div className="absolute top-12 right-[-120px] h-72 w-72 rounded-full bg-sky-500 blob" />
        <div className="absolute bottom-[-120px] left-[20%] h-96 w-96 rounded-full bg-mint-200 blob" />
        <div className="absolute inset-0 dots" />
      </div>
      
      <ServicesBento />
      <TeamVignette />
      <VisitStepsPath />
      <ReviewsMasonry />
      <FaqAccordion />
      <CtaBanner />
      <Footer />
    </main>
  );
}
