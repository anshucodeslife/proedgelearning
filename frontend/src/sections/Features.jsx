// src/sections/Features.jsx
import React from "react";
import {
  UsersIcon,
  GlobeIcon,
  BookOpenIcon,
  ClockIcon,
} from "../components/icons/Icons";

export default function Features() {
  const featuresData = [
    {
      icon: <UsersIcon className="w-10 h-10 text-white" />,
      title: "Dedicated Team",
      desc: "Guidance every step of the way.",
    },
    {
      icon: <GlobeIcon className="w-10 h-10 text-white" />,
      title: "Global Community",
      desc: "Learn with diverse learners.",
    },
    {
      icon: <BookOpenIcon className="w-10 h-10 text-white" />,
      title: "Practice Learning",
      desc: "Hands-on real-world projects.",
    },
    {
      icon: <ClockIcon className="w-10 h-10 text-white" />,
      title: "24x7 Support",
      desc: "Help whenever you need it.",
    },
  ];

  return (
    <div className="py-24 bg-gray-50 -mt-16 rounded-t-3xl md:rounded-t-[4rem]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((f) => (
          <div
            key={f.title}
            className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 duration-300"
          >
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold text-[#0a214d] mb-3">
              {f.title}
            </h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
