import React, { useState } from "react";
import { API_BASE_URL } from "../config";

export default function EnrollModal({ isOpen, onClose }) {
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
    preferredCourses: [], // ARRAY
    otherCourse: "",
    batchTiming: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
  });

  const courses = [
    "Basic Computer Skills",
    "Excel Basic",
    "Excel Advance",
    "Excel VBA Scripting",
    "SQL Basic",
    "SQL Advance",
    "Power BI",
    "Power Apps",
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleCourse = (course) => {
    setForm((prev) => {
      const exists = prev.preferredCourses.includes(course);
      return {
        ...prev,
        preferredCourses: exists
          ? prev.preferredCourses.filter((c) => c !== course)
          : [...prev.preferredCourses, course],
      };
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...form,
      preferredCourses: form.preferredCourses.join(", "), // convert array → string
    };

    try {
      const res = await fetch(`${API_BASE_URL}/api/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);

        // Reset
        setForm({
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
          preferredCourses: [],
          otherCourse: "",
          batchTiming: "",
          emergencyName: "",
          emergencyRelation: "",
          emergencyPhone: "",
        });

        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 1500);
      } else {
        alert("Error: " + (data.details || data.error));
      }
    } catch (err) {
      alert("Network error: " + err.message);
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100] p-4 overflow-auto">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-[#0a214d] mb-4 text-center">
          Student Registration
        </h2>

        {submitted ? (
          <p className="text-green-600 text-center text-lg font-semibold py-4">
            ✅ Form Submitted Successfully!
          </p>
        ) : (
          <form onSubmit={submitForm} className="space-y-4">

            {/* Section 1 */}
            <h3 className="font-bold text-lg">Section 1: Personal Details</h3>

            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full p-3 border rounded"
            />

            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              required
              className="w-full p-3 border rounded"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full p-3 border rounded"
            />

            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Residential Address"
              className="w-full p-3 border rounded"
            ></textarea>

            {/* Section 2 */}
            <h3 className="font-bold text-lg">Section 2: Academic Background</h3>

            <select
              name="educationLevel"
              value={form.educationLevel}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            >
              <option value="">Current Education Level</option>
              <option>10th Grade</option>
              <option>12th Grade</option>
              <option>Undergraduate</option>
              <option>Graduate</option>
              <option>Other</option>
            </select>

            <input
              name="school"
              value={form.school}
              onChange={handleChange}
              placeholder="School / College Name"
              className="w-full p-3 border rounded"
            />

            <input
              name="board"
              value={form.board}
              onChange={handleChange}
              placeholder="Board / University"
              className="w-full p-3 border rounded"
            />

            <input
              name="subjects"
              value={form.subjects}
              onChange={handleChange}
              placeholder="Subjects of Interest"
              className="w-full p-3 border rounded"
            />

            {/* Section 3 */}
            <h3 className="font-bold text-lg">Preferred Courses</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {courses.map((c) => (
                <label key={c} className="text-sm">
                  <input
                    type="checkbox"
                    checked={form.preferredCourses.includes(c)}
                    onChange={() => toggleCourse(c)}
                  />{" "}
                  {c}
                </label>
              ))}
            </div>

            <input
              name="otherCourse"
              value={form.otherCourse}
              onChange={handleChange}
              placeholder="Other Course (Optional)"
              className="w-full p-3 border rounded"
            />

            {/* Batch */}
            <select
              name="batchTiming"
              value={form.batchTiming}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            >
              <option value="">Batch Timing Preference</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>

            {/* Section 4 */}
            <h3 className="font-bold text-lg">Section 4: Emergency Contact</h3>

            <input
              name="emergencyName"
              value={form.emergencyName}
              onChange={handleChange}
              placeholder="Emergency Contact Name"
              required
              className="w-full p-3 border rounded"
            />

            <input
              name="emergencyRelation"
              value={form.emergencyRelation}
              onChange={handleChange}
              placeholder="Relationship"
              required
              className="w-full p-3 border rounded"
            />

            <input
              name="emergencyPhone"
              value={form.emergencyPhone}
              onChange={handleChange}
              placeholder="Emergency Contact Number"
              required
              className="w-full p-3 border rounded"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#fca532] text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
