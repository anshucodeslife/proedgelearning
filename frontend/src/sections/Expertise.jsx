// src/sections/Expertise.jsx
import React from "react";

export default function Expertise() {
  const data = [
    { title: "Industry Experts", desc: "Learn from the best." },
    { title: "Practical Learning", desc: "Real-world experience." },
    { title: "Career Support", desc: "Land your dream job." },
    { title: "Flexible Schedule", desc: "Learn at your pace." },
  ];

  return (
    <div className="bg-[#0a214d] py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <span className="text-[#fca532] font-semibold text-lg uppercase">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold my-4">
            We're Dedicated To Your Success
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {data.map((i) => (
              <div
                key={i.title}
                className="bg-white text-[#0a214d] p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-2">{i.title}</h3>
                <p>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=600&fit=crop"
          className="rounded-xl shadow-2xl"
          alt="Experts"
        />
      </div>
    </div>
  );
}
