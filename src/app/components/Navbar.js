// components/Navbar.js
import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div className="container">
      {/* Marca de la navegación */}
      <Link href="/" className="navbar-brand">
        Portfolio
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto d-flex align-items-center">
          <li className="nav-item">
            <Link href="/dashboard/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/dashboard/github" className="nav-link">
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
