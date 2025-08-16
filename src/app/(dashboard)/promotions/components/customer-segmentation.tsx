'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  customerSegments,
  membershipData,
  segmentationSuggestions,
} from '@/constants/promotions';
import {
  Brain,
  Crown,
  Heart,
  ShoppingBag,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

export function CustomerSegmentation() {
  const totalMembers = customerSegments.reduce(
    (sum, segment) => sum + segment.totalMembers,
    0,
  );

  return (
    <div className="space-y-6">
      {/* Membership Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {membershipData.totalMembers.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 font-medium">
                +{membershipData.newMembersThisMonth}
              </span>{' '}
              this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              +{membershipData.membershipGrowthRate}%
            </div>
            <p className="text-xs text-muted-foreground">Monthly growth</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg LTV</CardTitle>
            <Crown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              Rp {(membershipData.averageLifetimeValue / 1000000).toFixed(1)}M
            </div>
            <p className="text-xs text-muted-foreground">Per member</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Member Conversion
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {membershipData.memberVsNonMemberConversion.members}%
            </div>
            <p className="text-xs text-muted-foreground">
              vs {membershipData.memberVsNonMemberConversion.nonMembers}%
              non-members
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="segments" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="segments">Customer Segments</TabsTrigger>
          <TabsTrigger value="strategies">AI Strategies</TabsTrigger>
        </TabsList>

        {/* Customer Segments Tab */}
        <TabsContent value="segments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Customer Segments Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {customerSegments.map((segment) => {
                  const percentage =
                    (segment.totalMembers / totalMembers) * 100;
                  return (
                    <div key={segment.id} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: segment.color }}
                          />
                          <div>
                            <h4 className="font-semibold">{segment.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {segment.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">
                            {segment.totalMembers.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {percentage.toFixed(1)}%
                          </div>
                        </div>
                      </div>

                      <Progress value={percentage} className="h-2" />

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Age:</span>
                          <div className="font-medium">
                            {segment.characteristics.ageRange}
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">AOV:</span>
                          <div className="font-medium">
                            Rp{' '}
                            {(
                              segment.characteristics.avgOrderValue / 1000
                            ).toLocaleString()}
                            K
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            Conversion:
                          </span>
                          <div className="font-medium text-green-600">
                            {segment.conversionRate}%
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Growth:</span>
                          <div className="font-medium text-blue-600">
                            +{segment.growthRate}%
                          </div>
                        </div>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="text-sm">
                          <span className="font-medium">
                            Preferred Categories:
                          </span>{' '}
                          {segment.characteristics.preferredCategories.join(
                            ', ',
                          )}
                        </div>
                        <div className="text-sm mt-1">
                          <span className="font-medium">
                            Shopping Behavior:
                          </span>{' '}
                          {segment.characteristics.shoppingBehavior}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Strategies Tab */}
        <TabsContent value="strategies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI-Powered Promotion Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {segmentationSuggestions.map((suggestion) => {
                  const segment = customerSegments.find(
                    (s) => s.name === suggestion.segment,
                  );
                  return (
                    <Card
                      key={suggestion.id}
                      className="border-l-4"
                      style={{ borderLeftColor: segment?.color }}
                    >
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-lg">
                                {suggestion.title}
                              </h4>
                              <div className="flex items-center gap-2 mt-1">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: segment?.color }}
                                />
                                <span className="text-sm text-muted-foreground">
                                  Target: {suggestion.segment}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-green-600">
                                <Zap className="h-4 w-4" />
                                <span className="font-bold">
                                  {suggestion.expectedImpact.expectedROI}x ROI
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground">
                            {suggestion.strategy}
                          </p>

                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <Target className="h-4 w-4 text-blue-600" />
                                <span className="font-medium text-blue-900">
                                  Expected Impact
                                </span>
                              </div>
                              <div className="space-y-1 text-sm">
                                <div>
                                  Reach:{' '}
                                  {suggestion.expectedImpact.reachPercentage}%
                                  of segment
                                </div>
                                <div>
                                  Revenue: Rp{' '}
                                  {(
                                    suggestion.expectedImpact.estimatedRevenue /
                                    1000000
                                  ).toFixed(0)}
                                  M
                                </div>
                              </div>
                            </div>

                            <div className="bg-green-50 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <ShoppingBag className="h-4 w-4 text-green-600" />
                                <span className="font-medium text-green-900">
                                  Best Timing
                                </span>
                              </div>
                              <div className="text-sm">{suggestion.timing}</div>
                            </div>

                            <div className="bg-purple-50 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <Heart className="h-4 w-4 text-purple-600" />
                                <span className="font-medium text-purple-900">
                                  Channels
                                </span>
                              </div>
                              <div className="text-sm">
                                {suggestion.suggestedChannels.join(', ')}
                              </div>
                            </div>
                          </div>

                          <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                            <div className="font-medium text-yellow-900 mb-1">
                              💡 Personalization Strategy
                            </div>
                            <div className="text-sm text-yellow-800">
                              {suggestion.personalization}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
