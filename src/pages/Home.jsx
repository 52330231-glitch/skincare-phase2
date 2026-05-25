import { Link } from 'react-router-dom';
import heroBg from '../assets/hero.png'; 

function Home() {
  return (
    <div 
      className="main-wrapper"
      style={{ 
        backgroundImage: `linear-gradient(rgba(252, 228, 236, 0.3), rgba(252, 228, 236, 0.3)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight:'150vh',
        width: '100%'
      }}
    >
      <main>
        <section 
          className="container-fluid p-0 home-hero d-flex flex-column justify-content-center align-items-center" 
          style={{ minHeight: '80vh' }}
        > 
          <div className="container text-center hero-content">
            <h1 className="display-3">Reveal Your Natural Radiance</h1>
            <p className="lead">Your journey to healthy, glowing skin starts here with expert tips and routine</p>
            <Link to="/gllow-challenge" className="btn btn-primary cta-btn">Explore More</Link>
          </div>
        </section>

        <section className="info-section container text-center py-5 bg-white bg-opacity-75 rounded">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="mb-4">Why Skin Care Matters?</h2>
              <p>Taking care of your skin is more than just beauty; it is about health and self-love. We provide guides tailored for every skin type.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;