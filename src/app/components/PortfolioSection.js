// src/app/components/PortfolioSection.js
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

const PortfolioSection = ({ portfolio }) => (
  <Box
    sx={{
      backgroundColor: "#4a90e2",
      color: "#ffffff",
      padding: "20px",
      objectFit: "cover",
    }}
  >
    <Typography variant="h4" align="center" gutterBottom>
      Portfolio
    </Typography>
    <Box display="flex" flexWrap="wrap" justifyContent="space-between">
      {portfolio.map((project, index) => (
        <Card key={index} sx={{ width: "100%", maxWidth: 300, margin: 2 }}>
          <CardMedia
            component="div"
            sx={{
              position: "relative",
              height: 180,
              overflow: "hidden",
              
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" // Ajusta los tamaños según tus necesidades
              priority
            />
          </CardMedia>
          <CardContent>
            <Typography variant="h6">{project.title}</Typography>
            <Typography variant="body2">{project.description}</Typography>
            <Link href="#" passHref>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ marginTop: 1 }}
              >
                Know More
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </Box>
    <Box display="flex" justifyContent="center" mt={2}>
      <Link href="/portfolio" passHref>
        <Button variant="outlined" color="inherit" sx={{ color: "white" }}>
          Mas Proyectos
        </Button>
      </Link>
    </Box>
  </Box>
);

export default PortfolioSection;
