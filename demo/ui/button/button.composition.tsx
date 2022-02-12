import React, { useMemo } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { customTheme } from '@company/scope.theme';
import { Button } from './button';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';

const ThemeWrapper = ({ children }) => {
  console.log({ customTheme });
  const custom = useMemo(() => customTheme, []);
  return <ThemeProvider theme={custom}>{children}</ThemeProvider>;
};

export const DefaultButton = () => (
  <ThemeWrapper>
    <Button>Hola mundo</Button>
  </ThemeWrapper>
);

export const SmallButton = () => (
  <ThemeWrapper>
    <Button size="small"> Continuar </Button>
  </ThemeWrapper>
);

export const BasicButton = () => (
  <ThemeWrapper>
    <Button> Continuar</Button>
  </ThemeWrapper>
);

export const BigButton = () => (
  <ThemeWrapper>
    <Button size="large"> Continuar</Button>
  </ThemeWrapper>
);

export const Secondary = () => (
  <ThemeWrapper>
    <Button color="secondary"> Continuar</Button>
  </ThemeWrapper>
);

export const Tetriary = () => (
  <ThemeWrapper>
    <Button variant="outlined"> Continuar</Button>
  </ThemeWrapper>
);

export const TetriarySmall = () => (
  <ThemeWrapper>
    <Button variant="outlined" size="small">
      {' '}
      Continuar
    </Button>
  </ThemeWrapper>
);

export const TetriarySecondary = () => (
  <ThemeWrapper>
    <Button variant="outlined" size="small" color="secondary">
      {' '}
      Continuar
    </Button>
  </ThemeWrapper>
);

export const TetriarySecondaryIcon = () => (
  <ThemeWrapper>
    <Button
      startIcon={<KeyboardVoiceIcon />}
      color="secondary"
      variant="outlined"
      size="small"
    >
      Continuar
    </Button>
  </ThemeWrapper>
);
export const SecondarytWithIcon = () => (
  <ThemeWrapper>
    <Button startIcon={<KeyboardVoiceIcon />} color="secondary" size="small">
      Continuar
    </Button>
  </ThemeWrapper>
);

export const SecondarytWithOtherIcon = () => (
  <ThemeWrapper>
    <Button startIcon={<AttachFileIcon />} color="secondary" size="small">
      Adjuntar
    </Button>
  </ThemeWrapper>
);

export const DefaultWithIcon = () => (
  <ThemeWrapper>
    <Button startIcon={<KeyboardVoiceIcon />}>Continuar</Button>
  </ThemeWrapper>
);
