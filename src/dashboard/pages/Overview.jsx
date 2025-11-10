// dashboard/pages/Overview.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { IndianRupee, Users, FolderKanban, TrendingUp, ArrowUpRight, ArrowDownRight, Target, Zap, Activity, Award } from 'lucide-react';
import { chartData } from '../data/data';

const Overview = () => {
  const stats = [
    { 
      label: 'Total Revenue', 
      value: '₹20L', 
      change: '+12.5%', 
      trend: 'up',
      icon: IndianRupee, 
      color: 'from-[#0B2C65] to-[#001B48]', 
      bgLight: 'bg-[#0B2C65]/10', 
      textColor: 'text-[#0B2C65]',
      chartData: [40, 45, 42, 48, 52, 55, 58]
    },
    { 
      label: 'Active Students', 
      value: '52', 
      change: '+8 new', 
      trend: 'up',
      icon: Users, 
      color: 'from-[#FFC947] to-[#E0A72E]', 
      bgLight: 'bg-[#FFC947]/20', 
      textColor: 'text-[#A66B00]',
      chartData: [35, 38, 40, 42, 45, 48, 52]
    },
    { 
      label: 'Live Projects', 
      value: '28', 
      change: '5 ending soon', 
      trend: 'neutral',
      icon: FolderKanban, 
      color: 'from-[#001B48] to-[#0B2C65]', 
      bgLight: 'bg-[#001B48]/10', 
      textColor: 'text-[#001B48]',
      chartData: [20, 22, 25, 23, 26, 27, 28]
    },
    { 
      label: 'Conversion Rate', 
      value: '3.24%', 
      change: '+0.4%', 
      trend: 'up',
      icon: TrendingUp, 
      color: 'from-[#FFC947] to-[#E0A72E]', 
      bgLight: 'bg-[#FFC947]/20', 
      textColor: 'text-[#A66B00]',
      chartData: [2.5, 2.7, 2.9, 3.0, 3.1, 3.2, 3.24]
    }
  ];

  const activities = [
    { action: 'New student enrolled', detail: 'Aman Sharma', time: '2 hours ago', icon: Users, color: 'text-[#0B2C65]', bg: 'bg-[#0B2C65]/10' },
    { action: 'Batch Started', detail: 'Excel Advance - EV-24B', time: '5 hours ago', icon: Zap, color: 'text-[#FFC947]', bg: 'bg-[#FFC947]/20' },
    { action: 'Assignment Completed', detail: 'Data Interpretation Sheet', time: '1 day ago', icon: Award, color: 'text-green-600', bg: 'bg-green-50' },
    { action: 'Payment Received', detail: '₹6,000 from Priya Verma', time: '2 days ago', icon: Activity, color: 'text-blue-600', bg: 'bg-blue-50' }
  ];

  const topPerformers = [
    { name: 'Anshu Singh', revenue: '100%', growth: '+28%', status: 'excellent' },
    { name: 'Ankit Kumar', revenue: '87%', growth: '+22%', status: 'good' },
    { name: 'Om Pandey', revenue: '78%', growth: '+18%', status: 'good' },
    { name: 'Renu Pandey', revenue: '67%', growth: '+15%', status: 'average' }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#0B2C65] to-[#001B48] bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's the latest insight from your Institute.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">

            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <div className="flex items-center space-x-1">
                  {stat.trend === 'up' && <ArrowUpRight className="w-4 h-4 text-green-600" />}
                  {stat.trend === 'down' && <ArrowDownRight className="w-4 h-4 text-red-600" />}
                  <span className="text-xs font-medium text-gray-600">{stat.change}</span>
                </div>
              </div>

              <div className={`${stat.bgLight} w-14 h-14 rounded-xl flex items-center justify-center`}>
                <stat.icon className={`w-7 h-7 ${stat.textColor}`} />
              </div>
            </div>

            <div className="h-12 -mb-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={stat.chartData.map((v) => ({ value: v }))}>
                  <Area type="monotone" dataKey="value" stroke="currentColor" strokeWidth={2} fill="currentColor" className={`${stat.textColor} opacity-20`} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Charts + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Trend</h3>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0B2C65" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#0B2C65" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="proj" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFC947" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#FFC947" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#0B2C65" strokeWidth={3} fill="url(#rev)" />
              <Area type="monotone" dataKey="projects" stroke="#FFC947" strokeWidth={3} fill="url(#proj)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-xl">
                <div className={`${item.bg} w-10 h-10 rounded-lg flex items-center justify-center`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.action}</p>
                  <p className="text-xs text-gray-500">{item.detail}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Top Students */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Top Performing Students</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {topPerformers.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="p-4 border border-gray-200 rounded-xl hover:border-[#0B2C65] hover:shadow-md transition-all">

              <div className="flex items-center justify-between">
                <Target className="w-5 h-5 text-[#0B2C65]" />
                <span className="text-xs px-2 py-1 rounded-md bg-[#FFC947]/20 text-[#A66B00]">{item.growth}</span>
              </div>

              <h4 className="font-semibold text-gray-900 mt-3 text-sm">{item.name}</h4>
              <p className="text-2xl font-bold text-gray-900 mt-1">{item.revenue}</p>

            </motion.div>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default Overview;
