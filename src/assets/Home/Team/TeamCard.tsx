import styled from "styled-components";
import { TeamMember } from "../../../../data/team";

interface Props {
  person: TeamMember;
  activePerson: boolean;
  setActivePerson: () => void;
}
export default function TeamCard({
  person: { name, image },
  activePerson,
  setActivePerson,
}: Props) {
  return (
    <Card $activePerson={activePerson} onClick={() => setActivePerson()}>
      <img src={image} alt={name} />
      <span>{name}</span>
    </Card>
  );
}

const Card = styled.div<{ $activePerson: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 35vh;
  position: relative;
  span {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: #fff;
  }

  img {
    flex: 1;
    height: 35vh;
    aspect-ratio: 0.75;
    object-fit: cover;
    cursor: pointer;
    opacity: ${({ $activePerson }) => ($activePerson ? 1 : 0.5)};

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
`;
