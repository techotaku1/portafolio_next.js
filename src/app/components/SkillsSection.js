import { Card, CardContent, Typography, Box, Slider } from "@mui/material";

const SkillsSection = ({ skills }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%", // Asegúrate de que ocupe todo el alto del contenedor
        display: "flex", // Usa flex para que ocupe todo el espacio disponible
        flexDirection: "column",
        p: 3
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          Skills
        </Typography>
        {skills.map((skill, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle1">{skill.skill}</Typography>
            <Box display="flex" alignItems="center">
              <Slider 
                value={skill.percentage} 
                min={0} 
                max={100} 
                disabled // Deshabilita el slider
                sx={{ 
                  flexGrow: 1, 
                  mr: 2, 
                  '& .MuiSlider-thumb': {
                    backgroundColor: 'primary.main',
                  },
                  '& .MuiSlider-track': {
                    backgroundColor: 'primary.main',
                  },
                  '& .MuiSlider-rail': {
                    backgroundColor: '#e0e0e0',
                  },
                }} 
              />
              <Typography variant="body1">{skill.percentage}%</Typography>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default SkillsSection;