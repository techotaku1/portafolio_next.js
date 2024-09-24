// pages/index.js
import ProfileSection from "./components/ProfileSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import PortfolioSection from "./components/PortfolioSection";
import { skills, experience, portfolio } from "./components/profile"; // Asegúrate de que la ruta sea correcta

const Home = () => (
  <>
    
    
    <section>
      <div className="container my-4">
        <ProfileSection />
        <SkillsSection skills={skills} />
        <ExperienceSection experience={experience} />
        <PortfolioSection portfolio={portfolio} />
      </div>
    </section>
    
    
  </>
);

export default Home;
