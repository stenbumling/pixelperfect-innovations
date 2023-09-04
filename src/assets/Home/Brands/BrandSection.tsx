import styled from "styled-components";
import { SectionProps } from "../App";

const brandLogos = [
  "./client-brand-logos/aesop-logo.svg",
  "./client-brand-logos/ikea-logo.svg",
  "./client-brand-logos/hay-logo.svg",
  "./client-brand-logos/teurn-logo.svg",
  "./client-brand-logos/new-works-logo.svg",
  "./client-brand-logos/bosch-logo.svg",
  "./client-brand-logos/prada-logo.svg",
  "./client-brand-logos/vitra-logo.svg",
  "./client-brand-logos/sonos-logo.svg",
  "./client-brand-logos/skf-logo.svg",
  "./client-brand-logos/flattered-logo.svg",
  "./client-brand-logos/polestar-logo.svg",
  "./client-brand-logos/electrolux-logo.svg",
  "./client-brand-logos/volvo-logo.svg",
];

export default function BrandSection({ id }: SectionProps) {
  return (
    <Background id={id}>
      <div className="grid-container">
        <div className="grid">
          <Heading>Clients we've worked with</Heading>
        </div>
      </div>
      <BrandContainer>
        <Row>
          {brandLogos.map((logo, index) => (
            <BrandLogo key={index} src={logo} alt={`Brand Logo ${index}`} />
          ))}
        </Row>
        <Row>
          {brandLogos.map((logo, index) => (
            <BrandLogo key={index} src={logo} alt={`Brand Logo ${index}`} />
          ))}
        </Row>
        <Row>
          {brandLogos.map((logo, index) => (
            <BrandLogo key={index} src={logo} alt={`Brand Logo ${index}`} />
          ))}
        </Row>
        <Row>
          {brandLogos.map((logo, index) => (
            <BrandLogo key={index} src={logo} alt={`Brand Logo ${index}`} />
          ))}
        </Row>
      </BrandContainer>
    </Background>
  );
}

const Background = styled.div`
  background: var(--color-dark);
  padding: 12rem 0 14rem;
`;

const BrandContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
  overflow: hidden;
  background: var(--color-dark);

  @media (max-width: 912px) {
    gap: 1.8rem;
  }

  @media (max-width: 414px) {
    gap: 1.6rem;
  }
`;

const Heading = styled.h4`
  color: var(--color-light);
  padding-bottom: 4rem;

  @media (max-width: 540px) {
    padding-bottom: 2rem;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 3rem;

  &:nth-of-type(1) {
    display: none;
    flex-direction: row-reverse;
    @media (max-width: 940px) {
      display: flex;
    }
  }

  &:nth-of-type(2) {
    transform: translateX(-30%);
    display: none;
    @media (max-width: 600px) {
      display: flex;
      transform: translateX(-158%);
    }
  }

  &:nth-of-type(3) {
    flex-direction: row-reverse;
    transform: translateX(68%);
  }

  @media (max-width: 900px) {
    gap: 2rem;
  }

  @media (max-width: 600px) {
    gap: 1.2rem;
  }
`;

const BrandLogo = styled.img`
  width: auto;
  height: 1.6rem;

  @media (max-width: 1024px) {
    height: 2vw;
  }

  @media (max-width: 768px) {
    height: 3vw;
  }
`;
