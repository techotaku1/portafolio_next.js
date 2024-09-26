// src/components/Navbar.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#4a90e2" }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Título a la izquierda con margen */}
        <Typography variant="h6" sx={{ color: "#ffffff", ml: 4 }}> {/* Ajusta el margen izquierdo aquí */}
          <Link href="/" style={{ color: "#ffffff", textDecoration: 'none' }}>
            Portfolio
          </Link>
        </Typography>

        {/* Botones a la derecha con margen */}
        <Box sx={{ display: 'flex', gap: 2, mr: 4 }}> {/* Ajusta el margen derecho aquí */}
          <Link href="/dashboard/blog">
            <Button 
              color={pathname === "/dashboard/blog" ? "inherit" : "default"} 
              sx={{ 
                color: "#ffffff", 
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Efecto hover
                }
              }}
            >
              Blog
            </Button>
          </Link>
          <Link href="/dashboard/github">
            <Button 
              color={pathname === "/dashboard/github" ? "inherit" : "default"} 
              sx={{ 
                color: "#ffffff", 
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Efecto hover
                }
              }}
            >
              GitHub
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
