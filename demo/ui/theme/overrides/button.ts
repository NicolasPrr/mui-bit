import { Overrides } from '@material-ui/core/styles/overrides';
import createSpacing from '@material-ui/core/styles/createSpacing';

import { v2Colors, primary } from '../palette/color';

const spacing = createSpacing(8);

export const buttonConfig: Overrides['MuiButton'] = {
  //sizes
  sizeLarge: {
    height: '48px',
    fontSize: '18px',
    padding: spacing(3 / 2, 29 / 4),
    lineHeight: '24px',
  },
  sizeSmall: {
    height: '32px',
    fontSize: '14px',
    padding: spacing(3 / 4, 4),
    lineHeight: '20px',
  },
  root: {
    borderRadius: '100px',
    height: '40px',
    fontSize: '16px',
    padding: spacing(9 / 8, 13 / 2),
    lineHeight: '22px',
  },
  contained: {
    boxShadow: 'none',
  },

  containedPrimary: {
    '&:active': {
      color: 'white',
      backgroundColor: primary.dark,
    },
    '&:hover': {
      backgroundColor: v2Colors.primary.light,
      color: primary.main,
    },
  },

  containedSecondary: {
    backgroundColor: v2Colors.secondary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: v2Colors.secondary.light,
      color: v2Colors.secondary.main,
    },
    '&:active': {
      border: `0.5px solid ${v2Colors.secondary.main}`,
    },
  },
  outlined: {
    height: '40px',
    fontSize: '16px',
    padding: spacing(9 / 8, 13 / 2),
    lineHeight: '22px',
  },
  outlinedPrimary: {
    '&:hover': {
      backgroundColor: v2Colors.primary.main,
      borderWidth: 0,
    },
    '&:active': {
      borderWidth: 1,
    },
  },
  outlinedSecondary: {
    color: v2Colors.secondary.main,
    border: `0.5px solid ${v2Colors.secondary.main}`,
    '&:hover': {
      backgroundColor: v2Colors.grey.main,
      color: v2Colors.secondary.main,
      borderWidth: 0,
    },
    '&:active': {
      backgroundColor: v2Colors.grey.main,
      border: `0.5px solid ${v2Colors.secondary.main}`,
    },
    //disabled example
    // "&$disabled": {
    //   backgroundColor: "red",
    //   color: "white",
    // },
  },
};
