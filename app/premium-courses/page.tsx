"use client"

import React from 'react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  CheckCircle,
  Target,
  BookOpen,
  Award,
  Zap,
  Globe,
  Briefcase,
  Building2,
  Rocket,
  Trophy,
} from "lucide-react"

interface Course {
  id: string
  title: string
  description: string
  duration: string
  level: string
  price: string
  originalPrice: string
  rating: number
  studentCount: number
  badge: string
  badgeColor: string
  category: string
  features: string[]
  thumbnail: string
  instructor: string
  difficulty: string
  partnerCompany?: {
    name: string
    logo: string
    type: "domestic" | "global"
    description: string
  }
  internshipOpportunity?: boolean
  certificationPartner?: string
}

export default function PremiumCoursesPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "전체", icon: Globe },
    { id: "ai", name: "AI/컴퓨터공학", icon: BookOpen },
    { id: "bio", name: "바이오/의학", icon: Award },
    { id: "esg", name: "ESG/환경", icon: Target },
    { id: "business", name: "경영/비즈니스", icon: Briefcase },
    { id: "partnership", name: "기업 연계", icon: Building2 },
  ]

  const courses: Course[] = [
    // 기존 과정들
    {
      id: "premium-ai",
      title: "AI 전문가 과정",
      description: "머신러닝부터 딥러닝까지, 실무 프로젝트 중심의 AI 전문가 양성 과정",
      duration: "8주 과정",
      level: "중급-고급",
      price: "149,000원",
      originalPrice: "199,000원",
      rating: 4.9,
      studentCount: 127,
      badge: "인기",
      badgeColor: "bg-red-500",
      category: "ai",
      features: ["1:1 전문 멘토링", "실무 프로젝트 3개", "포트폴리오 제작 지원", "취업 연계 프로그램"],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "김민수 박사",
      difficulty: "advanced",
    },
    {
      id: "premium-bio",
      title: "바이오 연구자 과정",
      description: "CRISPR 유전자 편집부터 신약 개발까지, 바이오 분야 심화 연구 과정",
      duration: "10주 과정",
      level: "고급",
      price: "179,000원",
      originalPrice: "229,000원",
      rating: 4.8,
      studentCount: 89,
      badge: "신규",
      badgeColor: "bg-green-500",
      category: "bio",
      features: ["실험실 견학 프로그램", "논문 작성 지도", "연구진과의 네트워킹", "대학 연구실 연계"],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "박지영 교수",
      difficulty: "advanced",
    },
    {
      id: "premium-esg",
      title: "ESG 전문가 과정",
      description: "지속가능경영부터 탄소중립까지, ESG 전문가로 성장하는 완성형 과정",
      duration: "6주 과정",
      level: "중급",
      price: "129,000원",
      originalPrice: "169,000원",
      rating: 4.7,
      studentCount: 156,
      badge: "추천",
      badgeColor: "bg-blue-500",
      category: "esg",
      features: ["기업 ESG 사례 분석", "정책 제안서 작성", "환경 컨설팅 실습", "인턴십 기회 제공"],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "이수진 이사",
      difficulty: "intermediate",
    },

    // 🆕 기업 연계 프로그램들
    {
      id: "naver-ai-bootcamp",
      title: "네이버 AI 부트캠프",
      description: "네이버 AI 연구소와 함께하는 실무 중심 AI 개발자 양성 프로그램",
      duration: "12주 과정",
      level: "고급",
      price: "299,000원",
      originalPrice: "399,000원",
      rating: 4.9,
      studentCount: 45,
      badge: "기업 연계",
      badgeColor: "bg-green-600",
      category: "partnership",
      features: [
        "네이버 AI 연구소 현직자 멘토링",
        "실제 네이버 서비스 데이터 활용",
        "네이버 인턴십 우선 선발",
        "네이버 AI 인증서 발급",
      ],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "네이버 AI 연구소 팀",
      difficulty: "advanced",
      partnerCompany: {
        name: "네이버 (NAVER)",
        logo: "/placeholder.svg?height=50&width=100",
        type: "domestic",
        description: "국내 최대 IT 기업, AI 기술 선도",
      },
      internshipOpportunity: true,
      certificationPartner: "네이버 AI 연구소",
    },
    {
      id: "kakao-tech-campus",
      title: "카카오 테크 캠퍼스",
      description: "카카오와 함께하는 풀스택 개발자 양성 프로그램",
      duration: "16주 과정",
      level: "중급-고급",
      price: "349,000원",
      originalPrice: "449,000원",
      rating: 4.8,
      studentCount: 67,
      badge: "풀스택",
      badgeColor: "bg-yellow-500",
      category: "partnership",
      features: [
        "카카오 현직 개발자 직접 지도",
        "카카오톡, 카카오맵 등 실제 서비스 분석",
        "카카오 채용 연계 프로그램",
        "카카오 기술 인증서 발급",
      ],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "카카오 개발팀",
      difficulty: "advanced",
      partnerCompany: {
        name: "카카오 (Kakao)",
        logo: "/placeholder.svg?height=50&width=100",
        type: "domestic",
        description: "모바일 플랫폼 선도 기업",
      },
      internshipOpportunity: true,
      certificationPartner: "카카오",
    },
    {
      id: "samsung-sds-cloud",
      title: "삼성SDS 클라우드 아키텍트 과정",
      description: "삼성SDS와 함께하는 엔터프라이즈 클라우드 전문가 양성 프로그램",
      duration: "10주 과정",
      level: "고급",
      price: "279,000원",
      originalPrice: "359,000원",
      rating: 4.7,
      studentCount: 38,
      badge: "클라우드",
      badgeColor: "bg-blue-600",
      category: "partnership",
      features: [
        "삼성SDS 클라우드 전문가 멘토링",
        "AWS, Azure 실무 프로젝트",
        "삼성 계열사 인턴십 기회",
        "삼성SDS 클라우드 인증서",
      ],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "삼성SDS 클라우드팀",
      difficulty: "advanced",
      partnerCompany: {
        name: "삼성SDS",
        logo: "/placeholder.svg?height=50&width=100",
        type: "domestic",
        description: "글로벌 IT 서비스 기업",
      },
      internshipOpportunity: true,
      certificationPartner: "삼성SDS",
    },
    {
      id: "google-ai-program",
      title: "Google AI for Everyone",
      description: "구글과 함께하는 AI 리터러시 및 머신러닝 기초 프로그램",
      duration: "8주 과정",
      level: "초급-중급",
      price: "199,000원",
      originalPrice: "259,000원",
      rating: 4.9,
      studentCount: 156,
      badge: "글로벌",
      badgeColor: "bg-red-600",
      category: "partnership",
      features: [
        "구글 AI 전문가 온라인 멘토링",
        "Google Cloud Platform 실습",
        "Google AI 인증서 발급",
        "구글 코리아 견학 프로그램",
      ],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "Google AI 팀",
      difficulty: "intermediate",
      partnerCompany: {
        name: "Google",
        logo: "/placeholder.svg?height=50&width=100",
        type: "global",
        description: "글로벌 AI 기술 선도 기업",
      },
      internshipOpportunity: false,
      certificationPartner: "Google AI",
    },
    {
      id: "microsoft-azure-developer",
      title: "Microsoft Azure 개발자 과정",
      description: "마이크로소프트와 함께하는 클라우드 네이티브 개발자 양성 프로그램",
      duration: "12주 과정",
      level: "중급-고급",
      price: "259,000원",
      originalPrice: "329,000원",
      rating: 4.8,
      studentCount: 89,
      badge: "클라우드",
      badgeColor: "bg-blue-700",
      category: "partnership",
      features: [
        "Microsoft MVP 멘토링",
        "Azure 실무 프로젝트 개발",
        "Microsoft 공식 인증서",
        "Microsoft 코리아 네트워킹",
      ],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "Microsoft Azure 팀",
      difficulty: "advanced",
      partnerCompany: {
        name: "Microsoft",
        logo: "/placeholder.svg?height=50&width=100",
        type: "global",
        description: "글로벌 클라우드 플랫폼 선도 기업",
      },
      internshipOpportunity: false,
      certificationPartner: "Microsoft",
    },
    {
      id: "amazon-aws-architect",
      title: "AWS 솔루션 아키텍트 과정",
      description: "아마존과 함께하는 클라우드 솔루션 아키텍트 전문가 양성 프로그램",
      duration: "14주 과정",
      level: "고급",
      price: "329,000원",
      originalPrice: "429,000원",
      rating: 4.9,
      studentCount: 72,
      badge: "아키텍트",
      badgeColor: "bg-orange-600",
      category: "partnership",
      features: [
        "AWS 공인 강사 직접 지도",
        "실제 기업 인프라 설계 프로젝트",
        "AWS 공식 자격증 취득 지원",
        "AWS 파트너사 취업 연계",
      ],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "AWS 공인 강사팀",
      difficulty: "advanced",
      partnerCompany: {
        name: "Amazon Web Services",
        logo: "/placeholder.svg?height=50&width=100",
        type: "global",
        description: "글로벌 클라우드 서비스 1위 기업",
      },
      internshipOpportunity: false,
      certificationPartner: "AWS",
    },
    {
      id: "meta-vr-developer",
      title: "Meta VR/AR 개발자 과정",
      description: "메타와 함께하는 메타버스 및 VR/AR 개발자 양성 프로그램",
      duration: "10주 과정",
      level: "중급-고급",
      price: "289,000원",
      originalPrice: "379,000원",
      rating: 4.7,
      studentCount: 54,
      badge: "메타버스",
      badgeColor: "bg-purple-600",
      category: "partnership",
      features: [
        "Meta Reality Labs 전문가 멘토링",
        "Oculus Quest 실습 장비 제공",
        "Unity/Unreal Engine VR 개발",
        "Meta 개발자 인증서 발급",
      ],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "Meta Reality Labs 팀",
      difficulty: "advanced",
      partnerCompany: {
        name: "Meta (Facebook)",
        logo: "/placeholder.svg?height=50&width=100",
        type: "global",
        description: "메타버스 기술 선도 기업",
      },
      internshipOpportunity: false,
      certificationPartner: "Meta",
    },
    {
      id: "lg-ai-research",
      title: "LG AI연구원 협력 프로그램",
      description: "LG AI연구원과 함께하는 산업 AI 응용 연구 프로그램",
      duration: "12주 과정",
      level: "고급",
      price: "269,000원",
      originalPrice: "349,000원",
      rating: 4.8,
      studentCount: 41,
      badge: "연구 중심",
      badgeColor: "bg-red-700",
      category: "partnership",
      features: [
        "LG AI연구원 연구진 직접 지도",
        "실제 LG 제품 AI 적용 프로젝트",
        "LG 계열사 인턴십 기회",
        "LG AI연구원 수료증 발급",
      ],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "LG AI연구원",
      difficulty: "advanced",
      partnerCompany: {
        name: "LG AI연구원",
        logo: "/placeholder.svg?height=50&width=100",
        type: "domestic",
        description: "LG그룹 AI 전문 연구기관",
      },
      internshipOpportunity: true,
      certificationPartner: "LG AI연구원",
    },

    // 기존 과정들 계속
    {
      id: "ai-basic",
      title: "AI 기초 입문 과정",
      description: "프로그래밍 경험이 없어도 시작할 수 있는 AI 기초 과정",
      duration: "4주 과정",
      level: "초급",
      price: "89,000원",
      originalPrice: "119,000원",
      rating: 4.6,
      studentCount: 234,
      badge: "초보자 추천",
      badgeColor: "bg-green-600",
      category: "ai",
      features: ["Python 기초부터 시작", "AI 개념 이해", "간단한 프로젝트 실습", "24시간 질의응답"],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "정현우 강사",
      difficulty: "beginner",
    },
    {
      id: "bio-basic",
      title: "생명과학 탐구 과정",
      description: "고등학생을 위한 생명과학 심화 탐구 및 실험 설계 과정",
      duration: "5주 과정",
      level: "초급-중급",
      price: "99,000원",
      originalPrice: "129,000원",
      rating: 4.5,
      studentCount: 178,
      badge: "세특 특화",
      badgeColor: "bg-purple-500",
      category: "bio",
      features: ["실험 설계 실습", "논문 읽기 훈련", "과학적 글쓰기", "연구 윤리 교육"],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "김생명 박사",
      difficulty: "intermediate",
    },
    {
      id: "esg-startup",
      title: "지속가능 스타트업 과정",
      description: "ESG 가치를 실현하는 소셜벤처 창업 과정",
      duration: "8주 과정",
      level: "중급-고급",
      price: "159,000원",
      originalPrice: "199,000원",
      rating: 4.8,
      studentCount: 92,
      badge: "창업 특화",
      badgeColor: "bg-orange-500",
      category: "esg",
      features: ["비즈니스 모델 설계", "투자 유치 전략", "실제 창업가 멘토링", "데모데이 참여"],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "최창업 대표",
      difficulty: "advanced",
    },
    {
      id: "business-analytics",
      title: "비즈니스 데이터 분석 과정",
      description: "데이터 기반 의사결정을 위한 비즈니스 분석 전문가 과정",
      duration: "7주 과정",
      level: "중급",
      price: "139,000원",
      originalPrice: "179,000원",
      rating: 4.7,
      studentCount: 145,
      badge: "실무 중심",
      badgeColor: "bg-indigo-500",
      category: "business",
      features: ["Excel/SQL 마스터", "데이터 시각화", "비즈니스 인사이트 도출", "실제 기업 사례 분석"],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "박데이터 이사",
      difficulty: "intermediate",
    },
    {
      id: "digital-marketing",
      title: "디지털 마케팅 전문가 과정",
      description: "SNS부터 퍼포먼스 마케팅까지, 디지털 마케팅 올인원 과정",
      duration: "6주 과정",
      level: "초급-중급",
      price: "119,000원",
      originalPrice: "149,000원",
      rating: 4.6,
      studentCount: 203,
      badge: "트렌드",
      badgeColor: "bg-pink-500",
      category: "business",
      features: ["SNS 마케팅 전략", "광고 운영 실습", "콘텐츠 제작 기법", "성과 분석 방법"],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "이마케팅 팀장",
      difficulty: "intermediate",
    },
    {
      id: "ai-vision-yolo",
      title: "AI Computer Vision with YOLOv8",
      description: "실전 AI 프로젝트로 배우는 컴퓨터 비전의 세계",
      duration: "4주 과정",
      level: "초급-중급",
      price: "149,000원",
      originalPrice: "199,000원",
      rating: 0,
      studentCount: 0,
      badge: "실전 프로젝트",
      badgeColor: "bg-blue-600",
      category: "ai",
      features: [
        "이론과 실습의 균형잡힌 커리큘럼",
        "2주 1회 멘토링 세션",
        "실전 프로젝트 완성",
        "GitHub 포트폴리오 구축",
        "커뮤니티 참여"
      ],
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "김AI 박사",
      difficulty: "intermediate"
    },
  ]

  const filteredCourses =
    activeCategory === "all" ? courses : courses.filter((course) => course.category === activeCategory)

  const partnershipCourses = courses.filter((course) => course.category === "partnership")

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-blue-100 text-blue-800"
      case "advanced":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* 헤더 */}
          <div className="flex items-center mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                홈으로 돌아가기
              </Button>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">프리미엄 전문가 과정</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              글로벌 IT 기업들과 함께하는 실무 중심 교육으로 진짜 전문가가 되어보세요
            </p>
          </div>

          {/* 🆕 기업 파트너십 하이라이트 */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">🤝 글로벌 IT 기업 파트너십</h2>
                  <p className="text-xl opacity-90">세계 최고 수준의 기업들과 직접 연계된 실무 교육 프로그램</p>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">8+</div>
                    <div className="text-sm opacity-90">글로벌 파트너</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-sm opacity-90">취업 연계율</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">인증서 발급</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-sm opacity-90">멘토링 지원</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 통계 섹션 */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
                <div className="text-sm text-gray-600">수강생</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4.8</div>
                <div className="text-sm text-gray-600">평균 만족도</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">이수 완료율</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
                <div className="text-sm text-gray-600">취업 연계율</div>
              </CardContent>
            </Card>
          </div>

          {/* 🆕 기업 파트너 로고 섹션 */}
          <div className="mb-12">
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">파트너 기업</h3>
                  <p className="text-gray-600">세계 최고 수준의 IT 기업들과 함께합니다</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
                  {["네이버", "카카오", "삼성SDS", "LG AI연구원", "Google", "Microsoft", "Amazon", "Meta"].map(
                    (company, index) => (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-xs font-medium text-gray-600">{company}</span>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 카테고리 탭 */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="grid grid-cols-6 mb-8">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4" />
                    {category.name}
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {/* 과정 목록 */}
            <TabsContent value={activeCategory}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <Link href={`/course-details/${course.id}`} key={course.id}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                      {/* 썸네일 이미지 영역 */}
                      <div className="relative">
                        <img
                          src={course.thumbnail || "/placeholder.svg?height=200&width=300"}
                          alt={course.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className={course.badgeColor}>{course.badge}</Badge>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge variant="outline" className={getDifficultyColor(course.difficulty)}>
                            {getDifficultyText(course.difficulty)}
                          </Badge>
                        </div>
                        {/* 기업 파트너 표시 */}
                        {course.partnerCompany && (
                          <div className="absolute bottom-3 left-3">
                            <Badge className="bg-white text-gray-800 border">
                              <Building2 className="h-3 w-3 mr-1" />
                              {course.partnerCompany.name}
                            </Badge>
                          </div>
                        )}
                      </div>

                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
                          </div>

                          {/* 🆕 기업 파트너 정보 */}
                          {course.partnerCompany && (
                            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                              <div className="flex items-center gap-2 mb-2">
                                <Building2 className="h-4 w-4 text-blue-600" />
                                <span className="font-medium text-blue-800">{course.partnerCompany.name}</span>
                                <Badge
                                  variant="outline"
                                  className={
                                    course.partnerCompany.type === "global"
                                      ? "bg-purple-100 text-purple-800"
                                      : "bg-green-100 text-green-800"
                                  }
                                >
                                  {course.partnerCompany.type === "global" ? "글로벌" : "국내"}
                                </Badge>
                              </div>
                              <p className="text-sm text-blue-700">{course.partnerCompany.description}</p>
                            </div>
                          )}

                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {course.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {course.studentCount}명
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              {course.rating}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <p className="text-sm text-gray-600">강사: {course.instructor}</p>
                            <p className="text-sm text-gray-600">난이도: {course.level}</p>
                            {/* 🆕 인턴십 기회 표시 */}
                            {course.internshipOpportunity && (
                              <div className="flex items-center gap-1 text-sm text-green-600">
                                <Rocket className="h-4 w-4" />
                                <span>인턴십 연계 기회</span>
                              </div>
                            )}
                            {/* 🆕 인증서 파트너 표시 */}
                            {course.certificationPartner && (
                              <div className="flex items-center gap-1 text-sm text-purple-600">
                                <Trophy className="h-4 w-4" />
                                <span>{course.certificationPartner} 인증서 발급</span>
                              </div>
                            )}
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-700 mb-2">포함 내용</h4>
                            <ul className="space-y-1">
                              {course.features.slice(0, 3).map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                  <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                              {course.features.length > 3 && (
                                <li className="text-sm text-gray-500">+{course.features.length - 3}개 더</li>
                              )}
                            </ul>
                          </div>

                          <div className="border-t pt-4">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                                  <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                                </div>
                                <div className="text-sm text-green-600 font-medium">
                                  {Math.round(
                                    ((Number.parseInt(course.originalPrice.replace(/[^0-9]/g, "")) -
                                      Number.parseInt(course.price.replace(/[^0-9]/g, ""))) /
                                      Number.parseInt(course.originalPrice.replace(/[^0-9]/g, ""))) *
                                      100,
                                  )}
                                  % 할인
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* 특별 혜택 섹션 */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">🎓 프리미엄 멤버십</h3>
                    <p className="text-lg mb-6 opacity-90">
                      모든 프리미엄 과정을 무제한으로 수강하고, 1:1 멘토링과 취업 지원까지 받아보세요
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        <span>모든 프리미엄 과정 무제한 수강</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        <span>월 2회 1:1 전문가 멘토링</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        <span>기업 연계 인턴십 우선 지원</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        <span>글로벌 기업 인증서 발급</span>
                      </li>
                    </ul>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                      <Zap className="h-5 w-5 mr-2" />
                      멤버십 가입하기
                    </Button>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4">299,000원</div>
                    <div className="text-xl opacity-75 line-through mb-2">599,000원</div>
                    <div className="text-lg font-semibold mb-4">월 29,900원 (12개월)</div>
                    <Badge className="bg-yellow-500 text-yellow-900 text-lg px-4 py-2">50% 런칭 할인</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 성공 스토리 */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🏆 수강생 성공 스토리</h2>
              <p className="text-xl text-gray-600">기업 연계 프로그램을 통한 실제 성과를 확인해보세요</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "네이버 AI 부트캠프를 통해 실제 네이버 서비스 데이터로 프로젝트를 진행하고, 네이버 AI 연구소에
                    인턴으로 합격했어요!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">김</span>
                    </div>
                    <div>
                      <div className="font-semibold">김○○</div>
                      <div className="text-sm text-gray-500">네이버 AI 연구소 인턴</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "구글 AI 프로그램으로 Google Cloud Platform을 마스터하고, Google AI 인증서까지 취득했습니다!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">박</span>
                    </div>
                    <div>
                      <div className="font-semibold">박○○</div>
                      <div className="text-sm text-gray-500">Google AI 인증서 취득</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "삼성SDS 클라우드 과정을 통해 AWS 실무 경험을 쌓고, 삼성 계열사 인턴십에 선발되었어요!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">이</span>
                    </div>
                    <div>
                      <div className="font-semibold">이○○</div>
                      <div className="text-sm text-gray-500">삼성 계열사 인턴십</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
