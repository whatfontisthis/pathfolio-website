"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  School,
  Calendar,
  Edit3,
  Save,
  X,
  BookOpen,
  Award,
  Clock,
  Target,
  Settings,
  Bell,
  Shield,
  CreditCard,
  LogOut,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface UserInfo {
  name: string
  email: string
  phone?: string
  school?: string
  grade?: string
  birthDate?: string
  avatar: string
  joinDate: string
}

export default function MyPage() {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState<UserInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 로그인 상태 확인
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      router.push("/login")
      return
    }

    // 사용자 정보 로드
    const savedUserInfo = localStorage.getItem("userInfo")
    if (savedUserInfo) {
      const parsedInfo = JSON.parse(savedUserInfo)
      const fullUserInfo = {
        ...parsedInfo,
        phone: "010-1234-5678",
        school: "서울고등학교",
        grade: "2학년",
        birthDate: "2007-03-15",
        joinDate: "2024-01-15",
      }
      setUserInfo(fullUserInfo)
      setEditForm(fullUserInfo)
    }
    setIsLoading(false)
  }, [router])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    if (editForm) {
      setUserInfo(editForm)
      localStorage.setItem("userInfo", JSON.stringify(editForm))
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditForm(userInfo)
    setIsEditing(false)
  }

  const handleInputChange = (field: keyof UserInfo, value: string) => {
    if (editForm) {
      setEditForm({
        ...editForm,
        [field]: value,
      })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userInfo")
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">로딩 중...</p>
        </div>
      </div>
    )
  }

  if (!userInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">사용자 정보를 불러올 수 없습니다.</p>
          <Link href="/login">
            <Button className="mt-4">로그인하기</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              돌아가기
            </Button>
          </div>

          {/* 프로필 헤더 */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img
                    src={userInfo.avatar || "/placeholder.svg"}
                    alt="프로필"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{userInfo.name}</h1>
                  <p className="text-gray-600 mb-1">{userInfo.email}</p>
                  <p className="text-sm text-gray-500">가입일: {userInfo.joinDate}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge className="bg-blue-100 text-blue-800">활성 사용자</Badge>
                    <Badge className="bg-green-100 text-green-800">프리미엄</Badge>
                  </div>
                </div>
                <div className="text-right">
                  {!isEditing ? (
                    <Button onClick={handleEdit} variant="outline">
                      <Edit3 className="h-4 w-4 mr-2" />
                      프로필 수정
                    </Button>
                  ) : (
                    <div className="space-x-2">
                      <Button onClick={handleSave} size="sm">
                        <Save className="h-4 w-4 mr-1" />
                        저장
                      </Button>
                      <Button onClick={handleCancel} variant="outline" size="sm">
                        <X className="h-4 w-4 mr-1" />
                        취소
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 탭 메뉴 */}
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                개인정보
              </TabsTrigger>
              <TabsTrigger value="learning" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                학습 통계
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                설정
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                계정 관리
              </TabsTrigger>
            </TabsList>

            {/* 개인정보 탭 */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>개인정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">이름</label>
                      {isEditing ? (
                        <Input
                          value={editForm?.name || ""}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                      ) : (
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span>{userInfo.name}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">이메일</label>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span>{userInfo.email}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">전화번호</label>
                      {isEditing ? (
                        <Input
                          value={editForm?.phone || ""}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span>{userInfo.phone || "미등록"}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">학교</label>
                      {isEditing ? (
                        <Input
                          value={editForm?.school || ""}
                          onChange={(e) => handleInputChange("school", e.target.value)}
                        />
                      ) : (
                        <div className="flex items-center space-x-2">
                          <School className="h-4 w-4 text-gray-400" />
                          <span>{userInfo.school || "미등록"}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">학년</label>
                      {isEditing ? (
                        <Input
                          value={editForm?.grade || ""}
                          onChange={(e) => handleInputChange("grade", e.target.value)}
                        />
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Target className="h-4 w-4 text-gray-400" />
                          <span>{userInfo.grade || "미등록"}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">생년월일</label>
                      {isEditing ? (
                        <Input
                          type="date"
                          value={editForm?.birthDate || ""}
                          onChange={(e) => handleInputChange("birthDate", e.target.value)}
                        />
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span>{userInfo.birthDate || "미등록"}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 학습 통계 탭 */}
            <TabsContent value="learning">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">12</div>
                    <div className="text-sm text-gray-600">수강 과목</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">8</div>
                    <div className="text-sm text-gray-600">이수 완료</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">240</div>
                    <div className="text-sm text-gray-600">학습 시간</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">92</div>
                    <div className="text-sm text-gray-600">평균 점수</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>최근 학습 활동</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">AI 알고리즘 기초</h4>
                        <p className="text-sm text-gray-600">완료 • 92점</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">완료</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">파이썬 실습 프로젝트</h4>
                        <p className="text-sm text-gray-600">진행중 • 75%</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">진행중</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 설정 탭 */}
            <TabsContent value="settings">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      알림 설정
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">이메일 알림</h4>
                        <p className="text-sm text-gray-600">새로운 과정 및 업데이트 알림</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">학습 리마인더</h4>
                        <p className="text-sm text-gray-600">학습 일정 알림</p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>개인정보 설정</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">프로필 공개</h4>
                        <p className="text-sm text-gray-600">다른 사용자에게 프로필 공개</p>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">학습 기록 공개</h4>
                        <p className="text-sm text-gray-600">학습 진도 및 성취도 공개</p>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 계정 관리 탭 */}
            <TabsContent value="account">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      보안 설정
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      비밀번호 변경
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      2단계 인증 설정
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      로그인 기록 확인
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      결제 정보
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      결제 수단 관리
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      구매 내역 확인
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      환불 요청
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">위험 구역</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      로그아웃
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
                    >
                      계정 삭제
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
