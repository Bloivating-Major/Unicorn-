import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/organisms/Navigation";
import Gallery from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/organisms/Footer";
import Contact from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CarrerPage from "./pages/CarrerPage";
import TournamentsPage from "./pages/TournamentsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import { pageVariants } from "./lib/animations";

/* Wrapper that animates on route change */
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/"            element={<HomePage />} />
          <Route path="/gallery"     element={<Gallery />} />
          <Route path="/contact"     element={<Contact />} />
          <Route path="/about"       element={<AboutPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <Navigation />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
