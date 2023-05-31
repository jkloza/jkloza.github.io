import { Routes, Route } from 'react-router-dom';
import { About, Home, Portfolio } from '../pages';

export function PageRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
