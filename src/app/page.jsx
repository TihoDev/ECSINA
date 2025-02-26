import BelowMainPageBanner from "@/components/BelowMainPageBanner";
import HeroSection from "@/components/HeroSection";
import MainPageBanner from "@/components/MainPageBanner";

export default function Home() {
  return (
    <div className="text-6xl font-black">
      <HeroSection />
      <MainPageBanner />
      <BelowMainPageBanner />
    </div>
  );
}
