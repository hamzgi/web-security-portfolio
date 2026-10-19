import Image from "next/image";
import { siteProfile } from "@/lib/site-data";

export function ProfileCard() {
  return (
    <aside className="profile-card" aria-label="프로필 요약">
      <div className="profile-photo-slot">
        <Image
          className="profile-photo-image"
          src="/images/profile-photo.jpg"
          alt="박형진 프로필 사진"
          fill
          sizes="(max-width: 760px) 100vw, 360px"
          priority
        />
      </div>
      <div className="profile-meta">
        <p className="mono-label">PROFILE / 001</p>
        <h2>{siteProfile.name}</h2>
        <p>{siteProfile.englishName}</p>
        <dl>
          <div><dt>Role</dt><dd>{siteProfile.role}</dd></div>
          <div><dt>Focus</dt><dd>K8s · Web Security</dd></div>
          <div><dt>Based</dt><dd>Seoul, KR</dd></div>
        </dl>
      </div>
    </aside>
  );
}
