"use client";

import React, { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  ExternalLink,
  Mail,
  MessageSquare,
} from "lucide-react";
import { trackEngagement } from "@/lib/analytics";

interface AuditContactBenchProps {
  choreDraft: string;
  onChoreDraftChange: (val: string) => void;
  emailSubject: string;
  onEmailSubjectChange: (val: string) => void;
}

export function AuditContactBench({
  choreDraft,
  onChoreDraftChange,
  emailSubject,
  onEmailSubjectChange,
}: AuditContactBenchProps) {
  const [showEmailDrawer, setShowEmailDrawer] = useState<boolean>(false);
  const [copiedNote, setCopiedNote] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const placeholderMessage =
    "Hi Kevin — here is the highest-drag manual workflow on our team right now:\n\n[Describe the weekly bottleneck in 1–2 sentences]";

  const messageToSend = choreDraft.trim() ? choreDraft : placeholderMessage;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(messageToSend);
    setCopiedNote(true);
    trackEngagement("copy_chore_clicked", { hasCustomDraft: Boolean(choreDraft.trim()) });
    setTimeout(() => setCopiedNote(false), 2500);
  };

  const handleCopyEmailAddress = () => {
    navigator.clipboard.writeText("kevin.sorani00@gmail.com");
    setCopiedEmail(true);
    trackEngagement("copy_chore_clicked", { target: "email_address" });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleToggleEmailDrawer = () => {
    setShowEmailDrawer((prev) => {
      const next = !prev;
      if (next) {
        trackEngagement("email_drawer_opened", { hasCustomDraft: Boolean(choreDraft) });
      }
      return next;
    });
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=kevin.sorani00@gmail.com&su=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(messageToSend)}`;

  const outlookComposeUrl = `https://outlook.office.com/mail/deeplink/compose?to=kevin.sorani00@gmail.com&subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(messageToSend)}`;

  return (
    <section id="contact-bench" className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="paper-card rounded-md p-6 sm:p-10 border-2 border-[#161618]">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#3D7A5A] bg-[#3D7A5A]/10 border border-[#3D7A5A]/30 px-3 py-1 rounded-sm mb-3 font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>[ 15-MINUTE AI BOTTLENECK AUDIT • ZERO SALES PITCH ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#161618] tracking-tight leading-[1.08] mb-3">
            Book a 15-Minute Bottleneck Audit.
          </h2>
          <p className="text-sm sm:text-base text-[#52504C] leading-relaxed mb-6">
            Send me the manual workflow costing your team the most hours. If your team can fix it in 10 minutes inside Claude or ChatGPT, I&apos;ll reply with the exact setup for free. If it needs a custom sprint or a half-day team workshop, we&apos;ll scope it in 15 minutes.
          </p>

          <div className="mb-5">
            <label
              htmlFor="chore-textarea"
              className="block text-[11px] uppercase tracking-wider text-[#52504C] mb-1.5 font-semibold"
            >
              Your Audit Brief (Auto-Filled From Calculator Above or Editable):
            </label>
            <textarea
              id="chore-textarea"
              rows={4}
              value={choreDraft}
              placeholder={placeholderMessage}
              onChange={(e) => onChoreDraftChange(e.target.value)}
              className="w-full p-4 rounded-sm bg-[#F4F0EA] border border-[#161618] text-sm sm:text-base text-[#161618] placeholder:text-[#52504C]/70 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={handleCopyMessage}
              className="inline-flex items-center justify-center gap-2 bg-[#161618] hover:bg-[#2A2A2E] text-[#F4F0EA] text-xs uppercase tracking-wider py-3.5 px-4 rounded-sm transition-colors font-semibold"
            >
              {copiedNote ? (
                <>
                  <Check className="w-4 h-4 text-[#3D7A5A]" />
                  <span>Brief Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Audit Brief</span>
                </>
              )}
            </button>

            <a
              href="https://www.linkedin.com/in/kevin-sorani-b70248312/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEngagement("linkedin_cta_clicked", { location: "audit_bench" })}
              className="inline-flex items-center justify-center gap-2 bg-[#FBF9F5] hover:bg-[#EAE3D5] text-[#161618] border border-[#161618] text-xs uppercase tracking-wider py-3.5 px-4 rounded-sm transition-colors font-semibold"
            >
              <span>Message on LinkedIn</span>
              <ExternalLink className="w-4 h-4 text-[#2563EB]" />
            </a>

            <button
              type="button"
              onClick={handleToggleEmailDrawer}
              className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F4F0EA] text-xs uppercase tracking-wider py-3.5 px-4 rounded-sm transition-colors font-semibold"
            >
              <Mail className="w-4 h-4" />
              <span>Send via Email</span>
              {showEmailDrawer ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {showEmailDrawer && (
            <div className="mt-5 pt-5 border-t border-[#D8D0C2] bg-[#F4F0EA] p-5 rounded-sm border border-[#161618]/20">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-4 items-center">
                <div className="sm:col-span-5">
                  <span className="block text-[11px] uppercase tracking-wider text-[#52504C] mb-1 font-semibold">
                    Send To (Direct):
                  </span>
                  <div className="flex items-center justify-between bg-[#FAF8F5] border border-[#161618]/30 px-3 py-2 rounded-sm text-xs sm:text-sm font-semibold text-[#161618]">
                    <span>kevin.sorani00@gmail.com</span>
                    <button
                      type="button"
                      onClick={handleCopyEmailAddress}
                      className="text-[11px] text-[#2563EB] hover:underline inline-flex items-center gap-1 ml-2"
                      title="Copy email address"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#3D7A5A]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="sm:col-span-7">
                  <label
                    htmlFor="email-subject-input"
                    className="block text-[11px] uppercase tracking-wider text-[#52504C] mb-1 font-semibold"
                  >
                    Subject Line (Auto-Generated &amp; Editable):
                  </label>
                  <input
                    id="email-subject-input"
                    type="text"
                    value={emailSubject}
                    onChange={(e) => onEmailSubjectChange(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#161618] px-3 py-2 rounded-sm text-xs sm:text-sm text-[#161618] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEngagement("cta_clicked", { location: "audit_gmail" })}
                  className="inline-flex items-center justify-center gap-2 bg-[#161618] hover:bg-[#2563EB] text-[#F4F0EA] text-xs uppercase tracking-wider py-3 px-4 rounded-sm transition-colors font-semibold"
                >
                  <Mail className="w-4 h-4 text-[#93C5FD]" />
                  <span>Open in Gmail (Pre-Filled)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={outlookComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEngagement("cta_clicked", { location: "audit_outlook" })}
                  className="inline-flex items-center justify-center gap-2 bg-[#FAF8F5] hover:bg-[#EAE3D5] text-[#161618] border border-[#161618] text-xs uppercase tracking-wider py-3 px-4 rounded-sm transition-colors font-semibold"
                >
                  <Mail className="w-4 h-4 text-[#2563EB]" />
                  <span>Open in Outlook (Pre-Filled)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
