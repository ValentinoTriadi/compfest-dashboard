import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
import { detailedInventory } from '@/constants/inventory';
import {
  AlertTriangle,
  Download,
  Package,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

interface DetailedInventoryViewProps {
  searchTerm: string;
  selectedStore: string;
  selectedCategory: string;
  isDetailed?: boolean;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'good':
      return 'bg-green-100 text-green-800';
    case 'low':
      return 'bg-yellow-100 text-yellow-800';
    case 'out':
      return 'bg-red-100 text-red-800';
    case 'overstocked':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'good':
      return <TrendingUp className="h-3 w-3" />;
    case 'low':
    case 'out':
      return <AlertTriangle className="h-3 w-3" />;
    case 'overstocked':
      return <TrendingDown className="h-3 w-3" />;
    default:
      return <Package className="h-3 w-3" />;
  }
};

export const DetailedInventoryView = ({
  searchTerm,
  selectedStore,
  selectedCategory,
  isDetailed = false,
}: DetailedInventoryViewProps) => {
  const filteredData = useMemo(() => {
    return detailedInventory.filter((item) => {
      const matchesSearch =
        searchTerm === '' ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const storesToShow =
    selectedStore === 'all'
      ? [
          'Store 1',
          'Store 2',
          'Store 3',
          'Store 4',
          'Store 5',
          'Store 6',
          'Store 7',
        ]
      : [selectedStore];

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <CardTitle>
              {isDetailed ? 'Detailed' : 'Summarize'} Inventory View
            </CardTitle>
            <CardDescription>
              {!isDetailed && 'Stock levels across all stores and products'}
              {selectedStore !== 'all' && ` - ${selectedStore}`}
              {selectedCategory !== 'all' && ` - ${selectedCategory}`}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            {!isDetailed && (
              <Link href="/inventory/detail">
                <Button size="sm" variant="outline">
                  Detail
                </Button>
              </Link>
            )}
            <Button size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6">
        <div className="rounded-xl border overflow-hidden">
          <Table className="w-full">
            <TableHeader className="w-full">
              <TableRow>
                <TableHead className="w-[100px] min-w-[100px] sticky left-0 bg-background z-10 border-r">
                  SKU
                </TableHead>
                <TableHead className=" sticky left-[100px] bg-background z-10 border-r">
                  Product
                </TableHead>
                <TableHead className="min-w-[120px]">Category</TableHead>
                <TableHead className="min-w-[120px]">Brand</TableHead>
                <TableHead className="text-left min-w-[120px]">Price</TableHead>
                {isDetailed &&
                  storesToShow.map((store) => (
                    <TableHead
                      key={store}
                      className="text-center min-w-[120px] whitespace-nowrap"
                    >
                      {store}
                    </TableHead>
                  ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-mono text-sm sticky left-0 bg-background border-r">
                    {item.id}
                  </TableCell>
                  <TableCell className="sticky left-[100px] bg-background border-r">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {item.brand}
                  </TableCell>
                  <TableCell className="text-left font-medium">
                    Rp {item.price.toLocaleString()},000
                  </TableCell>
                  {isDetailed &&
                    storesToShow.map((store) => {
                      const storeData =
                        item.stores[store as keyof typeof item.stores];
                      return (
                        <TableCell key={store} className="text-center">
                          <div className="flex flex-col items-center gap-1">
                            <span className="font-medium">
                              {storeData.stock}
                            </span>
                            <Badge
                              className={`text-xs ${getStatusColor(storeData.status)} flex items-center gap-1`}
                            >
                              {getStatusIcon(storeData.status)}
                              {storeData.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              Min: {storeData.minStock}
                            </span>
                          </div>
                        </TableCell>
                      );
                    })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-8 mx-6">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium">No items found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
