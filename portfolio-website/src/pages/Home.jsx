import { useState } from "react";

import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Workflow from "../components/Workflow.jsx";
import CaseStudies from "../components/CaseStudies.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  if (showPlaceholder) {
    return (
      <div className="container text-center py-5">
        <h1 className="fw-bold">🚧 Coming Soon</h1>
        <p className="lead mt-3">
          This project page is currently under construction.
        </p>

        <button
          className="btn btn-primary mt-4"
          onClick={() => setShowPlaceholder(false)}
        >
          ← Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Hero />
      <Workflow />
      <CaseStudies setShowPlaceholder={setShowPlaceholder} />
      <Footer />
    </>
  );
}

export default Home;
