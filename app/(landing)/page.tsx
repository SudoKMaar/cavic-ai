import FaqSection from "@/components/landing-page/faq";
import LandingFeatureGallary from "@/components/landing-page/landing-features";
import { LandingHero } from "@/components/landing-page/landing-hero";
import { LandingNavbar } from "@/components/landing-page/landing-navbar";
import LandingPricing from "@/components/landing-page/landing-price";

export default function LandingPage() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingFeatureGallary />
      <LandingPricing />
    </div>
  );
}
