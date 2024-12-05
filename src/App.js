import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import RequestInfo from "./components/RequestInfo";
import LoginForm from "./components/LoginForm"; // Import LoginForm
import DataPage from "./components/DataPage"; // Import DataPage
import CareerTimeline from "./components/CareerTimeline";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <NavBar />

        <Routes>
          {/* RequestInfo Route */}
          <Route path="/request-info" element={<RequestInfo />} />

          {/* LoginForm Route */}
          <Route path="/login" element={<LoginForm />} />

          {/* DataPage Route */}
          <Route path="/data-page" element={<DataPage />} />

          {/* Main App Content */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <CareerTimeline />
                <Portfolio />
                <Experience />
                <Contact />
                
                <Footer />
                <SocialLinks />
                
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
