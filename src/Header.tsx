import styled from 'styled-components';
import BurgerMenu from './BurgerMenu';
import logo from '/icons/logo.svg';

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
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`;
