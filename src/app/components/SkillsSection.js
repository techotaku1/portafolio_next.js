"use client";
import { useState } from "react";
import { Card, CardContent, Typography, Slider, Box } from "@mui/material";

const SkillsSection = ({ skills }) => {
  // Crea un estado para manejar los niveles de habilidades
  const [skillLevels, setSkillLevels] = useState(
    skills.map((skill) => skill.percentage)
  );
  // Estado para manejar el índice del skill activo
  const [activeSkillIndex, setActiveSkillIndex] = useState(null);

  // Manejador de cambio de rango
  const handleRangeChange = (index) => (event, newValue) => {
    const updatedLevels = [...skillLevels];
    updatedLevels[index] = newValue;
    setSkillLevels(updatedLevels);
  };

  return (
    <Box sx={{ flex: 1, mb: 3 }}>
      <Card
        variant="outlined"
        sx={{ minHeight: "400px", bgcolor: "background.paper" }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Skills
          </Typography>
          {skills.map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1">{item.skill}</Typography>
              <Box sx={{ position: 'relative', width: '100%' }}>
                {/* Rango de habilidad ajustable */}
                <Slider
                  value={skillLevels[index]} // Usa el valor actual del estado
                  onChange={handleRangeChange(index)} // Manejador de cambio
                  onMouseDown={() => setActiveSkillIndex(index)} // Activa el skill al hacer clic
                  onMouseUp={() => setActiveSkillIndex(null)} // Desactiva el skill al soltar el clic
                  aria-labelledby={`slider-${index}`}
                  min={0}
                  max={100}
                />
                {/* Mostrar el porcentaje superior encima de la bolita del slider */}
                {activeSkillIndex === index && (
                  <Typography
                    variant="caption"
                    color="text.primary"
                    sx={{
                      position: 'absolute',
                      top: '-30px', // Ajusta la posición vertical según sea necesario
                      left: `${skillLevels[index]}%`,
                      transform: 'translateX(-50%)', // Centra el porcentaje sobre la bolita
                      textAlign: 'center',
                      pointerEvents: 'none', // Evita que el tooltip interfiera con el clic en el slider
                      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo semi-transparente
                      color: 'white', // Color del texto
                      borderRadius: '4px', // Bordes redondeados
                      padding: '2px 4px', // Espaciado interno
                      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)', // Sombra
                    }}
                  >
                    {skillLevels[index]}%
                  </Typography>
                )}
              </Box>
              {/* Mostrar el porcentaje inferior siempre */}
              <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center' }}>
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
