import {
  Hero,
  Header,
  Project,
} from '../../components/index.js';

const Home = () => {

  return (
    <div className="container m-auto">
      <Header />
      <Hero />
      <Project />
    </div>
  )
};

export default Home;