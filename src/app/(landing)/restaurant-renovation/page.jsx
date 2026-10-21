import LandingHeader from "@/components/landing/LandingHeader";
import Hero from "@/components/landing/Hero";
import ProjectsSection from "@/components/landing/ProjectsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import WhySection from "@/components/landing/WhySection";
import ProcessSection from "@/components/landing/ProcessSection";
import LandingFaq from "@/components/landing/LandingFaq";
import ClosingForm from "@/components/landing/ClosingForm";
import LandingFooter from "@/components/landing/LandingFooter";
import StickyCta from "@/components/landing/StickyCta";
import Reveal from "@/components/landing/Reveal";

export const metadata = {
  title: "Restaurant Renovation Contractor in Toronto & the GTA | DSC Linx",
  description:
    "Restaurant renovation contractor in Toronto & the GTA. Design, build, kitchen hoods, plumbing and electrical under one team. Request a quote today.",
  // Paid-traffic page: keep it out of organic search so it doesn't compete
  // with the main site pages.
  robots: { index: false, follow: false },
  openGraph: {
    title: "Restaurant Renovation Contractor in Toronto & the GTA | DSC Linx",
    description:
      "Design, build, kitchen hoods, plumbing and electrical under one team. Request a quote for your restaurant renovation.",
    type: "website",
    locale: "en_CA",
    siteName: "DSC Linx",
  },
};

export default function RestaurantRenovationLanding() {
  return (
    <>
      <LandingHeader />
      {/* Hero stays static: it's the LCP element and holds the primary form. */}
      <Hero />
      <Reveal>
        <ProjectsSection />
      </Reveal>
      <Reveal>
        <ServicesSection />
      </Reveal>
      <Reveal>
        <WhySection />
      </Reveal>
      <Reveal>
        <ProcessSection />
      </Reveal>
      <Reveal>
        <LandingFaq />
      </Reveal>
      <Reveal>
        <ClosingForm />
      </Reveal>
      <LandingFooter />
      <StickyCta />
    </>
  );
}
