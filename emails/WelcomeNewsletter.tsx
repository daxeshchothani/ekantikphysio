import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeNewsletterProps {
  email: string;
  siteUrl: string;
}

export const WelcomeNewsletter: React.FC<WelcomeNewsletterProps> = ({
  email,
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
    <Preview>Welcome to the Ekantik Physio community</Preview>
    <Body style={{ backgroundColor: "#f4f8f5", fontFamily: '"DM Sans", sans-serif' }}>
      <Section style={{ backgroundColor: "#0c1f16", padding: "32px 24px" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: "28px",
              fontWeight: "bold",
              margin: "0 0 8px 0",
              fontFamily: '"Playfair Display", serif',
            }}
          >
            Welcome to Ekantik Physio 🌿
          </Text>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "14px",
              margin: "0",
            }}
          >
            Your Community for Expert Recovery Guidance
          </Text>
        </Container>
      </Section>

      <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
        <Section style={{ backgroundColor: "white", borderRadius: "12px", padding: "0", overflow: "hidden" }}>
          <Img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
            alt="Physiotherapy"
            style={{ width: "100%", height: "auto", display: "block" }}
          />

          <Section style={{ padding: "40px" }}>
            <Heading
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#0c1f16",
                margin: "0 0 24px 0",
                fontFamily: '"Playfair Display", serif',
              }}
            >
              You're In! Here's What to Expect
            </Heading>

            <Text style={{ fontSize: "15px", color: "#666", lineHeight: "1.6", marginBottom: "24px" }}>
              Thank you for subscribing to Ekantik Physio updates. Every month we share expert physiotherapy tips, exercise guides, and recovery advice from our Harley Street team—delivered straight to your inbox.
            </Text>

            <Heading style={{ fontSize: "18px", color: "#0c1f16", marginBottom: "16px" }}>
              What You'll Receive
            </Heading>

            <Section style={{ display: "flex", justifyContent: "space-between", gap: "12px", marginBottom: "24px" }}>
              <Section
                style={{
                  flex: 1,
                  backgroundColor: "#f4f8f5",
                  padding: "16px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <Text style={{ fontSize: "20px", margin: "0 0 8px 0" }}>💪</Text>
                <Text
                  style={{
                    fontSize: "13px",
                    color: "#333",
                    fontWeight: "600",
                    margin: "0",
                  }}
                >
                  Exercise Guides
                </Text>
              </Section>
              <Section
                style={{
                  flex: 1,
                  backgroundColor: "#f4f8f5",
                  padding: "16px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <Text style={{ fontSize: "20px", margin: "0 0 8px 0" }}>🧠</Text>
                <Text
                  style={{
                    fontSize: "13px",
                    color: "#333",
                    fontWeight: "600",
                    margin: "0",
                  }}
                >
                  Pain Science Tips
                </Text>
              </Section>
              <Section
                style={{
                  flex: 1,
                  backgroundColor: "#f4f8f5",
                  padding: "16px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <Text style={{ fontSize: "20px", margin: "0 0 8px 0" }}>🏥</Text>
                <Text
                  style={{
                    fontSize: "13px",
                    color: "#333",
                    fontWeight: "600",
                    margin: "0",
                  }}
                >
                  Clinic News
                </Text>
              </Section>
            </Section>

            <Section
              style={{
                backgroundColor: "#fff8e1",
                border: "2px solid #f5a623",
                padding: "24px",
                borderRadius: "8px",
                marginBottom: "24px",
              }}
            >
              <Text
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#0c1f16",
                  margin: "0 0 12px 0",
                }}
              >
                🎁 Welcome Gift
              </Text>
              <Text style={{ fontSize: "14px", color: "#333", margin: "0 0 16px 0" }}>
                Download your free guide: <strong>"10 Daily Stretches for a Pain-Free Back"</strong>
              </Text>
              <Button
                href={siteUrl}
                style={{
                  backgroundColor: "#f5a623",
                  color: "#000",
                  padding: "12px 24px",
                  borderRadius: "24px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "14px",
                }}
              >
                Download Free Guide »
              </Button>
            </Section>

            <Section style={{ textAlign: "center", marginBottom: "24px" }}>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#999",
                  margin: "0 0 12px 0",
                }}
              >
                Follow us on social media
              </Text>
              <Section style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
                <Button
                  href="https://instagram.com/ekantikphysio"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#0c1f16",
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  f
                </Button>
                <Button
                  href="https://linkedin.com/company/ekantik-physio"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#0c1f16",
                    color: "white",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  in
                </Button>
              </Section>
            </Section>

            <Hr style={{ borderColor: "#e5e5e5", margin: "32px 0" }} />

            <Text
              style={{
                fontSize: "12px",
                color: "#999",
                textAlign: "center",
                margin: "16px 0",
              }}
            >
              © 2025 Ekantik Physio. All Rights Reserved.
            </Text>
            <Text
              style={{
                fontSize: "12px",
                color: "#999",
                textAlign: "center",
                margin: "8px 0 0 0",
              }}
            >
              You're receiving this because you subscribed at ekantikphysio.co.uk
            </Text>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WelcomeNewsletter;
