'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FileText, Package, Tag, Target } from 'lucide-react';
import Link from 'next/link';

import { KeyMetrics } from './components/key-metric';
import { DailySalesChart } from './sales/components/daily-sales-chart';
import { InventoryAlerts } from './stores/components/inventory-alert';
import { StorePerformance } from './stores/components/store-performance';

export default function Dashboard() {
  return (
    <main className="flex-1 p-6 w-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Market Data Dashboard
        </h1>
        <p className="text-muted-foreground">
          Overview of your 7-store retail operation
        </p>
      </div>

      {/* Key Metrics Cards */}
      <KeyMetrics />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Sales Trend */}
        <DailySalesChart />

        {/* Store Performance */}
        <StorePerformance />
      </div>

      {/* Alerts and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Alerts */}
        <InventoryAlerts />

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used management tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/promotions">
                <Button
                  className="w-full h-20 flex flex-col gap-2 bg-transparent"
                  variant="outline"
                >
                  <Tag className="h-5 w-5" />
                  <span className="text-sm">Create Promotion</span>
                </Button>
              </Link>
              <Link href="/inventory">
                <Button
                  className="w-full h-20 flex flex-col gap-2 bg-transparent"
                  variant="outline"
                >
                  <Package className="h-5 w-5" />
                  <span className="text-sm">Restock Items</span>
                </Button>
              </Link>
              <Link href="/reports">
                <Button
                  className="w-full h-20 flex flex-col gap-2 bg-transparent"
                  variant="outline"
                >
                  <FileText className="h-5 w-5" />
                  <span className="text-sm">Generate Report</span>
                </Button>
              </Link>
              <Link href="/predictions">
                <Button
                  className="w-full h-20 flex flex-col gap-2 bg-transparent"
                  variant="outline"
                >
                  <Target className="h-5 w-5" />
                  <span className="text-sm">View Predictions</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
