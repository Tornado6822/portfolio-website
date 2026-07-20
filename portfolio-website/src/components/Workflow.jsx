import {
  FaUserCheck,
  FaPalette,
  FaMousePointer,
  FaChartBar,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "./Workflow.css";

function Workflow() {
  const principles = [
    {
      icon: <FaUserCheck />,
      title: "User-Centered Design",
      description:
        "Designing interfaces around user goals, accessibility, and usability.",
    },
    {
      icon: <FaPalette />,
      title: "Visual Communication",
      description:
        "Using colour, typography, layout, and hierarchy to communicate effectively.",
    },
    {
      icon: <FaMousePointer />,
      title: "Interaction Design",
      description:
        "Creating intuitive workflows through feedback, consistency, and familiar patterns.",
    },
    {
      icon: <FaChartBar />,
      title: "Information Visualization",
      description:
        "Presenting complex information through clear and meaningful visualizations.",
    },
  ];

  const resources = [
    {
      title: "Nielsen Norman Group",
      description:
        "UX research, usability guidelines, and interface design principles.",
      link: "https://www.nngroup.com/",
    },
    {
      title: "uOttawa UI Design Course",
      description:
        "Interface analysis, design principles, and human-computer interaction.",
      link: "https://catalogue.uottawa.ca/en/undergrad/basc-software-engineering/#programrequirementstext",
    },
    {
      title: "Figma",
      description: "Wireframing, prototyping, and interface design workflows.",
      link: "https://www.figma.com/community/portfolio-templates",
    },
  ];

  return (
    <section id="work" className="workflow-section">
      <div className="container">
        {/* Header */}
        <div className="workflow-header">
          <h1>How I work</h1>

          <p>
            I combine UI/UX principles, visual design, and software engineering
            practices to create interfaces that are intuitive, accessible, and
            effective.
          </p>
        </div>

        {/* Principles */}
        <div className="workflow-grid">
          {principles.map((principle) => (
            <div className="principle-card" key={principle.title}>
              <div className="principle-icon">{principle.icon}</div>

              <h3>{principle.title}</h3>

              <p>{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div className="resources-section">
          <h2>Design resources and tools</h2>

          <div className="resources-grid">
            {resources.map((resource) => (
              <a
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                className="resource-card"
                key={resource.title}
              >
                <div>
                  <h3>
                    {resource.title}
                    <FaExternalLinkAlt className="external-icon" />
                  </h3>

                  <p>{resource.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workflow;
