// src/app/page.js
import ProfileSection from "./components/ProfileSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import PortfolioSection from "./components/PortfolioSection";
import { skills, experience, portfolio } from "./components/profile"; // Asegúrate de que la ruta sea correcta

const Home = () => (
  <div className="container my-4">
    <ProfileSection />
    <div className="row">
      <SkillsSection skills={skills} />
      <ExperienceSection experience={experience} />
    </div>
    <PortfolioSection portfolio={portfolio} />
  </div>
);

export default Home;
