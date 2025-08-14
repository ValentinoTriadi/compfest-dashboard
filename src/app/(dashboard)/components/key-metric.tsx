import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { totalRevenue, totalRevenueLastMonth } from '@/constants/sales';
import { cn, countPercentage } from '@/lib/utils';
import {
  AlertTriangle,
  ArrowUpRight,
  DollarSign,
  Package,
  Tag,
  Target,
  Users,
} from 'lucide-react';

export const KeyMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            Rp {totalRevenue.toLocaleString()}
          </div>
          <div className=" items-center text-xs text-muted-foreground">
            <span
              className={cn(
                'text-accent',
                totalRevenue > totalRevenueLastMonth
                  ? 'text-green-600 before:content-["+"]'
                  : 'text-destructive ',
              )}
            >
              {countPercentage(totalRevenue, totalRevenueLastMonth)}%{' '}
            </span>
            from last month
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Active Promotions
          </CardTitle>
          <Tag className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8</div>
          <div className="flex items-center text-xs text-blue-600">
            <Target className="h-3 w-3 mr-1" />3 ending this week
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">23</div>
          <div className="flex items-center text-xs text-red-600">
            <AlertTriangle className="h-3 w-3 mr-1" />4 critical alerts
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">142</div>
          <div className="flex items-center text-xs text-green-600">
            <ArrowUpRight className="h-3 w-3 mr-1" />5 new hires this month
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
