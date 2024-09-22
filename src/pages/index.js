// pages/index.js
import Image from "next/image"; // Importa el componente de Next.js para manejar imágenes
import Link from "next/link";

const Home = () => (
  <header className="bg-dark text-white py-4 px-3 mb-4">
    {/* Añade un contenedor para agregar márgenes laterales */}
    <div className="container d-flex align-items-center">
      <Image
        src="/mi-imagen.jpeg" // Asegúrate de tener esta imagen en la carpeta public/images
        alt="Foto de perfil"
        width={180}
        height={180}
        className="me-4" // Margen derecho para separar la imagen del texto
        style={{ objectFit: "cover", borderRadius: "8px" }} // Ajuste de estilo para imagen cuadrada
      />
      <div>
        <h1 className="h3 mb-1">José David González</h1>
        <h2 className="h5">Ingeniero en Software y Programador</h2>
        <p className="mt-2">
          Soy un apasionado desarrollador con experiencia en tecnologías
          frontend y backend. Me especializo en React, Next.js y Python para
          crear aplicaciones modernas y eficientes.
          {/* enlace Hire Me */}
          <Link href="/hireme" className="btn btn-outline-light">
            Contratarme
          </Link>
        </p>
      </div>
    </div>
  </header>
);

export default Home;
