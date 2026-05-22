import { useState } from "react";
import "./App.css";

import Patrick from "./components/Patrick.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <h1 className="text-primary">Hello World!</h1>
        <h2>Header 2</h2>
        <h3>test</h3>
        <h4>test</h4>
      </div>
    </>
  );
}

export default App;
