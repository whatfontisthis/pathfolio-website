"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Star, Search, ThumbsUp, MessageCircle, TrendingUp, Award } from "lucide-react"

interface Review {
  id: string
  userName: string
  userSchool: string
  userGrade?: string
  rating: number
  date: string
  content: string
  isVerified: boolean
  helpfulCount: number
  tags: string[]
  courseProgress?: number
  projectCompleted?: boolean
}

export default function CourseReviewsPage() {
  const params = useParams()
  const courseId = params.courseId as string
  const [reviews, setReviews] = useState<Review[]>([])
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [ratingFilter, setRatingFilter] = useState("all")
  const [sortBy, setSortBy] = useState("latest")
  const [courseTitle, setCourseTitle] = useState("")
  const [averageRating, setAverageRating] = useState(0)

  useEffect(() => {
    // 실제로는 API에서 데이터를 가져와야 함
    const data = getCourseReviews(courseId)
    setReviews(data.reviews)
    setFilteredReviews(data.reviews)
    setCourseTitle(data.courseTitle)
    setAverageRating(data.averageRating)
  }, [courseId])

  useEffect(() => {
    let filtered = reviews

    // 검색 필터
    if (searchTerm) {
      filtered = filtered.filter(
        (review) =>
          review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // 평점 필터
    if (ratingFilter !== "all") {
      const rating = Number.parseInt(ratingFilter)
      filtered = filtered.filter((review) => review.rating === rating)
    }

    // 정렬
    switch (sortBy) {
      case "latest":
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case "oldest":
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case "highest":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "lowest":
        filtered.sort((a, b) => a.rating - b.rating)
        break
      case "helpful":
        filtered.sort((a, b) => b.helpfulCount - a.helpfulCount)
        break
    }

    setFilteredReviews(filtered)
  }, [reviews, searchTerm, ratingFilter, sortBy])

  const getCourseReviews = (id: string) => {
    // 실제로는 API에서 가져올 데이터
    const courseReviews: { [key: string]: any } = {
      "premium-ai": {
        courseTitle: "AI 전문가 과정",
        averageRating: 4.9,
        reviews: [
          {
            id: "review1",
            userName: "김학생",
            userSchool: "서울대학교",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-15",
            content:
              "AI 전문가 과정을 통해 실무 역량을 크게 향상시킬 수 있었습니다. 특히 프로젝트 중심의 학습이 매우 유익했어요. 강사님의 1:1 멘토링도 정말 도움이 되었고, 실제 기업에서 사용하는 기술들을 직접 배울 수 있어서 좋았습니다. 포트폴리오도 3개나 완성할 수 있었고, 세특 문장 자동 생성 기능까지 정말 만족스러웠어요!",
            isVerified: true,
            helpfulCount: 24,
            tags: ["AI", "실무", "프로젝트", "멘토링", "포트폴리오"],
            courseProgress: 100,
            projectCompleted: true,
          },
          {
            id: "review2",
            userName: "이코딩",
            userSchool: "KAIST",
            userGrade: "2학년",
            rating: 4,
            date: "2024-02-01",
            content:
              "머신러닝 알고리즘을 체계적으로 배울 수 있어서 좋았습니다. 처음에는 어려웠지만 강사님이 차근차근 설명해주셔서 이해할 수 있었어요. 특히 딥러닝 부분이 인상 깊었습니다. 다만 과제가 조금 많아서 시간 관리가 힘들었어요.",
            isVerified: false,
            helpfulCount: 18,
            tags: ["머신러닝", "딥러닝", "체계적", "과제"],
            courseProgress: 95,
            projectCompleted: true,
          },
          {
            id: "review3",
            userName: "박인공",
            userSchool: "연세대학교",
            userGrade: "4학년",
            rating: 5,
            date: "2024-02-10",
            content:
              "강사님의 강의력이 정말 뛰어나십니다. 복잡한 AI 개념들을 쉽게 풀어서 설명해주시고, 실무 경험담도 많이 들려주셔서 도움이 되었어요. 취업 연계 프로그램도 실제로 도움이 되었습니다!",
            isVerified: true,
            helpfulCount: 22,
            tags: ["강의력", "실무경험", "취업연계", "쉬운설명"],
            courseProgress: 100,
            projectCompleted: true,
          },
          {
            id: "review4",
            userName: "최머신",
            userSchool: "고려대학교",
            userGrade: "3학년",
            rating: 5,
            date: "2024-02-18",
            content:
              "AI 윤리 부분까지 다뤄주셔서 정말 좋았습니다. 단순히 기술만 배우는 게 아니라 AI의 사회적 영향까지 생각해볼 수 있었어요. 프로젝트도 실제 사회 문제를 해결하는 내용이라 의미있었습니다.",
            isVerified: true,
            helpfulCount: 19,
            tags: ["AI윤리", "사회적영향", "의미있는프로젝트"],
            courseProgress: 100,
            projectCompleted: true,
          },
          {
            id: "review5",
            userName: "송딥러닝",
            userSchool: "포항공과대학교",
            userGrade: "2학년",
            rating: 4,
            date: "2024-02-25",
            content:
              "온라인 커뮤니티가 정말 활발해서 다른 수강생들과 많은 정보를 공유할 수 있었어요. 질문하면 24시간 내에 답변도 받을 수 있고, 스터디 그룹도 만들어서 함께 공부했습니다.",
            isVerified: false,
            helpfulCount: 15,
            tags: ["온라인커뮤니티", "정보공유", "스터디그룹"],
            courseProgress: 88,
            projectCompleted: false,
          },
          {
            id: "review6",
            userName: "윤AI",
            userSchool: "성균관대학교",
            userGrade: "4학년",
            rating: 5,
            date: "2024-03-01",
            content:
              "평생 강의 자료 제공이 정말 좋은 혜택이에요. 수강 후에도 계속 복습할 수 있어서 도움이 됩니다. 그리고 AI 업계 네트워킹 기회도 실제로 많은 도움이 되었어요!",
            isVerified: true,
            helpfulCount: 21,
            tags: ["평생자료제공", "네트워킹", "복습"],
            courseProgress: 100,
            projectCompleted: true,
          },
        ],
      },
      "naver-ai-bootcamp": {
        courseTitle: "네이버 AI 부트캠프",
        averageRating: 4.9,
        reviews: [
          {
            id: "review1",
            userName: "김네이버",
            userSchool: "서울대학교",
            userGrade: "3학년",
            rating: 5,
            date: "2024-02-15",
            content:
              "실제 네이버 서비스 데이터로 프로젝트를 진행할 수 있어서 정말 유익했습니다! 네이버 AI 연구소 현직자분들의 멘토링도 받을 수 있어서 실무 감각을 기를 수 있었어요.",
            isVerified: true,
            helpfulCount: 35,
            tags: ["네이버", "실무데이터", "현직자멘토링"],
            courseProgress: 100,
            projectCompleted: true,
          },
          {
            id: "review2",
            userName: "이검색",
            userSchool: "KAIST",
            userGrade: "4학년",
            rating: 5,
            date: "2024-02-20",
            content:
              "네이버 검색 AI 알고리즘을 직접 배울 수 있어서 정말 좋았습니다. 인턴십 우선 선발 기회도 있어서 동기부여가 되었어요!",
            isVerified: true,
            helpfulCount: 28,
            tags: ["검색알고리즘", "인턴십기회"],
            courseProgress: 100,
            projectCompleted: true,
          },
        ],
      },
      // 다른 과정들도 동일한 패턴으로 추가...
    }

    return (
      courseReviews[id] || {
        courseTitle: "강좌",
        averageRating: 4.5,
        reviews: [],
      }
    )
  }

  const getRatingDistribution = () => {
    const distribution = [0, 0, 0, 0, 0]
    reviews.forEach((review) => {
      distribution[review.rating - 1]++
    })
    return distribution
  }

  const ratingDistribution = getRatingDistribution()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* 상단 네비게이션 */}
          <div className="flex items-center mb-6">
            <Link href={`/course-details/${courseId}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                강좌로 돌아가기
              </Button>
            </Link>
          </div>

          {/* 헤더 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{courseTitle} 수강후기</h1>
            <p className="text-gray-600">실제 수강생들의 솔직한 후기를 확인해보세요</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* 왼쪽: 평점 요약 */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    평점 요약
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{averageRating}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(averageRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{reviews.length}개 후기</p>
                  </div>

                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-sm w-3">{rating}</span>
                        <Star className="h-3 w-3 text-yellow-400" />
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{
                              width: `${reviews.length > 0 ? (ratingDistribution[rating - 1] / reviews.length) * 100 : 0}%`,
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-8">{ratingDistribution[rating - 1]}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3">주요 키워드</h4>
                    <div className="flex flex-wrap gap-2">
                      {["실무중심", "멘토링", "프로젝트", "취업연계", "체계적"].map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 오른쪽: 후기 목록 */}
            <div className="lg:col-span-3">
              {/* 필터 및 검색 */}
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          placeholder="후기 내용이나 태그로 검색..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Select value={ratingFilter} onValueChange={setRatingFilter}>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="평점" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">전체 평점</SelectItem>
                          <SelectItem value="5">⭐⭐⭐⭐⭐</SelectItem>
                          <SelectItem value="4">⭐⭐⭐⭐</SelectItem>
                          <SelectItem value="3">⭐⭐⭐</SelectItem>
                          <SelectItem value="2">⭐⭐</SelectItem>
                          <SelectItem value="1">⭐</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="정렬" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="latest">최신순</SelectItem>
                          <SelectItem value="oldest">오래된순</SelectItem>
                          <SelectItem value="highest">높은평점순</SelectItem>
                          <SelectItem value="lowest">낮은평점순</SelectItem>
                          <SelectItem value="helpful">도움순</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 후기 목록 */}
              <div className="space-y-6">
                {filteredReviews.map((review) => (
                  <Card key={review.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-blue-100 text-blue-600">
                              {review.userName.slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold">{review.userName}</span>
                              {review.isVerified && (
                                <Badge variant="secondary" className="text-xs">
                                  <Award className="h-3 w-3 mr-1" />
                                  인증
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-gray-500">
                              {review.userSchool} {review.userGrade && `• ${review.userGrade}`}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="text-sm text-gray-500">{review.date}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-700 leading-relaxed">{review.content}</p>
                      </div>

                      {/* 수강 진행률 및 프로젝트 완료 상태 */}
                      {(review.courseProgress || review.projectCompleted) && (
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                          {review.courseProgress && (
                            <div className="flex items-center gap-1">
                              <TrendingUp className="h-4 w-4" />
                              <span>수강률 {review.courseProgress}%</span>
                            </div>
                          )}
                          {review.projectCompleted && (
                            <div className="flex items-center gap-1">
                              <Award className="h-4 w-4 text-green-500" />
                              <span>프로젝트 완료</span>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {review.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                            <ThumbsUp className="h-4 w-4" />
                            <span>도움돼요 {review.helpfulCount}</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span>댓글</span>
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredReviews.length === 0 && (
                <Card>
                  <CardContent className="p-8 text-center">
                    <div className="text-gray-500 mb-4">
                      <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>검색 조건에 맞는 후기가 없습니다.</p>
                      <p className="text-sm">다른 검색어나 필터를 시도해보세요.</p>
                    </div>
                    <Button variant="outline" onClick={() => setSearchTerm("")}>
                      전체 후기 보기
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
