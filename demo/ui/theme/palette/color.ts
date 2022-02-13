import {
  PaletteColor,
  ColorPartial,
} from '@material-ui/core/styles/createPalette';

//default houm colors

export const primary: PaletteColor = {
  main: '#FF452B',
  light: '#FF9D8F',
  dark: '#C21800',
  contrastText: '#fff',
};

export const secondary: Omit<PaletteColor, 'contrastText'> = {
  main: '#FEE9E8',
  light: '#B0BEC5',
  dark: '#2097F6',
};

interface GreyPalette extends ColorPartial {
  '10': string;
}

export const grey: GreyPalette = {
  '10': '#F2F3F4',
  '50': '#ECEFF1',
  '100': '#CFD8DC',
  '200': '#B0BEC5',
  '300': '#90A4AE',
  '400': '#78909C',
  '500': '#607D8B',
  '600': '#546E7A',
  '700': '#455A64',
  '800': '#37474F',
  '900': '#263238',
};
export const v2Colors = {
  primary: { light: '#FFC9C2', main: '#FEF1F0' },
  secondary: { main: '#263238', light: '#ECEFF1' },
  grey: {
    main: '#F7F8FC',
  },
};

const Colors = {
  primary,
  secondary,
  grey,
  v2Colors,
};

export default Colors;
