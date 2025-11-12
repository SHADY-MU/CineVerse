import React, { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaClock } from 'react-icons/fa'
import './Contact.css'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

function Contact() {

  

  const [errors , setErros] = useState({})
  const [success , setSuccess] = useState(false)

  const fNRef = useRef()
  const lNRef = useRef()
  const eRef = useRef()
  const pRef = useRef()
  const mRef = useRef()

  function handlerValue(e){
    
    e.preventDefault();

    const newErrors = {}

    const firstName = fNRef.current.value.trim()   
    const lastName = lNRef.current.value.trim() 
    const email = eRef.current.value.trim()   
    const phone = pRef.current.value.trim() 
    const message = mRef.current.value.trim()   

    if(!firstName || firstName.length < 3 ) newErrors.firstName = "Add Valiad First Name"
    if(!lastName || lastName.lenght < 3 ) newErrors.lastName = "Add Valiad Last Name"
    if (!email) newErrors.email = "Email is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email alengthddress."
    if(phone){
      if (phone && !/^\+?[0-9]{7,15}$/.test(phone))
        newErrors.phone = "Please enter a valid phone number."
    }
    if (!message) newErrors.message = "Message cannot be empty."


    if(Object.keys(newErrors).length > 0){
      setErros(newErrors)
      setSuccess(false);
      setTimeout(() => {
        setErros({})
      }, 5000);
      return
    }else{
      setErros("")
      setSuccess(true)
      Swal.fire({
        title: `Message sent `,
        text: `Your Mesaage is sent Mr.${lastName.toUpperCase()}`,
        icon: "success",
        draggable: true
      });
      fNRef.current.value = ""
      lNRef.current.value = ""
      eRef.current.value = ""
      pRef.current.value = ""
      mRef.current.value = ""
      return
    }
 }

    

  return (
    <section id='Contact' className='contact-section'>
      <div className='contact-wrapper'>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className='contact-title'
        >
          Contact With <span className='contact-title-highlight'>Us</span>
        </h2>
        <p 
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className='contact-subtitle'
        >
          Get in touch with us. We'd love to hear from you!
        </p>
        
        {/* Contact Information Cards - Full Width */}
        <div className='contact-info-section'>
          <div className='row g-3'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div 
                data-aos="fade-up"
                data-aos-duration="800"
                className='contact-info-card'
              >
                <div className='contact-icon-wrapper'>
                  <FaEnvelope className='contact-icon' />
                </div>
                <h3 className='contact-info-title'>Email</h3>
                <p className='contact-info-text'>info@cineverse.com</p>
                <p className='contact-info-text'>support@cineverse.com</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div 
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                className='contact-info-card'
              >
                <div className='contact-icon-wrapper'>
                  <FaPhone className='contact-icon' />
                </div>
                <h3 className='contact-info-title'>Phone</h3>
                <p className='contact-info-text'>+1 (555) 123-4567</p>
                <p className='contact-info-text'>+1 (555) 987-6543</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div 
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                className='contact-info-card'
              >
                <div className='contact-icon-wrapper'>
                  <FaMapMarkerAlt className='contact-icon' />
                </div>
                <h3 className='contact-info-title'>Address</h3>
                <p className='contact-info-text'>123 Movie Street</p>
                <p className='contact-info-text'>Entertainment City, EC 12345</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div 
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
                className='contact-info-card'
              >
                <div className='contact-icon-wrapper'>
                  <FaClock className='contact-icon' />
                </div>
                <h3 className='contact-info-title'>Working Hours</h3>
                <p className='contact-info-text'>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className='contact-info-text'>Sat - Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - Full Width */}
        <div className='contact-form-section'>
          <div className='contact-form-wrapper'>
            <form className='contact-form' onSubmit={handlerValue}>
              <div className='row g-3'>
                <div className='col-md-6 form-group-wrapper'>
                  <label htmlFor="firstName" className='contact-label'>First Name</label>
                  <input ref={fNRef}
                    type="text" 
                    className='contact-input' 
                    id="firstName" 
                    placeholder='First Name'
                  />
                  {errors.firstName? <p className="alert alert-danger my-2 " >{errors.firstName}</p> : ""}
                </div>
                <div className='col-md-6 form-group-wrapper'>
                  <label htmlFor="lastName" className='contact-label'>Last Name</label>
                  <input ref={lNRef}
                    type="text" 
                    className='contact-input' 
                    id="lastName" 
                    placeholder='Last Name'
                  />
                  {errors.lastName? <p className="alert alert-danger my-2 " >{errors.lastName}</p> : ""}
                </div>
                <div className='col-md-6 form-group-wrapper'>
                  <label htmlFor="email" className='contact-label'>
                    Email <span className='required-mark'>(Required)</span>
                  </label>
                  <input ref={eRef}
                    type="email" 
                    className='contact-input' 
                    id="email" 
                    placeholder='Email'
                  />
                  {errors.email? <p className="alert alert-danger my-2 " >{errors.email}</p> : ""}
                </div>
                <div className='col-md-6 form-group-wrapper'>
                  <label htmlFor="phone" className='contact-label'>
                    Phone <span className='optional-mark'>(Optional)</span>
                  </label>
                  <input ref={pRef}
                    type="tel" 
                    className='contact-input' 
                    id="phone" 
                    placeholder='Phone'
                  />
                  {errors.phone? <p className="alert alert-danger my-2 " >{errors.phone}</p> : ""}
                </div>
                <div className='col-md-12 form-group-wrapper'>
                  <label htmlFor="message" className='contact-label'>Message</label>
                  <textarea ref={mRef}
                    className='contact-textarea' 
                    id="message" 
                    placeholder='Write Your Message Here'
                    rows="4"
                  ></textarea>
                  {errors.message? <p className="alert alert-danger my-2 " >{errors.message}</p> : ""}
                </div>
                <div className='col-12 form-submit-wrapper'>
                  <button type="submit" className='contact-submit-btn'>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Social Media - Full Width */}
          <div className='row mt-4'>
            <div className='col-12'>
              <div 
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
                className='contact-social'
              >
                <h3 className='social-title'>Follow Us</h3>
                <div className='social-icons'>
                  <a href="#" className='social-icon' aria-label="Facebook">
                    <FaFacebook />
                  </a>
                  <a href="#" className='social-icon' aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className='social-icon' aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className='social-icon' aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact