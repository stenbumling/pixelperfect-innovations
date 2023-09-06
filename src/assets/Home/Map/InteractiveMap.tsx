import { GoogleMap, InfoWindowF, MarkerF } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import styled from 'styled-components';

export default function InteractiveMap() {
  const [isOpen, setIsOpen] = useState(false);
  const address = useMemo(
    () => ({ lat: 57.70992004609615, lng: 11.994712202229747 }),
    []
  );
  const options = useMemo(
    () => ({
      mapId: 'e7f0fbdf65035845',
      disableDefaultUI: true,
      clickableIcons: false,
      zoomControl: true,
    }),
    []
  );

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <GoogleMap
        zoom={14}
        center={address}
        mapContainerClassName="map-container"
        options={options}
      >
        <MarkerF
          position={address}
          onClick={toggleOpen}
          icon={{
            url: '/icons/map-marker-icon.svg',
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        />
        {isOpen && (
            <InfoWindowF
              position={address}
              onCloseClick={toggleOpen}
            >
              <AddressContainer>
                <h5>PixelPerfect Innovations</h5>
                <p>Anders Personsgatan 18</p>
                <p>416 64 Göteborg</p>
              </AddressContainer>
            </InfoWindowF>
        )}
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

const AddressContainer = styled.div`
  font-family: 'Space Grotesk', sans-serif;
`;
