import { IconArrowRight } from "@tabler/icons-react";
import styled from "styled-components";

export default function HeroSection() {
  return (
    <Background>
      <div className="grid-container">
        <div className="grid">
          <Hero>
            <h1>Transforming Ideas Into Digital Reality</h1>
            <Text>
              Crafting immersive digital experiences through expert web
              development, app creation, and tailored software solutions.
            </Text>
            <h4>Work with us</h4>
            <IconArrowRight />
          </Hero>
        </div>
      </div>
    </Background>
  );
}

const Background = styled.div`
  background-color: var(--color-dark);
  color: var(--color-light);
`;

const Hero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-dark);
  color: var(--color-light);
`;

const Text = styled.p`
  margin: 0;
  /* font-size: var(--font-size-m); */
  max-width: 400px;
`;
