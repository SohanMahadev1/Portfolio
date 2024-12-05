import React, { useState } from "react";
import api from "../assets/portfolio/project-1.jpg";
import apod from "../assets/portfolio/project-2.png";
import three from "../assets/portfolio/project-3.jpg";
import four from "../assets/portfolio/project-4.png";
import five from "../assets/portfolio/project-5.png";
import six from "../assets/portfolio/project-6.png";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolios = [
    {
      id: 1,
      src: api,
      title: "Real Estate Management System",
      description: "A brief overview of the project.",
      longDescription:
        "This system provides a comprehensive solution for managing real estate properties. It includes features such as property listings, client management, and transaction tracking, built using Java and modern web technologies.",
      images: [api, apod, three],
      repo: "https://github.com/itmd4515/itmd4515-s24-lab2-SohanMahadev1/tree/master/smahadev1-lab2",
    },
    {
      id: 2,
      src: apod,
      title: "Automation and Secrets Management with Vagrant",
      description: "An introduction to Linux automation.",
      longDescription:
        "This project focuses on the automation of Linux-based environments using Vagrant. It covers concepts such as secrets management, provisioning, and infrastructure as code, providing a seamless developer experience.",
      images: [apod, api, four],
      repo: "https://github.com/HarshithDR/SmartPhotos",
    },
    {
      id: 3,
      src: three,
      title: "Hybrid Urban Energy Project Production",
      description: "Energy innovation for urban areas.",
      longDescription:
        "This project explores innovative solutions for urban energy production and management. It involves integrating renewable energy sources, optimizing power distribution, and reducing energy wastage.",
      images: [three, five, six],
      repo: "https://github.com/HarshithDR/Presently",
    },

    
      {
        id: 4,
        src: four,
        title: "Recipe Management System (JavaFX)",
        description: "A JavaFX application designed to assist with cooking and recipe management.",
        longDescription:
          "This Recipe Management System is built using JavaFX to simplify the process of organizing and accessing recipes. Users can add, edit, and delete recipes, along with categorizing them by cuisine or meal type. The intuitive UI ensures easy navigation, while features like ingredient lists, cooking instructions, and serving suggestions make it a must-have for home cooks and culinary enthusiasts. The project emphasizes design patterns and a user-centric approach.",
        images: [four, apod, api],
      },
      {
        id: 5,
        src: five,
        title: "Hybrid Application for Connecting Farmers",
        description: "An AI-powered platform to bridge the gap between farmers and technology.",
        longDescription:
          "This hybrid application leverages artificial intelligence to connect farmers with markets, suppliers, and agricultural experts. It provides features like real-time weather updates, crop management tips, and a marketplace for buying and selling produce. By bridging the technological gap, this app aims to empower farmers and boost agricultural productivity. The project focuses on rural accessibility, scalability, and user-friendly design.",
        images: [five, six, three],
      },
      {
        id: 6,
        src: six,
        title: "Bus Booking Management System",
        description: "A web application for bus ticket booking and management.",
        longDescription:
          "The Bus Booking Management System is a comprehensive web-based solution for managing bus reservations. Users can search for buses, view seat availability, and book tickets online. Admin features include route and schedule management, along with real-time ticket tracking. This project ensures a seamless experience for passengers and operators, focusing on security, scalability, and performance.",
        images: [six, apod, four],
      },
      
  ];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Projects
          </h2>
          <p className="py-6 text-gray-300">Explore some of my work below:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(
            ({ id, src, title, description, longDescription, images, repo }) => (
              <div
                key={id}
                className="bg-gray-900 shadow-lg shadow-gray-600 rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt={title}
                  className="w-full h-48 object-cover duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-200">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">{description}</p>
                  <div className="flex justify-between mt-4">
                    {/* Read More Button */}
                    <button
                      onClick={() =>
                        openModal({ title, longDescription, images })
                      }
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium rounded-md"
                    >
                      Read More
                    </button>

                    {/* GitHub Button */}
                    <button
                      onClick={() => window.open(repo, "_blank")}
                      className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white text-sm font-medium rounded-md"
                    >
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-lg"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
            <div className="grid grid-cols-3 gap-2">
              {selectedProject.images.map((img, index) => (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img
                  key={index}
                  src={img}
                  alt={`Project Image ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
