import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

const inventoryAlerts = [
  { product: 'Bananas', store: 'Store 3', stock: 5, status: 'critical' },
  { product: 'Milk', store: 'Store 2', stock: 3, status: 'critical' },
  { product: 'Eggs', store: 'Store 1', stock: 12, status: 'low' },
  { product: 'Bread', store: 'Store 5', stock: 8, status: 'low' },
];

export const InventoryAlerts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          Inventory Alerts
        </CardTitle>
        <CardDescription>Items requiring immediate attention</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {inventoryAlerts.map((alert, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div>
                <p className="font-medium">{alert.product}</p>
                <p className="text-sm text-muted-foreground">{alert.store}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{alert.stock} units</p>
                <Badge
                  variant={
                    alert.status === 'critical' ? 'destructive' : 'secondary'
                  }
                >
                  {alert.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
