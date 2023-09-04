import Footer from "../../Footer";
import Header from "../../Header";
import { useHeaderNavigation } from "../../Hooks/useHeaderNavigation";
import NavigationMenu from "../../NavigationMenu";
import HeroSection from "./Hero/HeroSection";
import MapSection from "./Map/MapSection";
import TeamSection from "./Team/TeamSection";

function App() {
  const { menuOpen, toggleMenu } = useHeaderNavigation();

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      {menuOpen && <NavigationMenu isOpen={menuOpen} />}
      <HeroSection />
      <TeamSection />
      {/* <BrandSection /> */}
      <MapSection />
      <Footer />
    </>
  );
}

export default App;
