'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import {
  promotionPerformanceData,
  promotionTypeData,
} from '@/constants/promotions';
import { Tag } from 'lucide-react';
import {
  Bar,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

export function PerformanceAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Promotion Performance Trend</CardTitle>
            <CardDescription>
              Monthly revenue and ROI from promotions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                revenue: {
                  label: 'Revenue (Rp M)',
                  color: '#3b82f6',
                },
                roi: {
                  label: 'ROI',
                  color: '#8b5cf6',
                },
              }}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={promotionPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
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
                                    {entry.dataKey === 'revenue'
                                      ? 'Revenue'
                                      : 'ROI'}
                                  </span>
                                  <span
                                    className="font-bold"
                                    style={{ color: entry.color }}
                                  >
                                    {entry.dataKey === 'revenue'
                                      ? `Rp ${(entry.value as number)?.toLocaleString()},000`
                                      : `${entry.value}x`}
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
                  <Bar
                    yAxisId="left"
                    dataKey="revenue"
                    fill="var(--color-revenue)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="roi"
                    stroke="var(--color-roi)"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Promotion Types */}
        <Card>
          <CardHeader>
            <CardTitle>Promotion Type Performance</CardTitle>
            <CardDescription>Revenue by promotion type</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                'Percentage Discount': {
                  label: 'Percentage Discount',
                  color: '#3b82f6',
                },
                BOGO: {
                  label: 'BOGO',
                  color: '#8b5cf6',
                },
                'Flash Sale': {
                  label: 'Flash Sale',
                  color: '#06b6d4',
                },
                'Bundle Deal': {
                  label: 'Bundle Deal',
                  color: '#10b981',
                },
                'Loyalty Exclusive': {
                  label: 'Loyalty Exclusive',
                  color: '#f59e0b',
                },
              }}
              className="h-[300px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={promotionTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="revenue"
                    nameKey="type"
                  >
                    {promotionTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Type
                                </span>
                                <span className="font-bold text-muted-foreground">
                                  {data.type}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Revenue
                                </span>
                                <span className="font-bold">
                                  Rp {data.revenue.toLocaleString()},000
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Campaigns
                                </span>
                                <span className="font-bold">{data.count}</span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {promotionTypeData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Promotions */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Promotion Types</CardTitle>
          <CardDescription>Based on revenue and campaign count</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {promotionTypeData
              .sort((a, b) => b.revenue - a.revenue)
              .map((type, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Tag className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{type.type}</p>
                      <p className="text-sm text-muted-foreground">
                        {type.count} campaigns
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      Rp {type.revenue.toLocaleString()},000
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Total revenue
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
