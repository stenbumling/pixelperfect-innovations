import styled from "styled-components";

export default function BurgerMenu() {
  const toggleMenu = () => {};

  return (
    <>
      <StyledBurgerMenu onClick={toggleMenu}>
        <Burger />
      </StyledBurgerMenu>
    </>
  );
}

const StyledBurgerMenu = styled.div`
  cursor: pointer;
  position: relative;
  height: 1.3rem;
  z-index: 104;
  mix-blend-mode: difference;
`;

const Burger = styled.div`
  width: 1.9rem;
  height: 0.2rem;
  position: relative;
  top: 50%;
  background-color: #fff;

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: inherit;
    width: inherit;
    height: inherit;
    top: 0;
    transition: 0.3s ease;
  }

  &::after {
    top: -0.6rem;
  }

  &::before {
    width: 1rem;
    top: 0.6rem;
    right: 0;
  }
`;
