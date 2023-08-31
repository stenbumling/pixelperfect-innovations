import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import styled from "styled-components";

export default function InteractiveMap() {
  const address = useMemo(
    () => ({ lat: 57.70992004609615, lng: 11.994712202229747 }),
    []
  );
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
      zoomControl: true,
    }),
    []
  );

  return (
    <Container>
      <GoogleMap
        zoom={15}
        center={address}
        mapContainerClassName="map-container"
        options={options}
      >
        <MarkerF
          position={address}
        />
      </GoogleMap>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
