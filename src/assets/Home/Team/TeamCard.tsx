import styled from "styled-components";
import { TeamMember } from "../../../../data/team";

interface Props {
  person: TeamMember;
  $activePerson: boolean;
  setActivePerson: () => void;
  className?: string;
}
export default function TeamCard({
  person: { name, image },
  $activePerson,
  setActivePerson,
  className,
}: Props) {
  return (
    <Card
      className={className}
      $activePerson={$activePerson}
      onClick={() => setActivePerson()}
    >
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
  transition: 0.2s 0.4s ease-in-out;
  span {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.1rem 0.2rem;
    background-color: var(--color-light);
    color: var(--color-dark);
    font-size: var(--font-size-s);
    @media (max-width: 800px) {
      font-size: var(--font-size-xs);
    }
  }
  &:hover,
  &:focus {
    transition: 0.4s ease;
  }

  img {
    flex: 1;
    height: 35vh;
    max-height: 376px;
    max-width: 255px;
    cursor: pointer;
    transition: 0.6s ease;
    opacity: ${({ $activePerson }) => ($activePerson ? 1 : 0.5)};

    @media (max-width: 1191px) {
      height: 40vh;
      max-width: 360px;
      max-height: none;
    }
  }
`;
