import {
  Routes,
  Route
} from "react-router-dom";
import { About, Home, Resume } from '../pages'


export function PageRoutes(){
  return (
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<Home />} />
      </Routes>
  )
}
