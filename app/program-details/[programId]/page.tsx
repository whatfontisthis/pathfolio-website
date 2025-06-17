"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Clock, Users, Award, CheckCircle, Play, FileText, PuzzleIcon as Quiz, Briefcase } from "lucide-react"

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

interface ProgramData {
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
  }
  curriculum: {
    week: number
    title: string
    description: string
    lessons: {
      title: string
      duration: string
      type: "video" | "assignment" | "quiz" | "project"
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
  reviews: Review[]
  bestReviews: Review[]
}

export default function ProgramDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const programId = params.programId as string
  const [programData, setProgramData] = useState<ProgramData | null>(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const data = getProgramData(programId)
      if (data) {
        setProgramData(data)
      } else {
        setError("프로그램을 찾을 수 없습니다.")
      }
    } catch (err) {
      setError("프로그램 데이터를 불러오는 중 오류가 발생했습니다.")
    } finally {
      setIsLoading(false)
    }
  }, [programId])

  const getProgramData = (id: string): ProgramData | null => {
    const programs: { [key: string]: ProgramData } = {
      "ai-ethics": {
        id: "ai-ethics",
        title: "AI 윤리 딜레마 분석",
        description: "AI 기술의 윤리적 문제를 심층 분석하고 해결방안 제시",
        fullDescription:
          "현재 가장 주목받는 AI 분야의 윤리적 쟁점들을 체계적으로 분석하고 해결방안을 모색하는 프로그램입니다. 자율주행차의 도덕적 딜레마부터 AI 편향성 문제까지, 실제 사례를 바탕으로 윤리적 사고력과 비판적 분석 능력을 기를 수 있습니다.",
        duration: "3-4주 과정",
        level: "고급",
        price: "89,000원",
        originalPrice: "129,000원",
        rating: 4.8,
        studentCount: 1247,
        badge: "인기",
        badgeColor: "bg-orange-500",
        thumbnail: "/images/ai-ethics-thumbnail.png",
        instructor: {
          name: "김인공 박사",
          title: "KAIST AI 연구소 수석 연구원",
          experience: "15년 AI/ML 연구 및 개발 경험",
          education: ["KAIST 컴퓨터공학 박사", "서울대학교 전산학 석사"],
          achievements: [
            "국제 AI 학회 논문 50편 이상 발표",
            "삼성전자 AI 연구소 팀장 역임",
            "교육부 AI 교육과정 개발 자문위원",
            "네이버 AI 해커톤 심사위원",
          ],
          avatar: "/placeholder.svg?height=100&width=100",
        },
        curriculum: [
          {
            week: 1,
            title: "AI 기초 개념 및 윤리적 쟁점",
            description: "AI의 기본 개념과 현재 사회에서 제기되는 윤리적 문제들을 탐구합니다.",
            lessons: [
              { title: "AI 개요 및 역사", duration: "45분", type: "video" },
              { title: "AI 윤리 기본 개념", duration: "60분", type: "video" },
              { title: "현재 AI 윤리 쟁점 조사", duration: "90분", type: "assignment" },
              { title: "기초 개념 퀴즈", duration: "15분", type: "quiz" },
            ],
          },
          {
            week: 2,
            title: "자율주행차 도덕적 딜레마 분석",
            description: "자율주행차의 도덕적 딜레마 상황을 분석하고 해결방안을 모색합니다.",
            lessons: [
              { title: "트롤리 문제와 AI", duration: "50분", type: "video" },
              { title: "자율주행 윤리 사례 분석", duration: "75분", type: "assignment" },
              { title: "딜레마 해결 방안 제시", duration: "120분", type: "project" },
              { title: "토론 및 발표", duration: "30분", type: "assignment" },
            ],
          },
          {
            week: 3,
            title: "AI 편향성과 공정성 문제",
            description: "AI 시스템의 편향성 문제를 분석하고 공정한 AI 개발 방안을 탐구합니다.",
            lessons: [
              { title: "AI 편향성의 원인", duration: "60분", type: "video" },
              { title: "편향성 사례 분석", duration: "90분", type: "assignment" },
              { title: "공정성 평가 방법", duration: "120분", type: "project" },
              { title: "해결 방안 토론", duration: "45분", type: "assignment" },
            ],
          },
        ],
        assignments: [
          {
            title: "AI 윤리 딜레마 시나리오 분석",
            description:
              "자율주행차의 도덕적 딜레마, AI 채용 시스템의 편향성, 얼굴 인식 기술의 프라이버시 침해 등 실제 AI 기술 적용 과정에서 발생하는 윤리적 문제들을 심층 분석하고, 해결 방안을 제시하는 과제입니다.",
            difficulty: "고급",
            estimatedTime: "3주",
            deliverables: [
              "윤리 딜레마 사례 조사 보고서",
              "이해관계자 분석 및 영향 평가",
              "다양한 관점에서의 해결 방안 제시",
              "AI 윤리 가이드라인 제안서",
              "토론 및 발표 자료",
            ],
            sespecExample:
              "AI 윤리 딜레마 시나리오 분석 과제에서 자율주행차의 도덕적 딜레마 상황을 다각도로 분석하고, 법적·윤리적 관점에서 균형잡힌 해결 방안을 제시하여 비판적 사고력과 윤리적 판단 능력을 기름.",
          },
        ],
        features: [
          "1:1 전문 멘토링 (주 2회, 총 6회)",
          "실무 프로젝트 2개 완성",
          "AI 윤리 가이드라인 제작",
          "세특 문장 자동 생성",
          "수료증 발급",
          "평생 강의 자료 제공",
          "온라인 커뮤니티 참여",
          "AI 업계 네트워킹 기회",
        ],
        requirements: [
          "고등학교 수학 기본 지식",
          "AI에 대한 기본적 관심",
          "윤리적 사고에 대한 관심",
          "주당 5-8시간 학습 시간 확보",
          "토론 및 발표 참여 의지",
        ],
        outcomes: [
          "AI 윤리에 대한 전문적 이해",
          "윤리적 딜레마 분석 능력",
          "비판적 사고 및 판단력",
          "AI 정책 제안 능력",
          "윤리 가이드라인 작성 경험",
          "AI 관련 진로 설계",
          "생활기록부 세특 문장 자동 생성",
          "대학 입시 차별화 요소 확보",
        ],
        faq: [
          {
            question: "AI에 대한 기술적 지식이 없어도 수강 가능한가요?",
            answer:
              "네, 가능합니다. 이 프로그램은 AI의 윤리적 측면에 초점을 맞춘 과정으로, 기술적 지식보다는 윤리적 사고와 분석 능력을 기르는 데 중점을 둡니다.",
          },
          {
            question: "실제 AI 기업의 사례를 다루나요?",
            answer:
              "네, 구글, 테슬라, 아마존 등 실제 AI 기업들이 직면한 윤리적 문제들을 사례로 다루며, 현실적인 해결방안을 모색합니다.",
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
              "AI 윤리에 대해 깊이 있게 배울 수 있어서 좋았습니다. 실제 사례 분석을 통해 윤리적 딜레마에 대한 이해도를 높일 수 있었습니다.",
            isVerified: true,
            helpfulCount: 12,
            tags: ["윤리적 사고", "사례 분석", "실무 적용"],
          },
          {
            id: "review2",
            userName: "이코딩",
            userSchool: "KAIST",
            rating: 4,
            date: "2024-02-01",
            content:
              "자율주행차 윤리 문제에 대한 토론이 인상 깊었습니다. 다양한 관점에서 문제를 바라볼 수 있게 되었습니다.",
            isVerified: false,
            helpfulCount: 8,
            tags: ["자율주행", "토론", "다양한 관점"],
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
              "AI 윤리에 대해 깊이 있게 배울 수 있어서 좋았습니다. 실제 사례 분석을 통해 윤리적 딜레마에 대한 이해도를 높일 수 있었습니다.",
            isVerified: true,
            helpfulCount: 12,
            tags: ["윤리적 사고", "사례 분석", "실무 적용"],
          },
        ],
      },
      "bio-gene": {
        id: "bio-gene",
        title: "유전자 치료 기술 탐색",
        description: "CRISPR 등 유전자 치료 기술의 원리와 적용 가능성 분석",
        fullDescription:
          "생명과학의 최전선에서 활용되는 최신 유전자 치료 기술을 체계적으로 학습하는 과정입니다. CRISPR-Cas9, 유전자 편집, 줄기세포 연구 등 바이오 분야의 핵심 기술을 이론과 실습을 통해 습득하고, 실제 연구 프로젝트를 수행하여 연구자로서의 역량을 기를 수 있습니다.",
        duration: "2-3주 과정",
        level: "중급",
        price: "79,000원",
        originalPrice: "119,000원",
        rating: 4.7,
        studentCount: 892,
        badge: "추천",
        badgeColor: "bg-blue-500",
        thumbnail: "/placeholder.svg?height=400&width=600",
        instructor: {
          name: "박바이오 박사",
          title: "서울대학교 생명과학부 교수",
          experience: "20년 바이오 연구 및 교육 경험",
          education: ["하버드 의대 분자생물학 박사", "서울대학교 생물학 석사"],
          achievements: [
            "Nature, Science 등 저명 학술지 논문 80편 이상",
            "국가과학기술연구회 우수연구자상 수상",
            "CRISPR 기술 관련 특허 5건 보유",
            "바이오벤처 창업 자문 및 투자심사위원",
          ],
          avatar: "/placeholder.svg?height=100&width=100",
        },
        curriculum: [
          {
            week: 1,
            title: "유전병 종류 및 치료법 조사",
            description: "대표적인 유전병의 발생 원인과 현재 치료법을 탐구합니다.",
            lessons: [
              { title: "유전학 기초 이론", duration: "50분", type: "video" },
              { title: "주요 유전병 사례 조사", duration: "90분", type: "assignment" },
              { title: "현재 치료법 분석", duration: "60분", type: "project" },
              { title: "기초 개념 확인 퀴즈", duration: "20분", type: "quiz" },
            ],
          },
          {
            week: 2,
            title: "CRISPR 유전자 편집 기술",
            description: "CRISPR-Cas9 기술의 원리와 적용 가능성을 분석합니다.",
            lessons: [
              { title: "CRISPR-Cas9 원리", duration: "65분", type: "video" },
              { title: "유전자 편집 실습", duration: "75분", type: "assignment" },
              { title: "치료 적용 사례 연구", duration: "90분", type: "project" },
              { title: "기술 비교 분석", duration: "45분", type: "assignment" },
            ],
          },
          {
            week: 3,
            title: "유전자 치료의 윤리적 고려사항",
            description: "유전자 치료 기술의 윤리적 문제와 규제 방향을 탐구합니다.",
            lessons: [
              { title: "생명윤리 기본 개념", duration: "55분", type: "video" },
              { title: "윤리적 쟁점 분석", duration: "80분", type: "assignment" },
              { title: "규제 정책 연구", duration: "70분", type: "project" },
              { title: "토론 및 발표", duration: "50분", type: "assignment" },
            ],
          },
        ],
        assignments: [
          {
            title: "CRISPR 기반 유전자 치료 연구 설계",
            description:
              "특정 유전질환을 대상으로 CRISPR-Cas9 기술을 활용한 유전자 치료법을 설계하는 종합 프로젝트입니다.",
            difficulty: "고급",
            estimatedTime: "3주",
            deliverables: [
              "질환 분석 및 타겟 유전자 선정 보고서",
              "CRISPR 시스템 설계",
              "실험 프로토콜 및 안전성 평가",
              "윤리적 고려사항 분석",
              "연구 제안서 및 발표 자료",
            ],
            sespecExample:
              "CRISPR 기반 유전자 치료 연구 설계 프로젝트에서 겸상적혈구병 치료를 위한 유전자 편집 전략을 수립하고, 실험 설계부터 윤리적 고려사항까지 종합적으로 분석하여 생명과학 연구 역량과 비판적 사고력을 기름.",
          },
        ],
        features: [
          "실험실 견학 프로그램",
          "논문 작성 지도",
          "연구진과의 네트워킹",
          "대학 연구실 연계",
          "1:1 연구 멘토링",
          "바이오 기업 인턴십 기회",
          "국제 학회 참가 지원",
          "연구 포트폴리오 제작",
        ],
        requirements: [
          "고등학교 생물학 기초 지식",
          "화학 기본 개념 이해",
          "영어 논문 읽기 가능",
          "실험 안전 수칙 준수 의지",
          "주당 8-12시간 학습 시간 확보",
        ],
        outcomes: [
          "최신 바이오 기술 이해 및 활용 능력",
          "연구 설계 및 실험 계획 수립 능력",
          "과학적 글쓰기 및 논문 작성 능력",
          "바이오 윤리 의식 및 판단력",
          "연구 포트폴리오 완성",
          "바이오 분야 진로 설계",
          "대학 연구실 연계 기회",
          "바이오 업계 네트워크 구축",
        ],
        faq: [
          {
            question: "생물학 기초가 부족해도 수강 가능한가요?",
            answer:
              "고등학교 생물학 수준의 기초 지식은 필요합니다. 부족한 부분이 있다면 사전 학습 자료를 제공하여 보완할 수 있도록 도와드립니다.",
          },
          {
            question: "실제 실험실 견학은 어떻게 진행되나요?",
            answer:
              "서울대, 연세대, 고려대 등 주요 대학의 생명과학 연구실과 협력하여 월 1회 실험실 견학 프로그램을 운영합니다.",
          },
        ],
        reviews: [
          {
            id: "review1",
            userName: "김생물",
            userSchool: "서울대학교",
            rating: 5,
            date: "2024-01-20",
            content:
              "유전자 치료 기술에 대한 깊이 있는 이해를 얻을 수 있었습니다. CRISPR 기술의 원리를 명확하게 설명해주셔서 좋았습니다.",
            isVerified: true,
            helpfulCount: 10,
            tags: ["유전자 치료", "CRISPR", "기술 이해"],
          },
        ],
        bestReviews: [
          {
            id: "bestReview1",
            userName: "김생물",
            userSchool: "서울대학교",
            rating: 5,
            date: "2024-01-20",
            content:
              "유전자 치료 기술에 대한 깊이 있는 이해를 얻을 수 있었습니다. CRISPR 기술의 원리를 명확하게 설명해주셔서 좋았습니다.",
            isVerified: true,
            helpfulCount: 10,
            tags: ["유전자 치료", "CRISPR", "기술 이해"],
          },
        ],
      },
      "data-science": {
        id: "data-science",
        title: "데이터 사이언스 기초",
        description: "통계와 프로그래밍을 활용한 데이터 분석 및 시각화 프로젝트",
        fullDescription:
          "빅데이터 시대에 필수적인 데이터 사이언스 역량을 체계적으로 기르는 프로그램입니다. Python 프로그래밍부터 통계 분석, 머신러닝까지 데이터 사이언티스트로서의 기초 역량을 완성하고, 실제 데이터를 활용한 프로젝트를 통해 실무 경험을 쌓을 수 있습니다.",
        duration: "4주 과정",
        level: "중급",
        price: "89,000원",
        originalPrice: "119,000원",
        rating: 4.6,
        studentCount: 1156,
        badge: "베스트셀러",
        badgeColor: "bg-yellow-500",
        thumbnail: "/placeholder.svg?height=400&width=600",
        instructor: {
          name: "정데이터 교수",
          title: "고려대학교 통계학과 교수",
          experience: "12년 데이터 사이언스 연구 및 교육 경험",
          education: ["스탠포드대학교 통계학 박사", "서울대학교 수학과 석사"],
          achievements: [
            "국제 데이터 사이언스 학회 이사",
            "삼성전자 데이터 분석 컨설턴트",
            "정부 빅데이터 정책 자문위원",
            "데이터 사이언스 교육과정 개발 책임자",
          ],
          avatar: "/placeholder.svg?height=100&width=100",
        },
        curriculum: [
          {
            week: 1,
            title: "Python 기초 및 데이터 처리",
            description: "Python 프로그래밍 기초와 데이터 처리 라이브러리를 학습합니다.",
            lessons: [
              { title: "Python 기초 문법", duration: "60분", type: "video" },
              { title: "Pandas 데이터 처리", duration: "75분", type: "assignment" },
              { title: "데이터 전처리 실습", duration: "90분", type: "project" },
              { title: "기초 문법 테스트", duration: "30분", type: "quiz" },
            ],
          },
          {
            week: 2,
            title: "통계 분석 및 데이터 시각화",
            description: "기술통계부터 추론통계까지 데이터 분석의 기초를 학습합니다.",
            lessons: [
              { title: "기술통계 및 추론통계", duration: "65분", type: "video" },
              { title: "Matplotlib/Seaborn 시각화", duration: "80분", type: "assignment" },
              { title: "데이터 분석 프로젝트", duration: "100분", type: "project" },
              { title: "통계 개념 확인", duration: "25분", type: "quiz" },
            ],
          },
          {
            week: 3,
            title: "머신러닝 기초",
            description: "지도학습과 비지도학습의 기본 알고리즘을 학습합니다.",
            lessons: [
              { title: "머신러닝 개론", duration: "55분", type: "video" },
              { title: "회귀 및 분류 알고리즘", duration: "85분", type: "assignment" },
              { title: "모델 평가 및 검증", duration: "95분", type: "project" },
              { title: "알고리즘 비교 분석", duration: "40분", type: "assignment" },
            ],
          },
          {
            week: 4,
            title: "종합 프로젝트",
            description: "실제 데이터를 활용한 종합 분석 프로젝트를 수행합니다.",
            lessons: [
              { title: "프로젝트 기획", duration: "45분", type: "video" },
              { title: "데이터 수집 및 전처리", duration: "90분", type: "assignment" },
              { title: "모델링 및 분석", duration: "120분", type: "project" },
              { title: "결과 발표", duration: "60분", type: "assignment" },
            ],
          },
        ],
        assignments: [
          {
            title: "실제 데이터 분석 프로젝트",
            description:
              "공공데이터나 기업 데이터를 활용하여 실제 비즈니스 문제를 해결하는 데이터 분석 프로젝트를 수행합니다.",
            difficulty: "중급",
            estimatedTime: "4주",
            deliverables: [
              "데이터 수집 및 전처리 보고서",
              "탐색적 데이터 분석 결과",
              "머신러닝 모델 구축 및 평가",
              "비즈니스 인사이트 도출",
              "최종 발표 자료 및 코드",
            ],
            sespecExample:
              "실제 데이터 분석 프로젝트에서 서울시 대기질 데이터를 분석하여 미세먼지 농도 예측 모델을 구축하고, 정책적 시사점을 도출하여 데이터 기반 의사결정 능력과 통계적 사고력을 기름.",
          },
        ],
        features: [
          "실무 데이터 분석 도구 제공",
          "1:1 코딩 멘토링",
          "데이터 사이언스 커뮤니티 참여",
          "포트폴리오 제작 지원",
          "취업 연계 프로그램",
          "온라인 코딩 환경 제공",
          "실시간 Q&A 세션",
          "수료증 발급",
        ],
        requirements: [
          "고등학교 수학 기본 지식",
          "컴퓨터 활용 능력",
          "프로그래밍에 대한 관심",
          "논리적 사고 능력",
          "주당 10-15시간 학습 시간 확보",
        ],
        outcomes: [
          "Python 프로그래밍 능력",
          "데이터 분석 및 시각화 기술",
          "통계적 사고 및 분석 능력",
          "머신러닝 기초 지식",
          "실무 프로젝트 경험",
          "데이터 사이언스 포트폴리오",
          "IT 분야 진로 설계",
          "논리적 문제 해결 능력",
        ],
        faq: [
          {
            question: "프로그래밍 경험이 전혀 없어도 수강 가능한가요?",
            answer: "네, 가능합니다. 프로그래밍 기초부터 차근차근 설명하며, 개인별 수준에 맞는 학습 자료를 제공합니다.",
          },
          {
            question: "수학이 어려운데 따라갈 수 있을까요?",
            answer:
              "고등학교 수학 수준이면 충분합니다. 필요한 통계 개념은 직관적으로 설명하며, 수학적 배경보다는 실무 활용에 중점을 둡니다.",
          },
        ],
        reviews: [
          {
            id: "review1",
            userName: "김데이터",
            userSchool: "서울대학교",
            rating: 5,
            date: "2024-01-30",
            content:
              "데이터 분석 능력을 키우는 데 매우 유익했습니다. Python 프로그래밍 기초부터 머신러닝까지 체계적으로 학습할 수 있었습니다.",
            isVerified: true,
            helpfulCount: 13,
            tags: ["데이터 분석", "Python", "머신러닝"],
          },
        ],
        bestReviews: [
          {
            id: "bestReview1",
            userName: "김데이터",
            userSchool: "서울대학교",
            rating: 5,
            date: "2024-01-30",
            content:
              "데이터 분석 능력을 키우는 데 매우 유익했습니다. Python 프로그래밍 기초부터 머신러닝까지 체계적으로 학습할 수 있었습니다.",
            isVerified: true,
            helpfulCount: 13,
            tags: ["데이터 분석", "Python", "머신러닝"],
          },
        ],
      },
      "esg-climate": {
        id: "esg-climate",
        title: "지역사회 기후 위기 대응",
        description: "융합적 관점에서 지역사회 기후 문제 해결 프로젝트 기획",
        fullDescription:
          "기후 위기와 지속가능발전이 전 세계적 화두가 된 현재, ESG 경영과 환경 정책에 대한 이해는 필수가 되었습니다. 이 프로그램을 통해 환경 문제의 과학적 원리부터 정책적 해결방안까지 종합적으로 학습하고, 실제 지역사회 문제 해결 프로젝트를 수행하여 실무 역량을 기를 수 있습니다.",
        duration: "3-4주 과정",
        level: "고급",
        price: "69,000원",
        originalPrice: "99,000원",
        rating: 4.9,
        studentCount: 634,
        badge: "신규",
        badgeColor: "bg-green-500",
        thumbnail: "/placeholder.svg?height=400&width=600",
        instructor: {
          name: "이환경 교수",
          title: "연세대학교 환경공학과 교수",
          experience: "18년 환경정책 연구 및 컨설팅 경험",
          education: ["예일대학교 환경학 박사", "서울대학교 환경공학 석사"],
          achievements: [
            "UN 기후변화협약 정책자문위원",
            "환경부 탄소중립위원회 전문위원",
            "국제 환경학술지 편집위원",
            "그린뉴딜 정책 설계 참여",
          ],
          avatar: "/placeholder.svg?height=100&width=100",
        },
        curriculum: [
          {
            week: 1,
            title: "기후 위기 현황 및 영향 분석",
            description: "기후 변화의 과학적 원리와 사회경제적 영향을 종합적으로 학습합니다.",
            lessons: [
              { title: "기후 변화 과학", duration: "55분", type: "video" },
              { title: "기후 영향 사례 조사", duration: "75분", type: "assignment" },
              { title: "지역별 영향 분석", duration: "90분", type: "project" },
              { title: "기후 데이터 해석", duration: "30분", type: "quiz" },
            ],
          },
          {
            week: 2,
            title: "환경 정책 사례 분석",
            description: "국내외 환경 정책의 성공 사례와 실패 사례를 비교 분석합니다.",
            lessons: [
              { title: "정책 분석 방법론", duration: "60분", type: "video" },
              { title: "국내외 정책 비교", duration: "85분", type: "assignment" },
              { title: "정책 효과 평가", duration: "100분", type: "project" },
              { title: "정책 제안서 작성", duration: "50분", type: "assignment" },
            ],
          },
          {
            week: 3,
            title: "지역사회 환경 프로젝트 기획",
            description: "실제 지역사회의 환경 문제를 해결하는 융합형 프로젝트를 기획합니다.",
            lessons: [
              { title: "프로젝트 기획 방법론", duration: "65분", type: "video" },
              { title: "이해관계자 분석", duration: "70분", type: "assignment" },
              { title: "실행 계획 수립", duration: "120분", type: "project" },
              { title: "프로젝트 발표", duration: "45분", type: "assignment" },
            ],
          },
        ],
        assignments: [
          {
            title: "지역사회 기후 위기 대응 융합 프로젝트",
            description:
              "자신이 거주하는 지역의 기후 위기 문제를 선정하여 과학, 기술, 사회, 경제적 관점을 융합한 종합적 해결 방안을 제시하는 프로젝트입니다.",
            difficulty: "고급",
            estimatedTime: "4주",
            deliverables: [
              "지역 환경 문제 현황 분석 보고서",
              "융합적 해결 방안 기획서",
              "이해관계자 참여 전략",
              "예산 및 실행 계획",
              "프로젝트 시연 및 발표 자료",
            ],
            sespecExample:
              "지역사회 기후 위기 대응 융합 프로젝트에서 도시 열섬 현상 완화를 위한 스마트 그린 인프라 구축 방안을 제시하고, 과학기술·사회경제적 관점을 융합하여 실현 가능한 정책 대안을 도출하는 창의적 문제해결 역량을 기름.",
          },
        ],
        features: [
          "환경 전문가 멘토링",
          "정책 기관 견학 프로그램",
          "환경 NGO 연계 활동",
          "지역사회 프로젝트 실행 지원",
          "환경 데이터 분석 도구 제공",
          "정책 제안서 작성 지도",
          "환경 분야 진로 상담",
          "지속가능발전 네트워크 참여",
        ],
        requirements: [
          "환경 문제에 대한 기본적 관심",
          "사회과학 기초 지식",
          "데이터 해석 능력",
          "지역사회 활동 참여 의지",
          "주당 8-12시간 학습 시간 확보",
        ],
        outcomes: [
          "환경 문제의 과학적 이해",
          "정책 분석 및 평가 능력",
          "융합적 문제 해결 역량",
          "지역사회 참여 경험",
          "환경 프로젝트 포트폴리오",
          "지속가능발전 전문 지식",
          "환경 분야 진로 설계",
          "정책 제안 및 실행 경험",
        ],
        faq: [
          {
            question: "환경 관련 배경 지식이 없어도 수강 가능한가요?",
            answer:
              "네, 가능합니다. 환경 문제에 대한 관심만 있다면 충분합니다. 필요한 기초 지식은 강의를 통해 체계적으로 제공합니다.",
          },
          {
            question: "실제 지역사회 프로젝트는 어떻게 진행되나요?",
            answer:
              "수강생의 거주 지역을 기반으로 실제 환경 문제를 선정하고, 지역 환경단체나 지자체와 연계하여 프로젝트를 진행합니다.",
          },
        ],
        reviews: [
          {
            id: "review1",
            userName: "김지구",
            userSchool: "서울대학교",
            rating: 5,
            date: "2024-01-25",
            content:
              "기후 위기에 대한 심각성을 깨닫고 지역사회 문제 해결에 직접 참여할 수 있어서 좋았습니다. 융합적 관점에서 문제 해결 방안을 모색하는 능력을 키울 수 있었습니다.",
            isVerified: true,
            helpfulCount: 11,
            tags: ["기후 위기", "지역사회 문제", "융합적 관점"],
          },
        ],
        bestReviews: [
          {
            id: "bestReview1",
            userName: "김지구",
            userSchool: "서울대학교",
            rating: 5,
            date: "2024-01-25",
            content:
              "기후 위기에 대한 심각성을 깨닫고 지역사회 문제 해결에 직접 참여할 수 있어서 좋았습니다. 융합적 관점에서 문제 해결 방안을 모색하는 능력을 키울 수 있었습니다.",
            isVerified: true,
            helpfulCount: 11,
            tags: ["기후 위기", "지역사회 문제", "융합적 관점"],
          },
        ],
      },
      "quantum-computing": {
        id: "quantum-computing",
        title: "양자컴퓨팅 기초 이론",
        description: "양자역학 원리를 바탕으로 한 차세대 컴퓨팅 기술 탐구",
        fullDescription:
          "미래 컴퓨팅 기술의 핵심인 양자컴퓨팅의 기본 원리와 응용 가능성을 탐구하는 고급 과정입니다. 양자역학의 기초부터 양자 알고리즘, 실제 양자컴퓨터 프로그래밍까지 체계적으로 학습하여 차세대 기술 분야의 전문가로 성장할 수 있는 기반을 마련합니다.",
        duration: "4-5주 과정",
        level: "고급",
        price: "149,000원",
        originalPrice: "199,000원",
        rating: 4.9,
        studentCount: 287,
        badge: "최신",
        badgeColor: "bg-purple-600",
        thumbnail: "/placeholder.svg?height=400&width=600",
        instructor: {
          name: "김양자 박사",
          title: "KAIST 물리학과 교수",
          experience: "15년 양자물리학 연구 및 교육 경험",
          education: ["MIT 물리학 박사", "KAIST 물리학 석사"],
          achievements: [
            "IBM Quantum Network 연구진",
            "양자컴퓨팅 관련 논문 40편 이상",
            "국가과학기술연구회 양자기술 자문위원",
            "삼성전자 양자기술 연구소 자문교수",
          ],
          avatar: "/placeholder.svg?height=100&width=100",
        },
        curriculum: [
          {
            week: 1,
            title: "양자역학 기초 및 양자비트",
            description: "양자컴퓨팅의 기반이 되는 양자역학 원리와 큐비트의 개념을 학습합니다.",
            lessons: [
              { title: "양자역학 기본 원리", duration: "70분", type: "video" },
              { title: "큐비트와 중첩 상태", duration: "60분", type: "video" },
              { title: "양자 상태 시뮬레이션", duration: "90분", type: "assignment" },
              { title: "기초 개념 확인", duration: "25분", type: "quiz" },
            ],
          },
          {
            week: 2,
            title: "양자 게이트와 회로",
            description: "양자 게이트의 동작 원리와 양자 회로 설계 방법을 학습합니다.",
            lessons: [
              { title: "기본 양자 게이트", duration: "65분", type: "video" },
              { title: "양자 회로 설계", duration: "80분", type: "assignment" },
              { title: "양자 얽힘 실습", duration: "100분", type: "project" },
              { title: "회로 설계 연습", duration: "45분", type: "assignment" },
            ],
          },
          {
            week: 3,
            title: "양자 알고리즘",
            description: "대표적인 양자 알고리즘들의 원리와 구현 방법을 학습합니다.",
            lessons: [
              { title: "Grover 알고리즘", duration: "75분", type: "video" },
              { title: "Shor 알고리즘", duration: "85분", type: "video" },
              { title: "알고리즘 구현 실습", duration: "120분", type: "project" },
              { title: "성능 비교 분석", duration: "50분", type: "assignment" },
            ],
          },
          {
            week: 4,
            title: "양자컴퓨터 프로그래밍",
            description: "실제 양자컴퓨터를 활용한 프로그래밍 실습을 진행합니다.",
            lessons: [
              { title: "Qiskit 프로그래밍", duration: "80분", type: "video" },
              { title: "IBM Quantum 실습", duration: "90분", type: "assignment" },
              { title: "양자 프로그램 개발", duration: "150분", type: "project" },
              { title: "결과 분석 및 발표", duration: "60분", type: "assignment" },
            ],
          },
        ],
        assignments: [
          {
            title: "양자 알고리즘 구현 및 성능 분석",
            description:
              "Grover 검색 알고리즘과 Shor 소인수분해 알고리즘을 실제 양자컴퓨터에서 구현하고, 고전 알고리즘과의 성능을 비교 분석하는 프로젝트입니다.",
            difficulty: "고급",
            estimatedTime: "4주",
            deliverables: [
              "양자 알고리즘 이론 분석 보고서",
              "Qiskit을 활용한 알고리즘 구현 코드",
              "IBM Quantum 실행 결과",
              "고전 vs 양자 성능 비교 분석",
              "양자컴퓨팅 응용 방안 제안서",
            ],
            sespecExample:
              "양자 알고리즘 구현 및 성능 분석 프로젝트에서 Grover 검색 알고리즘을 IBM Quantum 컴퓨터에 구현하고 고전 알고리즘과의 성능을 비교하여 양자컴퓨팅의 우수성을 입증하는 논리적 사고력과 첨단 기술 활용 능력을 기름.",
          },
        ],
        features: [
          "IBM Quantum 실습 환경 제공",
          "양자물리학 전문가 멘토링",
          "최신 양자컴퓨터 기술 동향 제공",
          "양자 프로그래밍 실습",
          "연구 논문 작성 지도",
          "양자기술 기업 네트워킹",
          "국제 학회 참가 지원",
          "양자컴퓨팅 수료증 발급",
        ],
        requirements: [
          "고등학교 물리학 및 수학 심화 과정",
          "선형대수학 기본 지식",
          "프로그래밍 기초 능력",
          "논리적 사고 및 수학적 추론 능력",
          "주당 15-20시간 학습 시간 확보",
        ],
        outcomes: [
          "양자역학 기본 원리 이해",
          "양자 알고리즘 설계 및 구현 능력",
          "양자컴퓨터 프로그래밍 기술",
          "첨단 기술 분야 전문 지식",
          "논리적 사고 및 문제 해결 능력",
          "양자기술 분야 진로 설계",
          "연구 개발 역량",
          "미래 기술 트렌드 이해",
        ],
        faq: [
          {
            question: "물리학 전공이 아니어도 수강 가능한가요?",
            answer:
              "고등학교 물리학과 수학을 충실히 학습했다면 가능합니다. 필요한 양자역학 개념은 기초부터 설명하며, 수학적 배경도 단계적으로 제공합니다.",
          },
          {
            question: "실제 양자컴퓨터를 사용할 수 있나요?",
            answer: "네, IBM Quantum Network를 통해 실제 양자컴퓨터에 접근하여 프로그래밍 실습을 진행합니다.",
          },
        ],
        reviews: [
          {
            id: "review1",
            userName: "박양자",
            userSchool: "KAIST",
            rating: 5,
            date: "2024-02-10",
            content:
              "양자컴퓨팅의 기본 원리부터 실제 프로그래밍까지 체계적으로 학습할 수 있었습니다. IBM Quantum 실습이 특히 인상 깊었습니다.",
            isVerified: true,
            helpfulCount: 15,
            tags: ["양자컴퓨팅", "IBM Quantum", "프로그래밍"],
          },
        ],
        bestReviews: [
          {
            id: "bestReview1",
            userName: "박양자",
            userSchool: "KAIST",
            rating: 5,
            date: "2024-02-10",
            content:
              "양자컴퓨팅의 기본 원리부터 실제 프로그래밍까지 체계적으로 학습할 수 있었습니다. IBM Quantum 실습이 특히 인상 깊었습니다.",
            isVerified: true,
            helpfulCount: 15,
            tags: ["양자컴퓨팅", "IBM Quantum", "프로그래밍"],
          },
        ],
      },
      "ai-vision-yolo": {
        id: "ai-vision-yolo",
        title: "AI Computer Vision with YOLOv8",
        description: "실전 AI 프로젝트로 배우는 컴퓨터 비전의 세계",
        fullDescription: "컴퓨터 비전의 기본 원리부터 YOLOv8을 활용한 실전 프로젝트까지, 체계적으로 배우는 AI 비전 과정입니다. 이론과 실습의 균형잡힌 커리큘럼으로, 실제 문제를 해결하는 AI 시스템을 직접 개발해볼 수 있습니다.",
        duration: "4주 과정",
        level: "초급-중급",
        price: "149,000원",
        originalPrice: "199,000원",
        rating: 0,
        studentCount: 0,
        badge: "실전 프로젝트",
        badgeColor: "bg-blue-600",
        thumbnail: "/placeholder.svg?height=200&width=400",
        instructor: {
          name: "김AI 박사",
          title: "KAIST AI 연구소 연구원",
          experience: "10년 컴퓨터 비전 연구 및 개발 경험",
          education: ["KAIST 컴퓨터공학 박사", "서울대학교 전산학 석사"],
          achievements: [
            "국제 컴퓨터 비전 학회 논문 30편 이상 발표",
            "YOLOv8 기반 프로젝트 다수 개발",
            "AI 스타트업 기술 자문",
            "AI 교육 프로그램 개발 경험"
          ],
          avatar: "/placeholder.svg?height=100&width=100"
        },
        curriculum: [
          {
            week: 1,
            title: "컴퓨터 비전 기초와 딥러닝",
            description: "컴퓨터 비전의 기본 개념과 딥러닝 기초를 학습합니다.",
            lessons: [
              { title: "컴퓨터 비전 개요", duration: "45분", type: "video" },
              { title: "딥러닝 기초", duration: "60분", type: "video" },
              { title: "이미지 처리 기초", duration: "90분", type: "assignment" },
              { title: "기초 개념 퀴즈", duration: "15분", type: "quiz" }
            ]
          },
          {
            week: 2,
            title: "YOLOv8 이해와 실습",
            description: "YOLOv8의 구조와 원리를 이해하고 기본적인 실습을 진행합니다.",
            lessons: [
              { title: "YOLOv8 아키텍처", duration: "50분", type: "video" },
              { title: "YOLOv8 설치 및 설정", duration: "75분", type: "assignment" },
              { title: "기본 객체 감지 실습", duration: "120분", type: "project" },
              { title: "멘토링 세션", duration: "30분", type: "assignment" }
            ]
          },
          {
            week: 3,
            title: "프로젝트 기획 및 구현",
            description: "실제 문제를 해결하는 프로젝트를 기획하고 구현합니다.",
            lessons: [
              { title: "프로젝트 주제 선정", duration: "60분", type: "video" },
              { title: "데이터 수집 및 전처리", duration: "90분", type: "assignment" },
              { title: "모델 학습 및 최적화", duration: "120분", type: "project" },
              { title: "멘토링 세션", duration: "45분", type: "assignment" }
            ]
          },
          {
            week: 4,
            title: "프로젝트 완성 및 발표",
            description: "프로젝트를 완성하고 결과를 발표합니다.",
            lessons: [
              { title: "성능 평가 및 개선", duration: "60분", type: "video" },
              { title: "프로젝트 문서화", duration: "90분", type: "assignment" },
              { title: "최종 발표 준비", duration: "120분", type: "project" },
              { title: "프로젝트 발표", duration: "45분", type: "assignment" }
            ]
          }
        ],
        assignments: [
          {
            title: "YOLOv8 기반 실생활 문제 해결 프로젝트",
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
          "2주 1회 멘토링 세션",
          "실전 프로젝트 완성",
          "GitHub 포트폴리오 구축",
          "커뮤니티 참여",
          "수료증 발급",
          "평생 강의 자료 제공",
          "AI 업계 네트워킹 기회"
        ],
        requirements: [
          "Python 기초 지식",
          "기본적인 프로그래밍 경험",
          "AI에 대한 기본적 관심",
          "주당 5-8시간 학습 시간 확보",
          "프로젝트 참여 의지"
        ],
        outcomes: [
          "컴퓨터 비전의 기본 원리 이해",
          "YOLOv8 모델 구현 능력",
          "실제 문제 해결 프로젝트 경험",
          "AI 시스템 개발 역량",
          "GitHub 포트폴리오 구축",
          "AI 관련 진로 설계"
        ],
        faq: [
          {
            question: "프로그래밍 경험이 없어도 수강 가능한가요?",
            answer: "Python 기초 지식이 필요합니다. 프로그래밍 경험이 전혀 없는 경우, Python 기초를 먼저 학습하시는 것을 추천드립니다."
          },
          {
            question: "멘토링 세션은 어떻게 진행되나요?",
            answer: "2주에 1회, 온라인으로 진행됩니다. 프로젝트 진행 상황을 점검하고 질문에 답변하는 시간을 가집니다."
          }
        ],
        reviews: [],
        bestReviews: []
      },
    }

    return programs[id] || null
  }

  const handleEnrollment = () => {
    router.push(`/payment/program/${programId}`)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-4 w-4" />
      case "assignment":
        return <FileText className="h-4 w-4" />
      case "quiz":
        return <Quiz className="h-4 w-4" />
      case "project":
        return <Briefcase className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">프로그램 정보를 불러오는 중...</p>
        </div>
      </div>
    )
  }

  if (error || !programData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">오류가 발생했습니다</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={() => router.back()}>이전 페이지로 돌아가기</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Badge className={`${programData.badgeColor} text-white`}>{programData.badge}</Badge>
                <span className="text-sm text-gray-500">{programData.level}</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{programData.title}</h1>

              <p className="text-lg text-gray-600 mb-6">{programData.description}</p>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{programData.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{programData.studentCount.toLocaleString()}명 수강</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{programData.duration}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <img
                    src={programData.thumbnail || "/placeholder.svg"}
                    alt={programData.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />

                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{programData.price}</span>
                      <span className="text-lg text-gray-400 line-through">{programData.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500">할인가 적용 중</p>
                  </div>

                  <Button
                    onClick={handleEnrollment}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                    size="lg"
                  >
                    지금 등록하기
                  </Button>

                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>평생 수강 가능</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>수료증 발급</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>1:1 멘토링 포함</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="curriculum">커리큘럼</TabsTrigger>
            <TabsTrigger value="instructor">강사</TabsTrigger>
            <TabsTrigger value="reviews">후기</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="assignments">과제</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>프로그램 소개</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{programData.fullDescription}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>학습 목표</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {programData.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>수강 요건</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {programData.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>프로그램 특징</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {programData.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="curriculum" className="mt-6">
            <div className="space-y-6">
              {programData.curriculum.map((week) => (
                <Card key={week.week}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                        {week.week}주차
                      </span>
                      {week.title}
                    </CardTitle>
                    <p className="text-gray-600">{week.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {week.lessons.map((lesson, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          {getTypeIcon(lesson.type)}
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                          </div>
                          <span className="text-sm text-gray-500">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="instructor" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <img
                    src={programData.instructor.avatar || "/placeholder.svg"}
                    alt={programData.instructor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{programData.instructor.name}</h3>
                    <p className="text-lg text-gray-600 mb-4">{programData.instructor.title}</p>
                    <p className="text-gray-600 mb-6">{programData.instructor.experience}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">학력</h4>
                        <ul className="space-y-1">
                          {programData.instructor.education.map((edu, index) => (
                            <li key={index} className="text-gray-600">
                              • {edu}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">주요 경력</h4>
                        <ul className="space-y-1">
                          {programData.instructor.achievements.map((achievement, index) => (
                            <li key={index} className="text-gray-600">
                              • {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  <span className="text-2xl font-bold">{programData.rating}</span>
                  <span className="text-gray-500">/ 5.0</span>
                </div>
                <p className="text-gray-600">{programData.studentCount.toLocaleString()}명의 수강생 평가</p>
              </div>

              <div className="space-y-4">
                {programData.bestReviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{review.userName}</span>
                            {review.isVerified && (
                              <Badge variant="secondary" className="text-xs">
                                인증된 수강생
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{review.userSchool}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{review.content}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {review.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" onClick={() => router.push(`/program-details/${programId}/reviews`)}>
                  모든 후기 보기
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-6">
            <div className="space-y-4">
              {programData.faq.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Q. {item.question}</h3>
                    <p className="text-gray-600 leading-relaxed">A. {item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignments" className="mt-6">
            <div className="space-y-6">
              {programData.assignments.map((assignment, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{assignment.title}</CardTitle>
                      <Badge
                        variant={
                          assignment.difficulty === "고급"
                            ? "destructive"
                            : assignment.difficulty === "중급"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {assignment.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{assignment.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">제출물</h4>
                        <ul className="space-y-1">
                          {assignment.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">예상 소요 시간</h4>
                        <p className="text-gray-600 mb-4">{assignment.estimatedTime}</p>

                        <h4 className="font-semibold text-gray-900 mb-3">세특 예시</h4>
                        <p className="text-gray-600 text-sm bg-blue-50 p-3 rounded-lg">{assignment.sespecExample}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
