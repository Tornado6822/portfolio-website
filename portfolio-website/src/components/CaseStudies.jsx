import "./CaseStudies.css";

function CaseStudies({ setShowPlaceholder }) {
  return (
    <section id="case-studies" className="d-flex justify-content-center py-5">
      <div className="container">
        <h1 className="pt-5">Case Studies</h1>
        <div className="row align-items-center mt-3">
          <div className="col-6 col-md-3 d-flex justify-content-center">
            <div className="card" onClick={() => setShowPlaceholder(true)}>
              <div className="img-wrapper">
                <img
                  src="./bikeRepairService.webp"
                  alt="Bike Repair Service"
                  className=""
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Bike Repair</h5>
                <p className="card-description">Service Site Design</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center">
            <div className="card" onClick={() => setShowPlaceholder(true)}>
              <div className="img-wrapper card">
                <img
                  src="./memoryGameThumbnail.webp"
                  alt="Memory game"
                  className="card-img-top"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Memory Game</h5>
                <p className="card-description">UI Interaction</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center">
            <div className="card" onClick={() => setShowPlaceholder(true)}>
              <div className="img-wrapper">
                <img
                  src="eCommerceThumbnail.webp"
                  alt="E-commerce"
                  className=""
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">E-Commerce Site</h5>
                <p className="card-description">UX Flow</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center">
            <div className="card" onClick={() => setShowPlaceholder(true)}>
              <div className="img-wrapper">
                <img
                  src="visualizationThumbnail.webp"
                  alt="Analytics"
                  className=""
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Analytics Site</h5>
                <p className="card-description">Data Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
