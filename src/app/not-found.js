// src/app/not-found.js
import Link from 'next/link'; // Importa el componente Link de Next.js

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Página no encontrada</h1>
      <img
        src="/404.jpg" // Ruta a tu imagen 404
        alt="Error 404"
        style={{ maxWidth: '100%', height: 'auto' }} // Estilo para que la imagen sea responsiva
      />
      <p>Lo sentimos, no encontramos la página que estás buscando.</p>
      <Link href="/" passHref>
        <button style={{ padding: '10px 20px', marginTop: '20px' }}>
          Volver al Inicio
        </button>
      </Link>
    </div>
  );
}
