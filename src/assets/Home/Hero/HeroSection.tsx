import { IconArrowRight } from "@tabler/icons-react";
import styled, { css } from "styled-components";

function HeroSection() {
  return (
    <Background>
      <div className="grid-container">
        <div className="grid">
          <HeroLayout>
            <TitleContainer>
              <Title>Transforming Ideas Into Digital Reality</Title>
            </TitleContainer>
            <TextContainer>
              <Text>
                <p>
                  Crafting immersive digital experiences through expert web
                  development, app creation, and tailored software solutions.
                </p>
                <Work>
                  <Link href="#">
                    <h4>Work with us</h4>
                    <IconArrowRight size={35} />
                  </Link>
                </Work>
              </Text>
            </TextContainer>
          </HeroLayout>
        </div>
      </div>
    </Background>
  );
}

export default HeroSection;

const sharedStyles = css`
  color: var(--color-light);
`;

const Background = styled.div`
  background-color: var(--color-dark);
`;

const HeroLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-dark);
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Title = styled.h1`
  ${sharedStyles}
  font-size: var(--font-size-xl);

  @media (min-width: 630px) {
    font-size: var(--font-size-xxl);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 4rem;

  @media (min-width: 790px) {
    align-items: flex-end;
  }
`;

const Text = styled.div`
  ${sharedStyles}
  max-width: 25rem;
`;

const Work = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  ${sharedStyles}
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 0.5rem;

  &:hover {
    ${sharedStyles}
  }
`;
