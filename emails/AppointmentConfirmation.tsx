import {
  Body,
  Button,
  Column,
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

interface AppointmentConfirmationProps {
  firstName: string;
  email: string;
  phone: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  referenceNumber: string;
  notes?: string;
  siteUrl: string;
}

export const AppointmentConfirmation: React.FC<AppointmentConfirmationProps> = ({
  firstName,
  email,
  phone,
  serviceName,
  preferredDate,
  preferredTime,
  referenceNumber,
  notes,
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
    <Preview>Your appointment request has been confirmed</Preview>
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
          <Text
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#0c1f16",
              margin: "0 0 24px 0",
              textAlign: "center",
              fontFamily: '"Playfair Display", serif',
            }}
          >
            Your Appointment Request Is Confirmed! ✓
          </Text>

          <Text style={{ fontSize: "16px", color: "#333", marginBottom: "20px" }}>
            Dear {firstName},
          </Text>

          <Text style={{ fontSize: "15px", color: "#666", lineHeight: "1.6", marginBottom: "24px" }}>
            Thank you for booking with Ekantik Physio. We have received your appointment request and our team will confirm your slot within 30 minutes during clinic hours.
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
            <Text style={{ fontSize: "14px", color: "#333", margin: "8px 0", fontWeight: "600" }}>
              📋 Service: {serviceName}
            </Text>
            <Text style={{ fontSize: "14px", color: "#333", margin: "8px 0", fontWeight: "600" }}>
              📅 Preferred Date: {preferredDate}
            </Text>
            <Text style={{ fontSize: "14px", color: "#333", margin: "8px 0", fontWeight: "600" }}>
              🕐 Preferred Time: {preferredTime}
            </Text>
            <Text style={{ fontSize: "14px", color: "#333", margin: "8px 0", fontWeight: "600" }}>
              📧 Your Email: {email}
            </Text>
            <Text style={{ fontSize: "14px", color: "#333", margin: "8px 0", fontWeight: "600" }}>
              📞 Your Phone: {phone}
            </Text>
            <Text style={{ fontSize: "14px", color: "#1b5e42", margin: "8px 0", fontWeight: "700" }}>
              📝 Reference: #{referenceNumber}
            </Text>
          </Section>

          <Heading style={{ fontSize: "18px", color: "#0c1f16", marginBottom: "16px" }}>
            What Happens Next
          </Heading>

          <Text style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}>
            1. Our team reviews your booking (within 30 mins)
          </Text>
          <Text style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}>
            2. We confirm your exact appointment slot via email
          </Text>
          <Text style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}>
            3. You'll receive a reminder 24 hours before your visit
          </Text>
          <Text style={{ fontSize: "14px", color: "#666", marginBottom: "24px" }}>
            4. Arrive 10 minutes early for your first appointment
          </Text>

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
              📍 14 Harley Street, Marylebone, London W1G 9PJ
            </Text>
            <Text style={{ fontSize: "14px", margin: "8px 0", fontWeight: "600" }}>
              📞 +44 20 7946 0821
            </Text>
            <Text style={{ fontSize: "14px", margin: "8px 0", fontWeight: "600" }}>
              ✉️ info@ekantikphysio.co.uk
            </Text>
            <Text style={{ fontSize: "14px", margin: "8px 0", fontWeight: "600" }}>
              🕐 Mon–Fri: 8am–7pm | Sat: 9am–5pm
            </Text>
          </Section>

          <Section style={{ textAlign: "center", marginBottom: "24px" }}>
            <Button
              href={`${siteUrl}/services`}
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
              View Our Services
            </Button>
          </Section>

          <Hr style={{ borderColor: "#e5e5e5", margin: "32px 0" }} />

          <Text style={{ fontSize: "12px", color: "#999", textAlign: "center", margin: "16px 0" }}>
            © 2025 Ekantik Physio. All Rights Reserved.
          </Text>
          <Text style={{ fontSize: "12px", color: "#999", textAlign: "center", margin: "8px 0" }}>
            This email was sent because you submitted an appointment request at ekantikphysio.co.uk
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default AppointmentConfirmation;
