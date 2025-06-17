"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Navigation } from "@/components/navigation"
import { Eye, EyeOff, Mail, Lock, BookOpen } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // 실제로는 API 호출
    setTimeout(() => {
      // 로그인 성공 시뮬레이션
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          name: "김학생",
          email: formData.email,
          avatar: "/placeholder.svg?height=100&width=100",
        }),
      )

      setIsLoading(false)
      router.push("/")
      // window.location.reload() 제거
    }, 1000)
  }

  const handleSocialLogin = (provider: string) => {
    // 소셜 로그인 처리
    console.log(`${provider} 로그인`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">패스폴리오에 로그인</h1>
            <p className="text-gray-600">학습 여정을 계속하세요</p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">로그인</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    이메일
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="이메일을 입력하세요"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    비밀번호
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="비밀번호를 입력하세요"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="ml-2 text-sm text-gray-600">로그인 상태 유지</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    비밀번호 찾기
                  </Link>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                  {isLoading ? "로그인 중..." : "로그인"}
                </Button>
              </form>

              <div className="relative">
                <Separator />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-2 text-sm text-gray-500">또는</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button variant="outline" className="w-full" onClick={() => handleSocialLogin("google")}>
                  <img src="/placeholder.svg?height=20&width=20" alt="Google" className="w-5 h-5 mr-2" />
                  Google로 로그인
                </Button>
                <Button variant="outline" className="w-full" onClick={() => handleSocialLogin("kakao")}>
                  <img src="/placeholder.svg?height=20&width=20" alt="Kakao" className="w-5 h-5 mr-2" />
                  카카오로 로그인
                </Button>
                <Button variant="outline" className="w-full" onClick={() => handleSocialLogin("naver")}>
                  <img src="/placeholder.svg?height=20&width=20" alt="Naver" className="w-5 h-5 mr-2" />
                  네이버로 로그인
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  아직 계정이 없으신가요?{" "}
                  <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                    회원가입
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-xs text-gray-500">
            로그인하면 패스폴리오의{" "}
            <Link href="/terms" className="underline">
              이용약관
            </Link>
            과{" "}
            <Link href="/privacy" className="underline">
              개인정보처리방침
            </Link>
            에 동의하는 것으로 간주됩니다.
          </div>
        </div>
      </div>
    </div>
  )
}
