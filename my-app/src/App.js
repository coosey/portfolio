import './assets/css/App.css';
import './assets/css/tailwind.css';
import { Routes, Route } from 'react-router-dom';
import {
  NavBar,
  Footer,
  Loader,
} from './components/index';
import { Suspense, lazy, useEffect, useState } from 'react';

const Home = lazy(() => import('./pages/Home/index'));
const About = lazy(() => import('./pages/About/index'));
const Experience = lazy(() => import('./pages/Experience/index'));

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
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
