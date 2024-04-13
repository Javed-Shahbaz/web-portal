import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NAV/navbar";
import Home from "./components/Home/Home";
import { About } from "./components/About/About";
import { Admission } from "./components/Admissions/Admission";
import Contact from "./components/Contact/Contact";
import ImageSlider from "./components/slider/slider";

function App() {
  const images = ["./assets/image1.jpg", "./assets/image2.jpg"];
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="admission" element={<Admission />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <ImageSlider images={images} />
    </BrowserRouter>
  );
}

export default App;
