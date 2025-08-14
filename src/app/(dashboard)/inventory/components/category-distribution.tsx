import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { categoryDistribution } from '@/constants/inventory';

export const CategoryDistribution = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory by Category</CardTitle>
        <CardDescription>Stock distribution and value</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categoryDistribution.map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{category.category}</span>
                <div className="text-right">
                  <span className="text-sm font-medium">
                    {category.items} items
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Rp {category.value.toLocaleString()},000
                  </p>
                </div>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(category.items / 420) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
