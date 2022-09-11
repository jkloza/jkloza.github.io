import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import ResponsiveAppBar from "./organisms/app-bar";
import { PageRoutes } from "./navigation/routes";

function App() {
  return (
    <Router>
    <div>
      <nav>
      <ResponsiveAppBar />
      </nav>
      <PageRoutes />
    </div>
  </Router>
  )
}

export default App;
