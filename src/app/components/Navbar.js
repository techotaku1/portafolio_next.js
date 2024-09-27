"use client";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Link as MuiLink,
} from "@mui/material"; // Usamos el Link de Material-UI
import Link from "next/link"; // Solo para navegación con Next.js

const Navbar = () => {
  const pathname = usePathname();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#4a90e2" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Título a la izquierda */}
        <Typography variant="h6" sx={{ color: "common.white", ml: 7 }}>
          <MuiLink component={Link} href="/" underline="none" color="inherit">
            Portfolio
          </MuiLink>
        </Typography>

        {/* Botones de navegación a la derecha */}
        <Box sx={{ display: "flex", gap: 2, mr: 7 }}>
          {["/dashboard/blog", "/dashboard/github", "/dashboard/doc"].map((route, index) => (
            <MuiLink key={index} component={Link} href={route} underline="none">
              <Button
                variant={pathname === route ? "outlined" : "text"}
                sx={{
                  color: "common.white",
                  borderColor: "common.white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // Efecto hover
                  },
                  mx: 1, // Margen horizontal para espaciado uniforme
                }}
              >
                {route.split("/").pop().toUpperCase()} {/* Nombre del botón dinámico */}
              </Button>
            </MuiLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
