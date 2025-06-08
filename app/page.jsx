import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import JoinCTA from "./components/JoinCTA";
import MarketplaceShowcase from "./components/MarketplaceShowcase";
import Navbar from "./components/Navbar";
import WhyChooseAgronet from "./components/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseAgronet />
      <HowItWorks />
      <MarketplaceShowcase />
      <JoinCTA />
    </>
  );
}
