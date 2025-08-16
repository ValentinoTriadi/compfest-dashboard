'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, Lightbulb, Plus, Tag } from 'lucide-react';

interface PromotionHeaderProps {
  selectedTimeframe: string;
  onTimeframeChange: (value: string) => void;
}

export function PromotionHeader({
  selectedTimeframe,
  onTimeframeChange,
}: PromotionHeaderProps) {
  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Tag className="h-5 w-5 text-primary" />
            <h1 className="text-xl font-bold">Promotion Planning</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Select value={selectedTimeframe} onValueChange={onTimeframeChange}>
            <SelectTrigger className="w-44 cursor-pointer">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button size="sm" variant="outline">
            <Lightbulb className="h-4 w-4 mr-2" />
            AI Suggestions
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Campaign
          </Button>
        </div>
      </div>
    </header>
  );
}
