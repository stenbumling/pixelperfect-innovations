import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--color-dark);
  padding: 3rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentDiv = styled.div`
  flex: 1;
  text-align: left;
  padding-right: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Header = styled.h4`
  margin-bottom: 0.5rem;
`;

const Links = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactDetails = styled.p`
  margin-bottom: 1rem;

  ${Links} {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <ContentDiv>
        <Header>Contact</Header>
        <ContactDetails>
          <p>PixelPerfect Innovations</p>
          <p>Anders Personsgatan 18</p>
          <p>416 64 Göteborg</p>
        </ContactDetails>
        <ContactDetails>
          <Links href="#">info@pixelperfect.com</Links>
        </ContactDetails>
        <ContactDetails>
          <Links href="#">031-83 28 31</Links>
        </ContactDetails>
      </ContentDiv>
      <ContentDiv>
        <Header>Work with us</Header>
        <ContactDetails>
          We are always looking for new people to join our team!
        </ContactDetails>
        <ContactDetails>
          <Links href="#">work@pixelperfect.com</Links>
        </ContactDetails>
      </ContentDiv>
      <ContentDiv>
        <Header>Social Media</Header>
        <SocialIcons>
          <Links href="#">
            <IconBrandLinkedin size={25} />
          </Links>
          <Links href="#">
            <IconBrandInstagram size={25} />
          </Links>
          <Links href="#">
            <IconBrandPinterest size={25} />
          </Links>
          <Links href="#">
            <IconBrandTwitterFilled size={25} />
          </Links>
        </SocialIcons>
      </ContentDiv>
    </FooterContainer>
  );
}

export default Footer;
