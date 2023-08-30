import styled from "styled-components";

export default function HeroSection() {
  return (
    <>
      <div className="grid-container">
        <div className="grid">
          <Hero>
            <h1>Transforming Ideas Into Digital Reality</h1>
            <h2>Example text</h2>
            <div className="card"></div>
          </Hero>
        </div>
      </div>
    </>
  );
}

const Hero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
