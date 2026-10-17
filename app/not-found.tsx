import Link from "next/link";
import { Icon } from "@/components/icon";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <p className="mono-label">404 / NOT FOUND</p>
      <span className="not-found-code">404</span>
      <h1>이 페이지는 아직 기록되지 않았습니다.</h1>
      <p>주소를 다시 확인하거나 프로젝트 목록으로 돌아가 주세요.</p>
      <Link href="/projects" className="button button-primary">프로젝트로 돌아가기 <Icon name="arrow"/></Link>
    </div>
  );
}
