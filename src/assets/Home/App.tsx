import Footer from "../../Footer";
import Header from "../../Header";
import { useHeaderNavigation } from "../../Hooks/useHeaderNavigation";
import NavigationMenu from "../../NavigationMenu";
import HeroSection from "./Hero/HeroSection";
import MapSection from "./Map/MapSection";
import TeamSection from "./Team/TeamSection";

function App() {
  const { menuOpen, toggleMenu, closeMenu } = useHeaderNavigation();

  return (
    <>
      <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />
      {menuOpen && (
        <NavigationMenu
          isOpen={menuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
      )}
      <HeroSection />
      <TeamSection />
      {/* <BrandSection /> */}
      <MapSection />
      <Footer />
    </>
  );
}

export default App;
