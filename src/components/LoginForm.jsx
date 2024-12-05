import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login logic
    if (formData.username === "admin" && formData.password === "password123") {
      setMessage("Login successful!");
      setTimeout(() => navigate("/data-page"), 1000); // Redirect to DataPage
    } else {
      setMessage("Invalid username or password.");
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center border-b-4 border-gray-500 pb-4">
        Login
      </h2>
      <form onSubmit={handleSubmit} className="mt-6">
        {/* Username Input */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-bold"
        >
          Login
        </button>
      </form>
      {message && <p className="text-center mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default LoginForm;
