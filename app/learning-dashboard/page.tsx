"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Download,
  Mail,
  Target,
  Star,
} from "lucide-react"
import { useRouter } from "next/navigation"

interface CourseProgress {
  id: string
  title: string
  progress: number
  status: "completed" | "in-progress" | "not-started"
  grade: number | null
  completedDate?: string
  estimatedCompletion?: string
  generatedSespec?: string
}

export default function LearningDashboardPage() {
  const router = useRouter()
  const [courseProgress, setCourseProgress] = useState<CourseProgress[]>([])
  const [overallStats, setOverallStats] = useState({
    totalCourses: 0,
    completedCourses: 0,
    inProgressCourses: 0,
    averageGrade: 0,
    totalStudyHours: 0,
    sespecGenerated: 0,
  })

  useEffect(() => {
    // 실제로는 서버에서 학습 데이터를 가져와야 함
    const mockProgress: CourseProgress[] = [
      {
        id: "1",
        title: "AI 알고리즘 기초",
        progress: 100,
        status: "completed",
        grade: 92,
        completedDate: "2024-01-15",
        generatedSespec:
          "머신러닝 알고리즘의 수학적 원리를 이해하고, 실제 데이터셋을 활용하여 분류 모델을 구현함으로써 인공지능 기술의 실용적 적용 능력을 기름",
      },
      {
        id: "2",
        title: "파이썬 실습 프로젝트",
        progress: 75,
        status: "in-progress",
        grade: null,
        estimatedCompletion: "2024-02-10",
      },
      {
        id: "3",
        title: "웹 개발 입문",
        progress: 100,
        status: "completed",
        grade: 88,
        completedDate: "2024-01-28",
        generatedSespec:
          "HTML5, CSS3, JavaScript를 활용하여 반응형 웹사이트를 제작하고, 사용자 경험을 고려한 인터페이스 설계 능력을 개발함",
      },
      {
        id: "4",
        title: "데이터 시각화",
        progress: 0,
        status: "not-started",
        grade: null,
      },
      {
        id: "5",
        title: "창의적 사고와 문제해결",
        progress: 45,
        status: "in-progress",
        grade: null,
        estimatedCompletion: "2024-02-20",
      },
    ]

    setCourseProgress(mockProgress)

    // 통계 계산
    const completed = mockProgress.filter((course) => course.status === "completed")
    const inProgress = mockProgress.filter((course) => course.status === "in-progress")
    const grades = completed.filter((course) => course.grade !== null).map((course) => course.grade!)
    const avgGrade = grades.length > 0 ? Math.round(grades.reduce((a, b) => a + b, 0) / grades.length) : 0
    const sespecCount = completed.filter((course) => course.generatedSespec).length

    setOverallStats({
      totalCourses: mockProgress.length,
      completedCourses: completed.length,
      inProgressCourses: inProgress.length,
      averageGrade: avgGrade,
      totalStudyHours: completed.length * 20 + inProgress.length * 10, // 가정: 완료 과목당 20시간, 진행중 10시간
      sespecGenerated: sespecCount,
    })
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "not-started":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "이수완료"
      case "in-progress":
        return "수강중"
      case "not-started":
        return "미시작"
      default:
        return "알 수 없음"
    }
  }

  const handleDownloadCertificate = (courseId: string, title: string) => {
    alert(
      `📜 "${title}" 이수증이 다운로드됩니다!\n\n포함 내용:\n• 이수 확인서\n• 성취도 평가\n• 생성된 세특 문장\n• 학습 활동 기록`,
    )
  }

  const handleSendToTeacher = (courseId: string, title: string) => {
    alert(
      `📧 "${title}" 이수 내용이 담당 교사에게 전송됩니다!\n\n전송 내용:\n• 이수증 및 성취도\n• 생성된 세특 문장\n• 학습 과정 기록\n• 생활기록부 작성 가이드`,
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              돌아가기
            </Button>
          </div>

          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">나의 학습 현황</h1>
            <p className="text-gray-600">수강한 콘텐츠의 진도와 성취도를 확인하세요</p>
          </div>

          {/* 전체 통계 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">전체 수강 과목</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{overallStats.totalCourses}개</div>
                <p className="text-xs text-muted-foreground">
                  완료 {overallStats.completedCourses}개 • 진행중 {overallStats.inProgressCourses}개
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">평균 성취도</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{overallStats.averageGrade}점</div>
                <p className="text-xs text-muted-foreground">이수 완료 과목 기준</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">생성된 세특</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{overallStats.sespecGenerated}개</div>
                <p className="text-xs text-muted-foreground">교사 전달 완료</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">총 학습 시간</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{overallStats.totalStudyHours}시간</div>
                <p className="text-xs text-muted-foreground">누적 학습 시간</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">이수율</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round((overallStats.completedCourses / overallStats.totalCourses) * 100)}%
                </div>
                <p className="text-xs text-muted-foreground">전체 과목 대비</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">학습 등급</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">A+</div>
                <p className="text-xs text-muted-foreground">우수 학습자</p>
              </CardContent>
            </Card>
          </div>

          {/* 탭 메뉴 */}
          <Tabs defaultValue="progress" className="mb-8">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="progress" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                학습 진도
              </TabsTrigger>
              <TabsTrigger value="completed" className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                이수 완료
              </TabsTrigger>
              <TabsTrigger value="sespec" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                생성된 세특
              </TabsTrigger>
            </TabsList>

            {/* 학습 진도 탭 */}
            <TabsContent value="progress">
              <div className="space-y-6">
                {courseProgress.map((course) => (
                  <Card key={course.id}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <Badge variant="outline" className={getStatusColor(course.status)}>
                          {getStatusText(course.status)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>진도율</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            {course.status === "completed" && course.completedDate && (
                              <p className="text-green-600">
                                <CheckCircle2 className="h-4 w-4 inline mr-1" />
                                완료일: {course.completedDate}
                              </p>
                            )}
                            {course.status === "in-progress" && course.estimatedCompletion && (
                              <p className="text-blue-600">
                                <Clock className="h-4 w-4 inline mr-1" />
                                예상 완료: {course.estimatedCompletion}
                              </p>
                            )}
                            {course.status === "not-started" && (
                              <p className="text-gray-600">
                                <AlertCircle className="h-4 w-4 inline mr-1" />
                                아직 시작하지 않음
                              </p>
                            )}
                          </div>
                          <div>
                            {course.grade && (
                              <p className="text-right">
                                <span className="font-medium">성취도: {course.grade}점</span>
                              </p>
                            )}
                          </div>
                        </div>

                        {course.status === "completed" && (
                          <div className="flex gap-2 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDownloadCertificate(course.id, course.title)}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              이수증 다운로드
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleSendToTeacher(course.id, course.title)}
                            >
                              <Mail className="h-4 w-4 mr-1" />
                              교사에게 전송
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* 이수 완료 탭 */}
            <TabsContent value="completed">
              <div className="space-y-6">
                {courseProgress
                  .filter((course) => course.status === "completed")
                  .map((course) => (
                    <Card key={course.id} className="border-green-200 bg-green-50">
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg text-green-800">{course.title}</CardTitle>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-green-600">이수완료</Badge>
                            {course.grade && (
                              <Badge variant="outline" className="bg-white">
                                {course.grade}점
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-green-700">
                                <CheckCircle2 className="h-4 w-4 inline mr-1" />
                                완료일: {course.completedDate}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-green-700 font-medium">성취도: {course.grade}점</p>
                            </div>
                          </div>

                          {course.generatedSespec && (
                            <div className="bg-white p-3 rounded-lg border border-green-200">
                              <p className="text-sm font-medium text-green-800 mb-1">생성된 세특 문장</p>
                              <p className="text-sm text-green-700 italic">"{course.generatedSespec}"</p>
                            </div>
                          )}

                          <div className="flex gap-2 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDownloadCertificate(course.id, course.title)}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              이수증 다운로드
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleSendToTeacher(course.id, course.title)}
                            >
                              <Mail className="h-4 w-4 mr-1" />
                              교사에게 전송
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* 생성된 세특 탭 */}
            <TabsContent value="sespec">
              <div className="space-y-6">
                {courseProgress
                  .filter((course) => course.generatedSespec)
                  .map((course) => (
                    <Card key={course.id} className="border-blue-200 bg-blue-50">
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg text-blue-800">{course.title}</CardTitle>
                          <Badge className="bg-blue-600">세특 생성완료</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg border border-blue-200">
                            <p className="text-sm font-medium text-blue-800 mb-2">생성된 세특 문장</p>
                            <p className="text-blue-700 italic leading-relaxed">"{course.generatedSespec}"</p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                            <div>
                              <p>완료일: {course.completedDate}</p>
                              <p>성취도: {course.grade}점</p>
                            </div>
                            <div>
                              <p>교사 전달: 완료</p>
                              <p>생기부 반영: 대기중</p>
                            </div>
                          </div>

                          <div className="flex gap-2 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDownloadCertificate(course.id, course.title)}
                            >
                              <Download className="h-4 w-4 mr-1" />
                              세특 문장 다운로드
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleSendToTeacher(course.id, course.title)}
                            >
                              <Mail className="h-4 w-4 mr-1" />
                              교사에게 재전송
                            </Button>
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
    </div>
  )
}
