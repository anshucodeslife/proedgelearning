import CoursePageLayout from "../../components/CoursePageLayout";

export default function SQLAdvanced() {
  return (
    <CoursePageLayout
      title="SQL Advanced"
      description="Designed for professionals looking to optimize database operations and master advanced querying techniques used in enterprise systems."
      imageUrl="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80"
      points={[
        "Advanced Joins & Window Functions",
        "Stored Procedures & Functions",
        "CTEs & Query Optimization",
        "Transactions & Error Control",
        "Indexing & Performance Tuning",
        "JSON & XML Data Handling"
      ]}
    />
  );
}
