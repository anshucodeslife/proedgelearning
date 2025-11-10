// dashboard/pages/Reports.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, TrendingUp, Target, Users, DollarSign, Activity } from 'lucide-react';
import { performanceData, chartData } from '../data/data';

const Reports = () => {
  const channelData = [
    { name: 'SEO', value: 35, color: '#8b5cf6' },
    { name: 'PPC', value: 25, color: '#3b82f6' },
    { name: 'Social', value: 20, color: '#10b981' },
    { name: 'Email', value: 15, color: '#f59e0b' },
    { name: 'Content', value: 5, color: '#ef4444' }
  ];

  const metrics = [
    { label: 'Avg. ROI', value: '324%', change: '+12%', icon: TrendingUp, color: 'green' },
    { label: 'Conversion Rate', value: '3.24%', change: '+0.4%', icon: Target, color: 'blue' },
    { label: 'Client Retention', value: '94%', change: '+3%', icon: Users, color: 'purple' },
    { label: 'Revenue Growth', value: '$284K', change: '+18%', icon: DollarSign, color: 'orange' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Track performance metrics and generate insights</p>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all flex items-center space-x-2 shadow-lg shadow-purple-500/30">
          <Download className="w-5 h-5" />
          <span className="font-medium">Export Report</span>
        </button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-${metric.color}-50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <metric.icon className={`w-6 h-6 text-${metric.color}-600`} />
              </div>
              <span className={`px-2 py-1 rounded-lg text-xs font-bold bg-${metric.color}-100 text-${metric.color}-700`}>
                {metric.change}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
            <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Revenue Trend</h3>
              <p className="text-sm text-gray-500 mt-1">Monthly revenue growth</p>
            </div>
            <select className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50">
              <option>Last 6 months</option>
              <option>Last year</option>
              <option>All time</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} 
              />
              <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#revenueGradient)" name="Revenue (K)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Lead Generation */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Lead Generation</h3>
              <p className="text-sm text-gray-500 mt-1">Monthly lead acquisition</p>
            </div>
            <Activity className="w-6 h-6 text-purple-600" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} 
              />
              <Bar dataKey="leads" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Channel Distribution */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">Channel Distribution</h3>
            <p className="text-sm text-gray-500 mt-1">Traffic by marketing channel</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={channelData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {channelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Campaign Performance */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">Campaign Performance</h3>
            <p className="text-sm text-gray-500 mt-1">Success rate by campaign type</p>
          </div>
          <div className="space-y-4">
            {performanceData.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color || '#8b5cf6' }}
                    />
                    <span className="text-sm font-semibold text-gray-900">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                    className="h-2.5 rounded-full transition-all"
                    style={{ backgroundColor: item.color || '#8b5cf6' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Detailed Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performanceData.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <Target className="w-5 h-5 text-purple-600 group-hover:rotate-12 transition-transform" />
                <span 
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${metric.color || '#8b5cf6'}20`,
                    color: metric.color || '#8b5cf6'
                  }}
                >
                  {metric.value}%
                </span>
              </div>
              <h4 className="font-bold text-gray-900 mb-1">{metric.name}</h4>
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Efficiency Score</span>
                <span className="font-semibold">{metric.value > 80 ? 'Excellent' : metric.value > 60 ? 'Good' : 'Average'}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Insights & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-sm border border-purple-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Key Insights</h3>
          <div className="space-y-3">
            {[
              { title: 'SEO Performance', description: 'Organic traffic increased by 28% this month', trend: 'positive' },
              { title: 'Conversion Optimization', description: 'Landing page conversions improved by 15%', trend: 'positive' },
              { title: 'Social Engagement', description: 'Social media engagement down by 5%', trend: 'negative' }
            ].map((insight, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${insight.trend === 'positive' ? 'bg-green-500' : 'bg-red-500'}`} />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{insight.title}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl shadow-sm border border-orange-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recommendations</h3>
          <div className="space-y-3">
            {[
              { title: 'Increase PPC Budget', description: 'High-performing campaigns showing 320% ROI' },
              { title: 'Content Strategy Review', description: 'Blog content generating strong engagement' },
              { title: 'Email Campaign Optimization', description: 'Open rates 12% above industry average' }
            ].map((rec, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-3 bg-white rounded-lg">
                <TrendingUp className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{rec.title}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{rec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Reports;