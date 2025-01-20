import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio'
import Agent from './components/Agent';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/agent" element={<Agent />} />
    </Routes>
  </Router>
  )
}

export default App