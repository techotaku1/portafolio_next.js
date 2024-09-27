import ProfileSection from "./components/ProfileSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import PortfolioSection from "./components/PortfolioSection";
import { skills, experience, portfolio } from "./components/profile";
import { Box, Container } from "@mui/material";

const Page = () => (
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

export default Page;
