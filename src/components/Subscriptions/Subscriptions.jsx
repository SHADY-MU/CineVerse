import React from 'react'
import './Subscriptions.css'

function Subscriptions() {
  return (
    <div className='Subscriptions container py-5' id='Subscriptions'>
      <div className="text-center mb-5">
        <h2 className="display-4 fw-bold text-white mb-3" data-aos="fade-down" data-aos-duration="1000">
          Choose Your <span style={{color: "#ffcc00"}}>CineVerse</span> Plan
        </h2>
        <p className="lead text-white-50" data-aos="fade-up" data-aos-duration="1000">
          Unlock unlimited entertainment with our premium subscription tiers
        </p>
      </div>
      
      <div className="row g-4">
        {/* Essentials Plan */}
        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-right" data-aos-duration="1000">
          <div className='subscription-card card border border-3 border-primary bg-dark h-100 d-flex flex-column'>
            <div className="card-header text-center py-4">
              <div className="badge badge-primary position-absolute">Most Popular</div>
              <h4 className='text-uppercase h2 text-primary mb-3'>Essentials</h4>
              <div className="pricing">
                <span className="display-4 fw-bold">$9.99</span>
                <span className="text-white-50 fs-5">/month</span>
              </div>
              <p className="text-white-50 mt-2">Perfect for casual movie lovers</p>
            </div>
            <div className="card-body text-white p-4 d-flex flex-column flex-grow-1">
              <div className="features-section flex-grow-1">
                <h5 className="text-center mb-4 text-primary">Features</h5>
                <ul className="features-list">
                  <li className="feature-item">
                    <i className="fas fa-check text-primary me-3"></i>
                    Access to 5,000+ movies
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-primary me-3"></i>
                    HD quality streaming
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-primary me-3"></i>
                    Watch on 2 devices simultaneously
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-primary me-3"></i>
                    Basic movie recommendations
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-primary me-3"></i>
                    Standard customer support
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-primary me-3"></i>
                    Mobile app access
                  </li>
                </ul>
              </div>
              <div className="text-center mt-auto pt-4">
                <button className="btn btn-primary subscription-btn w-100">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Extra Plan */}
        <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="1000">
          <div className='subscription-card card border border-3 border-warning bg-dark h-100 d-flex flex-column'>
            <div className="card-header text-center py-4">
              <div className="badge badge-warning position-absolute">Best Value</div>
              <h4 className='text-uppercase h2 text-warning mb-3'>Extra</h4>
              <div className="pricing">
                <span className="display-4 fw-bold">$19.99</span>
                <span className="text-white-50 fs-5">/month</span>
              </div>
              <p className="text-white-50 mt-2">For serious movie enthusiasts</p>
            </div>
            <div className="card-body text-white p-4 d-flex flex-column flex-grow-1">
              <div className="features-section flex-grow-1">
                <h5 className="text-center mb-4 text-warning">Features</h5>
                <ul className="features-list">
                  <li className="feature-item">
                    <i className="fas fa-check text-warning me-3"></i>
                    Access to 15,000+ movies & series
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-warning me-3"></i>
                    4K Ultra HD streaming
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-warning me-3"></i>
                    Watch on 4 devices simultaneously
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-warning me-3"></i>
                    AI-powered recommendations
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-warning me-3"></i>
                    Download for offline viewing
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-warning me-3"></i>
                    Priority customer support
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-warning me-3"></i>
                    Early access to new releases
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-warning me-3"></i>
                    Custom watchlists & reviews
                  </li>
                </ul>
              </div>
              <div className="text-center mt-auto pt-4">
                <button className="btn btn-warning subscription-btn w-100">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Plan */}
        <div className="col-lg-4 col-md-8 col-12 offset-md-2 offset-lg-0 " data-aos="fade-left" data-aos-duration="1000">
          <div className='subscription-card card border border-3 border-success bg-dark h-100 d-flex flex-column'>
            <div className="card-header text-center py-4">
              <div className="badge badge-success position-absolute">Premium</div>
              <h4 className='text-uppercase h2 text-success mb-3'>Primary</h4>
              <div className="pricing">
                <span className="display-4 fw-bold">$29.99</span>
                <span className="text-white-50 fs-5">/month</span>
              </div>
              <p className="text-white-50 mt-2">Ultimate cinematic experience</p>
            </div>
            <div className="card-body text-white p-4 d-flex flex-column flex-grow-1">
              <div className="features-section flex-grow-1">
                <h5 className="text-center mb-4 text-success">Features</h5>
                <ul className="features-list">
                  <li className="feature-item">
                    <i className="fas fa-check text-success me-3"></i>
                    Unlimited access to entire library
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-success me-3"></i>
                    8K & Dolby Vision streaming
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-success me-3"></i>
                    Watch on unlimited devices
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-success me-3"></i>
                    Advanced AI recommendations
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-success me-3"></i>
                    Unlimited downloads
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-success me-3"></i>
                    24/7 VIP customer support
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-success me-3"></i>
                    Exclusive premieres & events
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-success me-3"></i>
                    Personalized movie curation
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-success me-3"></i>
                    Family sharing (up to 6 profiles)
                  </li>
                  <li className="feature-item">
                    <i className="fas fa-check text-success me-3"></i>
                    Ad-free experience
                  </li>
                </ul>
              </div>
              <div className="text-center mt-auto pt-4">
                <button className="btn btn-success subscription-btn w-100">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
            <div className="bg-dark rounded-4 p-4 border border-2 border-warning">
              <h4 className="text-warning mb-3">Why Choose CineVerse?</h4>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="text-white">
                    <i className="fas fa-shield-alt text-warning fs-3 mb-2"></i>
                    <h6>Secure & Private</h6>
                    <small className="text-white-50">Your data is protected with enterprise-grade security</small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-white">
                    <i className="fas fa-sync-alt text-warning fs-3 mb-2"></i>
                    <h6>Cancel Anytime</h6>
                    <small className="text-white-50">No long-term contracts, cancel whenever you want</small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="text-white">
                    <i className="fas fa-headset text-warning fs-3 mb-2"></i>
                    <h6>24/7 Support</h6>
                    <small className="text-white-50">Round-the-clock customer support for all users</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscriptions