import './assets/css/App.css';
import './assets/css/tailwind.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import {
  NavBar,
  Footer,
  Loader,
} from './components/index';
import { 
  Suspense,
  lazy,
  useEffect,
  useState,
  useLayoutEffect 
} from 'react';

const Home = lazy(() => import('./pages/Home/index'));
const About = lazy(() => import('./pages/About/index'));
const Experience = lazy(() => import('./pages/Experience/index'));
const Error = lazy(() => import('./pages/Error/index'));

function App() {
  const location = useLocation();
  // preloader on page load
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Scroll to top if path name changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="h-full w-[100%] bg-secondary">
      {loading ? (
        <div className="bg-gray-500">
          <Loader />
        </div>
      ) : (
        <>
          <NavBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="*" element={<Error />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </Suspense>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
