import {
  Hero,
  Header,
  Project,
} from '../../components/index.js';

export const Home = () => {
  // Home Page: container for every page
  return (
    <div>
      <Header />
      <Hero />
      <Project />
    </div>
  )
};