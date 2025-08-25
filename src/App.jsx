import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/organisms/Navigation";
import Gallery from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/organisms/Footer";
import Contact from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CarrerPage from "./pages/CarrerPage";

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path="/gallery"  element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  )
};

export default App;
