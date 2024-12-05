import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // For scrolling links
import { Link as RouterLink, useLocation } from "react-router-dom"; // For routing links
import LoginForm from "./LoginForm"; // Import the LoginForm component

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // State for toggling LoginForm
  const location = useLocation(); // Get the current route

  const links = [
    {
      id: 1,
      link: "home",
      type: "scroll",
    },
    {
      id: 2,
      link: "about",
      type: "scroll",
    },
    {
      id: 4,
      link: "portfolio",
      type: "scroll",
    },
    {
      id: 5,
      link: "experience",
      type: "scroll",
    },
    {
      id: 6,
      link: "contact",
      type: "scroll",
    },
    {
      id: 7,
      link: "Request-info",
      type: "route",
    },
    {
      id: 7,
      link:"timeline",
      type:"scroll",
    },
  ];

  const handleNavigation = (link, type) => {
    if (type === "scroll") {
      if (location.pathname !== "/") {
        // Navigate to the home page first
        window.location.href = `/#${link}`; // Use hash-based navigation to scroll
      } else {
        // Scroll directly if already on the home page
        setNav(false);
      }
    }
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      {/* Logo as a button to toggle LoginForm */}
      <button
        className="text-5xl font-signature ml-2 hover:opacity-90 transition-opacity"
        onClick={() => setShowLogin(!showLogin)}
      >
        Sohan Mahadev
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {links.map(({ id, link, type }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            {type === "scroll" ? (
              <ScrollLink
                to={link}
                smooth
                duration={500}
                onClick={() => handleNavigation(link, type)}
              >
                {link}
              </ScrollLink>
            ) : (
              <RouterLink to={link}>{link}</RouterLink>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, type }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {type === "scroll" ? (
                <ScrollLink
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => handleNavigation(link, type)}
                >
                  {link}
                </ScrollLink>
              ) : (
                <RouterLink to={link} onClick={() => setNav(false)}>
                  {link}
                </RouterLink>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Show LoginForm as a modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-gray-800 rounded-lg shadow-lg w-full max-w-sm p-6">
            <button
              className="absolute top-2 right-2 text-white text-lg"
              onClick={() => setShowLogin(false)}
            >
              ✕
            </button>
            <LoginForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
