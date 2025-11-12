import React from 'react'
import './Services.css'
import Subscriptions from '../../components/Subscriptions/Subscriptions'
import Movies from '../../components/Movies/Movies'

function Services() {
  return (
    <section className='Services my-5 container' id='Services'>
        <h2
        data-aos="fade-up"
        data-aos-duration="1000"
       className=' mb-4 h1 fw-bolder text-white text-capitalize text-center py-2 border-black' style={{fontSize:"50px"}}>Our <span style={{color:"yellow" }}>Services</span></h2>
        <Subscriptions />
        <Movies/>
    </section>
  )
}

export default Services