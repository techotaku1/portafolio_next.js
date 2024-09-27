import { Card, CardContent, Typography, Box, Stack } from "@mui/material";

const ExperienceSection = ({ experience }) => (
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
        Experiencia
      </Typography>
      <Stack spacing={2}>
        {experience.map((item, index) => (
          <Box key={index}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {item.company}
            </Typography>
            <Typography variant="body2">{item.description}</Typography>
          </Box>
        ))}
      </Stack>
    </CardContent>
  </Card>
);

export default ExperienceSection;
