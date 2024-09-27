import Link from "next/link";
import { Container, Typography, Button, Box } from "@mui/material";
import Image from "next/image";

const ProfileSection = () => (
  <Container
    sx={{
      backgroundColor: '#4a90e2',
      color: '#ffffff',
      py: 3,
      px: { xs: 2, sm: 3, md: 6 }, // Padding ajustable según el tamaño de la pantalla
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Sombra agregada
        borderRadius: '10px', // Opcional: para redondear ligeramente los bordes del contenedor principal
    }}
  >
    {/* Uso de Box para hacer disposición flex y responsiva */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Apilado en pantallas pequeñas y en fila en pantallas grandes
        alignItems: 'center', // Alineación vertical de los elementos
        justifyContent: { xs: 'center', md: 'flex-start' }, // Alineación horizontal
        gap: 3, // Espaciado entre avatar y texto
      }}
    >
      {/* Avatar usando next/image */}
      <Box
        sx={{
          width: { xs: 140, md: 180 }, // Incrementa el tamaño del avatar en pantallas pequeñas y grandes
          height: { xs: 140, md: 180 },
          marginBottom: { xs: 2, md: 0 }, // Espacio en pantallas pequeñas
          borderRadius: '50%', // Hacer la imagen redondeada estilo avatar
          overflow: 'hidden', // Para que los bordes no sobresalgan
          flexShrink: 0, // Para evitar que se reduzca el tamaño en columnas
        }}
      >
        <Image
          alt="Foto de perfil"
          src="/mi-imagen2.jpg"
          width={180} // Ajusta el tamaño acorde a la caja más grande
          height={180}
          quality={100} // Ajustar la calidad de la imagen a máxima
          style={{ objectFit: 'cover' }}
          />
      </Box>

      {/* Contenedor de texto */}
      <Box
        sx={{
          textAlign: { xs: 'center', md: 'left' }, // Centrar en pantallas pequeñas
          maxWidth: { xs: '100%', md: '70%' }, // Ajustar ancho en pantallas grandes
        }}
      >
        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Jose David Gonzalez
        </Typography>
        <Typography variant="h6" component="h2">
          Programador FULL STACK
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Soy un apasionado desarrollador con experiencia en tecnologías frontend
          y backend. Me especializo en React, Next.js y Python con FastAPI para crear
          aplicaciones modernas y eficientes.
        </Typography>

        {/* Botón de Más Proyectos */}
        <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
          <Link href="/hireme" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              sx={{ marginTop: 2, color: "white", borderColor: "white" }}
            >
              Más Proyectos
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  </Container>
);

export default ProfileSection;
