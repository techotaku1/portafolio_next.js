// src/app/dashboard/components/DrawerButtons.js
"use client";
import { usePathname } from "next/navigation";
import { Button, Box, Link as MuiLink } from "@mui/material";
import Link from "next/link";

const DrawerButtons = ({ onClose }) => {
  const pathname = usePathname();
  const routes = ["/dashboard/blog", "/dashboard/github", "/dashboard/doc"];

  return (
    <Box 
      sx={{ 
        padding: 2, 
        backgroundColor: "#4a90e2", // Fondo azul
        height: '100%', // Asegura que ocupe toda la altura
        color: 'white' // Texto blanco
      }}
    >
      {routes.map((route, index) => (
        <MuiLink key={index} component={Link} href={route} underline="none" onClick={onClose}>
          <Button
            variant={pathname === route ? "outlined" : "text"}
            sx={{
              color: "common.white", // Texto blanco
              borderColor: "common.white", // Borde blanco
              width: "100%", // Botón de ancho completo
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)", // Efecto hover
              },
              mb: 1, // Margen entre botones
            }}
          >
            {route.split("/").pop().toUpperCase()}
          </Button>
        </MuiLink>
      ))}
    </Box>
  );
};

export default DrawerButtons;
