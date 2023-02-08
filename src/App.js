import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact to="/" element={<Hero />} />
        <Route to="/about" element={<About />} />
        <Route to="/work" element={<Work />} />
        <Route to="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
