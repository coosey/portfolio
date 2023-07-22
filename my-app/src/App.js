import './assets/css/App.css';
import './assets/css/tailwind.css';
import { Routes, Route } from 'react-router-dom';
import {
  About,
  Home,
  Projects,
} from './pages/index';
import {
  NavBar,
  Footer,
} from './components/index';

function App() {
  return (
    <div class="bg-secondary m-auto font-pd-400">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
