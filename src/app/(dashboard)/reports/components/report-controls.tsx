'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  dateRangeOptions,
  exportFormats,
  reportTypes,
} from '@/constants/reports';

interface ReportControlsProps {
  reportType: string;
  setReportType: (value: string) => void;
  selectedStore: string;
  setSelectedStore: (value: string) => void;
  dateRange: string;
  setDateRange: (value: string) => void;
}

export function ReportControls({
  reportType,
  setReportType,
  selectedStore,
  setSelectedStore,
  dateRange,
  setDateRange,
}: ReportControlsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Report Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Report Type</Label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {reportTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Store</Label>
            <Select value={selectedStore} onValueChange={setSelectedStore}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stores</SelectItem>
                <SelectItem value="toko-1">Toko 1</SelectItem>
                <SelectItem value="toko-2">Toko 2</SelectItem>
                <SelectItem value="toko-3">Toko 3</SelectItem>
                <SelectItem value="toko-4">Toko 4</SelectItem>
                <SelectItem value="toko-5">Toko 5</SelectItem>
                <SelectItem value="toko-6">Toko 6</SelectItem>
                <SelectItem value="toko-7">Toko 7</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Date Range</Label>
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {dateRangeOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Format</Label>
            <Select defaultValue="pdf">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {exportFormats.map((format) => (
                  <SelectItem key={format.value} value={format.value}>
                    {format.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
