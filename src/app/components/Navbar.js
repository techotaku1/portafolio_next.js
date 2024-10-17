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
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md")); // Determina si la pantalla es grande

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' && 
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Aquí defines tus rutas, similar a tu componente Links
  const routes = [
    { path: "/", label: "Home" },
<<<<<<< HEAD
=======
    { path: "/about", label: "About" },
>>>>>>> 8e6509118511dbaf17daa43a5d0d1cd482e26ab9
    { path: "/dashboard/blog", label: "BLOG" },
    { path: "/dashboard/github", label: "GITHUB" },
    { path: "/dashboard/doc", label: "DOC" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#4a90e2" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{ 
            color: "common.white", 
            ml: isLargeScreen ? 4 : 0, // Aplica margen solo en pantallas grandes
          }}
        >
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit'}}>
            Portfolio
          </Link>
        </Typography>

        {isLargeScreen ? (
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box sx={{ display: 'flex', ml: 'auto', mr: 1 }}>
              {routes.map((route, index) => (
                <Link key={index} href={route.path} style={{ textDecoration: 'none' }}>
                  <Button
                    variant={pathname === route.path ? "outlined" : "text"}
                    sx={{
                      color: "common.white",
                      borderColor: "common.white",
                      mx: 1,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)", // Fondo blanco con opacidad al pasar el mouse
                      },
                    }}
                  >
                    {route.label}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>
        ) : (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Box 
            sx={{ 
              padding: 2, 
              backgroundColor: "#4a90e2",
              height: '100%', 
              color: 'white' 
            }}
          >
            {routes.map((route, index) => (
              <Link key={index} href={route.path} style={{ textDecoration: 'none' }} onClick={toggleDrawer(false)}>
                <Button
                  variant={pathname === route.path ? "outlined" : "text"}
                  sx={{
                    color: "common.white", 
                    borderColor: "common.white", 
                    width: "100%", 
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)", 
                    },
                    mb: 1, 
                  }}
                >
                  {route.label}
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
