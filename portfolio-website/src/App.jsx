import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="text-primary">Hello World!</h1>
      <h2>Header 2</h2>
      <h3>test</h3>
      <h4>test</h4>
    </div>
  );
}

export default App;
