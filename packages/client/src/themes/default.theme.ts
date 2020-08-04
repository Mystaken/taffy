import { createMuiTheme } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const palette: PaletteOptions = {
  primary: {
    main: '#890900',
    contrastText: '#fff'
  },
  secondary: amber,
  text: {
    primary: '#4F4F4F',
    secondary: '#F2F2F2'
  }
};

const typography: TypographyOptions = {
  h1: {
    color: '#4F4F4F'
  },
  h2: {
    color: '#4F4F4F'
  },
  h3: { color: '#4F4F4F' },
  h4: { color: '#4F4F4F' },
  h5: { color: '#4F4F4F' },
  h6: { color: '#4F4F4F' },
  subtitle1: { color: '#F2F2F2' },
  subtitle2: { color: '#F2F2F2' },
  body1: { color: '#4F4F4F' },
  body2: { color: '#F2F2F2' },
  caption: { color: '#F2F2F2' },
  button: { color: '#F2F2F2' },
  overline: { color: '#F2F2F2' }
};

const defaultTheme = createMuiTheme({
  palette,
  typography
});

export default defaultTheme;
