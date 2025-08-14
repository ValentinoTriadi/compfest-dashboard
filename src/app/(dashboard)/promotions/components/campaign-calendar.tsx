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
import { upcomingPromotions } from '@/constants/promotions';
import { Calendar, CheckCircle, Edit } from 'lucide-react';

export function CampaignCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Campaigns</CardTitle>
        <CardDescription>Scheduled and draft promotions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingPromotions.map((promotion) => (
            <div
              key={promotion.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{promotion.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(promotion.startDate).toLocaleDateString()} -{' '}
                    {new Date(promotion.endDate).toLocaleDateString()}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {promotion.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {promotion.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge
                  variant={
                    promotion.status === 'Scheduled' ? 'default' : 'secondary'
                  }
                >
                  {promotion.status}
                </Badge>
                <p className="text-sm text-muted-foreground mt-1">
                  {promotion.discount} off
                </p>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline">
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  {promotion.status === 'Draft' && (
                    <Button size="sm">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Schedule
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
