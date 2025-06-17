"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ProgressBar } from "@/components/progress-bar"
import type { UserData } from "@/lib/types"
import Link from "next/link"
import { ArrowLeft, Upload, School, FileText, CheckCircle2, AlertCircle } from "lucide-react"

export default function SchoolSelectionPage() {
  const [formData, setFormData] = useState<UserData>({})
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")

  useEffect(() => {
    const savedData = localStorage.getItem("userDiagnosisData")
    if (savedData) {
      const data = JSON.parse(savedData)
      setFormData(data)
    }
  }, [])

  // 전국 주요 고등학교 목록 (하나고등학교 추가)
  const schools = [
    { id: "hana-academy", name: "하나고등학교", region: "서울", type: "국제고" },
    { id: "seoul-science", name: "서울과학고등학교", region: "서울", type: "과학고" },
    { id: "daewon-foreign", name: "대원외국어고등학교", region: "서울", type: "외국어고" },
    { id: "hanyoung-foreign", name: "한영외국어고등학교", region: "서울", type: "외국어고" },
    { id: "seoul-international", name: "서울국제고등학교", region: "서울", type: "국제고" },
    { id: "gangnam-general", name: "강남고등학교", region: "서울", type: "일반고" },
    { id: "kyunggi-general", name: "경기고등학교", region: "서울", type: "일반고" },
    { id: "busan-science", name: "부산과학고등학교", region: "부산", type: "과학고" },
    { id: "busan-foreign", name: "부산외국어고등학교", region: "부산", type: "외국어고" },
    { id: "daegu-science", name: "대구과학고등학교", region: "대구", type: "과학고" },
    { id: "gwangju-science", name: "광주과학고등학교", region: "광주", type: "과학고" },
    { id: "incheon-foreign", name: "인천외국어고등학교", region: "인천", type: "외국어고" },
    { id: "suwon-general", name: "수원고등학교", region: "경기", type: "일반고" },
    { id: "anyang-general", name: "안양고등학교", region: "경기", type: "일반고" },
    { id: "other", name: "기타 (직접 입력)", region: "기타", type: "기타" },
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setUploadStatus("uploading")

      // 실제로는 서버에 파일을 업로드해야 함
      // 여기서는 시뮬레이션
      setTimeout(() => {
        setUploadStatus("success")
        setFormData({ ...formData, recordFile: file.name })
      }, 2000)
    }
  }

  const handleNext = () => {
    const updatedData = {
      ...formData,
      recordFile: selectedFile?.name,
    }
    localStorage.setItem("userDiagnosisData", JSON.stringify(updatedData))
  }

  const isFormValid = formData.school

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <ProgressBar currentStep={1} totalSteps={6} />

          <div className="flex items-center mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                이전
              </Button>
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <School className="h-6 w-6 text-blue-600" />
                재학 중인 학교를 선택해주세요
              </CardTitle>
              <p className="text-gray-600">
                학교별 맞춤형 교과목 분석과 정확한 진단을 위해 재학 중인 학교 정보가 필요합니다.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 학교 선택 */}
              <div className="space-y-2">
                <Label htmlFor="school" className="flex items-center gap-2">
                  <span>재학 중인 학교</span>
                  <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.school} onValueChange={(value) => setFormData({ ...formData, school: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="학교를 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {schools.map((school) => (
                      <SelectItem key={school.id} value={school.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{school.name}</span>
                          <div className="flex gap-2 ml-4">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">{school.region}</span>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{school.type}</span>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* 생활기록부 업로드 */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Label className="text-base font-medium">생활기록부 업로드</Label>
                  <span className="text-sm text-gray-500">(선택사항)</span>
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    생활기록부를 업로드하시면 더욱 정확하고 개인 맞춤형 진단 결과를 제공받을 수 있습니다. 업로드하지
                    않으셔도 진단은 가능하지만, 일반적인 분석 결과가 제공됩니다.
                  </AlertDescription>
                </Alert>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <input
                    type="file"
                    id="record-upload"
                    accept=".pdf,.hwp,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label htmlFor="record-upload" className="cursor-pointer">
                    <div className="space-y-3">
                      {uploadStatus === "idle" && (
                        <>
                          <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                          <div>
                            <p className="text-lg font-medium text-gray-700">생활기록부 파일을 업로드하세요</p>
                            <p className="text-sm text-gray-500">PDF, HWP, DOC, DOCX 파일만 지원됩니다</p>
                          </div>
                        </>
                      )}

                      {uploadStatus === "uploading" && (
                        <>
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                          <p className="text-lg font-medium text-blue-600">파일 업로드 중...</p>
                        </>
                      )}

                      {uploadStatus === "success" && (
                        <>
                          <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" />
                          <div>
                            <p className="text-lg font-medium text-green-600">업로드 완료!</p>
                            <p className="text-sm text-gray-600">{selectedFile?.name}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </label>
                </div>

                {uploadStatus === "success" && (
                  <Alert className="bg-green-50 border-green-200">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      생활기록부가 성공적으로 업로드되었습니다. 이제 학교별 맞춤 교과목과 개인별 세부 분석이 가능합니다!
                    </AlertDescription>
                  </Alert>
                )}
              </div>

              {/* 정확도 안내 */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  진단 정확도 향상 안내
                </h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <p>✅ 학교 선택: 해당 학교의 개설 교과목 기준으로 맞춤 분석</p>
                  <p>✅ 생기부 업로드: 개인별 성취도와 활동 내역 기반 정밀 분석</p>
                  <p>
                    📊 두 정보가 모두 제공되면 <strong>95% 이상의 정확도</strong>로 진단 가능
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/basic-info">
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
