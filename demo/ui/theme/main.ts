import { createTheme } from '@material-ui/core/styles';
import createSpacing from '@material-ui/core/styles/createSpacing';

import { buttonConfig } from './overrides/button';

const spacing = createSpacing(8);

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF452b',
    },
    secondary: {
      main: '#263238',
    },
    error: {
      main: '#0288d1',
    },
    background: {
      default: '#ffff',
    },
  },

  typography: {
    fontFamily: `"CircularPro", "Gill Sans", "Gill Sans MT", "Helvetica Neue", Helvetica, Arial, sans-serif`,
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
