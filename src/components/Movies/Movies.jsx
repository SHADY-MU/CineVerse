import React, { useContext, useRef, useState, useEffect, useCallback, lazy } from 'react'
import './Movies.css'
import { displayContex } from '../../context/DisplayContext'
import { FaPlay, FaCalendarAlt, FaFilm, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ReactPaginate from 'react-paginate'

export default function Movies() {

  const {allMovies} = useContext(displayContex)
  const rowRef = useRef()
  const moviesSectionRef = useRef()
  const [slicedArry , setSlicedArry] = useState([]);
  const [isFading, setIsFading] = useState(false);

  const numOfMovies = 4

  const handlerPagination = useCallback((currentPage) => {
    if (!allMovies || allMovies.length === 0) return;
    let lastIndex = currentPage * numOfMovies
    let firstIndex = lastIndex - numOfMovies
    setSlicedArry(allMovies.slice(firstIndex , lastIndex))
  }, [allMovies, numOfMovies])

  function handlerPageChanged(data){
    let selectedPage = data.selected + 1;
    
    // Scroll to top of movies section smoothly
    if (moviesSectionRef.current) {
      const offsetTop = moviesSectionRef.current.offsetTop - 20; // Small offset from top
      window.scrollTo({ 
        top: offsetTop, 
        behavior: 'smooth'
      });
    }
    
    // Start fade out animation
    setIsFading(true);
    
    // After fade out completes, change content
    setTimeout(() => {
      handlerPagination(selectedPage);
      
      // Force reflow to ensure animation triggers
      if (rowRef.current) {
        rowRef.current.offsetHeight;
      }
      
      // Start fade in animation
      requestAnimationFrame(() => {
        setTimeout(() => {
          setIsFading(false);
        }, 10);
      });
    }, 300); // Match CSS fade-out duration
  }

  // Initialize first page when allMovies is loaded
  useEffect(() => {
    if (allMovies && allMovies.length > 0) {
      handlerPagination(1);
    }
  }, [allMovies, handlerPagination])

  return (
    <div className='Movies my-5 py-5' id='Movies' ref={moviesSectionRef}>
      <div className='container'>
        <div className="text-center mb-5">
          <h2 
            className='mb-4 h1 fw-bolder text-white text-capitalize text-center py-2' 
            style={{fontSize:"50px"}}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Explore Our <span style={{color:"#ffcc00"}}>Movie Collection</span>
          </h2>
          <p 
            className="lead text-white-50"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Discover amazing films from our extensive library
          </p>
        </div>
        {!allMovies || allMovies.length === 0 || slicedArry.length === 0 ?
              <div className="text-center text-white">
                <div className="loading-spinner">
                  <p className="fs-4">Loading movies...</p>
                </div>
              </div>
            :
              <div className={`row g-4 movies-grid ${isFading ? 'fade-out' : 'fade-in'}`} ref={rowRef}>
                {slicedArry.map((movie, index) =>{

                  return(
                  
                  <div 
                    className="col-lg-3 col-md-6 col-12 movie-item" 
                    key={`${movie.id || index}`}
                    style={{
                      animationDelay: isFading ? '0ms' : `${index * 50}ms`
                    }}
                  >
                    <div className="movie-card card h-100">
                      <div className="movie-poster-wrapper">
                        <img 
                          src={movie.poster_path || 'https://via.placeholder.com/300x450?text=No+Image'} 
                          className="movie-poster" 
                          alt={movie.original_title || movie.title}
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x450?text=No+Image'
                          }}
                        />
                        <div className="movie-overlay">
                          <button className="btn-play">
                            <FaPlay />
                          </button>
                        </div>
                      </div>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-white">{movie.original_title || movie.title}</h5>
                        <div className="movie-info mb-3">
                          <span className="movie-year">
                            <FaCalendarAlt className="me-2" />
                            {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                          </span>
                          <span className="movie-genre">
                            <FaFilm className="me-2" />
                            {Array.isArray(movie.genres) ? movie.genres.slice(0, 2).join(', ') : (movie.genres || 'N/A')}
                          </span>
                        </div>
                        <p className="card-text text-white-50 flex-grow-1">
                          {movie.overview || movie.description || 'No description available.'}
                        </p>
                        <button className="btn btn-warning movie-btn mt-auto">
                          start watch
                        </button>
                      </div>
                    </div>
                  </div>
                )})}
              </div>
        }
        {allMovies && allMovies.length > numOfMovies && (
          <div className='pagination-wrapper mt-5'>
            <ReactPaginate 
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                onPageChange={handlerPageChanged}
                pageCount={Math.ceil(allMovies.length / numOfMovies)}
          
                containerClassName='custom-pagination'
                activeClassName='active'
                disabledClassName='disabled'

                pageClassName='page-item'
                pageLinkClassName='page-link'

                previousClassName='page-item pagination-nav'
                previousLinkClassName='page-link pagination-link-nav'
                previousLabel={<FaChevronLeft />}

                nextClassName='page-item pagination-nav'
                nextLinkClassName='page-link pagination-link-nav'
                nextLabel={<FaChevronRight />}

                breakClassName='page-item'
                breakLinkClassName='page-link'
                breakLabel={<span className="pagination-break">...</span>}
            />
          </div>
        )}
      </div>
    </div>
  )
}
