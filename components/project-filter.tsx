"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project, ProjectStatus } from "@/lib/site-data";

type Filter = "all" | ProjectStatus;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "ongoing", label: "진행 중" },
  { value: "completed", label: "완료" },
  { value: "practice", label: "실습" },
];

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visibleProjects = useMemo(
    () => filter === "all" ? projects : projects.filter((project) => project.status === filter),
    [filter, projects],
  );

  return (
    <section aria-labelledby="project-list-heading">
      <div className="filter-bar">
        <div>
          <p className="mono-label">PROJECT DATABASE</p>
          <h2 id="project-list-heading">프로젝트 {String(visibleProjects.length).padStart(2, "0")}</h2>
        </div>
        <div className="filter-tabs" role="group" aria-label="프로젝트 상태 필터">
          {filters.map((item) => (
            <button
              type="button"
              key={item.value}
              onClick={() => setFilter(item.value)}
              aria-pressed={filter === item.value}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="project-list-grid" aria-live="polite">
        {visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
