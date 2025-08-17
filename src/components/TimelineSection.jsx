import React from 'react';
import { Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const TimelineContainer = styled(Box)(({ theme }) => ({
  padding: '6rem 0',
  background: `linear-gradient(135deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.primary.main}05 50%, 
    ${theme.palette.secondary.main}05 100%)`
}));

const TimelineWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '800px',
  margin: '0 auto',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '4px',
    background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    transform: 'translateX(-50%)',
    borderRadius: '2px',
    [theme.breakpoints.down('md')]: {
      left: '30px'
    }
  }
}));

const TimelineItem = styled(Box)(({ theme, position }) => ({
  position: 'relative',
  marginBottom: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: position === 'left' ? 'flex-end' : 'flex-start',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start',
    paddingLeft: '70px'
  }
}));

const TimelineContent = styled(Box)(({ theme, position }) => ({
  background: `${theme.palette.background.paper}90`,
  backdropFilter: 'blur(20px)',
  borderRadius: '20px',
  border: `1px solid ${theme.palette.primary.main}20`,
  padding: '2rem',
  width: '45%',
  position: 'relative',
  boxShadow: `0 8px 32px ${theme.palette.primary.main}10`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 15px 40px ${theme.palette.primary.main}20`
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    [position === 'left' ? 'right' : 'left']: '-10px',
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    [position === 'left' ? 'borderLeft' : 'borderRight']: `10px solid ${theme.palette.background.paper}90`,
    transform: 'translateY(-50%)'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    '&::before': {
      left: '-10px',
      right: 'auto',
      borderLeft: `10px solid ${theme.palette.background.paper}90`,
      borderRight: 'none'
    }
  }
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '20px',
  height: '20px',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  border: `4px solid ${theme.palette.background.default}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translate(-50%, -50%) scale(1.2)'
  },
  [theme.breakpoints.down('md')]: {
    left: '30px'
  }
}));

const YearBadge = styled(Box)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: 'white',
  padding: '4px 12px',
  borderRadius: '12px',
  fontSize: '0.875rem',
  fontWeight: 600,
  display: 'inline-block',
  marginBottom: '0.5rem'
}));

const timelineData = [
  {
    year: '2020',
    title: 'Started with HTML & CSS',
    description: 'Began my web development journey by learning the fundamentals of HTML and CSS. Created my first static websites and discovered my passion for frontend development.',
    position: 'left'
  },
  {
    year: '2021',
    title: 'JavaScript & React.js',
    description: 'Dove deep into JavaScript programming and learned React.js. Built my first interactive web applications and understood the power of component-based architecture.',
    position: 'right'
  },
  {
    year: '2022',
    title: 'MERN Stack Mastery',
    description: 'Expanded to full-stack development by learning Node.js, Express.js, and MongoDB. Built complete web applications with authentication, databases, and RESTful APIs.',
    position: 'left'
  },
  {
    year: '2023',
    title: 'Advanced Frontend & Tools',
    description: 'Mastered advanced React concepts, state management, and modern development tools. Started working with Tailwind CSS, GSAP animations, and modern deployment practices.',
    position: 'right'
  },
  {
    year: '2024',
    title: 'AI & Python Learning',
    description: 'Currently exploring the fascinating world of Generative AI and Python programming. Building AI-powered applications and learning machine learning fundamentals.',
    position: 'left'
  }
];

const TimelineSection = () => {
  return (
    <TimelineContainer id="timeline-section">
      <div className="container mx-auto px-4">
        <Typography 
          variant="h2" 
          className="text-center mb-4"
          sx={{ 
            background: 'linear-gradient(45deg, var(--mui-palette-primary-main), var(--mui-palette-secondary-main))',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}
        >
          My Learning Journey
        </Typography>
        
        <Typography 
          variant="body1" 
          color="text.secondary"
          className="text-center mb-12 max-w-2xl mx-auto"
          sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}
        >
          From curiosity to expertise - here's how my development journey has evolved over the years
        </Typography>

        <TimelineWrapper>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} position={item.position}>
              <TimelineDot />
              <TimelineContent position={item.position}>
                <YearBadge>{item.year}</YearBadge>
                <Typography 
                  variant="h5" 
                  color="primary"
                  sx={{ fontWeight: 600, mb: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  {item.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </div>
    </TimelineContainer>
  );
};

export default TimelineSection;