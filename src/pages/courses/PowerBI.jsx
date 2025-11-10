import CoursePageLayout from "../../components/CoursePageLayout";

export default function PowerBI() {
  return (
    <CoursePageLayout
      title="Power BI"
      description="A business intelligence course focused on building interactive dashboards and visual analytics for corporate reporting."
      imageUrl="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=1200&q=80"
      points={[
        "Power BI Interface & Components",
        "Data Extract, Transform & Load (ETL)",
        "Data Modeling Best Practices",
        "Advanced DAX Functions",
        "Dashboard Design & Storytelling",
        "Power BI Cloud & Publishing"
      ]}
    />
  );
}
