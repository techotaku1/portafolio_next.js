import Link from "next/link";
import { Container, Typography, Button, Box, Avatar } from "@mui/material"; 

const ProfileSection = () => (
  <Container
    sx={{
      backgroundColor: '#4a90e2',
      color: '#ffffff',
      py: 3,
      px: { xs: 2, sm: 3, md: 6 }, // Padding ajustable según el tamaño de la pantalla
    }}
  >
    {/* Uso de Box para hacer disposición flex y responsiva */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Apilado en pantallas pequeñas y en fila en pantallas grandes
        alignItems: 'center',
        gap: 3, // Espaciado entre avatar y texto
      }}
    >
      {/* Avatar */}
      <Avatar
        alt="Foto de perfil"
        src="/mi-imagen2.jpg"
        sx={{
          width: { xs: 100, md: 140 }, // Tamaño del avatar ajustable
          height: { xs: 100, md: 140 },
          marginBottom: { xs: 2, md: 0 }, // Espacio en pantallas pequeñas
        }}
      />

      {/* Contenedor de texto */}
      <Box
        sx={{
          textAlign: { xs: 'center', md: 'left' }, // Centrar en pantallas pequeñas
          maxWidth: { xs: '100%', md: '70%' }, // Ajustar ancho en pantallas grandes
        }}
      >
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Jose David Gonzalez
        </Typography>
        <Typography variant="h6" component="h2">
          Programador FULL STACK
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Soy un apasionado desarrollador con experiencia en tecnologías frontend
          y backend. Me especializo en React, Next.js y Python con FastAPI para crear
          aplicaciones modernas y eficientes.
        </Typography>

        {/* Botón de Más Proyectos */}
        <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
          <Link href="/hireme" style={{ textDecoration: 'none' }}>
            <Button 
              variant="outlined" 
              sx={{ marginTop: 2, color: "white", borderColor: "white" }}
            >
              Más Proyectos
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  </Container>
);

export default ProfileSection;
