import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScheduleCallModal = ({ isOpen, onClose, onSubmit, formData, setFormData, loading }) => {
  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl my-8 backdrop-blur-xl bg-black bg-opacity-90 rounded-2xl border border-white border-opacity-20 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Gradient */}
              <div className="relative bg-gradient-to-r from-pink-500 to-blue-500 p-5">
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <h2 className="text-xl md:text-2xl font-bold text-white pr-10">
                  Schedule a Free Call
                </h2>
                <p className="text-white text-opacity-90 mt-1 text-sm">
                  Get your free blueprint & consultation
                </p>
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Anshu Singh"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-black bg-opacity-50 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-black bg-opacity-50 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-black bg-opacity-50 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white text-sm font-medium mb-2">
                      What can we help you with?
                    </label>
                    <textarea
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                      className="w-full px-4 py-2.5 bg-black bg-opacity-50 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none transition-all duration-300"
                    />
                  </div>

                  <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-6 py-2.5 border-2 border-white border-opacity-30 text-white rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2.5 rounded-lg font-medium hover:from-pink-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Get Free Blueprint"
                      )}
                    </button>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-5 pt-5 border-t border-white border-opacity-10">
                  <p className="text-gray-400 text-sm mb-3">
                    What you'll get:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Free 30-minute consultation",
                      "Custom project blueprint",
                      "Technology recommendations",
                      "Timeline & cost estimate",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ScheduleCallModal;