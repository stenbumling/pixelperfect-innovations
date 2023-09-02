import styled from "styled-components";
import cases from "../../../../data/case";
import CaseCard from "./CaseCard";

export default function CaseSection() {
  return (
    <OuterGridContainer className="grid-container">
      <div className="grid">
        <Title>Client Cases</Title>
        <CaseVideos>
          {cases.map((individualCase, index) => (
            <CaseContainer key={index}>
              <CaseCard key={index} {...individualCase} />
            </CaseContainer>
          ))}
        </CaseVideos>
      </div>
    </OuterGridContainer>
  );
}

const OuterGridContainer = styled.div`
  margin: 5rem 0 12rem;
  transform: translateY(8vh);
  color: var(--clr-accent);
`;

const CaseVideos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    row-gap: 6rem;
    padding: 4rem 10vw;
  }

  @media (max-width: 821px) {
    padding: 4rem 0;
    row-gap: 7rem;
  }

  @media (max-width: 280px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  font-size: var(--font-size-m);
  font-weight: 500;
  @media (max-width: 1000px) {
    padding: 0 10vw;
  }

  @media (max-width: 821px) {
    padding: 0;
  }
`;

const CaseContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  &:nth-child(odd) {
    transform: translateY(8vh);
  }

  @media (max-width: 280px) {
    &:nth-child(odd) {
      transform: translateY(0vh);
    }
  }
`;
