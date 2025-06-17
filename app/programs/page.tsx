"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { useRouter } from "next/navigation"
import {
  Clock,
  Users,
  Star,
  BookOpen,
  Award,
  Target,
  Globe,
  Briefcase,
  Building2,
  ArrowLeft,
  Search,
} from "lucide-react"
import Link from "next/link"

interface Program {
  id: string
  title: string
  description: string
  duration: string
  level: string
  price: string
  originalPrice: string
  rating: number
  studentCount: number
  badge?: string
  badgeColor?: string
  thumbnail: string
  category: string
  university: string
  instructor: string
  skills: string[]
}

export default function ProgramsPage() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState("all")
  const [programs, setPrograms] = useState<Program[]>([])
  const [sortBy, setSortBy] = useState("newest")

  const sortOptions = [
    { value: "popular", label: "인기순" },
    { value: "rating", label: "평점순" },
    { value: "price-low", label: "가격 낮은순" },
    { value: "price-high", label: "가격 높은순" },
    { value: "newest", label: "최신순" },
  ]

  const categories = [
    { id: "all", name: "전체", icon: Globe, count: 12 },
    { id: "tech", name: "AI/컴퓨터", icon: BookOpen, count: 3 },
    { id: "science", name: "바이오/의학", icon: Award, count: 2 },
    { id: "environment", name: "ESG/환경", icon: Target, count: 2 },
    { id: "social", name: "사회과학", icon: Briefcase, count: 1 },
    { id: "arts", name: "예술/문화", icon: Building2, count: 1 },
    { id: "language", name: "언어/문학", icon: Globe, count: 1 },
    { id: "math", name: "수학/과학", icon: BookOpen, count: 1 },
    { id: "research", name: "융합/연구", icon: Award, count: 1 },
  ]

  useEffect(() => {
    const programsData: Program[] = [
      {
        id: "ai-vision-yolo",
        title: "한국 산업재해 주요 원인 '안전모 미착용' AI 비전 기술 YOLO로 근절하기",
        description: "산업현장 안전을 지키는 AI 비전 기술 실전 프로젝트",
        duration: "12주 과정",
        level: "중급",
        price: "249,000원",
        originalPrice: "299,000원",
        rating: 0,
        studentCount: 0,
        badge: "실전 프로젝트",
        badgeColor: "bg-blue-600",
        thumbnail: "/images/ai-vision-yolo-thumbnail.png",
        category: "tech",
        university: "KAIST",
        instructor: "김AI 박사",
        skills: ["컴퓨터 비전", "YOLOv8", "산업안전", "실시간 감지", "웹 개발"]
      },
      {
        id: "ai-ethics",
        title: "AI 윤리 딜레마 분석",
        description: "AI 기술의 윤리적 문제를 심층 분석하고 해결방안 제시",
        duration: "3-4주 과정",
        level: "고급",
        price: "89,000원",
        originalPrice: "129,000원",
        rating: 4.8,
        studentCount: 1247,
        badge: "인기",
        badgeColor: "bg-orange-500",
        thumbnail: "/placeholder.svg?height=200&width=400",
        category: "tech",
        university: "KAIST",
        instructor: "김AI 교수",
        skills: ["AI 윤리", "딜레마 분석", "해결방안 도출", "융합적 사고"]
      },
      {
        id: "bio-gene",
        title: "유전자 치료 기술 탐색",
        description: "CRISPR 등 유전자 치료 기술의 원리와 적용 가능성 분석",
        duration: "2-3주 과정",
        level: "중급",
        price: "79,000원",
        originalPrice: "119,000원",
        rating: 4.7,
        studentCount: 892,
        badge: "추천",
        badgeColor: "bg-blue-500",
        thumbnail: "/placeholder.svg?height=200&width=400",
        category: "science",
        university: "서울대",
        instructor: "박바이오 박사",
        skills: ["CRISPR 기술", "유전자 편집", "생명윤리", "바이오 연구"],
      },
      {
        id: "esg-climate",
        title: "지역사회 기후 위기 대응",
        description: "융합적 관점에서 지역사회 기후 문제 해결 프로젝트 기획",
        duration: "3-4주 과정",
        level: "고급",
        price: "69,000원",
        originalPrice: "99,000원",
        rating: 4.9,
        studentCount: 634,
        badge: "신규",
        badgeColor: "bg-green-500",
        thumbnail: "/placeholder.svg?height=200&width=400",
        category: "environment",
        university: "연세대",
        instructor: "이환경 교수",
        skills: ["기후변화", "지속가능성", "프로젝트 기획", "사회문제 해결"],
      },
      {
        id: "data-science",
        title: "데이터 사이언스 기초",
        description: "통계와 프로그래밍을 활용한 데이터 분석 및 시각화 프로젝트",
        duration: "4주 과정",
        level: "중급",
        price: "89,000원",
        originalPrice: "119,000원",
        rating: 4.6,
        studentCount: 1156,
        badge: "베스트셀러",
        badgeColor: "bg-yellow-500",
        thumbnail: "/placeholder.svg?height=200&width=400",
        category: "tech",
        university: "고려대",
        instructor: "정데이터 교수",
        skills: ["Python", "데이터 분석", "머신러닝", "시각화"],
      },
      {
        id: "quantum-computing",
        title: "양자컴퓨팅 기초 이론",
        description: "양자역학 원리를 활용한 차세대 컴퓨팅 기술 탐구",
        duration: "4-5주 과정",
        level: "고급",
        price: "99,000원",
        originalPrice: "139,000원",
        rating: 4.9,
        studentCount: 523,
        badge: "최신",
        badgeColor: "bg-purple-500",
        thumbnail: "/placeholder.svg?height=200&width=400",
        category: "tech",
        university: "POSTECH",
        instructor: "김양자 교수",
        skills: ["양자역학", "양자컴퓨팅", "Qiskit", "알고리즘"],
      },
      {
        id: "biotech-startup",
        title: "바이오테크 스타트업 창업",
        description: "바이오 기술을 활용한 스타트업 창업 전략과 실무",
        duration: "3주 과정",
        level: "중급",
        price: "79,000원",
        originalPrice: "109,000원",
        rating: 4.5,
        studentCount: 687,
        badge: "실무",
        badgeColor: "bg-teal-500",
        thumbnail: "/placeholder.svg?height=200&width=400",
        category: "science",
        university: "KAIST",
        instructor: "이창업 박사",
        skills: ["창업", "비즈니스 모델", "투자 유치", "바이오테크"],
      },
      {
        id: "renewable-energy",
        title: "신재생에너지 시스템 설계",
        description: "태양광, 풍력 등 신재생에너지 시스템 설계 및 최적화",
        duration: "4주 과정",
        level: "고급",
        price: "89,000원",
        originalPrice: "119,000원",
        rating: 4.7,
        studentCount: 445,
        badge: "친환경",
        badgeColor: "bg-green-600",
        thumbnail: "/placeholder.svg?height=200&width=400",
        category: "environment",
        university: "서울대",
        instructor: "박에너지 교수",
        skills: ["태양광", "풍력", "에너지 설계", "경제성 분석"],
      },
      {
        id: "social-innovation",
        title: "사회혁신 프로젝트 기획",
        description: "사회문제 해결을 위한 혁신적 프로젝트 기획 및 실행",
        duration: "3주 과정",
        level: "중급",
        price: "69,000원",
        originalPrice: "99,000원",
        rating: 4.6,
        studentCount: 789,
        badge: "사회공헌",
        badgeColor: "bg-red-500",
        thumbnail: "/placeholder.svg?height=200&width=400",
        category: "social",
        university: "연세대",
        instructor: "최혁신 교수",
        skills: ["디자인 씽킹", "사회혁신", "프로토타이핑", "임팩트 측정"],
      },
      {
        id: "digital-art",
        title: "디지털 아트 & NFT 창작",
        description: "디지털 기술을 활용한 예술 창작과 NFT 마케팅",
        duration: "2-3주 과정",
        level: "초급",
        price: "79,000원",
        originalPrice: "109,000원",
        rating: 4.4,
        studentCount: 912,
        badge: "창작",
        badgeColor: "bg-pink-500",
        thumbnail: "/placeholder.svg?height=200&width=400",
        category: "arts",
        university: "홍익대",
        instructor: "김아트 교수",
        skills: ["디지털 아트", "NFT", "블록체인", "3D 모델링"],
      },
      {
        id: "global-literature",
        title: "세계문학 비교 분석",
        description: "동서양 고전문학 비교 분석을 통한 문화적 이해",
        duration: "3주 과정",
        level: "중급",
        price: "59,000원",
        originalPrice: "89,000원",
        rating: 4.5,
        studentCount: 634,
        badge: "교양",
        badgeColor: "bg-indigo-500",
        thumbnail: "/placeholder.svg?height=200&width=400",
        category: "language",
        university: "고려대",
        instructor: "이문학 교수",
        skills: ["비교문학", "문화 분석", "글쓰기", "비판적 사고"],
      },
      {
        id: "mathematical-modeling",
        title: "수학적 모델링과 시뮬레이션",
        description: "실생활 문제를 수학적으로 모델링하고 컴퓨터 시뮬레이션",
        duration: "4주 과정",
        level: "고급",
        price: "89,000원",
        originalPrice: "119,000원",
        rating: 4.8,
        studentCount: 567,
        badge: "STEM",
        badgeColor: "bg-blue-600",
        thumbnail: "/placeholder.svg?height=200&width=400",
        category: "math",
        university: "KAIST",
        instructor: "정수학 교수",
        skills: ["수학적 모델링", "시뮬레이션", "Python", "최적화"],
      },
      {
        id: "interdisciplinary-research",
        title: "융합연구 방법론",
        description: "다학제간 융합연구 설계 및 논문 작성 방법론",
        duration: "5주 과정",
        level: "고급",
        price: "99,000원",
        originalPrice: "129,000원",
        rating: 4.9,
        studentCount: 423,
        badge: "연구",
        badgeColor: "bg-purple-600",
        thumbnail: "/placeholder.svg?height=200&width=400",
        category: "research",
        university: "UNIST",
        instructor: "박융합 교수",
        skills: ["융합연구", "논문 작성", "연구 방법론", "학술 발표"],
      },
    ]

    setPrograms(programsData)
  }, [])

  const filteredPrograms = programs
    .filter((program) => {
      const matchesCategory = activeCategory === "all" || program.category === activeCategory
      return matchesCategory
    })
    .sort((a, b) => {
      // AI Computer Vision course should always be first
      if (a.id === "ai-vision-yolo") return -1
      if (b.id === "ai-vision-yolo") return 1

      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "price-low":
          return Number.parseInt(a.price.replace(/[^0-9]/g, "")) - Number.parseInt(b.price.replace(/[^0-9]/g, ""))
        case "price-high":
          return Number.parseInt(b.price.replace(/[^0-9]/g, "")) - Number.parseInt(a.price.replace(/[^0-9]/g, ""))
        case "newest":
          return b.studentCount - a.studentCount
        case "popular":
        default:
          return b.studentCount - a.studentCount
      }
    })

  const handleViewDetails = (programId: string) => {
    router.push(`/program-details/${programId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* 헤더 */}
          <div className="flex items-center mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                홈으로 돌아가기
              </Button>
            </Link>
          </div>

          {/* 페이지 제목 */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">세특 프로그램</h1>
            <p className="text-xl text-gray-600">
              다양한 분야의 세특 프로그램을 통해 학업 역량을 강화하고 생활기록부를 차별화하세요
            </p>
          </div>

          {/* 검색 및 필터 */}

          <div className="grid lg:grid-cols-4 gap-8">
            {/* 사이드바 - 카테고리 */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
                <h3 className="font-bold text-lg mb-4">카테고리</h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          activeCategory === category.id
                            ? "bg-blue-50 text-blue-600 border border-blue-200"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="h-5 w-5" />
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="lg:col-span-3">
              {/* 결과 헤더 */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{filteredPrograms.length}개의 프로그램</h2>
                  <p className="text-gray-600">
                    {activeCategory !== "all" && categories.find((c) => c.id === activeCategory)?.name + " 카테고리"}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">정렬:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 프로그램 그리드 */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPrograms.map((program) => (
                  <Card
                    key={program.id}
                    className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
                    onClick={() => handleViewDetails(program.id)}
                  >
                    <div className="relative">
                      <img
                        src={program.thumbnail || "/placeholder.svg"}
                        alt={program.title}
                        className="w-full h-48 object-cover"
                      />
                      {program.badge && (
                        <div className="absolute top-3 left-3">
                          <Badge className={`${program.badgeColor} text-white`}>{program.badge}</Badge>
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <Badge variant="outline" className="bg-white text-gray-800">
                          {program.level}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="text-sm text-blue-600 font-medium mb-2">{program.university}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3">{program.description}</p>
                      </div>

                      <div className="text-sm text-gray-500 mb-4">{program.instructor}</div>

                      {/* 스킬 태그 */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {program.skills.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {program.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{program.skills.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{program.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{program.studentCount.toLocaleString()}명</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-xl font-bold text-gray-900">{program.price}</div>
                          <div className="text-sm text-gray-500 line-through">{program.originalPrice}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* 더 보기 버튼 */}
              {filteredPrograms.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    더 많은 프로그램 보기
                  </Button>
                </div>
              )}

              {/* 검색 결과 없음 */}
              {filteredPrograms.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">검색 결과가 없습니다</h3>
                  <p className="text-gray-600 mb-6">다른 키워드로 검색하거나 카테고리를 변경해보세요.</p>
                  <Button
                    onClick={() => {
                      setActiveCategory("all")
                    }}
                  >
                    전체 프로그램 보기
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
