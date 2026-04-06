import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactConfirmationProps {
  firstName: string;
  email: string;
  message: string;
  siteUrl: string;
}

export const ContactConfirmation: React.FC<ContactConfirmationProps> = ({
  firstName,
  email,
  message,
  siteUrl,
}) => (
  <Html>
    <Head>
      <Font
        fontFamily="Playfair Display"
        fallbackFontFamily="Georgia"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap",
          format: "woff2",
        }}
        fontWeight={700}
        fontStyle="normal"
      />
      <Font
        fontFamily="DM Sans"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
    </Head>
    <Preview>We received your message</Preview>
    <Body style={{ backgroundColor: "#f4f8f5", fontFamily: '"DM Sans", sans-serif' }}>
      <Section style={{ backgroundColor: "#0c1f16", padding: "24px" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Text
            style={{
              color: "white",
              fontSize: "28px",
              fontWeight: "bold",
              margin: "0",
              fontFamily: '"Playfair Display", serif',
            }}
          >
            Ekantik Physio
          </Text>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "14px",
              margin: "8px 0 0 0",
            }}
          >
            Feel Better. Move Freely. Live Fully.
          </Text>
        </Container>
      </Section>

      <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
        <Section style={{ backgroundColor: "white", borderRadius: "12px", padding: "40px" }}>
          <Heading
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#0c1f16",
              margin: "0 0 24px 0",
              fontFamily: '"Playfair Display", serif',
            }}
          >
            Thanks for Getting in Touch, {firstName}! 👋
          </Heading>

          <Text style={{ fontSize: "15px", color: "#666", lineHeight: "1.6", marginBottom: "24px" }}>
            We've received your message and will get back to you within 2–4 hours during clinic hours. Our team will review your inquiry and respond with personalized advice or solutions.
          </Text>

          <Section
            style={{
              backgroundColor: "#f4f8f5",
              borderLeft: "4px solid #1b5e42",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "24px",
            }}
          >
            <Text style={{ fontSize: "13px", color: "#666", margin: "0", fontWeight: "600" }}>
              Your message:
            </Text>
            <Text style={{ fontSize: "14px", color: "#333", margin: "12px 0 0 0", fontStyle: "italic", lineHeight: "1.6" }}>
              "{message}"
            </Text>
          </Section>

          <Section
            style={{
              backgroundColor: "#0c1f16",
              color: "white",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "24px",
            }}
          >
            <Text style={{ fontSize: "14px", margin: "8px 0", fontWeight: "600" }}>
              📞 +44 20 7946 0821
            </Text>
            <Text style={{ fontSize: "14px", margin: "8px 0", fontWeight: "600" }}>
              ✉️ info@ekantikphysio.co.uk
            </Text>
            <Text style={{ fontSize: "14px", margin: "8px 0", fontWeight: "600" }}>
              📍 14 Harley Street, Marylebone, London W1G 9PJ
            </Text>
          </Section>

          <Section style={{ textAlign: "center", marginBottom: "24px" }}>
            <Button
              href={`${siteUrl}/appointment`}
              style={{
                backgroundColor: "#f5a623",
                color: "#000",
                padding: "14px 32px",
                borderRadius: "24px",
                fontWeight: "bold",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "14px",
              }}
            >
              Book an Appointment
            </Button>
          </Section>

          <Hr style={{ borderColor: "#e5e5e5", margin: "32px 0" }} />

          <Text style={{ fontSize: "12px", color: "#999", textAlign: "center", margin: "16px 0" }}>
            © 2025 Ekantik Physio. All Rights Reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactConfirmation;
