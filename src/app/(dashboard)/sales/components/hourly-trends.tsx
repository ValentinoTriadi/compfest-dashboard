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
import { allHourlyData } from '@/constants/sales';
import { useEffect, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const getDataToShow = (containerWidth: number) => {
  const barWidth = 25; // Fixed bar width
  const spacing = 5; // Space between bars
  const margins = 30; // Total margins

  const availableWidth = containerWidth - margins;
  const barSpacing = barWidth + spacing;
  const maxBars = Math.floor(availableWidth / barSpacing);

  // Show at least 15 bars (one day) and at most all data
  const barsToShow = Math.max(15, Math.min(maxBars, allHourlyData.length));

  // Take the most recent data
  return allHourlyData.slice(-barsToShow);
};

export const HourlyTrends = () => {
  const [hourlyTrends, setHourlyTrends] = useState(() => getDataToShow(800));

  useEffect(() => {
    const handleResize = () => {
      // Estimate container width based on window width
      const estimatedWidth = Math.min(window.innerWidth - 100, 1200);
      setHourlyTrends(getDataToShow(estimatedWidth));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hourly Sales Pattern</CardTitle>
        <CardDescription>
          Hourly sales data (showing {hourlyTrends.length} hours) - 8AM to 10PM
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            sales: {
              label: 'Sales',
              color: 'hsl(var(--chart-2))',
            },
          }}
          className="h-[200px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={hourlyTrends}
              margin={{
                top: 5,
                right: 5,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="hour"
                tick={{ fontSize: 9 }}
                tickLine={false}
                axisLine={false}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
              />
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
              <Bar
                dataKey="sales"
                fill="var(--color-primary)"
                radius={[2, 2, 0, 0]}
                barSize={25}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
