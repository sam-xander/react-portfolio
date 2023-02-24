import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./pages/Hero";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
