"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ProgressBar } from "@/components/progress-bar"
import type { UserData } from "@/lib/types"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BasicInfoPage() {
  const [formData, setFormData] = useState<UserData>({})
  const [favoriteSubjects, setFavoriteSubjects] = useState<string[]>([])

  useEffect(() => {
    const savedData = localStorage.getItem("userDiagnosisData")
    if (savedData) {
      const data = JSON.parse(savedData)
      setFormData(data)
      setFavoriteSubjects(data.favoriteSubjects || [])
    }
  }, [])

  const subjects = [
    "수학",
    "과학",
    "국어",
    "영어",
    "정보",
    "사회",
    "역사",
    "지리",
    "물리",
    "화학",
    "생물",
    "지구과학",
    "미술",
    "음악",
    "체육",
  ]

  const handleSubjectChange = (subject: string, checked: boolean) => {
    if (checked) {
      setFavoriteSubjects([...favoriteSubjects, subject])
    } else {
      setFavoriteSubjects(favoriteSubjects.filter((s) => s !== subject))
    }
  }

  const handleNext = () => {
    const updatedData = {
      ...formData,
      favoriteSubjects,
    }
    localStorage.setItem("userDiagnosisData", JSON.stringify(updatedData))
  }

  const isFormValid = formData.grade && formData.track && formData.gpa && favoriteSubjects.length > 0

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <ProgressBar currentStep={2} totalSteps={6} />

          <div className="flex items-center mb-6">
            <Link href="/school-selection">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                이전
              </Button>
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">기본 정보를 입력해주세요</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 학년 선택 */}
              <div className="space-y-2">
                <Label htmlFor="grade">학년</Label>
                <Select value={formData.grade} onValueChange={(value) => setFormData({ ...formData, grade: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="학년을 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="middle3">중학교 3학년</SelectItem>
                    <SelectItem value="high1">고등학교 1학년</SelectItem>
                    <SelectItem value="high2">고등학교 2학년</SelectItem>
                    <SelectItem value="high3">고등학교 3학년</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* 계열 선택 */}
              <div className="space-y-3">
                <Label>계열</Label>
                <div className="grid grid-cols-2 gap-3">
                  {["인문", "자연", "예체능", "통합"].map((track) => (
                    <div key={track} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={track}
                        name="track"
                        value={track}
                        checked={formData.track === track}
                        onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                        className="w-4 h-4 text-blue-600"
                      />
                      <Label htmlFor={track}>{track}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* 내신 평균 */}
              <div className="space-y-2">
                <Label htmlFor="gpa">내신 평균 (최근 학기 기준)</Label>
                <Select value={formData.gpa} onValueChange={(value) => setFormData({ ...formData, gpa: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="내신 등급을 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1.0">1등급 (1.0)</SelectItem>
                    <SelectItem value="2.0">2등급 (2.0)</SelectItem>
                    <SelectItem value="3.0">3등급 (3.0)</SelectItem>
                    <SelectItem value="4.0">4등급 (4.0)</SelectItem>
                    <SelectItem value="5.0">5등급 (5.0)</SelectItem>
                    <SelectItem value="6.0">6등급 (6.0)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* 선호 과목 */}
              <div className="space-y-3">
                <Label>선호 과목 (다중선택 가능)</Label>
                <div className="grid grid-cols-3 gap-3">
                  {subjects.map((subject) => (
                    <div key={subject} className="flex items-center space-x-2">
                      <Checkbox
                        id={subject}
                        checked={favoriteSubjects.includes(subject)}
                        onCheckedChange={(checked) => handleSubjectChange(subject, checked as boolean)}
                      />
                      <Label htmlFor={subject} className="text-sm">
                        {subject}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link href="/target-selection">
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
