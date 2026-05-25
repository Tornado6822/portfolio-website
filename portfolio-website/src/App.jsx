import { useState } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Workflow from "./components/Workflow.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <Home />;
}

export default App;
