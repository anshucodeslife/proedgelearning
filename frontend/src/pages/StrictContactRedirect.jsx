// src/pages/StrictContactRedirect.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function StrictContactRedirect() {
  return <Navigate to="/contact" replace />;
}
