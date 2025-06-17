"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { ArrowLeft, Star, ThumbsUp, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Review {
  id: string
  userName: string
  userSchool: string
  userGrade: string
  rating: number
  date: string
  content: string
  isVerified: boolean
  helpfulCount: number
  tags: string[]
  avatar?: string
}

export default function ProgramReviewsPage() {
  const params = useParams()
  const router = useRouter()
  const programId = params.programId as string
  const [reviews, setReviews] = useState<Review[]>([])
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([])
  const [programTitle, setProgramTitle] = useState("")
  const [sortBy, setSortBy] = useState("latest")
  const [filterRating, setFilterRating] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const data = getAllReviews(programId)
    setReviews(data.reviews)
    setFilteredReviews(data.reviews)
    setProgramTitle(data.title)
  }, [programId])

  useEffect(() => {
    let filtered = [...reviews]

    // 평점 필터
    if (filterRating !== "all") {
      filtered = filtered.filter((review) => review.rating === Number.parseInt(filterRating))
    }

    // 검색 필터
    if (searchTerm) {
      filtered = filtered.filter(
        (review) =>
          review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // 정렬
    switch (sortBy) {
      case "latest":
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case "oldest":
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        break
      case "rating-high":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "rating-low":
        filtered.sort((a, b) => a.rating - b.rating)
        break
      case "helpful":
        filtered.sort((a, b) => b.helpfulCount - a.helpfulCount)
        break
    }

    setFilteredReviews(filtered)
  }, [reviews, sortBy, filterRating, searchTerm])

  const getAllReviews = (id: string) => {
    const reviewsData: { [key: string]: { title: string; reviews: Review[] } } = {
      "ai-ethics": {
        title: "AI 윤리 딜레마 분석",
        reviews: [
          {
            id: "1",
            userName: "김**",
            userSchool: "대원외고",
            userGrade: "2학년",
            rating: 5,
            date: "2024-01-15",
            content:
              "AI 윤리에 대해 깊이 있게 생각해볼 수 있는 정말 좋은 프로그램이었습니다. 특히 자율주행차의 도덕적 딜레마 분석 과제가 인상 깊었어요. 생활기록부에도 의미있는 내용을 기록할 수 있어서 만족합니다.",
            isVerified: true,
            helpfulCount: 24,
            tags: ["윤리", "AI", "생기부", "심화학습"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "2",
            userName: "이**",
            userSchool: "하나고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-10",
            content:
              "처음에는 어려울 것 같았는데, 강사님이 차근차근 설명해주셔서 이해하기 쉬웠습니다. AI 기술의 사회적 영향에 대해 비판적으로 사고하는 능력이 많이 늘었어요. 대학 면접에서도 도움이 될 것 같습니다.",
            isVerified: true,
            helpfulCount: 18,
            tags: ["면접준비", "비판적사고", "추천"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "3",
            userName: "박**",
            userSchool: "민사고",
            userGrade: "2학년",
            rating: 4,
            date: "2024-01-08",
            content:
              "AI 윤리라는 주제가 생소했는데, 실제 사례들을 통해 배우니까 흥미로웠습니다. 다만 과제량이 조금 많아서 시간 관리가 필요했어요. 그래도 얻은 게 많은 프로그램입니다.",
            isVerified: true,
            helpfulCount: 12,
            tags: ["실제사례", "과제많음", "유익함"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "4",
            userName: "최**",
            userSchool: "외대부고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-05",
            content:
              "AI 분야로 진로를 정하고 있는데, 기술적인 부분뿐만 아니라 윤리적 측면도 중요하다는 걸 깨달았습니다. 세특 문장 자동 생성 서비스도 정말 유용했어요!",
            isVerified: true,
            helpfulCount: 15,
            tags: ["진로탐색", "세특", "AI진로"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "5",
            userName: "정**",
            userSchool: "상산고",
            userGrade: "2학년",
            rating: 4,
            date: "2024-01-03",
            content:
              "토론 위주의 수업이 많아서 처음에는 부담스러웠는데, 점점 익숙해지면서 발표 실력도 늘고 논리적 사고력도 향상된 것 같아요. 다른 학생들과의 토론도 유익했습니다.",
            isVerified: true,
            helpfulCount: 9,
            tags: ["토론", "발표실력", "논리적사고"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "6",
            userName: "강**",
            userSchool: "브랭섬홀",
            userGrade: "3학년",
            rating: 5,
            date: "2023-12-28",
            content:
              "국제적인 AI 윤리 가이드라인까지 다뤄주셔서 글로벌한 시각을 기를 수 있었습니다. 영어 자료도 많이 제공해주셔서 영어 실력 향상에도 도움이 되었어요.",
            isVerified: true,
            helpfulCount: 21,
            tags: ["글로벌", "영어자료", "국제적시각"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      "bio-gene": {
        title: "유전자 치료 기술 탐색",
        reviews: [
          {
            id: "1",
            userName: "한**",
            userSchool: "과학고",
            userGrade: "2학년",
            rating: 5,
            date: "2024-01-12",
            content:
              "CRISPR 기술에 대해 이론적으로만 알고 있었는데, 실제 연구 설계까지 해볼 수 있어서 정말 유익했습니다. 생명과학 분야로 진학하고 싶은 학생들에게 강력 추천합니다!",
            isVerified: true,
            helpfulCount: 28,
            tags: ["CRISPR", "연구설계", "생명과학", "추천"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "2",
            userName: "윤**",
            userSchool: "경기과고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-09",
            content:
              "실험실 견학 프로그램이 정말 인상 깊었어요. 실제 연구 현장을 보면서 미래의 꿈이 더 구체화되었습니다. 논문 작성 지도도 받을 수 있어서 좋았어요.",
            isVerified: true,
            helpfulCount: 22,
            tags: ["실험실견학", "진로구체화", "논문작성"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "3",
            userName: "서**",
            userSchool: "대전과고",
            userGrade: "2학년",
            rating: 4,
            date: "2024-01-06",
            content:
              "유전자 편집 기술의 윤리적 문제까지 다뤄주셔서 균형잡힌 시각을 기를 수 있었습니다. 다만 내용이 조금 어려워서 사전 공부가 필요할 것 같아요.",
            isVerified: true,
            helpfulCount: 14,
            tags: ["윤리적문제", "균형잡힌시각", "어려움"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "4",
            userName: "조**",
            userSchool: "세종과고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-02",
            content:
              "바이오 분야 최신 트렌드를 배울 수 있어서 좋았습니다. 특히 유전질환 치료법 연구 프로젝트가 의미있었어요. 대학 연구실 연계 기회도 얻을 수 있었습니다.",
            isVerified: true,
            helpfulCount: 19,
            tags: ["최신트렌드", "연구프로젝트", "대학연계"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "5",
            userName: "임**",
            userSchool: "인천과고",
            userGrade: "2학년",
            rating: 4,
            date: "2023-12-30",
            content:
              "생물학 기초가 부족했는데도 이해할 수 있도록 잘 설명해주셨어요. 사전 학습 자료도 충분히 제공해주셔서 따라갈 수 있었습니다.",
            isVerified: true,
            helpfulCount: 11,
            tags: ["기초부족", "이해쉬움", "사전학습자료"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      "esg-climate": {
        title: "지역사회 기후 위기 대응",
        reviews: [
          {
            id: "1",
            userName: "신**",
            userSchool: "환경고",
            userGrade: "2학년",
            rating: 5,
            date: "2024-01-14",
            content:
              "환경 문제에 관심이 많았는데, 실제 지역사회 프로젝트를 기획해볼 수 있어서 의미있었습니다. 과학적 지식과 정책적 해결방안을 모두 배울 수 있어서 좋았어요.",
            isVerified: true,
            helpfulCount: 26,
            tags: ["환경문제", "지역사회프로젝트", "정책"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "2",
            userName: "오**",
            userSchool: "국제고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-11",
            content:
              "기후 변화의 과학적 원리부터 사회경제적 영향까지 종합적으로 학습할 수 있었습니다. 융합적 사고력이 많이 늘었고, 환경 분야 진로에 대한 확신이 생겼어요.",
            isVerified: true,
            helpfulCount: 20,
            tags: ["과학적원리", "융합적사고", "진로확신"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "3",
            userName: "배**",
            userSchool: "청심국제고",
            userGrade: "2학년",
            rating: 4,
            date: "2024-01-07",
            content:
              "환경 NGO 연계 활동이 특히 좋았습니다. 실제 환경 운동가들과 만나서 이야기를 들을 수 있었고, 현실적인 해결방안에 대해 고민해볼 수 있었어요.",
            isVerified: true,
            helpfulCount: 16,
            tags: ["NGO연계", "환경운동가", "현실적해결방안"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "4",
            userName: "황**",
            userSchool: "용인외고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-04",
            content:
              "지속가능발전에 대한 이해가 깊어졌습니다. 특히 ESG 경영과 환경 정책의 연관성을 배울 수 있어서 경영학과 진학에도 도움이 될 것 같아요.",
            isVerified: true,
            helpfulCount: 18,
            tags: ["지속가능발전", "ESG경영", "경영학과"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      "data-science": {
        title: "데이터 사이언스 기초",
        reviews: [
          {
            id: "1",
            userName: "문**",
            userSchool: "수학과학고",
            userGrade: "2학년",
            rating: 5,
            date: "2024-01-13",
            content:
              "프로그래밍을 처음 배우는데도 차근차근 알려주셔서 따라갈 수 있었습니다. 실제 데이터로 분석해보는 프로젝트가 정말 재미있었어요. 데이터 사이언티스트가 되고 싶어졌습니다!",
            isVerified: true,
            helpfulCount: 32,
            tags: ["프로그래밍첫경험", "실제데이터", "재미있음", "진로결정"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "2",
            userName: "안**",
            userSchool: "컴퓨터고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-10",
            content:
              "Python 기초부터 머신러닝까지 체계적으로 배울 수 있어서 좋았습니다. 1:1 코딩 멘토링이 특히 도움이 되었어요. 포트폴리오도 완성할 수 있었습니다.",
            isVerified: true,
            helpfulCount: 25,
            tags: ["Python", "머신러닝", "멘토링", "포트폴리오"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "3",
            userName: "장**",
            userSchool: "일반고",
            userGrade: "2학년",
            rating: 4,
            date: "2024-01-08",
            content:
              "수학이 어려워서 걱정했는데, 직관적으로 설명해주셔서 이해할 수 있었습니다. 통계적 사고력이 많이 늘었고, 데이터로 문제를 해결하는 재미를 알게 되었어요.",
            isVerified: true,
            helpfulCount: 17,
            tags: ["수학어려움", "직관적설명", "통계적사고", "문제해결"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "4",
            userName: "유**",
            userSchool: "과학고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-05",
            content:
              "빅데이터 시대에 필수적인 능력을 기를 수 있었습니다. 실무 데이터 분석 도구도 제공해주시고, 취업 연계 프로그램도 있어서 만족스러웠어요.",
            isVerified: true,
            helpfulCount: 21,
            tags: ["빅데이터", "실무도구", "취업연계"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      "quantum-computing": {
        title: "양자컴퓨팅 기초 이론",
        reviews: [
          {
            id: "1",
            userName: "권**",
            userSchool: "과학영재고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-12",
            content:
              "미래 기술의 핵심인 양자컴퓨팅을 배울 수 있어서 정말 좋았습니다. IBM Quantum 플랫폼으로 실제 양자컴퓨터를 사용해볼 수 있었던 것이 가장 인상 깊었어요!",
            isVerified: true,
            helpfulCount: 29,
            tags: ["미래기술", "IBM Quantum", "실제경험"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "2",
            userName: "송**",
            userSchool: "물리영재고",
            userGrade: "2학년",
            rating: 5,
            date: "2024-01-09",
            content:
              "양자역학이 어려울 줄 알았는데, 개념적으로 잘 설명해주셔서 이해할 수 있었습니다. Qiskit 프로그래밍도 배울 수 있어서 실무 능력도 기를 수 있었어요.",
            isVerified: true,
            helpfulCount: 23,
            tags: ["양자역학", "개념적설명", "Qiskit", "실무능력"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "3",
            userName: "홍**",
            userSchool: "수학과학고",
            userGrade: "3학년",
            rating: 4,
            date: "2024-01-06",
            content:
              "양자 알고리즘 구현 프로젝트가 도전적이었지만 보람있었습니다. 고전 알고리즘과의 성능 비교를 통해 양자컴퓨팅의 장점을 확실히 이해할 수 있었어요.",
            isVerified: true,
            helpfulCount: 18,
            tags: ["양자알고리즘", "도전적", "성능비교"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "4",
            userName: "노**",
            userSchool: "컴퓨터과학고",
            userGrade: "2학년",
            rating: 5,
            date: "2024-01-03",
            content:
              "첨단 기술 분야에 관심이 많았는데, 양자컴퓨팅 연구소 견학을 통해 실제 연구 환경을 볼 수 있어서 좋았습니다. 진로 방향이 더 명확해졌어요.",
            isVerified: true,
            helpfulCount: 20,
            tags: ["첨단기술", "연구소견학", "진로명확"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      "biotech-startup": {
        title: "바이오테크 스타트업 창업",
        reviews: [
          {
            id: "1",
            userName: "고**",
            userSchool: "창업고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-11",
            content:
              "창업에 관심이 있었는데, 바이오 분야의 특수성을 배울 수 있어서 유익했습니다. 현직 창업가 멘토링을 받으면서 실제적인 조언을 들을 수 있었어요.",
            isVerified: true,
            helpfulCount: 24,
            tags: ["창업관심", "바이오특수성", "창업가멘토링"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "2",
            userName: "변**",
            userSchool: "경영고",
            userGrade: "2학년",
            rating: 4,
            date: "2024-01-08",
            content:
              "비즈니스 모델 설계부터 투자 유치까지 창업의 전 과정을 체험해볼 수 있었습니다. 바이오벤처 기업 견학도 인상 깊었어요.",
            isVerified: true,
            helpfulCount: 16,
            tags: ["비즈니스모델", "투자유치", "기업견학"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "3",
            userName: "도**",
            userSchool: "생명과학고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-05",
            content:
              "바이오 기술의 상업화 과정을 배울 수 있어서 좋았습니다. 규제 대응 방안까지 다뤄주셔서 실무적으로 도움이 되었어요. 실제 창업을 고려하게 되었습니다.",
            isVerified: true,
            helpfulCount: 19,
            tags: ["기술상업화", "규제대응", "실제창업고려"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      "renewable-energy": {
        title: "신재생에너지 시스템 설계",
        reviews: [
          {
            id: "1",
            userName: "류**",
            userSchool: "에너지고",
            userGrade: "2학년",
            rating: 5,
            date: "2024-01-10",
            content:
              "탄소중립에 관심이 많았는데, 실제 신재생에너지 시스템을 설계해볼 수 있어서 의미있었습니다. 에너지 시뮬레이션 소프트웨어도 배울 수 있어서 좋았어요.",
            isVerified: true,
            helpfulCount: 22,
            tags: ["탄소중립", "시스템설계", "시뮬레이션소프트웨어"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "2",
            userName: "마**",
            userSchool: "공업고",
            userGrade: "3학년",
            rating: 4,
            date: "2024-01-07",
            content:
              "태양광, 풍력 발전소 견학이 정말 좋았습니다. 이론으로만 배우던 것을 실제로 볼 수 있어서 이해가 쉬웠어요. 에너지 분야로 진로를 정하게 되었습니다.",
            isVerified: true,
            helpfulCount: 18,
            tags: ["발전소견학", "이론과실제", "진로결정"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "3",
            userName: "사**",
            userSchool: "환경고",
            userGrade: "2학년",
            rating: 5,
            date: "2024-01-04",
            content:
              "경제성 분석까지 배울 수 있어서 종합적인 시각을 기를 수 있었습니다. 지속가능한 에너지 전환에 대한 이해가 깊어졌어요.",
            isVerified: true,
            helpfulCount: 15,
            tags: ["경제성분석", "종합적시각", "에너지전환"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      "social-innovation": {
        title: "사회혁신 프로젝트 기획",
        reviews: [
          {
            id: "1",
            userName: "아**",
            userSchool: "사회과학고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-09",
            content:
              "사회문제에 관심이 많았는데, 실제로 해결방안을 기획해볼 수 있어서 보람있었습니다. 디자인 씽킹 방법론을 배워서 창의적 사고력이 늘었어요.",
            isVerified: true,
            helpfulCount: 26,
            tags: ["사회문제", "해결방안기획", "디자인씽킹", "창의적사고"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "2",
            userName: "자**",
            userSchool: "국제고",
            userGrade: "2학년",
            rating: 4,
            date: "2024-01-06",
            content:
              "사회적기업 견학 프로그램이 인상 깊었습니다. 실제 사회적 기업가들의 이야기를 들으면서 사회적 가치 창출에 대해 깊이 생각해볼 수 있었어요.",
            isVerified: true,
            helpfulCount: 19,
            tags: ["사회적기업견학", "기업가이야기", "사회적가치"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "3",
            userName: "차**",
            userSchool: "일반고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-03",
            content:
              "프로토타입 제작부터 임팩트 측정까지 전 과정을 체험할 수 있어서 좋았습니다. 사회혁신 분야로 진로를 정하는 데 큰 도움이 되었어요.",
            isVerified: true,
            helpfulCount: 21,
            tags: ["프로토타입제작", "임팩트측정", "진로결정"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      "digital-art": {
        title: "디지털 아트 & NFT 창작",
        reviews: [
          {
            id: "1",
            userName: "카**",
            userSchool: "예술고",
            userGrade: "2학년",
            rating: 5,
            date: "2024-01-08",
            content:
              "미술에 관심이 있었는데, 디지털 기술과 결합할 수 있다는 게 신기했습니다. NFT 마켓플레이스에 실제로 작품을 등록해볼 수 있어서 뿌듯했어요!",
            isVerified: true,
            helpfulCount: 28,
            tags: ["미술관심", "디지털기술", "NFT등록", "뿌듯함"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "2",
            userName: "타**",
            userSchool: "디자인고",
            userGrade: "3학년",
            rating: 4,
            date: "2024-01-05",
            content:
              "3D 모델링과 애니메이션을 배울 수 있어서 좋았습니다. Blender 사용법을 익히면서 창작의 폭이 넓어졌어요. 메타버스 전시 참여 기회도 얻었습니다.",
            isVerified: true,
            helpfulCount: 20,
            tags: ["3D모델링", "애니메이션", "Blender", "메타버스전시"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "3",
            userName: "파**",
            userSchool: "일반고",
            userGrade: "2학년",
            rating: 5,
            date: "2024-01-02",
            content:
              "미술 전공이 아니었는데도 따라갈 수 있도록 기초부터 차근차근 알려주셨어요. 블록체인 기술에 대해서도 배울 수 있어서 유익했습니다.",
            isVerified: true,
            helpfulCount: 16,
            tags: ["비전공자", "기초부터", "블록체인기술"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      "global-literature": {
        title: "세계문학 비교 분석",
        reviews: [
          {
            id: "1",
            userName: "하**",
            userSchool: "문학고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-07",
            content:
              "동서양 문학을 비교하면서 문화적 다양성을 이해할 수 있었습니다. 비교문학적 분석 능력이 많이 늘었고, 문학에 대한 시야가 넓어졌어요.",
            isVerified: true,
            helpfulCount: 23,
            tags: ["동서양문학", "문화적다양성", "비교문학", "시야확장"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "2",
            userName: "거**",
            userSchool: "외국어고",
            userGrade: "2학년",
            rating: 4,
            date: "2024-01-04",
            content:
              "다국어 원문 자료를 제공해주셔서 언어 공부에도 도움이 되었습니다. 번역 워크숍도 흥미로웠어요. 국제적 문화 감수성을 기를 수 있었습니다.",
            isVerified: true,
            helpfulCount: 17,
            tags: ["다국어원문", "언어공부", "번역워크숍", "문화감수성"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "3",
            userName: "너**",
            userSchool: "인문고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-01",
            content:
              "문학을 통해 철학적 사유를 기를 수 있어서 좋았습니다. 창작 워크숍에서 직접 글을 써보면서 표현 능력도 향상되었어요.",
            isVerified: true,
            helpfulCount: 19,
            tags: ["철학적사유", "창작워크숍", "표현능력향상"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      "mathematical-modeling": {
        title: "수학적 모델링과 시뮬레이션",
        reviews: [
          {
            id: "1",
            userName: "더**",
            userSchool: "수학과학고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-06",
            content:
              "수학의 실용적 응용을 배울 수 있어서 정말 유익했습니다. 실생활 문제를 수학으로 해결하는 과정이 흥미로웠어요. 수학 모델링 경진대회에도 참가할 수 있었습니다.",
            isVerified: true,
            helpfulCount: 27,
            tags: ["실용적응용", "실생활문제", "흥미로움", "경진대회"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "2",
            userName: "러**",
            userSchool: "과학고",
            userGrade: "2학년",
            rating: 4,
            date: "2024-01-03",
            content:
              "Python 프로그래밍과 수학을 함께 배울 수 있어서 좋았습니다. 미분방정식 모델링이 처음에는 어려웠지만, 점점 이해되면서 재미있어졌어요.",
            isVerified: true,
            helpfulCount: 20,
            tags: ["Python프로그래밍", "미분방정식", "어려움극복", "재미"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "3",
            userName: "머**",
            userSchool: "공업고",
            userGrade: "3학년",
            rating: 5,
            date: "2023-12-31",
            content:
              "교통 체증 문제를 수학적으로 모델링해보는 프로젝트가 인상 깊었습니다. 수학이 실제 사회 문제 해결에 어떻게 활용되는지 알 수 있었어요.",
            isVerified: true,
            helpfulCount: 22,
            tags: ["교통체증", "수학적모델링", "사회문제해결"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
      "interdisciplinary-research": {
        title: "융합연구 방법론",
        reviews: [
          {
            id: "1",
            userName: "버**",
            userSchool: "융합고",
            userGrade: "3학년",
            rating: 5,
            date: "2024-01-05",
            content:
              "다학제적 접근법을 배울 수 있어서 정말 유익했습니다. 심리학과 AI를 융합한 연구를 해보면서 융합적 사고력이 많이 늘었어요. 학술 논문도 작성해볼 수 있었습니다.",
            isVerified: true,
            helpfulCount: 31,
            tags: ["다학제적접근", "융합적사고", "학술논문작성"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "2",
            userName: "서**",
            userSchool: "연구고",
            userGrade: "2학년",
            rating: 5,
            date: "2024-01-02",
            content:
              "융합연구센터 연계 프로그램이 좋았습니다. 실제 연구자들과 네트워킹할 수 있는 기회도 얻었고, 미래 연구자로서의 기초 역량을 기를 수 있었어요.",
            isVerified: true,
            helpfulCount: 25,
            tags: ["연구센터연계", "연구자네트워킹", "기초역량"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
          {
            id: "3",
            userName: "어**",
            userSchool: "과학영재고",
            userGrade: "3학년",
            rating: 4,
            date: "2023-12-30",
            content:
              "연구 윤리 교육도 받을 수 있어서 좋았습니다. 학술 대회 발표 지원도 해주셔서 실제 연구 경험을 쌓을 수 있었어요. 내용이 고급이라 집중이 필요했습니다.",
            isVerified: true,
            helpfulCount: 18,
            tags: ["연구윤리", "학술대회발표", "고급내용"],
            avatar: "/placeholder.svg?height=40&width=40",
          },
        ],
      },
    }

    return reviewsData[id] || { title: "프로그램", reviews: [] }
  }

  const averageRating =
    reviews.length > 0 ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) : "0.0"

  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((review) => review.rating === rating).length,
    percentage:
      reviews.length > 0 ? (reviews.filter((review) => review.rating === rating).length / reviews.length) * 100 : 0,
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            뒤로 가기
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{programTitle} - 수강후기</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 왼쪽: 평점 요약 */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">{averageRating}</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(Number.parseFloat(averageRating)) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500">총 {reviews.length}개 후기</div>
              </div>

              <div className="space-y-2">
                {ratingDistribution.map((item) => (
                  <div key={item.rating} className="flex items-center text-sm">
                    <span className="w-8">{item.rating}점</span>
                    <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                    </div>
                    <span className="w-8 text-gray-500">{item.count}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* 오른쪽: 후기 목록 */}
          <div className="lg:col-span-3">
            {/* 필터 및 정렬 */}
            <Card className="p-4 mb-6">
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
                  <Select value={filterRating} onValueChange={setFilterRating}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="평점 필터" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체 평점</SelectItem>
                      <SelectItem value="5">5점</SelectItem>
                      <SelectItem value="4">4점</SelectItem>
                      <SelectItem value="3">3점</SelectItem>
                      <SelectItem value="2">2점</SelectItem>
                      <SelectItem value="1">1점</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="정렬" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="latest">최신순</SelectItem>
                      <SelectItem value="oldest">오래된순</SelectItem>
                      <SelectItem value="rating-high">평점 높은순</SelectItem>
                      <SelectItem value="rating-low">평점 낮은순</SelectItem>
                      <SelectItem value="helpful">도움순</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            {/* 후기 목록 */}
            <div className="space-y-4">
              {filteredReviews.map((review) => (
                <Card key={review.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.userName} />
                        <AvatarFallback>{review.userName.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium">{review.userName}</span>
                          {review.isVerified && (
                            <Badge variant="secondary" className="ml-2 text-xs">
                              인증
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">
                          {review.userSchool} {review.userGrade}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex text-yellow-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-current" : ""}`} />
                        ))}
                      </div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">{review.content}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {review.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      도움돼요 ({review.helpfulCount})
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      신고하기
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">검색 조건에 맞는 후기가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
