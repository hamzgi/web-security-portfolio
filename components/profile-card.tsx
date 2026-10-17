import { Icon } from "@/components/icon";
import { siteProfile } from "@/lib/site-data";

export function ProfileCard() {
  return (
    <aside className="profile-card" aria-label="프로필 요약">
      <div className="profile-photo-slot">
        <div className="profile-photo-inner">
          <Icon name="camera" />
          <strong>PHJ</strong>
          <span>PROFILE PHOTO</span>
        </div>
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
