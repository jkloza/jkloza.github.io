import { useState, useMemo, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ResponsiveAppBar from './organisms/app-bar';
import { PageRoutes } from './navigation/routes';
import { ThemeProvider, createTheme, useTheme, Box, IconButton } from '@mui/material';
import { getDesignTokens } from './mui/theme';
import { Grid } from '@mui/material';
import { ThemeModeContext } from './context';

function MyApp() {
  const theme = useTheme();
  const { colorMode } = useContext(ThemeModeContext);
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3
      }}>
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? 'dark' : 'light'}
      </IconButton>
    </Box>
  );
}

function App() {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeModeContext.Provider value={{ colorMode, mode }}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <nav>
              <ResponsiveAppBar />
            </nav>
            <Grid
              container
              justifyContent="center"
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                p: 3
              }}>
              <PageRoutes />
            </Grid>
          </div>
        </Router>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
