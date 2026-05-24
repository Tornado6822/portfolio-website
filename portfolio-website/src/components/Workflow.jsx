function Workflow() {
  return (
    <section
      id="work"
      className="py-4"
      style={{
        backgroundColor: "var(--bg-card)",
      }}
    >
      <div className="container mt-4">
        <h1>How I work</h1>

        <p>
          I am currently learning UI and UX design as part of a design course.
          Through this course, I am developing skills in creating user-friendly
          and visually effective interfaces while learning the core principles
          of good design.
        </p>
        <div className="row">
          <div className="col-6">
            <h4 className="mt-3">
              So far, I have been learning concepts such as:
            </h4>
            <ul>
              <li>UI vs UX</li>
              <li>Scale</li>
              <li>Visual Hierarchy</li>
              <li>Balance/Contrast</li>
              <li>Gestalt Principles</li>
              <li>Colour/Typography</li>
            </ul>
          </div>
          <div className="col-6">
            <h4 className="mt-3">Learning Tools:</h4>
            <ul>
              <li>
                <a href="https://www.nngroup.com/">
                  Nielsen Norman Group (NN/G)
                </a>
              </li>
              <li>
                <a href="https://catalogue.uottawa.ca/en/undergrad/basc-software-engineering/#programrequirementstext">
                  UOttawa - Analysis and Design of User Interfaces
                </a>
              </li>
              <li>
                <a href="https://www.figma.com/community/portfolio-templates?resource_type=files&editor_type=figma">
                  Figma
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workflow;
