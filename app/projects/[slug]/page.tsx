import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/lib/site-data";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "프로젝트를 찾을 수 없음" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="page project-detail-page">
      <header className={`detail-hero accent-${project.accent} reveal`}>
        <div className="detail-navline">
          <div className="hero-breadcrumb"><Link href="/projects">Projects</Link><i>/</i><b>{project.title}</b></div>
          <span className={`status-pill status-${project.status}`}>{project.statusLabel}</span>
        </div>
        <p className="project-eyebrow">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="detail-oneliner">{project.oneLiner}</p>
        <div className="detail-meta-grid">
          <div><span>Period</span><b>{project.period}</b></div>
          <div><span>Affiliation</span><b>{project.affiliation}</b></div>
          <div><span>Role</span><b>{project.role}</b></div>
        </div>
      </header>

      <section className="detail-visual-wrap reveal delay-one">
        <ProjectVisual project={project} />
      </section>

      <section className="detail-intro-grid">
        <div><p className="mono-label">OVERVIEW</p><h2>프로젝트 한눈에 보기</h2></div>
        <div className="detail-summary"><p>{project.summary}</p><a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary"><Icon name="github"/> 저장소 보기 <Icon name="arrow"/></a></div>
      </section>

      <section className="detail-highlights" aria-labelledby="highlight-title">
        <div className="section-heading compact-heading"><div><p className="mono-label">WHAT I BUILT</p><h2 id="highlight-title">핵심 구현</h2></div></div>
        <ol>{project.highlights.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
      </section>

      <section className="story-grid" aria-label="프로젝트 과정">
        <article><p className="mono-label">01 / PROBLEM</p><h2>문제</h2><p>{project.problem}</p></article>
        <article><p className="mono-label">02 / APPROACH</p><h2>접근</h2><p>{project.approach}</p></article>
        <article><p className="mono-label">03 / OUTCOME</p><h2>결과</h2><p>{project.outcome}</p></article>
      </section>

      <section className="learning-note">
        <div className="learning-mark"><Icon name="book"/><span>NOTE</span></div>
        <div><p className="mono-label">WHAT I LEARNED</p><h2>이 프로젝트가 남긴 것</h2><p>{project.learning}</p></div>
      </section>

      <section className="detail-bottom-grid">
        <div><p className="mono-label">STACK</p><h2>사용 기술</h2><div className="large-tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
        <div><p className="mono-label">COURSE CONNECTION</p><h2>수업 내용 연결</h2><ul>{project.coursePoints.map((item) => <li key={item}><Icon name="check"/>{item}</li>)}</ul></div>
      </section>

      <nav className="next-project" aria-label="다음 프로젝트">
        <span>NEXT PROJECT</span>
        <Link href={`/projects/${nextProject.slug}`}><b>{nextProject.title}</b><Icon name="arrow"/></Link>
      </nav>
    </article>
  );
}
