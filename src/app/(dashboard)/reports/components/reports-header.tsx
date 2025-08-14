'use client';

import { Button } from '@/components/ui/button';
import { Download, Filter } from 'lucide-react';

export function ReportsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Business Reports</h1>
        <p className="text-slate-600 mt-1">
          Comprehensive analytics and insights across all stores
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" className="gap-2 bg-transparent">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>
    </div>
  );
}
