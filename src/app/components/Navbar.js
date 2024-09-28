// Navbar.js
"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Importa el icono del menú
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importar usePathname
import { useMediaQuery } from "@mui/material"; // Importar useMediaQuery

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname(); // Obtener el pathname aquí
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md")); // Determinar si es pantalla grande

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' && 
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const routes = ["/dashboard/blog", "/dashboard/github", "/dashboard/doc"];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#4a90e2" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "common.white", ml: 1 }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Portfolio
          </Link>
        </Typography>

        {/* Mostrar botones de navegación si es una pantalla grande */}
        {isLargeScreen ? (
          <Box sx={{ display: 'flex' }}>
            {routes.map((route, index) => (
              <Link key={index} href={route} style={{ textDecoration: 'none' }}>
                <Button
                  variant={pathname === route ? "outlined" : "text"}
                  sx={{
                    color: "common.white",
                    borderColor: "common.white",
                    mx: 1, // Margen horizontal
                  }}
                >
                  {route.split("/").pop().toUpperCase()}
                </Button>
              </Link>
            ))}
          </Box>
        ) : (
          // IconButton para el menú en dispositivos móviles
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Drawer para mostrar las opciones de navegación */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)} // Se cierra al hacer clic fuera del Drawer
        >
          <Box 
            sx={{ 
              padding: 2, 
              backgroundColor: "#4a90e2", // Fondo azul
              height: '100%', // Asegura que ocupe toda la altura
              color: 'white' // Texto blanco
            }}
          >
            {routes.map((route, index) => (
              <Link key={index} href={route} style={{ textDecoration: 'none' }} onClick={toggleDrawer(false)}>
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
              </Link>
            ))}
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
