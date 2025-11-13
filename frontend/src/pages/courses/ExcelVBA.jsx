import CoursePageLayout from "../../components/CoursePageLayout";

export default function ExcelVBA() {
  return (
    <CoursePageLayout
      title="Excel + VBA Automation"
      description="Learn to automate repetitive tasks and build custom Excel solutions using powerful VBA scripting techniques developed for corporate automation workflows."
      imageUrl="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
      points={[
        "Introduction to Macros & VBA Editor",
        "Variables, Functions & Procedures",
        "Looping & Conditional Logic",
        "User Forms & Input Automation",
        "Error Handling & Debugging",
        "Automating Excel Reports & Tasks",
        "Integrating Excel with Other Applications"
      ]}
    />
  );
}
