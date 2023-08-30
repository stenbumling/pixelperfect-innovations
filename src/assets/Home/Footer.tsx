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
  border-top: 1px solid black;
  padding: 3rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentDiv = styled.div`
  flex: 1;
  text-align: left;
  padding-right: 1rem;

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

const ContactDetails = styled.p`
  margin-bottom: 1rem;
`;

const PhoneNumber = styled.p`
  margin-bottom: 1rem;
  text-decoration: underline;
`;

function Footer() {
  return (
    <FooterContainer>
      <ContentDiv>
        <Header>Contact</Header>
        <ContactDetails>
          <p>PixelPerfect Innovations</p>
          <p>Anders Personsgatan 18,</p>
          <p>416 64 Göteborg</p>
        </ContactDetails>
        <ContactDetails>info@pixelperfect.com</ContactDetails>
        <PhoneNumber>031-83 28 31</PhoneNumber>
      </ContentDiv>
      <ContentDiv>
        <Header>Work with us</Header>
        <ContactDetails>
          We are always looking for new people to join our team!
        </ContactDetails>
        <ContactDetails>work@pixelperfect.com</ContactDetails>
      </ContentDiv>
      <ContentDiv>
        <Header>Social Media</Header>
        <SocialIcons>
          <IconBrandLinkedin />
          <IconBrandInstagram />
          <IconBrandPinterest />
          <IconBrandTwitterFilled />
        </SocialIcons>
      </ContentDiv>
    </FooterContainer>
  );
}

export default Footer;
