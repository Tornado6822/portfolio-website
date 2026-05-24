import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Workflow from "./components/Workflow.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Workflow />
      <CaseStudies />
      <Footer />
    </>
  );
}

export default App;
