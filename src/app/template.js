"use client";

import { usePathname } from "next/navigation"; // Hook para obtener la ruta actual
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import NavigationEvents from "./components/navigation-events"; // Asegúrate de que la ruta sea correcta
import { Suspense } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Container, Box } from "@mui/material"; // Importar componentes de Material-UI

export default function Template({ children }) {
  const pathname = usePathname(); // Obtenemos la ruta actual

  // Definimos las rutas en las que NO queremos mostrar el footer
  const hideFooterRoutes = ["/dashboard/blog", "/dashboard/github"];

  return (
    <AppRouterCacheProvider>
      {/* Eventos de navegación para manejar la barra de progreso */}
      <Suspense fallback={<p>Cargando eventos de navegación...</p>}>
        <NavigationEvents />
      </Suspense>

      {/* Ajustamos el margen exterior de toda la página */}
      <Navbar />

      {/* Sección principal usando Material-UI */}
      <Box sx={{ mx: 6 }}>
        {" "}
        {/* Ajusta el margen exterior izquierdo y derecho */}
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

      {/* Si la ruta actual no está en las rutas donde queremos ocultar el footer, lo mostramos */}
      {!hideFooterRoutes.includes(pathname) && <Footer />}
    </AppRouterCacheProvider>
  );
}
