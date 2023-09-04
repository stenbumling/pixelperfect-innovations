import styled from "styled-components";

export default function ContactSection() {
  return (
    <>
      <div className="grid-container">
        <Title>Contact me</Title>
      </div>

      <div className="grid-container">
        <div className="grid">
          <ContactForm>
            <ContactFormRow>
              <label>
                First Name
                <input type="text" name="firstName" />
              </label>
              <label>
                Last Name
                <input type="text" name="lastName" />
              </label>
            </ContactFormRow>
            <ContactFormRow>
              <label>
                Email Address
                <input type="email" name="email" />
              </label>
            </ContactFormRow>
            <ContactFormRow>
              <label>
                Message
                <textarea name="message" />
              </label>
            </ContactFormRow>
          </ContactForm>
        </div>
      </div>
    </>
  );
}

const Title = styled.h3`
  grid-column: main;
  font-size: var(--font-size-m);
  padding-bottom: 2rem;
`;

const ContactForm = styled.form`
  max-width: 600px;
`;

const ContactFormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  &:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
