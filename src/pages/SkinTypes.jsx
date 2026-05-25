import skinImage from '../assets/skin.png';

function SkinTypes() {
  const skins = [
    {
      id: 'oily',
      title: 'Oily Skin',
      description: 'Characterized by excess sebum production, enlarged pores, and a shiny complexion. It requires lightweight, oil-free hydration.',
      tips: 'Use salicylic acid cleansers and oil-free gel moisturizers.'
    },
    {
      id: 'dry',
      title: 'Dry Skin',
      description: 'Feels tight, rough, and may have flaky areas due to a lack of moisture and natural oils. It needs deep, rich hydration.',
      tips: 'Look for hyaluronic acid, ceramides, and rich cream moisturizers.'
    },
    {
      id: 'combination',
      title: 'Combination Skin',
      description: 'Features a mix of oily areas (the T-zone) and dry or normal areas on the cheeks.',
      tips: 'Gentle balancing cleansers and multi-moisturizing (gel for T-zone, cream for cheeks).'
    },
    {
      id: 'normal',
      title: 'Normal Skin',
      description: 'Balanced skin that is neither too oily nor too dry. It has a radiant complexion and few imperfections.',
      tips: 'Maintain its natural balance with a gentle cleanser and light moisturizer.'
    },
    {
      id: 'sensitive',
      title: 'Sensitive Skin',
      description: 'Highly reactive and prone to redness, itching, or irritation. It requires a minimalist approach.',
      tips: 'Look for calming ingredients like Aloe Vera and Ceramides. Always perform a patch test.'
    }
  ];

  return (
    <div className="skin-types-page py-5">
      <div className="container">
        <div className="text-center mb-5 p-5" style={{ 
          backgroundImage: `url(${skinImage})`,
          height:'500px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 className="display-4 fw-bold text-dark">Discover Your Skin Type</h1>
        </div>

    
        <div className="row g-4">
          {skins.map((skin) => (
            <div className="col-md-6" key={skin.id}>
              <div className={`card skin-card bg-${skin.id}`}>
                <div className="card-body p-4">
                  <h3 className="card-title h4 mb-3">{skin.title}</h3>
                  <p className="card-text mb-4">{skin.description}</p>
                  <div className="p-3 rounded bg-white bg-opacity-50">
                    <strong className="text-dark">💡 Quick Care Tip:</strong>
                    <p className="small mb-0 mt-1">{skin.tips}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkinTypes;