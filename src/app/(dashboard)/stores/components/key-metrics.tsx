import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { storeMetrics } from '@/constants/stores';
import { Building2, Store, TrendingUp, Users } from 'lucide-react';

/**
 * Key Metrics Component
 * Displays overall store network performance metrics
 * Shows total stores, total area, total SKUs, and total employees
 */
export const KeyMetrics = () => {
  const metrics = [
    {
      title: 'Total Stores',
      value: storeMetrics.totalStores,
      icon: Store,
      description: 'Active store locations',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Total Area',
      value: `${storeMetrics.totalArea.toLocaleString()} m²`,
      icon: Building2,
      description: 'Combined floor space',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Total SKUs',
      value: storeMetrics.totalSKUs.toLocaleString(),
      icon: TrendingUp,
      description: 'Products across all stores',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Total Employees',
      value: storeMetrics.totalEmployees,
      icon: Users,
      description: 'Staff members',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
