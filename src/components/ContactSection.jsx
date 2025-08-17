import React, { useState } from 'react';
import { Typography, Stack, Box, TextField, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: '6rem 0',
  background: theme.palette.background.default
}));

const GlassCard = styled(Box)(({ theme }) => ({
  background: `${theme.palette.background.paper}90`,
  backdropFilter: 'blur(20px)',
  borderRadius: '24px',
  border: `1px solid ${theme.palette.primary.main}20`,
  padding: '3rem',
  boxShadow: `0 8px 32px ${theme.palette.primary.main}10`,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)'
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    background: `${theme.palette.background.paper}50`,
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: `${theme.palette.background.paper}70`,
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main
      }
    },
    '&.Mui-focused': {
      background: `${theme.palette.background.paper}80`,
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: '2px'
      }
    }
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main
  }
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '12px 32px',
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 25px ${theme.palette.primary.main}40`
  }
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: `${theme.palette.background.paper}80`,
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.primary.main}20`,
  color: theme.palette.primary.main,
  fontSize: '1.5rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px) scale(1.05)',
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    color: 'white',
    boxShadow: `0 8px 25px ${theme.palette.primary.main}30`
  }
}));

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const socialLinks = [
    {
      icon: faGithub,
      href: 'https://github.com/rajeshkumarpasi',
      label: 'GitHub'
    },
    {
      icon: faLinkedin,
      href: 'https://linkedin.com/in/rajeshkumarpasi',
      label: 'LinkedIn'
    },
    {
      icon: faEnvelope,
      href: 'mailto:rajeshkumarpasi@email.com',
      label: 'Email'
    }
  ];

  return (
    <ContactContainer id="contact-section">
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
          Let's Work Together
        </Typography>
        
        <Typography 
          variant="body1" 
          color="text.secondary"
          className="text-center mb-12 max-w-2xl mx-auto"
          sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}
        >
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <GlassCard>
            <Typography 
              variant="h4" 
              color="primary"
              sx={{ fontWeight: 600, mb: 3 }}
            >
              Send me a message
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <StyledTextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  variant="outlined"
                />
                
                <StyledTextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  variant="outlined"
                />
                
                <StyledTextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  error={!!errors.message}
                  helperText={errors.message}
                  variant="outlined"
                />
                
                <SubmitButton
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Send Message
                </SubmitButton>
              </Stack>
            </form>
          </GlassCard>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <GlassCard>
              <Typography 
                variant="h4" 
                color="primary"
                sx={{ fontWeight: 600, mb: 3 }}
              >
                Get in touch
              </Typography>
              
              <Typography 
                variant="body1" 
                color="text.primary"
                sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 4 }}
              >
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development. Feel free to 
                reach out through any of the channels below.
              </Typography>
              
              <Typography 
                variant="h6" 
                color="primary"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Connect with me:
              </Typography>
              
              <Stack direction="row" spacing={2} className="mb-6">
                {socialLinks.map((social, index) => (
                  <SocialButton
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </SocialButton>
                ))}
              </Stack>
              
              <Box className="space-y-3">
                <div className="flex items-center gap-3">
                  <Box sx={{ color: 'primary.main', fontSize: '1.2rem' }}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Box>
                  <Typography variant="body1" color="text.primary">
                    rajeshkumarpasi@email.com
                  </Typography>
                </div>
                
                <div className="flex items-center gap-3">
                  <Box sx={{ color: 'primary.main', fontSize: '1.2rem' }}>
                    <FontAwesomeIcon icon={faGithub} />
                  </Box>
                  <Typography variant="body1" color="text.primary">
                    github.com/rajeshkumarpasi
                  </Typography>
                </div>
                
                <div className="flex items-center gap-3">
                  <Box sx={{ color: 'primary.main', fontSize: '1.2rem' }}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Box>
                  <Typography variant="body1" color="text.primary">
                    linkedin.com/in/rajeshkumarpasi
                  </Typography>
                </div>
              </Box>
            </GlassCard>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};

export default ContactSection;