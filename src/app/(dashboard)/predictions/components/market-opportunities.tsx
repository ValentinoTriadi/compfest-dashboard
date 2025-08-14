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
import { opportunities } from '@/constants/predictions';
import { Zap } from 'lucide-react';

export function MarketOpportunities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-accent" />
          Market Opportunities
        </CardTitle>
        <CardDescription>
          AI-identified growth opportunities and recommendations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="p-4 border rounded-lg space-y-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{opportunity.title}</h3>
                  <Badge variant="outline" className="text-xs mt-1">
                    {opportunity.category}
                  </Badge>
                </div>
                <div className="text-right">
                  <p className="font-medium text-accent">
                    {opportunity.potential}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {Math.round(opportunity.confidence * 100)}% confidence
                  </p>
                </div>
              </div>

              <p className="text-sm">{opportunity.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Timeframe</p>
                  <p className="font-medium">{opportunity.timeframe}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Action Required</p>
                  <p className="font-medium">{opportunity.action}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm">Implement</Button>
                <Button size="sm" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
