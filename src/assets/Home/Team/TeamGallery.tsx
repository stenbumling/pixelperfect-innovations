import styled from "styled-components";
import teamMembers, { TeamMember } from "../../../../data/team";
import TeamCard from "./TeamCard";

interface Props {
  person: TeamMember;
}

export default function TeamGallery() {
  return (
    <Gallery>
      {teamMembers.map((person, index) => (
        <TeamCard person={person} {...person} key={index}></TeamCard>
      ))}
    </Gallery>
  );
}

const Gallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
