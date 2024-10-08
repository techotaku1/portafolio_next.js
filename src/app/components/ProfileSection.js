"use client";
import Link from "next/link";
import { Container, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
// Importa los iconos que necesitas
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ProfileSection = () => (
  <Container
    sx={{
      backgroundColor: "#4a90e2",
      color: "#ffffff",
      py: 3,
      px: { xs: 2, sm: 3, md: 6 },
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-start" },
        gap: 3,
      }}
    >
      {/* Avatar usando next/image */}
      <Box
        sx={{
          position: "relative",
          width: { xs: 140, md: 180 },
          height: { xs: 140, md: 180 },
          borderRadius: "50%",
          overflow: "hidden",
          marginBottom: { xs: 2, md: 0 },
          flexShrink: 0,
        }}
      >
        <Image
          alt="Foto de perfil"
          src="/mi-imagen2.webp" // Asegúrate de que esta imagen esté en formato WebP
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          loading="lazy"
          style={{ objectFit: "cover" }} // Asegúrate de que la imagen cubra el contenedor
        />
      </Box>

      {/* Contenedor de texto */}
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
          maxWidth: { xs: "100%", md: "70%" },
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{ fontWeight: "bold", mb: 1 }}
        >
          Jose David Gonzalez
        </Typography>
        <Typography variant="h6" component="h2">
          Programador FULL STACK
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Soy un apasionado desarrollador con experiencia en tecnologías
          frontend y backend. Me especializo en React, Next.js y Python con
          FastAPI para crear aplicaciones modernas y eficientes.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          También tengo experiencia en edición de video utilizando CapCut y en
          la creación de presentaciones con Canva.
        </Typography>

        {/* Contenedor para el botón y los iconos */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ xs: "center", md: "flex-start" }}
          sx={{ mt: 2 }}
        >
          {/* Botón de CONTACTAME */}
          <Link
            href="https://docs.google.com/document/d/1kqRV43yV2ZLz0HdBHo_6All556IK-GgFYC-8wb4WUcU/edit?usp=sharing"
            passHref
            target="_blank"
          >
            <Button
              variant="outlined"
              sx={{
                color: "white", // Texto blanco
                borderColor: "white", // Borde blanco
                "&:hover": {
                  backgroundColor: "#ffffff", // Fondo blanco al hacer hover
                  color: "#4a90e2", // Texto azul al hacer hover
                  borderColor: "#4a90e2", // Cambiar el borde a azul al hacer hover
                },
              }}
              // Abre en una nueva pestaña
              rel="noopener noreferrer" // Mejora la seguridad
            >
              CONTACTAME
            </Button>
          </Link>

          {/* Iconos de contacto */}
          <Box sx={{ display: "flex", gap: 2, ml: 2 }}>
            <Link
              href="https://wa.me/573225727602"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon sx={{ color: "white", cursor: "pointer" }} />
            </Link>
            <Link
              href="tel:+573241149554"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneIcon sx={{ color: "white", cursor: "pointer" }} />
            </Link>
            <Link
              href="mailto:jsdg1818@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon sx={{ color: "white", cursor: "pointer" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  </Container>
);

export default ProfileSection;
