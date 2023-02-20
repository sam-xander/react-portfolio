import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route to="/" element={<Hero />} />
        <Route to="/about" element={<About />} />
        <Route to="/work" element={<Work />} />
        <Route to="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
