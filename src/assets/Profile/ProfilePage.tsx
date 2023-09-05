import Footer from "../../Footer";
import Header from "../../Header";
import { useHeaderNavigation } from "../../Hooks/useHeaderNavigation";
import NavigationMenu from "../../NavigationMenu";
import AboutSection from "./About/AboutSection";

function ProfilePage() {
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
      <AboutSection />
      <Footer />
    </>
  );
}

export default ProfilePage;
