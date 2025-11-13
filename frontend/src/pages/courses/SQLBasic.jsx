import CoursePageLayout from "../../components/CoursePageLayout";

export default function SQLBasic() {
  return (
    <CoursePageLayout
      title="SQL Basic"
      description="This course introduces learners to querying and managing data in relational databases without requiring prior coding experience."
      imageUrl="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80"
      points={[
        "Introduction to Databases & SQL",
        "Data Retrieval using SELECT",
        "Filtering, Sorting & Wildcards",
        "Aggregate Functions & Grouping",
        "Joins & Relationships",
        "Subqueries & Data Modification"
      ]}
    />
  );
}
