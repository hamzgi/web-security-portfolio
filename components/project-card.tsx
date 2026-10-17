import Link from "next/link";
import { Icon } from "@/components/icon";
import { ProjectVisual } from "@/components/project-visual";
import type { Project } from "@/lib/site-data";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card accent-${project.accent} ${featured ? "project-card-featured" : ""}`}>
      {featured && <ProjectVisual project={project} compact />}
      <div className="project-card-body">
        <div className="project-card-topline">
          <span className={`status-pill status-${project.status}`}>{project.statusLabel}</span>
          <span>{project.period}</span>
        </div>
        <p className="project-eyebrow">{project.eyebrow}</p>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p className="project-oneliner">{project.oneLiner}</p>
        <p className="project-summary">{project.summary}</p>
        <div className="tag-list" aria-label="기술 스택">
          {project.stack.slice(0, featured ? 5 : 4).map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="project-card-footer">
          <span>{project.role}</span>
          <Link className="text-link" href={`/projects/${project.slug}`}>
            자세히 보기 <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </article>
  );
}
