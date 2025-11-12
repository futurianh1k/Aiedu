import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Sparkles, 
  Zap, 
  Clock, 
  TrendingUp, 
  FileText,
  Presentation,
  Code,
  GitBranch,
  BarChart3,
  FolderOpen,
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  Rocket,
  ChevronRight
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const features = [
  {
    icon: FileText,
    title: '브리프 캡처',
    code: 'FR-01',
    description: '10-15문항 완료 시 60초 내에 교육 방향성, 페르소나, KPI, 리스크 자동 생성',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
  {
    icon: Sparkles,
    title: '콘텐츠 자동 생성',
    code: 'FR-02',
    description: '브리프→커리큘럼→교안→슬라이드→실습템플릿까지 완전 자동화 파이프라인',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Code,
    title: '실습 템플릿 & AI 도구',
    code: 'FR-03',
    description: '스마트폰 우선 설계, 앱 설치 없이 10분 내 결과물 산출 가능',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: GitBranch,
    title: '버전/승인/배포',
    code: 'FR-04',
    description: 'SemVer 버전 관리, 1클릭 배포 및 롤백, Jira 이슈 연계',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: BarChart3,
    title: '성과 기반 개선 루프',
    code: 'FR-05',
    description: '피드백 수집→분석→개선안 자동생성→우선순위 제안→3일 내 배포',
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
  },
  {
    icon: FolderOpen,
    title: '콘텐츠 레지스트리',
    code: 'FR-06',
    description: '재사용 추천 및 유사 콘텐츠 검색, 재사용률 30%→70% 목표',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
  },
];

const kpis = [
  { metric: '제작 시간', current: '4시간', target: '10분', status: '87% 개선' },
  { metric: '1주차 완료율', current: '55%', target: '80%', status: '25%p 목표' },
  { metric: '타깃 적합도', current: '60%', target: '85%', status: '25%p 목표' },
  { metric: '업데이트 리드타임', current: '14일', target: '1일', status: '93% 개선' },
  { metric: '재사용률', current: '30%', target: '80%', status: '50%p 목표' },
];

const phases = [
  { phase: 'Phase 0', duration: '2주', focus: '브리프 마법사 + 커리큘럼/교안 초안', goal: '생성 ≤60초' },
  { phase: 'Phase 1', duration: '4주', focus: '슬라이드/템플릿 생성 + 배포', goal: '변환 2분 내' },
  { phase: 'Phase 2', duration: '4주', focus: '성과 수집·개선 루프', goal: '개선→배포 ≤3일' },
  { phase: 'Phase 3', duration: '4주', focus: '협업·승인·카탈로그·검색', goal: '재사용률 60%+' },
];

const benefits = [
  { label: '제작 시간', before: '4시간', after: '30분', improvement: '87% 단축' },
  { label: '인력 투입', before: '3명', after: '1명', improvement: '67% 감소' },
  { label: '업데이트 주기', before: '14일', after: '3일', improvement: '78% 개선' },
  { label: '콘텐츠 일관성', before: '60점', after: '78점', improvement: '30% 향상' },
];

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-slate-900">AI 교육 콘텐츠 자동화</h1>
                <p className="text-xs text-slate-600">EduAI Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost">기능</Button>
              <Button variant="ghost">가격</Button>
              <Button variant="ghost">문서</Button>
              <Button onClick={onGetStarted}>시작하기</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-indigo-100 text-indigo-700 border-indigo-200">
              <Rocket className="w-3 h-3 mr-1" />
              지역주민 AI 교육 제작 자동화
            </Badge>
            <h1 className="text-slate-900 mb-6">
              교육 콘텐츠 제작 시간을<br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                4시간에서 30분으로
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              AI 기반 자동화로 브리프부터 슬라이드, 실습 템플릿까지 한 번에 생성하고,<br />
              성과 데이터 기반 개선 사이클로 지속적인 품질 향상을 실현합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8" onClick={onGetStarted}>
                <Sparkles className="w-5 h-5 mr-2" />
                무료로 시작하기
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <FileText className="w-5 h-5 mr-2" />
                데모 보기
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 shadow-sm">
                  <p className="text-xs text-slate-600 mb-1">{benefit.label}</p>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-slate-400 line-through">{benefit.before}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                    <span className="text-slate-900">{benefit.after}</span>
                  </div>
                  <p className="text-xs text-green-600">{benefit.improvement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200">해결 과제</Badge>
            <h2 className="text-slate-900 mb-4">현장의 진짜 문제</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              빠르게 변하는 교육 수요에 대응하지 못하는 느린 제작 프로세스
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-red-200">
              <CardHeader>
                <Clock className="w-10 h-10 text-red-600 mb-3" />
                <CardTitle>느린 수작업 제작</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  커리큘럼 설계부터 슬라이드 제작까지 평균 4시간 소요. 
                  급변하는 AI 트렌드에 즉각 대응 불가.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardHeader>
                <Target className="w-10 h-10 text-amber-600 mb-3" />
                <CardTitle>일관성 부족</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  강사마다 다른 품질과 난이도. 
                  표준화된 템플릿 없이 매번 처음부터 재작성.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-blue-600 mb-3" />
                <CardTitle>개선 사이클 부재</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  피드백 수집 후 반영까지 평균 14일. 
                  데이터 기반 의사결정 시스템 전무.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
              <CheckCircle className="w-3 h-3 mr-1" />
              솔루션
            </Badge>
            <h2 className="text-slate-900 mb-4">AI 자동화로 모든 것이 바뀝니다</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
              브리프 입력부터 배포까지 완전 자동화된 파이프라인으로 
              제작 시간을 87% 단축하고, 성과 기반 개선 루프로 지속적인 품질 향상을 실현합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">핵심 기능</Badge>
            <h2 className="text-slate-900 mb-4">6가지 핵심 기능</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              교육 콘텐츠 제작부터 배포, 개선까지 전 과정을 자동화합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow border-slate-200">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">{feature.code}</Badge>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              <BarChart3 className="w-3 h-3 mr-1" />
              성과 지표
            </Badge>
            <h2 className="text-slate-900 mb-4">측정 가능한 성과</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              명확한 KPI로 진행 상황을 추적하고 목표를 달성합니다
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {kpis.map((kpi, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <p className="text-sm text-slate-600 mb-3">{kpi.metric}</p>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">현재</span>
                      <span className="text-slate-900">{kpi.current}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">목표</span>
                      <span className="text-indigo-600">{kpi.target}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-full justify-center">
                    {kpi.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rollout Plan */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              <Rocket className="w-3 h-3 mr-1" />
              롤아웃 계획
            </Badge>
            <h2 className="text-slate-900 mb-4">14주 단계별 출시</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              검증된 방법론으로 단계별 기능 출시 및 안정화
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, idx) => (
              <Card key={idx} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-bl-full" />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{phase.phase}</Badge>
                    <span className="text-sm text-slate-600">{phase.duration}</span>
                  </div>
                  <CardTitle className="text-lg">{phase.focus}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="text-slate-600">{phase.goal}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white mb-4">지금 바로 시작하세요</h2>
          <p className="text-xl text-indigo-100 mb-8">
            14일 무료 체험으로 교육 콘텐츠 제작 시간을 87% 단축하는 경험을 해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8"
              onClick={onGetStarted}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              무료로 시작하기
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Users className="w-5 h-5 mr-2" />
              데모 예약하기
            </Button>
          </div>
          <p className="text-sm text-indigo-200">
            신용카드 불필요 · 언제든지 취소 가능 · 즉시 시작
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-white">EduAI</span>
              </div>
              <p className="text-sm">
                AI 기반 교육 콘텐츠 자동화 플랫폼
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">제품</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">기능</a></li>
                <li><a href="#" className="hover:text-white transition-colors">가격</a></li>
                <li><a href="#" className="hover:text-white transition-colors">사례</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">리소스</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">문서</a></li>
                <li><a href="#" className="hover:text-white transition-colors">가이드</a></li>
                <li><a href="#" className="hover:text-white transition-colors">블로그</a></li>
                <li><a href="#" className="hover:text-white transition-colors">지원</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">회사</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">소개</a></li>
                <li><a href="#" className="hover:text-white transition-colors">채용</a></li>
                <li><a href="#" className="hover:text-white transition-colors">문의</a></li>
                <li><a href="#" className="hover:text-white transition-colors">개인정보</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2024 EduAI Platform. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">쿠키정책</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
