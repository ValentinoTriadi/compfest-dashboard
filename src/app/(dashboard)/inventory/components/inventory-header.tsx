import { Button } from '@/components/ui/button';
import { Download, Package, Plus, RefreshCw } from 'lucide-react';

export const InventoryHeader = () => {
  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            <h1 className="text-xl font-bold">Inventory Management</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button size="sm" variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Sync Stock
          </Button>
          <Button size="sm" variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>
    </header>
  );
};
