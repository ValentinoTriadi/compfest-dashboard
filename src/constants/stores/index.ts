// Store data based on the provided reference
export const storesData = [
  {
    id: 1,
    name: 'Toko 1',
    openYear: 2015,
    area: 180, // m²
    skuCount: 9235,
    employeeCount: 4,
    address: 'Jl. Sudirman No. 123, Jakarta Pusat',
    manager: 'Andi Wijaya',
    status: 'active',
    performance: 'excellent',
    revenue: 125000000, // Rp per month
    growth: 15.2,
    operatingHours: '08:00 - 22:00',
    phone: '021-5551234',
    email: 'toko1@compfest.id',
  },
  {
    id: 2,
    name: 'Toko 2',
    openYear: 2017,
    area: 193,
    skuCount: 12311,
    employeeCount: 5,
    address: 'Jl. Gatot Subroto No. 456, Jakarta Selatan',
    manager: 'Sari Indah',
    status: 'active',
    performance: 'good',
    revenue: 98000000,
    growth: 8.7,
    operatingHours: '07:00 - 21:00',
    phone: '021-5555678',
    email: 'toko2@compfest.id',
  },
  {
    id: 3,
    name: 'Toko 3',
    openYear: 2018,
    area: 220,
    skuCount: 14501,
    employeeCount: 6,
    address: 'Jl. Thamrin No. 789, Jakarta Pusat',
    manager: 'Budi Santoso',
    status: 'active',
    performance: 'excellent',
    revenue: 156000000,
    growth: 22.1,
    operatingHours: '08:00 - 23:00',
    phone: '021-5559876',
    email: 'toko3@compfest.id',
  },
  {
    id: 4,
    name: 'Toko 4',
    openYear: 2020,
    area: 195,
    skuCount: 13122,
    employeeCount: 5,
    address: 'Jl. Kemang Raya No. 321, Jakarta Selatan',
    manager: 'Nina Kusuma',
    status: 'active',
    performance: 'good',
    revenue: 110000000,
    growth: 12.4,
    operatingHours: '08:30 - 21:30',
    phone: '021-5553456',
    email: 'toko4@compfest.id',
  },
  {
    id: 5,
    name: 'Toko 5',
    openYear: 2022,
    area: 175,
    skuCount: 7372,
    employeeCount: 3,
    address: 'Jl. Pondok Indah No. 654, Jakarta Selatan',
    manager: 'Eko Prasetyo',
    status: 'active',
    performance: 'needs-improvement',
    revenue: 75000000,
    growth: -2.3,
    operatingHours: '09:00 - 20:00',
    phone: '021-5557890',
    email: 'toko5@compfest.id',
  },
  {
    id: 6,
    name: 'Toko 6',
    openYear: 2024,
    area: 230,
    skuCount: 14983,
    employeeCount: 6,
    address: 'Jl. BSD Raya No. 987, Tangerang Selatan',
    manager: 'Devi Anggraini',
    status: 'active',
    performance: 'excellent',
    revenue: 145000000,
    growth: 28.9,
    operatingHours: '08:00 - 22:00',
    phone: '021-5554321',
    email: 'toko6@compfest.id',
  },
  {
    id: 7,
    name: 'Toko 7',
    openYear: 2025,
    area: 320,
    skuCount: 18374,
    employeeCount: 7,
    address: 'Jl. PIK Avenue No. 147, Jakarta Utara',
    manager: 'Rizki Fahmi',
    status: 'active',
    performance: 'excellent',
    revenue: 185000000,
    growth: 35.6,
    operatingHours: '07:30 - 22:30',
    phone: '021-5556789',
    email: 'toko7@compfest.id',
  },
];

// Store performance metrics
export const storeMetrics = {
  totalStores: storesData.length,
  totalArea: storesData.reduce((sum, store) => sum + store.area, 0),
  totalSKUs: storesData.reduce((sum, store) => sum + store.skuCount, 0),
  totalEmployees: storesData.reduce(
    (sum, store) => sum + store.employeeCount,
    0,
  ),
  totalRevenue: storesData.reduce((sum, store) => sum + store.revenue, 0),
  averageRevenue:
    storesData.reduce((sum, store) => sum + store.revenue, 0) /
    storesData.length,
  averageGrowth:
    storesData.reduce((sum, store) => sum + store.growth, 0) /
    storesData.length,
  newestStore: storesData.reduce(
    (newest, store) => (store.openYear > newest.openYear ? store : newest),
    storesData[0],
  ),
  oldestStore: storesData.reduce(
    (oldest, store) => (store.openYear < oldest.openYear ? store : oldest),
    storesData[0],
  ),
};

// Store performance by year
export const storePerformanceByYear = storesData.map((store) => ({
  year: store.openYear,
  storeName: store.name,
  revenue: store.revenue / 1000000, // Convert to millions
  area: store.area,
  skuCount: store.skuCount,
  growth: store.growth,
}));

// Store categories for filtering
export const storeCategories = [
  { value: 'all', label: 'All Stores' },
  { value: 'excellent', label: 'Excellent Performance' },
  { value: 'good', label: 'Good Performance' },
  { value: 'needs-improvement', label: 'Needs Improvement' },
];

// Store locations
export const storeLocations = [
  { value: 'all', label: 'All Locations' },
  { value: 'jakarta-pusat', label: 'Jakarta Pusat' },
  { value: 'jakarta-selatan', label: 'Jakarta Selatan' },
  { value: 'jakarta-utara', label: 'Jakarta Utara' },
  { value: 'tangerang-selatan', label: 'Tangerang Selatan' },
];
