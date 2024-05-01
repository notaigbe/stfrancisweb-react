import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'
import '../assets/css/style.css';
import '../assets/js/main'

import Header from '../components/header'
import Hero from '../components/hero';
import About from '../components/about';
import Counts from '../components/counts';
import Tabs from '../components/tabs';
import Services from '../components/services';
import Gallery from '../components/gallery';
import Sermons from '../components/sermons';
import Churchgroup from '../components/churchgroups';
import Faq from '../components/faq';
import Team from '../components/team';
import Contact from '../components/contact';
import Footer from '../components/footer';

function HomePage() {
    return (
      <div className="App">
        <Header />
          <Hero />
          <main id="main">
          <About />
          <Team />
          <Counts />
          <Tabs />
          <Services />
          <Gallery />
          <Sermons />
          <Churchgroup />
          <Faq />
          
          <Contact />
        </main>
        <Footer />
      </div>
    );
  }
  
  export default HomePage;
  