import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@admin.com" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid Login Details");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0a214d]">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-sm text-center">
        <h2 className="text-3xl font-bold text-[#0a214d] mb-6">Admin Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-3 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-[#fca532] text-white py-3 rounded-lg font-semibold hover:bg-orange-500"
          >
            Login
          </button>
          <Link
            to="/"
            className="block w-full text-center border border-[#0a214d] text-[#0a214d] py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            ← Go Back to Home
          </Link>
        </form>
      </div>
    </div>
  );
}
