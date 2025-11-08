import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonails from "./components/Testimonails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="w-full overflow-hidden">
        <ToastContainer />
        <Routes>
          {/* 🏠 Default route (main website sections) */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Testimonails />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* 🔐 Login route */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
