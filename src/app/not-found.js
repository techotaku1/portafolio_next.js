// src/app/not-found.js
import Link from 'next/link'; // Importa el componente Link de Next.js
import Image from 'next/image'; // Importa el componente Image de Next.js
import { Box, Typography, Button, Container } from '@mui/material'; // Importa componentes de Material-UI

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', paddingY: 8 }}>
      <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 4 }}>
        404 - Página no encontrada
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Image
          src="/404.jpg" // Ruta a tu imagen 404
          alt="Error 404 - Página no encontrada"
          width={500}
          height={300}
          style={{ width: '100%', height: 'auto', maxWidth: '500px' }} // Responsividad mejorada
          priority // Prioridad de carga
        />
      </Box>
      
      <Typography variant="body1" sx={{ mb: 4 }}>
        Lo sentimos, no encontramos la página que estás buscando.
      </Typography>
      
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Volver al Inicio
        </Button>
      </Link>
    </Container>
  );
}
