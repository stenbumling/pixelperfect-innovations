import styled from "styled-components";
import { TeamMember } from "../../../../data/team";

interface Props {
  person: TeamMember;
}

export default function TeamCard({ person: { name, image } }: Props) {
  return (
    <Card>
      <img src={image} alt={name} />
      <span>{name}</span>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 40vh;
  position: relative;
  span {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: #fff;
  }

  img {
    flex: 1;
    height: 40vh;
    aspect-ratio: 0.75;
    object-fit: cover;
    opacity: 0.7;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
`;
