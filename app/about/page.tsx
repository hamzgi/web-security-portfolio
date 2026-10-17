import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { ProfileCard } from "@/components/profile-card";
import { siteProfile } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "소개",
  description: "박형진의 관심 분야, 소속, 기술과 작업 방식",
};

const timeline = [
  { date: "2026.10 — 현재", title: "KubeCompass", note: "초보자를 위한 Kubernetes 관찰·보안 대시보드 개발" },
  { date: "2026.09", title: "K8s Red Team Policy Lab", note: "Kyverno Audit→Deny 정책과 격리 검증 환경 담당" },
  { date: "2026.08", title: "Kubernetes GitOps Lab", note: "VMware 다중 노드 클러스터와 Argo CD 흐름 실습" },
  { date: "2026.07", title: "NoAI Board", note: "Supabase Auth·RLS 기반 회원제 게시판 완성" },
];

const skillGroups = [
  { label: "BUILD", items: ["Next.js", "TypeScript", "React", "Go", "HTML / CSS / JS"] },
  { label: "SECURE", items: ["Kubernetes", "Kyverno", "RBAC", "Web Security", "Policy Validation"] },
  { label: "OPERATE", items: ["Git / GitHub", "Argo CD", "Helm", "Minikube", "AWS EC2"] },
];

export default function AboutPage() {
  return (
    <div className="page inner-page">
      <header className="page-header reveal">
        <div className="hero-breadcrumb"><span>Portfolio</span><i>/</i><b>About</b></div>
        <p className="mono-label">PROFILE / ABOUT ME</p>
        <h1>안녕하세요.<br/><em>계속 확인하는 개발자</em> 박형진입니다.</h1>
        <p>{siteProfile.intro}</p>
      </header>

      <section className="about-lead reveal delay-one">
        <ProfileCard />
        <div className="about-story">
          <p className="dropcap">보안은 “막았다”는 말보다 무엇을, 왜, 어디까지 막았는지 증명하는 과정이라고 생각합니다.</p>
          <p>
            웹 개발에서 시작해 Kubernetes 인프라와 클라우드 보안으로 관심을 넓혔습니다. 공격 경로를 직접 따라가 보고,
            그 결과를 정책·화면·문서처럼 다른 사람이 다시 확인할 수 있는 형태로 바꾸는 작업에 특히 흥미가 있습니다.
          </p>
          <p>
            현재는 멋쟁이사자처럼에서 KubeCompass를 개발하고, 화이트햇스쿨 팀 프로젝트에서는 Kubernetes 레드티밍 시나리오의
            방어 정책을 설계·검증하고 있습니다.
          </p>
          <div className="about-actions">
            <Link href="/projects" className="button button-primary">프로젝트 보기 <Icon name="arrow"/></Link>
            <a href={siteProfile.githubUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary">
              GitHub <Icon name="github"/>
            </a>
          </div>
        </div>
      </section>

      <section className="section affiliations" aria-labelledby="affiliation-heading">
        <div className="section-heading compact-heading">
          <div><p className="mono-label">AFFILIATION</p><h2 id="affiliation-heading">배우고 있는 곳</h2></div>
        </div>
        <div className="affiliation-grid">
          <article><span>WHS</span><div><h3>화이트햇 스쿨 4기</h3><p>Kubernetes 보안 · 레드팀/블루팀 협업 · 정책 검증</p></div></article>
          <article><span>LIKELION</span><div><h3>멋쟁이사자처럼 대학 14기</h3><p>웹 개발 · 백엔드 기초 · 개인 프로젝트</p></div></article>
        </div>
      </section>

      <section className="section about-columns">
        <div className="timeline-block">
          <p className="mono-label">TIMELINE</p>
          <h2>최근의 기록</h2>
          <ol className="timeline">
            {timeline.map((item) => <li key={`${item.date}-${item.title}`}><time>{item.date}</time><div><h3>{item.title}</h3><p>{item.note}</p></div></li>)}
          </ol>
        </div>
        <div className="skills-block">
          <p className="mono-label">TOOLBOX</p>
          <h2>다루는 기술</h2>
          {skillGroups.map((group) => <div className="skill-group" key={group.label}><h3>{group.label}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
        </div>
      </section>
    </div>
  );
}
