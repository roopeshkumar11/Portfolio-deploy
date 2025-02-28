import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const AdminRegister= () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const registerUser = async (email, password) => {
    try {
      // Make API call for registration
      const response = await axios.post("http://localhost:4000/api/admin/adminregister", {
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
    setError(""); // Reset errors

    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    const result = await registerUser(email, password);

    if (result.success) {
      setMessage(result.message);
      // Redirect to login or another page after registration success
      window.location.href = "/addminm";
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4">
  Already have an account?{" "}
  <Link to="/login" className="text-blue-600 hover:underline">
    Login here
  </Link>
</p>
      </div>
    </div>
  );
};

export default AdminRegister;
