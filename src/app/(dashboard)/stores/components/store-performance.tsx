import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { storeComparisonData, totalRevenue } from '@/constants/sales';
import { useState } from 'react';
import {
  Cell,
  Label,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from 'recharts';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';

const storePerformance = storeComparisonData.map((store) => ({
  name: store.store,
  value: Number(((store.thisMonth / (totalRevenue / 1000)) * 100).toFixed(2)),
  color: store.color,
}));

export const StorePerformance = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Store Performance Distribution</CardTitle>
        <CardDescription>Sales contribution by store</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={storePerformance}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
              activeIndex={activeIndex}
              isAnimationActive={true}
              animationDuration={300}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          7
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Stores
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
              {storePerformance.map((entry, index) => (
                <Cell
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(-1)}
                  key={`cell-${index}`}
                  fill={entry.color}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value, name) => [`${value}%`, name]} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
