import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Career from './pages/Career';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career" element={<Career />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
