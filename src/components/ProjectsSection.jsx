import React, { useState } from "react";
import { Typography, Stack, Box, Button, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectsContainer = styled(Box)(({ theme }) => ({
  padding: "6rem 0",
  background: theme.palette.background.default,
  [theme.breakpoints.down("md")]: {
    padding: "4rem 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "3rem 0",
  },
}));

const ProjectCard = styled(Box)(({ theme }) => ({
  background: `${theme.palette.background.paper}90`,
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  border: `1px solid ${theme.palette.primary.main}20`,
  overflow: "hidden",
  position: "relative",
  transition: "all 0.4s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-10px) scale(1.02)",
    boxShadow: `0 25px 50px ${theme.palette.primary.main}20`,
    border: `1px solid ${theme.palette.primary.main}40`,
    "& .project-image": {
      transform: "scale(1.1)",
    },
    "& .project-overlay": {
      opacity: 1,
    },
  },
}));

const ProjectImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  transition: "transform 0.4s ease",
  [theme.breakpoints.down("sm")]: {
    height: "180px",
  },
}));

const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}90, ${theme.palette.secondary.main}90)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.4s ease",
  zIndex: 2,
}));

const FilterButton = styled(Button)(({ theme, active }) => ({
  borderRadius: "25px",
  padding: "8px 24px",
  textTransform: "none",
  fontWeight: 500,
  transition: "all 0.3s ease",
  background: active
    ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
    : "transparent",
  color: active ? "white" : theme.palette.text.primary,
  border: `1px solid ${active ? "transparent" : theme.palette.primary.main}40`,
  "&:hover": {
    background: active
      ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
      : `${theme.palette.primary.main}10`,
    transform: "translateY(-2px)",
  },
}));

const TechChip = styled(Chip)(({ theme }) => ({
  background: `${theme.palette.primary.main}15`,
  color: theme.palette.primary.main,
  fontSize: "0.75rem",
  height: "24px",
  "& .MuiChip-label": {
    padding: "0 8px",
  },
}));

const projects = [
  {
    id: 1,
    title: "E-Commerce MERN App",
    description:
      "Full-stack e-commerce platform with user authentication, payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGNvbXB1dGVyJTIwcHJvZ3JhbW1pbmd8ZW58MHwwfHxibHVlfDE3NTU0MjY1NDd8MA&ixlib=rb-4.1.0&q=85",
    attribution: "Mohammad Rahmani on Unsplash",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com/rajeshkumarpasi",
    demo: "https://demo-link.com",
  },
  {
    id: 2,
    title: "AI Chat Application",
    description:
      "Real-time chat application powered by OpenAI API with intelligent responses and conversation memory.",
    image:
      "https://images.unsplash.com/photo-1643409471378-cdab0f97d983?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29yayUyMGRhdGElMjB0ZWNobm9sb2d5fGVufDB8MHx8cHVycGxlfDE3NTU0MjY1NDh8MA&ixlib=rb-4.1.0&q=85",
    attribution: "MARIOLA GROBELSKA on Unsplash",
    category: "AI Projects",
    technologies: ["Python", "OpenAI API", "React", "WebSocket"],
    github: "https://github.com/rajeshkumarpasi",
    demo: "https://demo-link.com",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "Collaborative project management tool with real-time updates, file sharing, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGNvbXB1dGVyJTIwcHJvZ3JhbW1pbmd8ZW58MHwwfHxibHVlfDE3NTU0MjY1NDd8MA&ixlib=rb-4.1.0&q=85",
    attribution: "Riku Lu on Unsplash",
    category: "Web Development",
    technologies: ["React", "Firebase", "Material-UI", "Node.js"],
    github: "https://github.com/rajeshkumarpasi",
    demo: "https://demo-link.com",
  },
  {
    id: 4,
    title: "Image Classification Model",
    description:
      "Deep learning model for image classification using TensorFlow and Python with web interface.",
    image:
      "https://images.unsplash.com/photo-1637099536974-22c1d38eed51?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29yayUyMGRhdGElMjB0ZWNobm9sb2d5fGVufDB8MHx8cHVycGxlfDE3NTU0MjY1NDh8MA&ixlib=rb-4.1.0&q=85",
    attribution: "Marcel Strauß on Unsplash",
    category: "AI Projects",
    technologies: ["Python", "TensorFlow", "Flask", "OpenCV"],
    github: "https://github.com/rajeshkumarpasi",
    demo: "https://demo-link.com",
  },
  {
    id: 5,
    title: "College Event Management",
    description:
      "Complete event management system for college events with registration, payment, and attendance tracking.",
    image:
      "https://images.unsplash.com/photo-1613203713329-b2e39e14c266?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHxjb2RpbmclMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGNvbXB1dGVyJTIwcHJvZ3JhbW1pbmd8ZW58MHwwfHxibHVlfDE3NTU0MjY1NDh8MA&ixlib=rb-4.1.0&q=85",
    attribution: "Artem R on Unsplash",
    category: "College Projects",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/rajeshkumarpasi",
    demo: "https://demo-link.com",
  },
  {
    id: 6,
    title: "Student Portal System",
    description:
      "Comprehensive student management system with grades, attendance, and course management features.",
    image:
      "https://images.unsplash.com/photo-1664715221603-12feee6dc978?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29yayUyMGRhdGElMjB0ZWNobm9sb2d5fGVufDB8MHx8cHVycGxlfDE3NTU0MjY1NDh8MA&ixlib=rb-4.1.0&q=85",
    attribution: "Steve Johnson on Unsplash",
    category: "College Projects",
    technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    github: "https://github.com/rajeshkumarpasi",
    demo: "https://demo-link.com",
  },
];

const categories = [
  "All",
  "Web Development",
  "AI Projects",
  "College Projects",
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <ProjectsContainer id="projects-section">
      <div className="container mx-auto px-4">
        <Typography
          variant="h2"
          className="text-center mb-4"
          color="primary"
          sx={{ fontWeight: 700 }}
        >
          Featured Projects
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="body1"
            color="text.secondary"
            className="text-center mb-8 max-w-2xl mx-auto"
            align="center"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              textAlign: "center",
              mx: "auto",
              width: "100%",
            }}
          >
            A showcase of my work across web development, AI projects, and
            academic achievements
          </Typography>
        </Box>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4">
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id}>
              <div className="relative">
                <ProjectImage
                  src={project.image}
                  alt={`${project.title} - ${project.attribution}`}
                  className="project-image"
                  style={{ width: "100%", height: "200px" }}
                />
                <ProjectOverlay className="project-overlay">
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<FontAwesomeIcon icon={faGithub} />}
                      href={project.github}
                      target="_blank"
                      sx={{
                        background: "rgba(255,255,255,0.9)",
                        color: "black",
                        "&:hover": { background: "white" },
                      }}
                    >
                      Code
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      href={project.demo}
                      target="_blank"
                      sx={{
                        borderColor: "white",
                        color: "white",
                        "&:hover": {
                          borderColor: "white",
                          background: "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      Demo
                    </Button>
                  </Stack>
                </ProjectOverlay>
              </div>

              <Box className="p-4 md:p-6">
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: 600, mb: 1 }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, lineHeight: 1.6 }}
                >
                  {project.description}
                </Typography>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => (
                    <TechChip key={index} label={tech} size="small" />
                  ))}
                </div>
              </Box>
            </ProjectCard>
          ))}
        </div>
      </div>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
