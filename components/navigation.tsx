"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon, type IconName } from "@/components/icon";
import { siteProfile } from "@/lib/site-data";

const navItems: { href: string; label: string; icon: IconName }[] = [
  { href: "/", label: "홈", icon: "home" },
  { href: "/about", label: "소개", icon: "user" },
  { href: "/projects", label: "프로젝트", icon: "folder" },
  { href: "/contact", label: "연락처", icon: "mail" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function NavList({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <nav aria-label="주요 메뉴" className="nav-list">
      <p className="nav-label">WORKSPACE</p>
      {navItems.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link ${active ? "nav-link-active" : ""}`}
            aria-current={active ? "page" : undefined}
            onClick={onNavigate}
          >
            <Icon name={item.icon} className="nav-icon" />
            <span>{item.label}</span>
            {active && <span className="nav-current" aria-hidden="true" />}
          </Link>
        );
      })}
    </nav>
  );
}

export function SidebarNavigation() {
  const pathname = usePathname();

  return (
    <aside className="desktop-sidebar">
      <Link href="/" className="brand-block" aria-label="포트폴리오 홈">
        <span className="brand-mark">PH</span>
        <span>
          <strong>{siteProfile.name}</strong>
          <small>security.log</small>
        </span>
      </Link>

      <NavList pathname={pathname} />

      <div className="sidebar-note">
        <p className="sidebar-note-kicker">NOW</p>
        <p>Kubernetes를 읽고, 보안 경계를 검증하고 있습니다.</p>
        <span><i /> Open to learn</span>
      </div>

      <div className="sidebar-footer">
        <span>Last updated</span>
        <strong>2026.10.18</strong>
      </div>
    </aside>
  );
}

export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="mobile-header">
        <Link href="/" className="mobile-brand" aria-label="포트폴리오 홈">
          <span className="brand-mark">PH</span>
          <strong>{siteProfile.name}</strong>
        </Link>
        <button
          type="button"
          className="icon-button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </header>
      {open && (
        <div className="mobile-drawer" role="dialog" aria-label="모바일 메뉴">
          <NavList pathname={pathname} onNavigate={() => setOpen(false)} />
          <div className="sidebar-note">
            <p className="sidebar-note-kicker">NOW</p>
            <p>Kubernetes를 읽고, 보안 경계를 검증하고 있습니다.</p>
          </div>
        </div>
      )}
    </>
  );
}
