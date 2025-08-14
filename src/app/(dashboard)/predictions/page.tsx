'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

import { DemandPrediction } from './components/demand-prediction';
import { KeyMetrics } from './components/key-metrics';
import { MarketOpportunities } from './components/market-opportunities';
import { PredictionsHeader } from './components/predictions-header';
import { RiskAnalysis } from './components/risk-analysis';
import { SalesForecast } from './components/sales-forecast';
import { SeasonalTrends } from './components/seasonal-trends';

export default function PredictiveAnalytics() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('3months');

  return (
    <div className="w-full flex-1">
      {/* Header */}
      <PredictionsHeader
        selectedTimeframe={selectedTimeframe}
        onTimeframeChange={setSelectedTimeframe}
      />

      <div className="p-6 space-y-6">
        {/* Overview Cards */}
        <KeyMetrics />

        {/* Main Content Tabs */}
        <Tabs defaultValue="forecast" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="forecast">Sales Forecast</TabsTrigger>
            <TabsTrigger value="demand">Demand Prediction</TabsTrigger>
            <TabsTrigger value="trends">Seasonal Trends</TabsTrigger>
            <TabsTrigger value="risks">Risk Analysis</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          </TabsList>

          {/* Sales Forecast Tab */}
          <TabsContent value="forecast" className="space-y-6">
            <SalesForecast />
          </TabsContent>

          {/* Demand Prediction Tab */}
          <TabsContent value="demand" className="space-y-6">
            <DemandPrediction />
          </TabsContent>

          {/* Seasonal Trends Tab */}
          <TabsContent value="trends" className="space-y-6">
            <SeasonalTrends />
          </TabsContent>

          {/* Risk Analysis Tab */}
          <TabsContent value="risks" className="space-y-6">
            <RiskAnalysis />
          </TabsContent>

          {/* Opportunities Tab */}
          <TabsContent value="opportunities" className="space-y-6">
            <MarketOpportunities />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
