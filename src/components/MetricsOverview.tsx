import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { ArrowUp, ArrowDown, Clock, CheckCircle, Target, RefreshCw, TrendingUp } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const kpiData = [
  { name: '제작 시간', current: '30분', target: '10분', progress: 62, trend: 'up', change: '+85%' },
  { name: '1주차 완료율', current: '68%', target: '75%', progress: 91, trend: 'up', change: '+13%p' },
  { name: '타깃 적합도', current: '72%', target: '80%', progress: 90, trend: 'up', change: '+12%p' },
  { name: '업데이트 리드타임', current: '5일', target: '3일', progress: 60, trend: 'up', change: '-64%' },
  { name: '재사용률', current: '55%', target: '70%', progress: 79, trend: 'up', change: '+25%p' },
];

const timeSeriesData = [
  { month: '8월', productionTime: 240, completionRate: 55, targetFit: 60 },
  { month: '9월', productionTime: 180, completionRate: 58, targetFit: 63 },
  { month: '10월', productionTime: 90, completionRate: 62, targetFit: 68 },
  { month: '11월', productionTime: 45, completionRate: 65, targetFit: 70 },
  { month: '12월', productionTime: 30, completionRate: 68, targetFit: 72 },
];

const contentGenerationData = [
  { type: '브리프', count: 48, avgTime: '45초' },
  { type: '커리큘럼', count: 48, avgTime: '58초' },
  { type: '교안', count: 192, avgTime: '52초' },
  { type: '슬라이드', count: 192, avgTime: '105초' },
  { type: '실습템플릿', count: 384, avgTime: '38초' },
];

export function MetricsOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-900 mb-2">핵심 성과 지표 (KPI)</h2>
        <p className="text-slate-600">현재 진행 상황과 목표 대비 달성률</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpiData.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-slate-600">{kpi.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-slate-900">{kpi.current}</span>
                  <span className="text-xs text-slate-500">목표: {kpi.target}</span>
                </div>
                <Progress value={kpi.progress} className="h-2" />
                <div className="flex items-center gap-1 text-sm">
                  {kpi.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4 text-green-600" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-600" />
                  )}
                  <span className={kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                    {kpi.change}
                  </span>
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
              제작 시간 & 완료율 추이
            </CardTitle>
            <CardDescription>월별 주요 지표 변화</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
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
                  dataKey="productionTime" 
                  stroke="#6366f1" 
                  strokeWidth={2}
                  name="제작시간(분)"
                  dot={{ fill: '#6366f1' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="completionRate" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="완료율(%)"
                  dot={{ fill: '#10b981' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="targetFit" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  name="적합도(%)"
                  dot={{ fill: '#f59e0b' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              콘텐츠 유형별 생성 현황
            </CardTitle>
            <CardDescription>지난 30일간 생성된 콘텐츠</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={contentGenerationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="type" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-indigo-600">
              <CheckCircle className="w-5 h-5" />
              이번 주 성과
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-slate-600">생성된 프로그램</span>
                <span className="text-slate-900">12개</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-600">배포 완료</span>
                <span className="text-slate-900">8개</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-600">평균 품질 점수</span>
                <span className="text-slate-900">76/100</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-600">개선 반영</span>
                <span className="text-slate-900">5건</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <Target className="w-5 h-5" />
              90일 목표 진행률
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">제작 시간 단축</span>
                  <span className="text-slate-900">62%</span>
                </div>
                <Progress value={62} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">완료율 개선</span>
                  <span className="text-slate-900">91%</span>
                </div>
                <Progress value={91} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">재사용률 증가</span>
                  <span className="text-slate-900">79%</span>
                </div>
                <Progress value={79} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-600">
              <RefreshCw className="w-5 h-5" />
              개선 사이클 현황
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-slate-600">수집된 피드백</span>
                <span className="text-slate-900">156건</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-600">생성된 개선안</span>
                <span className="text-slate-900">23개</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-600">평균 반영 시간</span>
                <span className="text-slate-900">2.8일</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-600">Jira 연동 이슈</span>
                <span className="text-slate-900">18건</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
