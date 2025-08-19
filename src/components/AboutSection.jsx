import React from "react";
import { Typography, Stack, Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: "6rem 0",
  position: "relative",
  background: theme.palette.background.default,
  [theme.breakpoints.down("md")]: {
    padding: "4rem 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "3rem 0",
  },
}));

const GlassCard = styled(Box)(({ theme }) => ({
  background: `${theme.palette.background.paper}80`,
  backdropFilter: "blur(20px)",
  borderRadius: "24px",
  border: `1px solid ${theme.palette.primary.main}20`,
  padding: "3rem",
  position: "relative",
  boxShadow: `0 8px 32px ${theme.palette.primary.main}10`,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
  [theme.breakpoints.down("md")]: {
    padding: "2rem",
    borderRadius: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "200px",
  height: "200px",
  border: `4px solid ${theme.palette.primary.main}30`,
  boxShadow: `0 8px 32px ${theme.palette.primary.main}20`,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const AboutSection = () => {
  return (
    <AboutContainer id="about-section">
      <div className="container mx-auto px-4">
        <Typography
          variant="h2"
          className="text-center mb-20"
          color="primary"
          sx={{ fontWeight: 700 }}
        >
          About Me
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <StyledAvatar
              src="rajesh.png"
              alt="Rajesh Kumar Pasi - Professional Developer Photo"
              sx={{
                width: { xs: 150, sm: 180, md: 200 },
                height: { xs: 150, sm: 180, md: 200 },
              }}
            />
          </div>

          <div className="order-1 lg:order-2">
            <GlassCard>
              <Stack spacing={3}>
                <Typography
                  variant="h4"
                  color="primary"
                  sx={{ fontWeight: 600 }}
                >
                  Hello, I'm Rajesh! 👋
                </Typography>

                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                  }}
                >
                  I'm a passionate self-taught web developer with a deep love
                  for creating beautiful and functional web applications. My
                  journey began with curiosity about how websites work, and it
                  has evolved into a comprehensive skill set in the MERN stack.
                </Typography>

                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                  }}
                >
                  Currently, I'm expanding my horizons by diving into the
                  fascinating world of Generative AI and Python. I believe in
                  continuous learning and staying updated with the latest
                  technologies to build innovative solutions.
                </Typography>

                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                  }}
                >
                  When I'm not coding, you'll find me exploring new frameworks,
                  contributing to open-source projects, or experimenting with AI
                  models. I'm always excited to collaborate on projects that
                  make a positive impact.
                </Typography>

                <Box className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Problem Solver",
                    "Team Player",
                    "Quick Learner",
                    "Innovation Enthusiast",
                  ].map((trait) => (
                    <Box
                      key={trait}
                      sx={{
                        background:
                          "linear-gradient(45deg, var(--mui-palette-primary-main), var(--mui-palette-secondary-main))",
                        color: "white",
                        padding: "6px 16px",
                        borderRadius: "20px",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                      }}
                    >
                      {trait}
                    </Box>
                  ))}
                </Box>
              </Stack>
            </GlassCard>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};

export default AboutSection;
