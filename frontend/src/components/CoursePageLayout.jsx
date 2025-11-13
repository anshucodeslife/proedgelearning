import React from "react";
import Button from "./Button";
import EnrollModal from "./EnrollModal";

export default function CoursePageLayout({ title, description, points, imageUrl }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="pt-20 pb-24">
      {/* Banner Image */}
      <div className="w-full h-72 bg-gray-200">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl mt-12">

        <h1 className="text-4xl font-bold text-[#0a214d] mb-4">{title}</h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          {description}
        </p>

        <h2 className="text-2xl font-semibold text-[#fca532] mb-4">Key Learning Outcomes</h2>

        <ul className="space-y-3 text-gray-700 text-lg mb-12">
          {points.map((p, i) => (
            <li key={i} className="flex items-start">
              <span className="text-[#fca532] font-bold mr-2">▪</span> {p}
            </li>
          ))}
        </ul>

        <Button onClick={() => setIsModalOpen(true)} className="text-lg px-8 py-3">
          Enroll Now
        </Button>

        <EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}
