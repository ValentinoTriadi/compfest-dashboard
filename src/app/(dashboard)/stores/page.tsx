'use client';

import { useState } from 'react';

// Import modular components
import { KeyMetrics } from './components/key-metrics';
import { SearchNFilter } from './components/search-and-filter';
import { StoreHeader } from './components/store-header';
import { StoreList } from './components/store-list';
import { TopPerformingStores } from './components/top-performing-stores';

/**
 * Store Management Page
 * Main page for managing and monitoring all store locations
 * Provides comprehensive overview of store network performance
 */
export default function StoreManagement() {
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPerformance, setSelectedPerformance] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  return (
    <div className="flex-1 w-full">
      <div className="p-6 space-y-6">
        {/* Header with search and filters */}
        <StoreHeader />

        {/* Key metrics overview */}
        <KeyMetrics />

        {/* Charts section */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StorePerformanceChart />

          <StoreAreaAnalysis />
        </div> */}

        <SearchNFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedPerformance={selectedPerformance}
          setSelectedPerformance={setSelectedPerformance}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />

        {/* Store list with filtering */}
        <StoreList
          searchTerm={searchTerm}
          selectedPerformance={selectedPerformance}
          selectedLocation={selectedLocation}
        />

        {/* Top performing stores sidebar */}
        <TopPerformingStores />
      </div>
    </div>
  );
}
