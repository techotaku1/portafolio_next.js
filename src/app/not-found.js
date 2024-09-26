// src/app/not-found.js
import Link from 'next/link'; // Importa el componente Link de Next.js
import Image from 'next/image'; // Importa el componente Image de Next.js
import { Box, Typography, Button } from '@mui/material'; // Importa componentes de Material-UI

export default function NotFound() {
  return (
    <Box sx={{ textAlign: 'center', padding: '50px' }}>
      <Typography variant="h1">404 - Página no encontrada</Typography>
      <Image
        src="/404.jpg" // Ruta a tu imagen 404
        alt="Error 404"
        width={500} // Especifica el ancho de la imagen
        height={300} // Especifica la altura de la imagen
        style={{ minWidth: '70%', height: 'auto' }} // Estilo para que la imagen sea responsiva
        priority // Este atributo es útil si la imagen es importante para el contenido
      />
      <Typography variant="body1" sx={{ marginTop: '20px' }}>
        Lo sentimos, no encontramos la página que estás buscando.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
          Volver al Inicio
        </Button>
      </Link>
    </Box>
  );
}
