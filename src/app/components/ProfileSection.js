import Link from "next/link";
import { Container, Typography, Button, Box } from "@mui/material"; 
import Avatar from "@mui/material/Avatar"; 

const ProfileSection = () => (
  <Container
    sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#4a90e2',
      color: '#ffffff',
      py: 3,
      gap: 2,
    }}
  >
    <Avatar
      alt="Foto de perfil"
      src="/mi-imagen2.jpg"
      sx={{ width: 140, height: 140 }}
    />
    
    <Box>
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

      <Link href="/hireme" style={{ textDecoration: 'none' }}>
        <Button 
          variant="outlined" 
          sx={{ marginTop: 2, color: "white" }}
        >
          Más Proyectos
        </Button>
      </Link>
    </Box>
  </Container>
);

export default ProfileSection;
