// src/app/not-found.js
import Link from 'next/link'; // Importa el componente Link de Next.js
import Image from 'next/image'; // Importa el componente Image de Next.js

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Página no encontrada</h1>
      <Image
        src="/404.jpg" // Ruta a tu imagen 404
        alt="Error 404"
        width={500} // Especifica el ancho de la imagen
        height={300} // Especifica la altura de la imagen
        style={{ minWidth: '70%', height: 'auto' }} // Estilo para que la imagen sea responsiva
        priority // Este atributo es útil si la imagen es importante para el contenido
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
