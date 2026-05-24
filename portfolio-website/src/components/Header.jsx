function Header() {
  return (
    <header className="sticky-top d-flex align-items-center custom-navbar">
      <div className="container">
        <nav className="navbar">
          <p className="mb-0 fw-semibold fs-5 text-white">Patrick Morel</p>
          <ul className="navbar-nav flex-row gap-5 ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#work">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#case-studies">
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
