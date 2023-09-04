import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import logo from "/icons/logo.svg";

interface HeaderProps {
  toggleMenu: () => void;
}

export default function Header({ toggleMenu }: HeaderProps) {
  return (
    <>
      <Container className="grid-container">
        <HeaderInner className="grid">
          <img src={logo} alt="" />
          <BurgerMenu toggleMenu={toggleMenu} />
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
  padding: 2rem 0;

  @media (max-width: 800px) {
    padding: 1.5rem 0;

    img {
      height: 30px;
    }
  }
`;
