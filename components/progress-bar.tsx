interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100

  const stepNames = ["학교 선택", "기본 정보", "목표 설정", "성향 테스트", "결과 분석", "콘텐츠 추천"]

  return (
    <div className="w-full mb-8">
      <div className="bg-gray-200 rounded-full h-2 mb-4">
        <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
      <div className="text-sm text-gray-600 text-center">
        <span className="font-medium">{stepNames[currentStep - 1]}</span> ({currentStep}/{totalSteps} 단계)
      </div>
    </div>
  )
}
