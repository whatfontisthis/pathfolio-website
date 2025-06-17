"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Hash,
  Users,
  MessageCircle,
  TrendingUp,
  Search,
  Plus,
  Settings,
  Bell,
  BellOff,
  Pin,
  Heart,
  Eye,
  MessageSquare,
  Calendar,
  Award,
} from "lucide-react"

export default function ChannelDetailPage({ params }: { params: { channelId: string } }) {
  const [isJoined, setIsJoined] = useState(false)
  const [isNotificationOn, setIsNotificationOn] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("posts")

  // 실제로는 params.channelId를 사용해서 서버에서 데이터를 가져옴
  const channelData = {
    id: params.channelId,
    name: params.channelId === "일반" ? "일반" : "학습정보",
    description: "일반적인 학습 정보와 팁을 공유하는 채널입니다.",
    memberCount: 1247,
    postCount: 156,
    createdAt: "2023년 3월",
    category: "학습 정보",
    rules: [
      "서로 존중하며 예의를 지켜주세요",
      "스팸이나 광고성 게시물은 금지입니다",
      "학습과 관련된 내용만 게시해주세요",
      "개인정보 공유를 주의해주세요",
    ],
    moderators: [
      { name: "김성민", role: "채널 관리자", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "박지원", role: "부관리자", avatar: "/placeholder.svg?height=40&width=40" },
    ],
  }

  const channelPosts = [
    {
      id: "1",
      title: "효과적인 암기 방법 공유",
      content: "시험 기간에 도움이 되는 암기 방법들을 정리해봤습니다...",
      author: "이수현",
      avatar: "/placeholder.svg?height=40&width=40",
      timestamp: "2시간 전",
      likes: 45,
      comments: 12,
      views: 234,
      isPinned: true,
    },
    {
      id: "2",
      title: "수학 공식 정리 노트 공유",
      content: "고등학교 수학 전 범위 공식을 정리한 노트입니다...",
      author: "정민수",
      avatar: "/placeholder.svg?height=40&width=40",
      timestamp: "4시간 전",
      likes: 67,
      comments: 8,
      views: 456,
      isPinned: false,
    },
    {
      id: "3",
      title: "영어 단어 암기 앱 추천",
      content: "제가 사용해본 영어 단어 암기 앱들을 비교해봤습니다...",
      author: "최유진",
      avatar: "/placeholder.svg?height=40&width=40",
      timestamp: "6시간 전",
      likes: 23,
      comments: 15,
      views: 189,
      isPinned: false,
    },
  ]

  const channelEvents = [
    {
      id: "1",
      title: "온라인 스터디 그룹 모집",
      date: "2024년 1월 15일",
      time: "오후 7:00",
      participants: 12,
      maxParticipants: 20,
    },
    {
      id: "2",
      title: "수학 문제 풀이 세션",
      date: "2024년 1월 18일",
      time: "오후 8:00",
      participants: 8,
      maxParticipants: 15,
    },
  ]

  const topMembers = [
    { name: "김성민", posts: 89, likes: 1247, avatar: "/placeholder.svg?height=32&width=32" },
    { name: "박지원", posts: 67, likes: 892, avatar: "/placeholder.svg?height=32&width=32" },
    { name: "이수현", posts: 45, likes: 634, avatar: "/placeholder.svg?height=32&width=32" },
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* 뒤로가기 버튼 */}
          <div className="mb-6">
            <Link href="/community">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                커뮤니티로 돌아가기
              </Button>
            </Link>
          </div>

          {/* 채널 헤더 */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Hash className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">#{channelData.name}</h1>
                    <p className="text-gray-600 mb-4">{channelData.description}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{channelData.memberCount.toLocaleString()}명</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{channelData.postCount}개 게시글</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{channelData.createdAt} 생성</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsNotificationOn(!isNotificationOn)}
                    className="flex items-center"
                  >
                    {isNotificationOn ? <Bell className="w-4 h-4 mr-1" /> : <BellOff className="w-4 h-4 mr-1" />}
                    {isNotificationOn ? "알림 끄기" : "알림 켜기"}
                  </Button>
                  <Button
                    onClick={() => setIsJoined(!isJoined)}
                    className={isJoined ? "bg-gray-600 hover:bg-gray-700" : "bg-blue-600 hover:bg-blue-700"}
                  >
                    {isJoined ? "참여 중" : "채널 참여"}
                  </Button>
                </div>
              </div>

              {/* 채널 통계 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{channelData.memberCount.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">멤버</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{channelData.postCount}</p>
                  <p className="text-sm text-gray-600">게시글</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">89</p>
                  <p className="text-sm text-gray-600">오늘 활동</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Award className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">4.8</p>
                  <p className="text-sm text-gray-600">평점</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 메인 콘텐츠 */}
            <div className="lg:col-span-3">
              {/* 검색 및 글쓰기 */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="채널 내 검색..."
                    className="pl-10"
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />글 작성하기
                </Button>
              </div>

              {/* 탭 메뉴 */}
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="posts">게시글</TabsTrigger>
                  <TabsTrigger value="events">이벤트</TabsTrigger>
                  <TabsTrigger value="files">파일</TabsTrigger>
                  <TabsTrigger value="members">멤버</TabsTrigger>
                </TabsList>

                <TabsContent value="posts" className="mt-6">
                  <div className="space-y-4">
                    {channelPosts.map((post) => (
                      <Card key={post.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={post.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{post.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="font-medium text-gray-900">{post.author}</span>
                                {post.isPinned && <Pin className="w-4 h-4 text-red-600" />}
                                <span className="text-sm text-gray-500">{post.timestamp}</span>
                              </div>

                              <Link href={`/community/posts/${post.id}`}>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                                  {post.title}
                                </h3>
                              </Link>

                              <p className="text-gray-600 mb-3 line-clamp-2">{post.content}</p>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <button className="flex items-center space-x-1 hover:text-red-600 transition-colors">
                                    <Heart className="w-4 h-4" />
                                    <span>{post.likes}</span>
                                  </button>
                                  <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                                    <MessageSquare className="w-4 h-4" />
                                    <span>{post.comments}</span>
                                  </button>
                                  <div className="flex items-center space-x-1">
                                    <Eye className="w-4 h-4" />
                                    <span>{post.views}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="events" className="mt-6">
                  <div className="space-y-4">
                    {channelEvents.map((event) => (
                      <Card key={event.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                                <span>{event.date}</span>
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Users className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">
                                  {event.participants}/{event.maxParticipants}명 참여
                                </span>
                              </div>
                            </div>
                            <Button size="sm">참여하기</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="files" className="mt-6">
                  <div className="text-center py-12">
                    <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">공유된 파일</h3>
                    <p className="text-gray-600">채널에서 공유된 파일들을 확인하세요.</p>
                  </div>
                </TabsContent>

                <TabsContent value="members" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topMembers.map((member, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={member.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{member.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{member.name}</h4>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span>게시글 {member.posts}</span>
                                <span>좋아요 {member.likes}</span>
                              </div>
                            </div>
                            <Button size="sm" variant="outline">
                              팔로우
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* 사이드바 */}
            <div className="lg:col-span-1 space-y-6">
              {/* 채널 관리자 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    채널 관리자
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {channelData.moderators.map((moderator, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={moderator.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{moderator.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{moderator.name}</p>
                        <p className="text-sm text-gray-600">{moderator.role}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* 채널 규칙 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">채널 규칙</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {channelData.rules.map((rule, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">{index + 1}.</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* 인기 멤버 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    이달의 활동왕
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {topMembers.slice(0, 3).map((member, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 text-yellow-800 text-sm font-bold">
                        {index + 1}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{member.name}</p>
                        <p className="text-xs text-gray-600">게시글 {member.posts}개</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
