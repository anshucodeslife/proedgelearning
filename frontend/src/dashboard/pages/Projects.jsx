// dashboard/pages/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Eye, Edit2, Trash2, Filter, Calendar, User, TrendingUp, Clock } from 'lucide-react';
import { projectsData } from '../data/data';
import AddProjectModal from '../modals/AddProjectModal';
import EditProjectModal from '../modals/EditProjectModal';

const Projects = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState(projectsData);
  const [filterStatus, setFilterStatus] = useState('all');

  const getStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-100 text-green-700 border-green-200',
      'In Progress': 'bg-[#FFC947]/20 text-[#A66B00] border-[#FFC947]/40',
      'Planning': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      'Active': 'bg-[#0B2C65]/10 text-[#0B2C65] border-[#0B2C65]/20'
    };
    return colors[status] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const handleAddProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: projects.length + 1, progress: 0 }]);
    setAddModalOpen(false);
  };

  const handleEditProject = (updatedProject) => {
    setProjects(projects.map(p => p.id === updatedProject.id ? updatedProject : p));
    setEditModalOpen(false);
  };

  const openEditModal = (project) => {
    setSelectedProject(project);
    setEditModalOpen(true);
  };

  const filteredProjects = filterStatus === 'all' 
    ? projects 
    : projects.filter(p => p.status.toLowerCase().replace(' ', '-') === filterStatus);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#0B2C65] to-[#001B48] bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-gray-600 mt-1">Manage and track all your institute projects</p>
        </div>

        <button 
          onClick={() => setAddModalOpen(true)}
          className="bg-gradient-to-r from-[#0B2C65] to-[#001B48] text-white px-6 py-3 rounded-xl transition-all flex items-center space-x-2 shadow-lg hover:-translate-y-0.5"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">New Project</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Projects', value: projects.length, icon: TrendingUp, color: '#0B2C65' },
          { label: 'Active', value: projects.filter(p => p.status === 'Active').length, icon: Clock, color: '#001B48' },
          { label: 'In Progress', value: projects.filter(p => p.status === 'In Progress').length, icon: Clock, color: '#FFC947' },
          { label: 'Completed', value: projects.filter(p => p.status === 'Completed').length, icon: TrendingUp, color: '#16A34A' }
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              <span className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</span>
            </div>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2">
        <div className="flex items-center space-x-2 overflow-x-auto">
          {[
            { id: 'all', label: 'All Projects', count: projects.length },
            { id: 'active', label: 'Active', count: projects.filter(p => p.status === 'Active').length },
            { id: 'in-progress', label: 'In Progress', count: projects.filter(p => p.status === 'In Progress').length },
            { id: 'planning', label: 'Planning', count: projects.filter(p => p.status === 'Planning').length },
            { id: 'completed', label: 'Completed', count: projects.filter(p => p.status === 'Completed').length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterStatus(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                filterStatus === tab.id 
                  ? 'bg-gradient-to-r from-[#0B2C65] to-[#001B48] text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0B2C65] transition-colors">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.type}</p>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-600"><User className="w-4 h-4" /><span>Student</span></div>
                <span className="font-semibold text-gray-900">{project.client}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-600"><Calendar className="w-4 h-4" /><span>Due Date</span></div>
                <span className="font-semibold text-gray-900">{project.date}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">Progress</span>
                <span className="font-bold text-[#0B2C65]">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  className="bg-gradient-to-r from-[#0B2C65] to-[#001B48] h-2.5 rounded-full"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end space-x-2 pt-4 border-t border-gray-100">
              <button className="p-2 hover:bg-[#0B2C65]/10 rounded-lg transition-colors"><Eye className="w-4 h-4 text-[#0B2C65]" /></button>
              <button onClick={() => openEditModal(project)} className="p-2 hover:bg-[#FFC947]/20 rounded-lg transition-colors"><Edit2 className="w-4 h-4 text-[#A66B00]" /></button>
              <button className="p-2 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4 text-red-600" /></button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your filters or create a new project</p>
          <button 
            onClick={() => setAddModalOpen(true)}
            className="bg-gradient-to-r from-[#0B2C65] to-[#001B48] text-white px-6 py-2 rounded-lg"
          >
            Create Project
          </button>
        </div>
      )}

      <AddProjectModal isOpen={addModalOpen} onClose={() => setAddModalOpen(false)} onAdd={handleAddProject} />

      <EditProjectModal isOpen={editModalOpen} onClose={() => setEditModalOpen(false)} onEdit={handleEditProject} project={selectedProject} />

    </motion.div>
  );
};

export default Projects;
