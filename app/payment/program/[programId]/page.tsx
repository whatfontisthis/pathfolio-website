"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  ArrowLeft,
  CreditCard,
  Shield,
  CheckCircle,
  Clock,
  Users,
  Star,
  Gift,
  AlertCircle,
  Lock,
  Smartphone,
  Building,
} from "lucide-react"

interface ProgramInfo {
  id: string
  title: string
  price: string
  originalPrice: string
  duration: string
  instructor: string
  rating: number
  studentCount: number
  features: string[]
}

export default function ProgramPaymentPage() {
  const params = useParams()
  const programId = params.programId as string
  const [programInfo, setProgramInfo] = useState<ProgramInfo | null>(null)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [installmentPlan, setInstallmentPlan] = useState("0")
  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [agreePrivacy, setAgreePrivacy] = useState(false)
  const [agreeMarketing, setAgreeMarketing] = useState(false)

  useEffect(() => {
    // 실제로는 API에서 데이터를 가져와야 함
    const data = getProgramInfo(programId)
    setProgramInfo(data)
  }, [programId])

  const getProgramInfo = (id: string): ProgramInfo | null => {
    const programs: { [key: string]: ProgramInfo } = {
      "ai-ethics": {
        id: "ai-ethics",
        title: "AI 윤리 딜레마 분석",
        price: "89,000원",
        originalPrice: "119,000원",
        duration: "6주 과정",
        instructor: "김윤리 교수",
        rating: 4.8,
        studentCount: 234,
        features: ["AI 윤리 전문가 멘토링", "실제 사례 분석", "토론 세션", "윤리 가이드라인 작성"],
      },
      "bio-gene": {
        id: "bio-gene",
        title: "유전자 치료 기술 탐색",
        price: "129,000원",
        originalPrice: "169,000원",
        duration: "8주 과정",
        instructor: "박유전자 박사",
        rating: 4.9,
        studentCount: 156,
        features: ["CRISPR 실습", "유전자 분석", "바이오 실험", "연구 논문 작성"],
      },
      "data-science": {
        id: "data-science",
        title: "데이터 사이언스 기초",
        price: "99,000원",
        originalPrice: "129,000원",
        duration: "10주 과정",
        instructor: "이데이터 연구원",
        rating: 4.7,
        studentCount: 312,
        features: ["Python 실습", "머신러닝 기초", "데이터 시각화", "프로젝트 포트폴리오"],
      },
      "esg-climate": {
        id: "esg-climate",
        title: "지역사회 기후 위기 대응",
        price: "79,000원",
        originalPrice: "99,000원",
        duration: "6주 과정",
        instructor: "최환경 활동가",
        rating: 4.6,
        studentCount: 189,
        features: ["현장 조사", "정책 제안", "커뮤니티 프로젝트", "환경 영향 평가"],
      },
      "quantum-computing": {
        id: "quantum-computing",
        title: "양자컴퓨팅 기초 이론",
        price: "149,000원",
        originalPrice: "199,000원",
        duration: "12주 과정",
        instructor: "김양자 박사",
        rating: 4.9,
        studentCount: 87,
        features: ["양자 알고리즘", "IBM Quantum 실습", "이론 강의", "연구 프로젝트"],
      },
    }

    return programs[id] || null
  }

  const applyCoupon = () => {
    // 쿠폰 적용 로직
    if (couponCode === "WELCOME10") {
      setAppliedCoupon("신규 회원 10% 할인")
      alert("쿠폰이 적용되었습니다! 10% 추가 할인")
    } else if (couponCode === "STUDENT20") {
      setAppliedCoupon("학생 20% 할인")
      alert("학생 할인 쿠폰이 적용되었습니다! 20% 추가 할인")
    } else {
      alert("유효하지 않은 쿠폰 코드입니다.")
    }
  }

  const calculateFinalPrice = () => {
    if (!programInfo) return 0
    const basePrice = Number.parseInt(programInfo.price.replace(/[^0-9]/g, ""))
    let discount = 0

    if (appliedCoupon?.includes("10%")) discount = basePrice * 0.1
    if (appliedCoupon?.includes("20%")) discount = basePrice * 0.2

    return basePrice - discount
  }

  const handlePayment = () => {
    if (!agreeTerms || !agreePrivacy) {
      alert("필수 약관에 동의해주세요.")
      return
    }

    // 결제 처리 로직
    alert(
      `🎉 결제가 완료되었습니다!\n\n📧 수강 안내:\n• 수강 확인 이메일이 발송됩니다\n• 7일 무료 체험이 시작됩니다\n• 전담 멘토가 배정됩니다\n• 학습 자료가 제공됩니다\n\n💳 결제 금액: ${calculateFinalPrice().toLocaleString()}원`,
    )

    // 학습 대시보드로 이동
    window.location.href = "/learning-dashboard"
  }

  if (!programInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">프로그램을 찾을 수 없습니다</h2>
          <p className="text-gray-600 mb-4">요청하신 프로그램 정보가 존재하지 않습니다.</p>
          <Link href="/programs">
            <Button>프로그램 목록으로 돌아가기</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* 상단 네비게이션 */}
          <div className="flex items-center mb-6">
            <Link href={`/program-details/${programId}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                프로그램 상세로 돌아가기
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 결제 정보 입력 */}
            <div className="lg:col-span-2 space-y-6">
              {/* 결제 헤더 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                    결제 정보
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 결제 방법 선택 */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">결제 방법</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                          <CreditCard className="h-4 w-4" />
                          신용카드 / 체크카드
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer">
                          <Building className="h-4 w-4" />
                          무통장 입금
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="phone" id="phone" />
                        <Label htmlFor="phone" className="flex items-center gap-2 cursor-pointer">
                          <Smartphone className="h-4 w-4" />
                          휴대폰 결제
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* 할부 선택 (신용카드인 경우) */}
                  {paymentMethod === "card" && (
                    <div>
                      <Label className="text-base font-semibold mb-4 block">할부 선택</Label>
                      <RadioGroup value={installmentPlan} onValueChange={setInstallmentPlan}>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value="0" id="lump" />
                            <Label htmlFor="lump" className="cursor-pointer">
                              일시불
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value="3" id="month3" />
                            <Label htmlFor="month3" className="cursor-pointer">
                              3개월 무이자
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value="6" id="month6" />
                            <Label htmlFor="month6" className="cursor-pointer">
                              6개월 무이자
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value="12" id="month12" />
                            <Label htmlFor="month12" className="cursor-pointer">
                              12개월 무이자
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {/* 쿠폰 입력 */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">할인 쿠폰</Label>
                    <div className="flex gap-3">
                      <Input
                        placeholder="쿠폰 코드를 입력하세요"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button variant="outline" onClick={applyCoupon}>
                        적용
                      </Button>
                    </div>
                    {appliedCoupon && (
                      <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center gap-2 text-green-800">
                          <Gift className="h-4 w-4" />
                          <span className="font-medium">{appliedCoupon}</span>
                        </div>
                      </div>
                    )}
                    <div className="mt-2 text-sm text-gray-500">
                      💡 사용 가능한 쿠폰: WELCOME10 (신규 10% 할인), STUDENT20 (학생 20% 할인)
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 개인정보 입력 */}
              <Card>
                <CardHeader>
                  <CardTitle>주문자 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">이름 *</Label>
                      <Input id="name" placeholder="홍길동" />
                    </div>
                    <div>
                      <Label htmlFor="phone">휴대폰 번호 *</Label>
                      <Input id="phone" placeholder="010-1234-5678" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">이메일 *</Label>
                    <Input id="email" type="email" placeholder="example@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="school">학교명</Label>
                    <Input id="school" placeholder="○○고등학교 (선택사항)" />
                  </div>
                </CardContent>
              </Card>

              {/* 약관 동의 */}
              <Card>
                <CardHeader>
                  <CardTitle>약관 동의</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" checked={agreeTerms} onCheckedChange={setAgreeTerms} />
                    <Label htmlFor="terms" className="cursor-pointer">
                      [필수] 이용약관에 동의합니다
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy" checked={agreePrivacy} onCheckedChange={setAgreePrivacy} />
                    <Label htmlFor="privacy" className="cursor-pointer">
                      [필수] 개인정보 수집 및 이용에 동의합니다
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" checked={agreeMarketing} onCheckedChange={setAgreeMarketing} />
                    <Label htmlFor="marketing" className="cursor-pointer">
                      [선택] 마케팅 정보 수신에 동의합니다
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 주문 요약 */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>주문 요약</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 프로그램 정보 */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">{programInfo.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {programInfo.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {programInfo.studentCount}명
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {programInfo.rating}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">강사: {programInfo.instructor}</p>
                  </div>

                  <Separator />

                  {/* 가격 정보 */}
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>프로그램 가격</span>
                      <span className="line-through text-gray-500">{programInfo.originalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>할인 가격</span>
                      <span className="font-semibold">{programInfo.price}</span>
                    </div>
                    {appliedCoupon && (
                      <div className="flex justify-between text-green-600">
                        <span>쿠폰 할인</span>
                        <span>
                          -
                          {appliedCoupon.includes("10%")
                            ? Math.floor(
                                Number.parseInt(programInfo.price.replace(/[^0-9]/g, "")) * 0.1,
                              ).toLocaleString()
                            : Math.floor(
                                Number.parseInt(programInfo.price.replace(/[^0-9]/g, "")) * 0.2,
                              ).toLocaleString()}
                          원
                        </span>
                      </div>
                    )}
                  </div>

                  <Separator />

                  {/* 최종 가격 */}
                  <div className="flex justify-between text-lg font-bold">
                    <span>최종 결제 금액</span>
                    <span className="text-blue-600">{calculateFinalPrice().toLocaleString()}원</span>
                  </div>

                  {/* 포함 내용 */}
                  <div>
                    <h4 className="font-semibold mb-3">포함 내용</h4>
                    <ul className="space-y-2">
                      {programInfo.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 보안 정보 */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-sm">안전한 결제</span>
                    </div>
                    <p className="text-xs text-gray-600">SSL 암호화로 개인정보가 안전하게 보호됩니다</p>
                  </div>

                  {/* 결제 버튼 */}
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg"
                    onClick={handlePayment}
                    disabled={!agreeTerms || !agreePrivacy}
                  >
                    <Lock className="h-5 w-5 mr-2" />
                    {calculateFinalPrice().toLocaleString()}원 결제하기
                  </Button>

                  {/* 환불 정책 */}
                  <div className="text-xs text-gray-500 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <AlertCircle className="h-3 w-3" />
                      <span>환불 정책</span>
                    </div>
                    <p>7일 무료 체험 • 2주 내 70% 환불 • 4주 내 50% 환불</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
