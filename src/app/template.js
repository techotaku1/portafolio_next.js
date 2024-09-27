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

export default function Template({ children }) {
  const pathname = usePathname();
  const hideFooterRoutes = ["/dashboard/blog", "/dashboard/github"];

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <NavigationEvents />
        <Navbar />
        <CssBaseline />
        {/* Box para ajustar padding externo */}
        <Box sx={{ p: 6 }}> {/* Ajusta el valor de p para cambiar el padding externo */}
          <Container
            maxWidth="lg"
            sx={{
              boxShadow: 3, // Ajusta el nivel de sombra
              borderRadius: 2, // Bordes redondeados
              backgroundColor: "background.paper", // Color de fondo según el tema
              p: 3, // Padding interno del contenedor
            }}
          >
            <Box>
              {children}
            </Box>
          </Container>
        </Box>
        {!hideFooterRoutes.includes(pathname) && <Footer />}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
