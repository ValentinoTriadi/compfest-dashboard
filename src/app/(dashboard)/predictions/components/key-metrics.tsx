'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  opportunities,
  predictionAccuracy,
  predictionAccuracyLastMonth,
  totalHighRiskAlerts,
  totalHighRiskAlertsLastMonth,
  totalOpportunities,
  totalOpportunitiesLastMonth,
  totalPredictedRevenue,
  totalPredictedRevenueLastMonth,
} from '@/constants/predictions';
import { AlertTriangle, Brain, DollarSign, Zap } from 'lucide-react';

export function KeyMetrics() {
  const revenueGrowth =
    ((totalPredictedRevenue - totalPredictedRevenueLastMonth) /
      totalPredictedRevenueLastMonth) *
    100;
  const accuracyGrowth = predictionAccuracy - predictionAccuracyLastMonth;
  const alertsChange = totalHighRiskAlerts - totalHighRiskAlertsLastMonth;
  const opportunitiesChange = totalOpportunities - totalOpportunitiesLastMonth;

  const totalOpportunityValue = opportunities.reduce((sum, opp) => {
    const value = parseFloat(opp.potential.replace(/[^0-9.]/g, ''));
    return sum + value;
  }, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Predicted Revenue
          </CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            Rp {totalPredictedRevenue.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            <span
              className={`font-medium ${revenueGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              {revenueGrowth >= 0 ? '+' : ''}
              {revenueGrowth.toFixed(1)}%
            </span>{' '}
            from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Model Accuracy</CardTitle>
          <Brain className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{predictionAccuracy}%</div>
          <p className="text-xs text-muted-foreground">
            <span
              className={`font-medium ${accuracyGrowth >= 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              {accuracyGrowth >= 0 ? '+' : ''}
              {accuracyGrowth.toFixed(1)}%
            </span>{' '}
            improvement
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
          <AlertTriangle className="h-4 w-4 text-destructive" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-destructive">
            {totalHighRiskAlerts}
          </div>
          <p className="text-xs text-muted-foreground">
            <span
              className={`font-medium ${alertsChange <= 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              {alertsChange <= 0 ? '' : '+'}
              {alertsChange}
            </span>{' '}
            from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Opportunities</CardTitle>
          <Zap className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalOpportunities}</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-accent font-medium">
              Rp {totalOpportunityValue.toFixed(1)}B
            </span>{' '}
            potential value
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
