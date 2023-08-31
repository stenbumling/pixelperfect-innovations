import { GoogleMap } from "@react-google-maps/api";
import styled from "styled-components";

export default function InteractiveMap() {
  return (
    <Container>
      <GoogleMap
        zoom={13}
        center={{ lat: 57.71002661314838, lng: 11.995201114757762 }}
        mapContainerClassName="map-container"
      ></GoogleMap>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
