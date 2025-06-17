"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ProgressBar } from "@/components/progress-bar"
import type { UserData } from "@/lib/types"
import Link from "next/link"
import {
  ArrowLeft,
  Target,
  Activity,
  BarChart,
  BookCheck,
  CheckCircle2,
  School,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Clock,
  TrendingUp,
  Users,
  Award,
  Brain,
  Zap,
  Star,
  BookMarked,
  PieChart,
  BarChart3,
  CircleDot,
  FileText,
  AlertTriangle,
  ArrowUp,
  Trophy,
  Rocket,
  ArrowRight,
} from "lucide-react"

export default function ResultsPage() {
  const [userData, setUserData] = useState<UserData>({})
  const [activeTab, setActiveTab] = useState("overview")

  const handleDownloadPDF = () => {
    alert(
      "📧 진단 리포트가 PDF로 생성되어 등록하신 이메일로 자동 전송됩니다!\n\n포함 내용:\n- 종합 진단 결과\n- 맞춤형 학습 로드맵\n- 추천 활동 가이드\n- 예상 생활기록부 문구\n- 학교별 맞춤 교과목 로드맵",
    )
  }

  const handleEmailSend = () => {
    alert(
      "📧 진단 리포트와 추천 콘텐츠 정보가 이메일로 전송됩니다!\n\n전송 내용:\n- 개인 맞춤 진단 리포트\n- 추천 학습 콘텐츠 링크\n- 향후 1년 준비 로드맵\n- 정기 학습 진도 알림 설정\n- 학교별 맞춤 교과목 가이드",
    )
  }

  useEffect(() => {
    const savedData = localStorage.getItem("userDiagnosisData")
    if (savedData) {
      const data = JSON.parse(savedData)
      const recordAnalysis = generateMockRecordAnalysis(data)
      const updatedData = { ...data, recordAnalysis }
      setUserData(updatedData)
      localStorage.setItem("userDiagnosisData", JSON.stringify(updatedData))
    }
  }, [])

  const generateMockRecordAnalysis = (data: UserData) => {
    return {
      // 학교생활기록부 유형 및 총점
      recordType: "솔선수범하는 학업전공열정 다재다능형",
      recordTypeDescription: "성적 우수, 목표 지향, 성실 생활, 리더형, 진취적, 탐구 왕성",
      totalScore: 94,

      // 종합 정성적 평가 리포트
      comprehensiveReport: {
        overallAssessment: "최상위권 S등급",
        executiveSummary:
          "박성민 학생은 전기전자공학과 진학을 위한 최적의 역량을 보유한 최상위권 인재입니다. 학업 역량(94점), 전공 적합성(98점), 활동 역량(92점)이 모두 상위 1% 수준으로, 국내 최상위 대학은 물론 해외 명문대 도전도 충분히 가능합니다.",

        detailedAnalysis: {
          academicExcellence: {
            score: 94,
            level: "최상위권",
            analysis:
              "전국 상위 3% 수준의 내신 성적으로, 특히 전공 핵심 과목인 수학·물리·정보에서 모두 1등급을 달성했습니다. 지속적인 성적 향상 추세(1.3→1.2→1.1등급)는 학습 능력과 성장 잠재력을 보여줍니다.",
            strengths: [
              "수학: 미적분학, 확률과 통계에서 탁월한 성취 (전국 상위 1%)",
              "물리: 전자기학 분야 심화 학습, 교내 경시대회 금상",
              "정보: 프로그래밍 실무 능력, 정보처리기능사 자격증 보유",
              "영어: 기술 영어 독해 능력 우수, 국제 경쟁력 확보",
            ],
            weaknesses: [
              "사회탐구: 2등급으로 상대적 약점 (공학윤리, 기술경영 보완 필요)",
              "예술 영역: 창의적 사고 확장을 위한 융합 교육 필요",
            ],
            competitiveness: "SKY 대학 전기전자공학과 지원 시 내신 경쟁력 상위 5% 수준",
            improvementPlan: "3학년 2학기까지 1등급대 유지하면서, 고급 수학(복소함수, 편미분방정식) 선행학습 권장",
          },

          majorCompatibility: {
            score: 98,
            level: "완벽 적합",
            analysis:
              "전기전자공학과 진학에 필요한 모든 요소를 완벽하게 갖춘 이상적인 프로필입니다. 이론적 기초부터 실무 경험까지 체계적으로 준비되어 있어 대학 진학 후에도 탁월한 성과가 예상됩니다.",
            evidences: [
              "로봇공학 동아리 핵심 활동: 설계·제작·프로그래밍 전 과정 경험",
              "물리 탐구 동아리: 전자기학 분야 심층 연구 수행",
              "정보처리기능사: 실무 프로그래밍 능력 객관적 입증",
              "과학 탐구 보고서 대회 최우수상: 연구 역량 검증",
            ],
            uniqueness: "단순 암기가 아닌 창의적 문제해결과 실무 적용 능력이 돋보임",
            futureProjection: "대학 진학 후 연구실 참여, 국제 학회 발표, 특허 출원 등 높은 성과 기대",
          },

          leadershipAndCommunity: {
            score: 88,
            level: "우수",
            analysis:
              "학급 부회장으로서 책임감 있는 리더십을 발휘하고, 과학 멘토링을 통해 지식 나눔을 실천하고 있습니다. 다만 더 큰 규모의 프로젝트나 국제적 경험이 추가되면 완벽한 프로필이 될 것입니다.",
            strengths: [
              "학급 부회장: 일상적 리더십과 책임감 입증",
              "ICT 프로젝트 리더: 기술적 전문성 기반 리더십",
              "과학 멘토링 30시간: 지식 나눔과 사회적 책임감",
              "팀 프로젝트 주도: 협업과 소통 능력 우수",
            ],
            improvementAreas: [
              "전국 단위 대회 리더십 경험 부족",
              "국제 프로젝트나 글로벌 경험 필요",
              "더 큰 사회적 임팩트를 만드는 활동 권장",
            ],
            developmentPlan: "국제 로봇 대회 팀 리더, 해외 교환 프로그램, 사회적 기업 프로젝트 참여 권장",
          },
        },

        competitiveAdvantages: [
          "전공 적합성 98점: 동일 전공 지원자 중 상위 1% 수준",
          "지속적 성장: 3년간 꾸준한 성적 향상과 역량 발전",
          "실무 경험: 이론과 실무를 연결하는 프로젝트 경험 풍부",
          "명확한 목표: 전기전자공학이라는 구체적 진로 목표와 체계적 준비",
          "균형잡힌 역량: 학업·활동·인성 모든 영역에서 우수한 성취",
        ],

        criticalWeaknesses: [
          "국제 경험 부족: 글로벌 역량 강화 필요 (해외 프로그램 참여 권장)",
          "사회과학적 소양: 공학윤리, 기술경영 등 융합적 사고 확장 필요",
          "연구 경험 부족: 논문 작성, 학술 발표 등 고급 연구 경험 필요",
          "실무 프로젝트 다양성: 기업 연계 인턴십이나 창업 경험 부족",
        ],

        topTierEligibility: {
          current: {
            domestic: "KAIST, 서울대 전기전자공학과 안정권 (합격 확률 90% 이상)",
            international: "해외 명문대 도전권 (합격 확률 40-50%)",
            confidence: 92,
          },
          afterPrograms: {
            domestic: "국내 최상위 대학 최우선 선발 대상 (합격 확률 95% 이상)",
            international: "MIT, Stanford, Caltech 등 세계 최고 대학 도전 가능 (합격 확률 70-80%)",
            confidence: 96,
          },
          improvementStrategy: "세특 프로그램을 통한 연구 경험, 국제 경험, 실무 프로젝트 확대가 핵심",
        },
      },

      // 세특 프로그램 연계 분석
      setakProgramAnalysis: {
        currentGapAnalysis: {
          criticalGaps: [
            {
              area: "연구 경험",
              currentLevel: "교내 탐구 활동 수준",
              requiredLevel: "대학 수준 연구 프로젝트",
              impact: "해외 명문대 지원 시 필수 요소",
              urgency: "높음",
            },
            {
              area: "국제 경험",
              currentLevel: "국내 활동 중심",
              requiredLevel: "국제 프로젝트 참여, 해외 네트워킹",
              impact: "글로벌 경쟁력 확보",
              urgency: "높음",
            },
            {
              area: "실무 프로젝트",
              currentLevel: "동아리 수준 프로젝트",
              requiredLevel: "기업 연계 실무 프로젝트",
              impact: "실무 역량 입증",
              urgency: "중간",
            },
            {
              area: "학술 역량",
              currentLevel: "교과 수준 학습",
              requiredLevel: "논문 작성, 학회 발표",
              impact: "연구자로서의 잠재력 입증",
              urgency: "중간",
            },
          ],
        },

        recommendedPrograms: [
          {
            name: "AI 융합 전자공학 심화 연구 과정",
            provider: "KAIST 전기전자공학부",
            duration: "6개월 (주말 집중)",
            cost: "300만원",
            expectedImprovement: "+15점",
            targetGaps: ["연구 경험", "학술 역량"],
            curriculum: [
              "고급 회로 설계 및 시뮬레이션",
              "AI 알고리즘과 하드웨어 융합",
              "개인 연구 프로젝트 수행",
              "KAIST 교수진 멘토링",
              "연구 논문 작성 및 발표",
            ],
            outcomes: [
              "KAIST 교수 추천서 확보",
              "SCI급 논문 공동 저자 기회",
              "국제 학회 포스터 발표",
              "특허 출원 가능성",
            ],
            admissionBenefit: "KAIST 입학 시 연구실 우선 배정, 장학금 혜택",
          },
          {
            name: "MIT 글로벌 공학 리더십 프로그램",
            provider: "MIT Professional Education",
            duration: "3개월 (온라인 + 2주 현지)",
            cost: "800만원",
            expectedImprovement: "+12점",
            targetGaps: ["국제 경험", "리더십"],
            curriculum: [
              "글로벌 공학 프로젝트 관리",
              "국제 팀워크 및 리더십",
              "영어 기술 논문 작성",
              "MIT 캠퍼스 현지 연수",
              "실리콘밸리 기업 방문",
            ],
            outcomes: ["MIT 수료증 및 추천서", "국제 네트워킹 구축", "영어 논문 작성 능력", "글로벌 프로젝트 경험"],
            admissionBenefit: "해외 명문대 지원 시 결정적 차별화 요소",
          },
          {
            name: "삼성전자 차세대 반도체 인턴십",
            provider: "삼성전자 DS부문",
            duration: "4개월 (방학 집중)",
            cost: "무료 (오히려 인턴 수당 지급)",
            expectedImprovement: "+10점",
            targetGaps: ["실무 프로젝트", "산업 경험"],
            curriculum: [
              "반도체 설계 실무 프로젝트",
              "현직 엔지니어 멘토링",
              "최신 장비 및 소프트웨어 활용",
              "팀 프로젝트 리더 역할",
              "기업 문화 및 비즈니스 이해",
            ],
            outcomes: ["삼성전자 임원 추천서", "실무 프로젝트 포트폴리오", "취업 연계 기회", "산업 네트워킹"],
            admissionBenefit: "실무 경험으로 차별화, 취업 보장",
          },
        ],

        projectedOutcome: {
          scoreImprovement: {
            current: 94,
            afterPrograms: 131,
            improvement: 37,
            breakdown: {
              "연구 역량": "+15점 (KAIST 프로그램)",
              "국제 경험": "+12점 (MIT 프로그램)",
              "실무 역량": "+10점 (삼성 인턴십)",
            },
          },

          newOpportunities: {
            domestic: ["KAIST 전액 장학생 선발", "서울대 우수학생 특별전형", "POSTECH 창의IT융합공학과 특별전형"],
            international: [
              "MIT 전기전자공학과 (합격 확률 78%)",
              "Stanford 전기공학과 (합격 확률 75%)",
              "Caltech 전기공학과 (합격 확률 80%)",
              "ETH Zurich 전기공학과 (합격 확률 85%)",
            ],
          },

          careerProjection: {
            shortTerm: "세계 최고 대학 진학 → 최고 수준 연구 환경",
            mediumTerm: "글로벌 기업 연구소 또는 스타트업 창업",
            longTerm: "차세대 기술 리더, 노벨상 수상 가능성",
          },

          investmentReturn: {
            programCost: "1,100만원 (3개 프로그램 총합)",
            expectedBenefit: "해외 명문대 진학 시 연간 1억원 이상 가치",
            roi: "1000% 이상의 투자 수익률",
            additionalValue: "평생 네트워킹, 커리어 기회, 사회적 영향력",
          },
        },
      },

      // 역량별 점수 (학업역량, 진로역량, 공동체역량)
      competencyScores: {
        학업역량: 94,
        진로역량: 96,
        공동체역량: 88,
      },

      // 역량별 정성 평가
      competencyReports: {
        학업역량: {
          score: 94,
          grade: "S등급 (최우수)",
          percentile: "상위 3%",
          analysis:
            "전국 최상위권 학업 성취도를 보이며, 특히 전공 관련 핵심 과목에서 탁월한 성과를 거두고 있습니다. 단순 암기가 아닌 깊이 있는 이해와 응용 능력이 돋보이며, 지속적인 성장 추세는 무한한 발전 가능성을 시사합니다.",
          detailedEvidence: [
            "수학 경시대회 은상: 전국 상위 1% 수준의 수학적 사고력",
            "물리 경시대회 금상: 전자기학 분야 심화 이해도",
            "정보처리기능사: 실무 프로그래밍 능력 객관적 입증",
            "전 교과 1.2등급: 균형잡힌 학업 역량",
          ],
          competitiveAnalysis: "동일 전공 지원자 대비 상위 5% 수준으로, SKY 대학 합격생 평균을 상회하는 우수한 성적",
          improvementStrategy:
            "고급 수학(복소함수, 편미분방정식) 선행학습을 통해 대학 수준 준비 강화, 국제 수학 올림피아드 도전 권장",
          futureProjection: "현재 수준 유지 시 국내 최상위 대학 합격 확실, 추가 노력 시 해외 명문대도 충분히 가능",
        },

        진로역량: {
          score: 96,
          grade: "S등급 (최우수)",
          percentile: "상위 1%",
          analysis:
            "전기전자공학이라는 명확한 진로 목표를 설정하고, 이를 위한 체계적이고 전략적인 준비를 수행하고 있습니다. 이론적 지식과 실무 경험의 완벽한 조화는 대학 진학 후에도 탁월한 성과를 보장합니다.",
          detailedEvidence: [
            "로봇공학 동아리 핵심 활동: 설계·제작·프로그래밍 전 과정 마스터",
            "정보처리기능사 자격증: 실무 능력 객관적 검증",
            "전공 관련 독서 20권 이상: 깊이 있는 전공 이해",
            "과학 탐구 보고서 대회 최우수상: 연구 역량 입증",
          ],
          uniqueStrengths: [
            "이론과 실무의 완벽한 연결: 단순 지식이 아닌 실제 적용 능력",
            "창의적 문제해결: 기존 방식에 안주하지 않는 혁신적 사고",
            "지속적 학습 의지: 새로운 기술과 트렌드에 대한 끊임없는 관심",
          ],
          industryRelevance: "4차 산업혁명 시대의 핵심 분야인 AI, IoT, 로봇공학 등에 완벽하게 부합하는 역량",
          careerProjection: "글로벌 기술 기업 연구소장, 혁신적 스타트업 창업, 대학 교수 등 다양한 진로 가능",
        },

        공동체역량: {
          score: 88,
          grade: "A등급 (우수)",
          percentile: "상위 10%",
          analysis:
            "학급 부회장으로서 일상적 리더십을 발휘하고, 과학 멘토링을 통해 지식 나눔을 실천하는 등 공동체 의식이 뛰어납니다. 다만 더 큰 규모의 프로젝트나 국제적 경험이 추가되면 완벽한 리더로 성장할 것입니다.",
          detailedEvidence: [
            "학급 부회장: 일상적 리더십과 책임감 입증",
            "ICT 프로젝트 리더: 기술적 전문성을 바탕으로 한 리더십",
            "과학 멘토링 30시간: 후배들에 대한 지식 나눔과 사회적 책임감",
            "팀 프로젝트 주도: 협업과 소통 능력 우수",
          ],
          leadershipStyle: "전문성 기반 리더십으로, 기술적 역량을 바탕으로 팀을 이끄는 능력이 탁월",
          improvementAreas: [
            "전국 단위 대회나 프로젝트에서의 리더십 경험 필요",
            "국제 프로젝트나 다문화 팀에서의 경험 부족",
            "더 큰 사회적 임팩트를 만드는 활동 권장",
          ],
          developmentPlan: "국제 로봇 대회 팀 리더, 해외 봉사활동, 사회적 기업 프로젝트 등을 통한 글로벌 리더십 개발",
        },
      },

      // 전체 내신 성적 분석
      gradeAnalysis: {
        overall: 1.2,
        trend: "상승",
        distribution: {
          "1등급": 18,
          "2등급": 4,
          "3등급": 0,
          "4등급": 0,
          "5등급": 0,
        },
        yearlyTrend: [
          { year: "1학년", average: 1.3 },
          { year: "2학년", average: 1.2 },
          { year: "3학년", average: 1.1 },
        ],
        qualitativeAssessment: {
          level: "최상위권",
          analysis:
            "전국 상위 3% 수준의 우수한 내신 성적으로, 지속적인 향상 추세를 보이고 있습니다. 특히 전공 관련 과목(수학, 물리, 정보)에서 모두 1등급을 유지하고 있어 전기전자공학과 진학에 최적화된 성적 프로필을 보유하고 있습니다.",
          competitiveness: "SKY 대학 전기전자공학과 지원 시 내신 경쟁력 상위 5% 수준",
          recommendation: "현재 성적 수준 유지하면서, 3학년 2학기까지 1등급대 유지 목표",
        },
      },

      // 전공 연계 과목 분석
      majorRelatedSubjects: {
        core: [
          { name: "수학", grade: 1, status: "우수", importance: "필수" },
          { name: "물리", grade: 1, status: "우수", importance: "필수" },
          { name: "정보", grade: 1, status: "우수", importance: "필수" },
        ],
        recommended: [
          { name: "화학", grade: 1, status: "우수", importance: "권장" },
          { name: "영어", grade: 1, status: "우수", importance: "권장" },
        ],
        completion: {
          coreCompleted: 3,
          coreTotal: 3,
          recommendedCompleted: 2,
          recommendedTotal: 2,
        },
        qualitativeReport: {
          assessment: "전공 필수 과목 완벽 이수",
          analysis:
            "전기전자공학과 진학에 필요한 모든 핵심 과목을 1등급으로 이수하여 전공 적합성이 매우 높습니다. 특히 미적분학과 물리학에서의 심화 학습은 대학 전공 과정에 대한 충분한 준비가 되어 있음을 보여줍니다.",
          competitiveAdvantage: "동일 전공 지원자 대비 상위 2% 수준의 전공 기초 역량",
        },
      },

      // 상세 학적 정보
      academicRecord: {
        admissionDate: "2022.03.02",
        expectedGraduation: "2025.02.00",
        totalAbsence: 0,
        tardiness: 1,
        earlyLeave: 0,
        attendanceRate: 99.8,
      },

      // 리더십 분석
      leadership: {
        positions: ["3학년 4반 학급 부회장"],
        projects: ["학급 ICT 활용 환경 개선 프로젝트", "로봇 제작 프로젝트 팀 리더"],
        score: 92,
        evaluation: "우수",
        qualitativeReport: {
          level: "우수",
          analysis:
            "학급 부회장으로서 책임감 있게 역할을 수행하고, ICT 프로젝트를 성공적으로 주도한 경험이 있습니다. 특히 기술적 전문성을 바탕으로 한 리더십이 돋보입니다.",
          development: "더 큰 규모의 조직에서 리더십을 발휘할 기회 필요",
          recommendation: "전국 단위 대회나 연합 동아리에서의 리더십 경험 확대",
        },
      },

      // 봉사활동 상세 분석
      volunteerWork: {
        totalHours: 34,
        categories: {
          교육멘토링: 30,
          환경보호: 4,
        },
        evaluation: "우수",
        consistency: "지속적",
        qualitativeReport: {
          assessment: "전공 연계 봉사활동 우수",
          analysis:
            "과학 멘토링 활동을 통해 자신의 지식을 나누고 후배들을 지도하는 모습에서 교육자적 자질과 사회적 책임감을 보여줍니다.",
          uniqueness: "단순 시간 채우기가 아닌 전공 관련 의미 있는 봉사",
          improvement: "국제 봉사나 더 큰 사회적 임팩트를 만드는 활동 필요",
        },
      },

      // 동아리활동 상세 분석
      clubActivities: {
        clubs: [
          {
            name: "로봇 공학 동아리 (Robot Pioneers)",
            period: "2023.03~2025.12",
            role: "핵심 멤버",
            achievements: ["로봇 설계 및 제작", "제어 프로그래밍", "교내 로봇 경진대회 우수상"],
          },
          {
            name: "물리 탐구 동아리 (Physics Explorers)",
            period: "2023.03~2025.12",
            role: "연구원",
            achievements: ["전기 및 자기 분야 심층 탐구", "실험 설계 및 데이터 분석"],
          },
        ],
        score: 96,
        evaluation: "매우 우수",
        qualitativeReport: {
          level: "최우수",
          analysis:
            "전공과 직결되는 로봇공학과 물리 탐구 동아리에서 핵심적인 역할을 수행하며, 이론과 실무를 연결하는 경험을 쌓았습니다. 특히 로봇 제작과 제어 프로그래밍 경험은 전기전자공학 전공에 매우 유리합니다.",
          competitiveEdge: "동일 전공 지원자 중 상위 1% 수준의 전공 관련 활동",
          scalability: "국제 로봇 대회 참여나 특허 출원 등으로 확장 가능",
        },
      },

      // 세부능력 및 특기사항 분석
      detailedAbilities: {
        탐구역량: 95,
        수업참여: 92,
        공동체: 88,
        종합: 92,
        highlights: [
          "전자기학 이론을 바탕으로 한 회로 설계 프로젝트 수행",
          "로봇 제어 시스템 개발을 통한 공학적 문제해결 능력 발휘",
          "물리 실험에서 창의적 실험 설계와 정확한 데이터 분석",
        ],
        qualitativeReport: {
          assessment: "전공 특화 세특 우수",
          analysis:
            "각 교과에서 전기전자공학과 연관된 심화 탐구를 지속적으로 수행하여, 단순한 암기가 아닌 창의적 사고와 문제해결 능력을 보여줍니다.",
          uniqueness: "이론과 실무를 연결하는 융합적 사고력",
          enhancement: "연구 논문 작성이나 특허 출원 등으로 심화 발전 가능",
        },
      },

      // 행동특성 및 종합의견
      behaviorAndOpinion: {
        keywords: ["탐구심", "리더십", "협업능력", "창의성", "성실성"],
        summary: "뛰어난 학습 능력과 강한 탐구심을 바탕으로 전기전자공학 분야에서 탁월한 역량을 보여주는 학생",
        teacherEvaluation: "전기전자공학이라는 명확한 진로 목표를 설정하고 체계적으로 준비하는 모범적인 학생",
        comprehensiveAssessment: {
          level: "최상위권 인재",
          summary:
            "박성민 학생은 학업 역량, 전공 적합성, 리더십을 모두 갖춘 전기전자공학과 최적 인재입니다. 특히 이론적 지식과 실무 경험의 균형, 지속적인 성장 의지가 돋보입니다.",
          futureProjection:
            "현재 역량으로도 국내 최상위 대학 진학이 가능하며, 세특 프로그램 이수 시 해외 명문대 도전도 충분히 가능합니다.",
        },
      },

      // AI 전공 추천
      aiRecommendations: [
        {
          major: "전기전자공학과",
          match: 98,
          reason: "물리·수학 우수 성적, 로봇공학 동아리 활동, 관련 자격증 보유",
          universities: ["KAIST", "서울대", "연세대", "고려대"],
          afterPrograms: {
            match: 99,
            newUniversities: ["MIT", "Stanford", "Caltech", "ETH Zurich"],
          },
        },
        {
          major: "컴퓨터공학과",
          match: 94,
          reason: "프로그래밍 역량, 정보처리기능사, 인공지능 기초 학습",
          universities: ["KAIST", "서울대", "POSTECH"],
          afterPrograms: {
            match: 97,
            newUniversities: ["MIT", "Carnegie Mellon", "UC Berkeley"],
          },
        },
        {
          major: "로봇공학과",
          match: 92,
          reason: "로봇 설계 경험, 제어 프로그래밍, 수학·물리 우수 성적",
          universities: ["KAIST", "한양대", "고려대"],
          afterPrograms: {
            match: 96,
            newUniversities: ["MIT", "Stanford", "CMU"],
          },
        },
      ],

      // 탐구활동 추천
      researchRecommendations: {
        topics: [
          "스마트 그리드 시스템의 효율성 분석",
          "IoT 기반 홈 오토메이션 시스템 설계",
          "드론의 자율비행 제어 알고리즘 연구",
          "태양광 발전 효율 최적화 연구",
        ],
        books: [
          "『전기전자공학도를 위한 수학』",
          "『디지털 신호처리의 이해』",
          "『로봇공학 입문』",
          "『반도체 소자의 물리』",
          "『제어시스템 공학』",
        ],
      },

      // 워드클라우드 키워드
      wordCloud: [
        { word: "전기전자공학", weight: 100 },
        { word: "로봇공학", weight: 90 },
        { word: "프로그래밍", weight: 85 },
        { word: "물리학", weight: 80 },
        { word: "수학", weight: 75 },
        { word: "회로설계", weight: 70 },
        { word: "제어시스템", weight: 65 },
        { word: "인공지능", weight: 60 },
        { word: "리더십", weight: 55 },
        { word: "탐구", weight: 50 },
      ],

      // 기존 데이터들...
      academicPerformance: {
        overall: 94,
        strengths: ["수학", "물리", "정보/프로그래밍", "과학탐구", "영어"],
        weaknesses: ["사회탐구", "예술"],
      },

      // 교과목 로드맵 (학기별)
      semesterRoadmap: {
        "1학년": {
          "1학기": [
            { subject: "공통국어1", credits: 3, type: "필수" },
            { subject: "공통영어1", credits: 3, type: "필수" },
            { subject: "공통수학1", credits: 3, type: "필수" },
            { subject: "통합과학1", credits: 3, type: "필수" },
            { subject: "물리학1", credits: 3, type: "전공연계" },
            { subject: "정보와 컴퓨팅1", credits: 2, type: "전공연계" },
          ],
          "2학기": [
            { subject: "공통국어2", credits: 3, type: "필수" },
            { subject: "공통영어2", credits: 3, type: "필수" },
            { subject: "공통수학2", credits: 3, type: "필수" },
            { subject: "통합과학2", credits: 3, type: "필수" },
            { subject: "물리학2", credits: 3, type: "전공연계" },
            { subject: "정보와 컴퓨팅2", credits: 2, type: "전공연계" },
          ],
        },
        "2학년": {
          "1학기": [
            { subject: "문학", credits: 4, type: "필수" },
            { subject: "영어 독해와 작문", credits: 4, type: "필수" },
            { subject: "수학Ⅱ", credits: 4, type: "전공연계" },
            { subject: "미적분", credits: 4, type: "전공연계" },
            { subject: "물리Ⅱ", credits: 4, type: "전공연계" },
            { subject: "화학Ⅱ", credits: 4, type: "전공연계" },
          ],
          "2학기": [
            { subject: "언어와 매체", credits: 4, type: "필수" },
            { subject: "영어Ⅱ", credits: 4, type: "필수" },
            { subject: "확률과 통계", credits: 4, type: "전공연계" },
            { subject: "기하", credits: 4, type: "전공연계" },
            { subject: "고급 물리학", credits: 4, type: "전공연계" },
            { subject: "인공지능 기초", credits: 3, type: "전공연계" },
          ],
        },
        "3학년": {
          "1학기": [
            { subject: "심화 국어", credits: 4, type: "필수" },
            { subject: "심화 영어Ⅱ", credits: 4, type: "필수" },
            { subject: "심화 미적분학Ⅱ", credits: 4, type: "전공연계" },
            { subject: "전자기학 및 실험", credits: 4, type: "전공연계" },
            { subject: "프로그래밍(C++)", credits: 4, type: "전공연계" },
          ],
          "2학기": [
            { subject: "고전 읽기", credits: 4, type: "필수" },
            { subject: "미디어 영어", credits: 4, type: "필수" },
            { subject: "수학 과제연구", credits: 2, type: "전공연계" },
            { subject: "과학 과제 연구", credits: 3, type: "전공연계" },
            { subject: "인공지능와 미래사회", credits: 4, type: "전공연계" },
          ],
        },
      },

      // 나머지 기존 데이터들 유지...
      subjectAnalysis: {
        수학: { grade: 1, comment: "심화 미적분학, 수학과제연구에서 탁월한 성취도" },
        물리: { grade: 1, comment: "교내 물리 경시대회 금상, 전자기학 우수 성취" },
        정보: { grade: 1, comment: "프로그래밍 과목 우수, 정보처리기능사 취득" },
        영어: { grade: 1, comment: "심화 영어, 미디어 영어 우수 성취" },
        화학: { grade: 1, comment: "화학Ⅱ 우수 성취, 반도체 기초 지식" },
        사회탐구: { grade: 2, comment: "상대적 관심도 부족" },
        예술: { grade: 2, comment: "이공계 특성상 예술보다 과학기술 집중" },
      },

      activityAnalysis: {
        categories: { 자율활동: 92, 동아리활동: 96, 봉사활동: 88, 진로활동: 94 },
        keywords: ["로봇공학", "전자기학", "프로그래밍", "회로설계", "인공지능"],
        highlights: [
          "로봇 공학 동아리에서 로봇 설계 및 제어 프로그래밍 주도",
          "물리 탐구 동아리에서 전기 및 자기 분야 심층 탐구",
          "교내 과학 탐구 보고서 대회 최우수상 (전기전자공학 분야)",
        ],
      },

      recommendedMajors: [
        { major: "전기전자공학과", compatibility: 98, reason: "물리 경시대회 금상, 로봇공학 동아리 활동 완벽 일치" },
        { major: "컴퓨터공학과", compatibility: 94, reason: "프로그래밍 역량, 정보처리기능사 자격증" },
        { major: "로봇공학과", compatibility: 92, reason: "로봇 설계 경험, 제어 프로그래밍" },
      ],

      improvementAreas: [
        { area: "사회과학적 소양 확대", suggestion: "공학윤리, 기술경영 학습", priority: "medium" as const },
        { area: "국제 경험 및 글로벌 역량", suggestion: "해외 공학 프로그램 참여", priority: "medium" as const },
        { area: "실무 프로젝트 경험 확대", suggestion: "기업 인턴십 참여", priority: "high" as const },
      ],

      careerCompatibility: {
        학업역량: 94,
        전공적합성: 98,
        진로탐색: 94,
        실무경험: 75,
        창의성: 90,
        리더십: 92,
      },

      roadmap: {
        "1-3개월": ["전기전자공학과 입시 전략 수립", "고급 물리학 심화", "회로 설계 프로젝트"],
        "4-6개월": ["대학별 연구 분야 탐색", "실무 프로젝트 확대", "모의고사 관리"],
        "7-9개월": ["전국 로봇 대회 참여", "입시 원서 작성", "포트폴리오 완성"],
        "10-12개월": ["최종 입시 준비", "면접 연습", "전공 기초 선행학습"],
      },
    }
  }

  const analysis = userData.recordAnalysis

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <ProgressBar currentStep={5} totalSteps={6} />
          <div className="flex items-center mb-6">
            <Link href="/personality-test">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                이전
              </Button>
            </Link>
          </div>
          {/* 헤더 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">생활기록부 종합분석 리포트</h1>
            <p className="text-gray-600">박성민 학생의 전기전자공학과 맞춤 분석 결과</p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <Badge className="bg-blue-600 text-white px-4 py-2">{analysis?.recordType}</Badge>
              <Badge variant="outline" className="px-4 py-2">
                총점 {analysis?.totalScore}점
              </Badge>
              <Badge className="bg-green-600 text-white px-4 py-2">
                {analysis?.comprehensiveReport?.overallAssessment}
              </Badge>
            </div>
          </div>
          {/* 종합 평가 리포트 */}
          <Card className="mb-8 border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <FileText className="h-6 w-6" />📋 종합 평가 리포트
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* 전체 요약 */}
                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-2">🎯 전체 요약</h4>
                  <p className="text-blue-700 leading-relaxed">{analysis?.comprehensiveReport?.executiveSummary}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* 강점 */}
                  <div>
                    <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      주요 강점
                    </h4>
                    <div className="space-y-2">
                      {analysis?.comprehensiveReport?.detailedAnalysis?.academicExcellence?.strengths?.map(
                        (strength, index) => (
                          <div key={index} className="flex items-start gap-2 p-2 bg-green-50 rounded">
                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-green-800">{strength}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* 보완점 */}
                  <div>
                    <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      보완 필요 사항
                    </h4>
                    <div className="space-y-2">
                      {analysis?.comprehensiveReport?.detailedAnalysis?.academicExcellence?.weaknesses?.map(
                        (weakness, index) => (
                          <div key={index} className="flex items-start gap-2 p-2 bg-orange-50 rounded">
                            <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-orange-800">{weakness}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* 최상위권 지원 가능성 */}
                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    최상위권 지원 가능성
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-purple-600 mb-1">현재 지원 가능</div>
                      <div className="font-semibold text-purple-800">
                        {analysis?.comprehensiveReport?.topTierEligibility?.current?.domestic}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-purple-600 mb-1">세특 프로그램 완주 후</div>
                      <div className="font-semibold text-purple-800">
                        {analysis?.comprehensiveReport?.topTierEligibility?.afterPrograms?.domestic}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-purple-600">신뢰도</span>
                      <span className="text-sm font-semibold text-purple-800">
                        {analysis?.comprehensiveReport?.topTierEligibility?.current?.confidence}%
                      </span>
                    </div>
                    <Progress
                      value={analysis?.comprehensiveReport?.topTierEligibility?.current?.confidence}
                      className="h-2"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* 세특 프로그램 연계 분석 */}
          <Card className="mb-8 border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Rocket className="h-6 w-6" />🚀 세특 프로그램 연계 상향 지원 전략
              </CardTitle>
              <CardDescription className="text-green-700">
                체계적인 세특 프로그램을 통해 MIT, Stanford 등 세계 최고 대학 도전이 가능합니다
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-8">
                {/* 투자 수익률 분석 */}
                <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />💰 투자 수익률 분석
                  </h4>
                  <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="p-3 bg-white rounded border">
                      <div className="text-lg font-bold text-gray-800">1,100만원</div>
                      <div className="text-sm text-gray-600">프로그램 총 비용</div>
                    </div>
                    <div className="p-3 bg-white rounded border">
                      <div className="text-lg font-bold text-blue-600">1억원+</div>
                      <div className="text-sm text-blue-600">연간 교육 가치</div>
                    </div>
                    <div className="p-3 bg-white rounded border">
                      <div className="text-lg font-bold text-green-600">1000%+</div>
                      <div className="text-sm text-green-600">투자 수익률</div>
                    </div>
                    <div className="p-3 bg-white rounded border">
                      <div className="text-lg font-bold text-purple-600">평생</div>
                      <div className="text-sm text-purple-600">네트워킹 가치</div>
                    </div>
                  </div>
                </div>

                {/* 추천 세특 프로그램 상세 */}
                <div>
                  <h4 className="font-bold text-blue-800 mb-4">🎯 맞춤 세특 프로그램 (총 3개 과정)</h4>
                  <div className="space-y-6">
                    {analysis?.setakProgramAnalysis?.recommendedPrograms?.map((program, index) => (
                      <div key={index} className="p-6 border-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h5 className="text-lg font-bold text-blue-800">{program.name}</h5>
                            <div className="text-sm text-blue-600 mb-2">
                              {program.provider} | {program.duration} | {program.cost}
                            </div>
                            <Badge className="bg-green-600 text-white">예상 향상: {program.expectedImprovement}</Badge>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600">{index + 1}순위</div>
                            <div className="text-sm text-gray-600">추천 프로그램</div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h6 className="font-semibold text-gray-800 mb-2">📚 주요 커리큘럼</h6>
                            <div className="space-y-1">
                              {program.curriculum?.slice(0, 3).map((item, itemIndex) => (
                                <div key={itemIndex} className="flex items-center gap-2">
                                  <CircleDot className="h-3 w-3 text-blue-600" />
                                  <span className="text-sm text-gray-700">{item}</span>
                                </div>
                              ))}
                              {program.curriculum?.length > 3 && (
                                <div className="text-sm text-gray-500">
                                  +{program.curriculum.length - 3}개 추가 과정
                                </div>
                              )}
                            </div>
                          </div>

                          <div>
                            <h6 className="font-semibold text-gray-800 mb-2">🏆 예상 성과</h6>
                            <div className="space-y-1">
                              {program.outcomes?.slice(0, 3).map((outcome, outcomeIndex) => (
                                <div key={outcomeIndex} className="flex items-center gap-2">
                                  <Star className="h-3 w-3 text-yellow-600" />
                                  <span className="text-sm text-gray-700">{outcome}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded">
                          <h6 className="font-semibold text-purple-800 mb-1">🎓 입시 혜택</h6>
                          <p className="text-sm text-purple-700">{program.admissionBenefit}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 단계별 성과 예측 */}
                <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-300">
                  <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    <ArrowUp className="h-5 w-5" />📊 단계별 성과 예측 및 목표 대학 변화
                  </h4>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 bg-white rounded-lg border">
                      <div className="text-3xl font-bold text-gray-600 mb-2">94점</div>
                      <div className="text-sm text-gray-500 mb-3">현재 점수</div>
                      <div className="space-y-1">
                        <Badge variant="outline" className="text-xs">
                          KAIST 안정
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          서울대 적정
                        </Badge>
                      </div>
                    </div>

                    <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-3xl font-bold text-blue-600 mb-2">115점</div>
                      <div className="text-sm text-blue-500 mb-3">1단계 완료 후</div>
                      <div className="space-y-1">
                        <Badge className="bg-blue-600 text-xs">국내 최상위 확정</Badge>
                        <Badge variant="outline" className="text-xs">
                          해외 명문대 도전권
                        </Badge>
                      </div>
                    </div>

                    <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="text-3xl font-bold text-green-600 mb-2">131점</div>
                      <div className="text-sm text-green-500 mb-3">전체 완료 후</div>
                      <div className="space-y-1">
                        <Badge className="bg-green-600 text-xs">MIT 도전 가능</Badge>
                        <Badge className="bg-purple-600 text-xs">Stanford 도전 가능</Badge>
                      </div>
                    </div>
                  </div>

                  {/* 새로운 기회 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-green-800 mb-3">🇰🇷 국내 대학 기회</h5>
                      <div className="space-y-2">
                        {analysis?.setakProgramAnalysis?.projectedOutcome?.newOpportunities?.domestic?.map(
                          (opportunity, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 bg-green-100 rounded">
                              <Trophy className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-green-800">{opportunity}</span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-blue-800 mb-3">🌍 해외 대학 기회</h5>
                      <div className="space-y-2">
                        {analysis?.setakProgramAnalysis?.projectedOutcome?.newOpportunities?.international?.map(
                          (opportunity, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 bg-blue-100 rounded">
                              <GraduationCap className="h-4 w-4 text-blue-600" />
                              <span className="text-sm text-blue-800">{opportunity}</span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 커리어 전망 */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-3">🚀 장기 커리어 전망</h5>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-purple-700">단기 (1-2년):</span>
                        <p className="text-purple-600">
                          {analysis?.setakProgramAnalysis?.projectedOutcome?.careerProjection?.shortTerm}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-purple-700">중기 (5-10년):</span>
                        <p className="text-purple-600">
                          {analysis?.setakProgramAnalysis?.projectedOutcome?.careerProjection?.mediumTerm}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-purple-700">장기 (10년+):</span>
                        <p className="text-purple-600">
                          {analysis?.setakProgramAnalysis?.projectedOutcome?.careerProjection?.longTerm}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* 탭 메뉴 */}
          <Tabs defaultValue="overview" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-6 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                종합 개요
              </TabsTrigger>
              <TabsTrigger value="academic" className="flex items-center gap-2">
                <BookCheck className="h-4 w-4" />
                학업 분석
              </TabsTrigger>
              <TabsTrigger value="activities" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                활동 분석
              </TabsTrigger>
              <TabsTrigger value="roadmap" className="flex items-center gap-2">
                <School className="h-4 w-4" />
                교과목 로드맵
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                맞춤 보완점
              </TabsTrigger>
              <TabsTrigger value="evaluation" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                평가 기준
              </TabsTrigger>
            </TabsList>

            {/* 종합 개요 탭 */}
            <TabsContent value="overview">
              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {/* 목표 대학 진단 */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-purple-600" />
                      목표 대학 진단 (현재 vs 세특 프로그램 완주 후)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analysis?.targetUniversities?.map((uni, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="font-semibold">{uni.name}</div>
                              {uni.current && (
                                <Badge
                                  className={`${
                                    uni.color === "green"
                                      ? "bg-green-600"
                                      : uni.color === "blue"
                                        ? "bg-blue-600"
                                        : "bg-orange-600"
                                  }`}
                                >
                                  {uni.level}
                                </Badge>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-gray-900">현재: {uni.probability}%</div>
                              {uni.afterPrograms && (
                                <div className="text-lg font-bold text-green-600">완주 후: {uni.afterPrograms}%</div>
                              )}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <Progress value={uni.probability} className="h-2" />
                            {uni.afterPrograms && <Progress value={uni.afterPrograms} className="h-2 bg-green-100" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* 역량별 점수 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-blue-600" />
                      역량별 점수
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {analysis?.competencyScores &&
                      Object.entries(analysis.competencyScores).map(([category, score], index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{category}</span>
                            <Badge variant="outline">{score}점</Badge>
                          </div>
                          <Progress value={score} className="h-3" />
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </div>

              {/* 역량별 정성 평가 */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {analysis?.competencyReports &&
                  Object.entries(analysis.competencyReports).map(([category, report], index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span>{category}</span>
                          <Badge className="bg-blue-600">{report.grade}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">{report.score}점</div>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">{report.analysis}</p>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-2">주요 근거</h5>
                            <div className="space-y-1">
                              {report.detailedEvidence.map((evidence, evidenceIndex) => (
                                <div key={evidenceIndex} className="flex items-center gap-2">
                                  <CheckCircle2 className="h-3 w-3 text-green-600" />
                                  <span className="text-xs text-gray-600">{evidence}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="p-2 bg-yellow-50 rounded text-xs text-yellow-800">
                            <strong>개선 방향:</strong> {report.improvementStrategy}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* 전체 내신 성적 분석 */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      전체 내신 성적 정성 평가
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        {analysis?.gradeAnalysis?.overall}등급
                      </div>
                      <Badge className="bg-green-600">{analysis?.gradeAnalysis?.qualitativeAssessment?.level}</Badge>
                    </div>

                    <div className="space-y-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-green-800 mb-2">정성 분석</h4>
                        <p className="text-sm text-green-700 leading-relaxed">
                          {analysis?.gradeAnalysis?.qualitativeAssessment?.analysis}
                        </p>
                      </div>

                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-2">경쟁력 평가</h4>
                        <p className="text-sm text-blue-700">
                          {analysis?.gradeAnalysis?.qualitativeAssessment?.competitiveness}
                        </p>
                      </div>

                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-medium text-purple-800 mb-2">권장 사항</h4>
                        <p className="text-sm text-purple-700">
                          {analysis?.gradeAnalysis?.qualitativeAssessment?.recommendation}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-orange-600" />
                      학년별 성적 추이
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analysis?.gradeAnalysis?.yearlyTrend?.map((year, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">{year.year}</span>
                          <div className="text-right">
                            <div className="text-xl font-bold">{year.average}등급</div>
                            <div className="text-sm text-gray-600">평균</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <CheckCircle2 className="h-4 w-4 inline mr-1" />
                        지속적인 성적 향상 추세를 보이고 있습니다.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 전공 연계 과목 분석 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookMarked className="h-5 w-5 text-indigo-600" />
                    전공 연계 과목 이수 현황 및 정성 평가
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <Badge className="bg-red-600">핵심 과목</Badge>
                        <span className="text-sm text-gray-600">
                          ({analysis?.majorRelatedSubjects?.completion?.coreCompleted}/
                          {analysis?.majorRelatedSubjects?.completion?.coreTotal} 완료)
                        </span>
                      </h4>
                      <div className="space-y-3">
                        {analysis?.majorRelatedSubjects?.core?.map((subject, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                            <div>
                              <span className="font-medium">{subject.name}</span>
                              <Badge variant="outline" className="ml-2">
                                {subject.grade}등급
                              </Badge>
                            </div>
                            <Badge className={subject.status === "우수" ? "bg-green-600" : "bg-gray-600"}>
                              {subject.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-4 flex items-center gap-2">
                        <Badge className="bg-blue-600">권장 과목</Badge>
                        <span className="text-sm text-gray-600">
                          ({analysis?.majorRelatedSubjects?.completion?.recommendedCompleted}/
                          {analysis?.majorRelatedSubjects?.completion?.recommendedTotal} 완료)
                        </span>
                      </h4>
                      <div className="space-y-3">
                        {analysis?.majorRelatedSubjects?.recommended?.map((subject, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                            <div>
                              <span className="font-medium">{subject.name}</span>
                              <Badge variant="outline" className="ml-2">
                                {subject.grade}등급
                              </Badge>
                            </div>
                            <Badge className={subject.status === "우수" ? "bg-green-600" : "bg-gray-600"}>
                              {subject.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 정성 평가 */}
                  <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                    <h4 className="font-bold text-indigo-800 mb-3">전공 연계 과목 정성 평가</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-indigo-700">평가: </span>
                        <span className="text-indigo-600">
                          {analysis?.majorRelatedSubjects?.qualitativeReport?.assessment}
                        </span>
                      </div>
                      <p className="text-sm text-indigo-700 leading-relaxed">
                        {analysis?.majorRelatedSubjects?.qualitativeReport?.analysis}
                      </p>
                      <div className="p-2 bg-indigo-100 rounded">
                        <span className="font-medium text-indigo-800">경쟁 우위: </span>
                        <span className="text-sm text-indigo-700">
                          {analysis?.majorRelatedSubjects?.qualitativeReport?.competitiveAdvantage}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 상세 정성적 평가 리포트 */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="md:col-span-3">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <FileText className="h-6 w-6" />📊 상세 정성적 평가 리포트
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* 학업 역량 상세 분석 */}
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                          <BookCheck className="h-5 w-5" />
                          학업 역량 (94점, S등급)
                        </h4>
                        <div className="space-y-3">
                          <div className="text-sm">
                            <span className="font-medium text-blue-700">백분위: </span>
                            <span className="text-blue-600">전국 상위 3%</span>
                          </div>
                          <p className="text-sm text-blue-700 leading-relaxed">
                            {analysis?.comprehensiveReport?.detailedAnalysis?.academicExcellence?.analysis}
                          </p>
                          <div>
                            <h5 className="font-medium text-blue-800 mb-2">핵심 강점</h5>
                            <div className="space-y-1">
                              {analysis?.comprehensiveReport?.detailedAnalysis?.academicExcellence?.strengths
                                ?.slice(0, 2)
                                .map((strength, index) => (
                                  <div key={index} className="flex items-start gap-2">
                                    <CheckCircle2 className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-xs text-blue-700">{strength}</span>
                                  </div>
                                ))}
                            </div>
                          </div>
                          <div className="p-2 bg-blue-100 rounded text-xs text-blue-800">
                            <strong>경쟁력:</strong>{" "}
                            {analysis?.comprehensiveReport?.detailedAnalysis?.academicExcellence?.competitiveness}
                          </div>
                        </div>
                      </div>

                      {/* 전공 적합성 상세 분석 */}
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          전공 적합성 (98점, 완벽)
                        </h4>
                        <div className="space-y-3">
                          <div className="text-sm">
                            <span className="font-medium text-purple-700">수준: </span>
                            <span className="text-purple-600">완벽 적합</span>
                          </div>
                          <p className="text-sm text-purple-700 leading-relaxed">
                            {analysis?.comprehensiveReport?.detailedAnalysis?.majorCompatibility?.analysis}
                          </p>
                          <div>
                            <h5 className="font-medium text-purple-800 mb-2">핵심 근거</h5>
                            <div className="space-y-1">
                              {analysis?.comprehensiveReport?.detailedAnalysis?.majorCompatibility?.evidences
                                ?.slice(0, 2)
                                .map((evidence, index) => (
                                  <div key={index} className="flex items-start gap-2">
                                    <Star className="h-3 w-3 text-yellow-600 mt-1 flex-shrink-0" />
                                    <span className="text-xs text-purple-700">{evidence}</span>
                                  </div>
                                ))}
                            </div>
                          </div>
                          <div className="p-2 bg-purple-100 rounded text-xs text-purple-800">
                            <strong>특별함:</strong>{" "}
                            {analysis?.comprehensiveReport?.detailedAnalysis?.majorCompatibility?.uniqueness}
                          </div>
                        </div>
                      </div>

                      {/* 리더십 및 공동체 상세 분석 */}
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          리더십·공동체 (88점, A등급)
                        </h4>
                        <div className="space-y-3">
                          <div className="text-sm">
                            <span className="font-medium text-green-700">백분위: </span>
                            <span className="text-green-600">전국 상위 10%</span>
                          </div>
                          <p className="text-sm text-green-700 leading-relaxed">
                            {analysis?.comprehensiveReport?.detailedAnalysis?.leadershipAndCommunity?.analysis}
                          </p>
                          <div>
                            <h5 className="font-medium text-green-800 mb-2">주요 강점</h5>
                            <div className="space-y-1">
                              {analysis?.comprehensiveReport?.detailedAnalysis?.leadershipAndCommunity?.strengths
                                ?.slice(0, 2)
                                .map((strength, index) => (
                                  <div key={index} className="flex items-start gap-2">
                                    <Users className="h-3 w-3 text-blue-600 mt-1 flex-shrink-0" />
                                    <span className="text-xs text-green-700">{strength}</span>
                                  </div>
                                ))}
                            </div>
                          </div>
                          <div className="p-2 bg-yellow-100 rounded text-xs text-yellow-800">
                            <strong>개선점:</strong> 전국 단위 리더십 경험 확대 필요
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 경쟁 우위 및 약점 분석 */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Trophy className="h-5 w-5" />🏆 핵심 경쟁 우위
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analysis?.comprehensiveReport?.competitiveAdvantages?.map((advantage, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                          <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-sm text-green-800 font-medium">{advantage}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                      <p className="text-sm text-green-800 font-medium">
                        💡 종합 평가: 동일 전공 지원자 중 상위 1% 수준의 완벽한 프로필
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-800">
                      <AlertTriangle className="h-5 w-5" />
                      ⚠️ 핵심 보완 과제
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analysis?.comprehensiveReport?.criticalWeaknesses?.map((weakness, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400"
                        >
                          <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-orange-800">{weakness}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                      <p className="text-sm text-orange-800 font-medium">
                        🎯 해결책: 세특 프로그램을 통한 체계적 보완 가능
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 갭 분석 및 개선 전략 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <BarChart3 className="h-5 w-5" />📈 상세 갭 분석 및 개선 전략
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysis?.setakProgramAnalysis?.currentGapAnalysis?.criticalGaps?.map((gap, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-semibold text-gray-800">{gap.area}</h4>
                          <Badge className={`${gap.urgency === "높음" ? "bg-red-600" : "bg-yellow-600"}`}>
                            {gap.urgency} 우선순위
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">현재 수준:</span>
                            <p className="text-gray-700">{gap.currentLevel}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">목표 수준:</span>
                            <p className="text-gray-700">{gap.requiredLevel}</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">영향도:</span>
                            <p className="text-gray-700">{gap.impact}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 학업 분석 탭 */}
            <TabsContent value="academic">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* 학적 정보 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <School className="h-5 w-5 text-blue-600" />
                      학적 정보
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">입학일</div>
                        <div className="font-medium">{analysis?.academicRecord?.admissionDate}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">졸업 예정일</div>
                        <div className="font-medium">{analysis?.academicRecord?.expectedGraduation}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 출결 현황 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-green-600" />
                      출결 현황
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-green-600">
                        {analysis?.academicRecord?.attendanceRate}%
                      </div>
                      <div className="text-sm text-gray-600">출석률</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-semibold">{analysis?.academicRecord?.totalAbsence}</div>
                        <div className="text-xs text-gray-600">결석</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{analysis?.academicRecord?.tardiness}</div>
                        <div className="text-xs text-gray-600">지각</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">{analysis?.academicRecord?.earlyLeave}</div>
                        <div className="text-xs text-gray-600">조퇴</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 과목별 성취도 분석 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-purple-600" />
                    과목별 성취도 분석
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysis?.subjectAnalysis &&
                      Object.entries(analysis.subjectAnalysis).map(([subject, data], index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <div className="font-medium text-lg">{subject}</div>
                            <Badge variant="outline" className="text-lg px-3 py-1">
                              {data.grade}등급
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{data.comment}</p>
                          <Progress value={data.grade === 1 ? 95 : data.grade === 2 ? 75 : 50} className="mt-2" />
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* 세부능력 및 특기사항 분석 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-600" />
                    세부능력 및 특기사항 (세특) 분석
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-4">역량별 평가</h4>
                      <div className="space-y-3">
                        {analysis?.detailedAbilities &&
                          Object.entries(analysis.detailedAbilities)
                            .filter(([key]) => key !== "highlights" && key !== "qualitativeReport")
                            .map(([category, score], index) => (
                              <div key={index} className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <span className="font-medium">{category}</span>
                                  <Badge variant="outline">{score}점</Badge>
                                </div>
                                <Progress value={score} className="h-2" />
                              </div>
                            ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-4">주요 특기사항</h4>
                      <div className="space-y-3">
                        {analysis?.detailedAbilities?.highlights?.map((highlight, index) => (
                          <div key={index} className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                            <p className="text-sm text-yellow-800">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 세특 정성 평가 */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                    <h4 className="font-bold text-yellow-800 mb-3">세특 정성 평가</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-yellow-700">평가: </span>
                        <span className="text-yellow-600">
                          {analysis?.detailedAbilities?.qualitativeReport?.assessment}
                        </span>
                      </div>
                      <p className="text-sm text-yellow-700 leading-relaxed">
                        {analysis?.detailedAbilities?.qualitativeReport?.analysis}
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="p-2 bg-yellow-100 rounded">
                          <span className="font-medium text-yellow-800">특별함: </span>
                          <span className="text-sm text-yellow-700">
                            {analysis?.detailedAbilities?.qualitativeReport?.uniqueness}
                          </span>
                        </div>
                        <div className="p-2 bg-orange-100 rounded">
                          <span className="font-medium text-orange-800">발전 방향: </span>
                          <span className="text-sm text-orange-700">
                            {analysis?.detailedAbilities?.qualitativeReport?.enhancement}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 활동 분석 탭 */}
            <TabsContent value="activities">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* 리더십 분석 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      리더십 분석
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-blue-600">{analysis?.leadership?.score}점</div>
                      <Badge className="bg-blue-600 mt-2">{analysis?.leadership?.evaluation}</Badge>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm text-gray-600 mb-2">주요 직책</h4>
                        {analysis?.leadership?.positions?.map((position, index) => (
                          <Badge key={index} variant="outline" className="mr-2 mb-2">
                            {position}
                          </Badge>
                        ))}
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-gray-600 mb-2">주도한 프로젝트</h4>
                        <ul className="text-sm space-y-1">
                          {analysis?.leadership?.projects?.map((project, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* 리더십 정성 평가 */}
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">정성 평가</h5>
                      <p className="text-sm text-blue-700 leading-relaxed mb-2">
                        {analysis?.leadership?.qualitativeReport?.analysis}
                      </p>
                      <div className="space-y-1">
                        <div className="text-xs text-blue-600">
                          <strong>발전 과제:</strong> {analysis?.leadership?.qualitativeReport?.development}
                        </div>
                        <div className="text-xs text-blue-600">
                          <strong>권장 사항:</strong> {analysis?.leadership?.qualitativeReport?.recommendation}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 봉사활동 분석 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-green-600" />
                      봉사활동 분석
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-green-600">{analysis?.volunteerWork?.totalHours}시간</div>
                      <Badge className="bg-green-600 mt-2">{analysis?.volunteerWork?.evaluation}</Badge>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-gray-600">활동 분야별 시간</h4>
                      {analysis?.volunteerWork?.categories &&
                        Object.entries(analysis.volunteerWork.categories).map(([category, hours], index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm">{category}</span>
                            <div className="flex items-center gap-2">
                              <Progress
                                value={(hours / analysis.volunteerWork.totalHours) * 100}
                                className="w-20 h-2"
                              />
                              <span className="text-sm font-medium">{hours}h</span>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* 봉사활동 정성 평가 */}
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <h5 className="font-medium text-green-800 mb-2">정성 평가</h5>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong className="text-green-700">평가:</strong>{" "}
                          <span className="text-green-600">
                            {analysis?.volunteerWork?.qualitativeReport?.assessment}
                          </span>
                        </div>
                        <p className="text-green-700 leading-relaxed">
                          {analysis?.volunteerWork?.qualitativeReport?.analysis}
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                          <div className="p-2 bg-green-100 rounded">
                            <strong className="text-green-800">특별함:</strong>{" "}
                            <span className="text-green-700">
                              {analysis?.volunteerWork?.qualitativeReport?.uniqueness}
                            </span>
                          </div>
                          <div className="p-2 bg-green-100 rounded">
                            <strong className="text-green-800">개선점:</strong>{" "}
                            <span className="text-green-700">
                              {analysis?.volunteerWork?.qualitativeReport?.improvement}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 동아리활동 상세 분석 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    동아리활동 상세 분석
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-purple-600">{analysis?.clubActivities?.score}점</div>
                    <Badge className="bg-purple-600 mt-2">{analysis?.clubActivities?.evaluation}</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {analysis?.clubActivities?.clubs?.map((club, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">{club.name}</h4>
                        <div className="text-sm text-gray-600 mb-2">
                          {club.period} | {club.role}
                        </div>
                        <div>
                          <h5 className="font-medium text-sm mb-2">주요 성과</h5>
                          <ul className="text-sm space-y-1">
                            {club.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-center gap-2">
                                <CircleDot className="h-3 w-3 text-purple-600" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 동아리 정성 평가 */}
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <h4 className="font-bold text-purple-800 mb-3">동아리활동 정성 평가</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium text-purple-700">수준: </span>
                        <span className="text-purple-600">{analysis?.clubActivities?.qualitativeReport?.level}</span>
                      </div>
                      <p className="text-sm text-purple-700 leading-relaxed">
                        {analysis?.clubActivities?.qualitativeReport?.analysis}
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="p-2 bg-purple-100 rounded">
                          <span className="font-medium text-purple-800">경쟁 우위: </span>
                          <span className="text-sm text-purple-700">
                            {analysis?.clubActivities?.qualitativeReport?.competitiveEdge}
                          </span>
                        </div>
                        <div className="p-2 bg-pink-100 rounded">
                          <span className="font-medium text-pink-800">확장 가능성: </span>
                          <span className="text-sm text-pink-700">
                            {analysis?.clubActivities?.qualitativeReport?.scalability}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 행동특성 및 종합의견 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-orange-600" />
                    행동특성 및 종합의견
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium mb-4">핵심 키워드</h4>
                      <div className="flex flex-wrap gap-2">
                        {analysis?.behaviorAndOpinion?.keywords?.map((keyword, index) => (
                          <Badge key={index} variant="outline" className="text-sm">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-4">교사 종합 평가</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {analysis?.behaviorAndOpinion?.teacherEvaluation}
                      </p>
                    </div>
                  </div>

                  {/* 종합 평가 */}
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                    <h4 className="font-bold text-orange-800 mb-3">
                      최종 종합 평가: {analysis?.behaviorAndOpinion?.comprehensiveAssessment?.level}
                    </h4>
                    <div className="space-y-3">
                      <p className="text-sm text-orange-700 leading-relaxed">
                        {analysis?.behaviorAndOpinion?.comprehensiveAssessment?.summary}
                      </p>
                      <div className="p-3 bg-orange-100 rounded">
                        <h5 className="font-medium text-orange-800 mb-2">미래 전망</h5>
                        <p className="text-sm text-orange-700">
                          {analysis?.behaviorAndOpinion?.comprehensiveAssessment?.futureProjection}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 교과목 로드맵 탭 */}
            <TabsContent value="roadmap">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <School className="h-5 w-5 text-indigo-600" />
                    전기전자공학과 맞춤 교과목 로드맵 (학기별)
                  </CardTitle>
                  <CardDescription>
                    하나고등학교 개설 교과목 기준 전기전자공학과 진학을 위한 학기별 수강 계획
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {analysis?.semesterRoadmap &&
                      Object.entries(analysis.semesterRoadmap).map(([year, semesters], yearIndex) => (
                        <div key={yearIndex} className="border rounded-lg p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {year.charAt(0)}
                            </div>
                            {year}
                          </h3>

                          <div className="grid md:grid-cols-2 gap-6">
                            {Object.entries(semesters).map(([semester, subjects], semesterIndex) => (
                              <div key={semesterIndex}>
                                <h4 className="font-semibold text-lg mb-4 text-gray-700">{semester}</h4>
                                <div className="overflow-hidden rounded-lg border">
                                  <table className="w-full">
                                    <thead className="bg-gray-50">
                                      <tr>
                                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">
                                          과목명
                                        </th>
                                        <th className="px-3 py-2 text-center text-sm font-medium text-gray-700">
                                          학점
                                        </th>
                                        <th className="px-3 py-2 text-center text-sm font-medium text-gray-700">
                                          구분
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                      {subjects.map((subject, subjectIndex) => (
                                        <tr key={subjectIndex} className="hover:bg-gray-50">
                                          <td className="px-3 py-2 text-sm font-medium">{subject.subject}</td>
                                          <td className="px-3 py-2 text-sm text-center">{subject.credits}</td>
                                          <td className="px-3 py-2 text-center">
                                            <Badge
                                              variant="outline"
                                              className={`text-xs ${
                                                subject.type === "전공연계"
                                                  ? "bg-blue-50 text-blue-700 border-blue-200"
                                                  : subject.type === "필수"
                                                    ? "bg-gray-50 text-gray-700 border-gray-200"
                                                    : "bg-green-50 text-green-700 border-green-200"
                                              }`}
                                            >
                                              {subject.type}
                                            </Badge>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* 로드맵 요약 */}
                  <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-medium text-indigo-800 mb-3">🎯 전기전자공학과 맞춤 교과목 선택 전략</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-indigo-700">
                      <div>
                        <p>
                          <strong>1학년:</strong> 기초 과학과 수학 역량 강화
                        </p>
                        <p>
                          <strong>2학년:</strong> 전공 기초 과목 집중 이수
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>3학년:</strong> 심화 과목과 연구 활동 중심
                        </p>
                        <p>
                          <strong>전체:</strong> 이론과 실습의 균형잡힌 학습
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 맞춤 보완점 탭 */}
            <TabsContent value="recommendations">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* AI 전공 추천 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-purple-600" />
                      AI 전공 추천 (현재 vs 세특 프로그램 완주 후)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {analysis?.aiRecommendations?.map((rec, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold">{rec.major}</h4>
                          <div className="text-right">
                            <Badge className={index === 0 ? "bg-purple-600" : "bg-gray-600"}>현재: {rec.match}%</Badge>
                            {rec.afterPrograms && (
                              <Badge className="bg-green-600 ml-1">완주 후: {rec.afterPrograms.match}%</Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{rec.reason}</p>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-gray-500">현재 목표 대학:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {rec.universities.map((uni, uniIndex) => (
                                <Badge key={uniIndex} variant="outline" className="text-xs">
                                  {uni}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          {rec.afterPrograms && (
                            <div>
                              <span className="text-xs text-green-600">세특 프로그램 완주 후:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {rec.afterPrograms.newUniversities.map((uni, uniIndex) => (
                                  <Badge key={uniIndex} className="bg-green-600 text-xs">
                                    {uni}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* 워드클라우드 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-green-600" />
                      핵심 키워드 분석
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {analysis?.wordCloud?.map((item, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium"
                          style={{
                            fontSize: `${Math.max(12, (item.weight / 100) * 20)}px`,
                            opacity: item.weight / 100,
                          }}
                        >
                          {item.word}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 탐구활동 추천 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-orange-600" />
                    탐구활동 추천 주제 및 도서
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-4">추천 탐구 주제</h4>
                      <div className="space-y-3">
                        {analysis?.researchRecommendations?.topics?.map((topic, index) => (
                          <div key={index} className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                            <p className="text-sm font-medium text-orange-800">{topic}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-4">추천 도서</h4>
                      <div className="space-y-2">
                        {analysis?.researchRecommendations?.books?.map((book, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                            <BookOpen className="h-4 w-4 text-gray-600" />
                            <span className="text-sm">{book}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 역량별 진단 및 보완법 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-red-600" />
                    역량별 진단 및 보완법
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {analysis?.improvementAreas?.map((area, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-semibold">{area.area}</h4>
                          <Badge
                            className={`${
                              area.priority === "high"
                                ? "bg-red-600"
                                : area.priority === "medium"
                                  ? "bg-yellow-600"
                                  : "bg-blue-600"
                            }`}
                          >
                            {area.priority === "high" ? "높음" : area.priority === "medium" ? "중간" : "낮음"} 우선순위
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{area.suggestion}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 평가 기준 탭 */}
            <TabsContent value="evaluation">
              <div className="space-y-6">
                {/* 세특 역량별 평가 기준 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-600" />
                      세부능력 및 특기사항 (세특) 역량별 평가 기준
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">탐구역량</h4>
                          <p className="text-sm text-blue-700">
                            교과에서 이루어지는 탐구 활동에 대한 적극적인 참여 및 결과를 나타내는 기록
                          </p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">수업 참여</h4>
                          <p className="text-sm text-green-700">수업 시간에 적극적인 태도와 기여를 나타내는 기록</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">공동체</h4>
                          <p className="text-sm text-purple-700">공동체에서 드러내는 개인 기록</p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-semibold text-orange-800 mb-2">종합</h4>
                          <p className="text-sm text-orange-700">위 3가지 기준을 종합한 평가</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 등급 분류 기준 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-green-600" />
                      우수/양호/보완 필요 등급 분류 기준
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600 mb-2">우수</div>
                        <div className="text-sm text-green-700">90점 이상</div>
                        <div className="text-xs text-green-600 mt-2">상위 10% 수준</div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-2">양호</div>
                        <div className="text-sm text-blue-700">70-89점</div>
                        <div className="text-xs text-blue-600 mt-2">상위 30% 수준</div>
                      </div>
                      <div className="p-4 bg-yellow-50 rounded-lg text-center">
                        <div className="text-2xl font-bold text-yellow-600 mb-2">보완 필요</div>
                        <div className="text-sm text-yellow-700">70점 미만</div>
                        <div className="text-xs text-yellow-600 mt-2">개선 권장</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 합격 예측 진단 기준 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-purple-600" />
                      합격 예측 진단 기준
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-2">예측 진단 구간별 서류 합격 확률</h4>
                        <div className="grid grid-cols-5 gap-2 text-center text-sm">
                          <div className="p-2 bg-green-100 rounded">
                            <div className="font-bold text-green-800">안정</div>
                            <div className="text-green-600">80~100%</div>
                          </div>
                          <div className="p-2 bg-blue-100 rounded">
                            <div className="font-bold text-blue-800">적정</div>
                            <div className="text-blue-600">60~80%</div>
                          </div>
                          <div className="p-2 bg-yellow-100 rounded">
                            <div className="font-bold text-yellow-800">소신</div>
                            <div className="text-yellow-600">30~60%</div>
                          </div>
                          <div className="p-2 bg-orange-100 rounded">
                            <div className="font-bold text-orange-800">도전</div>
                            <div className="text-orange-600">10~30%</div>
                          </div>
                          <div className="p-2 bg-red-100 rounded">
                            <div className="font-bold text-red-800">위험</div>
                            <div className="text-red-600">10% 미만</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">학생부종합전형 평가 항목</h4>
                        <p className="text-sm text-blue-700 mb-3">
                          대학마다 용어는 다르지만 '학업역량, 진로역량, 공동체역량'이라는 3대 공통 역량을 기준으로 평가
                        </p>
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div className="p-2 bg-white rounded border">
                            <div className="font-medium text-blue-800">학업역량</div>
                            <div className="text-xs text-blue-600">학습능력과 성취도</div>
                          </div>
                          <div className="p-2 bg-white rounded border">
                            <div className="font-medium text-blue-800">진로역량</div>
                            <div className="text-xs text-blue-600">전공적합성과 발전가능성</div>
                          </div>
                          <div className="p-2 bg-white rounded border">
                            <div className="font-medium text-blue-800">공동체역량</div>
                            <div className="text-xs text-blue-600">협업능력과 리더십</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* 박성민 학생 전공 역량 분석 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-indigo-600" />
                      박성민 학생의 전기전자공학과 주요 역량
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="p-4 bg-indigo-50 rounded-lg">
                        <h4 className="font-semibold text-indigo-800 mb-3">과학적 역량</h4>
                        <div className="space-y-2 text-sm text-indigo-700">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>논리적 사고력</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>체계적 문제해결</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>융합적 사고</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>창의적 접근</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-3">전기전자 역량</h4>
                        <div className="space-y-2 text-sm text-purple-700">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>회로 설계 이해</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>전자기학 기초</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>제어시스템 관심</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>실무 응용 능력</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-3">수학적 역량</h4>
                        <div className="space-y-2 text-sm text-green-700">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>미적분학 우수</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>수학적 모델링</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>논리적 추론</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>문제해결 능력</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          ;{/* 강화된 CTA 섹션 */}
          <Card className="mb-8 border-4 border-green-400 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-green-800 mb-2">🎯 맞춤형 추천 콘텐츠 확인하기</h3>
                  <p className="text-lg text-green-700 mb-4">
                    박성민 학생의 진단 결과를 바탕으로{" "}
                    <span className="font-bold text-blue-600">최적화된 학습 콘텐츠</span>를 추천해드립니다
                  </p>
                  <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Target className="h-4 w-4" />
                      <span>전공 맞춤형</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      <span>역량 기반 추천</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>성장 로드맵</span>
                    </div>
                  </div>
                </div>

                {/* 메인 추천 버튼 */}
                <Link href="/recommendations">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-4 text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <BookOpen className="h-6 w-6 mr-3" />
                    맞춤형 추천 콘텐츠 보기
                    <ArrowRight className="h-6 w-6 ml-3" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// 학교 이름 가져오기 함수
function getSchoolName(schoolId?: string) {
  const schoolNames: { [key: string]: string } = {
    "hana-academy": "하나고등학교",
    "seoul-science": "서울과학고등학교",
    "daewon-foreign": "대원외국어고등학교",
    "hanyoung-foreign": "한영외국어고등학교",
    "seoul-international": "서울국제고등학교",
    "gangnam-general": "강남고등학교",
    "kyunggi-general": "경기고등학교",
    "busan-science": "부산과학고등학교",
    "busan-foreign": "부산외국어고등학교",
    "daegu-science": "대구과학고등학교",
    "gwangju-science": "광주과학고등학교",
    "incheon-foreign": "인천외국어고등학교",
    "suwon-general": "수원고등학교",
    "anyang-general": "안양고등학교",
    other: "기타 학교",
  }

  return schoolNames[schoolId || "other"] || "선택된 학교"
}
