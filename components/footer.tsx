"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* 메인 푸터 콘텐츠 */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 회사 정보 */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">패스폴리오</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                AI 기반 진로 설계와 맞춤형 세특 프로그램으로 학생들의 꿈을 현실로 만들어가는 교육 플랫폼입니다.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* 서비스 메뉴 */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">서비스</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/school-selection" className="text-gray-300 hover:text-white transition-colors">
                    무료 진단
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">
                    세특 프로그램
                  </Link>
                </li>
                <li>
                  <Link href="/premium-courses" className="text-gray-300 hover:text-white transition-colors">
                    프리미엄 과정
                  </Link>
                </li>
                <li>
                  <Link href="/learning-dashboard" className="text-gray-300 hover:text-white transition-colors">
                    학습 현황
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-gray-300 hover:text-white transition-colors">
                    커뮤니티
                  </Link>
                </li>
              </ul>
            </div>

            {/* 회사 정보 메뉴 */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">회사 정보</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/introduction" className="text-gray-300 hover:text-white transition-colors">
                    패스폴리오 소개
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    서비스 소개
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                    팀 소개
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                    채용 정보
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                    보도자료
                  </Link>
                </li>
              </ul>
            </div>

            {/* 고객 지원 및 뉴스레터 */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">고객 지원</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-4 w-4" />
                  <span>1588-1234</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span>support@pathfolio.co.kr</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4 mt-1" />
                  <span>
                    서울특별시 강남구 테헤란로 123
                    <br />
                    패스폴리오 빌딩 10층
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">뉴스레터 구독</h4>
                <p className="text-sm text-gray-400">최신 교육 정보와 프로그램 소식을 받아보세요</p>
                <div className="flex space-x-2">
                  <Input
                    placeholder="이메일 주소"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* 하단 저작권 정보 */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2024 패스폴리오(Pathfolio). All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                이용약관
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
