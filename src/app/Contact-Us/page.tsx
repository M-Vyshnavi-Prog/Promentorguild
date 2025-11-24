"use client";

import { useState } from "react";
import {
  Page,
  Banner,
  BannerOverlay,
  Title,
  ContactSection,
  Container,
  FormContainer,
  FormTitle,
  Form,
  AddressContainer,
  AddrTitle,
  AddressBlock,
  EmailLink,
  FormButton,
  StatusMessage,
} from "./contactStyles";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <Page>
      <Banner>
        <BannerOverlay>
          <Title>Contact Us</Title>
        </BannerOverlay>
      </Banner>

      <ContactSection>
        <Container>
          <FormContainer>
            <FormTitle>Email Us</FormTitle>
            <Form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="7d2e859f-16f8-4a6e-9f8c-9b6c95d34e89" />

              <label htmlFor="fname">First Name *</label>
              <input type="text" id="fname" name="fname" placeholder="Your first name" required />

              <label htmlFor="lname">Last Name *</label>
              <input type="text" id="lname" name="lname" placeholder="Your last name" required />

              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Your message"></textarea>

              <button type="submit">Submit</button>

              {status === "sending" && <StatusMessage style={{ color: "#1e88e5" }}>Sending...</StatusMessage>}
              {status === "success" && <StatusMessage style={{ color: "#2e7d32" }}>Message sent successfully!</StatusMessage>}
              {status === "error" && <StatusMessage style={{ color: "#d32f2f" }}>Oops! Something went wrong.</StatusMessage>}
            </Form>
          </FormContainer>

          <AddressContainer>
            <AddrTitle>Apply Here</AddrTitle>
            <AddressBlock>
              <h3>Email Us</h3>
              <p>
                <EmailLink href="mailto:promentorguild@gmail.com">promentorguild@gmail.com</EmailLink>
              </p>
              <p>"Reach us by just one click"</p>
              <FormButton
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfvZVbr_YphfVQGGDJKeZiAmYFufp4EGxcadkmvZdAqyX-6-w/viewform",
                    "_blank"
                  )
                }
              >
                Fill Out Form
              </FormButton>
            </AddressBlock>
          </AddressContainer>
        </Container>
      </ContactSection>
    </Page>
  );
}
