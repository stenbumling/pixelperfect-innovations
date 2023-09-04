import { useState } from "react";

export function useHeaderNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return {
    menuOpen,
    toggleMenu,
  };
}
