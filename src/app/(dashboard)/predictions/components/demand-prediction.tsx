'use client';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { demandPredictions } from '@/constants/predictions';
import { TrendingDown, TrendingUp } from 'lucide-react';

export function DemandPrediction() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Demand Predictions</CardTitle>
        <CardDescription>
          AI-powered demand forecasting for inventory planning
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {demandPredictions.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{item.product}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.category}
                  </p>
                </div>
                <Badge
                  variant={
                    item.priority === 'Critical'
                      ? 'destructive'
                      : item.priority === 'High'
                        ? 'default'
                        : item.priority === 'Medium'
                          ? 'secondary'
                          : 'outline'
                  }
                >
                  {item.priority}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Current Stock</p>
                  <p className="font-medium">{item.currentStock} units</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Predicted Demand</p>
                  <div className="flex items-center gap-1">
                    {item.trend === 'up' ? (
                      <TrendingUp className="h-3 w-3 text-accent" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-destructive" />
                    )}
                    <span className="font-medium">
                      {item.predictedDemand} units
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground">Confidence</p>
                  <p className="font-medium">
                    {Math.round(item.confidence * 100)}%
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Timeframe</p>
                  <p className="font-medium">{item.timeframe}</p>
                </div>
              </div>

              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm font-medium">Recommendation:</p>
                <p className="text-sm">{item.recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
