import { makeStyles, Theme } from '@material-ui/core';

interface Props {
  color: string;
}
const useThemecompositionsStyles = makeStyles<Theme, Props>((theme: Theme) => ({
  box: {
    color: ({color}) => theme.palette.getContrastText(color),
    backgroundColor: ({ color }) => color,
    fontSize: theme.typography.pxToRem(12),
    width: 150,
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useThemecompositionsStyles;
