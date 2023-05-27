export const getDesignTokens = (mode) => ({
  palette: {
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
    },
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#007FFF'
          },
          divider: 'rgba(0, 0, 0, 0.12)',
          text: {
            primary: '#111D4A',
            secondary: 'rgba(0, 0, 0, 0.87)'
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
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#8789C0'
          },
          divider: 'rgba(0, 0, 0, 0.12)',
          background: {
            default: '#111D4A',
            paper: '#f9f9f9'
          },
          text: {
            primary: '#fff',
            secondary: '#8789C0'
          },
          secondary: {
            main: '#8789c0'
          },
          warning: {
            main: '#d5573b'
          }
        })
  }
});

// export const theme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#007FFF'
//     },
//     secondary: {
//       main: '#8789c0'
//     },
//     warning: {
//       main: '#d5573b'
//     },
//     background: {
//       default: '#f9f9f9'
//     }
//   },
//   props: {
//     MuiAppBar: {
//       color: 'default'
//     }
//   },
//   components: {
//     MuiAppBar: {
//       defaultProps: {
//         color: 'default'
//       }
//     },
//     MuiButton: {
//       variants: [
//         {
//           props: { variant: 'menu' },
//           style: {
//             textTransform: 'none',
//             color: 'secondary'
//           }
//         }
//       ]
//     }
//   },
//   typography: {
//     fontFamily: 'Roboto'
//   }
// });

// export const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#007FFF'
//     },
//     secondary: {
//       main: '#8789c0'
//     },
//     warning: {
//       main: '#d5573b'
//     },
//     background: {
//       default: '#f9f9f9'
//     }
//   },
//   props: {
//     MuiAppBar: {
//       color: 'default'
//     }
//   },
//   components: {
//     MuiAppBar: {
//       defaultProps: {
//         color: 'default'
//       }
//     },
//     MuiButton: {
//       variants: [
//         {
//           props: { variant: 'menu' },
//           style: {
//             textTransform: 'none',
//             color: 'secondary'
//           }
//         }
//       ]
//     }
//   },
//   typography: {
//     fontFamily: 'Roboto'
//   }
// });
