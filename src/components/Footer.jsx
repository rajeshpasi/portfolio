import React from 'react';
import { Typography, Stack, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const FooterContainer = styled(Box)(({ theme }) => ({
  padding: '3rem 0 2rem',
  background: `linear-gradient(135deg, 
    ${theme.palette.background.paper} 0%, 
    ${theme.palette.primary.main}05 100%)`,
  borderTop: `1px solid ${theme.palette.primary.main}20`,
  [theme.breakpoints.down('md')]: {
    padding: '2rem 0 1.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.5rem 0 1rem'
  }
}));

const SocialButton = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: `${theme.palette.background.paper}80`,
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.primary.main}20`,
  color: theme.palette.text.secondary,
  fontSize: '1.2rem',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    background: theme.palette.primary.main,
    color: 'white',
    boxShadow: `0 4px 15px ${theme.palette.primary.main}30`
  }
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: faGithub,
      href: 'https://github.com/rajeshpasi',
      label: 'GitHub'
    },
    {
      icon: faLinkedin,
      href: 'https://www.linkedin.com/in/rajesh-kumar-pasi/',
      label: 'LinkedIn'
    },
    {
      icon: faEnvelope,
      href: 'mailto:rajeshpasi447@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <FooterContainer>
      <div className="container mx-auto px-4">
        <Stack spacing={3} alignItems="center">
          {/* Social Links */}
          <Stack direction="row" spacing={{ xs: 1.5, sm: 2 }}>
            {socialLinks.map((social, index) => (
              <SocialButton
                key={index}
                href={social.href}
                target={social.label === 'Email' ? undefined : "_blank"}
                rel={social.label === 'Email' ? undefined : "noopener noreferrer"}
                aria-label={social.label}
                onClick={social.label === 'Email' ? (e) => {
                  e.preventDefault();
                  window.location.href = 'mailto:rajeshpasi447@gmail.com';
                } : undefined}
              >
                <FontAwesomeIcon icon={social.icon} />
              </SocialButton>
            ))}
          </Stack>
          
          {/* Copyright */}
          <Typography 
            variant="body2" 
            color="text.secondary"
            className="text-center"
            sx={{ fontSize: '0.9rem' }}
          >
            © {currentYear} Rajesh Kumar Pasi. All rights reserved.
          </Typography>
          
          {/* Additional Info */}
          <Typography 
            variant="body2" 
            color="text.secondary"
            className="text-center"
            sx={{ fontSize: '0.8rem', opacity: 0.7 }}
          >
            Built with React.js, MUI, and Tailwind CSS
          </Typography>
        </Stack>
      </div>
    </FooterContainer>
  );
};

export default Footer;