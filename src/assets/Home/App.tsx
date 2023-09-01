import Footer from "../../Footer";
import Header from "../../Header";
import CaseSection from "./Cases/CaseSection";
import HeroSection from "./Hero/HeroSection";
import TeamSection from "./Team/TeamSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TeamSection />
      {/* <BrandSection /> */}
      <CaseSection />
      <Footer />
    </>
  );
}

export default App;
