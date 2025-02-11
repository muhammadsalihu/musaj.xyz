import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio'
import Agent from './components/Agent';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/agent" element={<Agent />} />
      <Route path="/projects" element={<ProjectsSection />} />
    </Routes>
  </Router>
  )
}

export default App