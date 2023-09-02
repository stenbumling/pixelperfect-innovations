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
  /* font-size: var(--font-size-xs); */
  @media (max-width: 624px) {
    padding: 0.6rem 0;
  }
`;

const CaseNr = styled.span`
  position: absolute;
  top: -2.9rem;
  font-size: 1.5rem;
  font-weight: 300;
`;

const CaseVideo = styled.div`
  height: 450px;

  video,
  img {
    position: absolute;
    width: 100%;
    height: 450px;
    object-fit: cover;
  }

  img {
    &:hover {
      opacity: 0;
    }
  }

  @media (max-width: 624px) {
    height: 300px;
    video,
    img {
      height: 300px;
    }
  }
`;
