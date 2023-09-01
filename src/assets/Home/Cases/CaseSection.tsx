import styled from "styled-components";
import img1 from "../../../../public/videos/img1.jpg";
import video1 from "../../../../public/videos/video1.mp4";
import video2 from "../../../../public/videos/video2.mp4";

export default function CaseSection() {
  return (
    <OuterGridContainer className="grid-container">
      <div className="grid">
        <Title>Client Cases</Title>
        <CaseVideos>
          <CaseContainer>
            <CaseNr>01</CaseNr>
            <CaseVideo>
              <video id="background-video" autoPlay loop muted>
                <source src={video2} type="video/mp4" />
              </video>
              <img src={img1} alt="" />
            </CaseVideo>
            <CaseText>Lorem ipsum dolor sit amet.</CaseText>
          </CaseContainer>
          <CaseContainer>
            <CaseNr>02</CaseNr>
            <CaseVideo>
              <video id="background-video" loop muted autoPlay>
                <source src={video1} type="video/mp4" />
              </video>
              <img src={img1} alt="" />
            </CaseVideo>
            <CaseText>Lorem ipsum dolor sit amet.</CaseText>
          </CaseContainer>
          <CaseContainer>
            <CaseNr>03</CaseNr>
            <CaseVideo>
              <video id="background-video" loop muted autoPlay>
                <source src={video1} type="video/mp4" />
              </video>
              <img src={img1} alt="" />
            </CaseVideo>
            <CaseText>Lorem ipsum dolor sit amet.</CaseText>
          </CaseContainer>
          <CaseContainer>
            <CaseNr>04</CaseNr>
            <CaseVideo>
              <video id="background-video" loop muted autoPlay>
                <source src={video1} type="video/mp4" />
              </video>
              <img src={img1} alt="" />
            </CaseVideo>
            <CaseText>Lorem ipsum dolor sit amet.</CaseText>
          </CaseContainer>
        </CaseVideos>
      </div>
    </OuterGridContainer>
  );
}

const OuterGridContainer = styled.div`
  margin: 5rem 0 11rem;
  transform: translateY(8vh);
  color: var(--clr-accent);
`;

const CaseVideos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 4.5rem 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    row-gap: 6rem;
    padding: 4rem 10vw;
  }

  @media (max-width: 700px) {
    padding: 4rem 0;
    row-gap: 6rem;
  }

  @media (max-width: 280px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  font-size: var(--font-size-m);
  font-weight: 500;
`;

const CaseContainer = styled.div`
  position: relative;
  height: 450px;
  &:nth-child(odd) {
    transform: translateY(8vh);
  }

  @media (max-width: 1224px) {
    height: 325px;
  }

  @media (max-width: 280px) {
    &:nth-child(odd) {
      transform: translateY(0vh);
    }
  }
`;

const CaseText = styled.p`
  position: absolute;
  bottom: -2.2rem;
  padding: 0.6rem 0;
  width: 100%;
  background-color: var(--color-light);
`;

const CaseNr = styled.span`
  position: absolute;
  top: -3rem;
  font-size: 1.5rem;
  font-weight: 300;
`;

const CaseVideo = styled.div`
  text-align: right;
  height: 445px;
  width: 100%;
  position: absolute;
  top: 0;
  overflow: hidden;
  color: #000;

  video,
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  img {
    position: absolute;
    left: 0;

    &:hover {
      opacity: 0;
    }
  }

  @media (max-width: 1224px) {
    height: 325px;
  }
`;
