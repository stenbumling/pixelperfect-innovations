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
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const StyledNavigationMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;
`;

const NavLink = styled.a`
  font-size: 4rem;
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
  font-size: 1.5rem;
  margin-right: 1rem;
`;

interface NavigationMenuProps {
  isOpen: boolean;
}

function NavigationMenu({ isOpen }: NavigationMenuProps) {
  if (!isOpen) return null;

  return (
    <NavigationContainer className="grid-container">
      <StyledNavigationMenu className="grid">
        {/* Navigation options */}
        <NavLink href="#">
          <Number>01</Number> Cases
        </NavLink>
        <NavLink href="#">
          <Number>02</Number> Meet the Team
        </NavLink>
        <NavLink href="#">
          <Number>03</Number> Career
        </NavLink>
        <NavLink href="#">
          <Number>04</Number> Contact
        </NavLink>
      </StyledNavigationMenu>
    </NavigationContainer>
  );
}

export default NavigationMenu;
