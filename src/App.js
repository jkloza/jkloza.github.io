import { BrowserRouter as Router } from 'react-router-dom';
import ResponsiveAppBar from './organisms/app-bar';
import { PageRoutes } from './navigation/routes';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './mui/theme';
import { Grid } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div>
          <nav>
            <ResponsiveAppBar />
          </nav>

          <Grid
            container
            justifyContent="center"
            style={{
              height: 760,
              background: '#111D4A'
            }}>
            <PageRoutes />
          </Grid>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
