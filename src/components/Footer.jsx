// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  LinkedinIcon,
  WhatsAppIcon,
  XIconTwitter,
} from "./icons/Icons";

export default function Footer() {
  return (
    <footer className="bg-[#0a214d] text-gray-300 pt-20 pb-8">
      <div className="container mx-auto px-6 grid gap-12 md:grid-cols-4">
        {/* Brand + Description */}
        <div>
          <h3 className="text-3xl font-bold text-[#fca532] mb-4">PROEDGE</h3>
          <p className="mb-6 leading-relaxed">
            Empowering learners with professional, practical skill development.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-6">
            <a
              href="https://wa.me/918105751886"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#fca532] transition-colors"
            >
              <WhatsAppIcon className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#fca532] transition-colors">
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#fca532] transition-colors">
              <XIconTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-[#fca532] transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>

          {/* Map Embed */}
          <div className="h-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="ProEdge Learning Sirsi Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15600.0!2d74.8354!3d14.6195!3m2!1i1024!2i768!4f13.1!3m5!1s0x0%3A0x0!2zMTTCsDM3JzE1LjAiTiA3NMKwNDgnNTUuMCJF!3m2!1i1024!2i768!4f13.1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl text-white mb-6">Contact Us</h4>
          <p className="mb-2">📞 +91 81057 51886</p>
          <p className="mb-2">🏠 1074, 1st Floor Simpi Galli, Sirsi</p>
          <p className="mb-2">Karnataka, 581401</p>
          <p>✉️ info@proedgelearning.in</p>
        </div>

        {/* Courses Column 1 */}
        <div>
          <h4 className="text-xl text-white mb-6">Courses</h4>
          <Link
            to="/course/basic-computer"
            className="block mb-3 hover:text-[#fca532] transition-colors"
          >
            Basic Computer Skills
          </Link>
          <Link
            to="/course/excel-basic"
            className="block mb-3 hover:text-[#fca532] transition-colors"
          >
            Excel Basic
          </Link>
          <Link
            to="/course/excel-advanced"
            className="block mb-3 hover:text-[#fca532] transition-colors"
          >
            Excel Advanced
          </Link>
          <Link
            to="/course/excel-vba"
            className="block mb-3 hover:text-[#fca532] transition-colors"
          >
            Excel + VBA Scripting
          </Link>
        </div>

        {/* Courses Column 2 + Quick Links */}
        <div>
          <h4 className="text-xl text-white mb-6">Courses</h4>
          <Link
            to="/course/sql-basic"
            className="block mb-3 hover:text-[#fca532] transition-colors"
          >
            SQL Basic
          </Link>
          <Link
            to="/course/sql-advanced"
            className="block mb-3 hover:text-[#fca532] transition-colors"
          >
            SQL Advanced
          </Link>
          <Link
            to="/course/powerbi"
            className="block mb-3 hover:text-[#fca532] transition-colors"
          >
            Power BI
          </Link>
          <Link
            to="/course/power-automate"
            className="block mb-3 hover:text-[#fca532] transition-colors"
          >
            Power Automate
          </Link>

          <h4 className="text-xl text-white mt-8 mb-4">Quick Links</h4>
          <Link
            to="/"
            className="block mb-2 hover:text-[#fca532] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block mb-2 hover:text-[#fca532] transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/application"
            className="block mb-2 hover:text-[#fca532] transition-colors"
          >
            Application Form
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 pt-8 text-center mt-10 text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} ProEdge Learning. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
