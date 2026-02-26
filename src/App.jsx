import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full overflow-hidden">
              <Header />
              <About />
              <Project />
              <Reviews />
              <Contact />
            </div>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;