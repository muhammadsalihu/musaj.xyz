import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import ProjectsSection from './components/ProjectsSection';
import Contact from './components/Contact';
import Blog from './components/Blog';
import InvoiceAgent from './components/InvoiceAgent';
import AdminApp from './admin/AdminApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/agent" element={<InvoiceAgent />} />
        <Route path="/my-admin/*" element={<AdminApp />} />
      </Routes>
    </Router>
  );
}

export default App;
