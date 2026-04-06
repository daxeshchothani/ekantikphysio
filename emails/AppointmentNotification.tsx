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

interface AppointmentNotificationProps {
  fullName: string;
  email: string;
  phone: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  referenceNumber: string;
  heardFrom: string;
  submittedAt: string;
  notes?: string;
}

export const AppointmentNotification: React.FC<AppointmentNotificationProps> = ({
  fullName,
  email,
  phone,
  serviceName,
  preferredDate,
  preferredTime,
  referenceNumber,
  heardFrom,
  submittedAt,
  notes,
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
    <Preview>New appointment request from {fullName}</Preview>
    <Body style={{ backgroundColor: "#f4f8f5", fontFamily: '"DM Sans", sans-serif' }}>
      <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <Section style={{ backgroundColor: "white", borderRadius: "8px", padding: "32px" }}>
          <Heading style={{ fontSize: "24px", color: "#0c1f16", marginBottom: "12px" }}>
            🔔 New Appointment Request — Action Required
          </Heading>

          <Section
            style={{
              backgroundColor: "#fff3cd",
              border: "1px solid #ffc107",
              padding: "12px 16px",
              borderRadius: "6px",
              marginBottom: "24px",
            }}
          >
            <Text style={{ fontSize: "14px", color: "#856404", fontWeight: "bold", margin: "0" }}>
              ⏰ NEW BOOKING — Please confirm within 30 minutes
            </Text>
          </Section>

          <Heading style={{ fontSize: "16px", color: "#333", marginTop: "24px", marginBottom: "12px" }}>
            Patient Details
          </Heading>
          <Section style={{ backgroundColor: "#f9f9f9", padding: "16px", borderRadius: "6px", marginBottom: "16px" }}>
            <Row style={{ marginBottom: "8px" }}>
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "600", margin: "0", width: "120px" }}>
                Full Name:
              </Text>
              <Text style={{ fontSize: "14px", color: "#666", margin: "0" }}>{fullName}</Text>
            </Row>
            <Row style={{ marginBottom: "8px" }}>
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "600", margin: "0", width: "120px" }}>
                Email:
              </Text>
              <Text style={{ fontSize: "14px", color: "#666", margin: "0" }}>{email}</Text>
            </Row>
            <Row style={{ marginBottom: "8px" }}>
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "600", margin: "0", width: "120px" }}>
                Phone:
              </Text>
              <Text style={{ fontSize: "14px", color: "#666", margin: "0" }}>{phone}</Text>
            </Row>
            <Row style={{ marginBottom: "0" }}>
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "600", margin: "0", width: "120px" }}>
                Heard From:
              </Text>
              <Text style={{ fontSize: "14px", color: "#666", margin: "0" }}>{heardFrom}</Text>
            </Row>
          </Section>

          <Heading style={{ fontSize: "16px", color: "#333", marginTop: "24px", marginBottom: "12px" }}>
            Appointment Details
          </Heading>
          <Section style={{ backgroundColor: "#f9f9f9", padding: "16px", borderRadius: "6px", marginBottom: "16px" }}>
            <Row style={{ marginBottom: "8px" }}>
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "600", margin: "0", width: "120px" }}>
                Service:
              </Text>
              <Text style={{ fontSize: "14px", color: "#666", margin: "0" }}>{serviceName}</Text>
            </Row>
            <Row style={{ marginBottom: "8px" }}>
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "600", margin: "0", width: "120px" }}>
                Date:
              </Text>
              <Text style={{ fontSize: "14px", color: "#666", margin: "0" }}>{preferredDate}</Text>
            </Row>
            <Row style={{ marginBottom: "8px" }}>
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "600", margin: "0", width: "120px" }}>
                Time:
              </Text>
              <Text style={{ fontSize: "14px", color: "#666", margin: "0" }}>{preferredTime}</Text>
            </Row>
            <Row style={{ marginBottom: "8px" }}>
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "600", margin: "0", width: "120px" }}>
                Reference #:
              </Text>
              <Text style={{ fontSize: "14px", color: "#1b5e42", fontWeight: "bold", margin: "0" }}>
                {referenceNumber}
              </Text>
            </Row>
            <Row style={{ marginBottom: "0" }}>
              <Text style={{ fontSize: "14px", color: "#333", fontWeight: "600", margin: "0", width: "120px" }}>
                Submitted:
              </Text>
              <Text style={{ fontSize: "14px", color: "#666", margin: "0" }}>{submittedAt}</Text>
            </Row>
          </Section>

          {notes && (
            <>
              <Heading style={{ fontSize: "16px", color: "#333", marginTop: "24px", marginBottom: "12px" }}>
                Patient Notes
              </Heading>
              <Section style={{ backgroundColor: "#fff8e1", padding: "16px", borderRadius: "6px", marginBottom: "24px", borderLeft: "4px solid #f5a623" }}>
                <Text style={{ fontSize: "14px", color: "#666", margin: "0", fontStyle: "italic" }}>
                  "{notes}"
                </Text>
              </Section>
            </>
          )}

          <Section style={{ textAlign: "center", display: "flex", gap: "12px", justifyContent: "center" }}>
            <Button
              href={`mailto:${email}`}
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
              Reply to Patient
            </Button>
            <Button
              href={`tel:${phone}`}
              style={{
                backgroundColor: "#f5a623",
                color: "#000",
                padding: "12px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px",
                display: "inline-block",
              }}
            >
              Call Patient
            </Button>
          </Section>

          <Hr style={{ borderColor: "#e5e5e5", margin: "24px 0" }} />

          <Text style={{ fontSize: "12px", color: "#999", textAlign: "center", margin: "0" }}>
            This notification was generated automatically by the Ekantik Physio booking system.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default AppointmentNotification;
