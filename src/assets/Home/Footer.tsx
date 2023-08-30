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
`;

const ContentDiv = styled.div`
  flex: 1;
  text-align: left;
  padding-right: 1rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <ContentDiv>
        <h4>Contact</h4>
        <p>PixelPerfect Innovations</p>
        <p>Anders Personsgatan 18,</p>
        <p>416 64 Göteborg</p>
        <p>info@pixelperfect.com</p>
        <p>031-83 28 31</p>
      </ContentDiv>
      <ContentDiv>
        <h4>Work with us</h4>
        <p>We are always looking for new people to join our team!</p>
        <p>work@pixelperfect.com</p>
      </ContentDiv>
      <ContentDiv>
        <h4>Follow</h4>
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
