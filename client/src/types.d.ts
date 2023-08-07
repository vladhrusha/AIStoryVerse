import { SxProps, Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface NeutralPaletteOptions {
    light?: CSSProperties['color'];
    grey?: CSSProperties['color'];
  }

  interface Palette {
    neutral: NeutralPaletteOptions;
  }

  interface PaletteColor extends NeutralPaletteOptions {}

  interface PaletteOptions {
    neutral: NeutralPaletteOptions;
  }
}

declare namespace ElementStyles {
  interface ListStyles {
    [key: string]: SxProps<Theme> | undefined;
  }

  type ItemStyles = SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>);

  type CommonStyles =
    | ItemStyles
    | Array<SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)>;
}
