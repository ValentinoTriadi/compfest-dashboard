'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

import { ActiveCampaigns } from './components/active-campaigns';
import { AISuggestions } from './components/ai-suggestions';
import { CampaignCalendar } from './components/campaign-calendar';
import { CustomerSegmentation } from './components/customer-segmentation';
import { KeyMetrics } from './components/key-metrics';
import { PerformanceAnalytics } from './components/performance-analytics';
import { PromotionHeader } from './components/promotion-header';

export default function PromotionPlanning() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30days');

  return (
    <div className="flex-1 w-full">
      {/* Header */}
      <PromotionHeader
        selectedTimeframe={selectedTimeframe}
        onTimeframeChange={setSelectedTimeframe}
      />

      <div className="p-6 space-y-6">
        {/* Overview Cards */}
        <KeyMetrics />

        {/* Main Content Tabs */}
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="active">Active Campaigns</TabsTrigger>
            <TabsTrigger value="segmentation">Customer Segments</TabsTrigger>
            <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
            <TabsTrigger value="analytics">Performance Analytics</TabsTrigger>
            <TabsTrigger value="calendar">Campaign Calendar</TabsTrigger>
          </TabsList>

          {/* Active Campaigns Tab */}
          <TabsContent value="active" className="space-y-6">
            <ActiveCampaigns />
          </TabsContent>

          {/* Customer Segmentation Tab */}
          <TabsContent value="segmentation" className="space-y-6">
            <CustomerSegmentation />
          </TabsContent>

          {/* AI Suggestions Tab */}
          <TabsContent value="suggestions" className="space-y-6">
            <AISuggestions />
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <PerformanceAnalytics />
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar" className="space-y-6">
            <CampaignCalendar />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
