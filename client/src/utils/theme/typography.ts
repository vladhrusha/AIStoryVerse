import { ThemeOptions } from '@mui/material/styles';
import { Breakpoints } from '@mui/system/createTheme/createBreakpoints';

export const montserratFont = ['Montserrat', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(',');
export const openSansFont = ['Open Sans', 'Roboto', 'Arial', 'sans-serif'].join(' ,');

const typography = (breakpoints: Breakpoints): ThemeOptions['typography'] => ({
  fontFamily: openSansFont,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  htmlFontSize: 10,
  fontSize: 14,

  body1: {
    fontSize: '1.4rem',
    lineHeight: 1.35,
  },
  body2: {
    fontSize: '1.6rem',
    lineHeight: 1.5,
  },
  button: {
    fontSize: '1.4rem',
    lineHeight: 1,
  },
  h1: {
    fontSize: '9.5rem',
    lineHeight: 1.35,
    [breakpoints.up('lg')]: {
      fontSize: '5.9rem',
    },
  },
  h2: {
    fontSize: '5.9rem',
    lineHeight: 1.35,
    [breakpoints.up('lg')]: {
      fontSize: '4.2rem',
    },
  },
  h3: {
    fontSize: '4.8rem',
    lineHeight: 1.35,
    [breakpoints.up('lg')]: {
      fontSize: '3.4rem',
    },
  },
  h4: {
    fontSize: '3.4rem',
    lineHeight: 1.35,
    [breakpoints.up('lg')]: {
      fontSize: '2.4rem',
    },
  },
  h5: {
    fontSize: '2.4rem',
    lineHeight: 1.35,
    [breakpoints.up('lg')]: {
      fontSize: '2.0rem',
    },
  },
  h6: {
    fontSize: '2rem',
    lineHeight: 1.35,
    [breakpoints.up('lg')]: {
      fontSize: '1.8rem',
    },
  },
  caption: {
    fontSize: '1.2rem',
    lineHeight: 1.4,
    margin: 0,
  },
  overline: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
});

export default typography;
