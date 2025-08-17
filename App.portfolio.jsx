import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import theme from './src/theme';
import Navigation from './src/components/Navigation';
import HeroSection from './src/components/HeroSection';
import AboutSection from './src/components/AboutSection';
import SkillsSection from './src/components/SkillsSection';
import ProjectsSection from './src/components/ProjectsSection';
import TimelineSection from './src/components/TimelineSection';
import ContactSection from './src/components/ContactSection';
import Footer from './src/components/Footer';

const createEmotionCache = () => {
  return createCache({
    key: "mui",
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

function App() {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="min-h-screen">
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <TimelineSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;