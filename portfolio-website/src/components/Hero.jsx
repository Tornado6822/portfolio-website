import "./Hero.css";

function Hero() {
  return (
    <div className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* left text */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold display-4">I'm Patrick Morel.</h1>
            <p className="lead mt-3 display-6">
              A software engineering student passionate about building clean and
              modern web applications.
            </p>
          </div>

          {/* right image */}
          <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
            <img
              src="./LinkedIn Headshotp.2.jpg"
              alt="Profile"
              className="profile-pic img-thumbnail img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
