import { render } from "@react-email/components";
import AppointmentConfirmation from "@/emails/AppointmentConfirmation";
import AppointmentNotification from "@/emails/AppointmentNotification";
import ContactConfirmation from "@/emails/ContactConfirmation";
import ContactNotification from "@/emails/ContactNotification";
import WelcomeNewsletter from "@/emails/WelcomeNewsletter";
import getResend from "./resend";

export interface AppointmentEmailData {
  fullName: string;
  email: string;
  phone: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  referenceNumber: string;
  heardFrom: string;
  notes?: string;
  submittedAt: string;
}

export interface ContactEmailData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
}

export function generateReference(): string {
  return (Math.floor(Math.random() * 900000) + 100000).toString().substring(0, 6);
}

export async function sendAppointmentEmails(
  data: AppointmentEmailData
): Promise<{ success: boolean; error?: string }> {
  try {
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
    const fromName = process.env.FROM_NAME || "Ekantik Physio";
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const clinicEmail = process.env.CLINIC_EMAIL || "info@ekantikphysio.co.uk";
    const testEmail = process.env.TEST_EMAIL || "info@ekantikphysio.co.uk";

    const firstName = data.fullName.split(" ")[0];

    const patientEmailHtml = await render(
      AppointmentConfirmation({
        firstName,
        email: data.email,
        phone: data.phone,
        serviceName: data.serviceName,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        referenceNumber: data.referenceNumber,
        notes: data.notes,
        siteUrl,
      }) as React.ReactElement
    );

    const clinicEmailHtml = await render(
      AppointmentNotification({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        serviceName: data.serviceName,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        referenceNumber: data.referenceNumber,
        heardFrom: data.heardFrom,
        submittedAt: data.submittedAt,
        notes: data.notes,
      }) as React.ReactElement
    );

    const [patientResult, clinicResult] = await Promise.all([
      getResend().emails.send({
        from: `${fromName} <${fromEmail}>`,
        to: data.email,
        subject: `Your Appointment Request Confirmed - Reference #${data.referenceNumber}`,
        html: patientEmailHtml,
        reply_to: "info@ekantikphysio.co.uk",
      }),
      getResend().emails.send({
        from: `${fromName} <${fromEmail}>`,
        to: testEmail,
        cc: clinicEmail,
        subject: `New Appointment Request - ${data.fullName} (#${data.referenceNumber})`,
        html: clinicEmailHtml,
        reply_to: data.email,
      }),
    ]);

    if (patientResult.error || clinicResult.error) {
      return {
        success: false,
        error: patientResult.error?.message || clinicResult.error?.message,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send appointment emails",
    };
  }
}

export async function sendContactEmails(
  data: ContactEmailData
): Promise<{ success: boolean; error?: string }> {
  try {
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
    const fromName = process.env.FROM_NAME || "Ekantik Physio";
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const testEmail = process.env.TEST_EMAIL || "info@ekantikphysio.co.uk";

    const firstName = data.fullName.split(" ")[0];

    const patientEmailHtml = await render(
      ContactConfirmation({
        firstName,
        email: data.email,
        message: data.message,
        siteUrl,
      }) as React.ReactElement
    );

    const clinicEmailHtml = await render(
      ContactNotification({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        submittedAt: data.submittedAt,
      }) as React.ReactElement
    );

    const [patientResult, clinicResult] = await Promise.all([
      getResend().emails.send({
        from: `${fromName} <${fromEmail}>`,
        to: data.email,
        subject: "We Received Your Message — Ekantik Physio",
        html: patientEmailHtml,
        reply_to: "info@ekantikphysio.co.uk",
      }),
      getResend().emails.send({
        from: `${fromName} <${fromEmail}>`,
        to: testEmail,
        subject: `Contact Form Submission - ${data.fullName}`,
        html: clinicEmailHtml,
        reply_to: data.email,
      }),
    ]);

    if (patientResult.error || clinicResult.error) {
      return {
        success: false,
        error: patientResult.error?.message || clinicResult.error?.message,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send contact emails",
    };
  }
}

export async function sendWelcomeEmail(
  email: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
    const fromName = process.env.FROM_NAME || "Ekantik Physio";
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const testEmail = process.env.TEST_EMAIL || "info@ekantikphysio.co.uk";

    const html = await render(
      WelcomeNewsletter({
        email,
        siteUrl,
      }) as React.ReactElement
    );

    const result = await getResend().emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: email,
      bcc: testEmail,
      subject: "Welcome to Ekantik Physio — Your Recovery Starts Here",
      html,
      reply_to: "info@ekantikphysio.co.uk",
    });

    if (result.error) {
      return {
        success: false,
        error: result.error.message,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send welcome email",
    };
  }
}
