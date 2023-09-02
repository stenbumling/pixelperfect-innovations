import { useParams } from 'react-router-dom';
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
      <img src={teamMember.image} alt={teamMember.name} />
    </div>
  );
}
