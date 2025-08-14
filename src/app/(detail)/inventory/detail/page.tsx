'use client';

import { DetailedInventoryView } from '@/app/(dashboard)/inventory/components/detailed-inventory-view';
import { SearchNFilter } from '@/app/(dashboard)/inventory/components/search-and-filter';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function InventoryDetail() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStore, setSelectedStore] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const router = useRouter();

  return (
    <main className="flex-1 w-full">
      <div className="p-6 space-y-6">
        <div className="mb-6 flex gap-2 items-start">
          <div>
            <Button onClick={router.back} variant={'ghost'}>
              <ArrowLeft />
            </Button>
          </div>
          <div className="">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Detailed Inventory View
            </h1>
            <p className="text-muted-foreground">
              Overview of your store inventory
            </p>
          </div>
        </div>
        <SearchNFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedStore={selectedStore}
          setSelectedStore={setSelectedStore}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <DetailedInventoryView
          searchTerm={searchTerm}
          selectedStore={selectedStore}
          selectedCategory={selectedCategory}
          isDetailed={true}
        />
      </div>
    </main>
  );
}
