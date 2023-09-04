import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import logo from "/icons/logo.svg";

interface HeaderProps {
  toggleMenu: () => void;
  menuOpen: boolean;
}

export default function Header({ toggleMenu, menuOpen }: HeaderProps) {
  return (
    <>
      <Container className="grid-container">
        <HeaderInner className="grid">
          <img src={logo} alt="" />
          <BurgerMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </HeaderInner>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: transparent;
  position: fixed;
  mix-blend-mode: difference;
  width: 100%;
  z-index: 999;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 0;
  img {
    height: 35px;
  }

  @media (max-width: 800px) {
    padding: 1.2rem 0;

    img {
      height: 30px;
    }
  }
`;
