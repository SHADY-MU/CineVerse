import React from 'react'
import './About.css'
import Introduction from '../../components/Introduction/Introduction'

function About() {
  return (
    <section className='About my-5' id='About'>
        <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className=' mb-4 h1 fw-bolder text-white text-capitalize text-center py-2 border-black' style={{fontSize:"50px"}}>About <span style={{color:"yellow" }}>Us</span></h2>
        <Introduction />
    </section>
  )
}

export default About