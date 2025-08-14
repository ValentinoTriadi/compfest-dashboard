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
import { inventoryTurnoverData } from '@/constants/inventory';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

export const InventoryTurnover = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Turnover Rate</CardTitle>
        <CardDescription>Monthly turnover vs targets</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            turnover: {
              label: 'Actual Turnover',
            },
            target: {
              label: 'Target',
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={inventoryTurnoverData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip
                content={<ChartTooltipContent indicator="line" />}
              />
              <defs>
                <linearGradient id="fillTurnover" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#27DCFF" stopOpacity={0.9} />
                  <stop offset="80%" stopColor="#27DCFF" stopOpacity={0.05} />
                  {/* <stop offset="0%" stopColor="#27DCFF" stopOpacity={0.5} />
                  <stop offset="80%" stopColor="#27DCFF" stopOpacity={0.05} />
                  <stop offset="100%" stopColor="#27DCFF" stopOpacity={0} /> */}
                </linearGradient>
                <linearGradient id="fillTarget" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF1D02" stopOpacity={0.5} />
                  <stop offset="80%" stopColor="#FF1D02" stopOpacity={0.05} />
                  <stop offset="100%" stopColor="#FF1D02" stopOpacity={0} />
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
                dataKey="turnover"
                fill="url(#fillTurnover)"
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
