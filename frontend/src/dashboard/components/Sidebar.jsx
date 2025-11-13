import React from 'react';
import { Home, FolderKanban, Users, User, LogOut, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen, sidebarCollapsed, setSidebarCollapsed, onLogout }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'clients', label: 'Students', icon: Users },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <>
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 fixed md:fixed left-0 top-0 z-30 h-full 
        bg-white shadow-2xl transition-all duration-300 flex flex-col
        ${sidebarCollapsed ? 'md:w-20 w-64' : 'w-64'}`}>

        <div className="p-6 bg-gradient-to-br from-[#0B2C65] via-[#001B48] to-[#0B2C65] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>

          <div className={`relative flex items-center transition-all duration-300 ${
            sidebarCollapsed ? 'md:justify-center' : 'space-x-2'
          }`}>
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>

            <div className={`transition-all duration-300 overflow-hidden ${
              sidebarCollapsed ? 'md:w-0 md:opacity-0' : 'w-auto opacity-100'
            }`}>
              <h2 className="text-xl font-bold text-white whitespace-nowrap">ProEdge Learning</h2>
              <p className="text-xs text-blue-100 whitespace-nowrap">Admin Dashboard</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="hidden md:flex absolute -right-3 top-24 w-6 h-6 bg-white border-2 border-[#0B2C65]/30 rounded-full items-center justify-center hover:bg-[#FFC947]/20 transition-all shadow-md z-40"
        >
          {sidebarCollapsed ? <ChevronRight className="w-3 h-3 text-[#0B2C65]" /> : <ChevronLeft className="w-3 h-3 text-[#0B2C65]" />}
        </button>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center px-4 py-3.5 rounded-xl transition-all duration-200 group
              ${activeTab === item.id 
                ? 'bg-gradient-to-r from-[#0B2C65] to-[#001B48] text-white shadow-lg shadow-blue-500/30' 
                : 'text-gray-700 hover:bg-gray-50 hover:translate-x-1'}
              ${sidebarCollapsed ? 'md:justify-center' : 'space-x-3'}`}
              title={sidebarCollapsed ? item.label : ''}
            >
              <item.icon className={`w-5 h-5 flex-shrink-0 ${activeTab === item.id ? '' : 'group-hover:text-[#0B2C65]'} transition-colors`} />
              <span className={`font-medium transition-all duration-300 overflow-hidden whitespace-nowrap ${
                sidebarCollapsed ? 'md:w-0 md:opacity-0' : 'w-auto opacity-100'
              }`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={onLogout}
            className={`w-full flex items-center px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 transition-all hover:translate-x-1 group ${
              sidebarCollapsed ? 'md:justify-center' : 'space-x-3'
            }`}
            title={sidebarCollapsed ? 'Logout' : ''}
          >
            <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform flex-shrink-0" />
            <span className={`font-medium transition-all duration-300 overflow-hidden whitespace-nowrap ${
              sidebarCollapsed ? 'md:w-0 md:opacity-0' : 'w-auto opacity-100'
            }`}>
              Logout
            </span>
          </button>
        </div>
      </div>

      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden backdrop-blur-sm" 
          onClick={() => setSidebarOpen(false)} 
        />
      )}
    </>
  );
};

export default Sidebar;
