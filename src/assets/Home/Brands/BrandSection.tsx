import styled from 'styled-components';

export default function BrandSection() {
  return (
    <>
      <div className="grid-container">
        <div className="grid">
          <BrandContainer>
            <Header>Clients we've worked with</Header>
            <ContentDiv>
              <BrandLogo
                src="./client-brand-logos/aesop-logo.svg"
                alt="aesop logo"
              />
              <BrandLogo
                src="./client-brand-logos/ikea-logo.svg"
                alt="ikea logo"
              />
              <BrandLogo
                src="./client-brand-logos/hay-logo.svg"
                alt="hay logo"
              />
              <BrandLogo
                src="./client-brand-logos/teurn-logo.svg"
                alt="teurn logo"
              />
              <BrandLogo
                src="./client-brand-logos/new-works-logo.svg"
                alt="new works logo"
              />
              <BrandLogo
                src="./client-brand-logos/bosch-logo.svg"
                alt="bosch logo"
              />
              <BrandLogo
                src="./client-brand-logos/prada-logo.svg"
                alt="prada logo"
              />
            </ContentDiv>
            <ContentDiv>
              <BrandLogo
                src="./client-brand-logos/volvo-logo.svg"
                alt="volvo logo"
              />

              <BrandLogo
                src="./client-brand-logos/sonos-logo.svg"
                alt="sonos logo"
              />
              <BrandLogo
                src="./client-brand-logos/flattered-logo.svg"
                alt="flattered logo"
              />
              <BrandLogo
                src="./client-brand-logos/vitra-logo.svg"
                alt="vitra logo"
              />
              <BrandLogo
                src="./client-brand-logos/polestar-logo.svg"
                alt="polestar logo"
              />
              <BrandLogo
                src="./client-brand-logos/skf-logo.svg"
                alt="skf logo"
              />
              <BrandLogo
                src="./client-brand-logos/electrolux-logo.svg"
                alt="electrolux logo"
              />
            </ContentDiv>
          </BrandContainer>
        </div>
      </div>
    </>
  );
}

const BrandContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-dark);
`;

const Header = styled.h4`
  color: var(--color-light);
  margin-bottom: 2rem;
`;

const ContentDiv = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    /* margin-bottom: 3rem; */
  }
`;

const BrandLogo = styled.img`
  width: auto;
  height: 1.6rem;
`;
