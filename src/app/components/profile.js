export const skills = [
  { skill: "React", percentage: 70 },
  { skill: "Next.js", percentage: 70 },
  { skill: "Javascript", percentage: 90 },
  { skill: "Python", percentage: 90 },
  { skill: "FastAPI", percentage: 70 },
];

export const experience = [
  {
    title: "Desarrollador Frontend",

    description: "Desarrollé aplicaciones web utilizando React y Next.js.",
  },
  {
    title: "Desarrollador Backend",

    description: "Creé APIs REST-CRUD utilizando Python y FastAPI.",
  },
  {
    title: "Bases De Datos",

    description:
      "Conecte una base de datos con una API-REST con el servicio en la nube de AWS",
  },
  {
    title: "Editor de Videos",
    description:
      "Tengo experiencia en la edición de videos utilizando CapCut y en la creación de presentaciones con Canva.",
  },
];

export const portfolio = [
  {
    title: "Proyecto CRUD con FastAPI",
    description:
      "Implemente una API-REST con PYTHON y conexión a base de datos SQLite.",
    image: "/fast_api_ppt.png",
    repo: "https://github.com/techotaku1/api_rest_crud_fastapi", // URL del repositorio
  },
  {
    title: "Proyecto CRUD en AWS",
    description: "Implementé un CRUD usando FastAPI, AWS y Python.",
    image: "/fastapi-aws.webp",
    repo: "https://github.com/techotaku1/api_rest_crud_fastcrud", // URL del repositorio
  },
  {
    title: "Portafolio en Next.js",
    description:
      "Portafolio personal con manejo de API de GitHub y navegacion de eventos.",
    image: "/proyectonextjs.jpg",
    repo: "https://github.com/techotaku1/portafolio_next.js", // URL del repositorio
  },
];

const BlogItems = [
  {
    id: 1,
    title: "GATSBY",
    icon: "/gatsby.png", // Cambia por la ruta correcta de tu icono
    link: "https://gatsbyjs.com/docs/", // Cambia por la URL que desees
  },
  {
    id: 2,
    title: "NEXT.JS",
    icon: "/nextjs.png",
    link: "https://nextjs.org/docs",
  },
  {
    id: 3,
    title: "EXPRESS",
    icon: "/express.png",
    link: "https://expressjs.com/es",
  },
  {
    id: 4,
    title: "DJANGO",
    icon: "/django.png",
    link: "https://docs.djangoproject.com",
  },
];

export default BlogItems;
