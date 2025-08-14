'use client';

import { CategoryPerformance } from './components/category-performance';
import { DailySalesChart } from './components/daily-sales-chart';
import { HourlyTrends } from './components/hourly-trends';
import { KeyMetrics } from './components/key-metrics';
import { MonthlyPerformanceChart } from './components/monthly-performance-chart';
import { SalesHeader } from './components/sales-header';
import { StoreComparison } from './components/store-comparison';

export default function SalesAnalytics() {
  return (
    <main className="flex-1 w-full">
      {/* Header */}
      <SalesHeader />

      <div className="p-6 space-y-6">
        {/* Key Metrics */}
        <KeyMetrics />

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Daily Sales Trend */}
          <DailySalesChart />

          {/* Monthly Performance */}
          <MonthlyPerformanceChart />
        </div>

        {/* Store Comparison & Category Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Store Comparison */}
          <StoreComparison />

          {/* Category Performance */}
          <CategoryPerformance />
        </div>

        {/* Hourly Trends */}
        <HourlyTrends />
      </div>
    </main>
  );
}
