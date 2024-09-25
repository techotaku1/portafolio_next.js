'use client';
import { useState } from "react";

const SkillsSection = ({ skills }) => {
  // Crea un estado para cada skill que se actualizará cuando el usuario cambie el valor del rango
  const [skillLevels, setSkillLevels] = useState(
    skills.map((skill) => skill.percentage)
  );

  // Función para manejar el cambio del rango
  const handleRangeChange = (index, newValue) => {
    const updatedLevels = [...skillLevels];
    updatedLevels[index] = newValue;
    setSkillLevels(updatedLevels);
  };

  return (
    <div className="col-md-6">
      <div
        className="card bg-light mb-3 w-100 d-flex align-items-stretch"
        style={{ minHeight: "400px" }}
      >
        <div className="card-body">
          <h1 className="card-title fw-bold">Skills</h1>
          {skills.map((item, index) => (
            <div key={index} className="mb-4">
              <h6>{item.skill}</h6>
              {/* Rango de habilidad ajustable */}
              <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                value={skillLevels[index]} // Usa el valor actual del estado
                onChange={(e) => handleRangeChange(index, e.target.value)} // Manejador de cambio
                aria-valuenow={skillLevels[index]}
                aria-valuemin="0"
                aria-valuemax="100"
              />
              {/* Mostrar el valor del porcentaje */}
              <small className="text-muted">{skillLevels[index]}%</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
