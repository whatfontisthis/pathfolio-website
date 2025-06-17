"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ProgressBar } from "@/components/progress-bar"
import type { UserData } from "@/lib/types"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PersonalityTestPage() {
  const [formData, setFormData] = useState<UserData>({})
  const [answers, setAnswers] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    const savedData = localStorage.getItem("userDiagnosisData")
    if (savedData) {
      const data = JSON.parse(savedData)
      setFormData(data)
      setAnswers(data.personality || {})
    }
  }, [])

  const questions = [
    {
      id: "question1",
      text: "나는 혼자 탐구하거나 정리하는 걸 좋아한다",
      type: "analytical",
    },
    {
      id: "question2",
      text: "프로젝트를 주도적으로 기획해본 적이 있다",
      type: "executive",
    },
    {
      id: "question3",
      text: "문제를 단계별로 해결하는 걸 좋아한다",
      type: "analytical",
    },
    {
      id: "question4",
      text: "친구들과 토론하거나 발표하는 걸 좋아한다",
      type: "executive",
    },
    {
      id: "question5",
      text: "새로운 아이디어를 생각해내는 것을 좋아한다",
      type: "creative",
    },
  ]

  const handleAnswerChange = (questionId: string, value: boolean) => {
    setAnswers({ ...answers, [questionId]: value })
  }

  const calculatePersonalityType = () => {
    const scores = { analytical: 0, creative: 0, executive: 0 }

    questions.forEach((question) => {
      if (answers[question.id] === true) {
        scores[question.type as keyof typeof scores]++
      }
    })

    const maxScore = Math.max(...Object.values(scores))
    const personalityType = Object.keys(scores).find((key) => scores[key as keyof typeof scores] === maxScore) as
      | "analytical"
      | "creative"
      | "executive"

    return personalityType
  }

  const handleNext = () => {
    const personalityType = calculatePersonalityType()
    const updatedData = {
      ...formData,
      personality: answers,
      personalityType,
    }
    localStorage.setItem("userDiagnosisData", JSON.stringify(updatedData))
  }

  const isFormValid = Object.keys(answers).length === questions.length

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <ProgressBar currentStep={4} totalSteps={6} />

          <div className="flex items-center mb-6">
            <Link href="/target-selection">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                이전
              </Button>
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">간단한 성향 테스트</CardTitle>
              <p className="text-gray-600">각 문항에 대해 자신의 생각과 가장 가까운 답을 선택해주세요.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {questions.map((question, index) => (
                <div key={question.id} className="space-y-3">
                  <Label className="text-base font-medium">
                    {index + 1}. {question.text}
                  </Label>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={`${question.id}-yes`}
                        name={question.id}
                        checked={answers[question.id] === true}
                        onChange={() => handleAnswerChange(question.id, true)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <Label htmlFor={`${question.id}-yes`}>예</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={`${question.id}-no`}
                        name={question.id}
                        checked={answers[question.id] === false}
                        onChange={() => handleAnswerChange(question.id, false)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <Label htmlFor={`${question.id}-no`}>아니오</Label>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-6">
                <Link href="/results">
                  <Button className="w-full" disabled={!isFormValid} onClick={handleNext}>
                    결과 보기
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
