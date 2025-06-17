"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ProgressBar } from "@/components/progress-bar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import type { UserData, University } from "@/lib/types"
import Link from "next/link"
import { ArrowLeft, Search, X } from "lucide-react"

// 대학 목록 샘플 데이터
const universities: University[] = [
  {
    id: "1",
    name: "서울대학교",
    departments: [
      { id: "1-1", name: "컴퓨터공학부" },
      { id: "1-2", name: "전기정보공학부" },
      { id: "1-3", name: "산업공학과" },
      { id: "1-4", name: "통계학과" },
    ],
  },
  {
    id: "2",
    name: "연세대학교",
    departments: [
      { id: "2-1", name: "컴퓨터과학과" },
      { id: "2-2", name: "전기전자공학부" },
      { id: "2-3", name: "산업공학과" },
      { id: "2-4", name: "응용통계학과" },
    ],
  },
  {
    id: "3",
    name: "고려대학교",
    departments: [
      { id: "3-1", name: "컴퓨터학과" },
      { id: "3-2", name: "전자공학부" },
      { id: "3-3", name: "산업경영공학부" },
      { id: "3-4", name: "통계학과" },
    ],
  },
  {
    id: "4",
    name: "한양대학교",
    departments: [
      { id: "4-1", name: "컴퓨터소프트웨어학부" },
      { id: "4-2", name: "전자공학부" },
      { id: "4-3", name: "산업공학과" },
      { id: "4-4", name: "데이터사이언스학과" },
    ],
  },
  {
    id: "5",
    name: "서강대학교",
    departments: [
      { id: "5-1", name: "컴퓨터공학과" },
      { id: "5-2", name: "전자공학과" },
      { id: "5-3", name: "기계공학과" },
    ],
  },
]

export default function TargetSelectionPage() {
  const [formData, setFormData] = useState<UserData>({})
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([])
  const [selectedMajor, setSelectedMajor] = useState("")

  useEffect(() => {
    const savedData = localStorage.getItem("userDiagnosisData")
    if (savedData) {
      const data = JSON.parse(savedData)
      setFormData(data)
      setSelectedUniversities(data.targetUniversities || [])
      setSelectedMajor(data.major || "")
    }
  }, [])

  const filteredUniversities = universities.filter((uni) => uni.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleUniversityToggle = (universityName: string) => {
    if (selectedUniversities.includes(universityName)) {
      setSelectedUniversities(selectedUniversities.filter((uni) => uni !== universityName))
    } else {
      setSelectedUniversities([...selectedUniversities, universityName])
    }
  }

  const handleNext = () => {
    const updatedData = {
      ...formData,
      major: selectedMajor,
      targetUniversities: selectedUniversities,
    }
    localStorage.setItem("userDiagnosisData", JSON.stringify(updatedData))
  }

  const isFormValid = selectedMajor && selectedUniversities.length > 0

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <ProgressBar currentStep={2} totalSteps={5} />

          <div className="flex items-center mb-6">
            <Link href="/basic-info">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                이전
              </Button>
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">목표 대학 및 희망 전공</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 희망 전공 */}
              <div className="space-y-2">
                <Label htmlFor="major">희망 전공</Label>
                <Input
                  id="major"
                  placeholder="예: 컴퓨터공학과, 의예과"
                  value={selectedMajor}
                  onChange={(e) => setSelectedMajor(e.target.value)}
                />
              </div>

              {/* 목표 대학 */}
              <div className="space-y-3">
                <Label>목표 대학 (다중선택 가능)</Label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="대학명 검색"
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* 선택된 대학 표시 */}
                {selectedUniversities.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedUniversities.map((uni) => (
                      <Badge key={uni} variant="secondary" className="flex items-center gap-1 py-1.5">
                        {uni}
                        <button
                          onClick={() => handleUniversityToggle(uni)}
                          className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}

                {/* 대학 검색 결과 */}
                <Card className="mt-2">
                  <CardContent className="p-2">
                    <div className="max-h-60 overflow-y-auto">
                      {filteredUniversities.length > 0 ? (
                        filteredUniversities.map((uni) => (
                          <div key={uni.id} className="p-2 hover:bg-gray-100 rounded-md">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Checkbox
                                  id={`uni-${uni.id}`}
                                  checked={selectedUniversities.includes(uni.name)}
                                  onCheckedChange={() => handleUniversityToggle(uni.name)}
                                />
                                <Label htmlFor={`uni-${uni.id}`} className="cursor-pointer">
                                  {uni.name}
                                </Label>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {uni.departments.length}개 학과
                              </Badge>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-4 text-center text-gray-500">검색 결과가 없습니다</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-6">
                <Link href="/personality-test">
                  <Button className="w-full" disabled={!isFormValid} onClick={handleNext}>
                    다음 단계로
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
