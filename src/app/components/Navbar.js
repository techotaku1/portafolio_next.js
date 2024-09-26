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
        <Typography variant="h6" sx={{ color: "common.white", ml: 4 }}>
          <MuiLink component={Link} href="/" underline="none" color="inherit">
            Portfolio
          </MuiLink>
        </Typography>

        {/* Botones de navegación a la derecha */}
        <Box sx={{ display: "flex", gap: 2, mr: 4 }}>
          <MuiLink component={Link} href="/dashboard/blog" underline="none">
            <Button
              variant={pathname === "/dashboard/blog" ? "outlined" : "text"}
              sx={{
                color: "common.white",
                borderColor: "common.white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)", // Efecto hover
                },
              }}
            >
              Blog
            </Button>
          </MuiLink>

          <MuiLink component={Link} href="/dashboard/github" underline="none">
            <Button
              variant={pathname === "/dashboard/github" ? "outlined" : "text"}
              sx={{
                color: "common.white",
                borderColor: "common.white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)", // Efecto hover
                },
              }}
            >
              GitHub
            </Button>
          </MuiLink>

          {/* Nuevo botón DOC */}
          <MuiLink component={Link} href="/dashboard/doc" underline="none">
            <Button
              variant={pathname === "/dashboard/doc" ? "outlined" : "text"}
              sx={{
                color: "common.white",
                borderColor: "common.white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)", // Efecto hover
                },
              }}
            >
              DOC
            </Button>
          </MuiLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
