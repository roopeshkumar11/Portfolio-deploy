import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async (email, password) => {
    try {
      const response = await axios.post("https://portfoliobackend-92m1.onrender.com/api/admin/adminregister", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        return { success: true, message: "Registration successful" };
      } else {
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || "Registration failed" };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill out all fields.");
      setLoading(false);
      return;
    }

    const result = await registerUser(email, password);

    if (result.success) {
      setMessage(result.message);
      setTimeout(() => {
        window.location.href = "/addminm";
      }, 1000);
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-obsidian text-gray-300 px-6 py-20 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cosmic-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cosmic-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md p-8 glassmorphism rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-mono tracking-widest text-white">
            SYS_REGISTER //
          </h2>
          <p className="text-xs font-mono text-gray-500 mt-2 uppercase tracking-widest">
            Create Administrative Account
          </p>
        </div>

        {message && (
          <p className="text-xs font-mono text-center p-3 rounded-lg border border-green-500/30 bg-green-500/10 text-green-400 mb-6">
            {message}
          </p>
        )}
        {error && (
          <p className="text-xs font-mono text-center p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 mb-6">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs uppercase tracking-wider font-mono text-gray-400">
              Admin Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cosmic-purple transition duration-300 text-sm"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-xs uppercase tracking-wider font-mono text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cosmic-cyan transition duration-300 text-sm"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full font-mono uppercase tracking-widest text-xs py-4 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan text-white font-bold rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition duration-500 hover:scale-[1.01] active:scale-95 disabled:opacity-50"
          >
            {loading ? "PROCESSING..." : "EXEC_REGISTER //"}
          </button>
        </form>

        <p className="text-center text-xs font-mono text-gray-500 mt-8 uppercase tracking-widest">
          Registered?{" "}
          <Link to="/login" className="text-cosmic-cyan hover:text-cosmic-pink transition duration-300 underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;

