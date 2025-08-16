'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  placementMetrics,
  placementSuggestions,
  storeZones,
} from '@/constants/inventory';
import {
  AlertCircle,
  ArrowRight,
  Brain,
  Clock,
  Eye,
  MapPin,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

export function PlacementSuggestions() {
  const highPriorityItems = placementSuggestions.filter(
    (item) => item.priority === 'High',
  );
  const mediumPriorityItems = placementSuggestions.filter(
    (item) => item.priority === 'Medium',
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default:
        return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    if (urgency.includes('Immediate'))
      return <AlertCircle className="h-4 w-4 text-red-500" />;
    if (urgency.includes('3 Days'))
      return <Clock className="h-4 w-4 text-orange-500" />;
    return <Clock className="h-4 w-4 text-blue-500" />;
  };

  return (
    <div className="space-y-6">
      {/* Placement Metrics Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Suggestions
            </CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {placementMetrics.totalSuggestions}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 font-medium">
                {placementMetrics.implementedSuggestions} implemented
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg Sales Increase
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              +{placementMetrics.avgSalesIncrease}%
            </div>
            <p className="text-xs text-muted-foreground">
              From implemented suggestions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Revenue Impact
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              Rp{' '}
              {(placementMetrics.totalRevenueIncrease / 1000).toLocaleString()}K
            </div>
            <p className="text-xs text-muted-foreground">
              Additional revenue generated
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {placementMetrics.successRate}%
            </div>
            <p className="text-xs text-muted-foreground">
              Avg {placementMetrics.avgImplementationTime} days to implement
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="suggestions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="suggestions">Placement Suggestions</TabsTrigger>
          <TabsTrigger value="zones">Store Zones</TabsTrigger>
        </TabsList>

        {/* Placement Suggestions Tab */}
        <TabsContent value="suggestions" className="space-y-6">
          {/* High Priority Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                High Priority Placements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {highPriorityItems.map((suggestion) => (
                  <Card
                    key={suggestion.id}
                    className="border-l-4 border-l-red-500"
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-lg">
                              {suggestion.itemName}
                            </h4>
                            <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                              <span>SKU: {suggestion.itemId}</span>
                              <span>Category: {suggestion.category}</span>
                              <div className="flex items-center gap-1">
                                {getUrgencyIcon(suggestion.urgency)}
                                <span>{suggestion.urgency}</span>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(suggestion.priority)}`}
                          >
                            {suggestion.priority} Priority
                          </div>
                        </div>

                        {/* Current vs Suggested Placement */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-900 mb-2">
                              Current Placement
                            </h5>
                            <div className="space-y-1 text-sm">
                              <div>
                                <span className="font-medium">Zone:</span>{' '}
                                {suggestion.currentPlacement.zone}
                              </div>
                              <div>
                                <span className="font-medium">Position:</span>{' '}
                                {suggestion.currentPlacement.position}
                              </div>
                              <div>
                                <span className="font-medium">Duration:</span>{' '}
                                {suggestion.currentPlacement.duration}
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h5 className="font-medium text-green-900 mb-2 flex items-center gap-2">
                              <ArrowRight className="h-4 w-4" />
                              Suggested Placement
                            </h5>
                            <div className="space-y-1 text-sm">
                              <div>
                                <span className="font-medium">Zone:</span>{' '}
                                {suggestion.suggestedPlacement.zone}
                              </div>
                              <div>
                                <span className="font-medium">Position:</span>{' '}
                                {suggestion.suggestedPlacement.position}
                              </div>
                              <div>
                                <span className="font-medium">Duration:</span>{' '}
                                {suggestion.suggestedPlacement.duration}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Reasoning */}
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <h5 className="font-medium text-blue-900 mb-2">
                            💡 AI Reasoning
                          </h5>
                          <p className="text-sm text-blue-800">
                            {suggestion.suggestedPlacement.reasoning}
                          </p>
                        </div>

                        {/* Performance Projection */}
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-900">
                              {suggestion.performance.currentSales}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Current Sales
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">
                              +{suggestion.performance.projectedIncrease}%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Projected Increase
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">
                              Rp{' '}
                              {(
                                suggestion.performance.expectedRevenue / 1000
                              ).toLocaleString()}
                              K
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Expected Revenue
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-purple-600">
                              {suggestion.performance.confidenceScore}%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Confidence
                            </div>
                          </div>
                        </div>

                        {/* AI Insights */}
                        <div className="space-y-2">
                          <h5 className="font-medium text-gray-900">
                            🧠 AI Insights
                          </h5>
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                            {suggestion.aiInsights.map((insight, index) => (
                              <div
                                key={index}
                                className="bg-yellow-50 p-2 rounded text-xs text-yellow-800 border border-yellow-200"
                              >
                                {insight}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Store Recommendations */}
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">
                            🏪 Recommended Stores
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {suggestion.storeRecommendations.map(
                              (store, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs"
                                >
                                  {store}
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Medium Priority Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-yellow-500" />
                Medium Priority Placements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mediumPriorityItems.map((suggestion) => (
                  <Card
                    key={suggestion.id}
                    className="border-l-4 border-l-yellow-500"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">
                            {suggestion.itemName}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {suggestion.suggestedPlacement.reasoning}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">
                            +{suggestion.performance.projectedIncrease}%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Expected increase
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Store Zones Tab */}
        <TabsContent value="zones" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Store Zone Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {storeZones.map((zone) => (
                  <div key={zone.id} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{zone.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {zone.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4 text-blue-500" />
                            <span className="text-sm font-medium">
                              {zone.visibility}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Visibility
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium">
                              {zone.footTraffic}%
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Traffic
                          </div>
                        </div>
                      </div>
                    </div>

                    <Progress value={zone.footTraffic} className="h-2" />

                    <div>
                      <span className="text-sm font-medium text-gray-700">
                        Best for:{' '}
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {zone.bestFor.map((category, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
