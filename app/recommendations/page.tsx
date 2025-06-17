"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import type { UserData } from "@/lib/types"
import Link from "next/link"
import {
  Play,
  Star,
  Clock,
  CheckCircle,
  GraduationCap,
  BarChart3,
  ArrowRight,
  BookOpen,
  Target,
  Award,
  TrendingUp,
  Home,
  RefreshCw,
  Globe,
  Trophy,
  Building,
  Briefcase,
} from "lucide-react"

interface RecommendedProgram {
  id: string
  title: string
  provider: string
  thumbnail: string
  description: string
  type: "setak" | "premium"
  category: string
  difficulty: "beginner" | "intermediate" | "advanced"
  duration: string
  price?: string
  originalPrice?: string
  discount?: string
  rating: number
  students: number
  keywords: string[]
  matchScore: number
  whyRecommended: string
  expectedOutcome: string
  features: string[]
  instructor: {
    name: string
    title: string
    company: string
    experience: string
  }
  curriculum: string[]
  benefits: string[]
  targetAudience: string[]
}

export default function RecommendationsPage() {
  const [userData, setUserData] = useState<UserData>({})
  const [activeTab, setActiveTab] = useState("setak")

  useEffect(() => {
    const savedData = localStorage.getItem("userDiagnosisData")
    if (savedData) {
      const data = JSON.parse(savedData)
      setUserData(data)
    }
  }, [])

  // 진단 결과 기반 세특 프로그램 추천
  const setakPrograms: RecommendedProgram[] = [
    {
      id: "kaist-ai-research",
      title: "KAIST AI 융합 전자공학 심화 연구 과정",
      provider: "KAIST 전기전자공학부",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "AI와 전자공학의 융합 연구를 통한 차세대 기술 개발 프로젝트",
      type: "setak",
      category: "AI/전자공학",
      difficulty: "advanced",
      duration: "6개월",
      price: "300만원",
      rating: 4.9,
      students: 24,
      keywords: ["AI", "전자공학", "연구", "논문", "특허"],
      matchScore: 98,
      whyRecommended: "전기전자공학 전공 적합성 98점, 물리·수학 우수 성적, 로봇공학 동아리 활동과 완벽 매칭",
      expectedOutcome: "SCI급 논문 공동저자, KAIST 교수 추천서, 국제학회 발표 기회",
      features: ["1:1 교수 멘토링", "실제 연구 프로젝트 참여", "논문 작성 지도", "특허 출원 기회"],
      instructor: {
        name: "김영수 교수",
        title: "KAIST 전기전자공학부 교수",
        company: "KAIST",
        experience: "15년, IEEE Fellow, 논문 200편 이상",
      },
      curriculum: [
        "고급 회로 설계 및 시뮬레이션",
        "AI 알고리즘과 하드웨어 융합",
        "개인 연구 프로젝트 수행",
        "연구 논문 작성 및 발표",
        "특허 출원 실습",
      ],
      benefits: ["KAIST 입학 시 연구실 우선 배정", "장학금 혜택 (최대 50%)", "해외 학회 발표 지원", "대학원 진학 우대"],
      targetAudience: ["전기전자공학 진학 희망자", "연구 경험 필요한 학생", "해외 명문대 지원자"],
    },
    {
      id: "mit-global-engineering",
      title: "MIT 글로벌 공학 리더십 프로그램",
      provider: "MIT Professional Education",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "MIT 캠퍼스에서 진행되는 글로벌 공학 리더십 및 혁신 프로그램",
      type: "setak",
      category: "글로벌/리더십",
      difficulty: "advanced",
      duration: "3개월",
      price: "800만원",
      rating: 4.8,
      students: 16,
      keywords: ["MIT", "글로벌", "리더십", "혁신", "네트워킹"],
      matchScore: 92,
      whyRecommended: "국제 경험 부족 보완, 글로벌 리더십 역량 개발, 해외 명문대 지원 시 결정적 차별화",
      expectedOutcome: "MIT 수료증, 실리콘밸리 네트워킹, 글로벌 프로젝트 경험, 영어 논문 작성 능력",
      features: ["MIT 캠퍼스 2주 현지 연수", "실리콘밸리 기업 방문", "글로벌 팀 프로젝트", "MIT 교수진 멘토링"],
      instructor: {
        name: "Prof. Sarah Johnson",
        title: "MIT 기계공학과 교수",
        company: "MIT",
        experience: "20년, 글로벌 공학 교육 전문가",
      },
      curriculum: [
        "글로벌 공학 프로젝트 관리",
        "국제 팀워크 및 리더십",
        "영어 기술 논문 작성",
        "MIT 캠퍼스 현지 연수",
        "실리콘밸리 기업 방문",
      ],
      benefits: ["해외 명문대 지원 시 강력한 차별화", "글로벌 네트워킹 구축", "영어 실력 향상", "국제적 시각 확보"],
      targetAudience: ["해외 대학 진학 희망자", "글로벌 리더십 개발", "국제 경험 필요한 학생"],
    },
    {
      id: "samsung-semiconductor",
      title: "삼성전자 차세대 반도체 인턴십",
      provider: "삼성전자 DS부문",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "삼성전자 반도체 부문에서 진행하는 실무 중심 인턴십 프로그램",
      type: "setak",
      category: "반도체/실무",
      difficulty: "intermediate",
      duration: "4개월",
      price: "무료 (인턴 수당 지급)",
      rating: 4.7,
      students: 32,
      keywords: ["삼성", "반도체", "인턴십", "실무", "취업"],
      matchScore: 89,
      whyRecommended: "실무 프로젝트 경험 부족 보완, 산업 현장 경험, 취업 연계 기회",
      expectedOutcome: "삼성전자 임원 추천서, 실무 프로젝트 포트폴리오, 취업 연계 기회, 산업 네트워킹",
      features: ["현직 엔지니어 멘토링", "최신 장비 활용", "실제 프로젝트 참여", "취업 연계"],
      instructor: {
        name: "이준호 상무",
        title: "삼성전자 DS부문 상무",
        company: "삼성전자",
        experience: "25년, 반도체 설계 전문가",
      },
      curriculum: [
        "반도체 설계 실무 프로젝트",
        "현직 엔지니어 멘토링",
        "최신 장비 및 소프트웨어 활용",
        "팀 프로젝트 리더 역할",
        "기업 문화 및 비즈니스 이해",
      ],
      benefits: ["삼성전자 취업 우대", "실무 경험 포트폴리오", "인턴 수당 지급", "정규직 전환 기회"],
      targetAudience: ["실무 경험 필요한 학생", "취업 준비생", "기업 문화 체험 희망자"],
    },
  ]

  // 진단 결과 기반 프리미엄 과정 추천
  const premiumPrograms: RecommendedProgram[] = [
    {
      id: "naver-ai-bootcamp",
      title: "네이버 AI 부트캠프 - 전자공학 특화",
      provider: "네이버 커넥트재단",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "네이버의 AI 기술을 활용한 전자공학 융합 부트캠프",
      type: "premium",
      category: "AI/전자공학",
      difficulty: "intermediate",
      duration: "16주",
      price: "450만원",
      originalPrice: "600만원",
      discount: "25%",
      rating: 4.8,
      students: 156,
      keywords: ["네이버", "AI", "부트캠프", "전자공학", "실무"],
      matchScore: 95,
      whyRecommended: "AI와 전자공학 융합 역량, 네이버 현직자 멘토링, 실무 프로젝트 경험",
      expectedOutcome: "네이버 AI 기술 활용 능력, 포트폴리오 구축, 취업 연계 기회",
      features: ["네이버 현직자 멘토링", "실제 서비스 개발", "AI 모델 구현", "취업 지원"],
      instructor: {
        name: "박민수 리드",
        title: "네이버 AI Lab 리드",
        company: "네이버",
        experience: "12년, AI 서비스 개발 전문가",
      },
      curriculum: [
        "AI 기초 이론 및 실습",
        "전자공학과 AI 융합 프로젝트",
        "네이버 AI 플랫폼 활용",
        "팀 프로젝트 및 발표",
        "포트폴리오 구축",
      ],
      benefits: ["네이버 취업 우대", "수료증 발급", "포트폴리오 구축 지원", "네트워킹 기회"],
      targetAudience: ["AI 융합 기술 학습자", "네이버 취업 희망자", "실무 프로젝트 경험자"],
    },
    {
      id: "kakao-tech-campus",
      title: "카카오 테크 캠퍼스 - IoT 개발자 과정",
      provider: "카카오",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "카카오의 IoT 기술을 활용한 스마트 디바이스 개발 과정",
      type: "premium",
      category: "IoT/개발",
      difficulty: "intermediate",
      duration: "12주",
      price: "380만원",
      originalPrice: "480만원",
      discount: "20%",
      rating: 4.7,
      students: 124,
      keywords: ["카카오", "IoT", "스마트디바이스", "개발", "실무"],
      matchScore: 91,
      whyRecommended: "IoT와 전자공학 연계성, 실무 중심 커리큘럼, 카카오 기술 스택 학습",
      expectedOutcome: "IoT 디바이스 개발 능력, 카카오 기술 스택 이해, 실무 프로젝트 완성",
      features: ["카카오 IoT 플랫폼 활용", "하드웨어 실습", "앱 개발 연동", "현직자 멘토링"],
      instructor: {
        name: "김하늘 팀장",
        title: "카카오 IoT 개발팀 팀장",
        company: "카카오",
        experience: "10년, IoT 플랫폼 개발 전문가",
      },
      curriculum: [
        "IoT 기초 및 센서 활용",
        "카카오 IoT 플랫폼 연동",
        "스마트 디바이스 개발",
        "모바일 앱 연동",
        "최종 프로젝트 발표",
      ],
      benefits: ["카카오 취업 기회", "IoT 개발 포트폴리오", "하드웨어 실습 키트 제공", "수료 후 네트워킹"],
      targetAudience: ["IoT 개발자 희망자", "하드웨어 개발 관심자", "카카오 취업 준비생"],
    },
    {
      id: "google-ai-everyone",
      title: "Google AI for Everyone - 공학자를 위한 AI",
      provider: "Google",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "구글의 AI 기술을 공학 분야에 적용하는 실무 중심 과정",
      type: "premium",
      category: "AI/글로벌",
      difficulty: "beginner",
      duration: "8주",
      price: "280만원",
      originalPrice: "350만원",
      discount: "20%",
      rating: 4.6,
      students: 89,
      keywords: ["구글", "AI", "공학", "글로벌", "인증"],
      matchScore: 87,
      whyRecommended: "글로벌 AI 기술 학습, 구글 인증서 취득, 영어 실력 향상",
      expectedOutcome: "Google AI 인증서, 글로벌 AI 기술 이해, 영어 기술 문서 작성 능력",
      features: ["구글 AI 도구 활용", "영어 강의", "글로벌 프로젝트", "인증서 발급"],
      instructor: {
        name: "Dr. Michael Chen",
        title: "Google AI Research Scientist",
        company: "Google",
        experience: "15년, AI 연구 및 교육 전문가",
      },
      curriculum: [
        "AI 기초 개념 및 응용",
        "Google AI 플랫폼 활용",
        "공학 분야 AI 적용 사례",
        "프로젝트 기반 학습",
        "최종 발표 및 인증",
      ],
      benefits: ["Google 공식 인증서", "글로벌 네트워킹", "영어 실력 향상", "AI 포트폴리오 구축"],
      targetAudience: ["AI 입문자", "글로벌 인증 희망자", "영어 실력 향상 필요자"],
    },
    {
      id: "aws-solutions-architect",
      title: "AWS 솔루션 아키텍트 - IoT 특화 과정",
      provider: "Amazon Web Services",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "AWS 클라우드를 활용한 IoT 솔루션 아키텍처 설계 과정",
      type: "premium",
      category: "클라우드/IoT",
      difficulty: "advanced",
      duration: "10주",
      price: "420만원",
      originalPrice: "520만원",
      discount: "19%",
      rating: 4.9,
      students: 67,
      keywords: ["AWS", "클라우드", "IoT", "아키텍처", "인증"],
      matchScore: 85,
      whyRecommended: "클라우드와 IoT 융합 기술, AWS 공식 인증, 글로벌 표준 기술 학습",
      expectedOutcome: "AWS 솔루션 아키텍트 자격증, IoT 클라우드 설계 능력, 글로벌 기술 역량",
      features: ["AWS 실습 환경", "실제 프로젝트 구현", "자격증 취득 지원", "글로벌 인증"],
      instructor: {
        name: "James Wilson",
        title: "AWS Solutions Architect",
        company: "Amazon Web Services",
        experience: "12년, 클라우드 아키텍처 전문가",
      },
      curriculum: ["AWS 클라우드 기초", "IoT 서비스 아키텍처", "보안 및 모니터링", "실습 프로젝트", "자격증 시험 준비"],
      benefits: ["AWS 공식 자격증", "글로벌 취업 기회", "클라우드 전문성", "높은 연봉 기대"],
      targetAudience: ["클라우드 전문가 희망자", "AWS 자격증 취득자", "글로벌 취업 준비생"],
    },
  ]

  const handleEnroll = (programId: string, title: string, type: string) => {
    const message =
      type === "setak"
        ? `🎓 "${title}" 세특 프로그램 신청이 완료되었습니다!\n\n📧 자동 전송 내용:\n• 프로그램 확인서가 학생 이메일로 발송\n• 담당 교사에게 수강 알림 전송\n• 완료 시 세특 문장 자동 생성\n• 생활기록부 작성 가이드 제공\n\n📊 학습 진도는 '나의 학습 현황'에서 확인 가능합니다.`
        : `💎 "${title}" 프리미엄 과정 수강 신청이 완료되었습니다!\n\n📧 자동 전송 내용:\n• 수강 확인서가 학생 이메일로 발송\n• 결제 안내 및 수강 가이드 제공\n• 강사진 소개 및 커리큘럼 상세 정보\n• 수강생 전용 커뮤니티 초대\n\n🎯 수강 시작일: 신청 후 3일 이내`

    alert(message)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 border-green-200"
      case "intermediate":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "advanced":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "초급"
      case "intermediate":
        return "중급"
      case "advanced":
        return "고급"
      default:
        return "일반"
    }
  }

  const ProgramCard = ({ program }: { program: RecommendedProgram }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
      <div className="relative">
        <img src={program.thumbnail || "/placeholder.svg"} alt={program.title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 flex gap-2">
          <Badge className={program.type === "setak" ? "bg-green-600" : "bg-purple-600"}>
            {program.type === "setak" ? "세특 프로그램" : "프리미엄"}
          </Badge>
          <Badge variant="outline" className={getDifficultyColor(program.difficulty)}>
            {getDifficultyText(program.difficulty)}
          </Badge>
        </div>
        <div className="absolute top-2 left-2">
          <Badge className="bg-red-600 text-white font-bold">매칭도 {program.matchScore}%</Badge>
        </div>
      </div>

      <CardHeader>
        <div className="space-y-2">
          <CardTitle className="text-lg leading-tight">{program.title}</CardTitle>
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="w-fit">
              {program.provider}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{program.rating}</span>
              <span className="text-sm text-gray-500">({program.students}명)</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm">{program.description}</p>

        {/* 추천 이유 */}
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <p className="text-sm font-medium text-blue-800 mb-1">🎯 왜 추천되었나요?</p>
          <p className="text-sm text-blue-700">{program.whyRecommended}</p>
        </div>

        {/* 예상 성과 */}
        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
          <p className="text-sm font-medium text-green-800 mb-1">🏆 예상 성과</p>
          <p className="text-sm text-green-700">{program.expectedOutcome}</p>
        </div>

        {/* 주요 특징 */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">✨ 주요 특징</p>
          <div className="grid grid-cols-2 gap-1">
            {program.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-600" />
                <span className="text-xs text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 강사 정보 */}
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-800">{program.instructor.name}</span>
          </div>
          <p className="text-xs text-gray-600">{program.instructor.title}</p>
          <p className="text-xs text-gray-500">{program.instructor.experience}</p>
        </div>

        {/* 가격 및 기간 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{program.duration}</span>
          </div>
          <div className="text-right">
            {program.originalPrice && <div className="text-xs text-gray-400 line-through">{program.originalPrice}</div>}
            <div className="font-semibold text-blue-600 flex items-center gap-1">
              {program.price}
              {program.discount && <Badge className="bg-red-600 text-xs">{program.discount} 할인</Badge>}
            </div>
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="space-y-2">
          <Button className="w-full" onClick={() => handleEnroll(program.id, program.title, program.type)}>
            <Play className="h-4 w-4 mr-2" />
            {program.type === "setak" ? "세특 프로그램 신청" : "프리미엄 과정 수강"}
          </Button>

          <Link href={program.type === "setak" ? `/program-details/${program.id}` : `/course-details/${program.id}`}>
            <Button variant="outline" className="w-full">
              <BookOpen className="h-4 w-4 mr-2" />
              상세 정보 보기
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">🎯 맞춤형 추천 콘텐츠</h1>
            <p className="text-xl text-gray-600 mb-6">박성민 학생의 진단 결과를 바탕으로 선별된 최적의 학습 콘텐츠</p>

            {/* 진단 결과 요약 */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-blue-700">전공 적합성</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-600">94점</div>
                <div className="text-sm text-green-700">학업 역량</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">S등급</div>
                <div className="text-sm text-purple-700">종합 평가</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-2xl font-bold text-orange-600">상위 1%</div>
                <div className="text-sm text-orange-700">전국 순위</div>
              </div>
            </div>
          </div>

          {/* 탭 메뉴 */}
          <Tabs defaultValue="setak" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 mb-8 max-w-md mx-auto">
              <TabsTrigger value="setak" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                세특 프로그램
              </TabsTrigger>
              <TabsTrigger value="premium" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                프리미엄 과정
              </TabsTrigger>
            </TabsList>

            {/* 세특 프로그램 탭 */}
            <TabsContent value="setak">
              <div className="mb-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                  <h2 className="text-2xl font-bold text-green-800 mb-2">🎓 세특 프로그램 추천</h2>
                  <p className="text-green-700 mb-4">생활기록부 세부능력 및 특기사항 강화를 위한 전문 프로그램</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-green-700">전공 맞춤형 설계</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-green-700">교사 연동 시스템</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-green-700">상위권 대학 진학</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {setakPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>

            {/* 프리미엄 과정 탭 */}
            <TabsContent value="premium">
              <div className="mb-6">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                  <h2 className="text-2xl font-bold text-purple-800 mb-2">💎 프리미엄 과정 추천</h2>
                  <p className="text-purple-700 mb-4">
                    기업 연계 실무 프로젝트와 글로벌 인증을 통한 차별화된 역량 개발
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-purple-600" />
                      <span className="text-sm text-purple-700">기업 연계 프로젝트</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-purple-600" />
                      <span className="text-sm text-purple-700">글로벌 인증</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-purple-600" />
                      <span className="text-sm text-purple-700">취업 연계</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {premiumPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* 하단 네비게이션 */}
          <div className="flex justify-center gap-4 mt-12">
            <Link href="/">
              <Button size="lg" variant="outline" className="px-8">
                <Home className="h-5 w-5 mr-2" />
                홈으로 가기
              </Button>
            </Link>
            <Link href="/results">
              <Button size="lg" variant="outline" className="px-8">
                <RefreshCw className="h-5 w-5 mr-2" />
                결과 다시 보기
              </Button>
            </Link>
            <Link href="/learning-dashboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                <BarChart3 className="h-5 w-5 mr-2" />
                나의 학습 현황
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
