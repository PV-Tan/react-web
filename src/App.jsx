// App.jsx — Tết 2026 | React + Bootstrap 4.6 + styles.css


import { createRoot } from "react-dom/client";


import "./App.css";  


import FallingPetals from "./components/common/FallingPetals";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CountdownSection from "./components/ThemesSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductsSection from "./components/ProductsSection";
import CtaSection from "./components/CtaSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <FallingPetals />
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <FeaturesSection />
      <CtaSection />
      <ProductsSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
    </>
  );
}


export default App;