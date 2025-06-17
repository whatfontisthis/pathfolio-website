"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import {
  Hash,
  Users,
  Plus,
  Search,
  MessageCircle,
  TrendingUp,
  Eye,
  Heart,
  MessageSquare,
  Share2,
  Filter,
  Star,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

// 타입 정의
type Post = {
  id: string
  title: string
  content: string
  author: string
  avatar: string
  category: string
  tags: string[]
  likes: number
  comments: number
  views: number
  timestamp: string
  isPopular?: boolean
  isPinned?: boolean
}

type Channel = {
  id: string
  name: string
  description: string
  category: string
  memberCount: number
  postCount: number
  lastActivity: string
  isJoined: boolean
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("popular")
  const [selectedCategory, setSelectedCategory] = useState("전체")
  const [searchQuery, setSearchQuery] = useState("")
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false)
  const [newPostTitle, setNewPostTitle] = useState("")
  const [newPostContent, setNewPostContent] = useState("")
  const [newPostCategory, setNewPostCategory] = useState("일반")

  // 카테고리 목록
  const categories = [
    { name: "전체", count: 1247, color: "bg-blue-100 text-blue-800" },
    { name: "학습 정보", count: 324, color: "bg-green-100 text-green-800" },
    { name: "입시 정보", count: 189, color: "bg-purple-100 text-purple-800" },
    { name: "세특 프로그램", count: 156, color: "bg-orange-100 text-orange-800" },
    { name: "진로 상담", count: 98, color: "bg-pink-100 text-pink-800" },
    { name: "스터디 모집", count: 234, color: "bg-indigo-100 text-indigo-800" },
    { name: "자유 게시판", count: 246, color: "bg-gray-100 text-gray-800" },
  ]

  // 인기 채널 목록
  const popularChannels: Channel[] = [
    {
      id: "1",
      name: "KAIST 준비반",
      description: "KAIST 입시 정보와 학습 자료를 공유하는 채널입니다.",
      category: "입시 정보",
      memberCount: 1247,
      postCount: 89,
      lastActivity: "5분 전",
      isJoined: true,
    },
    {
      id: "2",
      name: "수학 올림피아드",
      description: "수학 문제 풀이와 올림피아드 준비를 함께 해요.",
      category: "학습 정보",
      memberCount: 892,
      postCount: 156,
      lastActivity: "12분 전",
      isJoined: false,
    },
    {
      id: "3",
      name: "세특 프로젝트 공유",
      description: "세특 프로젝트 아이디어와 결과물을 공유합니다.",
      category: "세특 프로그램",
      memberCount: 634,
      postCount: 78,
      lastActivity: "1시간 전",
      isJoined: true,
    },
    {
      id: "4",
      name: "해외대학 진학",
      description: "해외 대학 진학 정보와 경험을 나누는 공간입니다.",
      category: "입시 정보",
      memberCount: 456,
      postCount: 45,
      lastActivity: "2시간 전",
      isJoined: false,
    },
  ]

  // 게시글 목록
  const posts: Post[] = [
    {
      id: "1",
      title: "KAIST 전기전자공학부 합격 후기 및 팁 공유",
      content:
        "안녕하세요! 올해 KAIST 전기전자공학부에 합격한 학생입니다. 제가 준비했던 과정과 팁들을 공유하고 싶어서 글을 작성합니다...",
      author: "김성민",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "입시 정보",
      tags: ["KAIST", "전기전자", "합격후기"],
      likes: 156,
      comments: 23,
      views: 1247,
      timestamp: "2시간 전",
      isPopular: true,
      isPinned: true,
    },
    {
      id: "2",
      title: "세특 프로그램 수강 후기 - MIT 연구 프로젝트",
      content:
        "패스폴리오의 MIT 연구 프로젝트를 완주했습니다! 정말 값진 경험이었고, 실제로 대학 지원에도 큰 도움이 되었어요...",
      author: "박성민",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "세특 프로그램",
      tags: ["MIT", "연구프로젝트", "후기"],
      likes: 89,
      comments: 15,
      views: 892,
      timestamp: "4시간 전",
      isPopular: true,
    },
    {
      id: "3",
      title: "수학 올림피아드 준비 스터디 모집합니다",
      content:
        "KMO 준비를 함께 할 스터디원을 모집합니다. 주 2회 온라인으로 진행하며, 문제 풀이와 토론 중심으로 운영할 예정입니다...",
      author: "이지원",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "스터디 모집",
      tags: ["수학", "올림피아드", "스터디"],
      likes: 34,
      comments: 8,
      views: 456,
      timestamp: "6시간 전",
    },
    {
      id: "4",
      title: "서울대 의대 면접 준비 방법 정리",
      content: "서울대 의대 면접을 준비하면서 정리한 자료들을 공유합니다. MMI 형식과 일반 면접 모두 포함되어 있어요...",
      author: "최유진",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "입시 정보",
      tags: ["서울대", "의대", "면접"],
      likes: 67,
      comments: 12,
      views: 723,
      timestamp: "8시간 전",
    },
    {
      id: "5",
      title: "물리 실험 보고서 작성 팁",
      content:
        "물리 실험 보고서를 잘 작성하는 방법에 대해 정리해봤습니다. 특히 오차 분석과 결론 도출 부분에 중점을 두었어요...",
      author: "정민수",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "학습 정보",
      tags: ["물리", "실험", "보고서"],
      likes: 45,
      comments: 6,
      views: 334,
      timestamp: "12시간 전",
    },
  ]

  // 필터링된 게시글
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "전체" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // 게시글 생성 함수
  const createPost = () => {
    if (!newPostTitle.trim() || !newPostContent.trim()) return

    // 실제 구현에서는 서버에 게시글 생성 요청
    alert(`새 게시글 "${newPostTitle}"이(가) 작성되었습니다!`)

    setIsCreatePostOpen(false)
    setNewPostTitle("")
    setNewPostContent("")
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* 헤더 섹션 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">패스폴리오 커뮤니티</h1>
                <p className="text-gray-600">학습 정보를 공유하고 함께 성장하는 공간입니다</p>

                {/* 홈으로 돌아가기 버튼 추가 */}
                <div className="mt-4"></div>
              </div>
              <Dialog open={isCreatePostOpen} onOpenChange={setIsCreatePostOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />글 작성하기
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>새 게시글 작성</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">제목</label>
                      <Input
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                        placeholder="게시글 제목을 입력하세요"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">카테고리</label>
                      <select
                        value={newPostCategory}
                        onChange={(e) => setNewPostCategory(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                      >
                        {categories.slice(1).map((category) => (
                          <option key={category.name} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">내용</label>
                      <textarea
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                        placeholder="게시글 내용을 입력하세요"
                        className="w-full h-32 rounded-md border border-gray-300 px-3 py-2 resize-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsCreatePostOpen(false)}>
                      취소
                    </Button>
                    <Button onClick={createPost} className="bg-blue-600 hover:bg-blue-700">
                      게시글 작성
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* 통계 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">총 회원수</p>
                      <p className="text-2xl font-bold text-gray-900">3,247</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">총 게시글</p>
                      <p className="text-2xl font-bold text-gray-900">1,247</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Hash className="h-8 w-8 text-purple-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">활성 채널</p>
                      <p className="text-2xl font-bold text-gray-900">24</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-orange-600 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">오늘 활동</p>
                      <p className="text-2xl font-bold text-gray-900">156</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 주목받는 멤버 섹션 */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  주목받는 멤버
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    {
                      name: "김성민",
                      role: "KAIST 합격생",
                      followers: 1247,
                      posts: 89,
                      avatar: "/placeholder.svg?height=60&width=60",
                    },
                    {
                      name: "박지원",
                      role: "MIT 연구원",
                      followers: 892,
                      posts: 156,
                      avatar: "/placeholder.svg?height=60&width=60",
                    },
                    {
                      name: "이수현",
                      role: "서울대 의대생",
                      followers: 634,
                      posts: 78,
                      avatar: "/placeholder.svg?height=60&width=60",
                    },
                    {
                      name: "최민수",
                      role: "물리 올림피아드",
                      followers: 456,
                      posts: 45,
                      avatar: "/placeholder.svg?height=60&width=60",
                    },
                  ].map((member, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <Avatar className="h-16 w-16 mx-auto mb-3">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      <h4 className="font-medium text-gray-900 mb-1">{member.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                      <div className="flex justify-center space-x-4 text-xs text-gray-500">
                        <span>팔로워 {member.followers}</span>
                        <span>글 {member.posts}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 사이드바 */}
            <div className="lg:col-span-1 space-y-6">
              {/* 카테고리 필터 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    카테고리
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors
                      ${
                        selectedCategory === category.name
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-medium">{category.name}</span>
                      <Badge variant="secondary" className={category.color}>
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* 인기 채널 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    인기 채널
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {popularChannels.map((channel) => (
                    <div key={channel.id} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{channel.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {channel.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{channel.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{channel.memberCount.toLocaleString()}명</span>
                        <span>{channel.lastActivity}</span>
                      </div>
                      <Button size="sm" variant={channel.isJoined ? "outline" : "default"} className="w-full mt-2">
                        {channel.isJoined ? "참여중" : "참여하기"}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* 채널 메뉴 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center">
                    <Hash className="w-5 h-5 mr-2" />
                    채널
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    { name: "일반", count: 156, isActive: true },
                    { name: "학습정보", count: 89, isActive: false },
                    { name: "입시정보", count: 67, isActive: false },
                    { name: "세특프로그램", count: 45, isActive: false },
                    { name: "진로상담", count: 34, isActive: false },
                    { name: "스터디모집", count: 78, isActive: false },
                    { name: "자유게시판", count: 123, isActive: false },
                  ].map((channel) => (
                    <Link
                      key={channel.name}
                      href={`/community/channels/${channel.name.toLowerCase()}`}
                      className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors
          ${channel.isActive ? "bg-blue-50 text-blue-700 border border-blue-200" : "hover:bg-gray-50"}`}
                    >
                      <span className="font-medium"># {channel.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {channel.count}
                      </Badge>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* 메인 콘텐츠 */}
            <div className="lg:col-span-3">
              {/* 검색 및 탭 */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="게시글 검색..."
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline" className="flex items-center">
                    <Filter className="w-4 h-4 mr-2" />
                    필터
                  </Button>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="popular">인기글</TabsTrigger>
                    <TabsTrigger value="recent">최신글</TabsTrigger>
                    <TabsTrigger value="trending">트렌딩</TabsTrigger>
                    <TabsTrigger value="following">팔로잉</TabsTrigger>
                  </TabsList>

                  <TabsContent value="popular" className="mt-6">
                    <div className="space-y-4">
                      {filteredPosts.map((post) => (
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
                                  <Badge variant="outline" className="text-xs">
                                    {post.category}
                                  </Badge>
                                  {post.isPinned && <Badge className="bg-red-100 text-red-800 text-xs">고정</Badge>}
                                  {post.isPopular && (
                                    <Badge className="bg-orange-100 text-orange-800 text-xs">인기</Badge>
                                  )}
                                  <span className="text-sm text-gray-500">{post.timestamp}</span>
                                </div>

                                <Link href={`/community/posts/${post.id}`}>
                                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                                    {post.title}
                                  </h3>
                                </Link>

                                <p className="text-gray-600 mb-3 line-clamp-2">{post.content}</p>

                                <div className="flex items-center space-x-2 mb-3">
                                  {post.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                      #{tag}
                                    </Badge>
                                  ))}
                                </div>

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
                                  <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                                    <Share2 className="w-4 h-4" />
                                    <span>공유</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="recent" className="mt-6">
                    <div className="space-y-4">
                      {filteredPosts.reverse().map((post) => (
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
                                  <Badge variant="outline" className="text-xs">
                                    {post.category}
                                  </Badge>
                                  <Badge className="bg-green-100 text-green-800 text-xs">NEW</Badge>
                                  <span className="text-sm text-gray-500">{post.timestamp}</span>
                                </div>

                                <Link href={`/community/posts/${post.id}`}>
                                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                                    {post.title}
                                  </h3>
                                </Link>

                                <p className="text-gray-600 mb-3 line-clamp-2">{post.content}</p>

                                <div className="flex items-center space-x-2 mb-3">
                                  {post.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                      #{tag}
                                    </Badge>
                                  ))}
                                </div>

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
                                  <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                                    <Share2 className="w-4 h-4" />
                                    <span>공유</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="trending" className="mt-6">
                    <div className="text-center py-12">
                      <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">트렌딩 게시글</h3>
                      <p className="text-gray-600">현재 가장 인기 있는 게시글들을 준비 중입니다.</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="following" className="mt-6">
                    <div className="text-center py-12">
                      <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">팔로잉 피드</h3>
                      <p className="text-gray-600">팔로우한 사용자들의 게시글을 확인하세요.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
