import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  TrendingUp, 
  MessageSquare, 
  CheckCircle, 
  Users,
  ThumbsUp,
  ArrowRight,
  Lightbulb,
  Target
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const feedbackData = [
  { week: 'W1', nps: 48, completion: 68, satisfaction: 4.2 },
  { week: 'W2', nps: 52, completion: 65, satisfaction: 4.3 },
  { week: 'W3', nps: 55, completion: 62, satisfaction: 4.4 },
  { week: 'W4', nps: 58, completion: 70, satisfaction: 4.5 },
];

const improvementCards = [
  {
    id: 1,
    priority: 'high',
    title: '2주차 실습 시간 단축 필요',
    source: '설문 15건, 현장메모 3건',
    insight: '참가자의 67%가 "시간이 부족하다"고 응답. 평균 완료 시간 18분 → 목표 10분',
    recommendation: '실습 단계를 3단계 → 2단계로 간소화, 보조 자료 강화',
    impact: '완료율 +12%p 예상',
    effort: '3시간',
    status: 'approved',
  },
  {
    id: 2,
    priority: 'medium',
    title: 'ChatGPT 예시 최신화',
    source: '강사 피드백 2건',
    insight: '현재 예시가 GPT-3.5 기반, GPT-4o 인터페이스와 상이',
    recommendation: '예시 스크린샷 및 프롬프트 업데이트',
    impact: '혼란 감소, 만족도 +0.3 예상',
    effort: '1시간',
    status: 'in-progress',
  },
  {
    id: 3,
    priority: 'low',
    title: '퀴즈 추가 제안',
    source: 'NPS 분석',
    insight: '높은 NPS 응답자(9-10점)는 평균 2.3개 퀴즈 풀이. 낮은 NPS(0-6점)는 0.8개',
    recommendation: '각 주차 퀴즈 1개 → 2개 증가',
    impact: 'NPS +5점 예상',
    effort: '2시간',
    status: 'pending',
  },
];

const performanceMetrics = [
  { metric: '총 설문 수집', value: 156, change: '+23', trend: 'up' },
  { metric: '평균 NPS', value: 53, change: '+5', trend: 'up' },
  { metric: '평균 과제 완료율', value: '66%', change: '+11%p', trend: 'up' },
  { metric: '평균 완주율', value: '72%', change: '+8%p', trend: 'up' },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-900 mb-2">성과 기반 개선 루프 (FR-05)</h2>
        <p className="text-slate-600">데이터 수집 → 분석 → 개선 제안 → 우선순위 → 다음 릴리즈 (3일 이내)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {performanceMetrics.map((metric, idx) => (
          <Card key={idx}>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-sm text-slate-600">{metric.metric}</p>
                <div className="flex items-baseline justify-between">
                  <span className="text-slate-900">{metric.value}</span>
                  <Badge variant="secondary" className="text-xs">
                    {metric.change}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              주차별 성과 추이
            </CardTitle>
            <CardDescription>NPS, 완료율, 만족도 변화</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={feedbackData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="week" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }} 
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="nps" 
                  stroke="#6366f1" 
                  strokeWidth={2}
                  name="NPS"
                  dot={{ fill: '#6366f1' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="completion" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="완료율(%)"
                  dot={{ fill: '#10b981' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              피드백 수집 현황
            </CardTitle>
            <CardDescription>지난 30일간 수집 데이터</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-indigo-600" />
                  <span className="text-slate-900">설문 응답</span>
                </div>
                <span className="text-slate-900">156건</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <ThumbsUp className="w-5 h-5 text-green-600" />
                  <span className="text-slate-900">NPS 응답</span>
                </div>
                <span className="text-slate-900">134건</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-900">과제 제출</span>
                </div>
                <span className="text-slate-900">89건</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-slate-900">현장 메모</span>
                </div>
                <span className="text-slate-900">23건</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-amber-600" />
            AI 생성 개선 제안 카드
          </CardTitle>
          <CardDescription>우선순위 기반 자동 생성 · 평균 반영 시간 2.8일</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {improvementCards.map((card) => (
              <Card 
                key={card.id} 
                className={
                  card.priority === 'high' 
                    ? 'border-red-200 bg-red-50' 
                    : card.priority === 'medium'
                    ? 'border-amber-200 bg-amber-50'
                    : 'border-slate-200'
                }
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant={
                            card.priority === 'high'
                              ? 'destructive'
                              : card.priority === 'medium'
                              ? 'default'
                              : 'secondary'
                          }
                        >
                          {card.priority === 'high' ? '높음' : card.priority === 'medium' ? '중간' : '낮음'}
                        </Badge>
                        <Badge variant="outline">
                          {card.status === 'approved'
                            ? '승인됨'
                            : card.status === 'in-progress'
                            ? '진행 중'
                            : '대기'}
                        </Badge>
                      </div>
                      <h4 className="text-slate-900 mb-2">{card.title}</h4>
                      <p className="text-xs text-slate-600 mb-3">📊 출처: {card.source}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-xs text-slate-600 mb-1">💡 인사이트</p>
                      <p className="text-sm text-slate-700">{card.insight}</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <p className="text-xs text-slate-600 mb-1">✅ 개선 방안</p>
                      <p className="text-sm text-slate-700">{card.recommendation}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-xs">
                      <div>
                        <span className="text-slate-600">예상 효과: </span>
                        <span className="text-green-600">{card.impact}</span>
                      </div>
                      <div>
                        <span className="text-slate-600">작업 시간: </span>
                        <span className="text-slate-900">{card.effort}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Target className="w-4 h-4 mr-1" />
                      반영하기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button className="w-full mt-4">
            <ArrowRight className="w-4 h-4 mr-2" />
            다음 릴리즈 계획 보기
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
