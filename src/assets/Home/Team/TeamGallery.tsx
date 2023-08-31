import styled from "styled-components";
import teamMembers from "../../../../data/team";
import TeamCard from "./TeamCard";

interface Props {
  activePerson: boolean;
  setActivePerson: (index: number) => void;
}

export default function TeamGallery({ activePerson, setActivePerson }: Props) {
  return (
    <Gallery>
      <p>{activePerson}</p>
      {teamMembers.map((person, index) => (
        <TeamCard
          person={person}
          key={index}
          activePerson={activePerson}
          setActivePerson={() => setActivePerson(index)}
        ></TeamCard>
      ))}
    </Gallery>
  );
}

const Gallery = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-x: scroll;
`;
