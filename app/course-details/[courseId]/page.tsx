"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"

interface Review {
  id: string
  userName: string
  userSchool: string
  rating: number
  date: string
  content: string
  isVerified: boolean
  helpfulCount: number
  tags: string[]
}

interface CommunityPost {
  id: string
  title: string
  content: string
  date: string
  likes: number
  comments: number
  category: string
}

interface CourseData {
  id: string
  title: string
  description: string
  fullDescription: string
  duration: string
  level: string
  price: string
  originalPrice: string
  rating: number
  studentCount: number
  badge: string
  badgeColor: string
  thumbnail: string
  instructor: {
    name: string
    title: string
    experience: string
    education: string[]
    achievements: string[]
    avatar: string
    community?: {
      followers: number
      posts: number
      likes: number
      bestPosts: CommunityPost[]
    }
  }
  curriculum: {
    week: number
    title: string
    description: string
    lessons: {
      title: string
      duration: string
      type: "video" | "assignment" | "quiz" | "project" | "mentoring"
    }[]
  }[]
  assignments: {
    title: string
    description: string
    difficulty: "초급" | "중급" | "고급"
    estimatedTime: string
    deliverables: string[]
    sespecExample: string
  }[]
  features: string[]
  requirements: string[]
  outcomes: string[]
  faq: {
    question: string
    answer: string
  }[]
  reviews?: Review[]
  bestReviews?: Review[]
}

