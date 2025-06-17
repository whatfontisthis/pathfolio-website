"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Target,
  Activity,
  BarChart,
  BookCheck,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  BookOpen,
  Calendar,
  GraduationCap,
  Clock,
  MapPin,
} from "lucide-react"

export default function DiagnosisExamplePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">진단 예시</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              패스폴리오의 AI 진단 시스템이 제공하는 상세 분석 결과를 미리 확인해보세요
            </p>
          </div>

          {/* 진단 과정 미리보기 */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">진단 과정 미리보기</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">기본 정보 입력</h3>
                  <p className="text-gray-600 text-sm mb-4">학년, 성적, 관심 분야 등 간단한 정보만 입력하세요</p>
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="기본 정보 입력 화면"
                    className="rounded-lg shadow-sm border"
                  />
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">목표 설정 및 성향 테스트</h3>
                  <p className="text-gray-600 text-sm mb-4">목표 대학과 전공, 간단한 성향 테스트를 진행합니다</p>
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="목표 설정 화면"
                    className="rounded-lg shadow-sm border"
                  />
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">AI 분석 결과 확인</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    AI가 분석한 맞춤형 진로 설계와 추천 프로그램을 확인하세요
                  </p>
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="분석 결과 화면"
                    className="rounded-lg shadow-sm border"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 진단 결과 예시 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">진단 결과 예시</h2>

            <Tabs defaultValue="diagnosis" className="mb-8">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="diagnosis" className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  진로 적합도
                </TabsTrigger>
                <TabsTrigger value="analysis" className="flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  생기부 분석
                </TabsTrigger>
                <TabsTrigger value="improvement" className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  맞춤 보완점
                </TabsTrigger>
                <TabsTrigger value="roadmap" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  준비 로드맵
                </TabsTrigger>
              </TabsList>

              {/* 진로 적합도 탭 */}
              <TabsContent value="diagnosis">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* 진로/학과 적합도 평가 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        진로/학과 적합도 평가
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {["학업역량", "전공적합성", "진로탐색", "실무경험", "창의성"].map((category, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="font-medium">{category}</div>
                            <Badge variant="outline">{Math.floor(Math.random() * 30) + 70}%</Badge>
                          </div>
                          <Progress value={Math.floor(Math.random() * 30) + 70} className="h-2" />
                        </div>
                      ))}

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-2">종합 평가</h4>
                        <p className="text-sm text-blue-700">
                          전공적합성(85%)과 학업역량(78%)이 우수하여 컴퓨터공학과 진학에 적합합니다. 실무경험(45%)
                          보완을 통해 경쟁력을 더욱 높일 수 있습니다.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 전공 적합도 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-purple-600" />
                        추천 전공 순위
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {[
                        {
                          major: "컴퓨터공학과",
                          compatibility: 92,
                          reason: "데이터 분석 및 알고리즘 관련 활동이 두드러짐",
                        },
                        {
                          major: "소프트웨어학과",
                          compatibility: 88,
                          reason: "프로그래밍 역량과 문제해결 능력이 우수함",
                        },
                        { major: "인공지능학과", compatibility: 85, reason: "알고리즘 및 문제해결 능력이 우수함" },
                      ].map((rec, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="font-medium">{rec.major}</div>
                            <Badge
                              variant={index === 0 ? "default" : "outline"}
                              className={index === 0 ? "bg-green-600" : ""}
                            >
                              {rec.compatibility}%
                            </Badge>
                          </div>
                          <Progress value={rec.compatibility} className="h-2" />
                          <p className="text-sm text-gray-600">{rec.reason}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* 필요한 고교학점제 과목 */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookCheck className="h-5 w-5 text-indigo-600" />
                      필요한 고교학점제 과목 리스트
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-3">필수 과목</h4>
                        <div className="space-y-3">
                          {[
                            { name: "확률과 통계", reason: "데이터 분석의 기초가 되는 통계적 사고력 함양" },
                            { name: "미적분", reason: "알고리즘 최적화와 머신러닝 이해에 필요" },
                            { name: "정보과학", reason: "프로그래밍과 컴퓨터 과학 기초 지식" },
                          ].map((subject, index) => (
                            <div key={index} className="p-3 bg-red-50 rounded-lg border border-red-200">
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-medium">{subject.name}</span>
                                <Badge className="bg-red-600">필수</Badge>
                              </div>
                              <p className="text-sm text-gray-600">{subject.reason}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700 mb-3">권장 과목</h4>
                        <div className="space-y-3">
                          {[
                            { name: "물리학Ⅰ", reason: "논리적 사고와 문제해결 능력 향상" },
                            { name: "경제수학", reason: "데이터 분석과 최적화 이론 이해" },
                            { name: "영어회화", reason: "글로벌 IT 환경에서의 커뮤니케이션 능력" },
                          ].map((subject, index) => (
                            <div key={index} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-medium">{subject.name}</span>
                                <Badge variant="outline" className="bg-blue-100 text-blue-700">
                                  권장
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600">{subject.reason}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 생기부 분석 탭 */}
              <TabsContent value="analysis">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* 학업 성취도 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookCheck className="h-5 w-5 text-blue-600" />
                        학업 성취도 분석
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="font-medium">종합 학업 역량</div>
                        <Badge variant="outline">78점</Badge>
                      </div>
                      <Progress value={78} className="h-2" />

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">강점 과목</h4>
                          <div className="space-y-1">
                            {["수학", "과학", "정보"].map((subject, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>{subject}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">보완 필요 과목</h4>
                          <div className="space-y-1">
                            {["국어", "영어"].map((subject, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-amber-600" />
                                <span>{subject}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 비교과 활동 분석 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-purple-600" />
                        비교과 활동 분석
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {["자율활동", "동아리활동", "봉사활동", "진로활동"].map((category, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="font-medium">{category}</div>
                            <Badge variant="outline">{Math.floor(Math.random() * 30) + 60}점</Badge>
                          </div>
                          <Progress value={Math.floor(Math.random() * 30) + 60} className="h-2" />
                        </div>
                      ))}

                      <div className="mt-6">
                        <h4 className="font-medium mb-3">주요 활동 하이라이트</h4>
                        <ul className="space-y-2 list-disc pl-5">
                          {[
                            "정보 동아리에서 데이터 분석 프로젝트 주도",
                            "교내 알고리즘 대회 우수상 수상",
                            "SW 관련 봉사활동 참여",
                          ].map((highlight, index) => (
                            <li key={index} className="text-gray-700">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 맞춤형 보완점 탭 */}
              <TabsContent value="improvement">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* 보완 필요 사항 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                        보완 필요 사항
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            area: "영어 작문 능력",
                            suggestion: "영어 에세이 작성 및 토론 활동 참여",
                            priority: "high",
                          },
                          {
                            area: "실무 프로젝트 경험",
                            suggestion: "산학협력 프로젝트 또는 인턴십 참여",
                            priority: "medium",
                          },
                          {
                            area: "리더십 경험",
                            suggestion: "동아리 또는 팀 프로젝트에서 리더 역할 수행",
                            priority: "medium",
                          },
                        ].map((area, index) => (
                          <div key={index} className="border-b pb-4 last:border-0">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium">{area.area}</h4>
                              <Badge
                                variant="outline"
                                className={`
                                  ${area.priority === "high" ? "bg-red-50 text-red-700 border-red-200" : ""}
                                  ${area.priority === "medium" ? "bg-amber-50 text-amber-700 border-amber-200" : ""}
                                  ${area.priority === "low" ? "bg-blue-50 text-blue-700 border-blue-200" : ""}
                                `}
                              >
                                {area.priority === "high" ? "높음" : area.priority === "medium" ? "중간" : "낮음"}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">{area.suggestion}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* 맞춤형 활동 제안 */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-600" />
                        맞춤형 활동 제안
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-md">
                          <h4 className="font-medium mb-2">✅ 영어 역량 강화</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• 영어 토론 동아리 참여</li>
                            <li>• 영어 에세이 작성 연습</li>
                            <li>• 국제 교류 프로그램 참여</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-green-50 rounded-md">
                          <h4 className="font-medium mb-2">✅ 리더십 경험</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• 동아리 임원 활동</li>
                            <li>• 팀 프로젝트 리더 역할</li>
                            <li>• 멘토링 활동 참여</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-purple-50 rounded-md">
                          <h4 className="font-medium mb-2">✅ 봉사활동 확대</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• 전공 관련 재능기부</li>
                            <li>• 지역사회 봉사활동</li>
                            <li>• 교육 봉사 프로그램</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 준비 로드맵 탭 */}
              <TabsContent value="roadmap">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-green-600" />
                      향후 1년 준비 로드맵
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {["1-3개월", "4-6개월", "7-9개월", "10-12개월"].map((period, index) => (
                        <div key={index} className="relative">
                          <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-medium">
                              {index + 1}
                            </div>
                            <h3 className="ml-4 text-lg font-semibold text-gray-900">{period}</h3>
                          </div>

                          <div className="ml-12 space-y-2">
                            {[1, 2, 3].map((_, taskIndex) => (
                              <div key={taskIndex} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <span className="text-gray-700">
                                  {index === 0 && taskIndex === 0 && "고교학점제 과목 선택 및 수강 신청"}
                                  {index === 0 && taskIndex === 1 && "추천 세특 콘텐츠 수강 시작"}
                                  {index === 0 && taskIndex === 2 && "정보과학 동아리 가입"}
                                  {index === 1 && taskIndex === 0 && "첫 번째 프로그래밍 프로젝트 완성"}
                                  {index === 1 && taskIndex === 1 && "교내 알고리즘 대회 참여"}
                                  {index === 1 && taskIndex === 2 && "영어 회화 능력 향상 프로그램 참여"}
                                  {index === 2 && taskIndex === 0 && "심화 프로젝트 수행 (AI/데이터 분석)"}
                                  {index === 2 && taskIndex === 1 && "외부 해커톤 대회 참여"}
                                  {index === 2 && taskIndex === 2 && "대학 탐방 및 전공 체험 프로그램"}
                                  {index === 3 && taskIndex === 0 && "포트폴리오 완성 및 정리"}
                                  {index === 3 && taskIndex === 1 && "대학별 입시 전략 수립"}
                                  {index === 3 && taskIndex === 2 && "최종 생활기록부 점검 및 보완"}
                                </span>
                              </div>
                            ))}
                          </div>

                          {index < 3 && <div className="absolute left-4 top-12 w-0.5 h-16 bg-gray-300"></div>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* 추천 콘텐츠 예시 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">맞춤 콘텐츠 추천 예시</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "AI 윤리 딜레마 분석",
                  description: "AI 기술의 윤리적 문제를 심층 분석하고 해결방안 제시",
                  category: "AI/컴퓨터공학",
                  difficulty: "고급",
                  thumbnail: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "데이터 시각화 프로젝트",
                  description: "실제 데이터를 활용한 시각화 및 인사이트 도출 프로젝트",
                  category: "AI/컴퓨터공학",
                  difficulty: "중급",
                  thumbnail: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "알고리즘 문제해결 실습",
                  description: "실전 알고리즘 문제 해결 및 최적화 기법 학습",
                  category: "AI/컴퓨터공학",
                  difficulty: "중급",
                  thumbnail: "/placeholder.svg?height=200&width=300",
                },
              ].map((program, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative">
                    <img
                      src={program.thumbnail || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-white text-gray-800">
                        {program.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{program.title}</h4>
                      <p className="text-sm text-gray-600">{program.description}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {program.category}
                      </div>
                    </div>

                    <Link href="/programs">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">프로그램 둘러보기</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
