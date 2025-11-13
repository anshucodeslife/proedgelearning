// dashboard/pages/Profile.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Camera,
  Save,
  Bell,
  Shield,
  Star,
} from "lucide-react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "Anshu Singh",
    email: "anshu@proedgelearning.in",
    phone: "+91 90123-49567",
    company: "ProEdge Learning",
    role: "Administrator",
    bio: "Education & Career Growth Mentor. Helping students unlock opportunities through skill based learning.",
    location: "Mumbai, India",
    website: "www.proedgelearning.in",
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    projectUpdates: true,
    clientMessages: false,
    weeklyReports: true,
  });

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#0B2C65] to-[#001B48] bg-clip-text text-transparent">
          My Profile
        </h1>
        <p className="text-gray-600 mt-1">
          Manage your account and personal settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg"
        >
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#0B2C65] to-[#001B48] flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                {profileData.name.charAt(0)}
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform border border-[#0B2C65]/20">
                <Camera className="w-5 h-5 text-[#0B2C65]" />
              </button>
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              {profileData.name}
            </h3>
            <p className="text-sm text-[#0B2C65] font-semibold">
              {profileData.role}
            </p>
            <p className="text-sm text-gray-500 mb-4">{profileData.company}</p>

            {/* Contact */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-center text-sm text-gray-700 space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>{profileData.email}</span>
              </div>
              <div className="flex items-center justify-center text-sm text-gray-700 space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{profileData.phone}</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#0B2C65] to-[#001B48] text-white py-3 rounded-xl transition transform hover:-translate-y-0.5 shadow-md font-medium">
              Change Avatar
            </button>
          </div>

          {/* Stats */}
          <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#0B2C65]">52</p>
              <p className="text-xs text-gray-600">Students Guided</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#FFC947]">15</p>
              <p className="text-xs text-gray-600">Active Batches</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#0B2C65]/10 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-[#0B2C65]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Personal Information
              </h3>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Full Name", key: "name" },
                  { label: "Email Address", key: "email", type: "email" },
                  { label: "Phone Number", key: "phone" },
                  { label: "Company", key: "company" },
                  { label: "Location", key: "location" },
                  { label: "Website", key: "website" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type || "text"}
                      value={profileData[field.key]}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          [field.key]: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0B2C65] transition"
                    />
                  </div>
                ))}

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData({ ...profileData, bio: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0B2C65] resize-none transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-[#0B2C65] to-[#001B48] text-white px-8 py-3 rounded-xl flex items-center space-x-2 shadow-md transition transform hover:-translate-y-0.5"
              >
                <Save className="w-5 h-5" />
                <span>Save Changes</span>
              </button>
            </form>
          </motion.div>

          {/* Notification Preferences */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#FFC947]/20 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-[#A66B00]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Notifications</h3>
            </div>

            {[
              { key: "emailNotifications", label: "Email Notifications" },
              { key: "projectUpdates", label: "Project Updates" },
              { key: "clientMessages", label: "Student Messages" },
              { key: "weeklyReports", label: "Weekly Reports" },
            ].map((n, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition"
              >
                <p className="font-semibold text-gray-800">{n.label}</p>
                <button
                  onClick={() =>
                    setNotifications({
                      ...notifications,
                      [n.key]: !notifications[n.key],
                    })
                  }
                  className={`relative flex items-center w-12 h-6 rounded-full transition-colors duration-300 ${
                    notifications[n.key] ? "bg-[#0B2C65]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                      notifications[n.key] ? "translate-x-6" : "translate-x-0"
                    }`}
                  ></span>
                </button>
              </div>
            ))}
          </motion.div>

          {/* Security */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Security</h3>
            </div>

            <div className="space-y-4">
              <button className="w-full text-left p-4 border border-gray-200 rounded-xl hover:bg-[#0B2C65]/5 transition">
                <p className="font-semibold text-gray-900">Change Password</p>
              </button>

              <button className="w-full text-left p-4 border border-gray-200 rounded-xl hover:bg-[#0B2C65]/5 transition">
                <p className="font-semibold text-gray-900">
                  Two-Factor Authentication
                </p>
              </button>

              <button className="w-full text-left p-4 border border-gray-200 rounded-xl hover:bg-red-50 transition">
                <p className="font-semibold text-red-600">Delete Account</p>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
