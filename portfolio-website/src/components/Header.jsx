function Header() {
  return (
    <header
      className="sticky-top bg-light d-flex align-items-center"
      style={{ height: "var(--navbar-height)" }}
    >
      <div className="container">
        <nav className="navbar">
          <p>Patrick Morel</p>
          <ul className="navbar-nav flex-row gap-5 ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Case Studies
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
