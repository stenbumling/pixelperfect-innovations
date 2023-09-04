import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import logo from "/icons/logo.svg";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Please make sure your first name is at least 2 letters.")
    .max(200, "That's a bit too long. Try shortening it.")
    .required("No need to be shy. What's your name?"),
  lastName: Yup.string()
    .min(2, "Please make sure your last name is at least 2 letters.")
    .max(200, "That's a bit too long. Try shortening it.")
    .required(
      "To make this process a bit smoother, we also need your last name."
    ),
  email: Yup.string()
    .email(
      "Hmm, that doesn't look quite right. Your email address should look like something like this: example@company.se"
    )
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Hmm, that doesn't look quite right. Your email address should look like something like this: example@company.se"
    )
    .required("We need your email address to get back to you."),
  message: Yup.string()
    .min(10, "Please give us a bit more information about your request.")
    .max(10000, "That's a bit too long. Try shortening it.")
    .required("Please write us a message, we'd love to hear from you!"),
});

export default function ContactSection() {
  const [isSent, setSent] = useState(false);

  const onSubmit = (
    data: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: (nextState?: any) => void;
    }
  ) => {
    setSent(true);
    resetForm();
    setSubmitting(false);
  };

  return (
    <>
      {!isSent ? (
        <>
          <div className="grid-container">
            <Title>Contact me</Title>
          </div>
          <div className="grid-container">
            <div className="grid">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  message: "",
                }}
                validationSchema={schema}
                onSubmit={onSubmit}
              >
                <Form style={{ maxWidth: "1000px" }}>
                  <ContactFormRow>
                    <label>
                      <span style={{ fontWeight: "bold" }}>
                        First Name <span className="required">*</span>
                      </span>
                      <StyledField type="text" name="firstName" />
                      <ErrorText>
                        <ErrorMessage name="firstName" />
                      </ErrorText>
                    </label>
                    <label>
                      <span style={{ fontWeight: "bold" }}>
                        Last Name <span className="required">*</span>
                      </span>
                      <StyledField type="text" name="lastName" />
                      <ErrorText>
                        <ErrorMessage
                          className="validation-error-message"
                          name="lastName"
                        />
                      </ErrorText>
                    </label>
                  </ContactFormRow>
                  <ContactFormRow>
                    <label>
                      <span style={{ fontWeight: "bold" }}>
                        Email Address <span className="required">*</span>
                      </span>
                      <StyledField type="email" name="email" />
                      <ErrorText>
                        <ErrorMessage name="email" />
                      </ErrorText>
                    </label>
                  </ContactFormRow>
                  <ContactFormRow>
                    <label>
                      <span style={{ fontWeight: "bold" }}>
                        Message <span className="required">*</span>
                      </span>
                      <Field
                        as="textarea"
                        name="message"
                        maxLength="10000"
                        style={{
                          fontFamily: '"Space Grotesk", sans-serif',
                          padding: "8px",
                          boxSizing: "border-box",
                        }}
                      />
                      <ErrorText>
                        <ErrorMessage name="message" />
                      </ErrorText>
                    </label>
                  </ContactFormRow>
                  <button type="submit">Send Message</button>
                </Form>
              </Formik>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid-container">
            <Title>Thank you for reaching out to us!</Title>
          </div>
          <div className="grid-container">
            <div className="grid">
              <Paragraph>
                I'm thrilled to hear from you, and I will get back to you as
                soon as humanly possible. In the meanwhile, delve into projects
                we've created with our partners in the{" "}
                <a href="/cases">cases section</a>, or have a look at some of my
                other team members in the <a href="/team">team section</a>.
              </Paragraph>
              <Paragraph style={{ marginBottom: "1rem" }}>
                See you soon,
              </Paragraph>
              <img style={{ maxWidth: "108px" }} src={logo} alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

const Title = styled.h3`
  grid-column: main;
  font-size: var(--font-size-m);
  padding-bottom: 2rem;
`;

const Paragraph = styled.h5`
  margin-bottom: 1.4rem;
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
      max-width: 48%;
    }
    & > *:last-child {
      margin-left: 14px;
      max-width: 48%;
    }
  }

  @media (max-width: 650px) {
    &:first-child {
      flex-direction: column;

      & > *:first-child {
        margin-right: 0;
        margin-bottom: 26px;
        max-width: 100%;
      }

      & > *:last-child {
        margin-left: 0;
        max-width: 100%;
      }
    }
  }

  .required {
    color: #a92801;
  }
`;

const StyledField = styled(Field)`
  font-family: "Space Grotesk", sans-serif;
  padding: 8px;
  box-sizing: border-box;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
