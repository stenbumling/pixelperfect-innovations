import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import teamMembers from '../../../../data/team';
import arrowLight from '/icons/arrow-light.svg';

export default function AboutSection() {
  const { id } = useParams();

  const teamMember = teamMembers.find((member) => member.id === id);

  if (!teamMember) {
    return <div>Team member not found!</div>;
  }

  return (
    <>
      <Background>
        <div className="grid-container">
          <div className="grid">
            <TopSection>
              <ProfileHeading>
                <h2>{teamMember.name}</h2>
                <h5>{teamMember.jobTitle}</h5>
              </ProfileHeading>
              <ImageAndDescription>
                <DescriptionAndLink>
                  <p>{teamMember.description}</p>
                  <StyledNavLink to={`/profile/${id}`}>
                    Let's talk <img src={arrowLight} alt="arrow light" />
                  </StyledNavLink>
                </DescriptionAndLink>
                <ProfileImage src={teamMember.image} alt={teamMember.name} />
              </ImageAndDescription>
            </TopSection>
          </div>
        </div>
      </Background>
      <BackgroundLight>
        <div className="grid-container">
          <div className="grid">
            <BottomSection>
              <p>{teamMember.presentation}</p>
              <ListOfSkills>
                {teamMember.skills.map((skill, index) => (
                  <SpecificSkill key={index}>{skill}</SpecificSkill>
                ))}
              </ListOfSkills>
            </BottomSection>
          </div>
        </div>
      </BackgroundLight>
    </>
  );
}

const Background = styled.div`
  background: var(--color-dark);
`;

const BackgroundLight = styled.div`
  background: var(--color-light);
`;

const TopSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8rem 0 6rem;
`;

const ProfileHeading = styled.div`
  color: var(--color-light);

  h2 {
    font-size: var(--font-size-xl);
    line-height: 1.1;
    padding-bottom: 1rem;
    white-space: nowrap;
    padding-top: 3rem;
  }
`;

const ImageAndDescription = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 1rem;
`;

const DescriptionAndLink = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  p {
    position: absolute;
    right: -80%;
    top: 62%;
    max-width: 18.75rem;
    min-width: 15rem;
    color: var(--color-light);
    align-self: end;
    font-size: 0.875rem;
    text-align: right;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 1rem;
  align-items: center;
  white-space: nowrap;
  font-size: 1.3rem;
  text-decoration: none;
  font-weight: 800;
  color: var(--color-light);
  position: absolute;
  right: -80%;
  top: 95%;

  img {
    width: 1.6rem;
    height: auto;
    @media (max-width: 800px) {
      width: 1rem;
    }
  }

  a {
    font-size: var(--font-size-m);
  }

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

const ProfileImage = styled.img`
  width: 20rem;
`;

const ListOfSkills = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  font-weight: 500;
  font-size: var(--font-size-s);
`;

const SpecificSkill = styled.li`
  position: relative;
  &::before {
    content: '• ';
    position: absolute;
    top: 50%;
    left: -1.2rem;
    transform: translateY(-50%);
    color: var(--color-accent);
    font-size: var(--font-size-m);
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem 0;
  background: var(--color-light);

  p {
    max-width: 450px;
  }
`;
