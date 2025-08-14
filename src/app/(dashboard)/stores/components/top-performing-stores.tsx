import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { storesData } from '@/constants/stores';
import { Award, TrendingDown, TrendingUp } from 'lucide-react';

/**
 * Top Performing Stores Component
 * Highlights the best and worst performing stores
 * Shows key metrics for quick performance assessment
 */
export const TopPerformingStores = () => {
  // Sort stores by revenue and growth
  const topByRevenue = [...storesData]
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 3);

  const topByGrowth = [...storesData]
    .sort((a, b) => b.growth - a.growth)
    .slice(0, 3);

  const needsAttention = [...storesData]
    .filter(
      (store) => store.growth < 5 || store.performance === 'needs-improvement',
    )
    .sort((a, b) => a.growth - b.growth)
    .slice(0, 2);

  return (
    <div className="space-y-6">
      {/* Top Revenue Performers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-600" />
            Top Revenue Performers
          </CardTitle>
          <CardDescription>Stores with highest monthly revenue</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topByRevenue.map((store, index) => (
              <div
                key={store.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100">
                    <span className="text-sm font-bold text-yellow-600">
                      #{index + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium">{store.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {store.manager} • {store.area}m²
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    Rp {(store.revenue / 1000000).toFixed(1)}M
                  </p>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    <span className="text-sm text-green-600">
                      +{store.growth}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Growth Performers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Highest Growth Rate
          </CardTitle>
          <CardDescription>Stores with best growth performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topByGrowth.map((store, index) => (
              <div
                key={store.id}
                className="flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                    <span className="text-sm font-bold text-green-600">
                      #{index + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium">{store.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Opened {store.openYear} •{' '}
                      {store.skuCount.toLocaleString()} SKUs
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="font-semibold text-green-600">
                      +{store.growth}%
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Rp {(store.revenue / 1000000).toFixed(1)}M revenue
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stores Needing Attention */}
      {needsAttention.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-orange-600" />
              Needs Attention
            </CardTitle>
            <CardDescription>
              Stores requiring performance improvement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {needsAttention.map((store) => (
                <div
                  key={store.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-orange-200 bg-orange-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100">
                      <TrendingDown className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{store.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {store.manager} • {store.employeeCount} staff
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="destructive" className="mb-1">
                      {store.performance.replace('-', ' ')}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <TrendingDown className="h-3 w-3 text-red-600" />
                      <span className="text-sm text-red-600">
                        {store.growth > 0 ? '+' : ''}
                        {store.growth}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
