import CoursePageLayout from "../../components/CoursePageLayout";

export default function BasicComputer() {
  return (
    <CoursePageLayout
      title="Basic Computer Skills"
      description="This foundational course ensures learners gain practical knowledge in operating a computer confidently. It prepares individuals for modern digital work environments, ensuring smooth day-to-day task handling."
      imageUrl="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80"
      points={[
        "Computer Operating Essentials",
        "Windows Interface & File Management",
        "MS Word Fundamentals",
        "MS Excel Basics",
        "MS PowerPoint Basics",
        "Using Internet & Email Professionally",
        "Typing & Computer Etiquette"
      ]}
    />
  );
}
