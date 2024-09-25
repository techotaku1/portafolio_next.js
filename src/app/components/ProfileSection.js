import Image from "next/image";
import Link from "next/link";

const ProfileSection = () => (
  <div
    className="container d-flex align-items-center text-white py-3 mb-3"
    style={{ backgroundColor: "#4a90e2", color: "#ffffff" }} // Color de fondo y texto
  >
    <Image
      src="/mi-imagen2.jpg"
      alt="Foto de perfil"
      width={140}
      height={140}
      className="me-4 rounded"
      priority
    />
    <div>
      <h1 className="h3 mb-1 fw-bold">Jose David Gonzalez</h1>
      <h2 className="h5">Programador FULL STACK</h2>
      <p className="mt-3">
        Soy un apasionado desarrollador con experiencia en tecnologías frontend
        y backend. Me especializo en React, Next.js y Python para crear
        aplicaciones modernas y eficientes.
      </p>
      <Link href="/hireme" className="btn btn-outline-light mb-3">
        Contratarme
      </Link>
    </div>
  </div>
);

export default ProfileSection;
