import Link from "next/link";
import { Container, Typography, Button, Box } from "@mui/material"; // Añadir Box para simplificar layout
import Avatar from "@mui/material/Avatar"; 

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
      sx={{ width: 140, height: 140 }} // Eliminamos marginRight, ya que se manejará con gap
    />
    
    {/* Usamos Box para controlar el layout interno */}
    <Box sx={{ ml: 2 }}> 
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

      {/* Enlace con botón */}
      <Link href="/hireme" style={{ textDecoration: 'none' }}>
        <Button 
          variant="outlined" 
          color="inherit" 
          sx={{ marginTop: 2, color: "white" }} // Eliminamos color, ya que `inherit` se hereda automáticamente
        >
          Más Proyectos
        </Button>
      </Link>
    </Box>
  </Container>
);

export default ProfileSection;
