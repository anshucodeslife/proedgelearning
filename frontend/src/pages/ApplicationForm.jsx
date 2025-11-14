import React, { useState } from "react";
import { API_BASE_URL } from "../config";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contact: "",
    email: "",
    address: "",
    educationLevel: "",
    school: "",
    board: "",
    subjects: "",
    preferredCourses: "",
    otherCourse: "",
    batchTiming: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({});
      } else {
        alert("Error: " + (data.details || data.error));
      }
    } catch (err) {
      alert("Network error: " + err.message);
    }

    setLoading(false);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-xl">
        <h1 className="text-4xl font-extrabold text-[#0a214d] text-center mb-10">
          Application Form
        </h1>

        {submitted && (
          <p className="text-green-600 text-center text-lg mb-6 font-semibold">
            ✅ Application Submitted Successfully!
          </p>
        )}

        <form onSubmit={submitForm} className="space-y-4 bg-gray-50 p-8 rounded-xl shadow">
          
          <input name="fullName" onChange={handleChange} className="w-full p-3 border rounded" placeholder="Full Name" required />

          <input type="date" name="dob" onChange={handleChange} className="w-full p-3 border rounded" required />

          <select name="gender" onChange={handleChange} className="w-full p-3 border rounded" required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input name="contact" onChange={handleChange} className="w-full p-3 border rounded" placeholder="Contact Number" required />

          <input type="email" name="email" onChange={handleChange} className="w-full p-3 border rounded" placeholder="Email" required />

          <input name="address" onChange={handleChange} className="w-full p-3 border rounded" placeholder="Address" />

          <input name="educationLevel" onChange={handleChange} className="w-full p-3 border rounded" placeholder="Education Level" />

          <input name="school" onChange={handleChange} className="w-full p-3 border rounded" placeholder="School" />

          <input name="board" onChange={handleChange} className="w-full p-3 border rounded" placeholder="Board" />

          <input name="subjects" onChange={handleChange} className="w-full p-3 border rounded" placeholder="Subjects" />

          <input name="preferredCourses" onChange={handleChange} className="w-full p-3 border rounded" placeholder="Preferred Courses" />

          <input name="otherCourse" onChange={handleChange} className="w-full p-3 border rounded" placeholder="Other Course" />

          <input name="batchTiming" onChange={handleChange} className="w-full p-3 border rounded" placeholder="Batch Timing" />

          <input name="emergencyName" onChange={handleChange} className="w-full p-3 border rounded" placeholder="Emergency Name" />

          <input name="emergencyRelation" onChange={handleChange} className="w-full p-3 border rounded" placeholder="Emergency Relation" />

          <input name="emergencyPhone" onChange={handleChange} className="w-full p-3 border rounded" placeholder="Emergency Phone" />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#fca532] hover:bg-orange-500 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

        </form>
      </div>
    </div>
  );
}
