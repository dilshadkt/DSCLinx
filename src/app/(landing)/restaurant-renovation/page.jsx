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

export const metadata = {
  title: "Restaurant Renovation Contractor in Toronto & the GTA | DSC Linx",
  description:
    "DSC Linx designs, builds and renovates restaurants across Toronto and the GTA. Request a quote for your restaurant renovation.",
  robots: { index: false, follow: false },
};

export default function RestaurantRenovationLanding() {
  return (
    <>
      <LandingHeader />
      <Hero />
      <ProjectsSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <LandingFaq />
      <ClosingForm />
      <LandingFooter />
      <StickyCta />
    </>
  );
}
