'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

import { CategoryDistribution } from './components/category-distribution';
import { CriticalAlerts } from './components/critical-alert';
import { DetailedInventoryView } from './components/detailed-inventory-view';
import { InventoryHeader } from './components/inventory-header';
import { InventoryTurnover } from './components/inventory-turnover';
import { KeyMetrics } from './components/key-metrics';
import { PlacementSuggestions } from './components/placement-suggestions';
import { SearchNFilter } from './components/search-and-filter';
import { StockLevel } from './components/stock-level';
import { TopMovingItems } from './components/top-moving-items';

// Mock inventory data

export default function InventoryManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStore, setSelectedStore] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <main className="flex-1 w-full">
      {/* Header */}
      <InventoryHeader />

      <div className="p-6 space-y-6">
        {/* Overview Cards */}
        <KeyMetrics />

        {/* Critical Alerts */}
        <CriticalAlerts />

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Inventory Overview</TabsTrigger>
            <TabsTrigger value="placement">Placement Suggestions</TabsTrigger>
            <TabsTrigger value="detailed">Detailed View</TabsTrigger>
          </TabsList>

          {/* Inventory Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Inventory Turnover */}
              <InventoryTurnover />

              {/* Category Distribution */}
              <CategoryDistribution />
            </div>

            {/* Store-wise Stock Levels */}
            <StockLevel />

            {/* Top Moving Items */}
            <TopMovingItems />
          </TabsContent>

          {/* Placement Suggestions Tab */}
          <TabsContent value="placement" className="space-y-6">
            <PlacementSuggestions />
          </TabsContent>

          {/* Detailed View Tab */}
          <TabsContent value="detailed" className="space-y-6">
            {/* Search and Filters */}
            <SearchNFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedStore={selectedStore}
              setSelectedStore={setSelectedStore}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            {/*Detailed Inventory Table */}
            <DetailedInventoryView
              searchTerm={searchTerm}
              selectedStore={selectedStore}
              selectedCategory={selectedCategory}
            />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
