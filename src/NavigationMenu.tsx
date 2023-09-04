import styled from "styled-components";

const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-dark);
  display: flex;
  justify-content: center;
  z-index: 800;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const StyledNavigationMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;
`;

const NavLink = styled.a`
  font-size: 4rem;
  font-weight: 500;
  margin: 1rem 0;
  text-decoration: none;
  color: var(--color-darker-light);
  transition: font-size 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-darker-light);

  &:hover {
    font-size: 4.2rem;
    color: var(--color-white);
  }
`;

const Number = styled.span`
  font-size: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
`;

interface NavigationMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

function NavigationMenu({
  isOpen,
  toggleMenu,
  closeMenu,
}: NavigationMenuProps) {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    closeMenu();
    toggleMenu();
  };

  return (
    <NavigationContainer>
      <StyledNavigationMenu>
        <NavLink href="#team" onClick={handleLinkClick}>
          <Number>01</Number> Meet the team
        </NavLink>
        <NavLink href="#cases" onClick={handleLinkClick}>
          <Number>02</Number> Cases
        </NavLink>
        <NavLink href="#map" onClick={handleLinkClick}>
          <Number>03</Number> Find us
        </NavLink>
        <NavLink href="#" onClick={handleLinkClick}>
          <Number>04</Number> Contact
        </NavLink>
      </StyledNavigationMenu>
    </NavigationContainer>
  );
}

export default NavigationMenu;
