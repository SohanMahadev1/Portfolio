import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // For error handling

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ej82a7k", // Replace with your EmailJS service ID
        "template_xxxxxx", // Replace with your EmailJS template ID
        e.target,
        "ycMUCkywJEabhdVQC" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setFormSubmitted(true); // Show success message
          setErrorMessage(""); // Clear any previous errors
          e.target.reset(); // Reset the form fields
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setErrorMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            {/* Name Input */}
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            {/* Email Input */}
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            {/* Message Input */}
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Success Message */}
        {formSubmitted && (
          <p className="text-center text-green-500 font-bold mt-4">
            Your message has been sent successfully!
          </p>
        )}

        {/* Error Message */}
        {errorMessage && (
          <p className="text-center text-red-500 font-bold mt-4">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
