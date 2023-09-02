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
      <div className="grid-container">
        <div className="grid">
          <h2>About {teamMember.name}</h2>
          <h5>{teamMember.jobTitle}</h5>
          <img src={teamMember.image} alt={teamMember.name} />
          <p>{teamMember.description}</p>
          <ListOfSkills>
            {teamMember.skills.map((skill, index) => (
              <SpecificSkill key={index}>{skill}</SpecificSkill>
            ))}
          </ListOfSkills>
          <p>{teamMember.presentation}</p>
        </div>
      </div>
    </div>
  );
}

const ListOfSkills = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  font-weight: 500;
  font-size: var(--font-size-s);
`;

const SpecificSkill = styled.li`
  &::before {
    content: '• ';
    color: var(--color-accent);
    font-size: var(--font-size-m);
  }
`;
