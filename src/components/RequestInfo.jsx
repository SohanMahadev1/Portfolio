import React, { useState } from "react";
import axios from "axios";

const RequestInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workType: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/save-data", formData); // API Endpoint
      setMessage(`Data saved successfully with ID: ${response.data.id}`);
    } catch (error) {
      setMessage("Error saving data. Please try again.");
      console.error("Error:", error);
    }

    // Reset form fields
    setFormData({ name: "", email: "", workType: "", description: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center border-b-4 border-gray-500 pb-4">
          Request Info
        </h2>
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          {/* Work Type Input */}
          <div className="mb-4">
            <label htmlFor="workType" className="block text-sm font-medium">
              Type of Work
            </label>
            <input
              type="text"
              id="workType"
              name="workType"
              value={formData.workType}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white font-bold hover:opacity-90 transition-opacity"
          >
            Submit Request
          </button>
        </form>
        {/* Success/Failure Message */}
        {message && <p className="text-green-500 text-center mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default RequestInfo;
