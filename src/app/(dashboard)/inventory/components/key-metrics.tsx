import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { inventoryOverview } from '@/constants/inventory';
import { AlertTriangle, Package, RefreshCw, TrendingUp } from 'lucide-react';

export const KeyMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total SKUs</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {inventoryOverview.totalSKUs.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">Across all stores</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
          <AlertTriangle className="h-4 w-4 text-destructive" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-destructive">
            {inventoryOverview.lowStockItems}
          </div>
          <p className="text-xs text-muted-foreground">Items need restock</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
          <AlertTriangle className="h-4 w-4 text-destructive" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-destructive">
            {inventoryOverview.outOfStockItems}
          </div>
          <p className="text-xs text-muted-foreground">Items unavailable</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-xl font-bold">
            Rp {inventoryOverview.totalValue.toLocaleString()},000
          </div>
          <p className="text-xs text-muted-foreground">Inventory worth</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Turnover Rate</CardTitle>
          <RefreshCw className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {inventoryOverview.turnoverRate}x
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="text-accent font-medium">+0.3</span> vs target
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
