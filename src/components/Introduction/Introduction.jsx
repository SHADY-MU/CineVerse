import React from 'react'
import "./Introduction.css"


function Introduction() {
  return (
    <div className='Introduction container my-5'>
        <div className="row g-3">
            <div className="col-lg-6 col-md-12">
                <div
                data-aos="fade-right"
                data-aos-duration="1000" 
                className='founder border text-white text-center border-3 border-warning rounded-4 px-3 py-2 d-flex flex-column justify-content-between align-items-center card-elevated'>
                    <div className='text-center py-3'>
                        <h3 className=' h1 text-white fw-bolder'>John C. Emmons</h3>
                        <p className='text-white-50 fs-5'>The Founder</p>
                    </div>
                    <div className='text-start px-4 px-md-5 intro-content'>
                        <p className=' lh-lg intro-paragraph'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui omnis ex cum rerum eius dolores dolorum animi amet. Quisquam eaque  totam adipisci? Labore animi, deleniti ut nihil neque quod.
                        </p>
                        <ul className='feature-list'>
                            <li>15+ years of industry leadership</li>
                            <li>Award-winning creative direction</li>
                            <li>Global partnerships and outreach</li>
                        </ul>
                        <p className=' lh-lg intro-paragraph'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus aspernatur et tenetur consequatur, ipsam odit quaerat numquam voluptatum commodi officia non deserunt saepe nisi architecto aliquam hic? Perspiciatis, dolor maiores?
                        </p>
                    </div>
                    <div className='flex-col gap-3 w-100 py-2'>
                        <a href="#Home" className='btn w-75 mx-auto fw-bold btn-web text-capitalize py-1 px-5 fs-5 '>Go To Home</a>
                        <a href="#About" className='btn w-75 mx-auto fw-bold btn-outline-web text-capitalize py-1 px-5 fs-5 '>Know more</a>
                    </div>                    
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div 
                data-aos="fade-left"
                data-aos-duration="1000" 
                className='cineverse border text-white text-center border-3 border-warning rounded-4 px-3 py-2 d-flex flex-column justify-content-between align-items-center card-elevated'>
                    <div className='text-center py-3'>
                        <h3 className=' h1 text-white fw-bolder'>CineVerse</h3>
                        <p className='text-white-50 fs-5'>Your Movie Hub</p>
                    </div>
                    <div className='text-start px-4 px-md-5 intro-content'>
                        <p className=' lh-lg intro-paragraph'>
                            Discover the latest blockbusters, timeless classics, and everything in between. From reviews to recommendations, we bring cinema closer to you.
                        </p>
                        <ul className='feature-list'>
                            <li>Curated lists and smart recommendations</li>
                            <li>Genre exploration made simple</li>
                            <li>Follow your favorite stars</li>
                        </ul>
                        <p className=' lh-lg intro-paragraph'>
                            Dive into curated lists, explore genres, and follow your favorite stars. CineVerse makes movie discovery effortless and fun.
                        </p>
                    </div>
                    <div className='flex-col gap-3 w-100 py-2'>
                        <a href="#Home" className='btn w-75 mx-auto fw-bold btn-web text-capitalize py-1 px-5 fs-5 '>Explore Movies</a>
                        <a href="#About" className='btn w-75 mx-auto fw-bold btn-outline-web text-capitalize py-1 px-5 fs-5 '>Read About Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introduction