import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Search, 
  Filter, 
  FolderOpen, 
  Star, 
  Copy,
  Eye,
  Download,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const contentItems = [
  {
    id: 1,
    title: '시니어를 위한 실생활 AI 활용',
    category: 'AI 기초',
    difficulty: '초급',
    duration: '8주',
    target: '시니어 (55-70세)',
    tags: ['이미지생성', '번역', '스마트폰'],
    localIssue: '디지털 격차 해소',
    reusedCount: 8,
    rating: 4.5,
    lastUpdated: '2024-12-10',
    status: 'active',
  },
  {
    id: 2,
    title: '소상공인 SNS 마케팅 AI',
    category: 'AI 마케팅',
    difficulty: '중급',
    duration: '4주',
    target: '소상공인 (30-60세)',
    tags: ['콘텐츠제작', '마케팅', 'SNS'],
    localIssue: '지역 상권 활성화',
    reusedCount: 12,
    rating: 4.7,
    lastUpdated: '2024-12-08',
    status: 'active',
  },
  {
    id: 3,
    title: '청년 창업가 AI 비서 활용',
    category: 'AI 생산성',
    difficulty: '중급',
    duration: '6주',
    target: '청년 창업가 (20-35세)',
    tags: ['자동화', '생산성', '문서작성'],
    localIssue: '창업 지원',
    reusedCount: 5,
    rating: 4.3,
    lastUpdated: '2024-12-05',
    status: 'active',
  },
  {
    id: 4,
    title: '학부모를 위한 AI 교육도구',
    category: 'AI 교육',
    difficulty: '초급',
    duration: '4주',
    target: '학부모 (35-50세)',
    tags: ['교육', '학습지원', '자녀교육'],
    localIssue: '교육 격차 해소',
    reusedCount: 6,
    rating: 4.4,
    lastUpdated: '2024-11-28',
    status: 'active',
  },
  {
    id: 5,
    title: '지역 예술가 AI 창작 워크샵',
    category: 'AI 창작',
    difficulty: '고급',
    duration: '12주',
    target: '예술가 (전 연령)',
    tags: ['이미지생성', '음악', '창작'],
    localIssue: '문화 예술 진흥',
    reusedCount: 3,
    rating: 4.6,
    lastUpdated: '2024-11-20',
    status: 'archived',
  },
];

export function ContentRegistry() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  const filteredContent = contentItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchesDifficulty = filterDifficulty === 'all' || item.difficulty === filterDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-900 mb-2">콘텐츠 레지스트리 (FR-06)</h2>
        <p className="text-slate-600">재사용 추천 및 유사 콘텐츠 검색 · 카테고리, 난이도, 대상군별 태깅</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="w-6 h-6 text-indigo-600" />
            콘텐츠 검색 & 필터
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="제목, 태그로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="카테고리" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체 카테고리</SelectItem>
                <SelectItem value="AI 기초">AI 기초</SelectItem>
                <SelectItem value="AI 마케팅">AI 마케팅</SelectItem>
                <SelectItem value="AI 생산성">AI 생산성</SelectItem>
                <SelectItem value="AI 교육">AI 교육</SelectItem>
                <SelectItem value="AI 창작">AI 창작</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="난이도" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체 난이도</SelectItem>
                <SelectItem value="초급">초급</SelectItem>
                <SelectItem value="중급">중급</SelectItem>
                <SelectItem value="고급">고급</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {filteredContent.map((item) => (
          <Card key={item.id} className={item.status === 'archived' ? 'opacity-60' : ''}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-slate-900">{item.title}</h3>
                    {item.reusedCount >= 10 && (
                      <Badge variant="default" className="bg-amber-500">
                        <Star className="w-3 h-3 mr-1" />
                        인기
                      </Badge>
                    )}
                    {item.status === 'archived' && (
                      <Badge variant="secondary">보관됨</Badge>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Filter className="w-4 h-4" />
                      {item.category}
                    </span>
                    <span>•</span>
                    <span>{item.difficulty}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {item.target}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    <Badge variant="secondary" className="text-xs">
                      {item.localIssue}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600">재사용: </span>
                      <span className="text-slate-900">{item.reusedCount}회</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span className="text-slate-900">{item.rating}</span>
                    </div>
                    <div className="text-slate-500">
                      업데이트: {item.lastUpdated}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <FolderOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600">검색 결과가 없습니다</p>
            <p className="text-sm text-slate-500 mt-1">다른 검색어나 필터를 시도해보세요</p>
          </CardContent>
        </Card>
      )}

      <Card className="border-indigo-200 bg-indigo-50">
        <CardHeader>
          <CardTitle className="text-sm flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            재사용 통계
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-slate-600 text-sm">전체 콘텐츠</p>
              <p className="text-slate-900">{contentItems.length}개</p>
            </div>
            <div>
              <p className="text-slate-600 text-sm">평균 재사용률</p>
              <p className="text-slate-900">55%</p>
            </div>
            <div>
              <p className="text-slate-600 text-sm">목표 재사용률</p>
              <p className="text-slate-900">70%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
