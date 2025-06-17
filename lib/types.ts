export interface UserData {
  // Step 1 - 학교 선택
  school?: string
  recordFile?: string

  // Step 2 - 기본 정보
  grade?: string
  track?: string
  gpa?: string
  favoriteSubjects?: string[]

  // Step 3 - 진로/전공
  major?: string
  university?: string

  // 대학 목록
  targetUniversities?: string[]

  // Step 4 - 성향 테스트
  personality?: {
    question1?: boolean
    question2?: boolean
    question3?: boolean
    question4?: boolean
    question5?: boolean
  }
  personalityType?: "analytical" | "creative" | "executive"

  // Step 5 - 결과
  compatibilityScore?: number
  recommendedSubjects?: string[]
  recommendedActivities?: string[]

  // 생기부 분석 결과
  recordAnalysis?: {
    academicPerformance?: {
      overall: number // 1-100 점수
      strengths: string[]
      weaknesses: string[]
    }
    subjectAnalysis?: {
      [subject: string]: {
        grade: number // 1-9 등급
        comment: string
      }
    }
    activityAnalysis?: {
      categories: {
        [category: string]: number // 1-100 점수
      }
      keywords: string[]
      highlights: string[]
    }
    recommendedMajors?: {
      major: string
      compatibility: number
      reason: string
    }[]
    improvementAreas?: {
      area: string
      suggestion: string
      priority: "high" | "medium" | "low"
    }[]
    universityFit?: {
      [university: string]: {
        overallFit: number
        strengths: string[]
        weaknesses: string[]
      }
    }
    // 새로 추가된 분석 데이터
    careerCompatibility?: {
      [key: string]: number
    }
    requiredSubjects?: {
      name: string
      type: string
      reason: string
    }[]
    recommendedActivities?: {
      category: string
      items: string[]
    }[]
    expectedRecords?: string[]
    roadmap?: {
      [period: string]: string[]
    }
    // 학교별 맞춤 데이터
    schoolSubjects?: string[]
    subjectRoadmap?: {
      [grade: string]: string[]
    }
  }
}

export interface ContentCard {
  id: string
  title: string
  thumbnail: string
  description: string
  effect: string
  type: "free" | "paid"
  price?: string
  category?: string
  difficulty?: "beginner" | "intermediate" | "advanced"
  keywords?: string[]
}

export interface University {
  id: string
  name: string
  campus?: string
  departments: {
    id: string
    name: string
    admissionRate?: number
    cutoffScore?: number
  }[]
}

export interface ProgramCategory {
  id: string
  title: string
  description: string
  keywords: string[]
  tasks: ProgramTask[]
}

export interface ProgramTask {
  id: string
  difficulty: "beginner" | "intermediate" | "advanced"
  title: string
  description: string
  sespecExample: string
  deliverables?: string[]
  extensionTask?: string
}
