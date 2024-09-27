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
        <CssBaseline />
        <NavigationEvents />
        <Navbar />

        <Box
          sx={{
            p: { xs: 2, sm: 4, md: 6 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "background.paper",
              p: { xs: 2, sm: 3 }, // Ajuste responsivo del padding
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box sx={{ flex: 1, width: '100%', mb: { xs: 2, sm: 0 } }}>
              {children}
            </Box>
          </Container>
        </Box>
        
        {!hideFooterRoutes.includes(pathname) && <Footer />}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
} 
