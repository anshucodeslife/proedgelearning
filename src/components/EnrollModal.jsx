// src/components/EnrollModal.jsx
import React, { useState } from "react";

export default function EnrollModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    "Basic Computer",
    "Excel Basic",
    "Excel Advanced",
    "Excel + VBA",
    "SQL Basic",
    "SQL Advanced"
  ];

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form (you can remove if needed)
    setName("");
    setPhone("");
    setEmail("");
    setCourse("");

    setTimeout(() => {
      setSubmitted(false);
      onClose();
      // alert("✅ Submitted Successfully!");
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 relative">

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl">
          &times;
        </button>

        <h2 className="text-2xl font-bold text-[#0a214d] mb-4 text-center">
          Enroll Now
        </h2>

        {submitted ? (
          <p className="text-green-600 text-center text-lg font-semibold py-4">
            ✅ Form Submitted Successfully!
          </p>
        ) : (
          <form onSubmit={submitForm} className="space-y-4">
            <input
              required
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              required
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border rounded-lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <select
              required
              className="w-full px-4 py-3 border rounded-lg"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">Select Course</option>
              {courses.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full bg-[#fca532] text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
