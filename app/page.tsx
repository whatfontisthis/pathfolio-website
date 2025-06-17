"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Input } from "@/components/ui/input"
import { Search, Sparkles, Star, ArrowRight, FileText, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { UserData } from "@/lib/types"

export default function HomePage() {
  const router = useRouter()
  // 사용자 진단 상태 확인
  const [hasDiagnosis, setHasDiagnosis] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // 로컬 스토리지에서 사용자 진단 데이터 확인
    const savedData = localStorage.getItem("userDiagnosisData")
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setUserData(parsedData)
        setHasDiagnosis(true)
      } catch (e) {
        console.error("Failed to parse user data:", e)
      }
    }
    setIsLoading(false)
  }, [])

  // 트렌딩 주제들
  const trendingTopics = [
    { name: "AI/머신러닝", href: "/programs?category=ai" },
    { name: "바이오공학", href: "/programs?category=bio" },
    { name: "ESG/환경", href: "/programs?category=esg" },
    { name: "데이터 사이언스", href: "/programs?category=data" },
    { name: "로봇공학", href: "/programs?category=robotics" },
  ]

  // 사용 중인 고등학교들
  const schools = [
    "하나고등학교",
    "민족사관고등학교",
    "상산고등학교",
    "외대부고",
    "대원외고",
    "한영외고",
    "청심국제고",
    "김천고등학교",
    "포항제철고",
    "경기과학고",
    "서울과학고",
    "경남과학고",
    "대구과학고",
    "광주과학고",
    "대전과학고",
    "인천과학예술영재학교",
    "세종과학예술영재학교",
    "한국과학영재학교",
  ]

  const featuredPrograms = [
    {
      id: "ai-ethics",
      title: "AI 윤리 딜레마 분석",
      description: "AI 기술의 윤리적 문제를 심층 분석하고 해결방안 제시",
      price: "89,000원",
      originalPrice: "129,000원",
      category: "AI/컴퓨터공학",
      difficulty: "고급",
      duration: "3-4주",
      rating: 4.8,
      students: 1247,
      badge: "인기",
      badgeColor: "bg-orange-500",
      thumbnail: "/images/ai-ethics-program.png",
      university: "KAIST",
      instructor: "김AI 교수",
    },
    {
      id: "bio-gene",
      title: "유전자 치료 기술 탐색",
      description: "CRISPR 등 유전자 치료 기술의 원리와 적용 가능성 분석",
      price: "79,000원",
      originalPrice: "119,000원",
      category: "바이오/의학",
      difficulty: "중급",
      duration: "2-3주",
      rating: 4.7,
      students: 892,
      badge: "추천",
      badgeColor: "bg-blue-500",
      thumbnail: "/images/gene-therapy.png",
      university: "서울대",
      instructor: "박바이오 박사",
    },
    {
      id: "esg-climate",
      title: "지역사회 기후 위기 대응",
      description: "융합적 관점에서 지역사회 기후 문제 해결 프로젝트 기획",
      price: "69,000원",
      originalPrice: "99,000원",
      category: "ESG/환경",
      difficulty: "고급",
      duration: "3-4주",
      rating: 4.9,
      students: 634,
      badge: "신규",
      badgeColor: "bg-green-500",
      thumbnail: "/images/climate-response.png",
      university: "연세대",
      instructor: "이환경 교수",
    },
    {
      id: "data-science",
      title: "데이터 사이언스 기초",
      description: "통계와 프로그래밍을 활용한 데이터 분석 및 시각화 프로젝트",
      price: "89,000원",
      originalPrice: "119,000원",
      category: "AI/컴퓨터공학",
      difficulty: "중급",
      duration: "4주",
      rating: 4.6,
      students: 1156,
      badge: "베스트셀러",
      badgeColor: "bg-yellow-500",
      thumbnail: "/images/data-science.png",
      university: "고려대",
      instructor: "정데이터 교수",
    },
    {
      id: "quantum-computing",
      title: "양자컴퓨팅 기초 이론",
      description: "양자역학 원리를 활용한 차세대 컴퓨팅 기술 탐구",
      price: "99,000원",
      originalPrice: "139,000원",
      category: "AI/컴퓨터공학",
      difficulty: "고급",
      duration: "4-5주",
      rating: 4.9,
      students: 523,
      badge: "최신",
      badgeColor: "bg-purple-500",
      thumbnail: "/images/quantum-computing.png",
      university: "POSTECH",
      instructor: "김양자 교수",
    },
    {
      id: "biotech-startup",
      title: "바이오테크 스타트업 창업",
      description: "바이오 기술을 활용한 스타트업 창업 전략과 실무",
      price: "79,000원",
      originalPrice: "109,000원",
      category: "바이오/의학",
      difficulty: "중급",
      duration: "3주",
      rating: 4.5,
      students: 687,
      badge: "실무",
      badgeColor: "bg-teal-500",
      thumbnail: "/images/biotech-startup.png",
      university: "KAIST",
      instructor: "이창업 박사",
    },
    {
      id: "renewable-energy",
      title: "신재생에너지 시스템 설계",
      description: "태양광, 풍력 등 신재생에너지 시스템 설계 및 최적화",
      price: "89,000원",
      originalPrice: "119,000원",
      category: "ESG/환경",
      difficulty: "고급",
      duration: "4주",
      rating: 4.7,
      students: 445,
      badge: "친환경",
      badgeColor: "bg-green-600",
      thumbnail: "/images/renewable-energy.png",
      university: "서울대",
      instructor: "박에너지 교수",
    },
    {
      id: "social-innovation",
      title: "사회혁신 프로젝트 기획",
      description: "사회문제 해결을 위한 혁신적 프로젝트 기획 및 실행",
      price: "69,000원",
      originalPrice: "99,000원",
      category: "사회과학",
      difficulty: "중급",
      duration: "3주",
      rating: 4.6,
      students: 789,
      badge: "사회공헌",
      badgeColor: "bg-red-500",
      thumbnail: "/images/social-innovation.png",
      university: "연세대",
      instructor: "최혁신 교수",
    },
    {
      id: "digital-art",
      title: "디지털 아트 & NFT 창작",
      description: "디지털 기술을 활용한 예술 창작과 NFT 마케팅",
      price: "79,000원",
      originalPrice: "109,000원",
      category: "예술/문화",
      difficulty: "초급",
      duration: "2-3주",
      rating: 4.4,
      students: 912,
      badge: "창작",
      badgeColor: "bg-pink-500",
      thumbnail: "/images/digital-art-nft.png",
      university: "홍익대",
      instructor: "김아트 교수",
    },
    {
      id: "global-literature",
      title: "세계문학 비교 분석",
      description: "동서양 고전문학 비교 분석을 통한 문화적 이해",
      price: "59,000원",
      originalPrice: "89,000원",
      category: "언어/문학",
      difficulty: "중급",
      duration: "3주",
      rating: 4.5,
      students: 634,
      badge: "교양",
      badgeColor: "bg-indigo-500",
      thumbnail: "/images/world-literature.png",
      university: "고려대",
      instructor: "이문학 교수",
    },
    {
      id: "mathematical-modeling",
      title: "수학적 모델링과 시뮬레이션",
      description: "실생활 문제를 수학적으로 모델링하고 컴퓨터 시뮬레이션",
      price: "89,000원",
      originalPrice: "119,000원",
      category: "수학/과학",
      difficulty: "고급",
      duration: "4주",
      rating: 4.8,
      students: 567,
      badge: "STEM",
      badgeColor: "bg-blue-600",
      thumbnail: "/images/mathematical-modeling.png",
      university: "KAIST",
      instructor: "정수학 교수",
    },
    {
      id: "interdisciplinary-research",
      title: "융합연구 방법론",
      description: "다학제간 융합연구 설계 및 논문 작성 방법론",
      price: "99,000원",
      originalPrice: "129,000원",
      category: "융합/연구",
      difficulty: "고급",
      duration: "5주",
      rating: 4.9,
      students: 423,
      badge: "연구",
      badgeColor: "bg-purple-600",
      thumbnail: "/images/interdisciplinary-research.png",
      university: "UNIST",
      instructor: "박융합 교수",
    },
  ]

  const handleProgramClick = (programId: string) => {
    router.push(`/program-details/${programId}`)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 네비게이션 */}
      <Navigation />

      {/* 메인 히어로 섹션 */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    한계 없는
                    <br />
                    <span className="text-blue-600">진로 설계</span>
                  </h1>

                  {hasDiagnosis ? (
                    <>
                      <p className="text-xl text-gray-600 mb-4">
                        <span className="font-semibold">{userData?.major || "전공"}</span> 맞춤형 세특 프로그램으로
                      </p>
                      <p className="text-lg text-gray-600 mb-8">
                        진로를 전환하거나, 발전시키거나, 새로운 기술을 배우세요. 전국 최고 고등학교와 대학의 프로그램을
                        통해.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-xl text-gray-600 mb-8">
                        진로를 시작하거나, 전환하거나, 발전시키세요. 전국 최고 고등학교와 대학의 프로그램을 통해 전문
                        자격증, 학위를 취득하고 세특 문장까지 자동 생성하세요.
                      </p>
                    </>
                  )}
                </div>

                {/* 검색 바 */}
                <div className="relative">
                  <div className="flex">
                    <Input
                      type="text"
                      placeholder="'파이썬' 또는 '프론트엔드 개발자' 검색"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 h-14 text-lg pl-6 pr-16 border-2 border-gray-200 focus:border-blue-500 rounded-l-lg"
                    />
                    <Button size="lg" className="h-14 px-8 bg-blue-600 hover:bg-blue-700 rounded-r-lg rounded-l-none">
                      <Search className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* 트렌딩 주제 */}
                <div>
                  <div className="text-sm text-gray-600 mb-3">트렌딩:</div>
                  <div className="flex flex-wrap gap-3">
                    {trendingTopics.map((topic) => (
                      <Link key={topic.name} href={topic.href}>
                        <Badge
                          variant="outline"
                          className="hover:bg-blue-50 hover:border-blue-300 cursor-pointer px-4 py-2"
                        >
                          {topic.name}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA 버튼들 */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/school-selection">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 h-auto">
                      {hasDiagnosis ? (
                        <>
                          <RefreshCw className="mr-2 h-5 w-5" />
                          다시 진단하기
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-5 w-5" />
                          무료 진단 시작하기
                        </>
                      )}
                    </Button>
                  </Link>

                  {hasDiagnosis ? (
                    <Link href="/results">
                      <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-2">
                        진단 결과 보기
                        <FileText className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/programs">
                      <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-2">
                        프로그램 둘러보기
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              {/* 우측 이미지 영역 */}
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto relative overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="학습하는 학생"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-80 object-cover"
                  />
                </div>

                {/* 플로팅 통계 카드들 */}
                <div className="absolute top-8 -left-8 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="text-2xl font-bold text-blue-600">4,240+</div>
                  <div className="text-sm text-gray-600">진단 완료</div>
                </div>

                <div className="absolute bottom-8 -right-8 bg-white rounded-lg shadow-lg p-4 border">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">만족도</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 사용 중인 고등학교 섹션 */}
      <div className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-gray-600 font-medium">350개 이상의 학교에서 학습</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
              {schools.map((school, index) => (
                <div key={index} className="text-center p-3">
                  <div className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                    {school}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* 추천 프로그램 섹션 */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">추천 프로그램</h2>
              <Link href="/programs">
                <Button variant="outline" className="group">
                  모든 프로그램 보기
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredPrograms.map((program) => (
                <Card
                  key={program.id}
                  className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
                  onClick={() => handleProgramClick(program.id)}
                >
                  <div className="relative">
                    <img
                      src={program.thumbnail || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=160&width=300"
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={`${program.badgeColor} text-white`}>{program.badge}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="mb-3">
                      <div className="text-xs text-blue-600 font-medium mb-1">{program.university}</div>
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{program.description}</p>
                    </div>

                    <div className="text-xs text-gray-500 mb-3">{program.instructor}</div>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{program.rating}</span>
                      </div>
                      <div>({program.students.toLocaleString()}명)</div>
                      <div>{program.difficulty}</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-gray-900">{program.price}</div>
                        <div className="text-xs text-gray-500 line-through">{program.originalPrice}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {program.duration}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 통계 섹션 */}
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">패스폴리오와 함께 성장하세요</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">프로그램</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">350+</div>
                <div className="text-gray-600">파트너 학교</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100M+</div>
                <div className="text-gray-600">등록 학습자</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">92%</div>
                <div className="text-gray-600">진로 성공률</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
