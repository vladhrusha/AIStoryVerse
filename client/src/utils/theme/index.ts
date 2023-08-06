import { createTheme, ThemeOptions } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';
import typography from './typography';
import components from './components';
import palette from './palette';

const getTheme = () => {
  const breakpoints = createBreakpoints({});

  const options: ThemeOptions = {
    palette,
    typography: typography(breakpoints),
    components: components(breakpoints),
  };

  return createTheme(options);
};

export default getTheme;
