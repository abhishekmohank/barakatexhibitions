// Deploy with: supabase functions deploy submit-lead
//
// Required secrets (supabase secrets set NAME=value):
//   RESEND_API_KEY        - from resend.com, used to send the auto-reply
//   SUPABASE_URL           - auto-provided by Supabase at runtime
//   SUPABASE_ANON_KEY      - auto-provided by Supabase at runtime
// Optional secret:
//   LEAD_SHEET_WEBHOOK_URL - a webhook (e.g. a Google Apps Script Web App
//                            URL) that appends the lead to a spreadsheet.
//                            Leave unset until you have this link - leads
//                            are still saved to the `leads` table either way.
//
// Accepts either the floating popup's simple { email } payload, or the
// Contact page form's fuller { email, name, company, phone, subject,
// message } payload - both land in the same `leads` table.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { email, name, company, phone, subject, message } = await req.json();

    const hasEmail = typeof email === "string" && email.trim().length > 0;
    const hasPhone = typeof phone === "string" && phone.trim().length > 0;

    if (!hasEmail && !hasPhone) {
      return new Response(
        JSON.stringify({ error: "An email or phone number is required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (hasEmail && !emailPattern.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL"),
      Deno.env.get("SUPABASE_ANON_KEY")
    );

    const { error: insertError } = await supabase.from("leads").insert({
      email: hasEmail ? email : null,
      name: name || null,
      company: company || null,
      phone: phone || null,
      subject: subject || null,
      message: message || null,
    });

    if (insertError) throw insertError;

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey && hasEmail) {
      const greeting = name ? `Hi ${name},` : "Hi,";
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Shams Al Barakat Exhibitions <onboarding@resend.dev>",
          to: [email],
          subject: "Thank you for contacting us",
          html: `
            <p>${greeting}</p>
            <p>Thank you for contacting Shams Al Barakat Exhibitions - let's keep in touch!</p>
            <p>We've received your ${message ? "message" : "email"} and a member of our team will reach out to you soon.</p>
            <p>Best regards,<br />Shams Al Barakat Exhibitions LLC</p>
          `,
        }),
      }).catch((err) => console.error("Resend email failed:", err));
    }

    const sheetWebhookUrl = Deno.env.get("LEAD_SHEET_WEBHOOK_URL");
    if (sheetWebhookUrl) {
      await fetch(sheetWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          company,
          phone,
          subject,
          message,
          submitted_at: new Date().toISOString(),
        }),
      }).catch((err) => console.error("Sheet webhook failed:", err));
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
