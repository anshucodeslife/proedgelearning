import CoursePageLayout from "../../components/CoursePageLayout";

export default function ExcelBasic() {
  return (
    <CoursePageLayout
      title="Excel Basic"
      description="A structured program designed to build strong foundational Excel skills, enabling students to manage, analyze, and format data efficiently in professional settings."
      imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
      points={[
        "Introduction to Excel Interface",
        "Data Entry & Formatting Techniques",
        "Basic Formulas & Functions",
        "Worksheet & Workbook Management",
        "Charts & Basic Visualization",
        "Tables & Formatting Styles",
        "Basic Conditional Formatting",
        "Print Page Setup & Document Handling"
      ]}
    />
  );
}
