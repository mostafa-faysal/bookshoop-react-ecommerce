import HeroSection from "../../heroSection/HeroSection";
import ContactSection from "../books/contactSection/ContactSection";
import Features from "../features/Features";
import OurMation from "./ourMation/OurMation";

export default function About() {
  return (
    <>
      <HeroSection
        heightClass="h-[60vh]"
        showSearch={false}
        showDescription={true}
      />
      <OurMation />
      <ContactSection />
      <Features />
    </>
  );
}
