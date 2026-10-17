import type { ReactNode } from "react";
import Link from "next/link";
import { MobileNavigation, SidebarNavigation } from "@/components/navigation";
import { Icon } from "@/components/icon";
import { siteProfile } from "@/lib/site-data";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">본문으로 건너뛰기</a>
      <SidebarNavigation />
      <MobileNavigation />
      <div className="page-column">
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          <div>
            <p className="footer-sign">{siteProfile.name} / SECURITY PORTFOLIO</p>
            <p>기록하고, 검증하고, 더 안전하게 만듭니다.</p>
          </div>
          <div className="footer-links">
            <Link href="/projects">프로젝트</Link>
            <a href={siteProfile.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub <Icon name="arrow" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
