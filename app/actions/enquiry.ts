"use server";

export type EnquiryKind = "quote" | "contact";
export type EnquiryResult = { ok: true } | { ok: false; error: string };

const fieldsByKind: Record<EnquiryKind, { key: string; label: string; required?: boolean }[]> = {
  contact: [
    { key: "firstName", label: "First name", required: true },
    { key: "lastName", label: "Last name", required: true },
    { key: "email", label: "Email", required: true },
    { key: "phone", label: "Phone" },
    { key: "subject", label: "Subject", required: true },
    { key: "message", label: "Message", required: true },
  ],
  quote: [
    { key: "firstName", label: "First name", required: true },
    { key: "lastName", label: "Last name", required: true },
    { key: "email", label: "Email", required: true },
    { key: "phone", label: "Phone", required: true },
    { key: "company", label: "Company" },
    { key: "projectType", label: "Project type", required: true },
    { key: "budget", label: "Estimated budget", required: true },
    { key: "timeline", label: "Timeline", required: true },
    { key: "services", label: "Services needed", required: true },
    { key: "description", label: "About the project", required: true },
    { key: "additional", label: "Additional requirements" },
  ],
};

const MAX_LENGTH = 5000;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function sendEnquiry(kind: EnquiryKind, input: Record<string, string>): Promise<EnquiryResult> {
  // Bots fill the hidden "website" field; pretend it worked and drop the message.
  if (input.website) return { ok: true };

  const fields = fieldsByKind[kind];
  if (!fields) return { ok: false, error: "Unknown form." };

  const values: Record<string, string> = {};
  for (const field of fields) {
    const value = String(input[field.key] ?? "").trim().slice(0, MAX_LENGTH);
    if (field.required && !value) return { ok: false, error: `Please fill in "${field.label}".` };
    values[field.key] = value;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL ?? "The Octopus Labs <forms@theoctopuslabs.com>";
  if (!apiKey || !to) {
    console.error("sendEnquiry: RESEND_API_KEY or ENQUIRY_TO_EMAIL is not set");
    return { ok: false, error: "The form is not set up yet." };
  }

  const name = `${values.firstName} ${values.lastName}`;
  const subject =
    kind === "quote"
      ? `New quote request: ${name}${values.company ? ` (${values.company})` : ""}`
      : `New message: ${values.subject} – ${name}`;

  const filled = fields.filter((f) => values[f.key]);
  const text = filled.map((f) => `${f.label}:\n${values[f.key]}`).join("\n\n");
  const html = `
    <div style="font-family:Arial,sans-serif;color:#0f1b2d;max-width:640px">
      <h2 style="margin:0 0 16px">${escapeHtml(subject)}</h2>
      <table style="border-collapse:collapse;width:100%">
        ${filled
          .map(
            (f) => `<tr>
              <td style="padding:10px 12px;border-bottom:1px solid #e5e8ee;color:#586375;vertical-align:top;white-space:nowrap">${f.label}</td>
              <td style="padding:10px 12px;border-bottom:1px solid #e5e8ee;white-space:pre-wrap">${escapeHtml(values[f.key])}</td>
            </tr>`
          )
          .join("")}
      </table>
      <p style="margin-top:20px;color:#586375;font-size:13px">Reply to this email to answer ${escapeHtml(name)} directly.</p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: values.email, subject, text, html }),
    });
    if (!res.ok) {
      console.error("sendEnquiry: Resend responded", res.status, await res.text());
      return { ok: false, error: "We couldn't send your message right now." };
    }
    return { ok: true };
  } catch (err) {
    console.error("sendEnquiry: request failed", err);
    return { ok: false, error: "We couldn't send your message right now." };
  }
}
