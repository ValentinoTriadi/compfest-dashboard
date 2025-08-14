// Active promotions data
export const activePromotions = [
  {
    id: 3,
    name: 'Weekend Home & Garden Flash Sale',
    type: 'Flash Sale',
    discount: '35%',
    category: 'Home & Garden',
    stores: ['All Stores'],
    startDate: '2025-08-17',
    endDate: '2025-08-18',
    status: 'Active',
    performance: {
      revenue: 45000000,
      orders: 180,
      roi: 4.1,
    },
    target: 50000000,
  },
  {
    id: 2,
    name: 'Back-to-School Fashion BOGO',
    type: 'BOGO',
    discount: '50%',
    category: 'Clothing & Accessories',
    stores: ['Medan Store', 'Yogyakarta Outlet', 'Makassar Branch'],
    startDate: '2025-08-10',
    endDate: '2025-08-25',
    status: 'Active',
    performance: {
      revenue: 85000000,
      orders: 315,
      roi: 2.8,
    },
    target: 100000000,
  },
  {
    id: 1,
    name: 'Late Summer Electronics Clearance',
    type: 'Percentage Discount',
    discount: '25%',
    category: 'Electronics',
    stores: ['Jakarta Mall', 'Surabaya Plaza', 'Bandung Center'],
    startDate: '2025-08-01',
    endDate: '2025-08-31',
    status: 'Active',
    performance: {
      revenue: 125000000,
      orders: 420,
      roi: 3.2,
    },
    target: 150000000,
  },
  {
    id: 4,
    name: 'Student Laptop Bundle Deal',
    type: 'Bundle Deal',
    discount: '20%',
    category: 'Electronics',
    stores: ['Jakarta Mall', 'Bandung Center', 'Surabaya Plaza'],
    startDate: '2025-08-05',
    endDate: '2025-08-20',
    status: 'Active',
    performance: {
      revenue: 95000000,
      orders: 125,
      roi: 3.5,
    },
    target: 120000000,
  },
];

// AI-generated promotion suggestions
export const promotionSuggestions = [
  {
    id: 1,
    title: 'Independence Day Patriotic Sale',
    category: 'All Categories',
    suggestedDiscount: '17%',
    timing: 'August 17 - August 20',
    reason:
      'Historical data shows 45% increase in sales during Independence Day celebrations with patriotic themes',
    expectedROI: 4.1,
    priority: 'High',
    stores: ['Jakarta Mall', 'Bandung Center', 'Surabaya Plaza'],
  },
  {
    id: 3,
    title: 'Premium Customer Ramadan Prep Early Access',
    category: 'Food & Beverage',
    suggestedDiscount: '15%',
    timing: 'September 1-7',
    reason:
      'Reward top 20% customers with early access to Ramadan preparation items to increase retention',
    expectedROI: 3.8,
    priority: 'High',
    stores: ['All Stores'],
  },
  {
    id: 2,
    title: 'Slow-Moving Summer Inventory Clearance',
    category: 'Seasonal Items',
    suggestedDiscount: '40%',
    timing: 'Next 2 weeks',
    reason:
      '156 summer items have been in inventory for over 60 days, need clearance before autumn season',
    expectedROI: 2.3,
    priority: 'Medium',
    stores: ['Medan Store', 'Makassar Branch'],
  },
];

// Performance analytics data
export const promotionPerformanceData = [
  { month: 'Feb', revenue: 280000, campaigns: 3, roi: 2.8 },
  { month: 'Mar', revenue: 350000, campaigns: 4, roi: 3.2 },
  { month: 'Apr', revenue: 420000, campaigns: 5, roi: 3.6 },
  { month: 'May', revenue: 380000, campaigns: 4, roi: 3.1 },
  { month: 'Jun', revenue: 510000, campaigns: 6, roi: 4.2 },
  { month: 'Jul', revenue: 620000, campaigns: 7, roi: 3.8 },
  { month: 'Aug', revenue: 580000, campaigns: 5, roi: 3.5 },
];

// Promotion type distribution data
export const promotionTypeData = [
  {
    type: 'Percentage Discount',
    count: 12,
    revenue: 145000,
    color: '#3b82f6',
  },
  {
    type: 'BOGO',
    count: 8,
    revenue: 98000,
    color: '#8b5cf6',
  },
  {
    type: 'Flash Sale',
    count: 6,
    revenue: 87000,
    color: '#06b6d4',
  },
  {
    type: 'Bundle Deal',
    count: 4,
    revenue: 56000,
    color: '#10b981',
  },
  {
    type: 'Loyalty Exclusive',
    count: 3,
    revenue: 34000,
    color: '#f59e0b',
  },
];

// Upcoming promotions for calendar view
export const upcomingPromotions = [
  {
    id: 4,
    name: 'Back-to-School Electronics Bonanza',
    type: 'Percentage Discount',
    discount: '25%',
    category: 'Electronics',
    startDate: '2025-08-20',
    endDate: '2025-09-05',
    status: 'Scheduled',
  },
  {
    id: 7,
    name: 'October Sports Equipment Sale',
    type: 'Flash Sale',
    discount: '35%',
    category: 'Sports & Recreation',
    startDate: '2025-10-10',
    endDate: '2025-10-15',
    status: 'Scheduled',
  },
  {
    id: 9,
    name: 'Early Bird Black Friday Preview',
    type: 'Loyalty Exclusive',
    discount: '15%',
    category: 'All Categories',
    startDate: '2025-11-15',
    endDate: '2025-11-20',
    status: 'Scheduled',
  },
  {
    id: 5,
    name: 'September Fashion Week Sale',
    type: 'BOGO',
    discount: '40%',
    category: 'Clothing & Accessories',
    startDate: '2025-09-10',
    endDate: '2025-09-17',
    status: 'Draft',
  },
  {
    id: 6,
    name: 'Mid-Autumn Festival Special',
    type: 'Bundle Deal',
    discount: '20%',
    category: 'Food & Beverage',
    startDate: '2025-09-25',
    endDate: '2025-10-02',
    status: 'Draft',
  },
  {
    id: 8,
    name: 'Halloween Costume & Decor Promo',
    type: 'Percentage Discount',
    discount: '30%',
    category: 'Seasonal Items',
    startDate: '2025-10-20',
    endDate: '2025-10-31',
    status: 'Draft',
  },
];
