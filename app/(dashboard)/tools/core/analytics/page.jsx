'use client';

import { useState } from 'react';
import { BarChart, TrendingUp, Users, Eye, MousePointer, Calendar } from 'lucide-react';

export default function AnalyticsTool() {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    { label: 'Page Views', value: '12,456', change: '+12%', icon: Eye, color: 'bg-blue-500' },
    { label: 'Unique Visitors', value: '3,421', change: '+8%', icon: Users, color: 'bg-green-500' },
    { label: 'Click-through Rate', value: '3.2%', change: '+0.5%', icon: MousePointer, color: 'bg-primary' },
    { label: 'Conversion Rate', value: '2.8%', change: '-0.2%', icon: TrendingUp, color: 'bg-secondary' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
              <BarChart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-raleway font-bold text-heading">Analytics Dashboard</h1>
              <p className="text-body mt-1">Comprehensive analytics and reporting for your marketing activities</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors">
              <Calendar className="h-5 w-5 mr-2" />
              Custom Range
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${metric.color} rounded-xl flex items-center justify-center`}>
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-heading mb-1">{metric.value}</h3>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-raleway font-semibold text-heading mb-6">Traffic Overview</h3>
              <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                {/* Chart Placeholder */}
                <div className="text-center">
                  <BarChart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive chart would be displayed here</p>
                  <p className="text-sm text-gray-400 mt-2">Showing website traffic trends over time</p>
                </div>
              </div>
            </div>

            {/* Campaign Performance */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mt-6">
              <h3 className="text-lg font-raleway font-semibold text-heading mb-6">Campaign Performance</h3>
              <div className="space-y-4">
                {[
                  { name: 'Summer Sale Campaign', impressions: '45,231', clicks: '1,423', ctr: '3.1%', status: 'Active' },
                  { name: 'Email Newsletter', impressions: '12,456', clicks: '687', ctr: '5.5%', status: 'Active' },
                  { name: 'Social Media Ads', impressions: '78,932', clicks: '2,134', ctr: '2.7%', status: 'Paused' },
                ].map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-heading">{campaign.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {campaign.impressions} impressions • {campaign.clicks} clicks
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-heading">{campaign.ctr}</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        campaign.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Top Pages */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-raleway font-semibold text-heading mb-4">Top Pages</h3>
              <div className="space-y-3">
                {[
                  { path: '/home', views: '3,421', percentage: '27.4%' },
                  { path: '/products', views: '2,134', percentage: '17.1%' },
                  { path: '/about', views: '1,876', percentage: '15.1%' },
                  { path: '/contact', views: '1,234', percentage: '9.9%' },
                ].map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-heading text-sm">{page.path}</p>
                      <p className="text-xs text-gray-500">{page.views} views</p>
                    </div>
                    <span className="text-sm font-medium text-primary">{page.percentage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Traffic Sources */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-raleway font-semibold text-heading mb-4">Traffic Sources</h3>
              <div className="space-y-3">
                {[
                  { source: 'Direct', percentage: '42%', color: 'bg-blue-500' },
                  { source: 'Search', percentage: '31%', color: 'bg-green-500' },
                  { source: 'Social', percentage: '18%', color: 'bg-primary' },
                  { source: 'Email', percentage: '9%', color: 'bg-secondary' },
                ].map((source, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-3 h-3 ${source.color} rounded-full mr-3`}></div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-heading">{source.source}</span>
                      <span className="text-sm text-gray-600">{source.percentage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Actions */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-raleway font-semibold text-heading mb-4">Export Reports</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Export as PDF
                </button>
                <button className="w-full px-4 py-2 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Export as CSV
                </button>
                <button className="w-full px-4 py-2 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Schedule Email Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}