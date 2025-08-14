import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { dailySalesData } from '@/constants/sales';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const dailySalesChartConfig = {
  sales: {
    label: 'Sales',
    color: '#003d7f',
  },
} satisfies ChartConfig;

export const DailySalesChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Sales Trend </CardTitle>
        <CardDescription>
          Sales performance over the last 7 days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={dailySalesChartConfig}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={dailySalesData}
              accessibilityLayer
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis dataKey="sales" />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    indicator="line"
                    valueFormatter={(value) =>
                      `Rp ${value.toLocaleString()},000`
                    }
                  />
                }
              />
              <defs>
                <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#27DCFF" stopOpacity={0.5} />
                  <stop offset="80%" stopColor="#27DCFF" stopOpacity={0.05} />
                  <stop offset="100%" stopColor="#27DCFF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#27DCFF"
                strokeWidth={5}
                fill="url(#fillSales)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
