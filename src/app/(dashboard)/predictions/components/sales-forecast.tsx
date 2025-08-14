'use client';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import {
  salesForecast,
  storePerformancePredictions,
} from '@/constants/predictions';
import { Target, TrendingDown, TrendingUp } from 'lucide-react';
import {
  Area,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

export function SalesForecast() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Sales Revenue Forecast</CardTitle>
          <CardDescription>
            Predicted sales with confidence intervals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              predicted: {
                label: 'Predicted Sales',
                color: '#3b82f6',
              },
              actual: {
                label: 'Actual Sales',
                color: '#10b981',
              },
              upper: {
                label: 'Upper Bound',
                color: '#e5e7eb',
              },
              lower: {
                label: 'Lower Bound',
                color: '#e5e7eb',
              },
            }}
            className="h-[400px] w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesForecast}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Month
                              </span>
                              <span className="font-bold text-muted-foreground">
                                {label}
                              </span>
                            </div>
                            {payload.map((entry, index) => (
                              <div key={index} className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  {entry.dataKey === 'predicted'
                                    ? 'Predicted'
                                    : entry.dataKey === 'actual'
                                      ? 'Actual'
                                      : entry.dataKey === 'upper'
                                        ? 'Upper Bound'
                                        : 'Lower Bound'}
                                </span>
                                <span
                                  className="font-bold"
                                  style={{ color: entry.color }}
                                >
                                  Rp{' '}
                                  {((entry.value as number) / 1000000)?.toFixed(
                                    1,
                                  )}
                                  M
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  dataKey="upper"
                  stroke="none"
                  fill="var(--color-upper)"
                  fillOpacity={0.1}
                  stackId="confidence"
                />
                <Area
                  dataKey="lower"
                  stroke="none"
                  fill="var(--color-lower)"
                  fillOpacity={0.1}
                  stackId="confidence"
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="var(--color-actual)"
                  strokeWidth={3}
                  dot={{
                    fill: 'var(--color-actual)',
                    strokeWidth: 2,
                    r: 4,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="var(--color-predicted)"
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={{
                    fill: 'var(--color-predicted)',
                    strokeWidth: 2,
                    r: 4,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Store Performance Predictions */}
      <Card>
        <CardHeader>
          <CardTitle>Store Performance Predictions</CardTitle>
          <CardDescription>
            Next month revenue forecast by store
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {storePerformancePredictions.map((store, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{store.store}</p>
                    <p className="text-sm text-muted-foreground">
                      Current: Rp {store.current.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="text-xs mb-2">
                    {Math.round(store.confidence * 100)}% confidence
                  </Badge>
                  <div className="flex items-center justify-end gap-2 mb-1">
                    {store.growth > 0 ? (
                      <TrendingUp className="h-4 w-4 text-[#5993ff]" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    )}
                    <span
                      className={`font-bold ${store.growth > 0 ? 'text-[#5993ff]' : 'text-destructive'}`}
                    >
                      {store.growth > 0 ? '+' : ''}
                      {store.growth}%
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Predicted: Rp {(store.predicted / 1000000).toFixed(1)} M
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
