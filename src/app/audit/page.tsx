"use client";

import React, { useState } from "react";
import BottleneckMachine from "@/components/BottleneckMachine";
import { AuditContactBench } from "@/components/AuditContactBench";

export default function AuditPage() {
  const [choreDraft, setChoreDraft] = useState<string>("");
  const [emailSubject, setEmailSubject] = useState<string>(
    "15-Min AI Bottleneck Audit // Workflow Inquiry"
  );

  const handleSelectBottleneck = (summary: string, subject: string) => {
    setChoreDraft(summary);
    setEmailSubject(subject);
    const el = document.getElementById("contact-bench");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <BottleneckMachine onSelectChoreForContact={handleSelectBottleneck} />
      <AuditContactBench
        choreDraft={choreDraft}
        onChoreDraftChange={setChoreDraft}
        emailSubject={emailSubject}
        onEmailSubjectChange={setEmailSubject}
      />
    </>
  );
}
