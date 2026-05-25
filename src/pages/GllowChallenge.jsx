
import { Link } from 'react-router-dom';

function GllowChallenge() {
  return (
    <div className="glow-page">
      
      <div className="container py-3">
        <div className="top-back-nav">
          <Link to="/" className="back-home-btn text-decoration-none">← Back to Home</Link>
        </div>
      </div>

    
      <section className="glow-detail-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <img 
                src="src/assets/glow.png" 
                alt="Medicube Glass Glow" 
                className="img-fluid rounded shadow-sm main-glow-img" 
              />
            </div>
            <div className="col-md-6">
              <div className="glow-info">
                <h1 className="display-5 fw-bold" style={{ color: '#D81B60' }}>The 7-Day Glass Glow Set</h1>
                <p className="subtitle lead mb-4">Your shortcut to radiant, poreless skin.</p>
                
                <div className="product-benefits mb-4 p-4 rounded" style={{ backgroundColor: '#FCE4EC' }}>
                  <h3 className="h5 fw-bold mb-3">What’s inside the set?</h3>
                  <ul className="list-unstyled">
                    <li className="mb-2"><strong>Zero Foam Cleanser:</strong> To deep clean pores without drying.</li>
                    <li className="mb-2"><strong>Zero Pore Pad:</strong> The secret to smooth skin texture.</li>
                    <li className="mb-2"><strong>Collagen Night Wrapping Mask:</strong> To boost elasticity while you sleep.</li>
                    <li className="mb-2"><strong>Jelly Cream:</strong> For that instant "Glass Skin" finish.</li>
                  </ul>
                </div>

                <div className="how-to-use p-3 border-start border-4" style={{ borderColor: '#D81B60' }}>
                  <h3 className="h5 fw-bold">The 7-Day Routine:</h3>
                  <p className="mb-0">Use the full set twice daily. By <b>Day 3</b>, you'll notice smoother texture. By <b>Day 7</b>, enjoy a visible natural radiance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      
  );
}

export default GllowChallenge;