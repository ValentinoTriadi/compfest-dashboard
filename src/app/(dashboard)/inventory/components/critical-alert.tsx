import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { detailedInventory } from '@/constants/inventory';
import { AlertTriangle, Eye, Package, Plus } from 'lucide-react';

export const CriticalAlerts = () => {
  // Find items with critical stock levels across all stores
  const criticalItems = detailedInventory
    .map((item) => {
      const criticalStores = Object.entries(item.stores).filter(
        ([_, store]) => {
          const stockLevel = store.stock / store.minStock;
          return stockLevel <= 0.2; // 20% or less stock
        },
      );

      if (criticalStores.length > 0) {
        const totalCriticalStock = criticalStores.reduce(
          (sum, [_, store]) => sum + store.stock,
          0,
        );
        const worstStore = criticalStores.reduce(
          (worst, [storeName, store]) => {
            const currentLevel = store.stock / store.minStock;
            const worstLevel = worst.store.stock / worst.store.minStock;
            return currentLevel < worstLevel
              ? { name: storeName, store }
              : worst;
          },
          { name: criticalStores[0][0], store: criticalStores[0][1] },
        );

        return {
          ...item,
          criticalStores: criticalStores.length,
          totalCriticalStock,
          worstStoreName: worstStore.name,
          worstStockLevel: worstStore.store.stock / worstStore.store.minStock,
          priority:
            worstStore.store.stock / worstStore.store.minStock <= 0.1
              ? 'High'
              : 'Medium',
        };
      }
      return null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .sort((a, b) => a.worstStockLevel - b.worstStockLevel);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          Critical Stock Alerts
        </CardTitle>
        <CardDescription>
          {criticalItems.length} items requiring immediate attention
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {criticalItems.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No critical stock alerts at this time</p>
            </div>
          ) : (
            criticalItems.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <Package className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.id} • {item.brand}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {item.criticalStores} store
                        {item.criticalStores > 1 ? 's' : ''} affected
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex justify-end items-center gap-2 mb-1">
                    <Badge
                      variant={
                        item.priority === 'High' ? 'destructive' : 'secondary'
                      }
                      className="text-xs"
                    >
                      {item.priority} Priority
                    </Badge>
                  </div>
                  <p className="text-sm font-medium">
                    Worst:{' '}
                    <span className="font-mono text-destructive">
                      {Math.round(item.worstStockLevel * 100)}%
                    </span>{' '}
                    at {item.worstStoreName}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm">
                      <Plus className="h-3 w-3 mr-1" />
                      Restock
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};
