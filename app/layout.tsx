import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "박형진 · Security Portfolio",
    template: "%s · 박형진",
  },
  description: "Kubernetes 보안, 웹 개발, 정책 검증 프로젝트를 기록한 박형진의 포트폴리오",
  keywords: ["박형진", "Kubernetes", "Web Security", "Next.js", "Portfolio", "Kyverno"],
  authors: [{ name: "박형진" }],
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
