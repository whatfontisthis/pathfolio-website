"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import {
  ArrowLeft,
  Target,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Globe,
  Heart,
  Zap,
  ArrowRight,
  Rocket,
  Brain,
  Shield,
  Clock,
} from "lucide-react"
import Link from "next/link"
// Footer import 제거
// import { Footer } from "@/components/footer"

export default function IntroductionPage() {
  const milestones = [
    {
      year: "2020",
      title: "패스폴리오 설립",
      description: "AI 기반 진로 설계 플랫폼 개발 시작",
      icon: Rocket,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      year: "2021",
      title: "첫 번째 프로그램 런칭",
      description: "AI 윤리 딜레마 분석 프로그램 출시",
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      year: "2022",
      title: "대학 파트너십 확대",
      description: "KAIST, 서울대, 연세대 등 주요 대학과 협력",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      year: "2023",
      title: "글로벌 기업 연계",
      description: "네이버, 구글, 삼성전자와 실무 프로그램 개발",
      icon: Globe,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      year: "2024",
      title: "AI 자동 세특 생성",
      description: "개인 맞춤형 세특 문장 자동 생성 시스템 도입",
      icon: Brain,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
  ]

  const values = [
    {
      title: "혁신적 교육",
      description: "AI 기술과 교육의 융합으로 새로운 학습 경험을 제공합니다.",
      icon: Lightbulb,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      title: "개인 맞춤화",
      description: "각 학생의 특성과 목표에 맞는 개인화된 진로 설계를 지원합니다.",
      icon: Target,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "실무 중심",
      description: "이론뿐만 아니라 실제 현장에서 활용 가능한 실무 역량을 기릅니다.",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "지속적 성장",
      description: "학생들의 지속적인 성장과 발전을 위한 장기적 관점의 교육을 제공합니다.",
      icon: Award,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  const achievements = [
    { number: "10,000+", label: "누적 수강생", icon: Users },
    { number: "350+", label: "파트너 학교", icon: BookOpen },
    { number: "98%", label: "만족도", icon: Heart },
    { number: "92%", label: "진로 성공률", icon: Target },
    { number: "15+", label: "전공 분야", icon: Award },
    { number: "24/7", label: "학습 지원", icon: Clock },
  ]

  const team = [
    {
      name: "김교육",
      role: "대표이사 / CEO",
      description: "서울대 교육학과 출신, 15년간 교육 분야 전문가",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["교육 정책", "진로 상담", "교육 기술"],
    },
    {
      name: "박AI",
      role: "기술이사 / CTO",
      description: "KAIST 전산학과 박사, AI 및 머신러닝 전문가",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["AI/ML", "데이터 분석", "시스템 설계"],
    },
    {
      name: "이진로",
      role: "교육이사 / CPO",
      description: "연세대 심리학과 출신, 진로 상담 및 프로그램 개발 전문가",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["진로 상담", "프로그램 기획", "학습자 분석"],
    },
    {
      name: "정마케팅",
      role: "마케팅이사 / CMO",
      description: "고려대 경영학과 출신, 에듀테크 마케팅 전문가",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["디지털 마케팅", "브랜드 전략", "고객 경험"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* 헤더 */}
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                홈으로 돌아가기
              </Button>
            </Link>
          </div>

          {/* 메인 소개 섹션 */}
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-6">
              <Rocket className="h-4 w-4 mr-1" />
              About Pathfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              패스폴리오
              <br />
              <span className="text-blue-600">회사 소개</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              AI 기술과 교육 전문성이 만나 완성되는
              <br />
              <span className="font-semibold text-gray-900">차세대 진로 설계 플랫폼</span>
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              2020년 설립된 패스폴리오는 학생 개개인의 꿈을 현실로 만들어주는
              <br />
              혁신적인 교육 기술 회사입니다.
            </p>
          </div>

          {/* 미션 & 비전 */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">미션</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  모든 학생이 자신만의 독특한 재능을 발견하고, 그 재능을 바탕으로 꿈을 실현할 수 있도록 돕는 것이 우리의
                  사명입니다. AI 기술과 전문가의 노하우를 결합하여 개인 맞춤형 진로 설계 솔루션을 제공합니다.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">비전</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  2030년까지 아시아 최고의 진로 설계 플랫폼이 되어, 100만 명의 학생들이 자신의 꿈을 실현할 수 있도록
                  지원하겠습니다. 교육의 패러다임을 바꾸는 혁신적인 기술로 미래 인재를 양성합니다.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 핵심 가치 */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">핵심 가치</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">패스폴리오가 추구하는 교육 철학과 가치관</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-all group">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 ${value.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}
                      >
                        <IconComponent className={`h-8 w-8 ${value.color}`} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* 회사 연혁 */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">회사 연혁</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">패스폴리오의 성장 과정과 주요 이정표</p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon
                return (
                  <div key={index} className="flex items-center gap-8">
                    <div className="flex-shrink-0 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <div className={`w-16 h-16 ${milestone.bgColor} rounded-full flex items-center justify-center`}>
                        <IconComponent className={`h-8 w-8 ${milestone.color}`} />
                      </div>
                    </div>
                    <Card className="flex-1 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 주요 성과 */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">주요 성과</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">숫자로 보는 패스폴리오의 성장과 성과</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                      <div className="text-sm text-gray-600">{achievement.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* 팀 소개 */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">팀 소개</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">패스폴리오를 이끌어가는 전문가들</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 파트너십 */}
          <div className="mb-20">
            <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-blue-200">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">신뢰할 수 있는 파트너십</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    국내외 최고 수준의 교육기관 및 기업과의 파트너십을 통해 검증된 교육 콘텐츠를 제공합니다
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">교육기관 파트너십</h4>
                    <p className="text-sm text-gray-600">KAIST, 서울대, 연세대, 고려대 등 국내 최고 대학과의 협력</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">글로벌 기업 연계</h4>
                    <p className="text-sm text-gray-600">
                      네이버, 구글, 삼성전자, LG전자 등 글로벌 기업과의 실무 프로그램
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">전문가 네트워크</h4>
                    <p className="text-sm text-gray-600">각 분야 최고 전문가들로 구성된 멘토링 및 자문 네트워크</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA 섹션 */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">패스폴리오와 함께하세요!</h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  혁신적인 교육 기술로 학생들의 미래를 만들어가는
                  <br />
                  패스폴리오의 여정에 함께해주세요
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/school-selection">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                      <Zap className="mr-2 h-5 w-5" />
                      무료 진단 시작하기
                    </Button>
                  </Link>
                  <Link href="/programs">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                    >
                      프로그램 둘러보기
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <p className="text-sm mt-6 opacity-75">✅ 10,000명이 선택한 신뢰 • ✅ 98% 만족도 • ✅ 24/7 지원</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
