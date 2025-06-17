export default function IntroductionLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* 헤더 스켈레톤 */}
          <div className="flex items-center mb-8">
            <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* 메인 제목 스켈레톤 */}
          <div className="text-center mb-16">
            <div className="w-24 h-6 bg-gray-200 rounded-full mx-auto mb-6 animate-pulse"></div>
            <div className="w-96 h-12 bg-gray-200 rounded mx-auto mb-6 animate-pulse"></div>
            <div className="w-full max-w-2xl h-6 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-full max-w-xl h-6 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>
          </div>

          {/* 카드 그리드 스켈레톤 */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>

          {/* 섹션 스켈레톤 */}
          <div className="space-y-20">
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <div className="text-center mb-12">
                  <div className="w-48 h-8 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
                  <div className="w-96 h-6 bg-gray-200 rounded mx-auto animate-pulse"></div>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
