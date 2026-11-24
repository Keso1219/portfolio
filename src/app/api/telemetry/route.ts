import { NextRequest, NextResponse } from "next/server";

const ALLOWED_EVENTS = new Set([
  "scroll_depth",
  "bottleneck_clicked",
  "case_study_switched",
  "workflow_trace_run",
  "field_diagram_opened",
  "copy_chore_clicked",
  "linkedin_cta_clicked",
  "email_drawer_opened",
  "cta_clicked",
]);

function sanitizeProps(input: unknown): Record<string, string | number | boolean | null> {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return {};
  }
  const out: Record<string, string | number | boolean | null> = {};
  const entries = Object.entries(input as Record<string, unknown>).slice(0, 8);
  for (const [key, value] of entries) {
    const cleanKey = key.slice(0, 40);
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean" ||
      value === null
    ) {
      out[cleanKey] = typeof value === "string" ? value.slice(0, 120) : value;
    }
  }
  return out;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      event?: unknown;
      route?: unknown;
      properties?: unknown;
    };

    if (typeof body.event !== "string" || !ALLOWED_EVENTS.has(body.event)) {
      return NextResponse.json({ ok: false, error: "invalid_event" }, { status: 400 });
    }

    const route =
      typeof body.route === "string" && body.route.startsWith("/")
        ? body.route.slice(0, 80)
        : "/";

    const payload = {
      type: "site_telemetry",
      event: body.event,
      route,
      properties: sanitizeProps(body.properties),
      country: request.headers.get("x-vercel-ip-country") || "unknown",
      ts: new Date().toISOString(),
    };

    // Structured JSON log captured by Vercel Runtime Logs (Hobby-compatible)
    console.log(JSON.stringify(payload));

    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ ok: false, error: "bad_payload" }, { status: 400 });
  }
}
