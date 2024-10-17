'use client'; // Los límites de error deben ser componentes de cliente

import { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Registrar el error en un servicio de reporte de errores
    console.error(error);
  }, [error]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        padding: 3,
      }}
    >
      <Typography variant="h2">¡Algo salió mal!</Typography>
      <Typography variant="body1">{error.message}</Typography>
      <Button
        onClick={reset}
        variant="contained"
        sx={{ marginTop: 2, backgroundColor: '#721c24', color: 'white' }}
      >
        Intenta de nuevo
      </Button>
    </Box>
  );
}
