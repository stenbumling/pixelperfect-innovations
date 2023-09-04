import { useState } from "react";
import styled from "styled-components";
import teamMembers from "../../../../data/team";
import Dot from "./Dot";
import TeamCard from "./TeamCard";
import TeamText from "./TeamText";

export default function TeamSection() {
  const [activePersonIndex, setActivePersonIndex] = useState(0);
  const [activePerson, setActivePerson] = useState(false);

  const handleSetActivePerson = (index: number) => {
    setActivePersonIndex(index);
    setActivePerson(true);
  };

  return (
    <>
      <Container>
        <div className="grid-container">
          <Title>Meet the team</Title>
        </div>
        <div className="grid-container">
          <Carousel>
            <Gallery>
              {teamMembers.map((person, index) => (
                <TeamCard
                  person={person}
                  key={index}
                  $activePerson={index === activePersonIndex}
                  setActivePerson={() => handleSetActivePerson(index)}
                ></TeamCard>
              ))}
            </Gallery>
            <DotContainer>
              {teamMembers.map((person, index) => (
                <Dot
                  $activePerson={index === activePersonIndex}
                  setActivePerson={() => handleSetActivePerson(index)}
                  key={index}
                ></Dot>
              ))}
            </DotContainer>
          </Carousel>
          <div className="grid">
            {teamMembers.map((person, index) => (
              <TeamText
                $activePerson={index === activePersonIndex}
                setActivePerson={() => handleSetActivePerson(index)}
                person={person}
                key={index}
                index={index}
              ></TeamText>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

const Title = styled.h4`
  grid-column: main;
  font-size: var(--font-size-m);
  padding-bottom: 1rem;
`;

const Carousel = styled.div`
  grid-column: main;
  position: relative;
  @media (max-width: 1143px) {
    grid-column: 2/4;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 0 0;
`;

const DotContainer = styled.div`
  position: absolute;
  gap: 0.4rem;
  grid-column: main;
  align-items: center;
  width: 100%;
  justify-content: center;
  display: flex;
  bottom: 1.1rem;
  left: 0;
`;

const Gallery = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  overflow-x: scroll;
  padding-bottom: 3.5rem;
`;
