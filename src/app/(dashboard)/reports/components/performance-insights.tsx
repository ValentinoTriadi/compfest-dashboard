'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { performanceInsights } from '@/constants/reports';
import {
  AlertTriangle,
  CheckCircle,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';

export function PerformanceInsights() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle':
        return <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />;
      case 'AlertTriangle':
        return <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />;
      case 'TrendingUp':
        return <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />;
      case 'TrendingDown':
        return <TrendingDown className="h-5 w-5 text-red-600 mt-0.5" />;
      default:
        return <CheckCircle className="h-5 w-5 text-gray-600 mt-0.5" />;
    }
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-orange-50 border-orange-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getTitleColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-green-900';
      case 'warning':
        return 'text-orange-900';
      case 'info':
        return 'text-blue-900';
      default:
        return 'text-gray-900';
    }
  };

  const getDescriptionColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-green-800';
      case 'warning':
        return 'text-orange-800';
      case 'info':
        return 'text-blue-800';
      default:
        return 'text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Insights & Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {performanceInsights.map((insight, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 p-4 border rounded-lg ${getBackgroundColor(insight.type)}`}
            >
              {getIcon(insight.icon)}
              <div>
                <h4 className={`font-semibold ${getTitleColor(insight.type)}`}>
                  {insight.title}
                </h4>
                <p className={getDescriptionColor(insight.type)}>
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
