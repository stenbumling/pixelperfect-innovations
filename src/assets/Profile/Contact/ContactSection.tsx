import styled from "styled-components";

export default function MapSection() {
  return (
    <>
      <div className="grid-container">
        <Title>Contact</Title>
      </div>

      <div className="grid-container">
        <div className="grid">A beautiful contact form is on it's way</div>
      </div>
    </>
  );
}

const Title = styled.h3`
  grid-column: main;
  font-size: var(--font-size-m);
  padding-bottom: 2rem;
`;
