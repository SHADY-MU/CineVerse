import React, { useEffect } from 'react'
import { Swiper, SwiperSlide , useSwiper } from 'swiper/react';
import { EffectFade , Pagination , Navigation , Autoplay } from 'swiper/modules';
import { FaArrowAltCircleRight , FaArrowAltCircleLeft , FaFighterJet , FaBook  } from "react-icons/fa";
import { FaMasksTheater } from "react-icons/fa6";
import { MdLocalPolice , MdOutlineScience  } from "react-icons/md";



import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Header.css"


export default function Header() {



  return (
    <div className='Header container my-4 py-2 '>
      <h2
        data-aos="fade-down"
        data-aos-duration="1000"
       className=' mb-4 h1 fw-bolder text-white text-capitalize text-center py-2 border-black' style={{fontSize:"50px"}}>Our <span style={{color:"yellow" }}>Movies</span></h2>
      <div className='row g-5'>
        <div className="col-lg-8 col-md-12 "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            
            className='myswiper my-2 w-100 '
            modules={[EffectFade , Pagination , Navigation , Autoplay]}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            autoplay={{delay:1500, pauseOnMouseEnter:true}} 
            effect='fade'
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className='slide-card-1 text-center rounded rounded-2 px-3 py-4 d-flex flex-column align-items-center justify-content-between text-light ' style={{height:"400px"}}>
                  <h3>Oppenheimer</h3>
                  <p className=' lh-lg np mx-2 '>
                    Experience the gripping story of J. Robert Oppenheimer and the creation of the atomic bomb. A masterful biopic that explores the moral complexities of scientific discovery.
                  </p>
                  <a href="#" className='btn fw-bold btn-web text-capitalize py-1 px-5 fs-5' aria-label="Rent Oppenheimer movie">rent it</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide-card-2 text-center rounded rounded-2 px-3 py-4 d-flex flex-column align-items-center justify-content-between text-light ' style={{height:"400px"}}>
                  <h3>Batman</h3>
                  <p className=' lh-lg np mx-2 '>
                    Follow the Dark Knight as he faces his greatest challenge yet. A thrilling superhero epic that redefines the genre with stunning visuals and compelling storytelling.
                  </p>
                  <a href="#" className='btn fw-bold btn-web text-capitalize py-1 px-5 fs-5' aria-label="Rent Batman movie">rent it</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide-card-3 text-center rounded rounded-2 px-3 py-4 d-flex flex-column align-items-center justify-content-between text-light ' style={{height:"400px"}}>
                  <h3>Karate kid legends</h3>
                  <p className=' lh-lg np mx-2 '>
                    Join the legendary journey of martial arts mastery. An inspiring tale of determination, friendship, and the power of never giving up on your dreams.
                  </p>
                  <a href="#" className='btn fw-bold btn-web text-capitalize py-1 px-5 fs-5' aria-label="Rent Karate Kid Legends movie">rent it</a>
              </div>
            </SwiperSlide>

            <div className="custom-prev d-none d-sm-block"><FaArrowAltCircleLeft/></div>
            <div className="custom-next d-none d-sm-block"><FaArrowAltCircleRight/></div>
          </Swiper>
        </div>
        <div className="col-lg-4 col-md-12 d-lg-block d-flex flex-column flex-md-row gap-2"
          data-aos="fade-left"
          data-aos-duration="1000">
          <div className=' my-lg-3 new-1 text-center rounded rounded-2 px-3 py-4 d-flex flex-column align-items-center justify-content-between text-light ' style={{height:"250px"}}>
            <h4>SpiderMan</h4>
            <p className='np mx-2 ' style={{fontSize:"14px"}}>
              Swing into action with your friendly neighborhood hero in this spectacular adventure.
            </p>
            <a href="#" className='btn fw-bold btn-web text-capitalize py-1 px-4 ' aria-label="Rent SpiderMan movie">rent it</a>
          </div>
          <div className='new-2 text-center rounded rounded-2 px-3 py-4 d-flex flex-column align-items-center justify-content-between text-light ' style={{height:"250px"}}>
            <h4>Avatar</h4>
            <p className='np mx-2 ' style={{fontSize:"14px"}}>
              Journey to the mystical world of Pandora in this groundbreaking visual masterpiece.
            </p>
            <a href="#" className='btn fw-bold btn-web text-capitalize py-1 px-4 ' aria-label="Rent Avatar movie">rent it</a>
          </div>
        </div>
      </div>
      <div className='mt-5'
        data-aos="fade-down"
        data-aos-duration="1000">
        <h3 className='my-4 w-75 w-md-50 type mx-auto h1 fw-bolder text-center fst-italic'>What We Have</h3>
        <div className='movie-types flex justify-content-between border px-3 px-md-5 rounded rounded-2 border-black border-2 text-white'>
              <p className='fs-3 fw-bolder p-2' style={{WebkitTextStroke:"2px #3662D1"}}>Action <FaFighterJet/></p>
              <p className='fs-3 fw-bolder p-2' style={{WebkitTextStroke:"2px #3662D1"}}>Crime <MdLocalPolice/></p>
              <p className='fs-3 fw-bolder p-2' style={{WebkitTextStroke:"2px #000"}}>Drama <FaMasksTheater/></p>
              <p className='fs-3 fw-bolder p-2' style={{WebkitTextStroke:"2px #CF2F2F"}}>Sci-Fi <MdOutlineScience/></p>
              <p className='fs-3 fw-bolder p-2' style={{WebkitTextStroke:"2px #CF2F2F"}}>Other <FaBook/> </p>
        </div>
      </div>
    </div>
  )
}
