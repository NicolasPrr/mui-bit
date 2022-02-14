import { createTheme } from '@material-ui/core/styles';
import { PaletteColor } from '@material-ui/core/styles/createPalette';

import { buttonConfig } from './overrides/button';

import { primary, secondary, grey, v2Colors } from './palette/color';

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    status?: {
      danger: React.CSSProperties['color'];
    };
  }
  interface ThemeOptions {
    status?: {
      danger: React.CSSProperties['color'];
    };
  }
}
declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    v2Primary?: PaletteColor;
    v2Secondary?: PaletteColor;
    v2Grey?: PaletteColor;
  }

  interface PaletteOptions {
    v2Primary?: PaletteColor;
    v2Secondary?: PaletteColor;
    v2Grey?: PaletteColor;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary,
    secondary,
    grey,
    // v2Primary: v2Colors.primary,
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    allVariants: {
      color: grey[900],
    },

    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  overrides: {
    MuiButton: buttonConfig,
  },
});

export default theme;
