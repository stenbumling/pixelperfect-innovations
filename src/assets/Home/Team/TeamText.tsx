import styled from "styled-components";
import { TeamMember } from "../../../../data/team";
import arrow from "../../../../public/icons/arrow.svg";

interface Props {
  person: TeamMember;
}

export default function TeamText({
  person: { name, jobTitle, description, quote },
}: Props) {
  return (
    <Card>
      <InfoSection>
        <h3>{name}</h3>
        <h4>{jobTitle}</h4>
        <p>{description}</p>
        <Link>
          Go to profile <img src={arrow} alt="arrow" />
        </Link>
      </InfoSection>
      <Quote>
        <p>{quote}</p>
      </Quote>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  display: flex;
  height: 40vh;
  position: relative;
  align-items: center;
  gap: 6rem;
  span {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: #fff;
  }
`;

const InfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 40vw;
  gap: 0.4rem;
`;

const Quote = styled.div`
  color: var(--color-accent);
  font-size: var(--font-size-m);
  max-width: 50vw;
  padding: 4rem;
  p {
    font-size: var(--font-size-m);
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
