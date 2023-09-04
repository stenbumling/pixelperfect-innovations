import { ErrorMessage, Field, Form, Formik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

export interface FormValues {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  message: string;
}

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Please make sure your first name is at least 2 letters.")
    .max(200, "That's a bit too long. Try shortening it.")
    .required("No need to be shy. We're PixelPerfect, what's your name?"),
  lastName: Yup.string()
    .min(2, "Please make sure your last name is at least 2 letters.")
    .max(200, "That's a bit too long. Try shortening it.")
    .required(
      "To make this process a bit smoother, we also need your last name."
    ),
  company: Yup.string().max(200, "That's a bit too long. Try shortening it."),
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
    .min(10, "Please give us a bit more information.")
    .max(10000, "That's a bit too long. Try shortening it.")
    .required("Please write us a message, we'd love to hear from you!"),
});

export default function ContactSection() {
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
    console.log("Your message has been sent!");
    resetForm();
    setSubmitting(false);
  };

  return (
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
              company: "",
              email: "",
              message: "",
            }}
            validationSchema={schema}
            onSubmit={onSubmit}
          >
            <Form style={{ maxWidth: "1000px" }}>
              <ContactFormRow>
                <label>
                  <span>
                    First Name <span className="required">*</span>
                  </span>
                  <Field type="text" name="firstName" />
                  <ErrorMessage name="firstName" />
                </label>
                <label>
                  <span>
                    Last Name <span className="required">*</span>
                  </span>
                  <Field type="text" name="lastName" />
                  <ErrorMessage name="lastName" />
                </label>
              </ContactFormRow>
              <ContactFormRow>
                <label>
                  <span>Company</span>
                  <Field type="text" name="company" />
                  <ErrorMessage name="company" />
                </label>
              </ContactFormRow>
              <ContactFormRow>
                <label>
                  <span>
                    Email Address <span className="required">*</span>
                  </span>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" />
                </label>
              </ContactFormRow>
              <ContactFormRow>
                <label>
                  <span>
                    Message <span className="required">*</span>
                  </span>
                  <Field as="textarea" name="message" />
                  <ErrorMessage name="message" />
                </label>
              </ContactFormRow>
              <button type="submit">Send Message</button>
            </Form>
          </Formik>
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
