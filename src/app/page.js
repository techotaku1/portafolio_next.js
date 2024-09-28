// src/app/page.js
import ProfileSection from "./components/ProfileSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import PortfolioSection from "./components/PortfolioSection";
import { Box, Container } from "@mui/material";

// Sección para obtener los datos estáticos
async function fetchData() {
  // Aquí puedes hacer la llamada a tu API o simplemente usar datos locales
  // Si estás utilizando datos locales, asegúrate de que están disponibles en este contexto
  const skills = await import('./components/profile').then(mod => mod.skills);
  const experience = await import('./components/profile').then(mod => mod.experience);
  const portfolio = await import('./components/profile').then(mod => mod.portfolio);

  return { skills, experience, portfolio };
}

// Componente de la página principal
const Page = async () => {
  const { skills, experience, portfolio } = await fetchData();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProfileSection />

        {/* Box principal para Skills y Experience */}
        <Box
          sx={{
            mb: 5,
            mt: 5,
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Apilado en xs, lado a lado en md+
            width: "100%", // Ancho completo
            gap: { xs: 2, md: 4 }, // Espacio entre columnas
          }}
        >
          {/* Contenedor para Skills */}
          <Box sx={{ flex: 1 }}>
            <SkillsSection skills={skills} />
          </Box>

          {/* Contenedor para Experience */}
          <Box sx={{ flex: 1 }}>
            <ExperienceSection experience={experience} />
          </Box>
        </Box>

        {/* Sección del Portafolio */}
        <PortfolioSection portfolio={portfolio} />
      </Box>
    </Container>
  );
};

export default Page;
