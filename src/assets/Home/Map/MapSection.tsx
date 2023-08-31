import styled from "styled-components";
import InteractiveMap from "./InteractiveMap";

export default function MapSection() {
  return (
    <>
      <div className="grid-container">
        <Title>Find us</Title>
      </div>
      <div className="grid-container">
        <div className="grid">
          <InteractiveMap />
        </div>
        <AddressContainer>
          <CompanyTitle className="grid">PixelPerfect Innovations</CompanyTitle>
          <div className="grid">Anders Personsgatan 18,</div>
          <div className="grid">416 64 Göteborg</div>
        </AddressContainer>
      </div>
    </>
  );
}

const Title = styled.h3`
  grid-column: main;
  font-size: var(--font-size-m);
  padding-bottom: 2rem;
`;

const AddressContainer = styled.div`
  grid-column: main;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 12rem;
`;

const CompanyTitle = styled.h4`
  grid-column: main;
  font-size: var(--font-size-s);
`;
