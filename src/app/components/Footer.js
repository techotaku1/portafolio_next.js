"use client";
const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Jose David Gonzalez. Todos los
          derechos reservados.
        </p>
        <p>
          <a href="#" className="text-light">
            Política de Privacidad
          </a>{" "}
          |{" "}
          <a href="#" className="text-light">
            Términos de Servicio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