export default function CourseDetailsPage() {
  const params = useParams()
  const courseId = params.courseId as string
  const [courseData, setCourseData] = useState<CourseData | null>(null)
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  useEffect(() => {
    const data = getCourseData(courseId)
    setCourseData(data)
  }, [courseId])

  const getCourseData = (id: string): CourseData | null => {
    const courses: { [key: string]: CourseData } = {
      "premium-ai": {
        id: "premium-ai",
        title: "AI 전문가 과정",
        description: "머신러닝부터 딥러닝까지, 실무 프로젝트 중심의 AI 전문가 양성 과정",
        fullDescription:
          "현재 가장 주목받는 AI 분야의 전문가로 성장할 수 있는 종합 과정입니다. 기초 이론부터 실무 프로젝트까지, 체계적인 커리큘럼을 통해 AI 개발자로서의 역량을 완성할 수 있습니다. 특히 생활기록부에 기록될 수 있는 의미있는 프로젝트 경험과 세특 문장 자동 생성 서비스를 제공합니다.",
        duration: "8주 과정",
        level: "중급-고급",
        price: "149,000원",
        originalPrice: "199,000원",
        rating: 4.9,
        studentCount: 127,
        badge: "인기",
        badgeColor: "bg-red-500",
        thumbnail: "/placeholder.svg?height=400&width=600",
        instructor: {
          name: "김민수 박사",
          title: "AI 연구소 수석 연구원",
          experience: "15년 AI/ML 연구 및 개발 경험",
          education: ["서울대학교 컴퓨터공학 박사", "KAIST 전산학 석사"],
          achievements: [
            "국제 AI 학회 논문 50편 이상 발표",
            "삼성전자 AI 연구소 팀장 역임",
            "교육부 AI 교육과정 개발 자문위원",
            "네이버 AI 해커톤 심사위원",
          ],
          avatar: "/placeholder.svg?height=100&width=100",
          community: {
            followers: 3247,
            posts: 156,
            likes: 8934,
            bestPosts: [
              {
                id: "1",
                title: "AI 분야 최신 트렌드와 전망",
                content:
                  "AI 분야에서 주목해야 할 최신 기술 동향과 향후 전망에 대해 전문가 관점에서 분석해보겠습니다...",
                date: "2024-03-15",
                likes: 342,
                comments: 28,
                category: "전문 지식",
              },
              {
                id: "2",
                title: "AI 학습자들이 자주 묻는 질문 TOP 10",
                content: "AI 강의를 진행하면서 학생들이 가장 많이 묻는 질문들을 정리해보았습니다...",
                date: "2024-03-10",
                likes: 287,
                comments: 19,
                category: "학습 가이드",
              },
            ],
          },
        },
        curriculum: [
          {
            week: 1,
            title: "AI 개요 및 머신러닝 기초",
            description: "AI의 기본 개념과 머신러닝 알고리즘을 학습합니다.",
            lessons: [
              { title: "AI 소개 및 역사", duration: "60분", type: "video" },
              { title: "머신러닝 기본 원리", duration: "75분", type: "video" },
              { title: "데이터 전처리 실습", duration: "90분", type: "assignment" },
            ],
          },
          {
            week: 2,
            title: "딥러닝 기초 및 신경망",
            description: "딥러닝의 기본 원리와 신경망 구조를 이해합니다.",
            lessons: [
              { title: "딥러닝 소개 및 역사", duration: "60분", type: "video" },
              { title: "인공 신경망 구조", duration: "75분", type: "video" },
              { title: "신경망 학습 실습", duration: "90분", type: "assignment" },
            ],
          },
        ],
        assignments: [
          {
            title: "AI 모델 개발 프로젝트",
            description: "머신러닝 및 딥러닝 모델을 개발하고 성능을 평가하는 프로젝트입니다.",
            difficulty: "중급",
            estimatedTime: "4주",
            deliverables: ["AI 모델", "성능 평가 보고서", "코드 설명"],
            sespecExample: "AI 모델 개발 프로젝트를 통해 머신러닝 및 딥러닝 모델 개발 역량을 기름.",
          },
        ],
        features: ["실무 프로젝트 중심 학습", "전문가 멘토링", "AI 개발 도구 지원", "취업 연계"],
        requirements: ["Python 프로그래밍", "선형대수학 기초", "통계학 기본 지식"],
        outcomes: ["AI 모델 개발 능력", "머신러닝 알고리즘 이해", "딥러닝 기술 활용"],
        faq: [
          {
            question: "AI 분야 비전공자도 수강 가능한가요?",
            answer: "네, AI에 대한 기본적인 이해만 있다면 누구나 수강 가능합니다.",
          },
        ],
        reviews: [
          {
            id: "review1",
            userName: "김학생",
            userSchool: "서울대학교",
            rating: 5,
            date: "2024-01-15",
            content:
              "AI 전문가 과정을 통해 실무 역량을 크게 향상시킬 수 있었습니다. 특히 프로젝트 중심의 학습이 매우 유익했어요.",
            isVerified: true,
            helpfulCount: 24,
            tags: ["AI", "실무", "프로젝트"],
          },
        ],
        bestReviews: [
          {
            id: "bestReview1",
            userName: "김학생",
            userSchool: "서울대학교",
            rating: 5,
            date: "2024-01-15",
            content:
              "AI 전문가 과정을 통해 실무 역량을 크게 향상시킬 수 있었습니다. 특히 프로젝트 중심의 학습이 매우 유익했어요.",
            isVerified: true,
            helpfulCount: 24,
            tags: ["AI", "실무", "프로젝트"],
          },
        ],
      },
      "naver-ai-bootcamp": {
        id: "naver-ai-bootcamp",
        title: "네이버 AI 부트캠프",
        description: "네이버 AI 연구소와 함께하는 실무 중심 AI 개발자 양성 프로그램",
        fullDescription:
          "네이버 AI 연구소의 현직 연구원들과 함께 실제 네이버 서비스에 적용되는 AI 기술을 학습하고, 실무 프로젝트를 통해 AI 개발자로서의 역량을 완성하는 프로그램입니다.",
        duration: "12주 과정",
        level: "고급",
        price: "299,000원",
        originalPrice: "399,000원",
        rating: 4.9,
        studentCount: 45,
        badge: "기업 연계",
        badgeColor: "bg-green-600",
        thumbnail: "/placeholder.svg?height=400&width=600",
        instructor: {
          name: "이네이버 박사",
          title: "네이버 AI 연구소 수석 연구원",
          experience: "12년 AI 연구 및 네이버 서비스 개발 경험",
          education: ["스탠포드대학교 AI 박사", "KAIST 전산학 석사"],
          achievements: [
            "네이버 검색 AI 알고리즘 개발 책임자",
            "NAVER LABS AI 연구 프로젝트 리더",
            "국제 AI 학회 논문 40편 이상",
            "네이버 AI 해커톤 총괄 책임자",
          ],
          avatar: "/placeholder.svg?height=100&width=100",
          community: {
            followers: 2847,
            posts: 134,
            likes: 7234,
            bestPosts: [
              {
                id: "1",
                title: "네이버 AI 기술의 현재와 미래",
                content: "네이버에서 실제로 사용되고 있는 AI 기술들과 앞으로의 발전 방향에 대해 소개합니다...",
                date: "2024-03-18",
                likes: 523,
                comments: 42,
                category: "기술 동향",
              },
              {
                id: "2",
                title: "AI 개발자가 되기 위한 실무 가이드",
                content: "네이버에서 AI 개발자로 일하면서 얻은 경험을 바탕으로 실무 가이드를 공유합니다...",
                date: "2024-03-12",
                likes: 387,
                comments: 31,
                category: "진로 가이드",
              },
            ],
          },
        },
        curriculum: [
          {
            week: 1,
            title: "네이버 AI 기술 개요",
            description: "네이버에서 사용되는 AI 기술들을 살펴봅니다.",
            lessons: [
              { title: "네이버 AI 서비스 소개", duration: "60분", type: "video" },
              { title: "검색 AI 알고리즘", duration: "75분", type: "video" },
              { title: "추천 시스템 분석", duration: "90분", type: "assignment" },
            ],
          },
          {
            week: 2,
            title: "자연어 처리 기술",
            description: "네이버의 자연어 처리 기술을 학습합니다.",
            lessons: [
              { title: "KoBERT 모델", duration: "60분", type: "video" },
              { title: "챗봇 개발", duration: "75분", type: "assignment" },
            ],
          },
        ],
        assignments: [
          {
            title: "네이버 서비스 AI 기능 개선 제안",
            description: "실제 네이버 서비스를 분석하고 AI 기술을 활용한 개선 방안을 제안하는 프로젝트입니다.",
            difficulty: "고급",
            estimatedTime: "4주",
            deliverables: ["서비스 분석 보고서", "AI 개선 방안", "프로토타입 개발"],
            sespecExample: "네이버 서비스 AI 기능 개선 제안을 통해 실무 중심의 AI 개발 역량을 기름.",
          },
        ],
        features: ["네이버 현직자 멘토링", "실제 서비스 데이터 활용", "인턴십 우선 선발", "네이버 AI 인증서"],
        requirements: ["Python 중급 이상", "머신러닝 기초 지식", "데이터 분석 경험"],
        outcomes: ["네이버 AI 기술 이해", "실무 프로젝트 경험", "네이버 인턴십 기회"],
        faq: [
          {
            question: "네이버 입사에 도움이 되나요?",
            answer: "우수 수료생에게는 네이버 인턴십 기회가 제공되며, 채용 과정에서 가산점이 있습니다.",
          },
        ],
        reviews: [
          {
            id: "review1",
            userName: "김네이버",
            userSchool: "서울대학교",
            rating: 5,
            date: "2024-02-15",
            content: "실제 네이버 서비스 데이터로 프로젝트를 진행할 수 있어서 정말 유익했습니다!",
            isVerified: true,
            helpfulCount: 35,
            tags: ["네이버", "실무", "데이터"],
          },
        ],
        bestReviews: [
          {
            id: "bestReview1",
            userName: "김네이버",
            userSchool: "서울대학교",
            rating: 5,
            date: "2024-02-15",
            content: "실제 네이버 서비스 데이터로 프로젝트를 진행할 수 있어서 정말 유익했습니다!",
            isVerified: true,
            helpfulCount: 35,
            tags: ["네이버", "실무", "데이터"],
          },
        ],
      },
      "kakao-tech-campus": {
        id: "kakao-tech-campus",
        title: "카카오 테크 캠퍼스",
        description: "카카오와 함께하는 풀스택 개발자 양성 프로그램",
        fullDescription:
          "카카오의 현직 개발자들과 함께 카카오톡, 카카오맵 등 실제 서비스 개발 경험을 쌓을 수 있는 풀스택 개발자 양성 프로그램입니다.",
        duration: "16주 과정",
        level: "중급-고급",
        price: "349,000원",
        originalPrice: "449,000원",
        rating: 4.8,
        studentCount: 67,
        badge: "풀스택",
        badgeColor: "bg-yellow-500",
        thumbnail: "/placeholder.svg?height=400&width=600",
        instructor: {
          name: "박카카오 팀장",
          title: "카카오 플랫폼개발팀 팀장",
          experience: "10년 카카오 서비스 개발 경험",
          education: ["KAIST 전산학 박사", "서울대학교 컴퓨터공학 석사"],
          achievements: [
            "카카오톡 메시징 시스템 아키텍처 설계",
            "카카오맵 실시간 데이터 처리 시스템 개발",
            "카카오 개발자 컨퍼런스 키노트 스피커",
            "오픈소스 프로젝트 10개 이상 기여",
          ],
          avatar: "/placeholder.svg?height=100&width=100",
          community: {
            followers: 3156,
            posts: 189,
            likes: 9234,
            bestPosts: [
              {
                id: "1",
                title: "카카오 서비스 아키텍처 설계 원칙",
                content: "대규모 사용자를 지원하는 카카오 서비스의 아키텍처 설계 원칙을 공유합니다...",
                date: "2024-03-20",
                likes: 678,
                comments: 54,
                category: "아키텍처",
              },
              {
                id: "2",
                title: "풀스택 개발자로 성장하는 방법",
                content: "카카오에서 풀스택 개발자로 일하면서 얻은 노하우를 공유합니다...",
                date: "2024-03-14",
                likes: 445,
                comments: 38,
                category: "개발 가이드",
              },
            ],
          },
        },
        curriculum: [
          {
            week: 1,
            title: "카카오 서비스 아키텍처",
            description: "카카오 서비스의 전체 아키텍처를 이해합니다.",
            lessons: [
              { title: "카카오 플랫폼 개요", duration: "50분", type: "video" },
              { title: "마이크로서비스 아키텍처", duration: "70분", type: "video" },
              { title: "API 설계 실습", duration: "90분", type: "assignment" },
            ],
          },
          {
            week: 2,
            title: "프론트엔드 개발",
            description: "React를 이용한 카카오톡 UI 개발",
            lessons: [
              { title: "React 기초", duration: "60분", type: "video" },
              { title: "카카오톡 UI 개발", duration: "75분", type: "assignment" },
            ],
          },
        ],
        assignments: [
          {
            title: "카카오톡 미니 클론 개발",
            description: "카카오톡의 핵심 기능을 구현한 미니 클론 애플리케이션을 개발하는 프로젝트입니다.",
            difficulty: "고급",
            estimatedTime: "6주",
            deliverables: ["프론트엔드 앱", "백엔드 API", "데이터베이스 설계"],
            sespecExample: "카카오톡 미니 클론 개발을 통해 풀스택 개발 역량을 기름.",
          },
        ],
        features: ["카카오 현직 개발자 멘토링", "실제 서비스 분석", "채용 연계", "카카오 기술 인증서"],
        requirements: ["JavaScript 중급", "React/Node.js 기초", "데이터베이스 기본 지식"],
        outcomes: ["풀스택 개발 역량", "대규모 서비스 이해", "카카오 채용 연계"],
        faq: [
          {
            question: "카카오 입사 기회가 있나요?",
            answer: "우수 수료생에게는 카카오 채용 과정에서 우대 혜택이 제공됩니다.",
          },
        ],
        reviews: [
          {
            id: "review1",
            userName: "이카카오",
            userSchool: "연세대학교",
            rating: 5,
            date: "2024-02-20",
            content: "카카오 현직 개발자분들의 멘토링이 정말 값진 경험이었습니다!",
            isVerified: true,
            helpfulCount: 28,
            tags: ["카카오", "멘토링", "풀스택"],
          },
        ],
        bestReviews: [
          {
            id: "bestReview1",
            userName: "이카카오",
            userSchool: "연세대학교",
            rating: 5,
            date: "2024-02-20",
            content: "카카오 현직 개발자분들의 멘토링이 정말 값진 경험이었습니다!",
            isVerified: true,
            helpfulCount: 28,
            tags: ["카카오", "멘토링", "풀스택"],
          },
        ],
      },
      "samsung-sds-cloud": {
        id: "samsung-sds-cloud",
        title: "삼성SDS 클라우드 아키텍트 과정",
        description: "삼성SDS와 함께하는 엔터프라이즈 클라우드 전문가 양성 프로그램",
        fullDescription:
          "삼성SDS의 클라우드 전문가들과 함께 엔터프라이즈급 클라우드 솔루션을 설계하고 구축하는 방법을 학습하는 프로그램입니다.",
        duration: "10주 과정",
        level: "고급",
        price: "279,000원",
        originalPrice: "359,000원",
        rating: 4.7,
        studentCount: 38,
        badge: "클라우드",
        badgeColor: "bg-blue-600",
        thumbnail: "/placeholder.svg?height=400&width=600",
        instructor: {
          name: "최삼성 이사",
          title: "삼성SDS 클라우드사업부 이사",
          experience: "15년 엔터프라이즈 클라우드 경험",
          education: ["MIT 컴퓨터공학 박사", "KAIST 전산학 석사"],
          achievements: [
            "삼성 그룹 클라우드 전환 프로젝트 총괄",
            "AWS 파트너 어워드 수상",
            "클라우드 아키텍처 특허 8건 보유",
            "국제 클라우드 컨퍼런스 기조연설자",
          ],
          avatar: "/placeholder.svg?height=100&width=100",
          community: {
            followers: 2456,
            posts: 98,
            likes: 5678,
            bestPosts: [
              {
                id: "1",
                title: "엔터프라이즈 클라우드 전환 전략",
                content: "대기업의 클라우드 전환 시 고려해야 할 핵심 요소들을 정리했습니다...",
                date: "2024-03-16",
                likes: 234,
                comments: 18,
                category: "클라우드 전략",
              },
              {
                id: "2",
                title: "클라우드 보안 베스트 프랙티스",
                content: "엔터프라이즈 환경에서의 클라우드 보안 구현 방법을 공유합니다...",
                date: "2024-03-08",
                likes: 189,
                comments: 15,
                category: "보안",
              },
            ],
          },
        },
        curriculum: [
          {
            week: 1,
            title: "엔터프라이즈 클라우드 개요",
            description: "기업용 클라우드의 특징과 요구사항을 이해합니다.",
            lessons: [
              { title: "엔터프라이즈 클라우드 특징", duration: "60분", type: "video" },
              { title: "클라우드 거버넌스", duration: "55분", type: "video" },
              { title: "비용 최적화 전략", duration: "80분", type: "assignment" },
            ],
          },
          {
            week: 2,
            title: "클라우드 보안",
            description: "클라우드 환경에서의 보안 기술을 학습합니다.",
            lessons: [
              { title: "클라우드 보안 개요", duration: "60분", type: "video" },
              { title: "보안 정책 설정", duration: "75분", type: "assignment" },
            ],
          },
        ],
        assignments: [
          {
            title: "엔터프라이즈 클라우드 아키텍처 설계",
            description: "대기업의 요구사항을 만족하는 클라우드 아키텍처를 설계하는 프로젝트입니다.",
            difficulty: "고급",
            estimatedTime: "4주",
            deliverables: ["아키텍처 설계서", "보안 정책", "비용 분석"],
            sespecExample: "엔터프라이즈 클라우드 아키텍처 설계를 통해 대규모 시스템 설계 역량을 기름.",
          },
        ],
        features: ["삼성SDS 전문가 멘토링", "AWS/Azure 실습", "삼성 인턴십", "클라우드 인증서"],
        requirements: ["클라우드 기초 지식", "네트워킹 이해", "보안 기본 개념"],
        outcomes: ["클라우드 아키텍처 설계", "엔터프라이즈 솔루션 이해", "삼성 인턴십 기회"],
        faq: [
          {
            question: "삼성 계열사 취업에 도움이 되나요?",
            answer: "우수 수료생에게는 삼성 계열사 인턴십 및 채용 기회가 제공됩니다.",
          },
        ],
        reviews: [
          {
            id: "review1",
            userName: "김클라우드",
            userSchool: "고려대학교",
            rating: 5,
            date: "2024-02-25",
            content: "엔터프라이즈급 클라우드 설계를 배울 수 있는 유일한 과정입니다!",
            isVerified: true,
            helpfulCount: 19,
            tags: ["삼성SDS", "클라우드", "엔터프라이즈"],
          },
        ],
        bestReviews: [
          {
            id: "bestReview1",
            userName: "김클라우드",
            userSchool: "고려대학교",
            rating: 5,
            date: "2024-02-25",
            content: "엔터프라이즈급 클라우드 설계를 배울 수 있는 유일한 과정입니다!",
            isVerified: true,
            helpfulCount: 19,
            tags: ["삼성SDS", "클라우드", "엔터프라이즈"],
          },
        ],
      },
      "google-ai-program": {
        id: "google-ai-program",
        title: "Google AI for Everyone",
        description: "구글과 함께하는 AI 리터러시 및 머신러닝 기초 프로그램",
        fullDescription:
          "구글의 AI 전문가들과 함께 AI의 기본 개념부터 Google Cloud Platform을 활용한 실습까지 체계적으로 학습하는 프로그램입니다.",
        duration: "8주 과정",
        level: "초급-중급",
        price: "199,000원",
        originalPrice: "259,000원",
        rating: 4.9,
        studentCount: 156,
        badge: "글로벌",
        badgeColor: "bg-red-600",
        thumbnail: "/placeholder.svg?height=400&width=600",
        instructor: {
          name: "John Google 박사",
          title: "Google AI 수석 연구원",
          experience: "8년 Google AI 연구 경험",
          education: ["Stanford AI 박사", "MIT 컴퓨터공학 석사"],
          achievements: [
            "Google AI 핵심 알고리즘 개발",
            "TensorFlow 프로젝트 기여자",
            "Google I/O AI 세션 발표자",
            "AI 윤리 가이드라인 수립 참여",
          ],
          avatar: "/placeholder.svg?height=100&width=100",
          community: {
            followers: 4567,
            posts: 234,
            likes: 12345,
            bestPosts: [
              {
                id: "1",
                title: "Google AI의 미래 비전",
                content: "구글이 그리는 AI의 미래와 모든 사람을 위한 AI에 대해 이야기합니다...",
                date: "2024-03-22",
                likes: 789,
                comments: 67,
                category: "AI 비전",
              },
              {
                id: "2",
                title: "AI 윤리와 책임감 있는 AI 개발",
                content: "구글에서 실천하고 있는 책임감 있는 AI 개발 원칙을 공유합니다...",
                date: "2024-03-18",
                likes: 567,
                comments: 45,
                category: "AI 윤리",
              },
            ],
          },
        },
        curriculum: [
          {
            week: 1,
            title: "AI 기초와 Google AI",
            description: "AI의 기본 개념과 Google의 AI 기술을 소개합니다.",
            lessons: [
              { title: "AI란 무엇인가", duration: "45분", type: "video" },
              { title: "Google AI 서비스 소개", duration: "60분", type: "video" },
              { title: "AI 윤리 토론", duration: "90분", type: "assignment" },
            ],
          },
          {
            week: 2,
            title: "머신러닝 기초",
            description: "머신러닝의 기본 원리를 학습합니다.",
            lessons: [
              { title: "머신러닝 알고리즘", duration: "60분", type: "video" },
              { title: "데이터 분석 실습", duration: "75분", type: "assignment" },
            ],
          },
        ],
        assignments: [
          {
            title: "Google Cloud AI 서비스 활용 프로젝트",
            description: "Google Cloud Platform의 AI 서비스를 활용하여 실제 문제를 해결하는 프로젝트입니다.",
            difficulty: "중급",
            estimatedTime: "3주",
            deliverables: ["AI 모델 구현", "클라우드 배포", "결과 분석"],
            sespecExample: "Google Cloud AI 서비스 활용을 통해 클라우드 기반 AI 개발 역량을 기름.",
          },
        ],
        features: ["Google AI 전문가 멘토링", "Google Cloud 실습", "Google AI 인증서", "구글 코리아 견학"],
        requirements: ["프로그래밍 기초", "수학 기본 지식", "영어 기본 회화"],
        outcomes: ["AI 기초 이해", "Google Cloud 활용", "글로벌 AI 트렌드 파악"],
        faq: [
          {
            question: "영어로 진행되나요?",
            answer: "한국어로 진행되며, 필요시 영어 자료에 대한 번역 지원이 제공됩니다.",
          },
        ],
        reviews: [
          {
            id: "review1",
            userName: "박구글",
            userSchool: "포항공과대학교",
            rating: 5,
            date: "2024-03-01",
            content: "구글의 최신 AI 기술을 직접 배울 수 있어서 정말 좋았습니다!",
            isVerified: true,
            helpfulCount: 42,
            tags: ["Google", "AI", "글로벌"],
          },
        ],
        bestReviews: [
          {
            id: "bestReview1",
            userName: "박구글",
            userSchool: "포항공과대학교",
            rating: 5,
            date: "2024-03-01",
            content: "구글의 최신 AI 기술을 직접 배울 수 있어서 정말 좋았습니다!",
            isVerified: true,
            helpfulCount: 42,
            tags: ["Google", "AI", "글로벌"],
          },
        ],
      },
      "microsoft-azure-developer": {
        id: "microsoft-azure-developer",
        title: "Microsoft Azure 개발자 과정",
        description: "마이크로소프트와 함께하는 클라우드 네이티브 개발자 양성 프로그램",
        fullDescription:
          "Microsoft Azure 플랫폼을 활용한 클라우드 네이티브 애플리케이션 개발 방법을 학습하는 프로그램입니다.",
        duration: "12주 과정",
        level: "중급-고급",
        price: "259,000원",
        originalPrice: "329,000원",
        rating: 4.8,
        studentCount: 89,
        badge: "클라우드",
        badgeColor: "bg-blue-700",
        thumbnail: "/placeholder.svg?height=400&width=600",
        instructor: {
          name: "김마이크로 MVP",
          title: "Microsoft MVP & Azure 아키텍트",
          experience: "12년 Microsoft 기술 전문가",
          education: ["서울대학교 컴퓨터공학 박사", "KAIST 전산학 석사"],
          achievements: [
            "Microsoft MVP 5년 연속 수상",
            "Azure 아키텍처 설계 전문가",
            "Microsoft 공식 문서 기여자",
            "Azure 커뮤니티 리더",
          ],
          avatar: "/placeholder.svg?height=100&width=100",
          community: {
            followers: 2890,
            posts: 167,
            likes: 7456,
            bestPosts: [
              {
                id: "1",
                title: "Azure 서비스 선택 가이드",
                content: "프로젝트 요구사항에 맞는 Azure 서비스를 선택하는 방법을 안내합니다...",
                date: "2024-03-19",
                likes: 345,
                comments: 28,
                category: "Azure 가이드",
              },
              {
                id: "2",
                title: "클라우드 네이티브 개발 패턴",
                content: "Azure에서 클라우드 네이티브 애플리케이션을 개발하는 패턴을 소개합니다...",
                date: "2024-03-13",
                likes: 278,
                comments: 22,
                category: "개발 패턴",
              },
            ],
          },
        },
        curriculum: [
          {
            week: 1,
            title: "Azure 플랫폼 개요",
            description: "Microsoft Azure의 핵심 서비스를 이해합니다.",
            lessons: [
              { title: "Azure 서비스 소개", duration: "50분", type: "video" },
              { title: "Azure Portal 사용법", duration: "40분", type: "video" },
              { title: "리소스 그룹 관리", duration: "70분", type: "assignment" },
            ],
          },
          {
            week: 2,
            title: "클라우드 네이티브 개발",
            description: "Azure를 이용한 클라우드 네이티브 개발",
            lessons: [
              { title: "Docker 컨테이너", duration: "60분", type: "video" },
              { title: "Kubernetes 배포", duration: "75분", type: "assignment" },
            ],
          },
        ],
        assignments: [
          {
            title: "Azure 기반 웹 애플리케이션 개발",
            description: "Azure App Service와 Azure SQL Database를 활용한 웹 애플리케이션을 개발하는 프로젝트입니다.",
            difficulty: "중급",
            estimatedTime: "4주",
            deliverables: ["웹 애플리케이션", "데이터베이스 설계", "배포 스크립트"],
            sespecExample: "Azure 기반 웹 애플리케이션 개발을 통해 클라우드 네이티브 개발 역량을 기름.",
          },
        ],
        features: ["Microsoft MVP 멘토링", "Azure 실무 프로젝트", "Microsoft 인증서", "Azure 크레딧 제공"],
        requirements: [".NET 또는 Python 기초", "웹 개발 경험", "데이터베이스 기본 지식"],
        outcomes: ["Azure 개발 역량", "클라우드 네이티브 이해", "Microsoft 인증 취득"],
        faq: [
          {
            question: "Microsoft 인증 시험에 도움이 되나요?",
            answer: "Azure 개발자 인증 시험 준비에 직접적으로 도움이 되는 내용을 다룹니다.",
          },
        ],
        reviews: [
          {
            id: "review1",
            userName: "이애저",
            userSchool: "성균관대학교",
            rating: 5,
            date: "2024-03-05",
            content: "Azure 개발의 모든 것을 배울 수 있는 완벽한 과정입니다!",
            isVerified: true,
            helpfulCount: 31,
            tags: ["Azure", "Microsoft", "클라우드"],
          },
        ],
        bestReviews: [
          {
            id: "bestReview1",
            userName: "이애저",
            userSchool: "성균관대학교",
            rating: 5,
            date: "2024-03-05",
            content: "Azure 개발의 모든 것을 배울 수 있는 완벽한 과정입니다!",
            isVerified: true,
            helpfulCount: 31,
            tags: ["Azure", "Microsoft", "클라우드"],
          },
        ],
      },
      "amazon-aws-architect": {
        id: "amazon-aws-architect",
        title: "AWS 솔루션 아키텍트 과정",
        description: "아마존과 함께하는 클라우드 솔루션 아키텍트 전문가 양성 프로그램",
        fullDescription:
          "AWS의 공인 강사들과 함께 클라우드 솔루션 아키텍처를 설계하고 구현하는 방법을 학습하는 프로그램입니다.",
        duration: "14주 과정",
        level: "고급",
        price: "329,000원",
        originalPrice: "429,000원",
        rating: 4.9,
        studentCount: 72,
        badge: "아키텍트",
        badgeColor: "bg-orange-600",
        thumbnail: "/placeholder.svg?height=400&width=600",
        instructor: {
          name: "최아마존 SA",
          title: "AWS 공인 솔루션 아키텍트",
          experience: "10년 AWS 클라우드 아키텍처 경험",
          education: ["AWS 공인 강사", "클라우드 아키텍처 전문가"],
          achievements: [
            "AWS 솔루션 아키텍트 프로페셔널",
            "AWS 공인 강사 자격증",
            "대기업 클라우드 마이그레이션 100건 이상",
            "AWS re:Invent 스피커",
          ],
          avatar: "/placeholder.svg?height=100&width=100",
          community: {
            followers: 3456,
            posts: 198,
            likes: 8901,
            bestPosts: [
              {
                id: "1",
                title: "AWS Well-Architected Framework 실전 가이드",
                content: "AWS의 5가지 설계 원칙을 실제 프로젝트에 적용하는 방법을 설명합니다...",
                date: "2024-03-21",
                likes: 567,
                comments: 43,
                category: "아키텍처",
              },
              {
                id: "2",
                title: "클라우드 비용 최적화 전략",
                content: "AWS 비용을 효과적으로 관리하고 최적화하는 실무 노하우를 공유합니다...",
                date: "2024-03-15",
                likes: 423,
                comments: 35,
                category: "비용 최적화",
              },
            ],
          },
        },
        curriculum: [
          {
            week: 1,
            title: "AWS 핵심 서비스",
            description: "AWS의 핵심 서비스들을 이해하고 활용법을 학습합니다.",
            lessons: [
              { title: "EC2와 VPC", duration: "60분", type: "video" },
              { title: "S3와 CloudFront", duration: "55분", type: "video" },
              { title: "RDS와 DynamoDB", duration: "80분", type: "assignment" },
            ],
          },
          {
            week: 2,
            title: "AWS 고급 서비스",
            description: "AWS의 고급 서비스들을 이해하고 활용법을 학습합니다.",
            lessons: [
              { title: "Lambda와 API Gateway", duration: "60분", type: "video" },
              { title: "CloudWatch와 CloudTrail", duration: "75분", type: "assignment" },
            ],
          },
        ],
        assignments: [
          {
            title: "고가용성 웹 서비스 아키텍처 설계",
            description: "AWS 서비스를 활용하여 고가용성과 확장성을 갖춘 웹 서비스 아키텍처를 설계하는 프로젝트입니다.",
            difficulty: "고급",
            estimatedTime: "5주",
            deliverables: ["아키텍처 다이어그램", "인프라 코드", "비용 분석"],
            sespecExample: "AWS 고가용성 웹 서비스 아키텍처 설계를 통해 클라우드 솔루션 아키텍트 역량을 기름.",
          },
        ],
        features: ["AWS 공인 강사 지도", "실제 기업 프로젝트", "AWS 자격증 지원", "파트너사 취업 연계"],
        requirements: ["클라우드 기초 지식", "네트워킹 이해", "Linux 기본 명령어"],
        outcomes: ["AWS 아키텍처 설계", "클라우드 마이그레이션", "AWS 자격증 취득"],
        faq: [
          {
            question: "AWS 자격증 취득이 보장되나요?",
            answer: "자격증 취득을 위한 체계적인 준비 과정을 제공하며, 모의시험과 개별 지도를 통해 합격률을 높입니다.",
          },
        ],
        reviews: [
          {
            id: "review1",
            userName: "김아마존",
            userSchool: "한양대학교",
            rating: 5,
            date: "2024-03-10",
            content: "AWS 아키텍트가 되기 위한 모든 것을 배울 수 있는 최고의 과정입니다!",
            isVerified: true,
            helpfulCount: 38,
            tags: ["AWS", "아키텍트", "자격증"],
          },
        ],
        bestReviews: [
          {
            id: "bestReview1",
            userName: "김아마존",
            userSchool: "한양대학교",
            rating: 5,
            date: "2024-03-10",
            content: "AWS 아키텍트가 되기 위한 모든 것을 배울 수 있는 최고의 과정입니다!",
            isVerified: true,
            helpfulCount: 38,
            tags: ["AWS", "아키텍트", "자격증"],
          },
        ],
      },
      "meta-vr-developer": {
        id: "meta-vr-developer",
        title: "Meta VR/AR 개발자 과정",
        description: "메타와 함께하는 메타버스 및 VR/AR 개발자 양성 프로그램",
        fullDescription:
          "Meta Reality Labs의 전문가들과 함께 VR/AR 애플리케이션 개발과 메타버스 플랫폼 구축 방법을 학습하는 프로그램입니다.",
        duration: "10주 과정",
        level: "중급-고급",
        price: "289,000원",
        originalPrice: "379,000원",
        rating: 4.7,
        studentCount: 54,
        badge: "메타버스",
        badgeColor: "bg-purple-600",
        thumbnail: "/placeholder.svg?height=400&width=600",
        instructor: {
          name: "박메타 개발자",
          title: "Meta Reality Labs 시니어 개발자",
          experience: "8년 VR/AR 개발 경험",
          education: ["Carnegie Mellon VR 석사", "KAIST 전산학 학사"],
          achievements: [
            "Oculus Quest 플랫폼 개발 참여",
            "Meta Horizon Worlds 기여자",
            "VR/AR 특허 5건 보유",
            "Unity XR 인증 전문가",
          ],
          avatar: "/placeholder.svg?height=100&width=100",
          community: {
            followers: 1890,
            posts: 134,
            likes: 4567,
            bestPosts: [
              {
                id: "1",
                title: "메타버스의 현재와 미래",
                content: "Meta에서 바라보는 메타버스의 현재 상황과 앞으로의 발전 방향을 공유합니다...",
                date: "2024-03-17",
                likes: 234,
                comments: 19,
                category: "메타버스",
              },
              {
                id: "2",
                title: "VR 개발 시작하기",
                content: "VR 개발을 처음 시작하는 분들을 위한 가이드를 제공합니다...",
                date: "2024-03-11",
                likes: 189,
                comments: 15,
                category: "VR 개발",
              },
            ],
          },
        },
        curriculum: [
          {
            week: 1,
            title: "VR/AR 기초와 Meta 플랫폼",
            description: "VR/AR의 기본 개념과 Meta의 플랫폼을 이해합니다.",
            lessons: [
              { title: "VR/AR의 기본 개념", duration: "60분", type: "video" },
              { title: "Meta의 플랫폼 소개", duration: "75분", type: "video" },
              { title: "VR/AR 개발 환경 설정", duration: "90분", type: "assignment" },
            ],
          },
          {
            week: 2,
            title: "VR/AR 애플리케이션 개발",
            description: "VR/AR 애플리케이션을 개발하는 방법을 학습합니다.",
            lessons: [
              { title: "Unity를 이용한 VR/AR 애플리케이션 개발", duration: "60분", type: "video" },
              { title: "Unreal Engine을 이용한 VR/AR 애플리케이션 개발", duration: "75분", type: "assignment" },
            ],
          },
        ],
        assignments: [
          {
            title: "VR/AR 애플리케이션 개발 프로젝트",
            description: "VR/AR 애플리케이션을 개발하는 프로젝트를 진행합니다.",
            difficulty: "고급",
            estimatedTime: "4주",
            deliverables: ["애플리케이션 코드", "프로젝트 보고서", "피드백 및 프로젝트 발표 자료"],
            sespecExample: "VR/AR 애플리케이션 개발을 통해 실전 프로젝트 경험을 기름.",
          },
        ],
        features: ["메타의 전문가 멘토링", "실제 프로젝트 경험", "메타 기술 인증서", "메타버스 커뮤니티 참여"],
        requirements: ["VR/AR 개발 경험", "Unity/Unreal Engine 기초", "컴퓨터 및 주변기기"],
        outcomes: ["VR/AR 애플리케이션 개발 능력", "메타버스 플랫폼 이해", "메타 기술 인증 취득"],
        faq: [
          {
            question: "프로그래밍 경험이 없어도 수강할 수 있나요?",
            answer: "네, VR/AR 개발 경험이 있다면 더욱 유익한 학습을 제공합니다.",
          },
          {
            question: "멘토링 세션은 어떻게 진행되나요?",
            answer: "주 2회 온라인 멘토링 세션이 진행되며, 프로젝트 진행 상황 점검 및 피드백을 통해 심도 있는 학습을 지원합니다.",
          },
          {
            question: "프로젝트 결과물은 어떻게 활용할 수 있나요?",
            answer: "완성된 프로젝트는 메타버스 커뮤니티에 기여할 수 있으며, 공모전 참가나 대학 프로젝트로도 활용 가능합니다.",
          },
        ],
      },
      "ai-vision-yolo": {
        id: "ai-vision-yolo",
        title: "AI Computer Vision with YOLOv8",
        description: "실전 AI 프로젝트로 배우는 컴퓨터 비전의 세계",
        fullDescription: "이 과정은 컴퓨터 비전의 기본 원리부터 YOLOv8을 활용한 실전 프로젝트까지 체계적으로 학습하는 프로그램입니다. 이론 학습과 실습을 통해 실제 문제를 해결하는 AI 시스템을 개발하며, 전문가 멘토와의 정기적인 세션을 통해 심도 있는 학습을 지원합니다.",
        duration: "4주 과정",
        level: "초급-중급",
        price: "149,000원",
        originalPrice: "199,000원",
        rating: 0,
        studentCount: 0,
        badge: "실전 프로젝트",
        badgeColor: "bg-blue-600",
        thumbnail: "/placeholder.svg?height=400&width=600",
        instructor: {
          name: "김AI 박사",
          title: "AI 연구원 & 교육 전문가",
          experience: "5년 AI 교육 경험",
          education: ["KAIST AI 박사", "서울대학교 컴퓨터공학 석사"],
          achievements: [
            "AI 교육 프로그램 개발 전문가",
            "YOLOv8 기반 프로젝트 다수 진행",
            "AI 관련 특허 3건 보유",
            "AI 커뮤니티 리더"
          ],
          avatar: "/placeholder.svg?height=100&width=100"
        },
        curriculum: [
          {
            week: 1,
            title: "컴퓨터 비전의 기초",
            description: "컴퓨터 비전의 기본 개념과 원리를 이해합니다.",
            lessons: [
              { 
                title: "컴퓨터 비전이란?", 
                duration: "60분", 
                type: "video" 
              },
              { 
                title: "이미지 처리의 기본 원리", 
                duration: "45분", 
                type: "video" 
              },
              { 
                title: "워크시트: 이미지 처리 실습", 
                duration: "90분", 
                type: "assignment" 
              },
              {
                title: "멘토링 세션: 컴퓨터 비전의 현재와 미래",
                duration: "60분",
                type: "mentoring"
              }
            ]
          },
          {
            week: 2,
            title: "YOLOv8의 이해",
            description: "YOLOv8의 구조와 작동 원리를 학습합니다.",
            lessons: [
              { 
                title: "YOLOv8 아키텍처 분석", 
                duration: "60분", 
                type: "video" 
              },
              { 
                title: "워크시트: YOLOv8 모델 구조 이해", 
                duration: "75분", 
                type: "assignment" 
              },
              { 
                title: "데이터셋 준비와 전처리", 
                duration: "90분", 
                type: "video" 
              },
              {
                title: "멘토링 세션: YOLOv8 최적화 기법",
                duration: "60분",
                type: "mentoring"
              }
            ]
          },
          {
            week: 3,
            title: "실전 프로젝트 기획",
            description: "실생활 문제 해결을 위한 프로젝트를 기획하고 구현합니다.",
            lessons: [
              { 
                title: "프로젝트 주제 선정과 기획", 
                duration: "60분", 
                type: "video" 
              },
              { 
                title: "워크시트: 프로젝트 요구사항 분석", 
                duration: "75분", 
                type: "assignment" 
              },
              { 
                title: "YOLOv8 모델 학습과 평가", 
                duration: "90분", 
                type: "video" 
              },
              {
                title: "멘토링 세션: 프로젝트 진행 상황 점검",
                duration: "60분",
                type: "mentoring"
              }
            ]
          },
          {
            week: 4,
            title: "프로젝트 완성과 배포",
            description: "프로젝트를 완성하고 배포하는 방법을 학습합니다.",
            lessons: [
              { 
                title: "모델 최적화와 성능 개선", 
                duration: "60분", 
                type: "video" 
              },
              { 
                title: "워크시트: 프로젝트 문서화", 
                duration: "75분", 
                type: "assignment" 
              },
              { 
                title: "GitHub 배포와 커뮤니티 참여", 
                duration: "90분", 
                type: "video" 
              },
              {
                title: "멘토링 세션: 프로젝트 발표와 피드백",
                duration: "60분",
                type: "mentoring"
              }
            ]
          }
        ],
        assignments: [
          {
            title: "실생활 문제 해결을 위한 YOLOv8 프로젝트",
            description: "YOLOv8을 활용하여 실생활에서 발생하는 문제를 해결하는 AI 시스템을 개발합니다. 예를 들어, 안전 모니터링, 재활용품 분류, 교통량 분석 등의 실제 문제를 해결하는 프로젝트를 진행합니다.",
            difficulty: "중급",
            estimatedTime: "4주",
            deliverables: [
              "프로젝트 기획서",
              "AI 모델 구현 코드",
              "성능 평가 보고서",
              "GitHub 저장소",
              "프로젝트 발표 자료"
            ],
            sespecExample: "YOLOv8을 활용한 AI 비전 프로젝트를 통해 실생활 문제 해결 능력과 AI 기술 구현 역량을 기르고, 이를 바탕으로 의미있는 프로젝트 경험을 쌓았습니다."
          }
        ],
        features: [
          "이론과 실습의 균형잡힌 커리큘럼",
          "주 2회 전문가 멘토링 세션",
          "실전 프로젝트 완성",
          "GitHub 포트폴리오 구축",
          "AI 커뮤니티 참여 기회"
        ],
        requirements: [
          "Python 기초 지식",
          "기본적인 프로그래밍 경험",
          "Windows/Mac 컴퓨터",
          "웹캠 또는 카메라"
        ],
        outcomes: [
          "컴퓨터 비전의 기본 원리 이해",
          "YOLOv8 모델 구현 능력",
          "실전 AI 프로젝트 완성",
          "GitHub를 통한 프로젝트 관리 경험",
          "AI 커뮤니티 참여 경험"
        ],
        faq: [
          {
            question: "프로그래밍 경험이 없어도 수강할 수 있나요?",
            answer: "네, Python 기초부터 차근차근 학습할 수 있도록 커리큘럼이 구성되어 있습니다. 주 2회 진행되는 멘토링 세션을 통해 개인별 수준에 맞는 지원을 제공합니다."
          },
          {
            question: "멘토링 세션은 어떻게 진행되나요?",
            answer: "주 2회 온라인 멘토링 세션이 진행되며, 이론 학습 내용 점검, 실습 과제 피드백, 프로젝트 진행 상황 점검 등을 통해 심도 있는 학습을 지원합니다."
          },
          {
            question: "프로젝트 결과물은 어떻게 활용할 수 있나요?",
            answer: "완성된 프로젝트는 GitHub에 업로드하여 포트폴리오로 활용할 수 있으며, AI 커뮤니티에 기여할 수 있습니다. 또한 공모전 참가나 대학 프로젝트로도 활용 가능합니다."
          }
        ]
      },
    }
    return courses[id] || null
  }

  return (
    <div>
      {/* Render your component content here */}
    </div>
  )
}
