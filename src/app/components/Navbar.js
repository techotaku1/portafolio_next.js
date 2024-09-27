"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Importa el icono del menú
import Link from "next/link";
import DrawerButtons from "../dashboard/page"; // Importa el nuevo componente

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' && 
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#4a90e2" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "common.white", ml: 1 }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Portfolio
          </Link>
        </Typography>

        {/* IconButton para el menú en dispositivos móviles */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer para mostrar las opciones de navegación */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)} // Se cierra al hacer clic fuera del Drawer
        >
          {/* Usar el componente DrawerButtons aquí */}
          <DrawerButtons onClose={toggleDrawer(false)} />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
