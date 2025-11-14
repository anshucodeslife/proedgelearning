// src/sections/Hero.jsx
import React, { useState } from "react";
import Button from "../components/Button";
import EnrollModal from "../components/EnrollModal";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#0a214d] text-white pt-20 pb-32">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-[#fca532] font-semibold text-lg uppercase tracking-wider">
            Welcome To The ProEdge
          </span>

          <h1 className="text-4xl lg:text-6xl font-extrabold my-4 leading-tight">
            Success Is Just A Step Away
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Certified courses and programs to help you build your career.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button onClick={() => setIsModalOpen(true)}>Get Started</Button>

            {/* <Link to="/courses">
              <Button variant="secondary">View Courses</Button>
            </Link> */}
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
            alt="Hero"
            className="rounded-xl shadow-2xl object-cover w-full h-full"
          />
        </div>
      </div>

      {/* ✅ Modal */}
      <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
