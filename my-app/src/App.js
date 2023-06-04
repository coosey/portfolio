import './css/App.css';
import './css/tailwind.css';
import { Routes, Route } from 'react-router-dom';
import {
  About,
  Home,
  Projects,
} from './pages/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
