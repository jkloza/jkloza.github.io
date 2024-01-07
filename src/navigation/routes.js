import { Routes, Route } from 'react-router-dom';
import { About, Home, Portfolio, FunStuff } from '../pages';

export function PageRoutes() {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/fun-stuff" element={<FunStuff />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
