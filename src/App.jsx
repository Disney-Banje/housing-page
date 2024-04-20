import './App.css';
import Nav from './Nav';
import HeroPage from './HeroPage';
import FindHome from './FindHome';
import { services } from './ServiceData';
import Offers from './Offers';
import Interior from './Interior';
import Register from './Register';
import Footer from './Footer';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section>
          <HeroPage />
        </section>
        <section>
          <FindHome />
        </section>
        <section>
          {
            services.map((service, index) => (
              <Offers
              list={service}
              key={index}
              number={index}
              />
            ))
          }
        </section>
        <section>
          <Interior />
        </section>
        <section className='register-form'>
          <Register />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App
