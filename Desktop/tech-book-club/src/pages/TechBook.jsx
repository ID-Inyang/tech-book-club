import React from 'react'
import assets from '../assets/assets'

const TechBook = () => {
  return (
    <>
      <div className='my-10 mx-20 p-15 border-2 border-gray-300 hero-container rounded-lg'>
        <nav className='flex items-center justify-between py-4'>
          <img src={assets.logo}/>
        </nav>
        <div className='flex space-x-4 mt-4 bg-pattern bg-cover rounded-lg'>
          <div className='hero-left flex flex-col md:w-1/2'>
            <h1 className='w-1xl text-gradient text-5xl md:text-5xl font-bold martian leading-[120%]'>
              Join the ultimate tech book club.
            </h1>
            <p className='text-[#062630] mt-8'>
              Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.
            </p>
            <div className='flex items-center justify-center'>
            <button class="flex align-middle justify-center mt-8 items-center w-100 px-6 py-3 border-2 border-slate-900 rounded-lg font-bold tracking-wide uppercase text-slate-900 hover:bg-slate-50 transition-colors">
            <span className='mr-2'>Review Membership Options</span>
            <img src={assets.arrowdown}/>
            </button>
          </div>
          <div className='testimonial mt-12 flex'>
            <div className="testimonial-image">
              <img src={assets.testimonial}/>
            </div>
            <div className='star-section flex-col'>
              <div className="star-image flex">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={assets.star} alt="star" />
                ))}
              </div>

              <div className="text">
                <p><span>200+</span> developers joined already</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
          <img src={assets.hero} alt="Hero Image" className='size-95 h-auto rounded-lg shadow-lg'/>
        </div>
      </div>
    </div>
  </>
  )
}

export default TechBook;