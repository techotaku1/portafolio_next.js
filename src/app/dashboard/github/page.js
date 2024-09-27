'use client';
import React, { useEffect, useState } from 'react';
import Loading from './loading'; // Importa el componente de carga
import { Box, Card, CardHeader, CardContent, Typography, Button, Avatar } from '@mui/material';

export default function GitHub() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.github.com/users/techotaku1");

        // Verifica si la respuesta fue exitosa
        if (!res.ok) {
          throw new Error('Error al obtener los datos de GitHub');
        }

        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />; // Usa el componente de carga mientras se obtienen los datos
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="container" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card variant="outlined" sx={{ maxWidth: 600, textAlign: 'center' }}>
        <CardHeader
          title="Mi GitHub"
          sx={{
            backgroundColor: '#4a90e2',
            color: 'white',
          }}
        />
        <CardContent>
          {profile && (
            <Box>
              <Avatar
                src={profile.avatar_url}
                alt={profile.name}
                sx={{
                  width: 150,
                  height: 150,
                  margin: '0 auto',
                  border: '3px solid #4a90e2',
                }}
              />
              <Typography variant="h5" sx={{ mt: 2 }}>
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profile.bio || "No hay biografía disponible"}
              </Typography>
              <Typography variant="body2">
                <strong>Ubicación:</strong> {profile.location || "No especificada"}
              </Typography>
              <Typography variant="body2">
                <strong>Repositorios públicos:</strong> {profile.public_repos}
              </Typography>
              <Typography variant="body2">
                <strong>Seguidores:</strong> {profile.followers}
              </Typography>
              <Typography variant="body2">
                <strong>Siguiendo:</strong> {profile.following}
              </Typography>
              <Button
                variant="contained"
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 3,
                  backgroundColor: '#4a90e2',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#3a7cbe',
                  },
                }}
                aria-label={`Visitar perfil de GitHub de ${profile.name}`} // Mejora de accesibilidad
              >
                Visitar mi perfil en GitHub
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
