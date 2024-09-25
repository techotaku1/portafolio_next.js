"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="navbar navbar-expand-lg mb-3"
      style={{ backgroundColor: "#4a90e2", color: "#ffffff" }} // Color de fondo y texto
    >
      <div className="container">
        {/* Título o marca del portfolio */}
        <Link href="/" className="navbar-brand" style={{ color: "#ffffff" }}>
          Portfolio
        </Link>

        {/* Botón para colapsar el menú en pantallas pequeñas */}
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

        {/* Links de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <Link
                href="/dashboard/blog"
                className={`nav-link ${
                  pathname === "/dashboard/blog" ? "active" : ""
                }`}
                style={{ color: "#ffffff" }} // Color del texto en el link
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/dashboard/github"
                className={`nav-link ${
                  pathname === "/dashboard/github" ? "active" : ""
                }`}
                style={{ color: "#ffffff" }} // Color del texto en el link
              >
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
