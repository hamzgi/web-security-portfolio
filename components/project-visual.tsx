import type { Project } from "@/lib/site-data";

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${project.visual} ${compact ? "project-visual-compact" : ""}`} aria-hidden="true">
      <div className="visual-window-bar">
        <span /><span /><span />
        <b>{project.visual === "compass" ? "cluster.local" : project.visual === "policy" ? "policy.report" : project.visual === "gitops" ? "sync.status" : "posts.table"}</b>
      </div>
      {project.visual === "compass" && <CompassVisual />}
      {project.visual === "policy" && <PolicyVisual />}
      {project.visual === "gitops" && <GitOpsVisual />}
      {project.visual === "board" && <BoardVisual />}
    </div>
  );
}

function CompassVisual() {
  return (
    <div className="compass-canvas">
      <div className="visual-side-rail"><i /><i /><i /></div>
      <div className="visual-content">
        <div className="metric-row"><span><b>03</b>Namespace</span><span><b>08</b>Pod</span><span><b>04</b>Service</span></div>
        <div className="topology-map">
          <div className="map-node service-node"><small>SVC</small><b>web-gateway</b></div>
          <div className="map-line map-line-one" />
          <div className="map-node pod-node"><small>POD</small><b>api-7f8d</b></div>
          <div className="map-line map-line-two" />
          <div className="map-node account-node"><small>SA</small><b>app-reader</b></div>
        </div>
      </div>
    </div>
  );
}

function PolicyVisual() {
  return (
    <div className="policy-canvas">
      <div className="policy-heading"><span>KYVERNO / POLICY REPORT</span><b>Audit → Deny</b></div>
      <div className="policy-row"><i className="pass-dot"/><span>restricted-workload-security</span><b>PASS</b></div>
      <div className="policy-row"><i className="fail-dot"/><span>service-account-token</span><b>FAIL</b></div>
      <div className="policy-row"><i className="fail-dot"/><span>sensitive-service-account</span><b>FAIL</b></div>
      <div className="policy-command"><span>$</span> kubectl apply <em>→ Forbidden</em></div>
    </div>
  );
}

function GitOpsVisual() {
  return (
    <div className="gitops-canvas">
      <div className="gitops-stage"><small>01</small><b>Git push</b><span>main</span></div>
      <i>→</i>
      <div className="gitops-stage"><small>02</small><b>Argo CD</b><span>Synced</span></div>
      <i>→</i>
      <div className="gitops-stage"><small>03</small><b>Kubernetes</b><span>Healthy</span></div>
    </div>
  );
}

function BoardVisual() {
  return (
    <div className="board-canvas">
      <div className="board-title"><b>NoAI Board</b><span>+ 새 글</span></div>
      <div className="board-table-head"><span>번호</span><span>제목</span><span>작성자</span></div>
      {["RLS로 게시글 권한 나누기", "Supabase 로그인 연결", "첫 번째 게시글"].map((title, index) => (
        <div className="board-row" key={title}><span>0{index + 1}</span><b>{title}</b><span>user</span></div>
      ))}
    </div>
  );
}
