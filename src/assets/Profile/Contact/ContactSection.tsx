import styled from "styled-components";

export default function ContactSection() {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Your message has been sent!");
    // createToast();
    // cleanUpForm();
  };

  return (
    <>
      <div className="grid-container">
        <Title>Contact me</Title>
      </div>
      <div className="grid-container">
        <div className="grid">
          <ContactForm onSubmit={handleSubmit}>
            <ContactFormRow>
              <label>
                <span>
                  First Name <span className="required">*</span>
                </span>
                <input type="text" name="firstName" />
              </label>
              <label>
                <span>
                  Last Name <span className="required">*</span>
                </span>
                <input type="text" name="lastName" />
              </label>
            </ContactFormRow>
            <ContactFormRow>
              <label>
                <span>Company</span>
                <input type="email" name="email" />
              </label>
            </ContactFormRow>
            <ContactFormRow>
              <label>
                <span>
                  Email Address <span className="required">*</span>
                </span>
                <input type="email" name="email" />
              </label>
            </ContactFormRow>
            <ContactFormRow>
              <label>
                <span>
                  Message <span className="required">*</span>
                </span>
                <textarea name="message" />
              </label>
            </ContactFormRow>
            <button type="submit">Send Message</button>
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
  max-width: 800px;
`;

const ContactFormRow = styled.div`
  display: flex;
  margin-bottom: 16px;

  &:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > *:first-child {
      margin-right: 14px;
    }
  }

  @media (max-width: 650px) {
    &:first-child {
      flex-direction: column;

      & > *:first-child {
        margin-right: 0;
        margin-bottom: 26px;
      }
    }
  }

  .required {
    color: #a92801;
  }
`;
