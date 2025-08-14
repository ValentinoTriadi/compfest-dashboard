import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { storeCategories, storeLocations } from '@/constants/stores';
import { Calendar, Filter, Search } from 'lucide-react';

interface SearchNFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedPerformance: string;
  setSelectedPerformance: (performance: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
}

export const SearchNFilter = ({
  searchTerm,
  setSearchTerm,
  selectedPerformance,
  setSelectedPerformance,
  selectedLocation,
  setSelectedLocation,
}: SearchNFilterProps) => {
  return (
    <Card>
      <CardContent className="">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search stores by name, manager, or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-4 justify-end">
            <Select
              value={selectedPerformance}
              onValueChange={setSelectedPerformance}
            >
              <SelectTrigger className="w-full sm:w-[200px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Performance" />
              </SelectTrigger>
              <SelectContent>
                {storeCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger className="w-full sm:w-[200px]">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {storeLocations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
