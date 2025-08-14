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
import { promotionSuggestions } from '@/constants/promotions';
import { Lightbulb } from 'lucide-react';

export function AISuggestions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-accent" />
          AI-Powered Promotion Suggestions
        </CardTitle>
        <CardDescription>
          Based on sales data, inventory levels, and market trends
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {promotionSuggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="p-4 border rounded-lg space-y-3"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{suggestion.title}</h3>
                <Badge
                  variant={
                    suggestion.priority === 'High' ? 'default' : 'secondary'
                  }
                >
                  {suggestion.priority} Priority
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Category</p>
                  <p className="font-medium">{suggestion.category}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Suggested Discount</p>
                  <p className="font-medium">{suggestion.suggestedDiscount}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Timing</p>
                  <p className="font-medium">{suggestion.timing}</p>
                </div>
              </div>

              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm">{suggestion.reason}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-muted-foreground">Expected ROI:</span>
                  <span className="font-medium text-accent">
                    {suggestion.expectedROI}x
                  </span>
                  <span className="text-muted-foreground">Stores:</span>
                  <span className="font-medium">
                    {suggestion.stores.join(', ')}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Customize
                  </Button>
                  <Button size="sm">Create Campaign</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
