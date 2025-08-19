import React from "react";
import { Typography, Stack, Box, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReacteurope,
  faJs,
  faNodeJs,
  faPython,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SkillsContainer = styled(Box)(({ theme }) => ({
  padding: "6rem 0",
  background: `linear-gradient(135deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.primary.main}05 50%, 
    ${theme.palette.secondary.main}05 100%)`,
  [theme.breakpoints.down("md")]: {
    padding: "4rem 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "3rem 0",
  },
}));

const SkillCard = styled(Box)(({ theme }) => ({
  background: `${theme.palette.background.paper}90`,
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  border: `1px solid ${theme.palette.primary.main}20`,
  padding: "2rem",
  textAlign: "center",
  position: "relative",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-10px) scale(1.02)",
    boxShadow: `0 20px 40px ${theme.palette.primary.main}20`,
    border: `1px solid ${theme.palette.primary.main}40`,
  },
  [theme.breakpoints.down("md")]: {
    padding: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1.25rem",
  },
}));

const ProgressContainer = styled(Box)(({ theme }) => ({
  background: `${theme.palette.background.paper}90`,
  backdropFilter: "blur(20px)",
  borderRadius: "16px",
  border: `1px solid ${theme.palette.primary.main}20`,
  padding: "1.5rem",
  marginBottom: "1rem",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateX(5px)",
    boxShadow: `0 8px 25px ${theme.palette.primary.main}15`,
  },
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: "8px",
  borderRadius: "4px",
  backgroundColor: `${theme.palette.grey[300]}40`,
  "& .MuiLinearProgress-bar": {
    borderRadius: "4px",
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 1rem",
  background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
  fontSize: "2rem",
  color: theme.palette.primary.main,
  transition: "all 0.3s ease",
}));

// Skill Progress Bar Component
const SkillProgressBar = ({ skill }) => {
  return (
    <ProgressContainer>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <Box sx={{ color: skill.color, fontSize: "1.2rem" }}>
            <FontAwesomeIcon icon={skill.icon} />
          </Box>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {skill.name}
          </Typography>
        </div>
        <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
          {skill.level}%
        </Typography>
      </div>
      <StyledLinearProgress variant="determinate" value={skill.level} />
    </ProgressContainer>
  );
};

const skills = [
  { name: "React.js", level: 90, icon: faReacteurope, color: "#61DAFB" },
  { name: "JavaScript", level: 88, icon: faJs, color: "#F7DF1E" },
  { name: "Node.js", level: 85, icon: faNodeJs, color: "#339933" },
  { name: "Express.js", level: 82, icon: faNodeJs, color: "#000000" },
  { name: "MongoDB", level: 80, icon: faNodeJs, color: "#47A248" },
  { name: "Python", level: 70, icon: faPython, color: "#3776AB" },
  { name: "Tailwind CSS", level: 92, icon: faJs, color: "#06B6D4" },
  { name: "GitHub", level: 88, icon: faGithub, color: "#181717" },
  { name: "GSAP", level: 75, icon: faJs, color: "#88CE02" },
  { name: "Generative AI", level: 65, icon: faPython, color: "#FF6B6B" },
];

const techCategories = [
  {
    title: "Frontend",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "GSAP"],
    icon: faReacteurope,
  },
  {
    title: "Backend",
    technologies: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    icon: faNodeJs,
  },
  {
    title: "AI & Learning",
    technologies: [
      "Python",
      "Generative AI",
      "Machine Learning",
      "Data Analysis",
    ],
    icon: faPython,
  },
  {
    title: "Tools & Others",
    technologies: ["GitHub", "Git", "VS Code", "Postman"],
    icon: faGithub,
  },
];

const SkillsSection = () => {
  return (
    <SkillsContainer id="skills-section">
      <div className="container mx-auto px-4">
        <Typography
          variant="h2"
          className="text-center mb-4"
          color="primary"
          sx={{ fontWeight: 700 }}
        >
          Skills & Technologies
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          className="text-center mb-12 max-w-2xl mx-auto"
          sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
        >
          A comprehensive overview of my technical expertise and proficiency
          levels
        </Typography>

        {/* Tech Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {techCategories.map((category, index) => (
            <SkillCard key={index}>
              <IconWrapper>
                <FontAwesomeIcon icon={category.icon} />
              </IconWrapper>
              <Typography
                variant="h6"
                color="primary"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                {category.title}
              </Typography>
              <Stack spacing={1}>
                {category.technologies.map((tech, techIndex) => (
                  <Typography
                    key={techIndex}
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.9rem" }}
                  >
                    {tech}
                  </Typography>
                ))}
              </Stack>
            </SkillCard>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <Box className="max-w-6xl mx-auto">
          <Typography
            variant="h4"
            className="text-center mb-8"
            color="primary"
            sx={{ fontWeight: 600 }}
          >
            Proficiency Levels
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {skills.map((skill, index) => (
              <SkillProgressBar key={index} skill={skill} />
            ))}
          </div>
        </Box>
      </div>
    </SkillsContainer>
  );
};

export default SkillsSection;
