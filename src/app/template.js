"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme"; // Importar el tema oficial
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import NavigationEvents from "@/app/components/navigation-events"; // Asegúrate de que la ruta sea correcta
import { usePathname } from "next/navigation"; // Hook para obtener la ruta actual
import { Suspense } from "react";
import { Container, Box } from "@mui/material"; // Importar componentes de Material-UI

export default function Template({ children }) {
  const pathname = usePathname(); // Obtenemos la ruta actual

  // Definimos las rutas en las que NO queremos mostrar el footer
  const hideFooterRoutes = ["/dashboard/blog", "/dashboard/github"];

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline para establecer estilos básicos consistentes */}
        <CssBaseline />
        
        {/* Eventos de navegación para manejar la barra de progreso */}
        <Suspense fallback={<p>Cargando eventos de navegación...</p>}>
          <NavigationEvents />
        </Suspense>

        {/* Barra de navegación */}
        <Navbar />

        {/* Sección principal usando Material-UI */}
        <Box sx={{ mx: 6 }}>
          <Container
            sx={{
              my: 3,
              p: 3,
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            {children}
          </Container>
        </Box>

        {/* Mostramos el footer solo si la ruta actual no está en las rutas donde queremos ocultarlo */}
        {!hideFooterRoutes.includes(pathname) && <Footer />}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
