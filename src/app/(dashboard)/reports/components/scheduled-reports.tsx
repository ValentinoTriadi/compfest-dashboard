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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { reportTypes, scheduledReports } from '@/constants/reports';
import { FileText } from 'lucide-react';

export function ScheduledReports() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Scheduled Reports</CardTitle>
          <CardDescription>
            Automated report generation and delivery
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledReports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">{report.name}</h3>
                    <p className="text-sm text-slate-600">
                      Next run:{' '}
                      {new Date(report.nextRun).toLocaleDateString('en-US')}
                    </p>
                    <p className="text-xs text-slate-500">
                      Last run:{' '}
                      {new Date(report.lastRun).toLocaleDateString('en-US')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge
                    variant={
                      report.status === 'Active' ? 'default' : 'secondary'
                    }
                  >
                    {report.status === 'Active' ? 'Active' : 'Scheduled'}
                  </Badge>
                  <span className="text-sm text-slate-600">
                    {report.frequency === 'Weekly'
                      ? 'Weekly'
                      : report.frequency === 'Monthly'
                        ? 'Monthly'
                        : report.frequency === 'Quarterly'
                          ? 'Quarterly'
                          : 'Yearly'}
                  </span>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Create New Scheduled Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Report Name</Label>
              <Input placeholder="Enter report name" />
            </div>
            <div className="space-y-2">
              <Label>Frequency</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Report Type</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select report type" />
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
              <Label>Recipients</Label>
              <Input placeholder="Enter email addresses" />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Create Scheduled Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
