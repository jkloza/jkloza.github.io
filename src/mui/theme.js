import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007FFF'
    },
    secondary: {
      main: '#8789c0'
    },
    warning: {
      main: '#d5573b'
    },
    background: {
      default: '#f9f9f9'
    }
  },
  props: {
    MuiAppBar: {
      color: 'default'
    }
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'default'
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'menu' },
          style: {
            textTransform: 'none',
            color: 'secondary'
          }
        }
      ]
    }
  },
  typography: {
    fontFamily: 'Roboto'
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#007FFF'
    },
    secondary: {
      main: '#8789c0'
    },
    warning: {
      main: '#d5573b'
    },
    background: {
      default: '#f9f9f9'
    }
  },
  props: {
    MuiAppBar: {
      color: 'default'
    }
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'default'
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'menu' },
          style: {
            textTransform: 'none',
            color: 'secondary'
          }
        }
      ]
    }
  },
  typography: {
    fontFamily: 'Roboto'
  }
});
