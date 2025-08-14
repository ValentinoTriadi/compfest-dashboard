import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { storeComparisonData } from '@/constants/sales';
import { Store, TrendingDown, TrendingUp } from 'lucide-react';

export const StoreComparison = () => {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Store Performance Comparison</CardTitle>
        <CardDescription>Month-over-month growth by store</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {storeComparisonData.map((store, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Store className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{store.store}</p>
                  <p className="text-sm text-muted-foreground">
                    Rp {store.thisMonth.toLocaleString()},000 this month
                  </p>
                </div>
              </div>
              <div className="text-right flex items-end flex-col">
                <div className="flex items-center gap-2">
                  {store.growth > 0 ? (
                    <TrendingUp className="h-4 w-4 text-[#5993ff]" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-destructive" />
                  )}
                  <span
                    className={`font-medium ${store.growth > 0 ? 'text-[#5993ff]' : 'text-destructive'}`}
                  >
                    {store.growth > 0 ? '+' : ''}
                    {store.growth}%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Rp {store.lastMonth.toLocaleString()},000 last month
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
