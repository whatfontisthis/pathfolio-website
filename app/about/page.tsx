"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import {
  ArrowLeft,
  CheckCircle,
  Sparkles,
  Brain,
  Target,
  Users,
  Award,
  BookOpen,
  Zap,
  Star,
  ArrowRight,
  Shield,
  Globe,
  Rocket,
  Heart,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const features = [
    {
      icon: Brain,
      title: "AI 기반 진로 분석",
      description: "최신 AI 기술로 개인의 성향, 성적, 관심사를 종합 분석하여 최적의 진로를 제시합니다.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Target,
      title: "맞춤형 세특 프로그램",
      description: "전공별로 특화된 프로그램을 통해 생활기록부에 기록될 의미있는 활동을 제공합니다.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Zap,
      title: "자동 세특 문장 생성",
      description: "프로그램 완료 시 AI가 개인 맞춤형 세특 문장을 자동 생성하여 교사에게 전달합니다.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Users,
      title: "교사 연동 시스템",
      description: "학습 진도부터 완료 인증까지 교사와 실시간 연동되어 생활기록부 작성을 지원합니다.",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      icon: Award,
      title: "전문가 멘토링",
      description: "각 분야 전문가들의 1:1 멘토링을 통해 깊이 있는 학습과 진로 설계를 도와드립니다.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      icon: Rocket,
      title: "기업 연계 프로그램",
      description: "네이버, 구글, 삼성 등 글로벌 기업과의 파트너십을 통한 실무 중심 교육을 제공합니다.",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ]

  const stats = [
    { number: "4,240+", label: "진단 완료 학생", icon: Users },
    { number: "98%", label: "사용자 만족도", icon: Heart },
    { number: "15+", label: "전공 분야", icon: BookOpen },
    { number: "92%", label: "세특 반영률", icon: CheckCircle },
    { number: "85%", label: "진로 적합도", icon: Target },
    { number: "24/7", label: "학습 지원", icon: MessageCircle },
  ]

  const process = [
    {
      step: "01",
      title: "간단한 정보 입력",
      description: "학년, 성적, 관심 분야 등 기본 정보를 3분 내에 입력합니다.",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      step: "02",
      title: "AI 맞춤 분석",
      description: "입력된 정보를 바탕으로 AI가 생활기록부와 진로 적합도를 종합 분석합니다.",
      icon: Brain,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      step: "03",
      title: "개인 맞춤 결과",
      description: "분석 결과를 바탕으로 맞춤형 진로 설계와 추천 프로그램을 제시합니다.",
      icon: Target,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      step: "04",
      title: "프로그램 수강",
      description: "추천받은 세특 프로그램을 수강하며 전문가 멘토링을 받습니다.",
      icon: Award,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      step: "05",
      title: "세특 문장 생성",
      description: "프로그램 완료 시 AI가 개인 맞춤형 세특 문장을 자동 생성합니다.",
      icon: Sparkles,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
  ]

  const testimonials = [
    {
      name: "김○○",
      role: "고등학교 2학년",
      school: "서울 ○○고",
      comment:
        "패스폴리오 덕분에 AI 분야에 대한 구체적인 진로를 설계할 수 있었어요. 세특 프로그램도 정말 도움이 되었고, 생기부에도 좋은 내용이 많이 담겼습니다!",
      rating: 5,
      program: "AI 윤리 딜레마 분석",
    },
    {
      name: "박○○",
      role: "고등학교 3학년",
      school: "부산 ○○고",
      comment:
        "바이오 분야에 관심이 많았는데, 유전자 치료 기술 탐색 프로그램을 통해 의대 진학에 필요한 깊이 있는 지식을 얻을 수 있었어요. 교사님께서도 세특 내용이 매우 좋다고 하셨습니다.",
      rating: 5,
      program: "유전자 치료 기술 탐색",
    },
    {
      name: "이○○",
      role: "고등학교 1학년",
      school: "대구 ○○고",
      comment:
        "환경 문제에 관심이 많았는데, ESG 프로그램을 통해 실제 지역사회 문제를 해결하는 프로젝트를 진행할 수 있어서 정말 뜻깊었어요. 진로에 대한 확신도 생겼습니다!",
      rating: 5,
      program: "지역사회 기후 위기 대응",
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
              <Sparkles className="h-4 w-4 mr-1" />
              AI 기반 진로 설계 플랫폼
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              패스폴리오
              <br />
              <span className="text-blue-600">Pathfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              AI 기술과 전문가 멘토링이 만나 완성되는
              <br />
              <span className="font-semibold text-gray-900">개인 맞춤형 진로 설계 솔루션</span>
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              단순한 진로 상담을 넘어, 생활기록부 분석부터 세특 문장 자동 생성까지
              <br />
              학생 개개인의 꿈을 현실로 만들어주는 스마트한 교육 플랫폼입니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/basic-info">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <Zap className="mr-2 h-5 w-5" />
                  무료 진단 시작하기
                </Button>
              </Link>
              <Link href="/programs">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  프로그램 둘러보기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* 통계 섹션 */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <IconComponent className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* 핵심 기능 섹션 */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">패스폴리오만의 특별함</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AI 기술과 교육 전문성이 결합된 혁신적인 진로 설계 솔루션
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-all group">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                        <IconComponent className={`h-8 w-8 ${feature.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* 진행 과정 섹션 */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">이렇게 진행됩니다</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">간단한 5단계로 완성되는 개인 맞춤형 진로 설계</p>
            </div>

            <div className="space-y-8">
              {process.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="flex items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-600">{step.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 ${step.bgColor} rounded-lg flex items-center justify-center`}>
                              <IconComponent className={`h-6 w-6 ${step.color}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                              <p className="text-gray-600">{step.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 사용자 후기 섹션 */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">실제 사용자 후기</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                패스폴리오를 통해 꿈을 현실로 만들어가는 학생들의 이야기
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.comment}"</p>
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">
                            {testimonial.role} • {testimonial.school}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          {testimonial.program}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 보안 및 신뢰성 섹션 */}
          <div className="mb-20">
            <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-blue-200">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">안전하고 신뢰할 수 있는 서비스</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    학생들의 개인정보 보호와 교육의 질을 최우선으로 하는 패스폴리오의 약속
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">개인정보 보호</h4>
                    <p className="text-sm text-gray-600">
                      최고 수준의 보안 시스템으로 학생들의 개인정보를 안전하게 보호합니다.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">검증된 전문가</h4>
                    <p className="text-sm text-gray-600">
                      각 분야 최고 전문가들이 직접 참여하여 교육의 질을 보장합니다.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">글로벌 파트너십</h4>
                    <p className="text-sm text-gray-600">
                      네이버, 구글, 삼성 등 글로벌 기업과의 파트너십으로 실무 교육을 제공합니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA 섹션 */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">지금 시작해보세요!</h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  3분 진단으로 시작하는 나만의 맞춤형 진로 설계
                  <br />
                  패스폴리오와 함께 꿈을 현실로 만들어보세요
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/basic-info">
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
                <p className="text-sm mt-6 opacity-75">✅ 회원가입 불필요 • ✅ 3분 소요 • ✅ 즉시 결과 확인</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
