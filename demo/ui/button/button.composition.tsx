import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { customTheme } from '@nicolasparra/testhoumcolors.theme';
import { Button } from './button';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';

const ThemeWrapper = ({ children }) => {
  const [render, setRender] = useState(false);
  const custom = useMemo(() => customTheme, []);
  useEffect(() => {
    setTimeout(() => setRender(true), 100);
  }, []);
  if (!render) return <></>;
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

export const TetriarySecondaryIconDisabled = () => (
  <ThemeWrapper>
    <Button
      startIcon={<KeyboardVoiceIcon />}
      color="secondary"
      variant="outlined"
      size="small"
      disabled
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
)

export const CreatePropertySmall = () => (
  <ThemeWrapper>
    <Button size="small">Crear Propiedad</Button>
  </ThemeWrapper>
);

export const CreateProperty = () => (
  <ThemeWrapper>
    <Button variant="outlined">Crear Propiedad</Button>
  </ThemeWrapper>
);
