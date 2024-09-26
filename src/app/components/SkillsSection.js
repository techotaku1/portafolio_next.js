'use client';
import { useState } from "react";
import { Card, CardContent, Typography, Slider, Box } from "@mui/material";

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
    <Box sx={{ flex: 1, mb: 3 }}>
      <Card variant="outlined" sx={{ minHeight: "400px", bgcolor: 'background.paper' }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Skills
          </Typography>
          {skills.map((item, index) => (
            <Box key={index} sx={{ mb: 1 }}>
              <Typography variant="subtitle1">{item.skill}</Typography>
              {/* Rango de habilidad ajustable */}
              <Slider
                value={skillLevels[index]} // Usa el valor actual del estado
                onChange={(e, newValue) => handleRangeChange(index, newValue)} // Manejador de cambio
                aria-labelledby={`slider-${index}`}
                min={0}
                max={100}
              />
              {/* Mostrar el valor del porcentaje */}
              <Typography variant="caption" color="text.secondary">
                {skillLevels[index]}%
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default SkillsSection;
