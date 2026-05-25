



function Contact() {
  return (
    <div className="page container">
          <h1>Contact Us </h1>
          <p className="mb-5">
            Have questions about your skin journey? We're here to help!
          </p>

          <form className="contact-form text-start">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Select Your Skin Type</label>
              <select className="form-select">
                <option value="">-- Choose your skin type --</option>
                <option value="oily">Oily</option>
                <option value="dry">Dry</option>
                <option value="combination">Combination</option>
                <option value="sensitive">Sensitive</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      

  );
}

export default Contact;