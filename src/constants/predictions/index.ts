// Key metrics for predictions dashboard
export const totalPredictedRevenue = 680000000;
export const totalPredictedRevenueLastMonth = 634000000;
export const predictionAccuracy = 92.4;
export const predictionAccuracyLastMonth = 89.7;
export const totalHighRiskAlerts = 2;
export const totalHighRiskAlertsLastMonth = 3;
export const totalOpportunities = 4;
export const totalOpportunitiesLastMonth = 3;

// Sales forecast data
export const salesForecast = [
  {
    month: 'Jul 2025',
    actual: 134000000,
    predicted: 142000000,
    confidence: 0.92,
    lower: 125000000,
    upper: 159000000,
  },
  {
    month: 'Aug 2025',
    actual: null,
    predicted: 178000000,
    confidence: 0.89,
    lower: 156000000,
    upper: 200000000,
  },
  {
    month: 'Sep 2025',
    actual: null,
    predicted: 165000000,
    confidence: 0.87,
    lower: 140000000,
    upper: 190000000,
  },
  {
    month: 'Oct 2025',
    actual: null,
    predicted: 212000000,
    confidence: 0.85,
    lower: 185000000,
    upper: 239000000,
  },
  {
    month: 'Nov 2025',
    actual: null,
    predicted: 256000000,
    confidence: 0.83,
    lower: 225000000,
    upper: 287000000,
  },
  {
    month: 'Dec 2025',
    actual: null,
    predicted: 323000000,
    confidence: 0.81,
    lower: 285000000,
    upper: 361000000,
  },
];

// Product demand predictions
export const demandPredictions = [
  {
    id: 1,
    product: 'Samsung Galaxy A55',
    category: 'Electronics',
    currentStock: 45,
    predictedDemand: 78,
    confidence: 0.94,
    timeframe: 'Next 30 days',
    recommendation: 'Increase stock by 35 units',
    priority: 'High',
    trend: 'up',
  },
  {
    id: 2,
    product: 'Baju Lebaran Collection',
    category: 'Fashion',
    currentStock: 120,
    predictedDemand: 189,
    confidence: 0.91,
    timeframe: 'Next 45 days',
    recommendation: 'Increase stock by 70 units',
    priority: 'High',
    trend: 'up',
  },
  {
    id: 3,
    product: 'Gaming Laptop ASUS ROG',
    category: 'Electronics',
    currentStock: 23,
    predictedDemand: 67,
    confidence: 0.91,
    timeframe: 'Next 30 days',
    recommendation: 'Urgent restock needed',
    priority: 'Critical',
    trend: 'up',
  },
  {
    id: 4,
    product: 'Coffee Maker Philips',
    category: 'Home & Kitchen',
    currentStock: 34,
    predictedDemand: 42,
    confidence: 0.86,
    timeframe: 'Next 30 days',
    recommendation: 'Monitor closely',
    priority: 'Medium',
    trend: 'up',
  },
  {
    id: 5,
    product: 'Alat Tulis Sekolah',
    category: 'Stationery',
    currentStock: 85,
    predictedDemand: 145,
    confidence: 0.89,
    timeframe: 'Next 21 days',
    recommendation: 'Increase stock by 60 units',
    priority: 'High',
    trend: 'up',
  },
];

// Seasonal trends data
export const seasonalTrends = [
  { period: 'Q1', electronics: 85, fashion: 120, home: 95, sports: 70 },
  { period: 'Q2', electronics: 95, fashion: 80, home: 110, sports: 140 },
  { period: 'Q3', electronics: 130, fashion: 75, home: 85, sports: 160 },
  { period: 'Q4', electronics: 180, fashion: 150, home: 135, sports: 90 },
];

