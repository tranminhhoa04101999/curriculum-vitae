import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/project" element={<Project />}></Route>
      <Route path="*" element={<Home to="/" replace />} />
    </Routes>
  );
}

export default App;
