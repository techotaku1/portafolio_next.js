"use client";

import { Box, Typography, Paper, List, ListItem, Button } from "@mui/material";
import { useState } from "react";

const DocPage = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = async () => {
    const commands =
      `git add .\n` +
      `git commit -m "algunos cambios"\n` +
      `git push origin main`;
    try {
      await navigator.clipboard.writeText(commands);
      setCopySuccess("Comandos copiados al portapapeles!");
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (err) {
      console.error("Error al copiar: ", err);
      setCopySuccess("Error al copiar");
    }
  };

  return (
    <Box sx={{ p: 4, minHeight: "100vh" }}>
      {/* Título principal */}
      <Paper
        elevation={3}
        sx={{ p: 3, bgcolor: "#fff", mb: 3, borderRadius: 2 }}
      >
        <Typography variant="h4" color="text.primary" fontWeight="bold">
          Proyecto de Portafolio con Next.js
        </Typography>
      </Paper>

      {/* Funcionalidades Implementadas */}
      <Paper
        elevation={0}
        sx={{ p: 3, bgcolor: "#fff", mb: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" color="text.primary" fontWeight="bold">
          Funcionalidades Implementadas
        </Typography>

        {/* Hooks de React */}
        <Section title="1. Hooks de React">
          <ListItemText
            title="usePathname"
            description="Permite obtener la ruta actual de la aplicación, facilitando la gestión de la navegación y los efectos secundarios en función de la ruta activa."
          />
          <ListItemText
            title="useState"
            description="Utilizado para manejar el estado local en los componentes, lo que permite la creación de interfaces interactivas."
          />
          <ListItemText
            title="useSearchParams"
            description="Permite obtener y manipular los parámetros de búsqueda en la URL, útil para filtrado y búsquedas en la aplicación."
          />
          <ListItemText
            title="useEffect"
            description="Este hook permite realizar efectos secundarios en componentes, como la carga de datos y la gestión de suscripciones."
          />
        </Section>

        {/* Funciones (APIs) */}
        <Section title="2. Funciones (APIs)">
          <ListItemText
            title="fetch"
            description="Utilizada para realizar solicitudes HTTP a APIs externas y obtener datos que se mostrarán en la interfaz de usuario."
          />
          <ListItemText
            title="res"
            description="Hace referencia a la respuesta de las solicitudes, y se utiliza en el manejo de la lógica de respuesta de las API."
          />
        </Section>

        {/* Componentes Especiales */}
        <Section title="3. Componentes Especiales">
          <ListItemText
            title="Link"
            description="Un componente de Next.js que permite la navegación entre páginas de manera optimizada, mejorando el rendimiento de la aplicación."
          />
          <ListItemText
            title="Image"
            description="Un componente que permite la optimización de imágenes, asegurando que se carguen de manera eficiente y con el tamaño adecuado."
          />
          <ListItemText
            title="Suspense"
            description="Utilizado para manejar la carga de componentes de manera asíncrona, mostrando un indicador de carga mientras se esperan los datos."
          />
          <ListItemText
            title="NavigationEvents"
            description="Componente personalizado que maneja eventos de navegación y visualiza una barra de progreso utilizando NProgress."
          />
          <ListItemText
            title="no-found"
            description="Componente utilizado para manejar las rutas no encontradas, mostrando un mensaje amigable al usuario."
          />
          <ListItemText
            title="global-error"
            description="Componente que se encarga de la gestión de errores globales, mostrando una interfaz amigable en caso de errores en la aplicación."
          />
        </Section>

        {/* Estilo y Diseño con Material-UI */}
        <Section title="4. Estilo y Diseño con Material-UI">
          <ListItemText description="He integrado Material-UI en el proyecto para proporcionar un diseño atractivo y moderno. Algunos de los componentes y características que he implementado incluyen:" />
          <ListItemText
            title="Componentes de interfaz"
            description="Utilización de botones, tarjetas, y cuadros de diálogo de Material-UI para una experiencia de usuario fluida y profesional."
          />
          <ListItemText
            title="Temas"
            description="Personalización del tema global para asegurar que los colores y tipografías se alineen con la identidad visual del portafolio."
          />
          <ListItemText
            title="Responsive Design"
            description="Implementación de diseño responsivo utilizando los sistemas de cuadrícula (Grid) de Material-UI, garantizando que la aplicación se vea bien en dispositivos de diferentes tamaños."
          />
        </Section>

        {/* Implementación de Sharp */}
        <Section title="5. Implementación de Sharp" bgcolor="#d1e7dd">
          <Typography variant="body1" color="text.secondary">
            <strong>Optimización de Imágenes con Sharp</strong>
          </Typography>
          <ListItemText
            description="Sharp es un paquete de Node.js que permite la manipulación de imágenes, incluyendo la optimización y el cambio de tamaño. Se recomienda su uso para mejorar el rendimiento de las aplicaciones que utilizan imágenes."
          />
          <ListItemText
            title="Instalación"
            description={`Para instalar Sharp, ejecuta el siguiente comando en la terminal:`}
          />
          <Box
            sx={{
              bgcolor: "#f5f5f5",
              p: 2,
              borderRadius: "4px",
              mt: 1,
              width: "100%", // Ajusta el ancho al 100%
              overflow: "auto", // Permite el scroll en caso de desbordamiento
            }}
          >
            <pre>
              <code>{`npm install sharp`}</code>
            </pre>
          </Box>
          <ListItemText
            title="Uso"
            description="Sharp se utiliza automáticamente por Next.js cuando se maneja la optimización de imágenes. Solo es necesario instalarlo, y Next.js se encargará del resto."
          />
        </Section>

        {/* Código de Control de Versiones */}
        <Section title="6. Código de Control de Versiones" bgcolor="#fff54f">
          <Typography variant="body1" color="text.secondary">
            <strong>Comandos: para agregar commit</strong>
          </Typography>
          <Box
            sx={{
              bgcolor: "#f5f5f5",
              p: 2,
              borderRadius: "4px",
              mt: 1,
              width: "100%", // Ajusta el ancho al 100%
              overflow: "auto", // Permite el scroll en caso de desbordamiento
            }}
          >
            <pre>
              <code>
                {`git add .\n` +
                  `git commit -m "algunos cambios"\n` +
                  `git push origin main`}
              </code>
            </pre>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCopy}
            sx={{ mt: 2 }}
          >
            Copiar al portapapeles
          </Button>
          {copySuccess && (
            <Typography variant="body2" color="success.main" sx={{ mt: 2 }}>
              {copySuccess}
            </Typography>
          )}
        </Section>

        {/* Resumen sobre Estrategias de Renderizado */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" color="text.primary" fontWeight="bold">
            Estrategias de Renderizado en Next.js
          </Typography>
          <Typography variant="body1" color="text.secondary">
            En Next.js, hay varias estrategias de renderizado que puedes utilizar, cada una adecuada para diferentes casos de uso:
          </Typography>
          <List>
            <ListItem>
              <Typography variant="body2" color="text.secondary">
                <strong>SSR (Server-Side Rendering)</strong>: Ideal para contenido que cambia con frecuencia y necesita ser actualizado en cada solicitud. Permite obtener datos dinámicos en el servidor antes de renderizar la página.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2" color="text.secondary">
                <strong>SSG (Static Site Generation)</strong>: Perfecto para contenido estático o que se actualiza periódicamente. Genera páginas estáticas en el momento de la construcción, mejorando el rendimiento y SEO.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2" color="text.secondary">
                <strong>CSR (Client-Side Rendering)</strong>: Útil para componentes interactivos y en situaciones donde necesitas manejar el estado del cliente. Todo el contenido se carga en el cliente después de la primera solicitud.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2" color="text.secondary">
                <strong>ISR (Incremental Static Regeneration)</strong>: Combina lo mejor de SSR y SSG, permitiendo que las páginas estáticas se regeneren de forma incremental, ofreciendo contenido fresco sin necesidad de recompilar todo el sitio.
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

// Componente para secciones
const Section = ({ title, children }) => (
  <Paper
    elevation={2}
    sx={{ p: 2, bgcolor: "transparent", mt: 2, borderRadius: 2, boxShadow: 3 }}
  >
    <Typography variant="h6" color="text.primary" fontWeight="bold">
      {title}
    </Typography>
    <List>{children}</List>
  </Paper>
);

// Componente para elementos de lista
const ListItemText = ({ title, description }) => (
  <ListItem>
    <Typography variant="body1" color="text.secondary">
      <strong>{title}</strong>: {description}
    </Typography>
  </ListItem>
);

export default DocPage;
