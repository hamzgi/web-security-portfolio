"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";

export function CopyHandle({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" className="copy-button" onClick={copy} aria-live="polite">
      <Icon name={copied ? "check" : "copy"} />
      {copied ? "복사됨" : "핸들 복사"}
    </button>
  );
}
