import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { categoryPerformance } from '@/constants/sales';

const countSales = categoryPerformance.reduce(
  (count, category) => count + category.sales,
  0,
);

export const CategoryPerformance = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Category Performance</CardTitle>
        <CardDescription>Sales and margins by category</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categoryPerformance.map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{category.category}</span>
                <span className="text-sm text-muted-foreground">
                  Rp {category.sales.toLocaleString()},000
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-secondary rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      backgroundColor: category.color,
                      width: `${(category.sales / countSales) * 100}%`,
                    }}
                  />
                </div>
                <Badge variant="outline" className="text-xs">
                  {((category.sales / countSales) * 100).toFixed(1)}% margin
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