// Risk alerts data
export const riskAlerts = [
  {
    id: 1,
    type: 'Stock Risk',
    title: 'Potential Stockout Alert',
    description:
      'Gaming Laptop ASUS ROG predicted to run out in 12 days based on current demand trends',
    severity: 'Critical',
    impact: 'High revenue loss potential',
    action: 'Expedite restock order',
    confidence: 0.93,
  },
  {
    id: 2,
    type: 'Market Risk',
    title: 'Hari Raya Preparation Demand Surge',
    description:
      'Fashion and food items demand expected to increase 60% in next 3 weeks for Lebaran season',
    severity: 'High',
    impact: 'Potential stockout risk',
    action: 'Increase inventory for Lebaran items',
    confidence: 0.87,
  },
  {
    id: 3,
    type: 'Competition Risk',
    title: 'Market Share Pressure',
    description:
      'New competitor opening in Bandung may impact Toko Bandung Center sales by 15%',
    severity: 'Medium',
    impact: 'Revenue decline risk',
    action: 'Enhance local marketing and promotions',
    confidence: 0.79,
  },
  {
    id: 4,
    type: 'Seasonal Risk',
    title: 'Independence Day Shopping Pattern',
    description:
      'Expected 25% sales spike around August 17 (Hari Kemerdekaan), potential inventory shortage',
    severity: 'Medium',
    impact: 'Lost sales opportunity',
    action: 'Prepare additional inventory for patriotic products',
    confidence: 0.84,
  },
];

// Market opportunities data
export const opportunities = [
  {
    id: 1,
    title: 'Back-to-School Electronics Surge',
    description:
      'Predicted 45% increase in electronics demand starting August 15th for new school semester',
    potential: 'Rp 125M additional revenue',
    confidence: 0.91,
    timeframe: 'Aug 15 - Sep 15',
    action: 'Increase electronics inventory',
    category: 'Seasonal Opportunity',
  },
  {
    id: 2,
    title: 'Premium Product Upselling',
    description:
      'Customer behavior analysis shows 23% higher conversion on premium items in Indonesian market',
    potential: 'Rp 78M additional revenue',
    confidence: 0.85,
    timeframe: 'Ongoing',
    action: 'Train staff on upselling techniques',
    category: 'Sales Optimization',
  },
  {
    id: 3,
    title: 'Cross-Category Bundle Potential',
    description:
      'Electronics + Accessories bundles show 67% higher profit margins in Indonesian retail',
    potential: 'Rp 45M additional profit',
    confidence: 0.88,
    timeframe: 'Next 60 days',
    action: 'Create bundle promotions',
    category: 'Product Strategy',
  },
  {
    id: 4,
    title: 'Independence Day Patriotic Products',
    description:
      'Red-white themed products show 35% higher sales during August (Hari Kemerdekaan)',
    potential: 'Rp 32M additional revenue',
    confidence: 0.86,
    timeframe: 'Aug 10 - Aug 25',
    action: 'Stock patriotic-themed merchandise',
    category: 'Cultural Opportunity',
  },
];

// Store performance predictions
export const storePerformancePredictions = [
  {
    store: 'Toko 1',
    current: 125000000,
    predicted: 133000000,
    growth: 6.4,
    confidence: 0.89,
  },
  {
    store: 'Toko 2',
    current: 98000000,
    predicted: 95000000,
    growth: -3.1,
    confidence: 0.84,
  },
  {
    store: 'Toko 3',
    current: 156000000,
    predicted: 168000000,
    growth: 7.7,
    confidence: 0.91,
  },
  {
    store: 'Toko 4',
    current: 89000000,
    predicted: 93000000,
    growth: 4.5,
    confidence: 0.87,
  },
  {
    store: 'Toko 5',
    current: 112000000,
    predicted: 119000000,
    growth: 6.3,
    confidence: 0.88,
  },
  {
    store: 'Toko 6',
    current: 78000000,
    predicted: 82000000,
    growth: 5.1,
    confidence: 0.86,
  },
  {
    store: 'Toko 7',
    current: 134000000,
    predicted: 145000000,
    growth: 8.2,
    confidence: 0.92,
  },
];
