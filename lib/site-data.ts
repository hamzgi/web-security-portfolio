export type ProjectStatus = "ongoing" | "completed" | "practice";

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  oneLiner: string;
  summary: string;
  period: string;
  status: ProjectStatus;
  statusLabel: string;
  affiliation: string;
  role: string;
  repoUrl: string;
  featured: boolean;
  accent: "teal" | "orange" | "blue" | "charcoal";
  visual: "compass" | "policy" | "gitops" | "board";
  stack: string[];
  highlights: string[];
  problem: string;
  approach: string;
  outcome: string;
  learning: string;
  coursePoints: string[];
};

export const siteProfile = {
  name: "박형진",
  englishName: "Park Hyungjin",
  handle: "@hamzgi",
  githubUrl: "https://github.com/hamzgi",
  email: "",
  role: "Security-focused Developer",
  intro:
    "Kubernetes의 복잡한 구조를 이해하기 쉬운 화면으로 바꾸고, 공격 흐름을 재현 가능한 방어 정책으로 전환하는 과정을 좋아합니다.",
  affiliations: ["화이트햇 스쿨 4기", "멋쟁이사자처럼 대학 14기"],
};

export const projects: Project[] = [
  {
    slug: "kubecompass",
    title: "KubeCompass",
    eyebrow: "01 · FEATURED / PERSONAL",
    oneLiner: "Kubernetes를 처음 만나는 사람을 위한 클러스터 관찰 대시보드",
    summary:
      "Namespace·Pod·Service·ServiceAccount의 관계를 지도처럼 보여 주고, 대표적인 보안 설정을 읽기 전용으로 점검합니다.",
    period: "2026.10 — 현재",
    status: "ongoing",
    statusLabel: "진행 중",
    affiliation: "멋쟁이사자처럼 · 개인 프로젝트",
    role: "기획 · 설계 · 풀스택 개발",
    repoUrl: "https://github.com/hamzgi/KubeCompass",
    featured: true,
    accent: "teal",
    visual: "compass",
    stack: ["Next.js", "TypeScript", "Go", "Gin", "client-go", "Kubernetes", "React Flow"],
    highlights: [
      "실제 Minikube 리소스 수를 읽는 웹·API 연결",
      "Namespace 안의 Service → Pod → ServiceAccount 관계 시각화",
      "privileged·리소스 제한·기본 ServiceAccount 3개 규칙 점검",
      "Secret 원문을 수집하지 않는 읽기 전용 설계",
    ],
    problem:
      "Kubernetes 초보자에게 kubectl 출력은 리소스가 서로 어떻게 연결되는지 설명해 주지 않습니다. 보안 설정도 위험 여부만 알려 주면 다음 행동으로 이어지기 어렵습니다.",
    approach:
      "Go API가 Kubernetes 메타데이터만 읽어 정규화하고, Next.js 대시보드가 익숙한 표현과 관계 그래프로 보여 주도록 분리했습니다. 보안 이슈에는 원인·영향·권장 조치와 수정 예시를 함께 제공합니다.",
    outcome:
      "클러스터 요약, 관계 지도, 보안 이슈 화면을 구현했고 Go 테스트·웹 린트·프로덕션 빌드로 기본 품질을 확인했습니다. 현재는 로컬·Minikube 중심 MVP를 다중 클러스터 구조로 확장하고 있습니다.",
    learning:
      "보안 도구의 신뢰는 더 많은 권한보다 명확한 경계에서 시작된다는 점을 배웠습니다. 그래서 시스템 Namespace와 Secret 값은 초기 수집 범위에서 제외했습니다.",
    coursePoints: ["Client Component", "비동기 데이터 흐름", "컴포넌트 재사용", "오류 상태 UI"],
  },
  {
    slug: "k8s-redteam-policy-lab",
    title: "K8s Red Team Policy Lab",
    eyebrow: "02 · FEATURED / TEAM",
    oneLiner: "공격 시나리오를 Kyverno 정책의 Audit→Deny 검증으로 전환",
    summary:
      "화이트햇스쿨 Kubernetes 레드티밍 팀 프로젝트에서 민감 ServiceAccount 지정과 토큰 재활성화 공격 단계를 방어 정책으로 검증했습니다.",
    period: "2026.09",
    status: "completed",
    statusLabel: "정책 검증 완료",
    affiliation: "화이트햇 스쿨 4기 · 팀 프로젝트",
    role: "Blue Team · Policy Engineering",
    repoUrl: "https://github.com/L3V3L-Z3R0/k8s-redteam-lab",
    featured: true,
    accent: "orange",
    visual: "policy",
    stack: ["Kubernetes", "Kyverno", "AWS EC2", "RBAC", "PolicyReport", "GitOps"],
    highlights: [
      "전용 Namespace로 실제 레드팀 환경과 영향 범위 분리",
      "Pod 보안·SA 토큰·민감 SA 지정 정책 3종 구성",
      "Deployment PATCH 직접 매칭 정책 2종 추가",
      "정상 기준과 공격 패턴을 Audit·Deny 양쪽에서 검증",
    ],
    problem:
      "공격자가 Pod 생성 권한을 얻은 뒤 민감한 ServiceAccount와 토큰 자동 마운트를 지정하면 권한이 확대될 수 있습니다. 운영 환경에 곧바로 차단 정책을 적용하면 정상 워크로드까지 멈출 위험도 있었습니다.",
    approach:
      "권한이 없는 테스트 ServiceAccount와 전용 Namespace만 사용해 공격 구조를 안전하게 재현했습니다. 먼저 Audit으로 정상·위반 결과를 분리하고, 이후 제한된 정책만 Deny로 바꿔 API 서버 차단을 확인했습니다.",
    outcome:
      "PolicyReport와 Event에서 위반을 기록하고, Pod 생성 및 Deployment PATCH가 Forbidden으로 거부되는 것을 확인했습니다. 검증 뒤 모든 정책을 Audit으로 복원해 운영 영향도 통제했습니다.",
    learning:
      "정책 상태만 믿지 않고 실제 API 요청으로 차단을 검증해야 했습니다. Kyverno autogen이 Deployment PATCH Deny를 보장하지 않은 사례를 발견해 직접 매칭 정책으로 보완했습니다.",
    coursePoints: ["보안 요구사항 모델링", "최소 권한", "실패 상태 검증", "민감정보 비노출"],
  },
  {
    slug: "whs-k8s-gitops",
    title: "WHS Kubernetes GitOps Lab",
    eyebrow: "03 · PRACTICE",
    oneLiner: "직접 구성한 다중 노드 클러스터에서 GitOps 흐름을 검증한 개인 실습",
    summary:
      "VMware 기반 Control Plane 1대와 Worker 2대 환경에서 Helm·Argo CD·Nginx 배포 흐름을 단계별로 기록했습니다.",
    period: "2026.08",
    status: "practice",
    statusLabel: "실습 기록",
    affiliation: "화이트햇 스쿨 · 개인 실습",
    role: "Infrastructure · GitOps",
    repoUrl: "https://github.com/hamzgi/WHS_K8S",
    featured: false,
    accent: "blue",
    visual: "gitops",
    stack: ["Kubernetes", "Helm", "Argo CD", "Calico", "VMware", "Nginx"],
    highlights: [
      "Control Plane 1대·Worker 2대 클러스터 운영",
      "Helm 기반 Argo CD 설치와 UI 연결",
      "Git 변경 → Argo CD → Nginx 리소스 반영 흐름 검증",
    ],
    problem:
      "팀 공용 환경에 작업을 올리기 전에 설치·동기화 과정을 반복해서 검증할 수 있는 안전한 개인 환경이 필요했습니다.",
    approach:
      "platform, apps, labs 영역을 분리하고 버전을 문서화했습니다. 작은 Nginx 배포와 replica 변경으로 Git의 선언 상태가 클러스터에 반영되는 과정을 확인했습니다.",
    outcome:
      "재현 가능한 개인 GitOps 실습 저장소와 기록 방식을 만들었고, 이후 팀 Kubernetes 프로젝트 작업의 사전 검증 환경으로 사용했습니다.",
    learning:
      "GitOps는 도구 설치보다 변경 범위, 동기화 경로, 롤백 기준을 명확히 하는 일이 더 중요했습니다.",
    coursePoints: ["Git 브랜치 흐름", "환경 분리", "비밀값 제외"],
  },
  {
    slug: "noai-board",
    title: "NoAI Board",
    eyebrow: "04 · COMPLETED",
    oneLiner: "바닐라 HTML·JavaScript와 Supabase로 완성한 회원제 게시판",
    summary:
      "프레임워크 없이 인증, 로그인 상태, 게시글 CRUD와 작성자 기반 접근 제어를 구현한 웹 기초 프로젝트입니다.",
    period: "2026.07",
    status: "completed",
    statusLabel: "완료",
    affiliation: "멋쟁이사자처럼 · 개인 과제",
    role: "Web Development",
    repoUrl: "https://github.com/hamzgi/NoAI_Board",
    featured: false,
    accent: "charcoal",
    visual: "board",
    stack: ["HTML", "JavaScript", "Supabase Auth", "PostgreSQL", "RLS"],
    highlights: [
      "이메일 회원가입·로그인·로그아웃",
      "게시글 목록·상세·작성·수정·삭제",
      "RLS로 본인 글만 수정·삭제하도록 제한",
    ],
    problem:
      "별도 백엔드 서버 없이도 인증과 데이터 권한이 있는 작은 게시판의 전체 흐름을 직접 구현해야 했습니다.",
    approach:
      "Supabase Auth와 posts 테이블을 연결하고, 공개 읽기·로그인 작성·작성자 수정/삭제 정책을 RLS로 분리했습니다.",
    outcome:
      "6개의 독립 HTML 화면에서 인증 상태와 CRUD 흐름을 완성했고, 비동기 로그인 확인과 목록 조회를 분리해 초기 지연도 줄였습니다.",
    learning:
      "버튼을 숨기는 UI 제어만으로는 권한을 보장할 수 없고, 데이터베이스 정책이 최종 경계가 되어야 한다는 점을 익혔습니다.",
    coursePoints: ["CRUD 흐름", "동적 상세 페이지", "인증과 인가 구분"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const courseHighlights = [
  {
    week: "03",
    title: "App Router",
    description: "페이지를 Home·About·Projects·Contact로 나누고 파일 기반 라우팅을 적용했습니다.",
  },
  {
    week: "04",
    title: "Dynamic Route",
    description: "하나의 템플릿으로 각 프로젝트 상세 경로를 생성하고 없는 항목은 not-found로 처리합니다.",
  },
  {
    week: "04–05",
    title: "Server + Client",
    description: "콘텐츠는 Server Component로, 필터와 복사처럼 상호작용이 필요한 부분만 Client Component로 분리했습니다.",
  },
  {
    week: "05",
    title: "Reusable UI",
    description: "프로젝트 카드·미리보기·상태 배지를 공통 컴포넌트와 데이터 모델로 재사용합니다.",
  },
  {
    week: "06–07",
    title: "Security Choices",
    description: "비밀값을 코드에 넣지 않고, 수집할 데이터가 없는 정적 사이트에는 DB와 인증을 추가하지 않았습니다.",
  },
  {
    week: "08",
    title: "Portfolio MVP",
    description: "실제 프로젝트 증거를 중심으로 반응형 포트폴리오 초안을 완성했습니다.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
