import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import AppointmentConfirmation from "@/emails/AppointmentConfirmation";
import AppointmentNotification from "@/emails/AppointmentNotification";
import ContactConfirmation from "@/emails/ContactConfirmation";
import ContactNotification from "@/emails/ContactNotification";
import WelcomeNewsletter from "@/emails/WelcomeNewsletter";

const mockData = {
  firstName: "Daxesh",
  fullName: "Daxesh Chothani",
  email: "info@ekantikphysio.co.uk",
  phone: "+44 7700 900123",
  serviceName: "Sports Injury Rehabilitation",
  preferredDate: "2025-06-15",
  preferredTime: "10:00 AM",
  referenceNumber: "EKP-ABC123",
  heardFrom: "Google Search",
  notes: "I have been experiencing knee pain for 3 months after a football injury.",
  submittedAt: "15 June 2025, 09:32 AM",
  message: "Hello, I would like to enquire about physiotherapy services for my elderly mother who recently had a hip replacement.",
  siteUrl: "http://localhost:3000",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const template = searchParams.get("template");

  try {
    let html: string;

    switch (template) {
      case "appointment-confirmation":
        html = await render(
          AppointmentConfirmation({
            firstName: mockData.firstName,
            email: mockData.email,
            phone: mockData.phone,
            serviceName: mockData.serviceName,
            preferredDate: mockData.preferredDate,
            preferredTime: mockData.preferredTime,
            referenceNumber: mockData.referenceNumber,
            notes: mockData.notes,
            siteUrl: mockData.siteUrl,
          }) as React.ReactElement
        );
        break;

      case "appointment-notification":
        html = await render(
          AppointmentNotification({
            fullName: mockData.fullName,
            email: mockData.email,
            phone: mockData.phone,
            serviceName: mockData.serviceName,
            preferredDate: mockData.preferredDate,
            preferredTime: mockData.preferredTime,
            referenceNumber: mockData.referenceNumber,
            heardFrom: mockData.heardFrom,
            submittedAt: mockData.submittedAt,
            notes: mockData.notes,
          }) as React.ReactElement
        );
        break;

      case "contact-confirmation":
        html = await render(
          ContactConfirmation({
            firstName: mockData.firstName,
            email: mockData.email,
            message: mockData.message,
            siteUrl: mockData.siteUrl,
          }) as React.ReactElement
        );
        break;

      case "contact-notification":
        html = await render(
          ContactNotification({
            fullName: mockData.fullName,
            email: mockData.email,
            phone: mockData.phone,
            message: mockData.message,
            submittedAt: mockData.submittedAt,
          }) as React.ReactElement
        );
        break;

      case "welcome":
        html = await render(
          WelcomeNewsletter({
            email: mockData.email,
            siteUrl: mockData.siteUrl,
          }) as React.ReactElement
        );
        break;

      default:
        return NextResponse.json(
          {
            error: "Invalid template",
            available: [
              "appointment-confirmation",
              "appointment-notification",
              "contact-confirmation",
              "contact-notification",
              "welcome",
            ],
          },
          { status: 400 }
        );
    }

    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (error) {
    console.error("Email preview error:", error);
    return NextResponse.json(
      {
        error: "Failed to render email template",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
