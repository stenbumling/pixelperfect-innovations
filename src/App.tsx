import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useHeaderNavigation } from "./Hooks/useHeaderNavigation";
import NavigationMenu from "./NavigationMenu";
import HeroSection from "./assets/Home/Hero/HeroSection";
import MapSection from "./assets/Home/Map/MapSection";
import TeamSection from "./assets/Home/Team/TeamSection";

function App() {
  const { menuOpen, toggleMenu } = useHeaderNavigation();

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

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
