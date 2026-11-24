import { track } from "@vercel/analytics";

export type TelemetryEventName =
  | "scroll_depth"
  | "bottleneck_clicked"
  | "case_study_switched"
  | "workflow_trace_run"
  | "field_diagram_opened"
  | "copy_chore_clicked"
  | "linkedin_cta_clicked"
  | "email_drawer_opened"
  | "cta_clicked";

export type TelemetryPayload = Record<string, string | number | boolean | null>;

const PRO_EVENTS_ENABLED =
  process.env.NEXT_PUBLIC_VERCEL_PRO_EVENTS === "true";

export function trackEngagement(
  event: TelemetryEventName,
  properties: TelemetryPayload = {}
): void {
  if (typeof window === "undefined") return;

  const route = window.location.pathname || "/";
  const body = JSON.stringify({
    event,
    route,
    properties,
    ts: Date.now(),
  });

  try {
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon("/api/telemetry", blob);
    } else {
      void fetch("/api/telemetry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      });
    }
  } catch {
    // Non-blocking telemetry: never interrupt user interaction
  }

  if (PRO_EVENTS_ENABLED) {
    try {
      track(event, { route, ...properties });
    } catch {
      // Ignore if Pro custom events are unavailable
    }
  }
}
