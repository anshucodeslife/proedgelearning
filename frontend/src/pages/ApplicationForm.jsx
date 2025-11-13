import React, { useState } from "react";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const courses = [
    "Basic Computer Skills",
    "Excel Basic",
    "Excel Advance",
    "Excel + VBA Scripting",
    "SQL Basic",
    "SQL Advance",
    "Power BI",
    "Power Automate"
  ];

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
          <input required type="text" placeholder="Full Name" className="w-full px-4 py-3 border rounded-lg" />
          <input required type="text" placeholder="Phone Number" className="w-full px-4 py-3 border rounded-lg" />
          <input required type="email" placeholder="Email Address" className="w-full px-4 py-3 border rounded-lg" />

          <select required className="w-full px-4 py-3 border rounded-lg">
            <option>Select Course</option>
            {courses.map((course) => (
              <option key={course}>{course}</option>
            ))}
          </select>

          <button type="submit" className="w-full bg-[#fca532] hover:bg-orange-500 text-white py-3 rounded-lg font-semibold">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
