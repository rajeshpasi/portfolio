import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useColorScheme } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  background: scrolled 
    ? `${theme.palette.background.paper}95` 
    : 'transparent',
  backdropFilter: scrolled ? 'blur(20px)' : 'none',
  boxShadow: scrolled 
    ? `0 4px 20px ${theme.palette.primary.main}10` 
    : 'none',
  border: scrolled 
    ? `1px solid ${theme.palette.primary.main}20` 
    : 'none',
  transition: 'all 0.3s ease',
  padding: '0.5rem 0',
  [theme.breakpoints.down('md')]: {
    padding: '0.25rem 0'
  }
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '1rem',
  padding: '8px 16px',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: `${theme.palette.primary.main}15`,
    color: theme.palette.primary.main,
    transform: 'translateY(-1px)'
  }
}));

const ThemeToggleButton = styled(IconButton)(({ theme }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: `${theme.palette.background.paper}80`,
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.primary.main}20`,
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    background: theme.palette.primary.main,
    color: 'white'
  }
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '& .hamburger-line': {
    width: '25px',
    height: '3px',
    backgroundColor: 'currentColor',
    margin: '3px 0',
    transition: 'all 0.3s ease',
    borderRadius: '2px'
  }
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: 700,
  fontSize: '1.5rem',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}));

const navItems = [
  { label: 'Home', href: '#hero-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Skills', href: '#skills-section' },
  { label: 'Projects', href: '#projects-section' },
  { label: 'Journey', href: '#timeline-section' },
  { label: 'Contact', href: '#contact-section' }
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Stack spacing={2}>
        <Logo 
          variant="h6" 
          onClick={() => handleNavClick('#hero-section')}
          sx={{ textAlign: 'center', mb: 2 }}
        >
          RKP
        </Logo>
        {navItems.map((item) => (
          <Button
            key={item.label}
            onClick={() => handleNavClick(item.href)}
            fullWidth
            sx={{ 
              justifyContent: 'flex-start',
              textTransform: 'none',
              fontSize: '1rem'
            }}
          >
            {item.label}
          </Button>
        ))}
        <ThemeToggleButton onClick={toggleTheme} sx={{ alignSelf: 'center', mt: 2 }}>
          {mode === 'light' ? '🌙' : '☀️'}
        </ThemeToggleButton>
      </Stack>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="fixed" scrolled={scrolled}>
        <div className="container mx-auto px-4">
          <Toolbar sx={{ 
            justifyContent: 'space-between', 
            minHeight: { xs: '56px !important', md: '64px !important' },
            padding: { xs: '0 8px', md: '0 16px' }
          }}>
            {/* Logo */}
            <Logo onClick={() => handleNavClick('#hero-section')}>
              RKP
            </Logo>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <NavButton
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </NavButton>
              ))}
              <ThemeToggleButton onClick={toggleTheme} sx={{ ml: 1 }}>
                {mode === 'light' ? '🌙' : '☀️'}
              </ThemeToggleButton>
            </Box>

            {/* Mobile Menu Button */}
            <MobileMenuButton
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <Box>
                <div className="hamburger-line" />
                <div className="hamburger-line" />
                <div className="hamburger-line" />
              </Box>
            </MobileMenuButton>
          </Toolbar>
        </div>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            background: (theme) => `${theme.palette.background.paper}95`,
            backdropFilter: 'blur(20px)'
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </>
  );
};

export default Navigation;