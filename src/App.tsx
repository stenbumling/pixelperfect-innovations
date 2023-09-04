import Footer from "./Footer";
import Header from "./Header";
import { useHeaderNavigation } from "./Hooks/useHeaderNavigation";
import NavigationMenu from "./NavigationMenu";
import HeroSection from "./assets/Home/Hero/HeroSection";
import MapSection from "./assets/Home/Map/MapSection";
import TeamSection from "./assets/Home/Team/TeamSection";

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
