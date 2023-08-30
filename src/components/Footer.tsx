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
  padding: 1rem;
`;

const ContentDiv = styled.div`
  flex: 1;
  text-align: left;
`;

function Footer() {
  return (
    <FooterContainer>
      <ContentDiv>
        <h3>Contact</h3>
        <p>PixelPerfect Innovations</p>
        <p>Anders Personsgatan 18,</p>
        <p>416 64 Göteborg</p>
        <p>info@pixelperfect.com</p>
        <p>031-83 28 31</p>
      </ContentDiv>
      <ContentDiv>
        <h3>Work with us</h3>
        <p>We are always looking for new people to join our team!</p>
        <p>work@pixelperfect.com</p>
      </ContentDiv>
      <ContentDiv>
        <h3>Follow</h3>
        {/* Add your social media icons here */}
        <div>
          <IconBrandLinkedin />
          <IconBrandInstagram />
          <IconBrandPinterest />
          <IconBrandTwitterFilled />
        </div>
      </ContentDiv>
    </FooterContainer>
  );
}

export default Footer;
