"use client";

import Image from "next/image"; // Importa el componente Image para manejar imágenes
import Link from "next/link"; // Importa Link para la navegación
import BlogItems from '@/app/components/profile'; // Importa el array de blogItems
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

const Blog = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 4 }}>
      {BlogItems.map((item) => (
        <Box key={item.id} sx={{ maxWidth: 250, mx: 1, mb: 4 }}> {/* Ajusta el tamaño de las columnas */}
          <Card variant="outlined" sx={{ textAlign: 'center' }}> {/* Tarjeta Material-UI */}
            <CardContent>
              <Box sx={{ width: '100px', height: '100px', overflow: 'hidden', margin: '0 auto' }}>
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  width={100} 
                  height={100} 
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Asegura que la imagen cubra el área
                />
              </Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                {item.title}
              </Typography>
              <Link href={item.link} target="_blank" passHref>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Visitar
                </Button> {/* Botón Material-UI */}
              </Link>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default Blog;
