import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  avgOrderValue,
  avgOrderValueLastMonth,
  totalCustomer,
  totalCustomerLastMonth,
  totalCustomerPurchase,
  totalCustomerPurchaseLastMonth,
  totalOrder,
  totalOrderLastMonth,
  totalRevenue,
  totalRevenueLastMonth,
} from '@/constants/sales';
import { cn, countPercentage } from '@/lib/utils';
import { DollarSign, ShoppingCart, Target, Users } from 'lucide-react';

const countConversion = (tc: number, tcp: number) => {
  const conversion = (tcp / tc) * 100;
  return isNaN(conversion) ? '0' : conversion.toFixed(1);
};

const countConversionDiff = (
  tc: number,
  tcml: number,
  tcp: number,
  tcpml: number,
) => {
  const currConversion = countConversion(tc, tcp);
  const lastConversion = countConversion(tcml, tcpml);
  const diff = parseFloat(currConversion) - parseFloat(lastConversion);
  return isNaN(diff) ? 0 : diff.toFixed(1);
};

export const KeyMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            Rp {totalRevenue.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            <span
              className={cn(
                'text-accent font-bold',
                totalRevenue > totalRevenueLastMonth
                  ? 'text-[#5993ff] before:content-["+"]'
                  : 'text-destructive ',
              )}
            >
              {countPercentage(totalRevenue, totalRevenueLastMonth)}%
            </span>{' '}
            vs last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {totalOrder.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            <span
              className={cn(
                'text-accent font-bold',
                totalOrder > totalOrderLastMonth
                  ? 'text-[#5993ff] before:content-["+"]'
                  : 'text-destructive ',
              )}
            >
              {countPercentage(totalOrder, totalOrderLastMonth)}%
            </span>{' '}
            vs last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            Rp {avgOrderValue.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            <span
              className={cn(
                'text-accent font-bold',
                avgOrderValue > avgOrderValueLastMonth
                  ? 'text-[#5993ff] before:content-["+"]'
                  : 'text-destructive ',
              )}
            >
              {countPercentage(avgOrderValue, avgOrderValueLastMonth)}%
            </span>{' '}
            vs last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {countConversion(totalCustomer, totalCustomerPurchase)}%
          </div>
          <p className="text-xs text-muted-foreground">
            <span
              className={cn(
                'text-accent font-bold',
                countConversion(totalCustomer, totalCustomerPurchase) >
                  countConversion(
                    totalCustomerLastMonth,
                    totalCustomerPurchaseLastMonth,
                  )
                  ? 'text-[#5993ff] before:content-["+"]'
                  : 'text-destructive ',
              )}
            >
              {countConversionDiff(
                totalCustomer,
                totalCustomerLastMonth,
                totalCustomerPurchase,
                totalCustomerPurchaseLastMonth,
              )}
              %
            </span>{' '}
            vs last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
