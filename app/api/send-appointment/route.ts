import { NextRequest, NextResponse } from "next/server";
import {
  sendAppointmentEmails,
  generateReference,
  type AppointmentEmailData,
} from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      serviceType,
      preferredDate,
      preferredTime,
      referralSource,
      notes,
    } = body;

    // Validate required fields
    const missingFields = [];
    if (!fullName) missingFields.push("fullName");
    if (!email) missingFields.push("email");
    if (!phone) missingFields.push("phone");
    if (!serviceType) missingFields.push("serviceType");
    if (!preferredDate) missingFields.push("preferredDate");
    if (!preferredTime) missingFields.push("preferredTime");

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          fields: missingFields,
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const referenceNumber = generateReference();
    const submittedAt = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
    });

    const emailData: AppointmentEmailData = {
      fullName,
      email,
      phone,
      serviceName: serviceType,
      preferredDate,
      preferredTime,
      referenceNumber,
      heardFrom: referralSource || "Not specified",
      notes,
      submittedAt,
    };

    const result = await sendAppointmentEmails(emailData);

    if (!result.success) {
      return NextResponse.json(
        {
          error:
            "Failed to send email. Please try again or call us directly at +44 20 7946 0821.",
          details: result.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        referenceNumber,
        message: "Appointment request sent successfully",
      },
      { status: 200, headers: { "X-RateLimit-Limit": "10" } }
    );
  } catch (error) {
    console.error("Appointment email error:", error);
    return NextResponse.json(
      {
        error: "Failed to process appointment request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
