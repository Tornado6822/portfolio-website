function Header() {
  return (
    <header
      className="sticky-top bg-light d-flex align-items-center"
      style={{ height: "var(--navbar-height)" }}
    >
      <div className="container">
        <nav className="navbar justify-content-center">
          <ul className="navbar-nav flex-row gap-4">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
