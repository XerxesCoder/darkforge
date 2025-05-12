import AppHeader from "@/components/AppHeader";
import Features from "@/components/Sections/Features";
import Footer from "@/components/Sections/Footer";
import Hero from "@/components/Sections/Hero";
import HowItWorks from "@/components/Sections/How-it-works";
import WizardsCounsel from "@/components/Sections/WizardFAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-mordor text-mordor-mithril px-4">
      <AppHeader />
      <Hero />
      <HowItWorks />
      <Features />
      <WizardsCounsel />
      <Footer />
    </main>
  );
}
