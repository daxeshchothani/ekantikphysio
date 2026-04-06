import * as dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables BEFORE importing email functions
dotenv.config({ path: path.join(__dirname, "../.env.local") });

import {
  sendAppointmentEmails,
  sendContactEmails,
  sendWelcomeEmail,
  generateReference,
} from "../lib/email.js";

async function runEmailTests() {
  console.log("🚀 Ekantik Physio Email Test Suite");
  console.log("Test target:", process.env.TEST_EMAIL);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  let passedTests = 0;
  let failedTests = 0;

  // Test 1: Appointment Emails
  console.log("📅 Test 1: Sending appointment confirmation + clinic notification...");
  try {
    const result = await sendAppointmentEmails({
      fullName: "Test Patient",
      email: process.env.TEST_EMAIL || "info@ekantikphysio.co.uk",
      phone: "+44 7700 900123",
      serviceName: "Sports Injury Rehabilitation",
      preferredDate: "2025-06-15",
      preferredTime: "10:00 AM",
      referenceNumber: generateReference(),
      heardFrom: "Google Search",
      notes: "Test appointment for email verification",
      submittedAt: new Date().toLocaleString("en-GB", { timeZone: "Europe/London" }),
    });

    if (result.success) {
      console.log("✅ Appointment emails sent successfully\n");
      passedTests++;
    } else {
      console.log("❌ Failed:", result.error, "\n");
      failedTests++;
    }
  } catch (error) {
    console.log("❌ Error:", error instanceof Error ? error.message : "Unknown error", "\n");
    failedTests++;
  }

  // Test 2: Contact Emails
  console.log("📨 Test 2: Sending contact form confirmation + clinic notification...");
  try {
    const result = await sendContactEmails({
      fullName: "Test Contact",
      email: process.env.TEST_EMAIL || "info@ekantikphysio.co.uk",
      phone: "+44 7700 900123",
      message: "This is a test message for email verification.",
      submittedAt: new Date().toLocaleString("en-GB", { timeZone: "Europe/London" }),
    });

    if (result.success) {
      console.log("✅ Contact emails sent successfully\n");
      passedTests++;
    } else {
      console.log("❌ Failed:", result.error, "\n");
      failedTests++;
    }
  } catch (error) {
    console.log("❌ Error:", error instanceof Error ? error.message : "Unknown error", "\n");
    failedTests++;
  }

  // Test 3: Newsletter Welcome
  console.log("📧 Test 3: Sending newsletter welcome email...");
  try {
    const result = await sendWelcomeEmail(
      process.env.TEST_EMAIL || "info@ekantikphysio.co.uk"
    );

    if (result.success) {
      console.log("✅ Welcome email sent successfully\n");
      passedTests++;
    } else {
      console.log("❌ Failed:", result.error, "\n");
      failedTests++;
    }
  } catch (error) {
    console.log("❌ Error:", error instanceof Error ? error.message : "Unknown error", "\n");
    failedTests++;
  }

  // Summary
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`Tests passed: ${passedTests}/3`);
  console.log(`Tests failed: ${failedTests}/3\n`);

  if (passedTests === 3) {
    console.log("✅ All tests passed!");
    console.log(`✉️ Check ${process.env.TEST_EMAIL} for test emails!`);
    console.log(
      "📋 Preview templates at: http://localhost:3000/api/preview-email?template=appointment-confirmation\n"
    );
  } else {
    console.log(
      "⚠️ Some tests failed. Check your RESEND_API_KEY and environment variables.\n"
    );
  }
}

runEmailTests().catch(console.error);
