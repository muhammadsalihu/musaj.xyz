import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio'
import Agent from './components/Agent';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/agent" element={<Agent />} />
      <Route path="/projects" element={<ProjectsSection />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </Router>
  )
}

export default App