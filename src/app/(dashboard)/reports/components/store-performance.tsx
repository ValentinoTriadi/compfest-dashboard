'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { storePerformance } from '@/constants/reports';
import { cn } from '@/lib/utils';
import { Star, TrendingDown, TrendingUp, Users } from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

export function StorePerformance() {
  const formatCurrency = (value: number) => {
    return `Rp ${value.toLocaleString()}`;
  };

  const getPerformanceColor = (growth: number) => {
    if (growth >= 20) return 'text-green-600 bg-green-50 border-green-200';
    if (growth >= 10) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (growth >= 5) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getPerformanceLabel = (growth: number) => {
    if (growth >= 20) return 'Excellent';
    if (growth >= 10) return 'Good';
    if (growth >= 5) return 'Average';
    return 'Below Average';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Store Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                margin={{ top: 16, right: 16, bottom: 16, left: 16 }}
                data={storePerformance}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="store" />
                <YAxis tickFormatter={(value) => formatCurrency(value)} />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      formatter={(value: any) => [
                        'Revenue: ',
                        formatCurrency(value),
                      ]}
                    />
                  }
                />
                <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Store Performance Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {storePerformance.map((store) => (
              <div
                key={store.store}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {store.store}
                    </h3>
                    <p className="text-sm text-slate-600">
                      Manager: {store.manager}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center w-40 ">
                    <p className="text-sm text-slate-600">Revenue</p>
                    <p className="font-semibold">
                      {formatCurrency(store.revenue)}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    {store.growth >= 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-600" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        store.growth >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {store.growth >= 0 ? '+' : ''}
                      {store.growth}%
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">
                      {store.employees}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">
                      {store.satisfaction}
                    </span>
                  </div>

                  <Badge
                    variant="outline"
                    className={cn(getPerformanceColor(store.growth), 'w-20')}
                  >
                    {getPerformanceLabel(store.growth)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
