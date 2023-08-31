import styled from "styled-components";
import { TeamMember } from "../../../../data/team";
import arrow from "../../../../public/icons/arrow.svg";

interface Props {
  activePerson: boolean;
  setActivePerson: (index: number) => void;
  person: TeamMember;
  index: number;
}

export default function TeamText({
  person: { name, jobTitle, description, quote },
  activePerson,
  setActivePerson,
  index,
}: Props) {
  return (
    <Card>
      <InfoSection activePerson={activePerson}>
        <h3>{name}</h3>
        <h4>{jobTitle}</h4>
        <p>{description}</p>
        <Link>
          Go to profile <img src={arrow} alt="arrow" />
        </Link>
      </InfoSection>
      <Quote activePerson={activePerson}>
        <p>{quote}</p>
      </Quote>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  span {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: #fff;
  }
`;

const InfoSection = styled.div<{ activePerson: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  ${({ activePerson }) => (activePerson ? "display: flex;" : "display: none;")}

  h3 {
    font-size: var(--font-size-m);
  }

  h4 {
    font-size: var(--font-size-s);
  }

  @media (max-width: 800px) {
    padding: 1rem 1rem 1rem 0;
  }
`;

const Quote = styled.div<{ activePerson: boolean }>`
  color: var(--color-accent);
  font-size: var(--font-size-m);
  padding: 1rem;
  display: ${({ activePerson }) => (activePerson ? "block" : "none")};
  p {
    font-size: var(--font-size-m);
  }

  @media (max-width: 800px) {
    padding: 1rem 0 1rem 1rem;
  }
`;

const Link = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
  white-space: nowrap;

  img {
    width: 1.4rem;
    height: auto;
  }
  p {
    font-size: var(--font-size-m);
  }
`;
