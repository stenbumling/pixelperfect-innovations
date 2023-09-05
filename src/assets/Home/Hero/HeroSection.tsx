import { IconArrowRight } from "@tabler/icons-react";
import styled, { css } from "styled-components";
import { SectionProps } from "../App";
import video1 from "/videos/video.mp4";
// import video1 from "/videos/video-hero1.mp4";

function HeroSection({ id }: SectionProps) {
  return (
    <HeroLayout id={id}>
      <Video>
        <video id="background-video" autoPlay loop muted poster={video1}>
          <source src={video1} type="video/mp4" />
        </video>
        <h1>Transforming Ideas Into Digital Reality</h1>
      </Video>
      <TextContainer className="textContainer">
        <p>
          Crafting immersive digital experiences through expert web development,
          app creation, and tailored software solutions.
        </p>
        <Work>
          <Link href="#">
            <h5>Work with us</h5>
            <IconArrowRight size={24} />
          </Link>
        </Work>
      </TextContainer>
    </HeroLayout>
  );
}

export default HeroSection;

const sharedStyles = css`
  color: var(--color-light);
`;

const HeroLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-dark);
  position: relative;
  overflow: hidden;
`;

const Video = styled.div`
  background-color: var(--color-dark);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 0.9;
  }

  h1 {
    font-size: 10rem;
    font-size: clamp(3.6rem, 10vw, 10rem);
    font-size: var(--font-size-xxl);
    position: absolute;
    inset: 0;
    left: 0;
    background-color: var(--color-dark);
    line-height: 0.95;
    color: var(--color-white);
    font-weight: 900;
    transition: opacity 0.4 1s ease-in;
    transition: font-size 0;
    opacity: 0.5;
    display: flex;
    align-items: center;
    padding-left: 5.8rem;
    cursor: default;

    &:hover {
      transition: opacity 4s 1s ease-in;
      opacity: 1;
      mix-blend-mode: multiply;

      h1 {
        opacity: 1;
      }
    }

    @media (max-width: 1100px) {
      padding-left: 3rem;
      padding-right: 3rem;
      padding-top: 0%;
      line-height: 1;
    }

    @media (max-width: 790px) {
      font-size: 13vw;
    }

    @media (max-width: 650px) {
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 13.25vw;
    }
  }
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0rem;
  bottom: 3rem;
  z-index: 4;
  ${sharedStyles}
  max-width: 25rem;
  right: 5rem;

  @media (max-width: 1100px) {
    left: 3rem;
  }

  @media (max-width: 790px) {
    left: 3rem;
  }
  @media (max-width: 650px) {
    left: 1rem;
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
