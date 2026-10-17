import type { Metadata } from "next";
import { CopyHandle } from "@/components/copy-handle";
import { Icon } from "@/components/icon";
import { siteProfile } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "연락처",
  description: "박형진의 GitHub와 연락 방법",
};

export default function ContactPage() {
  return (
    <div className="page inner-page contact-page">
      <header className="page-header reveal">
        <div className="hero-breadcrumb"><span>Portfolio</span><i>/</i><b>Contact</b></div>
        <p className="mono-label">LET&apos;S CONNECT</p>
        <h1>프로젝트와 배움에 관한<br/><em>좋은 대화를 기다립니다.</em></h1>
        <p>코드, Kubernetes 보안, 함께 검증해 보고 싶은 아이디어가 있다면 GitHub에서 만나요.</p>
      </header>

      <section className="contact-grid reveal delay-one">
        <a className="contact-primary" href={siteProfile.githubUrl} target="_blank" rel="noopener noreferrer">
          <div className="contact-icon"><Icon name="github"/></div>
          <div><span>GITHUB</span><h2>{siteProfile.handle}</h2><p>프로젝트 저장소와 학습 기록을 확인할 수 있습니다.</p></div>
          <Icon name="arrow" className="contact-arrow"/>
        </a>
        <div className="contact-secondary">
          <div className="contact-icon"><Icon name="mail"/></div>
          <div><span>EMAIL</span><h2>주소 추가 예정</h2><p>공개 범위를 정한 뒤 제출 전 연락용 이메일을 연결할 예정입니다.</p></div>
        </div>
      </section>

      <section className="contact-handle-row">
        <div><p className="mono-label">QUICK COPY</p><strong>{siteProfile.handle}</strong></div>
        <CopyHandle value={siteProfile.handle} />
      </section>

      <section className="contact-note">
        <Icon name="shield"/>
        <div><h2>연락처도 필요한 만큼만 공개합니다.</h2><p>이 사이트는 방문자 정보를 수집하지 않으며, 문의 폼과 외부 분석 스크립트를 사용하지 않습니다.</p></div>
      </section>
    </div>
  );
}
