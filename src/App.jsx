import React, { useEffect } from 'react'
import Layout from './layout/Layout'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css"
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100
    })
  }, [])

  return (
    <div className='App'>
      
      <Layout />
    </div>
  )
}
