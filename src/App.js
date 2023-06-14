import { useState, useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ResponsiveAppBar from './organisms/app-bar';
import { PageRoutes } from './navigation/routes';
import { ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from './mui/theme';
import { Grid } from '@mui/material';
import { ThemeModeContext } from './context';
import CssBaseline from '@mui/material/CssBaseline';

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
        <CssBaseline />
        <Router>
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
              color: 'text.primary'
            }}>
            <PageRoutes />
          </Grid>
        </Router>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
