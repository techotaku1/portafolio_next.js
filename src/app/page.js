// src/app/page.js
import ProfileSection from "./components/ProfileSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import PortfolioSection from "./components/PortfolioSection";
import { skills, experience, portfolio } from "./components/profile"; // Asegúrate de que la ruta sea correcta
import { Box } from "@mui/material"; // Importar Box de Material-UI

const Page = () => (
  <>
    <ProfileSection />
    
    {/* Usamos Box para el diseño de columnas */}
    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
      <Box flex={1} mr={{ md: 1 }}>
        <SkillsSection skills={skills} />
      </Box>
      <Box flex={1} ml={{ md: 1 }}>
        <ExperienceSection experience={experience} />
      </Box>
    </Box>

    {/* Sección del portafolio */}
    <PortfolioSection portfolio={portfolio} />
  </>
);

export default Page;
