"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Heart,
  MessageSquare,
  Share2,
  Eye,
  Bookmark,
  Flag,
  ThumbsUp,
  Reply,
  MoreHorizontal,
} from "lucide-react"

export default function PostDetailPage({ params }: { params: { postId: string } }) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [newComment, setNewComment] = useState("")
  const [comments, setComments] = useState([
    {
      id: "1",
      author: "이지원",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "정말 유용한 정보네요! 저도 KAIST 준비 중인데 많은 도움이 되었습니다.",
      timestamp: "1시간 전",
      likes: 12,
      replies: [
        {
          id: "1-1",
          author: "김성민",
          avatar: "/placeholder.svg?height=32&width=32",
          content: "도움이 되셨다니 기쁩니다! 궁금한 점 있으시면 언제든 물어보세요.",
          timestamp: "45분 전",
          likes: 5,
        },
      ],
    },
    {
      id: "2",
      author: "박민수",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "세특 프로그램은 어떤 것을 선택하셨나요? 저도 고민 중이에요.",
      timestamp: "2시간 전",
      likes: 8,
      replies: [],
    },
  ])

  // 실제로는 params.postId를 사용해서 서버에서 데이터를 가져옴
  const post = {
    id: params.postId,
    title: "KAIST 전기전자공학부 합격 후기 및 팁 공유",
    content: `안녕하세요! 올해 KAIST 전기전자공학부에 합격한 학생입니다. 

제가 준비했던 과정과 팁들을 공유하고 싶어서 글을 작성합니다.

## 1. 학업 성취도 관리
- 내신 관리: 1학년부터 꾸준히 관리했습니다. 특히 수학, 과학 과목에 집중했어요.
- 모의고사: 수능 최저학력기준을 맞추기 위해 꾸준히 준비했습니다.

## 2. 세특 활동
패스폴리오의 MIT 연구 프로젝트를 수강했는데, 정말 도움이 많이 되었습니다.
- 실제 연구 경험을 쌓을 수 있었고
- 포트폴리오 작성에 큰 도움이 되었어요
- 면접에서도 이 경험을 어필할 수 있었습니다

## 3. 면접 준비
- 기본 소양 면접: 자기소개서 기반 질문 대비
- 전공 면접: 수학, 물리 기본 개념 정리
- 모의면접: 선생님, 친구들과 여러 번 연습

## 4. 마지막 조언
가장 중요한 것은 꾸준함입니다. 단기간에 성과를 내려고 하지 마시고, 장기적인 관점에서 준비하세요.

질문 있으시면 댓글로 남겨주세요!`,
    author: "김성민",
    avatar: "/placeholder.svg?height=50&width=50",
    category: "입시 정보",
    tags: ["KAIST", "전기전자", "합격후기"],
    likes: 156,
    comments: 23,
    views: 1247,
    timestamp: "2시간 전",
    isPopular: true,
    isPinned: true,
  }

  const handleAddComment = () => {
    if (!newComment.trim()) return

    const comment = {
      id: Date.now().toString(),
      author: "현재 사용자", // 실제로는 로그인한 사용자 정보
      avatar: "/placeholder.svg?height=40&width=40",
      content: newComment,
      timestamp: "방금 전",
      likes: 0,
      replies: [],
    }

    setComments([...comments, comment])
    setNewComment("")
  }

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

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* 메인 콘텐츠 */}
            <div className="lg:col-span-3">
              {/* 게시글 본문 */}
              <Card className="mb-6">
                <CardContent className="p-8">
                  {/* 작성자 정보 */}
                  <div className="flex items-center space-x-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={post.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-gray-900">{post.author}</span>
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        {post.isPinned && <Badge className="bg-red-100 text-red-800 text-xs">고정</Badge>}
                        {post.isPopular && <Badge className="bg-orange-100 text-orange-800 text-xs">인기</Badge>}
                      </div>
                      <span className="text-sm text-gray-500">{post.timestamp}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* 제목 */}
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>

                  {/* 태그 */}
                  <div className="flex items-center space-x-2 mb-6">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* 본문 */}
                  <div className="prose max-w-none mb-8">
                    <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{post.content}</div>
                  </div>

                  {/* 액션 버튼들 */}
                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="flex items-center space-x-6">
                      <button
                        onClick={() => setIsLiked(!isLiked)}
                        className={`flex items-center space-x-2 transition-colors ${
                          isLiked ? "text-red-600" : "text-gray-500 hover:text-red-600"
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                        <span>{post.likes + (isLiked ? 1 : 0)}</span>
                      </button>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <MessageSquare className="w-5 h-5" />
                        <span>{comments.length}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Eye className="w-5 h-5" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className={`p-2 rounded-lg transition-colors ${
                          isBookmarked ? "text-blue-600 bg-blue-50" : "text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
                      </button>
                      <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
                        <Flag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 댓글 섹션 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    댓글 {comments.length}개
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* 댓글 작성 */}
                  <div className="mb-6">
                    <Textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="댓글을 작성해주세요..."
                      className="mb-3"
                    />
                    <div className="flex justify-end">
                      <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                        댓글 작성
                      </Button>
                    </div>
                  </div>

                  {/* 댓글 목록 */}
                  <div className="space-y-6">
                    {comments.map((comment) => (
                      <div key={comment.id} className="space-y-4">
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{comment.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-medium text-gray-900">{comment.author}</span>
                              <span className="text-sm text-gray-500">{comment.timestamp}</span>
                            </div>
                            <p className="text-gray-700 mb-3">{comment.content}</p>
                            <div className="flex items-center space-x-4">
                              <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                                <ThumbsUp className="w-4 h-4" />
                                <span>{comment.likes}</span>
                              </button>
                              <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                                <Reply className="w-4 h-4" />
                                <span>답글</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* 답글 */}
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="ml-14 flex items-start space-x-4">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={reply.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{reply.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="font-medium text-gray-900">{reply.author}</span>
                                <span className="text-sm text-gray-500">{reply.timestamp}</span>
                              </div>
                              <p className="text-gray-700 mb-3">{reply.content}</p>
                              <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                                  <ThumbsUp className="w-4 h-4" />
                                  <span>{reply.likes}</span>
                                </button>
                                <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                                  <Reply className="w-4 h-4" />
                                  <span>답글</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 사이드바 */}
            <div className="lg:col-span-1">
              {/* 작성자 정보 */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Avatar className="h-16 w-16 mx-auto mb-4">
                      <AvatarImage src={post.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-gray-900 mb-2">{post.author}</h3>
                    <p className="text-sm text-gray-600 mb-4">KAIST 전기전자공학부 합격생</p>
                    <div className="grid grid-cols-3 gap-4 text-center mb-4">
                      <div>
                        <p className="text-lg font-semibold text-gray-900">89</p>
                        <p className="text-xs text-gray-600">게시글</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">1.2K</p>
                        <p className="text-xs text-gray-600">팔로워</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">4.5K</p>
                        <p className="text-xs text-gray-600">좋아요</p>
                      </div>
                    </div>
                    <Button className="w-full" size="sm">
                      팔로우
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 관련 게시글 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">관련 게시글</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "서울대 의대 면접 준비 방법",
                      author: "최유진",
                      timestamp: "1일 전",
                      likes: 67,
                    },
                    {
                      title: "MIT 연구 프로젝트 후기",
                      author: "박성민",
                      timestamp: "2일 전",
                      likes: 89,
                    },
                    {
                      title: "수학 올림피아드 준비 팁",
                      author: "이지원",
                      timestamp: "3일 전",
                      likes: 34,
                    },
                  ].map((relatedPost, index) => (
                    <div
                      key={index}
                      className="p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">{relatedPost.title}</h4>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{relatedPost.author}</span>
                        <div className="flex items-center space-x-2">
                          <Heart className="w-3 h-3" />
                          <span>{relatedPost.likes}</span>
                        </div>
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
