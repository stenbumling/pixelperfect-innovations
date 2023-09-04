import { useLoadScript } from "@react-google-maps/api";
import styled from "styled-components";
import InteractiveMap from "./InteractiveMap";

interface MapSectionProps {
  id: string;
}

export default function MapSection({ id }: MapSectionProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  return (
    <div id={id}>
      <div className="grid-container">
        <Title>Find us</Title>
      </div>

      <div className="grid-container">
        <div className="grid">
          {isLoaded ? <InteractiveMap /> : <div>Loading map...</div>}
        </div>
        <AddressContainer>
          <CompanyTitle className="grid">PixelPerfect Innovations</CompanyTitle>
          <div className="grid">Anders Personsgatan 18</div>
          <div className="grid">416 64 Göteborg</div>
        </AddressContainer>
      </div>
    </div>
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
  padding-top: 2rem;
  padding-bottom: 8rem;
`;

const CompanyTitle = styled.h4`
  grid-column: main;
  font-size: var(--font-size-s);
`;
