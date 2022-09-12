import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import ResponsiveAppBar from "./organisms/app-bar";
import { PageRoutes } from "./navigation/routes";
import { ThemeProvider } from '@mui/material'
import { theme } from './mui/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <div>
      <nav>
      <ResponsiveAppBar />
      </nav>
      <PageRoutes />
    </div>
  </Router>
  </ThemeProvider>
  )
}

export default App;
