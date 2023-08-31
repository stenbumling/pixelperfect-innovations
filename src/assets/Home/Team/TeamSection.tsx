import { useState } from "react";
import styled from "styled-components";
import teamMembers from "../../../../data/team";
// import TeamGallery from "./TeamGallery";
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
              <p>{activePerson}</p>
              {teamMembers.map((person, index) => (
                <TeamCard
                  person={person}
                  key={index}
                  activePerson={index === activePersonIndex}
                  setActivePerson={() => handleSetActivePerson(index)}
                ></TeamCard>
              ))}
            </Gallery>
          </Carousel>
          <div className="grid">
            {teamMembers.map((person, index) => (
              <TeamText
                activePerson={index === activePersonIndex}
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
  padding-bottom: 1rem;
`;

const Carousel = styled.div`
  grid-column: 2/4;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Gallery = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-x: scroll;
`;
