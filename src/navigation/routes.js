import { Routes, Route } from 'react-router-dom';
import { About, Home, Resume, Portfolio } from '../pages';

export function PageRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
