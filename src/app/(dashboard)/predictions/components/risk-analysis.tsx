'use client';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { riskAlerts } from '@/constants/predictions';
import { AlertTriangle } from 'lucide-react';

export function RiskAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          Risk Assessment & Alerts
        </CardTitle>
        <CardDescription>
          Potential risks and recommended actions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {riskAlerts.map((risk) => (
            <div key={risk.id} className="p-4 border rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{risk.title}</h3>
                  <p className="text-sm text-muted-foreground">{risk.type}</p>
                </div>
                <Badge
                  variant={
                    risk.severity === 'Critical'
                      ? 'destructive'
                      : risk.severity === 'High'
                        ? 'default'
                        : 'secondary'
                  }
                >
                  {risk.severity}
                </Badge>
              </div>

              <p className="text-sm">{risk.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Impact</p>
                  <p className="font-medium">{risk.impact}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Confidence</p>
                  <p className="font-medium">
                    {Math.round(risk.confidence * 100)}%
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 p-3 rounded-lg">
                <p className="text-sm font-medium">Recommended Action:</p>
                <p className="text-sm">{risk.action}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
