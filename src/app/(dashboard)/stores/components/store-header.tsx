import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

/**
 * Store Header Component
 * Contains the main title, search functionality, and filter controls
 * Provides interface for filtering stores by performance and location
 */
export const StoreHeader = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Store Management
          </h1>
          <p className="text-muted-foreground">
            Monitor and manage all store locations and performance
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Store
        </Button>
      </div>
    </div>
  );
};
