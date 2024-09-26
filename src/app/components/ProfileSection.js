// src/components/ProfileSection.js
import Link from "next/link";
import { Container, Typography, Button } from "@mui/material"; // Importar componentes de Material-UI
import Avatar from "@mui/material/Avatar"; // Importar Avatar para la imagen de perfil

const ProfileSection = () => (
  <Container
    sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#4a90e2',
      color: '#ffffff',
      py: 3,
      mb: 3,
    }}
  >
    <Avatar
      alt="Foto de perfil"
      src="/mi-imagen2.jpg"
      sx={{ width: 140, height: 140, marginRight: 2,  }} // Estilo del Avatar
    />
    <div>
      <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
        Jose David Gonzalez
      </Typography>
      <Typography variant="h6" component="h2">
        Programador FULL STACK
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Soy un apasionado desarrollador con experiencia en tecnologías frontend
        y backend. Me especializo en React, Next.js y Python para crear
        aplicaciones modernas y eficientes.
      </Typography>
      <Link href="/hireme" style={{ textDecoration: 'none' }}>
      <Button variant="outlined" color="inherit" sx={{ color: "white", marginTop: 2 }}>
  Mas Proyectos
</Button>

      </Link>
    </div>
  </Container>
);

export default ProfileSection;
