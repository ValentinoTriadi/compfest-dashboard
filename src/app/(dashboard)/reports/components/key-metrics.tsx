'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  avgOrderValue,
  avgOrderValueLastMonth,
  customerSatisfaction,
  customerSatisfactionLastMonth,
  profitMargin,
  profitMarginLastMonth,
  totalRevenue,
  totalRevenueLastMonth,
} from '@/constants/reports';
import { TrendingDown, TrendingUp } from 'lucide-react';

export function KeyMetrics() {
  const revenueGrowth =
    ((totalRevenue - totalRevenueLastMonth) / totalRevenueLastMonth) * 100;
  const orderValueGrowth =
    ((avgOrderValue - avgOrderValueLastMonth) / avgOrderValueLastMonth) * 100;
  const profitGrowth = profitMargin - profitMarginLastMonth;
  const satisfactionGrowth =
    customerSatisfaction - customerSatisfactionLastMonth;

  const formatCurrency = (value: number) => {
    return `Rp ${(value / 1000000).toFixed(1)}M`;
  };

  const formatPercentage = (value: number, showSign: boolean = true) => {
    const sign = showSign && value > 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col text-center items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">
                Total Revenue
              </p>
              <p className="text-2xl font-bold text-slate-900">
                {formatCurrency(totalRevenue)}
              </p>
            </div>
            <div
              className={`flex items-center gap-1 ${revenueGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              {revenueGrowth >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">
                {formatPercentage(revenueGrowth)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col text-center items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">
                Avg Order Value
              </p>
              <p className="text-2xl font-bold text-slate-900">
                {formatCurrency(avgOrderValue)}
              </p>
            </div>
            <div
              className={`flex items-center gap-1 ${orderValueGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              {orderValueGrowth >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">
                {formatPercentage(orderValueGrowth)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col text-center items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">
                Profit Margin
              </p>
              <p className="text-2xl font-bold text-slate-900">
                {profitMargin}%
              </p>
            </div>
            <div
              className={`flex items-center gap-1 ${profitGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              {profitGrowth >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">
                {formatPercentage(profitGrowth)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col text-center items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">
                Customer Satisfaction
              </p>
              <p className="text-2xl font-bold text-slate-900">
                {customerSatisfaction}
                <span className="text-xs text-muted-foreground">/5</span>
              </p>
            </div>
            <div
              className={`flex items-center gap-1 ${satisfactionGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              {satisfactionGrowth >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span className="text-sm font-medium">
                {formatPercentage(satisfactionGrowth)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
