type MBTIDescription = {
  title: string;
  subtitle: string;
  catchphrase: string;
  description: string;
  emoji: string;
  imageUrl?: string;
  recommendedProducts?: Array<{
    name: string;
    url: string;
  }>;
};

export const mbtiDescriptions: Record<string, MBTIDescription> = {
  'ENFP': {
    title: '개성 넘치는 감성 브랜드',
    subtitle: '트렌드 리더형',
    catchphrase: '"우리는 평범한 쇼핑몰이 아니야! 브랜드 철학도 있다구!"',
    description: '• 감성적인 스토리텔링 마케팅\n• SNS에서 바이럴 마케팅\n• 유저 참여형 콘텐츠 제작',
    emoji: '✨',
    imageUrl: '/images/mbti/enfp.png',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'INTP': {
    title: '혁신적인 기술 기반 쇼핑몰',
    subtitle: '분석가형',
    catchphrase: '"가장 합리적인 쇼핑 경험을 제공합니다. 데이터가 증명합니다."',
    description: '• AI 추천 엔진, 자동 가격 비교\n• 리뷰 분석 기능이 뛰어남\n• 실험적인 UI/UX 시도 & 기술 중심 운영',
    emoji: '✨',
    imageUrl: '/images/mbti/intp.png',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'ENTP': {
    title: '혁신적이고 빠르게 변화하는 트렌드 헌터형',
    subtitle: '',
    catchphrase: '"새로운 게 최고야! 신제품? 트렌드? 우리가 먼저 한다!"',
    description: '• 초스피드 트렌드 반영\n• 유행하는 상품을 재빠르게 출시\n• 경쟁사 분석 & 공격적인 마케팅',
    emoji: '✨',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'ESFP': {
    title: '쇼핑이 곧 엔터테인먼트!',
    subtitle: '쇼핑몰 자체가 이벤트',
    catchphrase: '"쇼핑이 재미없으면 의미가 없지! 즐길 거리가 많아야 해!"',
    description: '• 라이브 커머스, 한정판 굿즈\n• 경품 이벤트가 많은 쇼핑몰\n• 고객 리뷰에 적극 참여 & 유저 콘텐츠 공유',
    emoji: '✨',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'ESTP': {
    title: '실용적이고 가성비 좋은 핫딜 전문 쇼핑몰',
    subtitle: '실용주의형',
    catchphrase: '"필요한 거 딱딱 골라서 최저가로 사세요! 가성비 갑!"',
    description: '• 핫딜, 타임세일, 한정수량 이벤트가 핵심 전략\n• 직관적인 UI/UX\n• 빠른 결제 & 쉬운 반품 시스템',
    emoji: '✨',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'INFJ': {
    title: '깊은 철학이 있는 감성 브랜드',
    subtitle: '신념형',
    catchphrase: '"우리 브랜드를 사랑하는 소수의 사람들을 위해 존재합니다."',
    description: '• 철학과 가치가 중요한 친환경\n• 윤리적 소비, 비건 브랜드\n• 조용한 SNS 운영, 브랜드 아이덴티티 확고',
    emoji: '✨',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'INTJ': {
    title: '최적화된 시스템 & 스마트한 쇼핑 경험',
    subtitle: '전략가형',
    catchphrase: '"우리는 데이터를 분석해서 최고의 쇼핑 경험을 제공합니다."',
    description: '• AI 추천 시스템\n• 자동화된 주문 & 고객 맞춤형 추천 서비스\n• 감성보다는 실용적인 제품 & 효율적인 사이트 구조',
    emoji: '✨',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'INFP': {
    title: '마니아층이 있는 감성 브랜드',
    subtitle: '예술가형',
    catchphrase: '"대중적인 것보다는, 우리만의 감성을 가진 사람들이 좋아할 브랜드."',
    description: '• 독특한 소품, 수제 공예품\n• 빈티지 스타일 쇼핑몰\n• 고객과 감성적인 소통을 중요하게 여김',
    emoji: '✨',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'ISTJ': {
    title: '철저한 품질 관리 & 정직한 운영',
    subtitle: '원칙주의형',
    catchphrase: '"우리는 오랜 신뢰를 기반으로 운영됩니다."',
    description: '• 정확한 제품 정보\n• 품질 인증, 신뢰할 수 있는 브랜드\n• 화려한 마케팅보다 오랜 고객 유지 & 정직한 운영',
    emoji: '✨',
    imageUrl: '/images/mbti/istj.png',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'ENTJ': {
    title: '강력한 리더십 & 브랜드 확장 지향',
    subtitle: '기업형',
    catchphrase: '"우리의 목표는 글로벌 쇼핑몰이 되는 것입니다!"',
    description: '• 적극적인 해외 진출\n• 브랜드 확장, 데이터 기반 성장 전략\n• 빠른 서비스 & 고객 응대 시스템 구축',
    emoji: '✨',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'ESTJ': {
    title: '체계적인 시스템 & 효율적인 쇼핑 경험',
    subtitle: '관리자형',
    catchphrase: '"빠르고 정확한 쇼핑몰 운영이 최우선!"',
    description: '• 정확한 재고 관리\n• 체계적인 고객 서비스\n• 철저한 배송 시스템\n• 직관적 UI/UX, 불필요한 디자인 최소화',
    emoji: '✨',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'ISTP': {
    title: '심플하고 실용적인 제품 중심 쇼핑몰',
    subtitle: '장인형',
    catchphrase: '"필요한 것만, 최적의 가격과 품질로 제공합니다."',
    description: '• 가전제품, 공구, 테크 액세서리 같은 실용적인 제품\n• 리뷰와 데이터를 기반으로 한 최고의 가성비 제품 추천',
    emoji: '✨',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'ESFJ': {
    title: '고객 친화적 & 커뮤니티 중심 쇼핑몰',
    subtitle: '친선도모형',
    catchphrase: '"고객과 함께하는 브랜드! 함께 성장하는 커뮤니티!"',
    description: '• 고객 맞춤 서비스\n• 멤버십 혜택, 친절한 응대\n• 고객 리뷰 적극 반영\n• 맞춤 추천 기능 제공',
    emoji: '✨',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'ISFJ': {
    title: '따뜻한 브랜드 철학 & 세심한 서비스',
    subtitle: '돌봄형',
    catchphrase: '"한 사람 한 사람을 위한 세심한 배려, 정성스러운 브랜드."',
    description: '• 고객 맞춤형 서비스\n• 장기적인 고객 신뢰 구축\n• 정성스러운 패키징\n• 수작업 제작 상품 판매',
    emoji: '✨',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'ENFJ': {
    title: '브랜드 스토리 & 라이프스타일 제안',
    subtitle: '리더형',
    catchphrase: '"이 쇼핑몰은 단순한 물건을 파는 곳이 아닙니다. 당신의 라이프스타일을 함께 만들어갑니다."',
    description: '• 브랜드 철학이 확고\n• 단순한 제품이 아니라 삶의 가치를 판매\n• 사회적 가치를 중요하게 여기는 브랜드 운영',
    emoji: '✨',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  },
  'ISFP': {
    title: '감각적인 디자인 & 예술적 감성 브랜드',
    subtitle: '예술가형',
    catchphrase: '"우리는 예술을 사랑하는 사람들을 위한 쇼핑몰입니다."',
    description: '• 핸드메이드 제품, 예술품\n• 감각적인 디자인의 상품\n• 시각적인 아름다움을 중시\n• 브랜드의 감성이 강한 편',
    emoji: '✨',
    recommendedProducts: [
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" },
      { name: "미니상품", url: "store.cafe24.com" }
    ]
  }
}; 