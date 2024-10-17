"use client";
import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import NavigationEvents from "@/app/components/navigation-events";
import { usePathname } from "next/navigation";
import { Container, Box } from "@mui/material";
import { Suspense } from "react";

export default function Template({ children }) {
  const pathname = usePathname();

  // Rutas donde se ocultará el footer y el navbar
  const hideNavbarRoutes = ["/about"]; // Lista de rutas que ocultarán el Navbar
  const hideFooterRoutes = ["/dashboard/blog", "/dashboard/github"];

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline para una base de estilos consistente */}
        <CssBaseline />

        {/* Componente para manejar eventos de navegación */}
        <Suspense fallback={<div>Cargando...</div>}>
          <NavigationEvents />
        </Suspense>

        {/* Barra de navegación */}
        {!hideNavbarRoutes.includes(pathname) && <Navbar />}

        {/* Contenedor principal responsivo */}
        <Box
          sx={{
            p: { xs: 2, sm: 4, md: 6 }, // Padding responsivo
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "background.paper",
              p: { xs: 2, sm: 3 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%", // Asegúrate de que el contenedor ocupe el 100% del ancho
              overflow: "hidden", // Evita el desbordamiento
            }}
          >
            {/* Contenido del componente hijo */}
            <Box sx={{ flex: 1, width: "100%", mb: { xs: 2, sm: 0 } }}>
              {children}
            </Box>
          </Container>
        </Box>

        {/* Condicional para mostrar el Footer */}
        {!hideFooterRoutes.includes(pathname) && <Footer />}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
