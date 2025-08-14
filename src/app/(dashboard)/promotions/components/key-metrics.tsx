'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { activePromotions } from '@/constants/promotions';
import { cn } from '@/lib/utils';
import { DollarSign, Tag, Target, TrendingUp } from 'lucide-react';

export function KeyMetrics() {
  const totalActivePromotions = activePromotions.filter(
    (p) => p.status === 'Active',
  ).length;

  const totalRevenue = activePromotions.reduce(
    (sum, p) => sum + p.performance.revenue,
    0,
  );

  const avgROI =
    activePromotions.reduce((sum, p) => sum + p.performance.roi, 0) /
    activePromotions.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Active Campaigns
          </CardTitle>
          <Tag className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalActivePromotions}</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-accent font-medium">2 ending</span> this week
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Promotion Revenue
          </CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-xl font-bold">
            Rp {totalRevenue.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            <span
              className={cn(
                'text-accent font-bold',
                'text-[#5993ff] before:content-["+"]',
              )}
            >
              18.5%
            </span>{' '}
            vs last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average ROI</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{avgROI.toFixed(1)}x</div>
          <p className="text-xs text-muted-foreground">
            <span
              className={cn(
                'text-accent font-bold',
                'text-[#5993ff] before:content-["+"]',
              )}
            >
              0.3
            </span>{' '}
            vs target
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Conversion Lift</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+24%</div>
          <p className="text-xs text-muted-foreground">
            During active campaigns
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
