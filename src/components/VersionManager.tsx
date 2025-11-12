import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  GitBranch, 
  Download, 
  Eye, 
  RotateCcw, 
  FileText,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

const versions = [
  {
    version: 'v2.3.1',
    status: 'deployed',
    date: '2024-12-10',
    author: '김강사',
    changes: ['2주차 실습 난이도 하향', 'ChatGPT 예시 업데이트', '퀴즈 2문항 추가'],
    formats: ['PDF', 'Google Slides', 'PPT'],
    jiraIssue: 'EDU-456',
  },
  {
    version: 'v2.3.0',
    status: 'approved',
    date: '2024-12-08',
    author: '이교육팀장',
    changes: ['피드백 반영: 이미지 생성 시간 단축', '강사용 메모 보강'],
    formats: ['PDF', 'Google Slides'],
    jiraIssue: 'EDU-445',
  },
  {
    version: 'v2.2.0',
    status: 'review',
    date: '2024-12-05',
    author: '박매니저',
    changes: ['3주차 번역 실습 개선', '모바일 가이드 이미지 추가'],
    formats: [],
    jiraIssue: 'EDU-432',
  },
  {
    version: 'v2.1.0',
    status: 'archived',
    date: '2024-11-28',
    author: '최교수',
    changes: ['초기 커리큘럼 설계', '8주 과정 구성'],
    formats: ['PDF'],
    jiraIssue: 'EDU-401',
  },
];

const releaseNotes = {
  version: 'v2.3.1',
  date: '2024-12-10',
  summary: '피드백 기반 난이도 조정 및 콘텐츠 보강',
  changes: [
    { type: 'improvement', desc: '2주차 실습 시간을 15분 → 10분으로 단축' },
    { type: 'update', desc: 'ChatGPT 최신 버전 예시로 교체' },
    { type: 'addition', desc: '학습 확인용 퀴즈 2문항 추가' },
    { type: 'fix', desc: '슬라이드 레이아웃 깨짐 수정' },
  ],
  metrics: {
    linesChanged: 342,
    filesChanged: 12,
    reviewers: 2,
    approvalTime: '1일',
  },
};

export function VersionManager() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-900 mb-2">버전 관리 & 배포 (FR-04)</h2>
        <p className="text-slate-600">SemVer 버전 관리, 릴리즈노트 자동생성, 1클릭 배포 및 롤백</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="w-6 h-6 text-indigo-600" />
              버전 히스토리
            </CardTitle>
            <CardDescription>워크플로: 초안 → 리뷰 → 승인 → 배포</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {versions.map((v, idx) => (
                <Card key={idx} className={v.status === 'deployed' ? 'border-green-200 bg-green-50' : ''}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                          {v.status === 'deployed' ? (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          ) : v.status === 'approved' ? (
                            <CheckCircle className="w-6 h-6 text-blue-600" />
                          ) : v.status === 'review' ? (
                            <Clock className="w-6 h-6 text-amber-600" />
                          ) : (
                            <FileText className="w-6 h-6 text-slate-400" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-900">{v.version}</span>
                            <Badge
                              variant={
                                v.status === 'deployed'
                                  ? 'default'
                                  : v.status === 'approved'
                                  ? 'secondary'
                                  : v.status === 'review'
                                  ? 'outline'
                                  : 'outline'
                              }
                            >
                              {v.status === 'deployed'
                                ? '배포됨'
                                : v.status === 'approved'
                                ? '승인됨'
                                : v.status === 'review'
                                ? '리뷰 중'
                                : '보관됨'}
                            </Badge>
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            {v.date} · {v.author} · {v.jiraIssue}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        {v.status === 'archived' && (
                          <Button variant="ghost" size="sm">
                            <RotateCcw className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-1 mb-3">
                      {v.changes.map((change, cidx) => (
                        <li key={cidx} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-slate-400">•</span>
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                    {v.formats.length > 0 && (
                      <div className="flex gap-2">
                        {v.formats.map((format, fidx) => (
                          <Button key={fidx} variant="outline" size="sm">
                            <Download className="w-3 h-3 mr-1" />
                            {format}
                          </Button>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">릴리즈 노트</CardTitle>
              <CardDescription>{releaseNotes.version}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-600 mb-2">{releaseNotes.summary}</p>
                  <p className="text-xs text-slate-500">{releaseNotes.date}</p>
                </div>
                <div className="space-y-2">
                  {releaseNotes.changes.map((change, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <Badge variant="outline" className="text-xs">
                        {change.type === 'improvement' ? '개선' : 
                         change.type === 'update' ? '업데이트' :
                         change.type === 'addition' ? '추가' : '수정'}
                      </Badge>
                      <span className="text-slate-700 flex-1">{change.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">배포 통계</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">변경된 라인</span>
                  <span className="text-slate-900">{releaseNotes.metrics.linesChanged}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">변경된 파일</span>
                  <span className="text-slate-900">{releaseNotes.metrics.filesChanged}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">리뷰어</span>
                  <span className="text-slate-900">{releaseNotes.metrics.reviewers}명</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">승인 소요 시간</span>
                  <span className="text-slate-900">{releaseNotes.metrics.approvalTime}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                배포 대기 중
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 mb-4">v2.2.0이 리뷰 대기 중입니다</p>
              <Button className="w-full" size="sm">
                승인 요청 보기
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
