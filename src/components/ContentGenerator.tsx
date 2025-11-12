import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Sparkles, 
  FileText, 
  Presentation, 
  Code, 
  CheckCircle, 
  Clock,
  Download,
  Eye,
  ArrowRight
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

const generationPipeline = [
  { id: 'direction', name: '교육 방향성', time: '15s', status: 'completed' },
  { id: 'curriculum', name: '커리큘럼', time: '30s', status: 'completed' },
  { id: 'lessons', name: '주차별 교안', time: '45s', status: 'completed' },
  { id: 'slides', name: '슬라이드', time: '120s', status: 'generating' },
  { id: 'templates', name: '실습 템플릿', time: '40s', status: 'pending' },
  { id: 'tools', name: 'AI 도구 추천', time: '20s', status: 'pending' },
];

const curriculumData = {
  title: '시니어를 위한 실생활 AI 활용',
  duration: '8주 과정',
  weeks: [
    { week: 1, title: 'AI와 친해지기', topics: ['ChatGPT 기본', '질문하는 법'], activities: '간단한 대화 실습' },
    { week: 2, title: 'AI로 이미지 만들기', topics: ['DALL-E 소개', '포스터 제작'], activities: '나만의 포스터 만들기' },
    { week: 3, title: 'AI 번역과 요약', topics: ['번역 도구', '뉴스 요약'], activities: '여행 준비 실습' },
    { week: 4, title: 'AI 음성 비서', topics: ['음성 명령', '일정 관리'], activities: '스마트폰 비서 활용' },
  ],
};

const slideStructure = [
  { type: '표지', count: 1, status: 'completed' },
  { type: '학습 목표', count: 1, status: 'completed' },
  { type: '예시 & 설명', count: 5, status: 'generating' },
  { type: '실습 가이드', count: 3, status: 'pending' },
  { type: '퀴즈', count: 2, status: 'pending' },
  { type: '요약 & 과제', count: 1, status: 'pending' },
  { type: '강사용 메모', count: 1, status: 'pending' },
];

export function ContentGenerator() {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    toast.success('콘텐츠 생성이 시작되었습니다');
    setTimeout(() => {
      setIsGenerating(false);
      toast.success('슬라이드 생성이 완료되었습니다 (2분 10초)');
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-900 mb-2">콘텐츠 자동 생성 (FR-02)</h2>
        <p className="text-slate-600">브리프부터 슬라이드, 실습 템플릿까지 자동 생성 파이프라인</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pipeline">생성 파이프라인</TabsTrigger>
          <TabsTrigger value="curriculum">커리큘럼</TabsTrigger>
          <TabsTrigger value="slides">슬라이드</TabsTrigger>
          <TabsTrigger value="templates">실습 템플릿</TabsTrigger>
        </TabsList>

        <TabsContent value="pipeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-indigo-600" />
                생성 파이프라인 현황
              </CardTitle>
              <CardDescription>브리프 → 교육방향성 → 커리큘럼 → 주차별 교안 → 슬라이드 → 실습템플릿 → AI도구</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {generationPipeline.map((stage, index) => (
                  <div key={stage.id} className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {stage.status === 'completed' ? (
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                      ) : stage.status === 'generating' ? (
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <Clock className="w-6 h-6 text-indigo-600 animate-spin" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                          {index + 1}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-900">{stage.name}</span>
                        <Badge
                          variant={
                            stage.status === 'completed'
                              ? 'default'
                              : stage.status === 'generating'
                              ? 'secondary'
                              : 'outline'
                          }
                        >
                          {stage.status === 'completed'
                            ? '완료'
                            : stage.status === 'generating'
                            ? '생성 중'
                            : '대기'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={
                            stage.status === 'completed' ? 100 : stage.status === 'generating' ? 60 : 0
                          }
                          className="h-2 flex-1"
                        />
                        <span className="text-xs text-slate-500">{stage.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-900">전체 진행률</p>
                    <p className="text-sm text-slate-600">예상 완료 시간: 4분 30초</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-900">50%</p>
                    <p className="text-xs text-slate-600">3/6 단계 완료</p>
                  </div>
                </div>
                <Progress value={50} className="h-3 mt-3" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="curriculum" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{curriculumData.title}</CardTitle>
                  <CardDescription>{curriculumData.duration}</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  전체 보기
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {curriculumData.weeks.map((week) => (
                  <Card key={week.week} className="border-slate-200">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                          <span className="text-indigo-600">W{week.week}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-slate-900 mb-2">{week.title}</h4>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {week.topics.map((topic, idx) => (
                              <Badge key={idx} variant="secondary">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm text-slate-600">
                            <FileText className="w-4 h-4 inline mr-1" />
                            실습: {week.activities}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="slides" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Presentation className="w-6 h-6 text-purple-600" />
                슬라이드 생성 현황
              </CardTitle>
              <CardDescription>
                교안→슬라이드 변환 2분 이내 | 표지/목표/예시/실습/퀴즈/요약 + 강사용 메모
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {slideStructure.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Presentation className="w-5 h-5 text-slate-400" />
                      <div>
                        <p className="text-slate-900">{item.type}</p>
                        <p className="text-xs text-slate-600">{item.count}개 슬라이드</p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        item.status === 'completed'
                          ? 'default'
                          : item.status === 'generating'
                          ? 'secondary'
                          : 'outline'
                      }
                    >
                      {item.status === 'completed'
                        ? '완료'
                        : item.status === 'generating'
                        ? '생성 중'
                        : '대기'}
                    </Badge>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <Button className="flex-1" onClick={handleGenerate} disabled={isGenerating}>
                  {isGenerating ? (
                    <>
                      <Clock className="w-4 h-4 mr-2 animate-spin" />
                      생성 중...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      슬라이드 생성하기
                    </>
                  )}
                </Button>
                <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  미리보기
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-6 h-6 text-green-600" />
                실습 템플릿 & AI 도구 (FR-03)
              </CardTitle>
              <CardDescription>
                스마트폰 우선, 앱 설치 없이 모바일 가이드로 10분 내 결과물 산출
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="text-sm">이미지 생성 실습</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">도구</span>
                        <Badge>DALL-E 3</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">소요 시간</span>
                        <span className="text-slate-900">10분</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">결과물</span>
                        <span className="text-slate-900">개인 포스터</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full mt-2">
                        <Download className="w-4 h-4 mr-2" />
                        템플릿 다운로드
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-sm">번역 & 요약 실습</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">도구</span>
                        <Badge>Papago, ChatGPT</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">소요 시간</span>
                        <span className="text-slate-900">8분</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">결과물</span>
                        <span className="text-slate-900">여행 일정표</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full mt-2">
                        <Download className="w-4 h-4 mr-2" />
                        템플릿 다운로드
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-sm">포스터 제작 실습</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">도구</span>
                        <Badge>Canva Mobile</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">소요 시간</span>
                        <span className="text-slate-900">12분</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">결과물</span>
                        <span className="text-slate-900">행사 포스터</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full mt-2">
                        <Download className="w-4 h-4 mr-2" />
                        템플릿 다운로드
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-sm">설문 조사 실습</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">도구</span>
                        <Badge>Google Forms</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">소요 시간</span>
                        <span className="text-slate-900">9분</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">결과물</span>
                        <span className="text-slate-900">설문 양식</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full mt-2">
                        <Download className="w-4 h-4 mr-2" />
                        템플릿 다운로드
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
