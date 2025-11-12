import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { ChevronRight, ChevronLeft, Sparkles, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

const steps = [
  { id: 1, name: '대상 정보', fields: 4 },
  { id: 2, name: '교육 목표', fields: 3 },
  { id: 3, name: '제약 조건', fields: 3 },
  { id: 4, name: '검토 & 생성', fields: 0 },
];

export function BriefWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedBrief, setGeneratedBrief] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    targetGroup: '',
    ageRange: '',
    skillLevel: '',
    location: '',
    goal: '',
    duration: '',
    difficulty: '',
    space: '',
    budget: '',
    constraints: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedBrief({
        direction: '지역 시니어 대상 실생활 AI 도구 활용 교육으로, 스마트폰 중심의 접근성 높은 커리큘럼을 구성합니다.',
        personas: [
          { name: '디지털 탐험가', age: '55-65세', value: 'AI로 일상의 불편함 해결' },
          { name: '창작형 시니어', age: '60-70세', value: 'AI로 취미와 창작 활동 확장' },
        ],
        kpis: [
          { metric: '1주차 완료율', target: '80%', rationale: '쉬운 진입장벽으로 높은 초기 완료율 기대' },
          { metric: '과제 제출률', target: '70%', rationale: '모바일 실습으로 접근성 향상' },
          { metric: 'NPS', target: '50+', rationale: '실용적 가치 제공으로 추천 의향 증가' },
        ],
        risks: [
          { risk: '디지털 기기 숙련도 편차', mitigation: '1:1 서포트 시간 배정, 동료 학습 유도' },
          { risk: '공공장소 네트워크 불안정', mitigation: '오프라인 자료 병행, 핫스팟 대안 안내' },
        ],
        qualityScore: 78,
        generatedAt: new Date().toISOString(),
      });
      setIsGenerating(false);
      toast.success('브리프가 성공적으로 생성되었습니다!');
    }, 2500);
  };

  const completionPercentage = (currentStep / steps.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            브리프 마법사 (FR-01)
          </CardTitle>
          <CardDescription>
            10-15문항을 완료하면 60초 내에 교육 방향성, 페르소나, KPI, 리스크가 자동 생성됩니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Progress */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">진행률</span>
                <span className="text-slate-900">{Math.round(completionPercentage)}%</span>
              </div>
              <Progress value={completionPercentage} className="h-2" />
              <div className="flex justify-between mt-3">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-center gap-2 ${
                      step.id === currentStep
                        ? 'text-indigo-600'
                        : step.id < currentStep
                        ? 'text-green-600'
                        : 'text-slate-400'
                    }`}
                  >
                    {step.id < currentStep ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs">
                        {step.id}
                      </div>
                    )}
                    <span className="text-sm hidden md:inline">{step.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 1: Target Info */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-slate-900">1. 대상 정보</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="targetGroup">대상군</Label>
                    <Input
                      id="targetGroup"
                      placeholder="예: 지역 시니어, 소상공인, 청년층"
                      value={formData.targetGroup}
                      onChange={(e) => handleInputChange('targetGroup', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ageRange">연령대</Label>
                    <Input
                      id="ageRange"
                      placeholder="예: 55-70세"
                      value={formData.ageRange}
                      onChange={(e) => handleInputChange('ageRange', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skillLevel">숙련도</Label>
                    <Select value={formData.skillLevel} onValueChange={(val) => handleInputChange('skillLevel', val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">초급 - AI 경험 없음</SelectItem>
                        <SelectItem value="intermediate">중급 - 기본 디지털 도구 사용</SelectItem>
                        <SelectItem value="advanced">고급 - 적극적 디지털 활용</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">지역/장소</Label>
                    <Input
                      id="location"
                      placeholder="예: 서울 강남구 복지관"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Goals */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-slate-900">2. 교육 목표</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="goal">학습 목표</Label>
                    <Textarea
                      id="goal"
                      placeholder="예: AI 이미지 생성 도구로 개인 포스터 제작, 번역 도구로 여행 준비"
                      value={formData.goal}
                      onChange={(e) => handleInputChange('goal', e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="duration">교육 기간</Label>
                      <Select value={formData.duration} onValueChange={(val) => handleInputChange('duration', val)}>
                        <SelectTrigger>
                          <SelectValue placeholder="선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="4weeks">4주 과정</SelectItem>
                          <SelectItem value="8weeks">8주 과정</SelectItem>
                          <SelectItem value="12weeks">12주 과정</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="difficulty">난이도</Label>
                      <Select value={formData.difficulty} onValueChange={(val) => handleInputChange('difficulty', val)}>
                        <SelectTrigger>
                          <SelectValue placeholder="선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">쉬움 - 기본 활용</SelectItem>
                          <SelectItem value="medium">보통 - 실전 프로젝트</SelectItem>
                          <SelectItem value="hard">어려움 - 심화 응용</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Constraints */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-slate-900">3. 제약 조건</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="space">교육 공간</Label>
                    <Input
                      id="space"
                      placeholder="예: 30명 수용 가능, WiFi 있음, 빔프로젝터 1대"
                      value={formData.space}
                      onChange={(e) => handleInputChange('space', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">예산 범위</Label>
                    <Input
                      id="budget"
                      placeholder="예: 교재비 없음, 다과 제공 가능"
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="constraints">기타 제약사항</Label>
                    <Textarea
                      id="constraints"
                      placeholder="예: 참가자 대부분 스마트폰만 보유, 앱 설치 거부감 있음"
                      value={formData.constraints}
                      onChange={(e) => handleInputChange('constraints', e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Generate */}
            {currentStep === 4 && !generatedBrief && (
              <div className="space-y-4">
                <h3 className="text-slate-900">4. 검토 및 생성</h3>
                <Card className="bg-slate-50">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-slate-600">대상군:</span>
                        <span className="text-slate-900">{formData.targetGroup || '-'}</span>
                        <span className="text-slate-600">연령대:</span>
                        <span className="text-slate-900">{formData.ageRange || '-'}</span>
                        <span className="text-slate-600">숙련도:</span>
                        <span className="text-slate-900">{formData.skillLevel || '-'}</span>
                        <span className="text-slate-600">기간:</span>
                        <span className="text-slate-900">{formData.duration || '-'}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Clock className="w-5 h-5 mr-2 animate-spin" />
                      AI 브리프 생성 중... (약 60초)
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      AI 브리프 생성하기
                    </>
                  )}
                </Button>
              </div>
            )}

            {/* Generated Brief */}
            {generatedBrief && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-slate-900">생성된 브리프</h3>
                  <Badge variant={generatedBrief.qualityScore >= 70 ? 'default' : 'secondary'}>
                    품질 점수: {generatedBrief.qualityScore}/100
                  </Badge>
                </div>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      교육 방향성
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">{generatedBrief.direction}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">페르소나별 가치 제안</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {generatedBrief.personas.map((persona: any, idx: number) => (
                        <div key={idx} className="p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-slate-900">{persona.name}</p>
                              <p className="text-sm text-slate-600">{persona.age}</p>
                            </div>
                            <Badge variant="outline">{persona.value}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">KPI 제안</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {generatedBrief.kpis.map((kpi: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div>
                            <p className="text-slate-900">{kpi.metric}</p>
                            <p className="text-xs text-slate-600">{kpi.rationale}</p>
                          </div>
                          <Badge>{kpi.target}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                      리스크 & 완화 방안
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {generatedBrief.risks.map((risk: any, idx: number) => (
                        <div key={idx} className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                          <p className="text-slate-900">{risk.risk}</p>
                          <p className="text-sm text-slate-600 mt-1">→ {risk.mitigation}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Button className="w-full" size="lg">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  브리프 저장 및 콘텐츠 생성으로 이동
                </Button>
              </div>
            )}

            {/* Navigation */}
            {!generatedBrief && (
              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  이전
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentStep === steps.length}
                >
                  다음
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
