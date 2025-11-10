// src/components/Button.jsx
import React from "react";

export default function Button({ children, onClick, variant = "primary", className = "" }) {
  const baseStyles =
    "px-6 py-3 rounded-xl font-semibold transition duration-300 focus:outline-none";

  const styles = {
    primary: "bg-[#fca532] text-[#0a214d] hover:bg-[#ffb54f]",
    secondary: "border border-[#fca532] text-[#fca532] hover:bg-[#fca532] hover:text-[#0a214d]",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}
