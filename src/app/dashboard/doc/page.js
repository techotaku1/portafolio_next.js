"use client";

import { Box, Typography, Paper, List, ListItem } from "@mui/material";

const DocPage = () => {
  return (
    <Box sx={{ p: 4, minHeight: '100vh' }}>
      {/* Título principal */}
      <Paper elevation={3} sx={{ p: 3, bgcolor: "#fff", mb: 3, borderRadius: '8px' }}>
        <Typography variant="h4" color="text.primary" fontWeight="bold">
          Proyecto de Portafolio con Next.js
        </Typography>
      </Paper>

      {/* Funcionalidades Implementadas */}
      <Paper elevation={0} sx={{ p: 3, bgcolor: "#fff", mb: 3, borderRadius: '8px' }}>
        <Typography variant="h5" color="text.primary" fontWeight="bold">
          Funcionalidades Implementadas
        </Typography>

        {/* Hooks de React */}
        <Paper elevation={2} sx={{ p: 2, bgcolor: "transparent", mt: 2, borderRadius: '8px', boxShadow: 3 }}>
          <Typography variant="h6" color="text.primary" fontWeight="bold">
            1. Hooks de React
          </Typography>
          <List>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>usePathname</strong>: Permite obtener la ruta actual de la aplicación, facilitando la gestión de la navegación y los efectos secundarios en función de la ruta activa.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>useState</strong>: Utilizado para manejar el estado local en los componentes, lo que permite la creación de interfaces interactivas.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>useSearchParams</strong>: Permite obtener y manipular los parámetros de búsqueda en la URL, útil para filtrado y búsquedas en la aplicación.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>useEffect</strong>: Este hook permite realizar efectos secundarios en componentes, como la carga de datos y la gestión de suscripciones.
              </Typography>
            </ListItem>
          </List>
        </Paper>

        {/* Funciones (APIs) */}
        <Paper elevation={2} sx={{ p: 2, bgcolor: "transparent", mt: 2, borderRadius: '8px', boxShadow: 3 }}>
          <Typography variant="h6" color="text.primary" fontWeight="bold">
            2. Funciones (APIs)
          </Typography>
          <List>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>fetch</strong>: Utilizada para realizar solicitudes HTTP a APIs externas y obtener datos que se mostrarán en la interfaz de usuario.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>res</strong>: Hace referencia a la respuesta de las solicitudes, y se utiliza en el manejo de la lógica de respuesta de las API.
              </Typography>
            </ListItem>
          </List>
        </Paper>

        {/* Componentes Especiales */}
        <Paper elevation={2} sx={{ p: 2, bgcolor: "transparent", mt: 2, borderRadius: '8px', boxShadow: 3 }}>
          <Typography variant="h6" color="text.primary" fontWeight="bold">
            3. Componentes Especiales
          </Typography>
          <List>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>Link</strong>: Un componente de Next.js que permite la navegación entre páginas de manera optimizada, mejorando el rendimiento de la aplicación.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>Image</strong>: Un componente que permite la optimización de imágenes, asegurando que se carguen de manera eficiente y con el tamaño adecuado.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>Suspense</strong>: Utilizado para manejar la carga de componentes de manera asíncrona, mostrando un indicador de carga mientras se esperan los datos.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>NavigationEvents</strong>: Componente personalizado que maneja eventos de navegación y visualiza una barra de progreso utilizando NProgress.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>no-found</strong>: Componente utilizado para manejar las rutas no encontradas, mostrando un mensaje amigable al usuario.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>global-error</strong>: Componente que se encarga de la gestión de errores globales, mostrando una interfaz amigable en caso de errores en la aplicación.
              </Typography>
            </ListItem>
          </List>
        </Paper>

        {/* Estilo y Diseño con Material-UI */}
        <Paper elevation={2} sx={{ p: 2, bgcolor: "transparent", mt: 2, borderRadius: '8px', boxShadow: 3 }}>
          <Typography variant="h6" color="text.primary" fontWeight="bold">
            4. Estilo y Diseño con Material-UI
          </Typography>
          <List>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                He integrado Material-UI en el proyecto para proporcionar un diseño atractivo y moderno. Algunos de los componentes y características que he implementado incluyen:
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>Componentes de interfaz</strong>: Utilización de botones, tarjetas, y cuadros de diálogo de Material-UI para una experiencia de usuario fluida y profesional.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>Temas</strong>: Personalización del tema global para asegurar que los colores y tipografías se alineen con la identidad visual del portafolio.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1" color="text.secondary">
                <strong>Responsive Design</strong>: Implementación de diseño responsivo utilizando los sistemas de cuadrícula (Grid) de Material-UI, garantizando que la aplicación se vea bien en dispositivos de diferentes tamaños.
              </Typography>
            </ListItem>
          </List>
        </Paper>

        {/* Código de Control de Versiones */}
        <Paper elevation={2} sx={{ p: 2, bgcolor: "transparent", mt: 2, borderRadius: '8px', boxShadow: 3 }}>
          <Typography variant="h6" color="text.primary" fontWeight="bold">
            5. Código de Control de Versiones
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <strong>Comandos:</strong>
          </Typography>
          {/* Cambiar a un div para evitar el error de hidratación */}
          <div>
            <pre>
              <code>
                {`git add .\n` +
                `git commit -m "algunos cambios"\n` +
                `git push origin main`}
              </code>
            </pre>
          </div>
        </Paper>
      </Paper>
    </Box>
  );
};

export default DocPage;
