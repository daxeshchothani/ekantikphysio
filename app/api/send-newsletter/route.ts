import { NextRequest, NextResponse } from "next/server";
import { sendWelcomeEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
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

    const result = await sendWelcomeEmail(email);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Failed to send welcome email. Please try again.",
          details: result.error,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Welcome email sent successfully. Check your inbox!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter email error:", error);
    return NextResponse.json(
      {
        error: "Failed to process newsletter subscription",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
