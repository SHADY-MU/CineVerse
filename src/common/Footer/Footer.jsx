import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="Footer mt-5">
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-light mb-3">CineVerse</h5>
            <p className="text-light-50">
              Your ultimate destination for premium movie streaming. 
              Discover, watch, and enjoy the latest blockbusters and timeless classics.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-light mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light-50 text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light-50 text-decoration-none">About</a></li>
              <li><a href="#" className="text-light-50 text-decoration-none">Services</a></li>
              <li><a href="#" className="text-light-50 text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="text-light mb-3">Movie Categories</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light-50 text-decoration-none">Action</a></li>
              <li><a href="#" className="text-light-50 text-decoration-none">Drama</a></li>
              <li><a href="#" className="text-light-50 text-decoration-none">Sci-Fi</a></li>
              <li><a href="#" className="text-light-50 text-decoration-none">Crime</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="text-light mb-3">Contact Info</h6>
            <p className="text-light-50 mb-1">Email: info@cineverse.com</p>
            <p className="text-light-50 mb-1">Phone: +1 (555) 123-4567</p>
            <p className="text-light-50">Follow us on social media</p>
          </div>
        </div>
        <hr className="text-light-50" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-light-50 mb-0">
              &copy; 2024 CineVerse. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <p className='text-light-50 text-capitalize'>developed by <a href='https://mostaql.com/u/Yadash' target='_blank' style={{ cursor: "pointer" }} className=' text-decoration-underline fw-bolder text-warning '>shady Mustafa</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

