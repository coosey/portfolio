import {
  Hero,
  Header,
  Project,
} from '../../components/index.js';

export const Home = () => {
  // Home Page: container for every page
  return (
    <div className="container m-auto">
      <Header />
      <Hero />
      <Project />
    </div>
  )
};