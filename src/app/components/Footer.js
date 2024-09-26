// src/app/components/Footer.js
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#4a90e2",
        color: "#ffffff",
        py: 4,
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Jose David Gonzalez. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2">
          <Link href="#" color="inherit" underline="hover">
            Política de Privacidad
          </Link>
          {" | "}
          <Link href="#" color="inherit" underline="hover">
            Términos de Servicio
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
