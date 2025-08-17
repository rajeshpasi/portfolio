import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
          contrastText: '#FFFFFF'
        },
        secondary: {
          main: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
          contrastText: '#FFFFFF'
        },
        info: {
          main: '#06B6D4',
          light: '#22D3EE',
          dark: '#0891B2',
          contrastText: '#FFFFFF'
        },
        text: {
          primary: '#1F2937',
          secondary: '#6B7280'
        },
        background: {
          default: '#FAFAFA',
          paper: '#FFFFFF'
        },
        grey: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        },
        common: {
          black: '#000000',
          white: '#FFFFFF'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#60A5FA',
          light: '#93C5FD',
          dark: '#3B82F6',
          contrastText: '#1F2937'
        },
        secondary: {
          main: '#A78BFA',
          light: '#C4B5FD',
          dark: '#8B5CF6',
          contrastText: '#1F2937'
        },
        info: {
          main: '#22D3EE',
          light: '#67E8F9',
          dark: '#06B6D4',
          contrastText: '#1F2937'
        },
        text: {
          primary: '#F9FAFB',
          secondary: '#9CA3AF'
        },
        background: {
          default: '#0F172A',
          paper: '#1E293B'
        },
        grey: {
          50: '#1E293B',
          100: '#334155',
          200: '#475569',
          300: '#64748B',
          400: '#94A3B8',
          500: '#CBD5E1',
          600: '#E2E8F0',
          700: '#F1F5F9',
          800: '#F8FAFC',
          900: '#FFFFFF'
        },
        common: {
          black: '#000000',
          white: '#FFFFFF'
        }
      }
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2
    },
    h2: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3
    },
    h3: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4
    },
    h4: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4
    },
    h5: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5
    },
    h6: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: 1.5
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6
    }
  },
  shape: {
    borderRadius: 12
  }
});

export default theme;