import React from 'react';
import { ButtonProps } from '@material-ui/core';

import MuIButton from '@material-ui/core/Button';

export interface Props extends ButtonProps {
  variant?: ButtonProps['variant'];
  color?: ButtonProps['color'];
  disableElevation?: boolean;
}

export const Button = ({
  variant = 'contained',
  color = 'primary',
  disableElevation = true,
  ...props
}: Props) => (
  <MuIButton
    color={color}
    variant={variant}
    disableElevation={disableElevation}
    {...props}
    />
);
