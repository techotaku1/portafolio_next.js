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
        <Typography variant="body2" sx={{ mt: 1 }}>
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 0.5 }}>
            Política de Privacidad
          </Link>
          {" | "}
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 0.5 }}>
            Términos de Servicio
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;