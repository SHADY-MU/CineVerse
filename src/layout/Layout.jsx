import React, { lazy, Suspense } from 'react'
import "./Layout.css"
import Contact from '../pages/Contact/Contact'

const Nav = lazy(() => import('../common/Nav/Nav'))
const Home = lazy(() => import('../pages/Home/Home'))
const Footer = lazy(() => import('../common/Footer/Footer'))
const About = lazy(() => import('../pages/About/About'))
const Services = lazy(() => import('../pages/Services/Services'))

// Loading fallback component
const LoadingFallback = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
    <div className="spinner-border text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)

export default function Layout() {
  
  return (
    <div className='Layout'>
      <Suspense fallback={<LoadingFallback />}>
        <Nav />
      </Suspense>
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Home />
          <About/>
          <Services />
          <Contact/>
        </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  )
}
