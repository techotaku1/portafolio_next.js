// src/app/components/ExperienceSection.js
import { Card, CardContent, Typography, Box } from "@mui/material";

const ExperienceSection = ({ experience }) => (
  <Box flex={1} mb={3} display="flex" justifyContent="center" alignItems="stretch">
    <Card variant="outlined" sx={{ width: '100%', minHeight: '400px' }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Experiencia
        </Typography>
        <ul>
          {experience.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {item.company}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </Box>
);

export default ExperienceSection;
