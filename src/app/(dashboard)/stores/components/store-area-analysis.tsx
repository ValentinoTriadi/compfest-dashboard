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
import { storesData } from '@/constants/stores';
import { Building2 } from 'lucide-react';
import {
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
} from 'recharts';

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--chart-2))',
  },
};

/**
 * Store Area Analysis Component
 * Shows the relationship between store area and revenue performance
 * Helps identify optimal store sizing and space utilization
 */
export const StoreAreaAnalysis = () => {
  // Prepare data for scatter plot
  const areaRevenueData = storesData.map((store) => ({
    area: store.area,
    revenue: store.revenue / 1000000, // Convert to millions
    name: store.name,
    skuCount: store.skuCount,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Store Area vs Revenue Analysis
        </CardTitle>
        <CardDescription>
          Relationship between store size and revenue performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              data={areaRevenueData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="area"
                type="number"
                domain={['dataMin - 10', 'dataMax + 10']}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value}m²`}
              />
              <YAxis
                dataKey="revenue"
                type="number"
                domain={['dataMin - 10', 'dataMax + 10']}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value}M`}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value, name, props) => {
                      if (name === 'revenue') {
                        return [`Rp ${value},000,000 `, 'Monthly Revenue'];
                      }
                      // return [value, name];
                    }}
                    labelFormatter={(label, payload) => {
                      if (payload && payload[0]) {
                        return `${payload[0].payload.name} - ${payload[0].payload.area}m²`;
                      }
                      return label;
                    }}
                  />
                }
              />
              <Scatter dataKey="revenue" fill="var(--color-primary)" />
            </ScatterChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 text-sm text-muted-foreground">
          Each point represents a store. X-axis shows area (m²), Y-axis shows
          monthly revenue (millions).
        </div>
      </CardContent>
    </Card>
  );
};
