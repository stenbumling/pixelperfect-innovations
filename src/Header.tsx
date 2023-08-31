import styled from "styled-components";
import logo from "../public/icons/logo.svg";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <>
      <Container className="grid-container">
        <HeaderInner className="grid">
          <img src={logo} alt="" />
          <BurgerMenu />
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
  z-index: 100;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`;
