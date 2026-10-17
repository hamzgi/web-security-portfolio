export default function ProjectsLoading() {
  return (
    <div className="page inner-page loading-page" aria-busy="true" aria-label="프로젝트 불러오는 중">
      <div className="skeleton skeleton-kicker" />
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-copy" />
      <div className="skeleton-card-grid"><div className="skeleton skeleton-card"/><div className="skeleton skeleton-card"/></div>
    </div>
  );
}
