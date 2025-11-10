// dashboard/pages/Clients.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit2,
  Trash2,
  Mail,
  Star,
  TrendingUp,
  Building,
} from "lucide-react";
import { clientsData } from "../data/data";
import AddClientModal from "../modals/AddClientModal";
import EditClientModal from "../modals/EditClientModal";
import DeleteConfirmModal from "../modals/DeleteConfirmModal";

const Clients = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [clients, setClients] = useState(clientsData);

  const handleAddClient = (newClient) => {
    setClients([...clients, { ...newClient, id: clients.length + 1 }]);
    setAddModalOpen(false);
  };

  const handleEditClient = (updatedClient) => {
    setClients(
      clients.map((c) => (c.id === updatedClient.id ? updatedClient : c))
    );
    setEditModalOpen(false);
  };

  const handleDeleteClient = () => {
    setClients(clients.filter((c) => c.id !== selectedClient.id));
    setDeleteModalOpen(false);
  };

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
            Students
          </h1>
          <p className="text-gray-600 mt-1">
            Manage all student records & course enrollments
          </p>
        </div>

        <button
          onClick={() => setAddModalOpen(true)}
          className="bg-gradient-to-r from-[#0B2C65] to-[#001B48] text-white px-6 py-3 rounded-xl flex items-center space-x-2 shadow-md hover:-translate-y-0.5 transition-all"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Add Student</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            label: "Total Students",
            value: clients.length,
            icon: Building,
            color: "#0B2C65",
          },
          {
            label: "Active Courses",
            value: clients.reduce(
              (sum, c) =>
                sum + (Array.isArray(c.services) ? c.services.length : 1),
              0
            ),
            icon: Star,
            color: "#FFC947",
          },
          {
            label: "Monthly Revenue",
            value: "₹2.4L",
            icon: TrendingUp,
            color: "#001B48",
          },
          {
            label: "Growth",
            value: "+12.5%",
            icon: TrendingUp,
            color: "#16A34A",
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#F8FAFC] to-[#EEF2F6] border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {clients.map((client, i) => (
                <motion.tr
                  key={client.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="hover:bg-[#0B2C65]/5 transition-all"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B2C65] to-[#001B48] text-white flex items-center justify-center font-bold text-lg">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{client.name}</p>
                        <p className="text-xs text-gray-500">
                          ID #{client.id.toString().padStart(4, "0")}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {client.email}
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FFC947]/20 text-[#A66B00] border border-[#FFC947]/40">
                      <Star className="w-3 h-3 mr-1" />
                      {client.services} active
                    </span>
                  </td>

                  <td className="px-6 py-4 flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setSelectedClient(client);
                        setEditModalOpen(true);
                      }}
                      className="p-2 hover:bg-[#0B2C65]/10 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4 text-[#0B2C65]" />
                    </button>

                    <button
                      onClick={() => {
                        setSelectedClient(client);
                        setDeleteModalOpen(true);
                      }}
                      className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Modal */}
      <AddClientModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={handleAddClient}
      />
      <EditClientModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onEdit={handleEditClient}
        client={selectedClient}
      />
      <DeleteConfirmModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteClient}
        itemName={selectedClient?.name}
        itemType="student"
      />
    </motion.div>
  );
};

export default Clients;
