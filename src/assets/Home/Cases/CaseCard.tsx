import styled from "styled-components";
import { Case } from "../../../../data/case";

export default function CaseCard({ id, video, image, description }: Case) {
  return (
    <>
      <CaseNr>{id}</CaseNr>
      <CaseVideo>
        <video id="background-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <img src={image} alt="" />
      </CaseVideo>
      <CaseText>{description}</CaseText>
    </>
  );
}

const CaseText = styled.p`
  padding: 1rem 0;
  width: 100%;
  background-color: var(--color-light);
  height: 6.69rem;
  @media (max-width: 624px) {
    font-size: var(--font-size-xs);
    padding: 0.6rem 0;
    height: 5rem;
  }
`;

const CaseNr = styled.span`
  position: absolute;
  top: -2.7rem;
  font-size: 1.5rem;
  font-weight: 300;
`;

const CaseVideo = styled.div`
  height: 28rem;

  video,
  img {
    position: absolute;
    width: 100%;
    height: 28rem;
    object-fit: cover;
  }

  img {
    &:hover {
      opacity: 0;
    }
  }

  @media (max-width: 684px) {
    height: 55vh;
    video,
    img {
      height: 55vh;
    }
  }

  @media (max-width: 540px) {
    height: 35vh;
    video,
    img {
      height: 35vh;
    }
  }
`;
