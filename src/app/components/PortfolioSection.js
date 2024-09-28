// components/PortfolioSection.js

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "./profile"; // Importa el arreglo de Profile

const PortfolioSection = () => (
  <Box
    sx={{
      p: 3,
      backgroundColor: "#4a90e2",
      color: "#ffffff",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
      width: '100vw', // Ocupa todo el ancho de la ventana
      maxWidth: '100%', // Asegura que no exceda el 100% del viewport
      mx: 'auto', // Centra el contenido horizontalmente
    }}
  >
    <Typography variant="h4" align="center" gutterBottom>
      Portafolio
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 2, // Espacio entre las tarjetas
      }}
    >
      {portfolio.map(({ title, description, image, repo }, index) => (
        <Box
          key={index}
          sx={{
            border: '2px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: "#fff",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            width: { xs: '100%', sm: '300px' }, // Tamaño responsivo
            display: 'flex',
            flexDirection: 'column',
            height: 'auto', // Ajuste automático de la altura
          }}
        >
          {/* Box para la imagen */}
          <Box sx={{ flexShrink: 0, width: '100%', height: '200px', position: 'relative' }}>
            <Image
              src={image}
              alt={title}
              fill // Utiliza fill en lugar de layout
              style={{
                objectFit: 'contain', // Ajusta la imagen sin recortar
                display: 'block',
              }}
            />
          </Box>

          {/* Box para el contenido con fondo azul */}
          <Box
            sx={{
              p: 2,
              backgroundColor: "#4a90e2", // Fondo azul igual al del contenedor principal
              color: "#ffffff", // Texto en blanco
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1, // Permite que el contenido crezca
              justifyContent: 'space-between', // Alinea el texto y el botón en el mismo nivel
            }}
          >
            <Box>
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {description}
              </Typography>
            </Box>
            <Link href={repo} passHref target="_blank">
              <Button
                variant="outlined"
                sx={{
                  color: "#ffffff", // Texto blanco
                  borderColor: "#ffffff", // Borde blanco
                  "&:hover": {
                    backgroundColor: "#ffffff", // Fondo blanco al hacer hover
                    color: "#4a90e2", // Texto azul al hacer hover
                  },
                }}
              >
                Más Información
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

export default PortfolioSection;
