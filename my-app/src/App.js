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
  Loader,
} from './components/index';
import { useEffect, useState } from 'react';

function App() {
  // preloader on page load
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="h-full w-[100%]">
      {loading ? (
        <div className="bg-gray-500">
          <Loader />
        </div>
      ) : (
        <div className="bg-secondary m-auto">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
