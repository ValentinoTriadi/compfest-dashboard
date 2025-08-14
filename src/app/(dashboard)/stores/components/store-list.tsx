import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { storesData } from '@/constants/stores';
import {
  Building2,
  Calendar,
  MapPin,
  Package,
  TrendingDown,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useMemo } from 'react';

interface StoreListProps {
  searchTerm: string;
  selectedPerformance: string;
  selectedLocation: string;
}

const getPerformanceBadge = (performance: string) => {
  switch (performance) {
    case 'excellent':
      return {
        variant: 'default' as const,
        className: 'bg-green-100 text-green-800',
      };
    case 'good':
      return {
        variant: 'secondary' as const,
        className: 'bg-blue-100 text-blue-800',
      };
    case 'needs-improvement':
      return {
        variant: 'destructive' as const,
        className: 'bg-orange-100 text-orange-800',
      };
    default:
      return { variant: 'outline' as const, className: '' };
  }
};

const getLocationFromAddress = (address: string) => {
  if (address.includes('Jakarta Pusat')) return 'jakarta-pusat';
  if (address.includes('Jakarta Selatan')) return 'jakarta-selatan';
  if (address.includes('Jakarta Utara')) return 'jakarta-utara';
  if (address.includes('Tangerang Selatan')) return 'tangerang-selatan';
  return 'other';
};

/**
 * Store List Component
 * Displays a comprehensive table of all stores with their details
 * Includes filtering capabilities and performance indicators
 */
export const StoreList = ({
  searchTerm,
  selectedPerformance,
  selectedLocation,
}: StoreListProps) => {
  const filteredStores = useMemo(() => {
    return storesData.filter((store) => {
      const matchesSearch =
        searchTerm === '' ||
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.manager.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.address.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPerformance =
        selectedPerformance === 'all' ||
        store.performance === selectedPerformance;

      const storeLocation = getLocationFromAddress(store.address);
      const matchesLocation =
        selectedLocation === 'all' || storeLocation === selectedLocation;

      return matchesSearch && matchesPerformance && matchesLocation;
    });
  }, [searchTerm, selectedPerformance, selectedLocation]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Store Network Overview
        </CardTitle>
        <CardDescription>
          {filteredStores.length} stores found
          {selectedPerformance !== 'all' &&
            ` • ${selectedPerformance} performance`}
          {selectedLocation !== 'all' &&
            ` • ${selectedLocation.replace('-', ' ')}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Store</TableHead>
                <TableHead className="min-w-[200px]">Details</TableHead>
                <TableHead className="min-w-[100px]">Opened</TableHead>
                <TableHead className="min-w-[100px]">Area</TableHead>
                <TableHead className="min-w-[100px]">SKUs</TableHead>
                <TableHead className="min-w-[100px]">Staff</TableHead>
                <TableHead className="min-w-[120px]">Revenue</TableHead>
                <TableHead className="min-w-[100px]">Growth</TableHead>
                <TableHead className="min-w-[120px]">Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStores.map((store) => {
                const badge = getPerformanceBadge(store.performance);
                return (
                  <TableRow key={store.id}>
                    <TableCell className="font-medium">{store.name}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Users className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm font-medium">
                            {store.manager}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground truncate max-w-[180px]">
                            {store.address}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm">{store.openYear}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm">{store.area} m²</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Package className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {store.skuCount.toLocaleString()}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm">{store.employeeCount}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-medium">
                        Rp {(store.revenue / 1000000).toFixed(1)}M
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {store.growth > 0 ? (
                          <TrendingUp className="h-3 w-3 text-green-600" />
                        ) : (
                          <TrendingDown className="h-3 w-3 text-red-600" />
                        )}
                        <span
                          className={`text-sm font-medium ${
                            store.growth > 0 ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {store.growth > 0 ? '+' : ''}
                          {store.growth}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge {...badge}>
                        {store.performance.replace('-', ' ')}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {filteredStores.length === 0 && (
          <div className="text-center py-8">
            <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium">No stores found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
