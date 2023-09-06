import { IconArrowRight } from "@tabler/icons-react";
import styled, { css } from "styled-components";
import { SectionProps } from "../App";

function HeroSection({ id }: SectionProps) {
  return (
    <Background id={id}>
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
                  <Link href="#team">
                    <h5>Work with us</h5>
                    <IconArrowRight size={24} />
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
  position: relative;
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

  @media (max-height: 660px) {
    font-size: var(--font-size-xl);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;

  @media (min-width: 790px) {
    align-items: flex-end;
  }
`;

const Text = styled.div`
  position: absolute;
  right: 0rem;
  bottom: 3rem;
  ${sharedStyles}
  max-width: 25rem;

  @media (max-width: 760px) {
    position: unset;
  }
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
