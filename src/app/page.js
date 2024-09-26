// src/app/page.js
import ProfileSection from "./components/ProfileSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import PortfolioSection from "./components/PortfolioSection";
import { skills, experience, portfolio } from "./components/profile";
import { Box, Container, Typography } from "@mui/material"; // Importar componentes adicionales de Material-UI

const Page = () => (
  <Container maxWidth="lg">
    <ProfileSection />

    <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
      HABILIDADES Y EXPERIENCIA
    </Typography>

    {/* Usamos Box para el diseño de columnas */}
    <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
      <Box flex={1} mr={{ md: 1 }}>
        <SkillsSection skills={skills} />
      </Box>
      <Box flex={1} ml={{ md: 1 }}>
        <ExperienceSection experience={experience} />
      </Box>
    </Box>

    {/* Espaciado entre secciones */}
    <Box my={4}>
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        PORTAFOLIO
      </Typography>
      <PortfolioSection portfolio={portfolio} />
    </Box>
  </Container>
);

export default Page;
