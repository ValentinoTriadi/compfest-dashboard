'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, Clock, LineChart, TrendingUp } from 'lucide-react';
import { useState } from 'react';

import { AnalyticsCharts } from './components/analytics-charts';
import { KeyMetrics } from './components/key-metrics';
import { PerformanceInsights } from './components/performance-insights';
import { ReportControls } from './components/report-controls';
// Components
import { ReportsHeader } from './components/reports-header';
import { ScheduledReports } from './components/scheduled-reports';
import { StorePerformance } from './components/store-performance';

export default function ReportsPage() {
  const [selectedStore, setSelectedStore] = useState('all');
  const [dateRange, setDateRange] = useState('last-30-days');
  const [reportType, setReportType] = useState('executive');

  return (
    <div className="flex-1 w-full ">
      <div className="p-6 space-y-6">
        <ReportsHeader />

        <ReportControls
          reportType={reportType}
          setReportType={setReportType}
          selectedStore={selectedStore}
          setSelectedStore={setSelectedStore}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />

        <Tabs defaultValue="executive" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="executive" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Executive
            </TabsTrigger>
            <TabsTrigger value="performance" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <LineChart className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="scheduled" className="gap-2">
              <Clock className="h-4 w-4" />
              Scheduled
            </TabsTrigger>
          </TabsList>

          <TabsContent value="executive" className="space-y-6">
            <KeyMetrics />
            <PerformanceInsights />
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <StorePerformance />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <AnalyticsCharts />
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-6">
            <ScheduledReports />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
