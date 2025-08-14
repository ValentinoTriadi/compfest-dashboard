import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { topMovingItems } from '@/constants/inventory';
import { Package, TrendingDown, TrendingUp } from 'lucide-react';

export const TopMovingItems = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Moving Items</CardTitle>
        <CardDescription>Best performing products this week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topMovingItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.id} • {item.brand}
                  </p>
                  <Badge variant="outline" className="text-xs mt-1">
                    {item.category}
                  </Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
                  {item.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-accent" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-destructive" />
                  )}
                  <span className="font-medium">{item.soldThisWeek} sold</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Rp {item.revenue.toLocaleString()},000 revenue
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
