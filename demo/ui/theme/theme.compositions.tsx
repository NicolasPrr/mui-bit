import React from 'react';
import { primary, secondary, grey, v2Colors } from './palette/color';

import useThemecompositionsStyles from './Theme.compositionsStyle';

const Box = ({ color, name }) => {
  const classes = useThemecompositionsStyles({ color });
  return (
    <div className={classes.box}>
      {name} - {color}
    </div>
  );
};

export const PrimaryColors = () => {
  return (
    <>
      {Object.entries(primary).map(([key, val]) => (
        <Box color={val} name={key} />
      ))}
    </>
  );
};

export const SecondaryColors = () => {
  return (
    <>
      {Object.entries(secondary).map(([key, val]) => (
        <Box color={val} name={key} />
      ))}
    </>
  );
};

export const GrayColors = () => {
  return (
    <>
      {Object.entries(grey).map(([key, val]) => (
        <Box color={val} name={key} />
      ))}
    </>
  );
};

export const V2PrimaryColor = () => {
  return (
    <>
      {Object.entries(v2Colors.primary).map(([key, val]) => (
        <Box name={key} color={val} />
      ))}
    </>
  );
};

export const V2SecondaryColor = () => {
  return (
    <>
      {Object.entries(v2Colors.secondary).map(([key, val]) => (
        <Box color={val} name={key} />
      ))}
    </>
  );
};
