import React, { useState } from "react";
import {
  Database,
  BarChart3,
  Smartphone,
  Table,
  Users,
  Briefcase,
  CheckCircle,
  Phone,
  Mail,
  Globe,
  Layers,
  Award,
  TrendingUp,
  Menu,
  X,
  ArrowRight,
  Code,
  Brain,
  Target,
  Youtube,
  Twitter,
  Instagram,
} from "lucide-react";
import proweblogo from "../assets/proedgeweblogo.png";
import { Link } from "react-router-dom";

const InternshipPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* NAVIGATION */}
      <nav className="bg-[#0a214d] text-white shadow-lg sticky top-0 z-50">
        {/* Top Mini Bar */}
        <div className="hidden md:block bg-gray-900 bg-opacity-30 text-sm">
          <div className="container mx-auto px-6 py-2 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <a
                href="mailto:info@proedgelearning.in"
                className="hover:text-[#fca532] transition"
              >
                Email: info@proedgelearning.in
              </a>
              <a
                href="tel:+918105751886"
                className="hover:text-[#fca532] transition"
              >
                Phone: +91 81057 51886
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <span>Follow Us:</span>
              <a
                href="https://www.youtube.com/@ProEdgeLearning"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fca532] transition"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://x.com/ProEdgeLearning"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fca532] transition"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.instagram.com/theproedgelearning/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fca532] transition"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:proedgelearningofficial@gmail.com"
                className="hover:text-[#fca532] transition"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          {/* Logo + Text */}
           <Link to="/" className="flex items-center space-x-3">
            <img
              src={proweblogo}
              alt="Proedge Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
            <span className="block text-2xl md:text-3xl font-bold">
              <span className="text-[#fca532]">PRO</span>
              <span className="text-white">EDGE</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="/"
              className="text-lg font-medium hover:text-[#fca532] transition"
            >
              Home
            </a>
            <a
              href="#overview"
              className="text-lg font-medium hover:text-[#fca532] transition"
            >
              Overview
            </a>
            <a
              href="#programs"
              className="text-lg font-medium hover:text-[#fca532] transition"
            >
              Programs
            </a>
            <a
              href="#excel"
              className="text-lg font-medium hover:text-[#fca532] transition"
            >
              Excel Training
            </a>
            <a
              href="#why-us"
              className="text-lg font-medium hover:text-[#fca532] transition"
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-lg font-medium hover:text-[#fca532] transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a214d] pb-6 transition-all">
            <div className="flex flex-col items-center space-y-4 px-6 pt-4">
              <a
                href="#overview"
                className="text-lg hover:text-[#fca532] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Overview
              </a>
              <a
                href="#programs"
                className="text-lg hover:text-[#fca532] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programs
              </a>
              <a
                href="#excel"
                className="text-lg hover:text-[#fca532] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Excel Training
              </a>
              <a
                href="#why-us"
                className="text-lg hover:text-[#fca532] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Us
              </a>
              <a
                href="#contact"
                className="text-lg hover:text-[#fca532] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button
                className="w-full bg-[#fca532] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#e09429] transition"
                onClick={() => {
                  setIsEnrollModalOpen(true);
                  setMobileMenuOpen(false);
                }}
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Enroll Modal */}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setIsEnrollModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Enroll Now
            </h2>
            <p className="text-slate-600 mb-6">
              Start your journey to success today!
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#fca532] focus:border-transparent outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#fca532] focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#fca532] focus:border-transparent outline-none"
                  placeholder="+91 12345 67890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Select Program
                </label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#fca532] focus:border-transparent outline-none">
                  <option>Power BI</option>
                  <option>SQL</option>
                  <option>Power Apps</option>
                  <option>Complete Package</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#fca532] text-white py-3 rounded-lg font-bold hover:bg-[#e09429] transition shadow-lg"
              >
                Submit Enrollment
              </button>
            </form>
          </div>
        </div>
      )}

      {/* HERO SECTION with Background Image */}
      <header className="relative bg-slate-900 text-white py-25 px-6 overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80)",
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900/90 to-slate-900/80" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full mb-6">
            <span className="text-blue-300 font-semibold text-sm">
              🎓 Final Year Student Program
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Rise with Skills, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Lead with Confidence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10">
            Transform your career with specialized internship programs in Data
            Analytics, SQL, Power BI & Power Apps
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#programs"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-500 transition shadow-xl transform hover:scale-105"
            >
              Explore Programs <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-8 rounded-lg hover:bg-white/20 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* STATS BAR */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold mb-1">3+</div>
            <div className="text-blue-100 text-sm">Core Technologies</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">100%</div>
            <div className="text-blue-100 text-sm">Practical Training</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">Free</div>
            <div className="text-blue-100 text-sm">Excel Training</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">24/7</div>
            <div className="text-blue-100 text-sm">Support Available</div>
          </div>
        </div>
      </section>

      {/* PROGRAM OVERVIEW */}
      <section id="overview" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Program Overview
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Connecting theory with practice through hands-on experience and
            industry-ready skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <Layers size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Practical Skills
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Our program bridges the gap between Academic knowledge and
              Practical skills, ensuring students gain relevant experience that
              enhances their employability in today's competitive job market.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <Briefcase size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Project Experience
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Participants engage in hands-on projects, allowing them to apply
              learned concepts in Real-World scenarios, fostering a deeper
              understanding and encouraging proactive problem-solving abilities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
            <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Interview Preparation
            </h3>
            <p className="text-slate-600 leading-relaxed">
              We prioritize thorough interview preparation, providing vital
              tools and techniques to build confidence, articulate skills, and
              present professionally during job interviews.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">
              Real-World Experience
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Gain hands-on experience with industry-standard tools and work on
              real projects that simulate actual workplace scenarios. Our
              program is designed to make you job-ready from day one.
            </p>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 mb-1">
                  Industry-Aligned Curriculum
                </h4>
                <p className="text-slate-600">
                  Updated regularly to match current market demands
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 mb-1">
                  Expert Mentorship
                </h4>
                <p className="text-slate-600">
                  Learn from professionals with years of industry experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE TECHNOLOGIES */}
      <section
        id="programs"
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
              Technical Skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
              Core Technologies You'll Master
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Learn the most in-demand tools used by top companies worldwide
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Power BI */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-100 p-4 rounded-xl">
                  <BarChart3 className="text-yellow-600" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Power BI
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Business Intelligence & Analytics
                  </p>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Data Analytics Dashboard"
                className="rounded-xl mb-6 w-full h-48 object-cover"
              />

              <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 line-through">MRP: ₹25,999</p>
                    <p className="text-3xl font-bold text-yellow-700">Now: ₹17,999</p>
                  </div>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                    Save ₹8,000
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mt-1 shrink-0"
                  />
                  <div>
                    <strong className="text-slate-900">
                      Interactive Dashboards:
                    </strong>
                    <p className="text-slate-600 text-sm">
                      Create dynamic visuals with filters, slicers, and
                      drill-downs
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mt-1 shrink-0"
                  />
                  <div>
                    <strong className="text-slate-900">
                      Data Connectivity:
                    </strong>
                    <p className="text-slate-600 text-sm">
                      Connect to Excel, SQL Server, SharePoint, web APIs, and
                      100+ data sources
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mt-1 shrink-0"
                  />
                  <div>
                    <strong className="text-slate-900">
                      Real-Time Reporting:
                    </strong>
                    <p className="text-slate-600 text-sm">
                      Live data dashboards for instant insights
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-green-500 mt-1 shrink-0"
                  />
                  <div>
                    <strong className="text-slate-900">
                      AI-Powered Insights:
                    </strong>
                    <p className="text-slate-600 text-sm">
                      Built-in AI visuals like Key Influencers and Smart
                      Narratives
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* SQL */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Database className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">SQL</h3>
                  <p className="text-slate-600 text-sm">
                    Structured Query Language
                  </p>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80"
                alt="Database Development"
                className="rounded-xl mb-6 w-full h-48 object-cover"
              />

              <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 line-through">MRP: ₹35,999</p>
                    <p className="text-3xl font-bold text-blue-700">Now: ₹21,999</p>
                  </div>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                    Save ₹14,000
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-slate-900 mb-2">
                    SQL Fundamentals
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Understanding databases, tables, records, and schemas.
                    Writing basic queries using SELECT, WHERE, ORDER BY, LIMIT
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-slate-900 mb-2">
                    Query Writing & Data Handling
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Filtering, sorting, and grouping data. Joining Multiple
                    Tables. Applying aggregate functions: COUNT(), SUM(), AVG(),
                    MAX(), MIN()
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-slate-900 mb-2">
                    Database Design & Modeling
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Learning ER diagrams. Understanding primary keys, foreign
                    keys, and relationships. Normalization (1NF, 2NF, 3NF)
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-slate-900 mb-2">
                    Advanced SQL Concepts
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Window functions (OVER, PARTITION BY), Stored procedures and
                    functions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Power Apps */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl shadow-xl text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 p-4 rounded-xl">
                    <Smartphone className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Power Apps</h3>
                    <p className="text-purple-100">Low-Code Development</p>
                  </div>
                </div>
                <p className="text-lg text-purple-50 leading-relaxed mb-6">
                  A low-code application development platform that allows users
                  to build custom business applications with minimal or no
                  traditional coding experience.
                </p>
                <div className="mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl border-2 border-white/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-purple-100 line-through">MRP: ₹39,999</p>
                      <p className="text-3xl font-bold text-white">Now: ₹24,999</p>
                    </div>
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                      Save ₹15,000
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-purple-100">
                  <Code size={20} />
                  <span className="text-sm">
                    Build apps faster with drag-and-drop functionality
                  </span>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
                  alt="Mobile App Development"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIMENTARY EXCEL TRAINING */}
      <section
        id="excel"
        className="py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50 border-y border-green-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-600 text-white py-2 px-6 rounded-full text-sm font-bold uppercase tracking-wide mb-4 shadow-lg">
              🎁 Bonus Module - 100% Free
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Complimentary Excel Training
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Master Excel for FREE as part of your chosen package - No
              additional cost!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Excel Training"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-900">
                Why Excel Skills Matter
              </h3>
              <p className="text-slate-600 text-lg">
                Excel is the most widely used tool in the corporate world. From
                data analysis to financial modeling, Excel proficiency is
                essential for any professional role.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Table className="text-green-600" size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">
                    Used by 99% of Companies
                  </h4>
                </div>
                <p className="text-slate-600 text-sm">
                  Excel is a must-have skill for almost every job role across
                  industries
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Data Entry & Formatting",
                desc: "Learn how to clean, organize, and format data for professional reports and dashboards.",
                icon: <Table size={24} />,
              },
              {
                num: "02",
                title: "Advanced Formulas",
                desc: "Master essential functions like VLOOKUP, IF, INDEX-MATCH, TEXT, DATE, and logical operators.",
                icon: <Code size={24} />,
              },
              {
                num: "03",
                title: "Data Validation",
                desc: "Apply rules to control input and visually highlight key trends or errors via Conditional Formatting.",
                icon: <CheckCircle size={24} />,
              },
              {
                num: "04",
                title: "Pivot Tables & Charts",
                desc: "Create dynamic summaries and visualizations to analyze large datasets quickly.",
                icon: <BarChart3 size={24} />,
              },
              {
                num: "05",
                title: "Real-World Case Studies",
                desc: "Practice with datasets from sales, marketing, HR, and inventory to simulate workplace tasks.",
                icon: <Briefcase size={24} />,
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white p-6 rounded-xl shadow-md border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl font-bold text-green-200">
                    {item.num}
                  </div>
                  <div className="bg-green-100 p-2 rounded-lg text-green-600 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURED SKILL ENHANCEMENT */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Skill Enhancement */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                Structured Skill Enhancement
              </h3>
            </div>

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
              alt="Learning Path"
              className="rounded-2xl shadow-xl mb-8"
            />

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-600">
                <h4 className="font-bold text-xl text-slate-900 mb-3 flex items-center gap-2">
                  <Target size={20} className="text-blue-600" />
                  Domain-Focused
                </h4>
                <p className="text-slate-700 mb-2">
                  Tailored training to meet Industry-Specific needs:
                </p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• Choose from Data Analytics, IT, Finance, HR domains</li>
                  <li>
                    • Role-based learning aligned with industry expectations
                  </li>
                  <li>• Real-world scenarios and case studies</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-600">
                <h4 className="font-bold text-xl text-slate-900 mb-3 flex items-center gap-2">
                  <Brain size={20} className="text-purple-600" />
                  Beginner to Advanced Path
                </h4>
                <p className="text-slate-700 mb-2">
                  Progressive learning structure:
                </p>
                <ul className="text-sm text-slate-600 space-y-1 ml-4">
                  <li>• Foundation modules for beginners</li>
                  <li>• Progressive skill-building to advanced tools</li>
                  <li>• Weekly milestones to track growth</li>
                  <li>• Certification at each level</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-600">
                <h4 className="font-bold text-xl text-slate-900 mb-3">
                  Industry Tools
                </h4>
                <p className="text-slate-600 text-sm">
                  Hands-on experience with tools actually used in the field by
                  top companies
                </p>
              </div>
            </div>
          </div>

          {/* Right: Personality & Prep */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">
                Personality & Interview Prep
              </h3>
            </div>

            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt="Interview Preparation"
              className="rounded-2xl shadow-xl mb-8"
            />

            {/* Personality Development */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl mb-8 text-white shadow-xl">
              <h4 className="font-bold text-2xl mb-6 flex items-center gap-2">
                <Award size={24} />
                Personality Development
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-lg shrink-0">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <strong className="block mb-1">
                      Effective Communication
                    </strong>
                    <p className="text-purple-100 text-sm">
                      Boosts professional relationships and teamwork
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-lg shrink-0">
                    <span className="text-2xl">💪</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Confidence Building</strong>
                    <p className="text-purple-100 text-sm">
                      Creates a strong presence in interviews
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-lg shrink-0">
                    <span className="text-2xl">👔</span>
                  </div>
                  <div>
                    <strong className="block mb-1">
                      Professional Grooming
                    </strong>
                    <p className="text-purple-100 text-sm">
                      Enhances overall appeal and readiness
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mock Interviews */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h4 className="font-bold text-2xl text-slate-900 mb-6 flex items-center gap-2">
                <Briefcase size={24} className="text-blue-600" />
                Mock Interviews
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">
                      HR Rounds
                    </strong>
                    <p className="text-slate-600 text-sm">
                      Simulate real-world interview scenarios
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                    <span className="text-xl">💻</span>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">
                      Technical Rounds
                    </strong>
                    <p className="text-slate-600 text-sm">
                      Provide essential skills and feedback opportunities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">
                      Real-time Feedback
                    </strong>
                    <p className="text-slate-600 text-sm">
                      Enhances confidence and interview readiness
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Projects */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 mt-8">
              <h4 className="font-bold text-xl text-slate-900 mb-4">
                Real Projects
              </h4>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mt-0.5 shrink-0"
                  />
                  <span>
                    Engage in projects to develop your skills effectively
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mt-0.5 shrink-0"
                  />
                  <span>
                    Gain confidence by immediately applying your learning
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mt-0.5 shrink-0"
                  />
                  <span>
                    Participate in simulated experiences to apply knowledge
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="why-us"
        className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold uppercase tracking-wider text-sm">
              Our Advantages
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Why Choose ProEdge Learning?
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
               <div className="mt-3 text-2xl font-bold text-white font-['PT Sans']">
              Because{" "}
              <span className="text-[#fca532]">we don’t just teach</span> — we
              transform
            </div>

            <div className="mt-1 font-bold font-['PT Sans'] text-2xl">
              <span className="text-[#fca532]">At ProEdge</span>, every skill
              you learn is designed to move you closer to your
              <span className="text-[#fca532]"> career goals.</span>
            </div>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-2xl group">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Table size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Practical Training</h3>
              <p className="text-slate-300 leading-relaxed">
                Engage in hands-on projects that enhance your skills and prepare
                you for real-world challenges in the industry.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-2xl group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Industry Projects</h3>
              <p className="text-slate-300 leading-relaxed">
                Collaborate on live projects that reflect current industry
                standards, ensuring relevant experience and insights.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-2xl group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Certification</h3>
              <p className="text-slate-300 leading-relaxed">
                Gain recognized certification upon completion, boosting your
                resume and validating your new skills for employers.
              </p>
            </div>
          </div>

          {/* Success Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
              alt="Success Stories"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <footer
        id="contact"
        className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-6 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              For inquiries about the internship program, reach out to us today!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-2">
            <a
              href="tel:+918105751886"
              className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl group text-center"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <h3 className="font-bold text-xl mb-2">Call Us</h3>
              <p className="text-blue-400 text-lg">+91 81057 51886</p>
            </a>

            <a
              href="mailto:info@proedgelearning.in"
              className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl group text-center"
            >
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <h3 className="font-bold text-xl mb-2">Email Us</h3>
              <p className="text-blue-400 text-lg break-all">
                info@proedgelearning.in
              </p>
            </a>

            <a
              href="http://www.proedgelearning.in"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl group text-center"
            >
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Globe size={28} />
              </div>
              <h3 className="font-bold text-xl mb-2">Visit Website</h3>
              <p className="text-blue-400 text-lg">www.proedgelearning.in</p>
            </a>
          </div>

          {/* Footer Bottom - Commented as requested */}
          {/* <div className="border-t border-slate-800 pt-8 text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">ProEdge LEARNING</h3>
              <p className="text-slate-400 text-sm">Subsidiary of ProFound Ventures Pvt.</p>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} ProEdge Learning. All Rights Reserved.
            </p>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default InternshipPage;