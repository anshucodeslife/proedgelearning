// src/sections/AboutUs.jsx
import React from "react";
import Button from "../components/Button";
import { CheckCircleIcon } from "../components/icons/Icons";

export default function AboutUs() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#fca532] font-semibold text-lg uppercase tracking-wider">
            About ProEdge
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0a214d] my-4">
            Who We Are & What We Do
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            ProEdge Learning is a premier destination for individuals seeking to
            elevate careers in tech.
          </p>

          {[
            "Courses by Industry Experts",
            "Hands-On Practical Learning",
            "Dedicated Career Support",
          ].map((text) => (
            <div key={text} className="flex items-center mb-4">
              <CheckCircleIcon className="w-6 h-6 text-[#fca532] mr-3" />
              <span className="text-gray-700 text-lg">{text}</span>
            </div>
          ))}

          <Button>Read More</Button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=600&fit=crop"
          alt="About"
          className="rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
