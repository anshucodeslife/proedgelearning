// dashboard/components/DashboardLayout.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Overview from '../pages/Overview';
import Projects from '../pages/Projects';
import Clients from '../pages/Clients';
import Reports from '../pages/Reports';
import Profile from '../pages/Profile';

const DashboardLayout = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        onLogout={onLogout}
      />

      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
        sidebarCollapsed ? 'md:ml-20' : 'md:ml-64'
      }`}>
        <TopBar 
          setSidebarOpen={setSidebarOpen} 
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />

        <main className="flex-1 overflow-auto p-6">
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'clients' && <Clients />}
          {activeTab === 'reports' && <Reports />}
          {activeTab === 'profile' && <Profile />}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;