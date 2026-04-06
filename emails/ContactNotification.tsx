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
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactNotificationProps {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
}

export const ContactNotification: React.FC<ContactNotificationProps> = ({
  fullName,
  email,
  phone,
  message,
  submittedAt,
}) => (
  <Html>
    <Head>
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
    <Preview>New contact form submission from {fullName}</Preview>
    <Body style={{ backgroundColor: "#f4f8f5", fontFamily: '"DM Sans", sans-serif' }}>
      <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <Section style={{ backgroundColor: "white", borderRadius: "8px", padding: "32px" }}>
          <Heading style={{ fontSize: "24px", color: "#0c1f16", marginBottom: "12px" }}>
            📨 New Contact Form Submission
          </Heading>

          <Heading style={{ fontSize: "16px", color: "#333", marginTop: "24px", marginBottom: "12px" }}>
            Sender Details
          </Heading>
          <Section style={{ backgroundColor: "#f9f9f9", padding: "16px", borderRadius: "6px", marginBottom: "16px" }}>
            <Row style={{ marginBottom: "8px" }}>
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "600", margin: "0", width: "100px" }}>
                Name:
              </Text>
              <Text style={{ fontSize: "14px", color: "#666", margin: "0" }}>{fullName}</Text>
            </Row>
            <Row style={{ marginBottom: "8px" }}>
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "600", margin: "0", width: "100px" }}>
                Email:
              </Text>
              <Text style={{ fontSize: "14px", color: "#666", margin: "0" }}>{email}</Text>
            </Row>
            <Row style={{ marginBottom: "8px" }}>
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "600", margin: "0", width: "100px" }}>
                Phone:
              </Text>
              <Text style={{ fontSize: "14px", color: "#666", margin: "0" }}>{phone}</Text>
            </Row>
            <Row style={{ marginBottom: "0" }}>
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "600", margin: "0", width: "100px" }}>
                Submitted:
              </Text>
              <Text style={{ fontSize: "14px", color: "#666", margin: "0" }}>{submittedAt}</Text>
            </Row>
          </Section>

          <Heading style={{ fontSize: "16px", color: "#333", marginTop: "24px", marginBottom: "12px" }}>
            Message
          </Heading>
          <Section style={{ backgroundColor: "#f9f9f9", padding: "16px", borderRadius: "6px", marginBottom: "24px" }}>
            <Text style={{ fontSize: "14px", color: "#333", margin: "0", lineHeight: "1.6" }}>
              {message}
            </Text>
          </Section>

          <Section style={{ textAlign: "center" }}>
            <Button
              href={`mailto:${email}?subject=Re: Your Ekantik Physio Inquiry`}
              style={{
                backgroundColor: "#0c1f16",
                color: "white",
                padding: "12px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px",
                display: "inline-block",
              }}
            >
              Reply to {fullName}
            </Button>
          </Section>

          <Hr style={{ borderColor: "#e5e5e5", margin: "24px 0" }} />

          <Text style={{ fontSize: "12px", color: "#999", textAlign: "center", margin: "0" }}>
            This notification was generated automatically by the Ekantik Physio contact system.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactNotification;
