'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

// Cargar la fuente Roboto desde Google Fonts
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Crear el tema personalizado de Material-UI
const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa', // Color personalizado para alertas con severidad 'informacion'
          }),
        }),
      },
    },
  },
});

export default theme;
