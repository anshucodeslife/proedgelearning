import CoursePageLayout from "../../components/CoursePageLayout";

export default function PowerAutomate() {
  return (
    <CoursePageLayout
      title="Power Automate"
      description="Learn to automate workflows, approvals, and integrations across business applications using Microsoft Power Platform."
      imageUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
      points={[
        "Understanding Flows & Triggers",
        "Working with APIs & Connectors",
        "Creating Multi-Step Workflows",
        "Approval Automations",
        "Integration with Teams, Excel & SharePoint",
        "RPA Desktop Automation Techniques"
      ]}
    />
  );
}
