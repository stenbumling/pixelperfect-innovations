import teamMembers, { TeamMember } from "../../../../data/team";
import TeamGallery from "./TeamGallery";
import TeamText from "./TeamText";

export default function TeamSection() {
  interface Props {
    person: TeamMember;
  }
  return (
    <div className="grid-container">
      <div className="grid">
        <TeamGallery />
        {teamMembers.map((person, index) => (
          <TeamText person={person} {...person} key={index}></TeamText>
        ))}
      </div>
    </div>
  );
}
