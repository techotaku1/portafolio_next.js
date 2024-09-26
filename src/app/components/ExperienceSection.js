import { Card, CardContent, Typography, Box } from "@mui/material";

const ExperienceSection = ({ experience }) => (
  <Box
    flex={1}
    mb={3}
    display="flex"
    justifyContent="center"
    alignItems="stretch"
  >
    <Card variant="outlined" sx={{ width: "100%", minHeight: "400px" }}>
      <CardContent>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold" }} // Aplica negrita al texto
        >
          Experiencia
        </Typography>
        {experience.map((item, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {item.company}
            </Typography>
            <Typography variant="body2">{item.description}</Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  </Box>
);

export default ExperienceSection;
