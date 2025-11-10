// dashboard/data/data.js

export const projectsData = [
  { id: 1, name: 'Website Redesign', type: 'Web Development', client: 'Tech Corp', status: 'In Progress', date: '2024-01-15' },
  { id: 2, name: 'SEO Campaign', type: 'SEO', client: 'Fashion Brand', status: 'Completed', date: '2024-02-01' },
  { id: 3, name: 'Social Media Strategy', type: 'Marketing', client: 'Food Co', status: 'Planning', date: '2024-02-10' },
  { id: 4, name: 'AI Chatbot Integration', type: 'AI Integration', client: 'Finance Inc', status: 'In Progress', date: '2024-01-20' },
  { id: 5, name: 'Brand Identity', type: 'Marketing', client: 'Startup XYZ', status: 'Completed', date: '2024-01-05' },
  { id: 6, name: 'E-commerce Platform', type: 'Web Development', client: 'Retail Store', status: 'In Progress', date: '2024-02-15' }
];

export const clientsData = [
  { id: 1, name: 'Sarah Johnson', company: 'Tech Corp', email: 'sarah@techcorp.com', services: 'Web Dev, SEO' },
  { id: 2, name: 'Michael Brown', company: 'Fashion Brand', email: 'michael@fashion.com', services: 'Marketing' },
  { id: 3, name: 'Emily Davis', company: 'Food Co', email: 'emily@foodco.com', services: 'Social Media' },
  { id: 4, name: 'David Wilson', company: 'Finance Inc', email: 'david@finance.com', services: 'AI Integration' },
  { id: 5, name: 'Lisa Anderson', company: 'Startup XYZ', email: 'lisa@startup.com', services: 'Branding' },
  { id: 6, name: 'James Taylor', company: 'Retail Store', email: 'james@retail.com', services: 'E-commerce' }
];

export const chartData = [
  { month: 'Jan', projects: 12, revenue: 45 },
  { month: 'Feb', projects: 15, revenue: 52 },
  { month: 'Mar', projects: 18, revenue: 61 },
  { month: 'Apr', projects: 22, revenue: 73 },
  { month: 'May', projects: 28, revenue: 89 },
  { month: 'Jun', projects: 25, revenue: 94 }
];

export const performanceData = [
  { name: 'Conversion Rate', value: 78 },
  { name: 'Client Satisfaction', value: 92 },
  { name: 'Project Completion', value: 85 },
  { name: 'Revenue Growth', value: 67 },
  { name: 'Team Productivity', value: 88 },
  { name: 'Response Time', value: 94 }
];

export const students = [
  { id: 1, name: "Aman Sharma", course: "Full Stack", batch: "FS-23A", status: "Active", feesPaid: "₹18,000 / ₹45,000" },
  { id: 2, name: "Priya Verma", course: "Data Science", batch: "DS-22C", status: "Active", feesPaid: "₹40,000 / ₹60,000" },
  { id: 3, name: "Kunal Singh", course: "UI/UX", batch: "UX-24B", status: "Pending", feesPaid: "₹5,000 / ₹30,000" }
];

export const courses = [
  { id: 1, title: "Full Stack Developer", duration: "6 Months", price: "₹45,000" },
  { id: 2, title: "Data Science + ML", duration: "8 Months", price: "₹60,000" },
  { id: 3, title: "UI/UX Design", duration: "4 Months", price: "₹30,000" }
];

export const batches = [
  { id: 1, code: "FS-23A", course: "Full Stack", students: 28, timing: "Mon-Fri 7PM", trainer: "Rahul S." },
  { id: 2, code: "DS-22C", course: "Data Science", students: 22, timing: "Sat-Sun 11AM", trainer: "Sneha P." }
];

export const leads = [
  { id: 1, name: "Rohan Mehra", interest: "Full Stack", contact: "9876543210", status: "Follow Up" },
  { id: 2, name: "Anita Desai", interest: "Data Science", contact: "9123456780", status: "Converted" }
];

export const payments = [
  { id: 1, student: "Aman Sharma", amount: "₹8,000", mode: "UPI", date: "2025-02-05" },
  { id: 2, student: "Priya Verma", amount: "₹15,000", mode: "Card", date: "2025-02-08" }
];
