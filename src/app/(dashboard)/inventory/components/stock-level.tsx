import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { stockLevelsByStore } from '@/constants/inventory';
import {
  AlertTriangle,
  MoreHorizontal,
  Package,
  Store,
  TrendingUp,
} from 'lucide-react';

export const StockLevel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Store Performance Overview</CardTitle>
        <CardDescription>
          Inventory status and health metrics across all locations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {stockLevelsByStore.map((store, index) => {
            const stockHealth =
              ((store.totalItems - store.lowStock - store.outOfStock) /
                store.totalItems) *
              100;
            const isHealthy = stockHealth >= 85;

            return (
              <div
                key={index}
                className="p-4 border rounded-lg space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Store className="h-4 w-4 text-primary" />
                    <span className="font-medium">{store.store}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                {/* Stock Health Indicator */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Stock Health</span>
                    <span
                      className={`font-medium ${isHealthy ? 'text-green-600' : 'text-yellow-600'}`}
                    >
                      {stockHealth.toFixed(0)}%
                    </span>
                  </div>
                  <Progress value={stockHealth} className="h-2" />
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-2 bg-muted/50 rounded">
                    <Package className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                    <div className="text-lg font-bold">{store.totalItems}</div>
                    <div className="text-xs text-muted-foreground">
                      Total SKUs
                    </div>
                  </div>
                  <div className="text-center p-2 bg-muted/50 rounded">
                    <TrendingUp className="h-4 w-4 mx-auto mb-1 text-green-600" />
                    <div className="text-lg font-bold text-green-600">
                      {store.totalItems - store.lowStock - store.outOfStock}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      In Stock
                    </div>
                  </div>
                </div>

                {/* Alert Items */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3 text-yellow-500" />
                      <span className="text-muted-foreground">Low Stock</span>
                    </div>
                    <span className="font-medium text-yellow-600">
                      {store.lowStock}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3 text-red-500" />
                      <span className="text-muted-foreground">
                        Out of Stock
                      </span>
                    </div>
                    <span className="font-medium text-red-600">
                      {store.outOfStock}
                    </span>
                  </div>
                </div>

                {/* Total Value */}
                <div className="pt-2 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Inventory Value
                    </span>
                    <span className="font-medium">
                      Rp {store.value.toLocaleString()},000
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                >
                  View Details
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
