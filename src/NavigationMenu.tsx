import styled from "styled-components";

const StyledNavigationMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Text = styled.h1`
  color: var(--color-light);
`;

interface NavigationMenuProps {
  isOpen: boolean;
}

function NavigationMenu({ isOpen }: NavigationMenuProps) {
  if (!isOpen) return null;

  return (
    <StyledNavigationMenu>
      <Text>Navigation</Text>
    </StyledNavigationMenu>
  );
}

export default NavigationMenu;
