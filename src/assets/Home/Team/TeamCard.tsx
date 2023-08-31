import styled from "styled-components";
import { TeamMember } from "../../../../data/team";

interface Props {
  person: TeamMember;
  $activePerson: boolean;
  setActivePerson: () => void;
}
export default function TeamCard({
  person: { name, image },
  $activePerson,
  setActivePerson,
}: Props) {
  return (
    <Card $activePerson={$activePerson} onClick={() => setActivePerson()}>
      <img src={image} alt={name} />
      <span>{name}</span>
    </Card>
  );
}

const Card = styled.div<{ $activePerson: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  span {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.1rem 0.2rem;
    background-color: var(--color-light);
    color: var(--color-dark);
    font-size: var(--font-size-s);
  }

  img {
    flex: 1;
    height: 35vh;
    max-height: 376px;
    max-width: 255px;
    cursor: pointer;
    opacity: ${({ $activePerson }) => ($activePerson ? 1 : 0.5)};

    &:hover,
    &:focus {
      transition: 0.4s ease;
      opacity: 1;
    }
  }
`;
