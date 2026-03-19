import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadSchema } from "@/lib/validation";

const recipients = [
  "cadenwesleythompson@gmail.com",
  "kaeleemoody0214@gmail.com"
];

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.LEADS_FROM_EMAIL ?? "Higher Standard Health <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = leadSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please complete the required fields before continuing."
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (data.website) {
      return NextResponse.json({ success: true });
    }

    if (!resendApiKey) {
      return NextResponse.json(
        {
          error: "Email delivery is not configured yet. Add RESEND_API_KEY to enable submissions."
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const lines = [
      "New Higher Standard Health Lead",
      "",
      `Goal: ${data.goal}`,
      `Experience: ${data.experience}`,
      `Biggest Struggle: ${data.struggle}`,
      `Commitment Level: ${data.commitment}`,
      `Investment Fit ($60-$80/week): ${data.budget}`,
      "",
      `Full Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Occupation: ${data.occupation}`,
      `Age: ${data.age}`,
      "",
      "UTM Tracking",
      `utm_source: ${data.utmSource || "N/A"}`,
      `utm_medium: ${data.utmMedium || "N/A"}`,
      `utm_campaign: ${data.utmCampaign || "N/A"}`,
      `utm_content: ${data.utmContent || "N/A"}`,
      `utm_term: ${data.utmTerm || "N/A"}`
    ];

    await resend.emails.send({
      from: fromEmail,
      to: recipients,
      subject: "New Higher Standard Health Lead",
      replyTo: data.email,
      text: lines.join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;background:#0a0a0a;color:#f7f7f7;padding:24px;">
          <div style="max-width:640px;margin:0 auto;border:1px solid rgba(255,255,255,0.1);border-radius:20px;overflow:hidden;background:#121212;">
            <div style="padding:20px 24px;background:linear-gradient(135deg,#ff3131,#7a1111);">
              <p style="margin:0;font-size:12px;letter-spacing:0.35em;text-transform:uppercase;">Higher Standard Health</p>
              <h1 style="margin:8px 0 0;font-size:28px;line-height:1.1;">New Higher Standard Health Lead</h1>
            </div>
            <div style="padding:24px;">
              <h2 style="margin:0 0 12px;font-size:18px;color:#ff6b6b;text-transform:uppercase;">Quiz Answers</h2>
              <p><strong>Goal:</strong> ${escapeHtml(data.goal)}</p>
              <p><strong>Experience:</strong> ${escapeHtml(data.experience)}</p>
              <p><strong>Biggest Struggle:</strong> ${escapeHtml(data.struggle)}</p>
              <p><strong>Commitment Level:</strong> ${escapeHtml(data.commitment)}</p>
              <p><strong>Investment Fit ($60-$80/week):</strong> ${escapeHtml(data.budget)}</p>
              <hr style="border:none;border-top:1px solid rgba(255,255,255,0.12);margin:24px 0;" />
              <h2 style="margin:0 0 12px;font-size:18px;color:#ff6b6b;text-transform:uppercase;">Contact Details</h2>
              <p><strong>Full Name:</strong> ${escapeHtml(data.fullName)}</p>
              <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
              <p><strong>Phone:</strong> ${escapeHtml(data.phone || "Not provided")}</p>
              <p><strong>Occupation:</strong> ${escapeHtml(data.occupation)}</p>
              <p><strong>Age:</strong> ${escapeHtml(data.age)}</p>
              <hr style="border:none;border-top:1px solid rgba(255,255,255,0.12);margin:24px 0;" />
              <h2 style="margin:0 0 12px;font-size:18px;color:#ff6b6b;text-transform:uppercase;">UTM Tracking</h2>
              <p><strong>utm_source:</strong> ${escapeHtml(data.utmSource || "N/A")}</p>
              <p><strong>utm_medium:</strong> ${escapeHtml(data.utmMedium || "N/A")}</p>
              <p><strong>utm_campaign:</strong> ${escapeHtml(data.utmCampaign || "N/A")}</p>
              <p><strong>utm_content:</strong> ${escapeHtml(data.utmContent || "N/A")}</p>
              <p><strong>utm_term:</strong> ${escapeHtml(data.utmTerm || "N/A")}</p>
            </div>
          </div>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission failed", error);
    return NextResponse.json(
      {
        error: "Something went wrong while sending your details. Please try again."
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
