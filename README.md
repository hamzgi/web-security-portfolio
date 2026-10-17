# 박형진 · Security Portfolio

웹보안프로그래밍 중간 과제를 위해 만든 Next.js 개인 포트폴리오입니다. KubeCompass와 화이트햇스쿨 Kubernetes 레드티밍 프로젝트를 중심으로, 확인 가능한 로컬 프로젝트 기록을 정리했습니다.

## 실행

```bash
npm install
npm run dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

## 검증

```bash
npm run typecheck
npm run lint
npm run build
```

## 수업 내용 적용 범위

- Next.js 16 App Router와 TypeScript
- 파일 기반 라우팅과 동적 프로젝트 상세 경로
- Server Component 중심 구성
- 프로젝트 필터와 연락처 복사에 Client Component 사용
- `loading.tsx`, `not-found.tsx`, 재사용 컴포넌트
- Tailwind CSS v4와 반응형 UI
- 외부 링크 보호, 비밀값 미포함, 최소 데이터 수집 원칙

MongoDB와 Auth.js는 정적 포트폴리오의 요구사항에 필요하지 않아 의도적으로 제외했습니다. 연락처 이메일과 프로필 사진은 `lib/site-data.ts`와 프로필 컴포넌트에서 나중에 교체할 수 있습니다.
