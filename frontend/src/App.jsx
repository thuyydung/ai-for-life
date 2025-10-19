import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";

// Import các trang
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-inner">
            <div className="navbar-logo">
              <img src={logo} alt="Logo" className="logo-img" />
              <span className="logo-text">Sign Language AI</span>
            </div>
            <ul className="navbar-links">
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/dictionary">Từ điển ký hiệu</Link></li>
              <li><Link to="/about">Giới thiệu</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
            </ul>
          </div>
        </nav>

        {/* Nội dung thay đổi theo route */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
