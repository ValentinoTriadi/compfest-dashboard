'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Brain, Calendar, Eye, RefreshCw } from 'lucide-react';

interface PredictionsHeaderProps {
  selectedTimeframe: string;
  onTimeframeChange: (value: string) => void;
}

export function PredictionsHeader({
  selectedTimeframe,
  onTimeframeChange,
}: PredictionsHeaderProps) {
  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <h1 className="text-xl font-bold">Predictive Analytics</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Select value={selectedTimeframe} onValueChange={onTimeframeChange}>
            <SelectTrigger className="w-44">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Next Month</SelectItem>
              <SelectItem value="3months">Next 3 Months</SelectItem>
              <SelectItem value="6months">Next 6 Months</SelectItem>
              <SelectItem value="1year">Next Year</SelectItem>
            </SelectContent>
          </Select>
          <Button size="sm" variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Update Models
          </Button>
          <Button size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View Insights
          </Button>
        </div>
      </div>
    </header>
  );
}
