import { Box, Card, CardContent, Typography, Button, CardMedia } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const PortfolioSection = ({ portfolio }) => (
  <Box 
    sx={{ 
      p: 3, 
      backgroundColor: "#4a90e2", 
      color: "#ffffff", 
    }}
  >
    <Typography variant="h4" align="center" gutterBottom>
      Portafolio
    </Typography>

    {/* Box para manejar el diseño flex */}
    <Box 
      display="flex" 
      flexWrap="wrap" // Permite que los elementos se envuelvan a la siguiente fila
      justifyContent="center" // Centra los elementos
      gap={3} // Espacio entre los elementos
      sx={{ 
        p: 2, // Espacio alrededor de los elementos flex
        mx: -2 // Negar el padding horizontal para que no afecte el ancho total
      }}
    >
      {portfolio.map((project, index) => (
        <Box key={index} sx={{ width: { xs: '100%', sm: '48%', md: '30%' } }}>
          <Card sx={{ width: '100%', height: '100%' }}>
            {/* CardMedia para manejar la imagen */}
            <CardMedia sx={{ height: 200, position: "relative" }}>
              <Image
                src={project.image}
                alt={project.title}
                fill // Cambiado a fill
                style={{ objectFit: 'cover' }} // Cambiado a style
                priority
                sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2">{project.description}</Typography>
              <Link href="#" passHref>
                <Button variant="outlined" sx={{ mt: 2 }}>
                  Más Información
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  </Box>
);

export default PortfolioSection;