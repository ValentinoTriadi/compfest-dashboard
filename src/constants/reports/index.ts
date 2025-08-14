// Key metrics for reports dashboard
export const totalRevenue = 134700000; // Current month
export const totalRevenueLastMonth = 634000000;
export const totalStores = 7;
export const totalEmployees = 32;
export const avgOrderValue = 287497;
export const avgOrderValueLastMonth = 390634;
export const customerSatisfaction = 4.6;
export const customerSatisfactionLastMonth = 4.4;
export const inventoryTurnover = 8.2;
export const inventoryTurnoverLastMonth = 7.8;
export const profitMargin = 18.5;
export const profitMarginLastMonth = 16.8;

// Executive summary data
export const executiveSummary = {
  totalRevenue: 134700000,
  revenueGrowth: -78.8, // Negative because current month is much lower than last month
  totalStores: 7,
  totalEmployees: 32,
  avgOrderValue: 287497,
  customerSatisfaction: 4.6,
  inventoryTurnover: 8.2,
  profitMargin: 18.5,
};

// Store performance data (matching stores data)
export const storePerformance = [
  {
    store: 'Toko 1',
    revenue: 125000000,
    growth: 15.2,
    employees: 4,
    satisfaction: 4.8,
    manager: 'Andi Wijaya',
  },
  {
    store: 'Toko 2',
    revenue: 98000000,
    growth: 8.7,
    employees: 5,
    satisfaction: 4.5,
    manager: 'Sari Indah',
  },
  {
    store: 'Toko 3',
    revenue: 156000000,
    growth: 22.1,
    employees: 6,
    satisfaction: 4.7,
    manager: 'Budi Santoso',
  },
  {
    store: 'Toko 4',
    revenue: 89000000,
    growth: 5.8,
    employees: 4,
    satisfaction: 4.4,
    manager: 'Diana Putri',
  },
  {
    store: 'Toko 5',
    revenue: 110000000,
    growth: 12.3,
    employees: 5,
    satisfaction: 4.6,
    manager: 'Eko Prasetyo',
  },
  {
    store: 'Toko 6',
    revenue: 95000000,
    growth: 9.8,
    employees: 4,
    satisfaction: 4.5,
    manager: 'Fitri Maharani',
  },
  {
    store: 'Toko 7',
    revenue: 142000000,
    growth: 18.4,
    employees: 4,
    satisfaction: 4.9,
    manager: 'Gunawan Setiawan',
  },
];

// Monthly trends data
export const monthlyTrends = [
  {
    month: 'Jan',
    sales: 580000000,
    inventory: 85,
    promotions: 3,
    orders: 1456,
  },
  {
    month: 'Feb',
    sales: 620000000,
    inventory: 82,
    promotions: 4,
    orders: 1589,
  },
  {
    month: 'Mar',
    sales: 590000000,
    inventory: 78,
    promotions: 5,
    orders: 1523,
  },
  {
    month: 'Apr',
    sales: 640000000,
    inventory: 80,
    promotions: 3,
    orders: 1678,
  },
  {
    month: 'May',
    sales: 670000000,
    inventory: 75,
    promotions: 6,
    orders: 1734,
  },
  {
    month: 'Jun',
    sales: 634000000,
    inventory: 73,
    promotions: 4,
    orders: 1623,
  },
  { month: 'Jul', sales: 134700000, inventory: 68, promotions: 2, orders: 469 },
];

// Category breakdown (matching sales categories)
export const categoryBreakdown = [
  { name: 'Electronics', value: 35, revenue: 47145000, color: '#003d7f' },
  { name: 'Clothing', value: 28, revenue: 37716000, color: '#d86d37' },
  { name: 'Food & Beverage', value: 18, revenue: 24246000, color: '#0077cc' },
  { name: 'Home & Garden', value: 12, revenue: 16164000, color: '#ffcc00' },
  { name: 'Sports', value: 7, revenue: 9429000, color: '#ff6600' },
];

// Scheduled reports data
export const scheduledReports = [
  {
    id: 1,
    name: 'Weekly Sales Report',
    frequency: 'Weekly',
    nextRun: '2025-08-20',
    status: 'Active',
    lastRun: '2025-08-13',
    recipients: ['manager@compfest.id', 'owner@compfest.id'],
  },
  {
    id: 2,
    name: 'Monthly Inventory Report',
    frequency: 'Monthly',
    nextRun: '2025-09-01',
    status: 'Active',
    lastRun: '2025-08-01',
    recipients: ['inventory@compfest.id', 'manager@compfest.id'],
  },
  {
    id: 3,
    name: 'Quarterly Performance Review',
    frequency: 'Quarterly',
    nextRun: '2025-10-01',
    status: 'Active',
    lastRun: '2025-07-01',
    recipients: ['executive@compfest.id', 'board@compfest.id'],
  },
  {
    id: 4,
    name: 'Annual Business Summary',
    frequency: 'Yearly',
    nextRun: '2025-12-31',
    status: 'Scheduled',
    lastRun: '2024-12-31',
    recipients: ['all@compfest.id'],
  },
];

// Performance insights data
export const performanceInsights = [
  {
    type: 'success',
    title: 'Strong Performance',
    description:
      'Store 3 shows outstanding growth of 22.1% – consider applying similar strategies to other locations.',
    icon: 'CheckCircle',
    priority: 'high',
  },
  {
    type: 'warning',
    title: 'Needs Attention',
    description:
      'Store 4 growth at 5.8% is below average – recommend operational review and customer feedback analysis.',
    icon: 'AlertTriangle',
    priority: 'medium',
  },
  {
    type: 'info',
    title: 'Opportunity',
    description:
      'Electronics category dominates at 35% – consider expanding product lines and promotional campaigns.',
    icon: 'TrendingUp',
    priority: 'low',
  },
  {
    type: 'warning',
    title: 'Significant Decline',
    description:
      'July sales dropped sharply to 134.7M from 634M the previous month – requires in-depth investigation and recovery strategy.',
    icon: 'TrendingDown',
    priority: 'critical',
  },
];

// Report types configuration
export const reportTypes = [
  {
    value: 'executive',
    label: 'Executive Summary',
    description: 'High-level business overview',
  },
  {
    value: 'sales',
    label: 'Sales Analysis',
    description: 'Detailed sales performance',
  },
  {
    value: 'inventory',
    label: 'Inventory Report',
    description: 'Stock levels and turnover',
  },
  {
    value: 'performance',
    label: 'Performance Review',
    description: 'Store and employee metrics',
  },
  {
    value: 'financial',
    label: 'Financial Summary',
    description: 'Revenue and profit analysis',
  },
];

// Date range options
export const dateRangeOptions = [
  { value: 'last-7-days', label: 'Last 7 Days' },
  { value: 'last-30-days', label: 'Last 30 Days' },
  { value: 'last-quarter', label: 'Last Quarter' },
  { value: 'last-year', label: 'Last Year' },
  { value: 'custom', label: 'Custom Range' },
];

// Export format options
export const exportFormats = [
  { value: 'pdf', label: 'PDF Report', icon: 'FileText' },
  { value: 'excel', label: 'Excel Spreadsheet', icon: 'FileSpreadsheet' },
  { value: 'csv', label: 'CSV Data', icon: 'Database' },
  { value: 'json', label: 'JSON Data', icon: 'Code' },
];
