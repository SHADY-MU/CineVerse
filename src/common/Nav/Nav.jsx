import React, { useRef } from 'react'
import "./Nav.css"


export default function Nav() {

  const btn = useRef()

  function close(){
    btn.current.click()
  }
  

  return (
    <nav
      className="navbar navbar-expand-lg Nav px-3 py-1"
      >
    
        <div className="container-fluid ">

            <a className="navbar-brand fs-1 fw-bolder text-light"  href="#">Cine<span style={{color:"purple"}}>Verse</span> </a>

            <button className="navbar-toggler" ref={btn} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"      aria-expanded="false" aria-label="Toggle navigation"
            
            >
                    <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a onClick={close} className="border border-2 fs-3 px-4 mx-1 d-block nav-link text-light " aria-current="page" href="#Home">Home</a>
                    <a onClick={close} className="border border-2 fs-3 px-4 mx-1 d-block nav-link text-light" href="#About ">About</a>
                    <div className="dropdown">
                      <button className="border border-2 fs-3 px-4 mx-1 d-block nav-link text-light dropdown-toggle text-center mx-auto" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                      </button>
                      <ul className="dropdown-menu">
                        <li><a onClick={close} className="dropdown-item" href="#Subscriptions">Subscriptions</a></li>
                        <li><a onClick={close} className="dropdown-item" href="#Movies">Movies</a></li>
                      </ul>
                    </div>
                    <a onClick={close} className="border border-2 fs-3 px-4 mx-1 d-block nav-link text-light" href="#Contact">Contact</a>
                </div>
            </div>
        </div>
    </nav>
  )
}
