import Footer from "../../Footer";
import Header from "../../Header";
import BrandSection from "./Brands/BrandSection";
import CaseSection from "./Cases/CaseSection";
import HeroSection from "./Hero/HeroSection";
import MapSection from "./Map/MapSection";
import TeamSection from "./Team/TeamSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TeamSection />
      <BrandSection />
      <CaseSection />
      <MapSection />
      <Footer />
    </>
  );
}

export default App;
