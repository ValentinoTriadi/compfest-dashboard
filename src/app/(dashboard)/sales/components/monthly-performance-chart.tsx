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
import { monthlySalesData } from '@/constants/sales';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

export const MonthlyPerformanceChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Performance</CardTitle>
        <CardDescription>Sales vs targets over 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            sales: {
              label: 'Actual Sales',
              color: '#003d7f',
            },
            target: {
              label: 'Target',
              color: '#d86d37',
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlySalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month">
                <text
                  x="100%"
                  y={40}
                  textAnchor="end"
                  fill="#888"
                  fontSize={12}
                  fontWeight={500}
                >
                  Month
                </text>
              </XAxis>
              <YAxis>
                <text
                  x={-30}
                  y="100%"
                  textAnchor="end"
                  fill="#888"
                  fontSize={12}
                  fontWeight={500}
                  transform="rotate(-90)"
                >
                  Sales (Rp)
                </text>
              </YAxis>
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
                <linearGradient id="fillTarget" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF1D02" stopOpacity={0.9} />
                  <stop offset="80%" stopColor="#FF1D02" stopOpacity={0.05} />
                  {/* <stop offset="100%" stopColor="#FF1D02" stopOpacity={0} /> */}
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="target"
                stroke="#FF1D02"
                fill="url(#fillTarget)"
                strokeDasharray="10"
                strokeLinecap="round"
                strokeWidth={4}
              />
              <Area
                type="monotone"
                dataKey="sales"
                fill="url(#fillSales)"
                stroke="#27DCFF"
                strokeWidth={5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
