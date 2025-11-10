import CoursePageLayout from "../../components/CoursePageLayout";

export default function ExcelAdvanced() {
  return (
    <CoursePageLayout
      title="Excel Advanced"
      description="This advanced Excel course enhances analytical skills through powerful data processing and automation tools used in professional reporting and decision-making."
      imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      points={[
        "Advanced Functions (LOOKUP, IF, TEXT, etc.)",
        "Pivot Tables & Pivot Charts",
        "Data Analysis & Power Query",
        "Power Pivot & Data Modeling",
        "Dashboard Design Techniques",
        "Advanced Conditional Formatting",
        "Data Validation & Error Handling"
      ]}
    />
  );
}
