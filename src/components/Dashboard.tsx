import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { BriefWizard } from './BriefWizard';
import { ContentGenerator } from './ContentGenerator';
import { VersionManager } from './VersionManager';
import { Analytics } from './Analytics';
import { ContentRegistry } from './ContentRegistry';
import { MetricsOverview } from './MetricsOverview';
import { FileText, Zap, GitBranch, BarChart3, FolderOpen, Sparkles, ArrowLeft } from 'lucide-react';

interface DashboardProps {
  onBack?: () => void;
}

export function Dashboard({ onBack }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {onBack && (
                <Button variant="ghost" size="sm" onClick={onBack}>
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              )}
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-slate-900">AI 교육 콘텐츠 자동화 플랫폼</h1>
                <p className="text-sm text-slate-600">제작 시간 4시간 → 30분</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-slate-600">Admin Console</p>
                <p className="text-xs text-slate-500">v2.3.1</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              성과 대시보드
            </TabsTrigger>
            <TabsTrigger value="brief" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              브리프 작성
            </TabsTrigger>
            <TabsTrigger value="generate" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              콘텐츠 생성
            </TabsTrigger>
            <TabsTrigger value="versions" className="flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              버전 관리
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              개선 인사이트
            </TabsTrigger>
            <TabsTrigger value="registry" className="flex items-center gap-2">
              <FolderOpen className="w-4 h-4" />
              콘텐츠 레지스트리
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <MetricsOverview />
          </TabsContent>

          <TabsContent value="brief">
            <BriefWizard />
          </TabsContent>

          <TabsContent value="generate">
            <ContentGenerator />
          </TabsContent>

          <TabsContent value="versions">
            <VersionManager />
          </TabsContent>

          <TabsContent value="analytics">
            <Analytics />
          </TabsContent>

          <TabsContent value="registry">
            <ContentRegistry />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
