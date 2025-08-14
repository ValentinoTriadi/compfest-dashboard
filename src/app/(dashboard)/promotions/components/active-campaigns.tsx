'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { activePromotions } from '@/constants/promotions';
import { Edit, MoreHorizontal, Pause, Play } from 'lucide-react';

export function ActiveCampaigns() {
  return (
    <div className="space-y-4">
      {activePromotions.map((promotion) => (
        <Card key={promotion.id} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">{promotion.name}</CardTitle>
                <CardDescription className="flex items-center gap-4 mt-1">
                  <Badge variant="outline">{promotion.type}</Badge>
                  <Badge variant="outline">{promotion.category}</Badge>
                  <span className="text-sm">{promotion.discount} off</span>
                </CardDescription>
              </div>
              <Badge
                variant={
                  promotion.status === 'Active' ? 'default' : 'secondary'
                }
              >
                {promotion.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">
                  {new Date(promotion.startDate).toLocaleDateString()} -{' '}
                  {new Date(promotion.endDate).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stores</p>
                <p className="font-medium">{promotion.stores.join(', ')}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="font-medium">
                  Rp {promotion.performance.revenue.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ROI</p>
                <p className="font-medium">{promotion.performance.roi}x</p>
              </div>
            </div>

            {promotion.status === 'Active' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress to Target</span>
                  <span>
                    {Math.round(
                      (promotion.performance.revenue / promotion.target) * 100,
                    )}
                    %
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${Math.min((promotion.performance.revenue / promotion.target) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Edit className="h-3 w-3 mr-1" />
                Edit
              </Button>
              {promotion.status === 'Active' ? (
                <Button size="sm" variant="outline">
                  <Pause className="h-3 w-3 mr-1" />
                  Pause
                </Button>
              ) : (
                <Button size="sm" variant="outline">
                  <Play className="h-3 w-3 mr-1" />
                  Activate
                </Button>
              )}
              <Button size="sm" variant="outline">
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
