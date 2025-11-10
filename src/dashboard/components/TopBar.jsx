// dashboard/components/TopBar.jsx
import React from 'react';
import { Search, Bell, Settings, Menu, Mail } from 'lucide-react';

const TopBar = ({ setSidebarOpen, sidebarCollapsed }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setSidebarOpen(true)} 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <Menu className="w-6 h-6 text-[#0B2C65]" />
        </button>
        
        {/* Search Bar */}
        <div className={`flex-1 mx-4 transition-all duration-300 ${
          sidebarCollapsed ? 'md:max-w-2xl' : 'md:max-w-xl'
        }`}>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#0B2C65] transition" />
            <input 
              type="text" 
              placeholder="Search students, courses, batches..."
              className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-[#0B2C65] focus:border-transparent 
              transition bg-gray-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Right Side Menu */}
        <div className="flex items-center space-x-2">

          {/* Notifications */}
          <button className="relative p-2.5 hover:bg-gray-100 rounded-xl transition group">
            <Bell className="w-5 h-5 text-gray-700 group-hover:text-[#0B2C65] transition" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>

          {/* Messages */}
          <button className="relative p-2.5 hover:bg-gray-100 rounded-xl transition group">
            <Mail className="w-5 h-5 text-gray-700 group-hover:text-[#0B2C65] transition" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full ring-2 ring-white"></span>
          </button>

          {/* Settings */}
          <button className="p-2.5 hover:bg-gray-100 rounded-xl transition group">
            <Settings className="w-5 h-5 text-gray-700 group-hover:text-[#0B2C65] group-hover:rotate-90 transition-all" />
          </button>

          {/* User */}
          <div className="flex items-center space-x-3 ml-2 pl-3 border-l border-gray-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-gray-900">Admin</p>
              <p className="text-xs text-gray-500">admin@proedgelearning.in</p>
            </div>

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B2C65] to-[#001B48] text-white 
              flex items-center justify-center font-bold cursor-pointer 
              hover:shadow-md hover:scale-105 transition">
              A
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default TopBar;
