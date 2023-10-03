import {
  Hero,
  Header,
  Project,
  Skills,
} from '../../components/index.js';

const Home = () => {

  return (
    <div className="container m-auto">
      <Header />
      <Hero />
      <Skills />
      <Project />
    </div>
  )
};

export default Home;