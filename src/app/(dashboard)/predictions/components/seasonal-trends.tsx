'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { seasonalTrends } from '@/constants/predictions';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

export function SeasonalTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Seasonal Demand Patterns</CardTitle>
        <CardDescription>
          Historical and predicted seasonal trends by category
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            electronics: {
              label: 'Electronics',
              color: '#3b82f6',
            },
            fashion: {
              label: 'Fashion',
              color: '#8b5cf6',
            },
            home: {
              label: 'Home & Garden',
              color: '#06b6d4',
            },
            sports: {
              label: 'Sports',
              color: '#10b981',
            },
          }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={seasonalTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <ChartTooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Quarter
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {label}
                            </span>
                          </div>
                          {payload.map((entry, index) => (
                            <div key={index} className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                {entry.dataKey}
                              </span>
                              <span
                                className="font-bold"
                                style={{ color: entry.color }}
                              >
                                {entry.value}% demand
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
                radius={[5, 5, 0, 0]}
                dataKey="electronics"
                fill="var(--color-electronics)"
              />
              <Bar
                radius={[5, 5, 0, 0]}
                dataKey="fashion"
                fill="var(--color-fashion)"
              />
              <Bar
                radius={[5, 5, 0, 0]}
                dataKey="home"
                fill="var(--color-home)"
              />
              <Bar
                radius={[5, 5, 0, 0]}
                dataKey="sports"
                fill="var(--color-sports)"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
