import "./CaseStudies.css";

function CaseStudies() {
  return (
    <section className="d-flex justify-content-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-3 d-flex justify-content-center">
            <div className="img-wrapper">
              <img
                src="./bikeRepairService.webp"
                alt="Bike Repair Service"
                className=""
              />
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center">
            <div className="img-wrapper">
              <img
                src="./memoryGameThumbnail.webp"
                alt="Memory game"
                className=""
              />
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center">
            <div className="img-wrapper">
              <img
                src="eCommerceThumbnail.webp"
                alt="E-commerce"
                className=""
              />
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center">
            <div className="img-wrapper">
              <img
                src="visualizationThumbnail.webp"
                alt="Analytics"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
