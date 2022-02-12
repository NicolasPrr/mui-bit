import { Overrides } from '@material-ui/core/styles/overrides';
import createSpacing from '@material-ui/core/styles/createSpacing';

const spacing = createSpacing(8);

export const buttonConfig: Overrides['MuiButton'] = {
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
  contained: {
    boxShadow: 'none',
  },
  root: {
    borderRadius: '100px',
    height: '40px',
    fontSize: '16px',
    padding: spacing(9 / 8, 13 / 2),
    lineHeight: '22px',
  },
  outlined: {
    height: '40px',
    fontSize: '16px',
    padding: spacing(9 / 8, 13 / 2),
    lineHeight: '22px',
  },
  outlinedSecondary: {
    color: '#263238',
    backgroundColor: '#ECEFF1',
    borderWidth: '0px',
  },
  containedPrimary: {
    '&:hover': {
      backgroundColor: '#FFC9C2',
      color: '#FF452B',
    },
  },
  containedSecondary: {
    '&:hover': {
      backgroundColor: '##ECEFF1',
      color: '#263238',
    },
  },
};
