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
        display="flex"
        sx={{
          mb: 5,
          mt: 5,
          width: '100%', // Asegúrate de que ocupe el 100% del ancho disponible
        }}
      >
        {/* Contenedor para Skills */}
        <Box sx={{ flex: 1, width: "50%", mr: 1 }}> {/* Ocupa la mitad de la página */}
          <SkillsSection skills={skills} />
        </Box>

        {/* Contenedor para Experience */}
        <Box sx={{ flex: 1, width: "50%", ml: 1 }}> {/* Ocupa la mitad de la página */}
          <ExperienceSection experience={experience} />
        </Box>
      </Box>

      {/* Sección del Portafolio */}
      <PortfolioSection portfolio={portfolio} />
    </Box>
  </Container>
);

export default Page;
