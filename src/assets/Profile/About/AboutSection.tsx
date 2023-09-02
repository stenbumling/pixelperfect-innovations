import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import teamMembers from '../../../../data/team';

export default function AboutSection() {
  const { id } = useParams();

  const teamMember = teamMembers.find((member) => member.id === id);

  if (!teamMember) {
    return <div>Team member not found!</div>;
  }

  return (
    <div>
      <h2>About {teamMember.name}</h2>
      <h5>{teamMember.jobTitle}</h5>
      <img src={teamMember.image} alt={teamMember.name} />
      <p>{teamMember.description}</p>
      <Skills>
        {teamMember.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </Skills>
      <p>{teamMember.presentation}</p>
    </div>
  );
}

const Skills = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
`;
