import Link from "next/link";
import { Icon } from "@/components/icon";
import { ProfileCard } from "@/components/profile-card";
import { ProjectCard } from "@/components/project-card";
import { courseHighlights, featuredProjects, siteProfile } from "@/lib/site-data";

export default function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero-section reveal">
        <div className="hero-breadcrumb"><span>Portfolio</span><i>/</i><b>Overview</b></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="availability"><i /> BUILDING WITH EVIDENCE</div>
            <h1>
              복잡한 시스템을 읽고,<br />
              <em>검증 가능한 보안</em>으로 바꿉니다.
            </h1>
            <p className="hero-intro">{siteProfile.intro}</p>
            <div className="hero-actions">
              <Link href="/projects" className="button button-primary">
                프로젝트 보기 <Icon name="arrow" />
              </Link>
              <Link href="/about" className="button button-secondary">저에 대해</Link>
            </div>
            <div className="affiliation-line">
              <span>현재 소속</span>
              {siteProfile.affiliations.map((item) => <b key={item}>{item}</b>)}
            </div>
          </div>
          <ProfileCard />
        </div>
      </section>

      <section className="signal-strip reveal delay-one" aria-label="포트폴리오 요약">
        <div><strong>02</strong><span>주요 프로젝트</span></div>
        <div><strong>05</strong><span>검증한 Kyverno 정책</span></div>
        <div><strong>04</strong><span>정리한 프로젝트</span></div>
        <div className="signal-note"><span>Current focus</span><b>Kubernetes · DevSecOps · Web</b></div>
      </section>

      <section className="section reveal delay-two" aria-labelledby="featured-heading">
        <div className="section-heading">
          <div>
            <p className="mono-label">SELECTED WORK / 2026</p>
            <h2 id="featured-heading">지금 깊게 파고 있는 일</h2>
          </div>
          <Link href="/projects" className="text-link">전체 프로젝트 <Icon name="arrow" /></Link>
        </div>
        <div className="featured-projects">
          {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} featured />)}
        </div>
      </section>

      <section className="section work-principles" aria-labelledby="principles-heading">
        <div className="section-heading compact-heading">
          <div>
            <p className="mono-label">HOW I WORK</p>
            <h2 id="principles-heading">결과보다 과정을 남깁니다</h2>
          </div>
        </div>
        <div className="principle-grid">
          <article><span>01</span><Icon name="terminal"/><h3>재현 가능하게</h3><p>명령, 환경, 기대 결과를 함께 기록해 같은 검증을 다시 실행할 수 있게 만듭니다.</p></article>
          <article><span>02</span><Icon name="shield"/><h3>범위를 작게</h3><p>읽기 전용과 격리된 Namespace부터 시작해 실패했을 때의 영향도 함께 설계합니다.</p></article>
          <article><span>03</span><Icon name="book"/><h3>이해하기 쉽게</h3><p>도구 이름만 나열하지 않고 원인, 영향, 선택의 이유가 보이도록 설명합니다.</p></article>
        </div>
      </section>

      <section className="section course-section" aria-labelledby="course-heading">
        <div className="course-intro">
          <p className="mono-label">WEB SECURITY PROGRAMMING / WEEK 01—08</p>
          <h2 id="course-heading">배운 기술을 필요한 만큼만</h2>
          <p>
            포트폴리오에 실제로 도움이 되는 App Router, 동적 라우팅, 컴포넌트 분리와 보안 원칙을 적용했습니다.
            정적 소개 사이트에 필요하지 않은 DB와 로그인은 의도적으로 제외했습니다.
          </p>
        </div>
        <div className="course-list">
          {courseHighlights.map((item) => (
            <article key={`${item.week}-${item.title}`}>
              <span>W{item.week}</span>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-card">
        <div>
          <p className="mono-label">NEXT / KEEP BUILDING</p>
          <h2>좋은 보안은 설명할 수 있어야 한다고 믿습니다.</h2>
        </div>
        <Link href="/contact" className="button button-light">연락하기 <Icon name="arrow" /></Link>
      </section>
    </div>
  );
}
