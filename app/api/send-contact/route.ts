import { NextRequest, NextResponse } from "next/server";
import { sendContactEmails, type ContactEmailData } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, message } = body;

    // Validate required fields
    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!phone) missingFields.push("phone");
    if (!message) missingFields.push("message");

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

    const submittedAt = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
    });

    const emailData: ContactEmailData = {
      fullName: name,
      email,
      phone,
      message,
      submittedAt,
    };

    const result = await sendContactEmails(emailData);

    if (!result.success) {
      return NextResponse.json(
        {
          error:
            "Failed to send message. Please try again or call us directly.",
          details: result.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully. We will respond within 2–4 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      {
        error: "Failed to process contact request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
