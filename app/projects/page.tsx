import type { Metadata } from "next";
import { ProjectFilter } from "@/components/project-filter";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "프로젝트",
  description: "Kubernetes 보안과 웹 개발 프로젝트 모음",
};

export default function ProjectsPage() {
  return (
    <div className="page inner-page">
      <header className="page-header reveal projects-header">
        <div className="hero-breadcrumb"><span>Portfolio</span><i>/</i><b>Projects</b></div>
        <p className="mono-label">WORK INDEX / 2026</p>
        <h1>만들고, 공격해 보고,<br/><em>다시 안전하게 만든 것들.</em></h1>
        <p>완성된 결과뿐 아니라 문제를 정의하고 검증한 과정까지 함께 기록했습니다.</p>
      </header>
      <ProjectFilter projects={projects} />
    </div>
  );
}
