// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

function Home() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/section" element={<Section />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home1() {
  return (
    <div>
      <h2>Welcome to the Landing Page</h2>
      <p>
        Click <Link to="/section">here</Link> to navigate to the section.
      </p>
    </div>
  );
}

export default Home;
