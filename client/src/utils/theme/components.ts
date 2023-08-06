import { Components } from '@mui/material/styles/components';
import { Breakpoints } from '@mui/system/createTheme/createBreakpoints';
import { openSansFont } from './typography';

const components = (breakpoints: Breakpoints): Components => ({
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        fontSize: '62.5%',
      },

      body: (theme) => ({
        fontFamily:
          'Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        fontSize: '1.4rem',
        lineHeight: '1.9rem',
        padding: 0,
        margin: 0,
        backgroundColor: theme.palette.background.default,
      }),

      a: {
        color: 'inherit',
        textDecoration: 'none',
      },

      button: {
        fontFamily: openSansFont,
        border: 'none',
        padding: 0,
        margin: 0,
        backgroundColor: 'transparent',
        cursor: 'pointer',

        '&:hover': {
          border: 'none',
          backgroundColor: 'transparent',
        },
      },

      input: {
        "&:[type='password']::-ms-reveal": {
          display: 'none',
        },
        "&:[type='password']::-ms-clear": {
          display: 'none',
        },
        "&:[type='number']::-webkit-inner-spin-button": {
          webkitAppearance: 'none',
        },
      },

      textarea: {
        fontFamily:
          'Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
  },
});

export default components;
