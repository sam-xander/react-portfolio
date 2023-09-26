import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
