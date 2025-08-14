import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { storePerformanceByYear } from '@/constants/stores';
import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const chartConfig = {
  revenue: {
    label: 'Revenue (Millions)',
    color: 'hsl(var(--chart-1))',
  },
};

/**
 * Store Performance Chart Component
 * Displays revenue performance by store opening year
 * Shows the relationship between store age and current performance
 */
export const StorePerformanceChart = () => {
  // Sort data by year for better visualization
  const sortedData = [...storePerformanceByYear].sort(
    (a, b) => a.year - b.year,
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Store Performance by Opening Year
        </CardTitle>
        <CardDescription>
          Current monthly revenue compared to store opening year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sortedData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value}M`}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value, name, props) => [
                      `Rp ${value},000,000 `,
                      'Monthly Revenue',
                    ]}
                    labelFormatter={(value) => `Store opened in ${value}`}
                  />
                }
              />
              <Bar
                dataKey="revenue"
                fill="var(--color-primary)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
