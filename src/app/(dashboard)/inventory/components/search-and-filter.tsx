import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter, Search } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

export const SearchNFilter = ({
  searchTerm,
  setSearchTerm,
  selectedStore,
  setSelectedStore,
  selectedCategory,
  setSelectedCategory,
}: {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  selectedStore: string;
  setSelectedStore: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Card>
      <CardContent className="">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products, SKUs, or brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-4 justify-end">
            <Select value={selectedStore} onValueChange={setSelectedStore}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All Stores" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stores</SelectItem>
                <SelectItem value="store1">Store 1</SelectItem>
                <SelectItem value="store2">Store 2</SelectItem>
                <SelectItem value="store3">Store 3</SelectItem>
                <SelectItem value="store4">Store 4</SelectItem>
                <SelectItem value="store5">Store 5</SelectItem>
                <SelectItem value="store6">Store 6</SelectItem>
                <SelectItem value="store7">Store 7</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Fresh Produce">Fresh Produce</SelectItem>
                <SelectItem value="Dairy & Eggs">Dairy & Eggs</SelectItem>
                <SelectItem value="Meat & Poultry">Meat & Poultry</SelectItem>
                <SelectItem value="Bakery">Bakery</SelectItem>
                <SelectItem value="Pantry & Dry Goods">
                  Pantry & Dry Goods
                </SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
