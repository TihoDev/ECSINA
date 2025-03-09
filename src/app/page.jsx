import HeroSection from "@/components/HeroSection";
import OurProductSection from "@/components/ourProductSection";
import OurFuturesSection from "@/components/OurFuturesSection";
import BelowMainPageBanner from "@/components/BelowMainPageBanner";
import MainPageBanner from "@/components/MainPageBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-y-hidden">
      <HeroSection />
      <OurProductSection />
      <OurFuturesSection />
      <MainPageBanner />
      <BelowMainPageBanner />
      <Footer />
    </div>
  );
}
