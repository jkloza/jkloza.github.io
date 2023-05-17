import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './organisms/app-bar';
import { PageRoutes } from './navigation/routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './mui/theme';
import { Grid } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <nav>
            <ResponsiveAppBar />
          </nav>

          <Grid
            container
            justifyContent="center"
            style={{
              height: 660,
              background: 'linear-gradient(180deg, white 50%, #F4D06F 50%)'
            }}>
            <PageRoutes />
          </Grid>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
