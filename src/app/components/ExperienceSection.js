// src/app/components/ExperienceSection.js
const ExperienceSection = ({ experience }) => (
  <div className="col-md-6 d-flex">
    <div className="card bg-light mb-3 w-100">
      <div className="card-body">
        <h1 className="card-title fw-bold">Experiencia</h1>
        <ul>
          {experience.map((item, index) => (
            <li key={index} className="mb-3">
              <h3>{item.title}</h3>
              <h5>{item.company}</h5>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ExperienceSection;
