import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Workflow from "./components/Workflow.jsx";
import CaseStudies from "./components/CaseStudies.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Workflow />
      <CaseStudies />
    </>
  );
}

export default App;
