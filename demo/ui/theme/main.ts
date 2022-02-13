import { createTheme } from '@material-ui/core/styles';

import { buttonConfig } from './overrides/button';

import { primary, secondary, grey } from './palette/color';


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary,
    secondary,
    grey,
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
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
