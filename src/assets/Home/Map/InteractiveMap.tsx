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
      mapId: "e7f0fbdf65035845",
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
          icon={{
            url: "/public/icons/marker-icon.svg",
            scaledSize: new window.google.maps.Size(60, 60),
          }}
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
