import React from 'react';
import { Typography, Button, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  padding: '2rem 0',
  background: `linear-gradient(135deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.primary.main}10 50%, 
    ${theme.palette.secondary.main}10 100%)`,
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    minHeight: '90vh',
    padding: '1rem 0'
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}20 0%, transparent 50%),
                 radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}20 0%, transparent 50%),
                 radial-gradient(circle at 40% 40%, ${theme.palette.info.main}15 0%, transparent 50%)`,
    animation: 'aurora 20s ease-in-out infinite',
    zIndex: 0
  },
  '@keyframes aurora': {
    '0%, 100%': {
      opacity: 0.5,
      transform: 'scale(1) rotate(0deg)'
    },
    '50%': {
      opacity: 0.8,
      transform: 'scale(1.1) rotate(180deg)'
    }
  }
}));

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}30, ${theme.palette.secondary.main}30)`,
  backdropFilter: 'blur(10px)',
  animation: 'float 6s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0px) rotate(0deg)'
    },
    '50%': {
      transform: 'translateY(-20px) rotate(180deg)'
    }
  }
}));

const GlassCard = styled(Box)(({ theme }) => ({
  background: `${theme.palette.background.paper}80`,
  backdropFilter: 'blur(20px)',
  borderRadius: '24px',
  border: `1px solid ${theme.palette.primary.main}20`,
  padding: '3rem',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
  boxShadow: `0 8px 32px ${theme.palette.primary.main}10`,
  [theme.breakpoints.down('md')]: {
    padding: '2rem',
    borderRadius: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem',
    margin: '0 1rem'
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '12px 32px',
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 25px ${theme.palette.primary.main}40`
  }
}));

const HeroSection = () => {
  const handleScrollToWork = () => {
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroContainer id="hero-section">
      <FloatingElement sx={{ top: '10%', left: '10%', animationDelay: '0s' }} />
      <FloatingElement sx={{ top: '20%', right: '15%', animationDelay: '2s' }} />
      <FloatingElement sx={{ bottom: '15%', left: '20%', animationDelay: '4s' }} />
      <FloatingElement sx={{ bottom: '25%', right: '10%', animationDelay: '1s' }} />
      
      <GlassCard className="max-w-4xl mx-auto">
        <Stack spacing={3} alignItems="center">
          <Typography 
            variant="h1" 
            className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
          >
            Rajesh Kumar Pasi
          </Typography>
          
          <Typography 
            variant="h4" 
            color="text.secondary"
            className="text-center"
            sx={{ 
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: 500,
              maxWidth: '600px'
            }}
          >
            MERN Stack Developer | Frontend Specialist | AI Learner
          </Typography>
          
          <Typography 
            variant="body1" 
            color="text.secondary"
            className="text-center max-w-2xl"
            sx={{ 
              fontSize: '1.1rem',
              lineHeight: 1.7,
              mt: 2
            }}
          >
            Crafting modern web experiences with cutting-edge technologies. 
            Passionate about creating beautiful, functional applications and exploring the future of AI.
          </Typography>
          
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            className="mt-8"
          >
            <StyledButton
              variant="contained"
              size="large"
              onClick={handleScrollToWork}
              sx={{ minWidth: '160px' }}
            >
              View My Work
            </StyledButton>
            <StyledButton
              variant="outlined"
              size="large"
              onClick={handleScrollToContact}
              sx={{ minWidth: '160px' }}
            >
              Contact Me
            </StyledButton>
          </Stack>
        </Stack>
      </GlassCard>
    </HeroContainer>
  );
};

export default HeroSection;